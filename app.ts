import { flaschenpost } from 'flaschenpost';
import { getApi } from './apis/getApi';
import http from 'http';
import { processenv } from 'processenv';

const logger = flaschenpost.getLogger();

const port = processenv('PORT', 3_000) as number;

const api = getApi();
const server = http.createServer(api);

server.listen(port, (): void => {
  logger.info('Server started.', { port });
});
