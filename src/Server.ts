import { Server, loadPackageDefinition } from '@grpc/grpc-js';
import { loadSync } from '@grpc/proto-loader';

import type { UntypedServiceImplementation, ServiceDefinition, ServerCredentials } from '@grpc/grpc-js';

interface GRPCServer extends Server {
  bindAndStart: (port: string, credentials: ServerCredentials) => Promise<number>;
}

export function createGRPCServer<T extends UntypedServiceImplementation>(protoPath: string, serviceName: string, implementation: T): GRPCServer {
  const definition = loadSync(protoPath);
  const proto = loadPackageDefinition(definition) as unknown as {[string: typeof serviceName]: {service: ServiceDefinition<T>}};

  const server = new Server();
  server.addService(proto[serviceName].service, implementation);

  (server as GRPCServer).bindAndStart = (port: string, credentials: ServerCredentials) => new Promise<number>((resolve, reject) => {
    server.bindAsync(port, credentials, (err, port) => {
      if (err) return reject(err);

      server.start();
      resolve(port);
    });
  });

  return server as GRPCServer;
}
