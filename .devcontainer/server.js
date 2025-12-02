const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('✅ Новый клиент подключен');
  ws.send('Добро пожаловать на WebSocket сервер!');
  
  ws.on('message', (data) => {
    console.log('📨 Получено:', data.toString());
    ws.send(`Эхо: ${data}`);
  });
});

console.log('🚀 WebSocket сервер запущен на порту 8080');
