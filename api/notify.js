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
    const { time, userAgent, referrer, language, screenResolution } = req.body;

    const payload = {
      embeds: [
        {
          title: '🚨 New Portfolio Visitor',
          color: 0x3498db,
          fields: [
            {
              name: '🕒 Date/Time',
              value: time || 'Unknown',
              inline: false,
            },
            {
              name: '🌐 User Agent/Device',
              value: userAgent || 'Unknown',
              inline: false,
            },
            {
              name: '🔗 Referrer',
              value: referrer || 'Direct / None',
              inline: false,
            },
            {
              name: '🗣️ Language',
              value: language || 'Unknown',
              inline: true,
            },
            {
              name: '🖥️ Screen Resolution',
              value: screenResolution || 'Unknown',
              inline: true,
            },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: 'Visitor Tracking System',
          },
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
