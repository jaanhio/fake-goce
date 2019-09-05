import express from 'express';
import { sendMessage } from './goceSlackClient';

const sentinel = express.Router();

sentinel.post('/sentinel', async (req, res) => {
  const { body } = req;

  if (body) {
    const { message } = body;
    sendMessage(message);
  }
  res.status(200).end();
});

export default sentinel;

