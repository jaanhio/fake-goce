import axios from 'axios';

const goceSlackHttpClient = axios.create({
  baseURL: 'https://hooks.slack.com/services/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',
  timeout: 1000,
  headers: {
    'Content--Type': 'application/json'
  }
});

export const sendMessage = () => {
  return axios({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: {
      "text": "hello"
    },
    url: 'https://hooks.slack.com/services/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'
  });
}

// curl -X POST -H 'Content-type: application/json' --data '{"text":"Hello, World!"}' https://hooks.slack.com/services/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
