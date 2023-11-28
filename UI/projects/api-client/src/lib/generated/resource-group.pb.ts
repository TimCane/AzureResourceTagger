/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';

/**
 * Message implementation for resource_group.GetResourceGroupsRequest
 */
export class GetResourceGroupsRequest implements GrpcMessage {
  static id = 'resource_group.GetResourceGroupsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetResourceGroupsRequest();
    GetResourceGroupsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetResourceGroupsRequest) {
    _instance.skip = _instance.skip || 0;
    _instance.take = _instance.take || 0;
    _instance.search = _instance.search || '';
    _instance.sortField = _instance.sortField || '';
    _instance.sortOrder = _instance.sortOrder || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetResourceGroupsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.skip = _reader.readInt32();
          break;
        case 2:
          _instance.take = _reader.readInt32();
          break;
        case 3:
          _instance.search = _reader.readString();
          break;
        case 4:
          _instance.sortField = _reader.readString();
          break;
        case 5:
          _instance.sortOrder = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    GetResourceGroupsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetResourceGroupsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.skip) {
      _writer.writeInt32(1, _instance.skip);
    }
    if (_instance.take) {
      _writer.writeInt32(2, _instance.take);
    }
    if (_instance.search) {
      _writer.writeString(3, _instance.search);
    }
    if (_instance.sortField) {
      _writer.writeString(4, _instance.sortField);
    }
    if (_instance.sortOrder) {
      _writer.writeInt32(5, _instance.sortOrder);
    }
  }

  private _skip: number;
  private _take: number;
  private _search: string;
  private _sortField: string;
  private _sortOrder: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetResourceGroupsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetResourceGroupsRequest.AsObject>) {
    _value = _value || {};
    this.skip = _value.skip;
    this.take = _value.take;
    this.search = _value.search;
    this.sortField = _value.sortField;
    this.sortOrder = _value.sortOrder;
    GetResourceGroupsRequest.refineValues(this);
  }
  get skip(): number {
    return this._skip;
  }
  set skip(value: number) {
    this._skip = value;
  }
  get take(): number {
    return this._take;
  }
  set take(value: number) {
    this._take = value;
  }
  get search(): string {
    return this._search;
  }
  set search(value: string) {
    this._search = value;
  }
  get sortField(): string {
    return this._sortField;
  }
  set sortField(value: string) {
    this._sortField = value;
  }
  get sortOrder(): number {
    return this._sortOrder;
  }
  set sortOrder(value: number) {
    this._sortOrder = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetResourceGroupsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetResourceGroupsRequest.AsObject {
    return {
      skip: this.skip,
      take: this.take,
      search: this.search,
      sortField: this.sortField,
      sortOrder: this.sortOrder
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetResourceGroupsRequest.AsProtobufJSON {
    return {
      skip: this.skip,
      take: this.take,
      search: this.search,
      sortField: this.sortField,
      sortOrder: this.sortOrder
    };
  }
}
export module GetResourceGroupsRequest {
  /**
   * Standard JavaScript object representation for GetResourceGroupsRequest
   */
  export interface AsObject {
    skip: number;
    take: number;
    search: string;
    sortField: string;
    sortOrder: number;
  }

  /**
   * Protobuf JSON representation for GetResourceGroupsRequest
   */
  export interface AsProtobufJSON {
    skip: number;
    take: number;
    search: string;
    sortField: string;
    sortOrder: number;
  }
}

/**
 * Message implementation for resource_group.GetResourceGroupsReply
 */
export class GetResourceGroupsReply implements GrpcMessage {
  static id = 'resource_group.GetResourceGroupsReply';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetResourceGroupsReply();
    GetResourceGroupsReply.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetResourceGroupsReply) {
    _instance.groups = _instance.groups || [];
    _instance.total = _instance.total || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetResourceGroupsReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new ResourceGroup();
          _reader.readMessage(
            messageInitializer1,
            ResourceGroup.deserializeBinaryFromReader
          );
          (_instance.groups = _instance.groups || []).push(messageInitializer1);
          break;
        case 2:
          _instance.total = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    GetResourceGroupsReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetResourceGroupsReply,
    _writer: BinaryWriter
  ) {
    if (_instance.groups && _instance.groups.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.groups as any,
        ResourceGroup.serializeBinaryToWriter
      );
    }
    if (_instance.total) {
      _writer.writeInt32(2, _instance.total);
    }
  }

  private _groups?: ResourceGroup[];
  private _total: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetResourceGroupsReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetResourceGroupsReply.AsObject>) {
    _value = _value || {};
    this.groups = (_value.groups || []).map(m => new ResourceGroup(m));
    this.total = _value.total;
    GetResourceGroupsReply.refineValues(this);
  }
  get groups(): ResourceGroup[] | undefined {
    return this._groups;
  }
  set groups(value: ResourceGroup[] | undefined) {
    this._groups = value;
  }
  get total(): number {
    return this._total;
  }
  set total(value: number) {
    this._total = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetResourceGroupsReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetResourceGroupsReply.AsObject {
    return {
      groups: (this.groups || []).map(m => m.toObject()),
      total: this.total
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetResourceGroupsReply.AsProtobufJSON {
    return {
      groups: (this.groups || []).map(m => m.toProtobufJSON(options)),
      total: this.total
    };
  }
}
export module GetResourceGroupsReply {
  /**
   * Standard JavaScript object representation for GetResourceGroupsReply
   */
  export interface AsObject {
    groups?: ResourceGroup.AsObject[];
    total: number;
  }

  /**
   * Protobuf JSON representation for GetResourceGroupsReply
   */
  export interface AsProtobufJSON {
    groups: ResourceGroup.AsProtobufJSON[] | null;
    total: number;
  }
}

/**
 * Message implementation for resource_group.GetResourceGroupRequest
 */
export class GetResourceGroupRequest implements GrpcMessage {
  static id = 'resource_group.GetResourceGroupRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetResourceGroupRequest();
    GetResourceGroupRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetResourceGroupRequest) {
    _instance.id = _instance.id || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetResourceGroupRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetResourceGroupRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetResourceGroupRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
  }

  private _id: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetResourceGroupRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetResourceGroupRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    GetResourceGroupRequest.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetResourceGroupRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetResourceGroupRequest.AsObject {
    return {
      id: this.id
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetResourceGroupRequest.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module GetResourceGroupRequest {
  /**
   * Standard JavaScript object representation for GetResourceGroupRequest
   */
  export interface AsObject {
    id: string;
  }

  /**
   * Protobuf JSON representation for GetResourceGroupRequest
   */
  export interface AsProtobufJSON {
    id: string;
  }
}

/**
 * Message implementation for resource_group.GetResourceGroupReply
 */
export class GetResourceGroupReply implements GrpcMessage {
  static id = 'resource_group.GetResourceGroupReply';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetResourceGroupReply();
    GetResourceGroupReply.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetResourceGroupReply) {
    _instance.group = _instance.group || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetResourceGroupReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.group = new ResourceGroup();
          _reader.readMessage(
            _instance.group,
            ResourceGroup.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetResourceGroupReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetResourceGroupReply,
    _writer: BinaryWriter
  ) {
    if (_instance.group) {
      _writer.writeMessage(
        1,
        _instance.group as any,
        ResourceGroup.serializeBinaryToWriter
      );
    }
  }

  private _group?: ResourceGroup;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetResourceGroupReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetResourceGroupReply.AsObject>) {
    _value = _value || {};
    this.group = _value.group ? new ResourceGroup(_value.group) : undefined;
    GetResourceGroupReply.refineValues(this);
  }
  get group(): ResourceGroup | undefined {
    return this._group;
  }
  set group(value: ResourceGroup | undefined) {
    this._group = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetResourceGroupReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetResourceGroupReply.AsObject {
    return {
      group: this.group ? this.group.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetResourceGroupReply.AsProtobufJSON {
    return {
      group: this.group ? this.group.toProtobufJSON(options) : null
    };
  }
}
export module GetResourceGroupReply {
  /**
   * Standard JavaScript object representation for GetResourceGroupReply
   */
  export interface AsObject {
    group?: ResourceGroup.AsObject;
  }

  /**
   * Protobuf JSON representation for GetResourceGroupReply
   */
  export interface AsProtobufJSON {
    group: ResourceGroup.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for resource_group.ResourceGroup
 */
export class ResourceGroup implements GrpcMessage {
  static id = 'resource_group.ResourceGroup';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ResourceGroup();
    ResourceGroup.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ResourceGroup) {
    _instance.id = _instance.id || '';
    _instance.name = _instance.name || '';
    _instance.location = _instance.location || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ResourceGroup,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.location = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ResourceGroup.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ResourceGroup,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.location) {
      _writer.writeString(3, _instance.location);
    }
  }

  private _id: string;
  private _name: string;
  private _location: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ResourceGroup to deeply clone from
   */
  constructor(_value?: RecursivePartial<ResourceGroup.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    this.location = _value.location;
    ResourceGroup.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get location(): string {
    return this._location;
  }
  set location(value: string) {
    this._location = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ResourceGroup.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ResourceGroup.AsObject {
    return {
      id: this.id,
      name: this.name,
      location: this.location
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ResourceGroup.AsProtobufJSON {
    return {
      id: this.id,
      name: this.name,
      location: this.location
    };
  }
}
export module ResourceGroup {
  /**
   * Standard JavaScript object representation for ResourceGroup
   */
  export interface AsObject {
    id: string;
    name: string;
    location: string;
  }

  /**
   * Protobuf JSON representation for ResourceGroup
   */
  export interface AsProtobufJSON {
    id: string;
    name: string;
    location: string;
  }
}
