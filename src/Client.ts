import { loadPackageDefinition } from '@grpc/grpc-js';
import { ServiceClientConstructor } from '@grpc/grpc-js/build/src/make-client';
import { loadSync } from '@grpc/proto-loader';

import type {Client, ChannelCredentials} from '@grpc/grpc-js';

export function createGRPCClient<T extends Client>(protoPath: string, serviceName: string, port: string, credentials: ChannelCredentials) {
  const definition = loadSync(protoPath);
  const proto = loadPackageDefinition(definition) as unknown as {[string: typeof serviceName]: ServiceClientConstructor};
  const client = new proto[serviceName](port, credentials);
  return client as unknown as T;
}
