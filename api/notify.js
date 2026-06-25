import { UAParser } from 'ua-parser-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('DISCORD_WEBHOOK_URL is not set.');
    return res.status(500).json({ error: 'Internal Server Error' });
  }

  try {
    const { time, timezone, userAgent, referrer, currentPath, language, screenResolution } = req.body;

    const parser = new UAParser(userAgent);
    const result = parser.getResult();
    
    const deviceVendor = result.device.vendor || '';
    const deviceType = result.device.type || 'desktop';
    
    let deviceModel = result.device.model || '';
    if (!deviceModel) {
      deviceModel = deviceType === 'desktop' ? 'Desktop / Laptop' : 'Unknown Model';
    }

    const fullDevice = (deviceVendor && result.device.model) ? `${deviceVendor} ${deviceModel}` : deviceModel;
    
    const osName = result.os.name || 'Unknown OS';
    const osVersion = result.os.version || '';
    const browserName = result.browser.name || 'Unknown Browser';

    const osString = osVersion ? `${osName} ${osVersion}` : osName;

    const payload = {
      embeds: [
        {
          author: {
            name: "Visitor Analytics Report",
            icon_url: "https://img.icons8.com/?size=100&id=XYUBfGv9SXGR&format=png&color=FFFFFF"
          },
          title: "Portfolio visitor detected!",
          description: `A new user has landed on ${(!currentPath || currentPath === '/') ? 'the homepage' : `\`${currentPath}\``}.`,
          color: 0x5865F2,
          thumbnail: {
            url: "https://img.icons8.com/?size=100&id=85146&format=png&color=FFFFFF"
          },
          fields: [
            {
              name: 'Device',
              value: `\`${fullDevice}\` | (${deviceType})`,
              inline: true,
            },
            {
              name: 'OS & Browser',
              value: `\`${osString}\` | \`${browserName}\``,
              inline: true,
            },
            {
              name: 'Screen Resolution',
              value: `\`${screenResolution || 'Unknown'}\``,
              inline: true,
            },
            {
              name: 'Referrer',
              value: referrer && referrer !== 'Direct / None' ? `[Link](${referrer})` : '`Direct / None`',
              inline: false,
            },
            {
              name: 'Language & Timezone',
              value: `\`${language || 'Unknown'}\` | \`${timezone || 'Unknown'}\``,
              inline: false,
            },
            {
              name: 'Local Time',
              value: `\`${time || 'Unknown'}\``,
              inline: false,
            }
          ],
        },
      ],
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Discord API returned ${response.status}`);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending notification to Discord:', error);
    return res.status(500).json({ error: 'Failed to send notification' });
  }
}
