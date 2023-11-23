/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './resource.pb';
import { GRPC_RESOURCES_CLIENT_SETTINGS } from './resource.pbconf';
/**
 * Service client implementation for resource.Resources
 */
@Injectable({ providedIn: 'any' })
export class ResourcesClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /resource.Resources/GetResources
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetResourcesReply>>
     */
    getResources: (
      requestData: thisProto.GetResourcesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetResourcesReply>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/resource.Resources/GetResources',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetResourcesRequest,
        responseClass: thisProto.GetResourcesReply
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_RESOURCES_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('resource.Resources', settings);
  }

  /**
   * Unary call @/resource.Resources/GetResources
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetResourcesReply>
   */
  getResources(
    requestData: thisProto.GetResourcesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetResourcesReply> {
    return this.$raw
      .getResources(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
