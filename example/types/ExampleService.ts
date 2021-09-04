// Original file: example/example.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CallReply as _CallReply, CallReply__Output as _CallReply__Output } from './CallReply';
import type { CallRequest as _CallRequest, CallRequest__Output as _CallRequest__Output } from './CallRequest';

export interface ExampleServiceClient extends grpc.Client {
  Call(argument: _CallRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _CallReply__Output) => void): grpc.ClientUnaryCall;
  Call(argument: _CallRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _CallReply__Output) => void): grpc.ClientUnaryCall;
  Call(argument: _CallRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _CallReply__Output) => void): grpc.ClientUnaryCall;
  Call(argument: _CallRequest, callback: (error?: grpc.ServiceError, result?: _CallReply__Output) => void): grpc.ClientUnaryCall;
  call(argument: _CallRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _CallReply__Output) => void): grpc.ClientUnaryCall;
  call(argument: _CallRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _CallReply__Output) => void): grpc.ClientUnaryCall;
  call(argument: _CallRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _CallReply__Output) => void): grpc.ClientUnaryCall;
  call(argument: _CallRequest, callback: (error?: grpc.ServiceError, result?: _CallReply__Output) => void): grpc.ClientUnaryCall;
  
}

export interface ExampleServiceHandlers extends grpc.UntypedServiceImplementation {
  Call: grpc.handleUnaryCall<_CallRequest__Output, _CallReply>;
  
}

export interface ExampleServiceDefinition extends grpc.ServiceDefinition {
  Call: MethodDefinition<_CallRequest, _CallReply, _CallRequest__Output, _CallReply__Output>
}
