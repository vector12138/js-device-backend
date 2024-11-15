const express = require('express');
const app = express();

// 中间件（解析 JSON 数据）
app.use(express.json());

// 基本路由
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
