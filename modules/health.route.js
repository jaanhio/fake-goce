import express from 'express';
import pkg from '../package.json';

const health = express.Router();

const defaultHealth = ['name', 'version'].reduce((acc, key) => {
  acc[key] = pkg[key];
  return acc;
}, {});

const healthValue = (query) =>
  Object.keys(query).reduce((acc, key) => ({ ...acc, [key]: values[key] }), defaultHealth);

health.get('/health', (req, res) => {
  res.json(defaultHealth);
});

export default health;
