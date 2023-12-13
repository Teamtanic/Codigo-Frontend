export interface DocumentRequest {
  documentTypeId: string;
  title: string;
  description: string;
  file: File;
  folderPath: string;
}

export interface DocumentResponse extends Node {
  document: {
    id: string;
    documentType: DocumentType;
    alfrescoId: string;
  };
}

export interface DocumentType {
  id: string;
  name: string;
  description: string;
}

interface User {
  displayName: string;
  id: string;
}

interface Content {
  mimeType: string;
  mimeTypeName: string;
  sizeInBytes: number;
  encoding: string;
}

interface Element {
  id: string;
  name: string;
  nodeType: string;
  aspectNames: string[];
}

interface Permission {
  authorityId: string;
  name: string;
  accessStatus: string;
}

interface Constraint {
  id: string;
  type: string;
  title: string;
  description: string;
  parameters: Record<string, unknown>;
}

interface DefinitionProperty {
  id: string;
  title: string;
  description: string;
  defaultValue: string;
  dataType: string;
  isMultiValued: boolean;
  isMandatory: boolean;
  isMandatoryEnforced: boolean;
  isProtected: boolean;
  constraints: Constraint[];
}

interface Path {
  elements: Element[];
  name: string;
  isComplete: boolean;
}

interface Permissions {
  table: string;
  isInheritanceEnabled: boolean;
  inherited: Permission[];
  locallySet: Permission[];
  settable: string[];
}

interface Definition {
  properties: DefinitionProperty[];
}

export interface Node {
  id: string;
  name: string;
  nodeType: string;
  isFolder: boolean;
  isFile: boolean;
  isLocked: boolean;
  modifiedAt: string;
  modifiedByUser: User;
  createdAt: string;
  createdByUser: User;
  parentId: string;
  isLink: boolean;
  isFavorite: boolean;
  isDirectLinkEnabled: boolean;
  content: Content;
  aspectNames: string[];
  properties: Record<string, unknown>;
  allowableOperations: string[];
  path: Path;
  permissions: Permissions;
  definition: Definition;
}
