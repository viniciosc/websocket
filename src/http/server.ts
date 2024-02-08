import fastify from 'fastify';
import cookie from '@fastify/cookie';
import websocket from '@fastify/websocket';

import { createPoll } from './routes/create-poll';
import { getPoll } from './routes/get-poll';
import { veteOnPoll } from './routes/vote-on-poll';
import { pollResults } from './ws/poll-results';

const app = fastify();

app.register(cookie, {
  secret: 'polls-app-nlw',
  hook: 'onRequest',
});

app.register(websocket);

app.register(createPoll);
app.register(getPoll);
app.register(veteOnPoll);
app.register(pollResults);

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!');
});
