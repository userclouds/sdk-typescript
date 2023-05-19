import { defaultLimit, paginationStart } from '../uc/pagination';
import UCObject, { UCObjectType } from './models/ucobject';
import Edge, { Attribute, EdgeType } from './models/edge';
import BaseClient from '../uc/baseclient';

class Client extends BaseClient {
  // objects
  async listObjects(
    startingAfter: string = paginationStart,
    limit = 100
  ): Promise<[UCObject[], boolean]> {
    return this.makePaginatedRequest<UCObject>(
      '/authz/objects',
      startingAfter,
      limit
    );
  }

  async createObject(
    id: string,
    typeId: string,
    alias = ''
  ): Promise<UCObject> {
    return this.makeRequest(
      '/authz/objects',
      'POST',
      undefined,
      JSON.stringify({
        id,
        type_id: typeId,
        alias,
      })
    );
  }

  async getObject(objectId: string): Promise<UCObject> {
    return this.makeRequest<UCObject>(`/authz/objects/${objectId}`);
  }

  async deleteObject(objectId: string): Promise<void> {
    return this.makeRequest<void>(`/authz/objects/${objectId}`, 'DELETE');
  }

  // edges
  async listEdges(
    startingAfter: string = paginationStart,
    limit = defaultLimit
  ): Promise<[Edge[], boolean]> {
    return this.makePaginatedRequest<Edge>(
      '/authz/edges',
      startingAfter,
      limit
    );
  }

  async listEdgesOnObject(
    objectID: string,
    startingAfter: string = paginationStart,
    limit = defaultLimit
  ): Promise<[Edge[], boolean]> {
    return this.makePaginatedRequest<Edge>(
      `/authz/objects/${objectID}/edges`,
      startingAfter,
      limit
    );
  }

  async createEdge(
    id: string,
    edgeTypeId: string,
    sourceObjectId: string,
    targetObjectId: string
  ): Promise<Edge> {
    return this.makeRequest(
      '/authz/edges',
      'POST',
      undefined,
      JSON.stringify({
        id,
        edge_type_id: edgeTypeId,
        source_object_id: sourceObjectId,
        target_object_id: targetObjectId,
      })
    );
  }

  async getEdge(edgeId: string): Promise<Edge> {
    return this.makeRequest<Edge>(`/authz/edges/${edgeId}`);
  }

  async deleteEdge(edgeId: string): Promise<void> {
    return this.makeRequest<void>(`/authz/edges/${edgeId}`, 'DELETE');
  }

  // object types
  async listObjectTypes(
    startingAfter: string = paginationStart,
    limit: number = defaultLimit
  ): Promise<[UCObjectType[], boolean]> {
    return this.makePaginatedRequest<UCObjectType>(
      '/authz/objecttypes',
      startingAfter,
      limit
    );
  }

  async createObjectType(id: string, typeName: string): Promise<UCObjectType> {
    return this.makeRequest(
      '/authz/objecttypes',
      'POST',
      undefined,
      JSON.stringify({
        id,
        type_name: typeName,
      })
    );
  }

  async getObjectType(typeId: string): Promise<UCObjectType> {
    return this.makeRequest<UCObjectType>(`/authz/objecttypes/${typeId}`);
  }

  async deleteObjectType(typeId: string): Promise<void> {
    return this.makeRequest<void>(`/authz/objecttypes/${typeId}`, 'DELETE');
  }

  // edge types
  async listEdgeTypes(
    startingAfter: string = paginationStart,
    limit: number = defaultLimit
  ): Promise<[EdgeType[], boolean]> {
    return this.makePaginatedRequest<EdgeType>(
      '/authz/edgetypes',
      startingAfter,
      limit
    );
  }

  async createEdgeType(
    id: string,
    typeName: string,
    sourceObjectTypeId: string,
    targetObjectTypeId: string,
    attributes: Attribute[]
  ): Promise<EdgeType> {
    return this.makeRequest(
      '/authz/edgetypes',
      'POST',
      undefined,
      JSON.stringify({
        id,
        type_name: typeName,
        source_object_type_id: sourceObjectTypeId,
        target_object_type_id: targetObjectTypeId,
        attributes,
      })
    );
  }

  async getEdgeType(typeId: string): Promise<EdgeType> {
    return this.makeRequest<EdgeType>(`/authz/edgetypes/${typeId}`);
  }

  async deleteEdgeType(typeId: string): Promise<void> {
    return this.makeRequest<void>(`/authz/edgetypes/${typeId}`, 'DELETE');
  }
}

export default Client;
