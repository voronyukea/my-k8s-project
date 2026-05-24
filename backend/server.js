const http = require('http');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    // Настройка CORS заголовков, чтобы фронтенд мог делать запросы к API
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    if (req.url === '/api/status' && req.method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify({
            status: "OK",
            message: "Бэкенд успешно отвечает из Kubernetes!",
            timestamp: new Date()
        }));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Маршрут не найден" }));
    }
});

server.listen(PORT, () => {
    console.log(`Сервер бэкенда запущен на порту ${PORT}`);
});