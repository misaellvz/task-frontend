import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ObjectId: any;
};

export type CreateTaskDto = {
  description: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTask: Task;
  deleteTask: Task;
  updateTask: Task;
  updateTaskCompleteStatus: Task;
};


export type MutationCreateTaskArgs = {
  input: CreateTaskDto;
};


export type MutationDeleteTaskArgs = {
  id: Scalars['ObjectId'];
};


export type MutationUpdateTaskArgs = {
  id: Scalars['ObjectId'];
  input: UpdateTaskDto;
};


export type MutationUpdateTaskCompleteStatusArgs = {
  id: Scalars['ObjectId'];
};

export type Query = {
  __typename?: 'Query';
  task: Task;
  tasks: Array<Task>;
};


export type QueryTaskArgs = {
  id: Scalars['ObjectId'];
};

export type Task = {
  __typename?: 'Task';
  _id: Scalars['ObjectId'];
  description: Scalars['String'];
  isCompleted: Scalars['Boolean'];
};

export type UpdateTaskDto = {
  description: Scalars['String'];
};

export type TaskFragment = { __typename?: 'Task', _id: any, description: string, isCompleted: boolean };

export type GetAllTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTasksQuery = { __typename?: 'Query', tasks: Array<{ __typename?: 'Task', _id: any, description: string, isCompleted: boolean }> };

export type GetTaskByIdQueryVariables = Exact<{
  id: Scalars['ObjectId'];
}>;


export type GetTaskByIdQuery = { __typename?: 'Query', task: { __typename?: 'Task', _id: any, description: string, isCompleted: boolean } };

export type CreateTaskMutationVariables = Exact<{
  data: CreateTaskDto;
}>;


export type CreateTaskMutation = { __typename?: 'Mutation', createTask: { __typename?: 'Task', _id: any, description: string, isCompleted: boolean } };

export type DeleteTaskMutationVariables = Exact<{
  id: Scalars['ObjectId'];
}>;


export type DeleteTaskMutation = { __typename?: 'Mutation', deleteTask: { __typename?: 'Task', _id: any, description: string, isCompleted: boolean } };

export type UpdateTaskMutationVariables = Exact<{
  id: Scalars['ObjectId'];
  data: UpdateTaskDto;
}>;


export type UpdateTaskMutation = { __typename?: 'Mutation', updateTask: { __typename?: 'Task', _id: any, description: string, isCompleted: boolean } };

export type UpdateTaskCompleteStatusMutationVariables = Exact<{
  id: Scalars['ObjectId'];
}>;


export type UpdateTaskCompleteStatusMutation = { __typename?: 'Mutation', updateTaskCompleteStatus: { __typename?: 'Task', _id: any, description: string, isCompleted: boolean } };

export const TaskFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Task"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Task"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]} as unknown as DocumentNode<TaskFragment, unknown>;
export const GetAllTasksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllTasks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tasks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Task"}}]}}]}},...TaskFragmentDoc.definitions]} as unknown as DocumentNode<GetAllTasksQuery, GetAllTasksQueryVariables>;
export const GetTaskByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTaskById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"task"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Task"}}]}}]}},...TaskFragmentDoc.definitions]} as unknown as DocumentNode<GetTaskByIdQuery, GetTaskByIdQueryVariables>;
export const CreateTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTaskDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTask"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Task"}}]}}]}},...TaskFragmentDoc.definitions]} as unknown as DocumentNode<CreateTaskMutation, CreateTaskMutationVariables>;
export const DeleteTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTask"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Task"}}]}}]}},...TaskFragmentDoc.definitions]} as unknown as DocumentNode<DeleteTaskMutation, DeleteTaskMutationVariables>;
export const UpdateTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTaskDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTask"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Task"}}]}}]}},...TaskFragmentDoc.definitions]} as unknown as DocumentNode<UpdateTaskMutation, UpdateTaskMutationVariables>;
export const UpdateTaskCompleteStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTaskCompleteStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTaskCompleteStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Task"}}]}}]}},...TaskFragmentDoc.definitions]} as unknown as DocumentNode<UpdateTaskCompleteStatusMutation, UpdateTaskCompleteStatusMutationVariables>;