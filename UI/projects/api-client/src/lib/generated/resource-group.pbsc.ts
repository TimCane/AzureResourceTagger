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
import * as thisProto from './resource-group.pb';
import { GRPC_RESOURCE_GROUPS_CLIENT_SETTINGS } from './resource-group.pbconf';
/**
 * Service client implementation for resource_group.ResourceGroups
 */
@Injectable({ providedIn: 'any' })
export class ResourceGroupsClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /resource_group.ResourceGroups/GetResourceGroups
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetResourceGroupsReply>>
     */
    getResourceGroups: (
      requestData: thisProto.GetResourceGroupsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetResourceGroupsReply>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/resource_group.ResourceGroups/GetResourceGroups',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetResourceGroupsRequest,
        responseClass: thisProto.GetResourceGroupsReply
      });
    },
    /**
     * Unary call: /resource_group.ResourceGroups/GetResourceGroup
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetResourceGroupReply>>
     */
    getResourceGroup: (
      requestData: thisProto.GetResourceGroupRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetResourceGroupReply>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/resource_group.ResourceGroups/GetResourceGroup',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetResourceGroupRequest,
        responseClass: thisProto.GetResourceGroupReply
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_RESOURCE_GROUPS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'resource_group.ResourceGroups',
      settings
    );
  }

  /**
   * Unary call @/resource_group.ResourceGroups/GetResourceGroups
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetResourceGroupsReply>
   */
  getResourceGroups(
    requestData: thisProto.GetResourceGroupsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetResourceGroupsReply> {
    return this.$raw
      .getResourceGroups(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/resource_group.ResourceGroups/GetResourceGroup
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetResourceGroupReply>
   */
  getResourceGroup(
    requestData: thisProto.GetResourceGroupRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetResourceGroupReply> {
    return this.$raw
      .getResourceGroup(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
