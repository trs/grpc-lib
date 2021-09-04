import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ExampleServiceClient as _ExampleServiceClient, ExampleServiceDefinition as _ExampleServiceDefinition } from './ExampleService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  CallReply: MessageTypeDefinition
  CallRequest: MessageTypeDefinition
  ExampleService: SubtypeConstructor<typeof grpc.Client, _ExampleServiceClient> & { service: _ExampleServiceDefinition }
}

