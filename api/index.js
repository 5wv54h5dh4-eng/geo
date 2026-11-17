export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body;
  const token = '9016650193:AAGzaSMvhfAd56jE5rx2Gf5fHcH1CDHVHGU';

  if (body.message) {
    const chatId = body.message.chat.id;
    const text = body.message.text;

    if (text === '/start') {
      const response = await fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: 'Привет! Бот успешно работает на Vercel! 🎉'
        })
      });
      return res.status(200).json({ status: 'ok', response: await response.json() });
    }
  }

  return res.status(200).json({ status: 'ok' });
};
