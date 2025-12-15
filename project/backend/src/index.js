import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('*', (_req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});

