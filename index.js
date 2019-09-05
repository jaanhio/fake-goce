const http = require('http');
import middleware from './middleware';
import util from 'util';



process.on('uncaughtException', e => {
  process.exit(1);
  console.error('Exiting due to unhandled exception: %j', util.inspect(e), () => {
    server.close();
  });
});

process.on('unhandledRejection', (reason, promise) => {
  process.exit(1);
  console.error('Exiting due to unhandled rejection: %s %j', reason, promise, () => {
    server.close();
  });
});

process.on('SIGTERM', () => {
  process.exit(1);
  console.info('SIGTERM received, exiting...', () => {
    server.close();
  });
});

process.on('SIGINT', () => {
  process.exit(1);
  console.info('SIGINT received, exiting...', () => {
    server.close();
  });
});

const port = 9005;
const server = http.createServer(middleware);

server.on('error', error => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      break;
    default:
      throw error;
  }
});

server.on('listening', () => {
  console.info(`app is now working on port ${port}`);
});

server.listen(port);