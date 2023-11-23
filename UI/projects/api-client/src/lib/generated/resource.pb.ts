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
 * Message implementation for resource.GetResourcesRequest
 */
export class GetResourcesRequest implements GrpcMessage {
  static id = 'resource.GetResourcesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetResourcesRequest();
    GetResourcesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetResourcesRequest) {
    _instance.id = _instance.id || '';
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
    _instance: GetResourcesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.skip = _reader.readInt32();
          break;
        case 3:
          _instance.take = _reader.readInt32();
          break;
        case 4:
          _instance.search = _reader.readString();
          break;
        case 5:
          _instance.sortField = _reader.readString();
          break;
        case 6:
          _instance.sortOrder = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    GetResourcesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetResourcesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.skip) {
      _writer.writeInt32(2, _instance.skip);
    }
    if (_instance.take) {
      _writer.writeInt32(3, _instance.take);
    }
    if (_instance.search) {
      _writer.writeString(4, _instance.search);
    }
    if (_instance.sortField) {
      _writer.writeString(5, _instance.sortField);
    }
    if (_instance.sortOrder) {
      _writer.writeInt32(6, _instance.sortOrder);
    }
  }

  private _id: string;
  private _skip: number;
  private _take: number;
  private _search: string;
  private _sortField: string;
  private _sortOrder: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetResourcesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetResourcesRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.skip = _value.skip;
    this.take = _value.take;
    this.search = _value.search;
    this.sortField = _value.sortField;
    this.sortOrder = _value.sortOrder;
    GetResourcesRequest.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
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
    GetResourcesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetResourcesRequest.AsObject {
    return {
      id: this.id,
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
  ): GetResourcesRequest.AsProtobufJSON {
    return {
      id: this.id,
      skip: this.skip,
      take: this.take,
      search: this.search,
      sortField: this.sortField,
      sortOrder: this.sortOrder
    };
  }
}
export module GetResourcesRequest {
  /**
   * Standard JavaScript object representation for GetResourcesRequest
   */
  export interface AsObject {
    id: string;
    skip: number;
    take: number;
    search: string;
    sortField: string;
    sortOrder: number;
  }

  /**
   * Protobuf JSON representation for GetResourcesRequest
   */
  export interface AsProtobufJSON {
    id: string;
    skip: number;
    take: number;
    search: string;
    sortField: string;
    sortOrder: number;
  }
}

/**
 * Message implementation for resource.GetResourcesReply
 */
export class GetResourcesReply implements GrpcMessage {
  static id = 'resource.GetResourcesReply';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetResourcesReply();
    GetResourcesReply.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetResourcesReply) {
    _instance.data = _instance.data || [];
    _instance.total = _instance.total || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetResourcesReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Resource();
          _reader.readMessage(
            messageInitializer1,
            Resource.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer1);
          break;
        case 2:
          _instance.total = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    GetResourcesReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetResourcesReply,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.data as any,
        Resource.serializeBinaryToWriter
      );
    }
    if (_instance.total) {
      _writer.writeInt32(2, _instance.total);
    }
  }

  private _data?: Resource[];
  private _total: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetResourcesReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetResourcesReply.AsObject>) {
    _value = _value || {};
    this.data = (_value.data || []).map(m => new Resource(m));
    this.total = _value.total;
    GetResourcesReply.refineValues(this);
  }
  get data(): Resource[] | undefined {
    return this._data;
  }
  set data(value: Resource[] | undefined) {
    this._data = value;
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
    GetResourcesReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetResourcesReply.AsObject {
    return {
      data: (this.data || []).map(m => m.toObject()),
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
  ): GetResourcesReply.AsProtobufJSON {
    return {
      data: (this.data || []).map(m => m.toProtobufJSON(options)),
      total: this.total
    };
  }
}
export module GetResourcesReply {
  /**
   * Standard JavaScript object representation for GetResourcesReply
   */
  export interface AsObject {
    data?: Resource.AsObject[];
    total: number;
  }

  /**
   * Protobuf JSON representation for GetResourcesReply
   */
  export interface AsProtobufJSON {
    data: Resource.AsProtobufJSON[] | null;
    total: number;
  }
}

/**
 * Message implementation for resource.Resource
 */
export class Resource implements GrpcMessage {
  static id = 'resource.Resource';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Resource();
    Resource.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Resource) {
    _instance.id = _instance.id || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Resource,
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

    Resource.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Resource, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
  }

  private _id: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Resource to deeply clone from
   */
  constructor(_value?: RecursivePartial<Resource.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    Resource.refineValues(this);
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
    Resource.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Resource.AsObject {
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
  ): Resource.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module Resource {
  /**
   * Standard JavaScript object representation for Resource
   */
  export interface AsObject {
    id: string;
  }

  /**
   * Protobuf JSON representation for Resource
   */
  export interface AsProtobufJSON {
    id: string;
  }
}
