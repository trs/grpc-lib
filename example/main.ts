import {ChannelCredentials, ServerCredentials} from '@grpc/grpc-js';

import { createGRPCServer } from '../src/Server';
import { createGRPCClient } from '../src/Client';

import type {ExampleServiceHandlers, ExampleServiceClient} from './types/ExampleService';

const server = createGRPCServer<ExampleServiceHandlers>(`${__dirname}/example.proto`, 'ExampleService', {
  Call(call, cb) {
    console.log('request', call.request);
    cb(null, {message: 'world'});
  }
});

const client = createGRPCClient<ExampleServiceClient>(`${__dirname}/example.proto`, 'ExampleService', 'localhost:44444', ChannelCredentials.createInsecure());

server.bindAndStart('0.0.0.0:44444', ServerCredentials.createInsecure())
  .then((port) => {
    console.log('Listening', port);

    client.Call({message: 'hello'}, (err, result) => {
      console.log('reply', result);
    });
  });
