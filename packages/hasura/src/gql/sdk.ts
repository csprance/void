import { GraphQLClient, RequestOptions } from "graphql-request";
import gql from "graphql-tag";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
type GraphQLClientRequestHeaders = RequestOptions["requestHeaders"];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  bigint: { input: any; output: any };
  citext: { input: any; output: any };
  jsonb: { input: any; output: any };
  timestamptz: { input: any; output: any };
  uuid: { input: any; output: any };
  vector: { input: any; output: any };
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

export type EmbedPromptOutput = {
  __typename?: "EmbedPromptOutput";
  embedding: Scalars["vector"]["output"];
  model: Scalars["String"]["output"];
  prompt: Scalars["String"]["output"];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Int"]["input"]>;
  _gt?: InputMaybe<Scalars["Int"]["input"]>;
  _gte?: InputMaybe<Scalars["Int"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Int"]["input"]>;
  _lte?: InputMaybe<Scalars["Int"]["input"]>;
  _neq?: InputMaybe<Scalars["Int"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type MlTagOutput = {
  __typename?: "MLTagOutput";
  asset_id: Scalars["uuid"]["output"];
};

/** An enum table of all the possible roles that a user can be */
export type Role = {
  __typename?: "Role";
  level: Scalars["String"]["output"];
  /** An array relationship */
  user_roles: Array<User_Role>;
  /** An aggregate relationship */
  user_roles_aggregate: User_Role_Aggregate;
  value: Scalars["String"]["output"];
};

/** An enum table of all the possible roles that a user can be */
export type RoleUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

/** An enum table of all the possible roles that a user can be */
export type RoleUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

/** aggregated selection of "Role" */
export type Role_Aggregate = {
  __typename?: "Role_aggregate";
  aggregate?: Maybe<Role_Aggregate_Fields>;
  nodes: Array<Role>;
};

/** aggregate fields of "Role" */
export type Role_Aggregate_Fields = {
  __typename?: "Role_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Role_Max_Fields>;
  min?: Maybe<Role_Min_Fields>;
};

/** aggregate fields of "Role" */
export type Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Role_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "Role". All fields are combined with a logical 'AND'. */
export type Role_Bool_Exp = {
  _and?: InputMaybe<Array<Role_Bool_Exp>>;
  _not?: InputMaybe<Role_Bool_Exp>;
  _or?: InputMaybe<Array<Role_Bool_Exp>>;
  level?: InputMaybe<String_Comparison_Exp>;
  user_roles?: InputMaybe<User_Role_Bool_Exp>;
  user_roles_aggregate?: InputMaybe<User_Role_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Role" */
export enum Role_Constraint {
  /** unique or primary key constraint on columns "value" */
  RolePkey = "Role_pkey",
}

export enum Role_Enum {
  /** 4 You can do everything but core system actions */
  Admin = "admin",
  /** 3 This is what a manager would be. They can do most things */
  Manager = "manager",
  /** 1 Everyone starts as public */
  Public = "public",
  /** 5 This is the super admin and everytime it's used it's logged */
  SuperAdmin = "superAdmin",
  /** 2 This is the base user role */
  User = "user",
}

/** Boolean expression to compare columns of type "Role_enum". All fields are combined with logical 'AND'. */
export type Role_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Role_Enum>;
  _in?: InputMaybe<Array<Role_Enum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Role_Enum>;
  _nin?: InputMaybe<Array<Role_Enum>>;
};

/** input type for inserting data into table "Role" */
export type Role_Insert_Input = {
  level?: InputMaybe<Scalars["String"]["input"]>;
  user_roles?: InputMaybe<User_Role_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Role_Max_Fields = {
  __typename?: "Role_max_fields";
  level?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Role_Min_Fields = {
  __typename?: "Role_min_fields";
  level?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "Role" */
export type Role_Mutation_Response = {
  __typename?: "Role_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Role>;
};

/** input type for inserting object relation for remote table "Role" */
export type Role_Obj_Rel_Insert_Input = {
  data: Role_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Role_On_Conflict>;
};

/** on_conflict condition type for table "Role" */
export type Role_On_Conflict = {
  constraint: Role_Constraint;
  update_columns?: Array<Role_Update_Column>;
  where?: InputMaybe<Role_Bool_Exp>;
};

/** Ordering options when selecting data from "Role". */
export type Role_Order_By = {
  level?: InputMaybe<Order_By>;
  user_roles_aggregate?: InputMaybe<User_Role_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Role */
export type Role_Pk_Columns_Input = {
  value: Scalars["String"]["input"];
};

/** select columns of table "Role" */
export enum Role_Select_Column {
  /** column name */
  Level = "level",
  /** column name */
  Value = "value",
}

/** input type for updating data in table "Role" */
export type Role_Set_Input = {
  level?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "Role" */
export type Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Role_Stream_Cursor_Value_Input = {
  level?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "Role" */
export enum Role_Update_Column {
  /** column name */
  Level = "level",
  /** column name */
  Value = "value",
}

export type Role_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Role_Set_Input>;
  /** filter the rows which have to be updated */
  where: Role_Bool_Exp;
};

export type StopSyncOutput = {
  __typename?: "StopSyncOutput";
  message: Scalars["String"]["output"];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]["input"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]["input"]>;
  _lt?: InputMaybe<Scalars["String"]["input"]>;
  _lte?: InputMaybe<Scalars["String"]["input"]>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]["input"]>;
};

export type SyncResponse = {
  __typename?: "SyncResponse";
  message?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
};

export type VersionOutput = {
  __typename?: "VersionOutput";
  /** The version of the backend */
  version: Scalars["String"]["output"];
};

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: "accounts";
  access_token?: Maybe<Scalars["String"]["output"]>;
  expires_at?: Maybe<Scalars["bigint"]["output"]>;
  id: Scalars["uuid"]["output"];
  id_token?: Maybe<Scalars["String"]["output"]>;
  oauth_token?: Maybe<Scalars["String"]["output"]>;
  oauth_token_secret?: Maybe<Scalars["String"]["output"]>;
  provider: Scalars["String"]["output"];
  providerAccountId: Scalars["String"]["output"];
  refresh_token?: Maybe<Scalars["String"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["bigint"]["output"]>;
  scope?: Maybe<Scalars["String"]["output"]>;
  session_state?: Maybe<Scalars["String"]["output"]>;
  token_type?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
  /** An object relationship */
  user: User;
  userId: Scalars["uuid"]["output"];
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: "accounts_aggregate";
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

export type Accounts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Accounts_Aggregate_Bool_Exp_Count>;
};

export type Accounts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Accounts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: "accounts_aggregate_fields";
  avg?: Maybe<Accounts_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
  stddev?: Maybe<Accounts_Stddev_Fields>;
  stddev_pop?: Maybe<Accounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Accounts_Stddev_Samp_Fields>;
  sum?: Maybe<Accounts_Sum_Fields>;
  var_pop?: Maybe<Accounts_Var_Pop_Fields>;
  var_samp?: Maybe<Accounts_Var_Samp_Fields>;
  variance?: Maybe<Accounts_Variance_Fields>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "accounts" */
export type Accounts_Aggregate_Order_By = {
  avg?: InputMaybe<Accounts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Accounts_Max_Order_By>;
  min?: InputMaybe<Accounts_Min_Order_By>;
  stddev?: InputMaybe<Accounts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Accounts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Accounts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Accounts_Sum_Order_By>;
  var_pop?: InputMaybe<Accounts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Accounts_Var_Samp_Order_By>;
  variance?: InputMaybe<Accounts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "accounts" */
export type Accounts_Arr_Rel_Insert_Input = {
  data: Array<Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** aggregate avg on columns */
export type Accounts_Avg_Fields = {
  __typename?: "accounts_avg_fields";
  expires_at?: Maybe<Scalars["Float"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "accounts" */
export type Accounts_Avg_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>;
  _not?: InputMaybe<Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>;
  access_token?: InputMaybe<String_Comparison_Exp>;
  expires_at?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  id_token?: InputMaybe<String_Comparison_Exp>;
  oauth_token?: InputMaybe<String_Comparison_Exp>;
  oauth_token_secret?: InputMaybe<String_Comparison_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
  providerAccountId?: InputMaybe<String_Comparison_Exp>;
  refresh_token?: InputMaybe<String_Comparison_Exp>;
  refresh_token_expires_in?: InputMaybe<Bigint_Comparison_Exp>;
  scope?: InputMaybe<String_Comparison_Exp>;
  session_state?: InputMaybe<String_Comparison_Exp>;
  token_type?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountsPkey = "accounts_pkey",
}

/** input type for incrementing numeric columns in table "accounts" */
export type Accounts_Inc_Input = {
  expires_at?: InputMaybe<Scalars["bigint"]["input"]>;
  refresh_token_expires_in?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  access_token?: InputMaybe<Scalars["String"]["input"]>;
  expires_at?: InputMaybe<Scalars["bigint"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  id_token?: InputMaybe<Scalars["String"]["input"]>;
  oauth_token?: InputMaybe<Scalars["String"]["input"]>;
  oauth_token_secret?: InputMaybe<Scalars["String"]["input"]>;
  provider?: InputMaybe<Scalars["String"]["input"]>;
  providerAccountId?: InputMaybe<Scalars["String"]["input"]>;
  refresh_token?: InputMaybe<Scalars["String"]["input"]>;
  refresh_token_expires_in?: InputMaybe<Scalars["bigint"]["input"]>;
  scope?: InputMaybe<Scalars["String"]["input"]>;
  session_state?: InputMaybe<Scalars["String"]["input"]>;
  token_type?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: "accounts_max_fields";
  access_token?: Maybe<Scalars["String"]["output"]>;
  expires_at?: Maybe<Scalars["bigint"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  id_token?: Maybe<Scalars["String"]["output"]>;
  oauth_token?: Maybe<Scalars["String"]["output"]>;
  oauth_token_secret?: Maybe<Scalars["String"]["output"]>;
  provider?: Maybe<Scalars["String"]["output"]>;
  providerAccountId?: Maybe<Scalars["String"]["output"]>;
  refresh_token?: Maybe<Scalars["String"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["bigint"]["output"]>;
  scope?: Maybe<Scalars["String"]["output"]>;
  session_state?: Maybe<Scalars["String"]["output"]>;
  token_type?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "accounts" */
export type Accounts_Max_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: "accounts_min_fields";
  access_token?: Maybe<Scalars["String"]["output"]>;
  expires_at?: Maybe<Scalars["bigint"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  id_token?: Maybe<Scalars["String"]["output"]>;
  oauth_token?: Maybe<Scalars["String"]["output"]>;
  oauth_token_secret?: Maybe<Scalars["String"]["output"]>;
  provider?: Maybe<Scalars["String"]["output"]>;
  providerAccountId?: Maybe<Scalars["String"]["output"]>;
  refresh_token?: Maybe<Scalars["String"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["bigint"]["output"]>;
  scope?: Maybe<Scalars["String"]["output"]>;
  session_state?: Maybe<Scalars["String"]["output"]>;
  token_type?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "accounts" */
export type Accounts_Min_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: "accounts_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** on_conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns?: Array<Accounts_Update_Column>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AccessToken = "access_token",
  /** column name */
  ExpiresAt = "expires_at",
  /** column name */
  Id = "id",
  /** column name */
  IdToken = "id_token",
  /** column name */
  OauthToken = "oauth_token",
  /** column name */
  OauthTokenSecret = "oauth_token_secret",
  /** column name */
  Provider = "provider",
  /** column name */
  ProviderAccountId = "providerAccountId",
  /** column name */
  RefreshToken = "refresh_token",
  /** column name */
  RefreshTokenExpiresIn = "refresh_token_expires_in",
  /** column name */
  Scope = "scope",
  /** column name */
  SessionState = "session_state",
  /** column name */
  TokenType = "token_type",
  /** column name */
  Type = "type",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  access_token?: InputMaybe<Scalars["String"]["input"]>;
  expires_at?: InputMaybe<Scalars["bigint"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  id_token?: InputMaybe<Scalars["String"]["input"]>;
  oauth_token?: InputMaybe<Scalars["String"]["input"]>;
  oauth_token_secret?: InputMaybe<Scalars["String"]["input"]>;
  provider?: InputMaybe<Scalars["String"]["input"]>;
  providerAccountId?: InputMaybe<Scalars["String"]["input"]>;
  refresh_token?: InputMaybe<Scalars["String"]["input"]>;
  refresh_token_expires_in?: InputMaybe<Scalars["bigint"]["input"]>;
  scope?: InputMaybe<Scalars["String"]["input"]>;
  session_state?: InputMaybe<Scalars["String"]["input"]>;
  token_type?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate stddev on columns */
export type Accounts_Stddev_Fields = {
  __typename?: "accounts_stddev_fields";
  expires_at?: Maybe<Scalars["Float"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "accounts" */
export type Accounts_Stddev_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Accounts_Stddev_Pop_Fields = {
  __typename?: "accounts_stddev_pop_fields";
  expires_at?: Maybe<Scalars["Float"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "accounts" */
export type Accounts_Stddev_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Accounts_Stddev_Samp_Fields = {
  __typename?: "accounts_stddev_samp_fields";
  expires_at?: Maybe<Scalars["Float"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "accounts" */
export type Accounts_Stddev_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "accounts" */
export type Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Accounts_Stream_Cursor_Value_Input = {
  access_token?: InputMaybe<Scalars["String"]["input"]>;
  expires_at?: InputMaybe<Scalars["bigint"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  id_token?: InputMaybe<Scalars["String"]["input"]>;
  oauth_token?: InputMaybe<Scalars["String"]["input"]>;
  oauth_token_secret?: InputMaybe<Scalars["String"]["input"]>;
  provider?: InputMaybe<Scalars["String"]["input"]>;
  providerAccountId?: InputMaybe<Scalars["String"]["input"]>;
  refresh_token?: InputMaybe<Scalars["String"]["input"]>;
  refresh_token_expires_in?: InputMaybe<Scalars["bigint"]["input"]>;
  scope?: InputMaybe<Scalars["String"]["input"]>;
  session_state?: InputMaybe<Scalars["String"]["input"]>;
  token_type?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate sum on columns */
export type Accounts_Sum_Fields = {
  __typename?: "accounts_sum_fields";
  expires_at?: Maybe<Scalars["bigint"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by sum() on columns of table "accounts" */
export type Accounts_Sum_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  AccessToken = "access_token",
  /** column name */
  ExpiresAt = "expires_at",
  /** column name */
  Id = "id",
  /** column name */
  IdToken = "id_token",
  /** column name */
  OauthToken = "oauth_token",
  /** column name */
  OauthTokenSecret = "oauth_token_secret",
  /** column name */
  Provider = "provider",
  /** column name */
  ProviderAccountId = "providerAccountId",
  /** column name */
  RefreshToken = "refresh_token",
  /** column name */
  RefreshTokenExpiresIn = "refresh_token_expires_in",
  /** column name */
  Scope = "scope",
  /** column name */
  SessionState = "session_state",
  /** column name */
  TokenType = "token_type",
  /** column name */
  Type = "type",
  /** column name */
  UserId = "userId",
}

export type Accounts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Accounts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Accounts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Accounts_Var_Pop_Fields = {
  __typename?: "accounts_var_pop_fields";
  expires_at?: Maybe<Scalars["Float"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "accounts" */
export type Accounts_Var_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Accounts_Var_Samp_Fields = {
  __typename?: "accounts_var_samp_fields";
  expires_at?: Maybe<Scalars["Float"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "accounts" */
export type Accounts_Var_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Accounts_Variance_Fields = {
  __typename?: "accounts_variance_fields";
  expires_at?: Maybe<Scalars["Float"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "accounts" */
export type Accounts_Variance_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["bigint"]["input"]>;
  _gt?: InputMaybe<Scalars["bigint"]["input"]>;
  _gte?: InputMaybe<Scalars["bigint"]["input"]>;
  _in?: InputMaybe<Array<Scalars["bigint"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["bigint"]["input"]>;
  _lte?: InputMaybe<Scalars["bigint"]["input"]>;
  _neq?: InputMaybe<Scalars["bigint"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["bigint"]["input"]>>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["citext"]["input"]>;
  _gt?: InputMaybe<Scalars["citext"]["input"]>;
  _gte?: InputMaybe<Scalars["citext"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["citext"]["input"]>;
  _in?: InputMaybe<Array<Scalars["citext"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["citext"]["input"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["citext"]["input"]>;
  _lt?: InputMaybe<Scalars["citext"]["input"]>;
  _lte?: InputMaybe<Scalars["citext"]["input"]>;
  _neq?: InputMaybe<Scalars["citext"]["input"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["citext"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["citext"]["input"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["citext"]["input"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["citext"]["input"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["citext"]["input"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["citext"]["input"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["citext"]["input"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["citext"]["input"]>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** columns and relationships of "flat_settings" */
export type Flat_Settings = {
  __typename?: "flat_settings";
  settings?: Maybe<Scalars["jsonb"]["output"]>;
};

/** columns and relationships of "flat_settings" */
export type Flat_SettingsSettingsArgs = {
  path?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregated selection of "flat_settings" */
export type Flat_Settings_Aggregate = {
  __typename?: "flat_settings_aggregate";
  aggregate?: Maybe<Flat_Settings_Aggregate_Fields>;
  nodes: Array<Flat_Settings>;
};

/** aggregate fields of "flat_settings" */
export type Flat_Settings_Aggregate_Fields = {
  __typename?: "flat_settings_aggregate_fields";
  count: Scalars["Int"]["output"];
};

/** aggregate fields of "flat_settings" */
export type Flat_Settings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Flat_Settings_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "flat_settings". All fields are combined with a logical 'AND'. */
export type Flat_Settings_Bool_Exp = {
  _and?: InputMaybe<Array<Flat_Settings_Bool_Exp>>;
  _not?: InputMaybe<Flat_Settings_Bool_Exp>;
  _or?: InputMaybe<Array<Flat_Settings_Bool_Exp>>;
  settings?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** Ordering options when selecting data from "flat_settings". */
export type Flat_Settings_Order_By = {
  settings?: InputMaybe<Order_By>;
};

/** select columns of table "flat_settings" */
export enum Flat_Settings_Select_Column {
  /** column name */
  Settings = "settings",
}

/** Streaming cursor of the table "flat_settings" */
export type Flat_Settings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Flat_Settings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Flat_Settings_Stream_Cursor_Value_Input = {
  settings?: InputMaybe<Scalars["jsonb"]["input"]>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars["jsonb"]["input"]>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars["jsonb"]["input"]>;
  _eq?: InputMaybe<Scalars["jsonb"]["input"]>;
  _gt?: InputMaybe<Scalars["jsonb"]["input"]>;
  _gte?: InputMaybe<Scalars["jsonb"]["input"]>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars["String"]["input"]>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _in?: InputMaybe<Array<Scalars["jsonb"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["jsonb"]["input"]>;
  _lte?: InputMaybe<Scalars["jsonb"]["input"]>;
  _neq?: InputMaybe<Scalars["jsonb"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["jsonb"]["input"]>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "Role" */
  delete_Role?: Maybe<Role_Mutation_Response>;
  /** delete single row from the table: "Role" */
  delete_Role_by_pk?: Maybe<Role>;
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "sessions" */
  delete_sessions?: Maybe<Sessions_Mutation_Response>;
  /** delete single row from the table: "sessions" */
  delete_sessions_by_pk?: Maybe<Sessions>;
  /** delete data from the table: "settings" */
  delete_settings?: Maybe<Settings_Mutation_Response>;
  /** delete single row from the table: "settings" */
  delete_settings_by_pk?: Maybe<Settings>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_role" */
  delete_user_role?: Maybe<User_Role_Mutation_Response>;
  /** delete single row from the table: "user_role" */
  delete_user_role_by_pk?: Maybe<User_Role>;
  /** delete data from the table: "verification_tokens" */
  delete_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** delete single row from the table: "verification_tokens" */
  delete_verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** Given a prompt and a model generate and return an embedding for that */
  embed_prompt?: Maybe<EmbedPromptOutput>;
  /** insert data into the table: "Role" */
  insert_Role?: Maybe<Role_Mutation_Response>;
  /** insert a single row into the table: "Role" */
  insert_Role_one?: Maybe<Role>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "sessions" */
  insert_sessions?: Maybe<Sessions_Mutation_Response>;
  /** insert a single row into the table: "sessions" */
  insert_sessions_one?: Maybe<Sessions>;
  /** insert data into the table: "settings" */
  insert_settings?: Maybe<Settings_Mutation_Response>;
  /** insert a single row into the table: "settings" */
  insert_settings_one?: Maybe<Settings>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "user_role" */
  insert_user_role?: Maybe<User_Role_Mutation_Response>;
  /** insert a single row into the table: "user_role" */
  insert_user_role_one?: Maybe<User_Role>;
  /** insert data into the table: "verification_tokens" */
  insert_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** insert a single row into the table: "verification_tokens" */
  insert_verification_tokens_one?: Maybe<Verification_Tokens>;
  /** Start the processing of tags via machine learning ollama multi modal vision model for assets provided */
  ml_tag_batch: Scalars["String"]["output"];
  /** Generate ML Tags for a single asset */
  ml_tag_single?: Maybe<MlTagOutput>;
  /** Stops syncing a storage point by name */
  stop_sync_storage_point?: Maybe<StopSyncOutput>;
  sync_storage_point?: Maybe<SyncResponse>;
  /** update data of the table: "Role" */
  update_Role?: Maybe<Role_Mutation_Response>;
  /** update single row of the table: "Role" */
  update_Role_by_pk?: Maybe<Role>;
  /** update multiples rows of table: "Role" */
  update_Role_many?: Maybe<Array<Maybe<Role_Mutation_Response>>>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update multiples rows of table: "accounts" */
  update_accounts_many?: Maybe<Array<Maybe<Accounts_Mutation_Response>>>;
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<Sessions_Mutation_Response>;
  /** update single row of the table: "sessions" */
  update_sessions_by_pk?: Maybe<Sessions>;
  /** update multiples rows of table: "sessions" */
  update_sessions_many?: Maybe<Array<Maybe<Sessions_Mutation_Response>>>;
  /** update data of the table: "settings" */
  update_settings?: Maybe<Settings_Mutation_Response>;
  /** update single row of the table: "settings" */
  update_settings_by_pk?: Maybe<Settings>;
  /** update multiples rows of table: "settings" */
  update_settings_many?: Maybe<Array<Maybe<Settings_Mutation_Response>>>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
  /** update data of the table: "user_role" */
  update_user_role?: Maybe<User_Role_Mutation_Response>;
  /** update single row of the table: "user_role" */
  update_user_role_by_pk?: Maybe<User_Role>;
  /** update multiples rows of table: "user_role" */
  update_user_role_many?: Maybe<Array<Maybe<User_Role_Mutation_Response>>>;
  /** update data of the table: "verification_tokens" */
  update_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** update single row of the table: "verification_tokens" */
  update_verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** update multiples rows of table: "verification_tokens" */
  update_verification_tokens_many?: Maybe<
    Array<Maybe<Verification_Tokens_Mutation_Response>>
  >;
};

/** mutation root */
export type Mutation_RootDelete_RoleArgs = {
  where: Role_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Role_By_PkArgs = {
  value: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_SessionsArgs = {
  where: Sessions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Sessions_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_SettingsArgs = {
  where: Settings_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Settings_By_PkArgs = {
  name: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_User_RoleArgs = {
  where: User_Role_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_Role_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Verification_TokensArgs = {
  where: Verification_Tokens_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Verification_Tokens_By_PkArgs = {
  token: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootEmbed_PromptArgs = {
  model?: InputMaybe<Scalars["String"]["input"]>;
  prompt: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootInsert_RoleArgs = {
  objects: Array<Role_Insert_Input>;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Role_OneArgs = {
  object: Role_Insert_Input;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_SessionsArgs = {
  objects: Array<Sessions_Insert_Input>;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Sessions_OneArgs = {
  object: Sessions_Insert_Input;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_SettingsArgs = {
  objects: Array<Settings_Insert_Input>;
  on_conflict?: InputMaybe<Settings_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Settings_OneArgs = {
  object: Settings_Insert_Input;
  on_conflict?: InputMaybe<Settings_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_RoleArgs = {
  objects: Array<User_Role_Insert_Input>;
  on_conflict?: InputMaybe<User_Role_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Role_OneArgs = {
  object: User_Role_Insert_Input;
  on_conflict?: InputMaybe<User_Role_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Verification_TokensArgs = {
  objects: Array<Verification_Tokens_Insert_Input>;
  on_conflict?: InputMaybe<Verification_Tokens_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Verification_Tokens_OneArgs = {
  object: Verification_Tokens_Insert_Input;
  on_conflict?: InputMaybe<Verification_Tokens_On_Conflict>;
};

/** mutation root */
export type Mutation_RootMl_Tag_BatchArgs = {
  asset_ids: Array<Scalars["String"]["input"]>;
};

/** mutation root */
export type Mutation_RootMl_Tag_SingleArgs = {
  asset_id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootStop_Sync_Storage_PointArgs = {
  name: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootSync_Storage_PointArgs = {
  name: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootUpdate_RoleArgs = {
  _set?: InputMaybe<Role_Set_Input>;
  where: Role_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Role_By_PkArgs = {
  _set?: InputMaybe<Role_Set_Input>;
  pk_columns: Role_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Role_ManyArgs = {
  updates: Array<Role_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Accounts_ManyArgs = {
  updates: Array<Accounts_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_SessionsArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Sessions_By_PkArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  pk_columns: Sessions_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Sessions_ManyArgs = {
  updates: Array<Sessions_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_SettingsArgs = {
  _append?: InputMaybe<Settings_Append_Input>;
  _delete_at_path?: InputMaybe<Settings_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Settings_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Settings_Delete_Key_Input>;
  _prepend?: InputMaybe<Settings_Prepend_Input>;
  _set?: InputMaybe<Settings_Set_Input>;
  where: Settings_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Settings_By_PkArgs = {
  _append?: InputMaybe<Settings_Append_Input>;
  _delete_at_path?: InputMaybe<Settings_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Settings_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Settings_Delete_Key_Input>;
  _prepend?: InputMaybe<Settings_Prepend_Input>;
  _set?: InputMaybe<Settings_Set_Input>;
  pk_columns: Settings_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Settings_ManyArgs = {
  updates: Array<Settings_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _append?: InputMaybe<User_Append_Input>;
  _delete_at_path?: InputMaybe<User_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Delete_Key_Input>;
  _prepend?: InputMaybe<User_Prepend_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _append?: InputMaybe<User_Append_Input>;
  _delete_at_path?: InputMaybe<User_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Delete_Key_Input>;
  _prepend?: InputMaybe<User_Prepend_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_User_RoleArgs = {
  _inc?: InputMaybe<User_Role_Inc_Input>;
  _set?: InputMaybe<User_Role_Set_Input>;
  where: User_Role_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_Role_By_PkArgs = {
  _inc?: InputMaybe<User_Role_Inc_Input>;
  _set?: InputMaybe<User_Role_Set_Input>;
  pk_columns: User_Role_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_Role_ManyArgs = {
  updates: Array<User_Role_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Verification_TokensArgs = {
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  where: Verification_Tokens_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Verification_Tokens_By_PkArgs = {
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  pk_columns: Verification_Tokens_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Verification_Tokens_ManyArgs = {
  updates: Array<Verification_Tokens_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "Role" */
  Role: Array<Role>;
  /** fetch aggregated fields from the table: "Role" */
  Role_aggregate: Role_Aggregate;
  /** fetch data from the table: "Role" using primary key columns */
  Role_by_pk?: Maybe<Role>;
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** Get The version of the backend */
  backend_version?: Maybe<VersionOutput>;
  /** fetch data from the table: "flat_settings" */
  flat_settings: Array<Flat_Settings>;
  /** fetch aggregated fields from the table: "flat_settings" */
  flat_settings_aggregate: Flat_Settings_Aggregate;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "settings" */
  settings: Array<Settings>;
  /** fetch aggregated fields from the table: "settings" */
  settings_aggregate: Settings_Aggregate;
  /** fetch data from the table: "settings" using primary key columns */
  settings_by_pk?: Maybe<Settings>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
  /** fetch data from the table: "user_role" using primary key columns */
  user_role_by_pk?: Maybe<User_Role>;
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<Verification_Tokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: Verification_Tokens_Aggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk?: Maybe<Verification_Tokens>;
};

export type Query_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};

export type Query_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};

export type Query_RootRole_By_PkArgs = {
  value: Scalars["String"]["input"];
};

export type Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Query_RootAccounts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootFlat_SettingsArgs = {
  distinct_on?: InputMaybe<Array<Flat_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Flat_Settings_Order_By>>;
  where?: InputMaybe<Flat_Settings_Bool_Exp>;
};

export type Query_RootFlat_Settings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flat_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Flat_Settings_Order_By>>;
  where?: InputMaybe<Flat_Settings_Bool_Exp>;
};

export type Query_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

export type Query_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

export type Query_RootSessions_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootSettingsArgs = {
  distinct_on?: InputMaybe<Array<Settings_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Settings_Order_By>>;
  where?: InputMaybe<Settings_Bool_Exp>;
};

export type Query_RootSettings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Settings_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Settings_Order_By>>;
  where?: InputMaybe<Settings_Bool_Exp>;
};

export type Query_RootSettings_By_PkArgs = {
  name: Scalars["String"]["input"];
};

export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Query_RootUser_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootUser_RoleArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

export type Query_RootUser_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

export type Query_RootUser_Role_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Query_RootVerification_TokensArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

export type Query_RootVerification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

export type Query_RootVerification_Tokens_By_PkArgs = {
  token: Scalars["String"]["input"];
};

/** columns and relationships of "sessions" */
export type Sessions = {
  __typename?: "sessions";
  expires?: Maybe<Scalars["timestamptz"]["output"]>;
  id: Scalars["uuid"]["output"];
  sessionToken: Scalars["String"]["output"];
  /** An object relationship */
  user: User;
  userId: Scalars["uuid"]["output"];
};

/** aggregated selection of "sessions" */
export type Sessions_Aggregate = {
  __typename?: "sessions_aggregate";
  aggregate?: Maybe<Sessions_Aggregate_Fields>;
  nodes: Array<Sessions>;
};

export type Sessions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Sessions_Aggregate_Bool_Exp_Count>;
};

export type Sessions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Sessions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_Fields = {
  __typename?: "sessions_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Sessions_Max_Fields>;
  min?: Maybe<Sessions_Min_Fields>;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "sessions" */
export type Sessions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Sessions_Max_Order_By>;
  min?: InputMaybe<Sessions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "sessions" */
export type Sessions_Arr_Rel_Insert_Input = {
  data: Array<Sessions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type Sessions_Bool_Exp = {
  _and?: InputMaybe<Array<Sessions_Bool_Exp>>;
  _not?: InputMaybe<Sessions_Bool_Exp>;
  _or?: InputMaybe<Array<Sessions_Bool_Exp>>;
  expires?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  sessionToken?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "sessions" */
export enum Sessions_Constraint {
  /** unique or primary key constraint on columns "id" */
  SessionsPkey = "sessions_pkey",
}

/** input type for inserting data into table "sessions" */
export type Sessions_Insert_Input = {
  expires?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  sessionToken?: InputMaybe<Scalars["String"]["input"]>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Sessions_Max_Fields = {
  __typename?: "sessions_max_fields";
  expires?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  sessionToken?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "sessions" */
export type Sessions_Max_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Sessions_Min_Fields = {
  __typename?: "sessions_min_fields";
  expires?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  sessionToken?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "sessions" */
export type Sessions_Min_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "sessions" */
export type Sessions_Mutation_Response = {
  __typename?: "sessions_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Sessions>;
};

/** on_conflict condition type for table "sessions" */
export type Sessions_On_Conflict = {
  constraint: Sessions_Constraint;
  update_columns?: Array<Sessions_Update_Column>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "sessions". */
export type Sessions_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sessions */
export type Sessions_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "sessions" */
export enum Sessions_Select_Column {
  /** column name */
  Expires = "expires",
  /** column name */
  Id = "id",
  /** column name */
  SessionToken = "sessionToken",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "sessions" */
export type Sessions_Set_Input = {
  expires?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  sessionToken?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "sessions" */
export type Sessions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sessions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sessions_Stream_Cursor_Value_Input = {
  expires?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  sessionToken?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "sessions" */
export enum Sessions_Update_Column {
  /** column name */
  Expires = "expires",
  /** column name */
  Id = "id",
  /** column name */
  SessionToken = "sessionToken",
  /** column name */
  UserId = "userId",
}

export type Sessions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sessions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Sessions_Bool_Exp;
};

/** Contains all the settings for the application. */
export type Settings = {
  __typename?: "settings";
  /** The nested name of the setting. Used as a primary key (ex: storage.local.root) */
  name: Scalars["String"]["output"];
  /** The value of the setting as JSONB */
  value: Scalars["jsonb"]["output"];
};

/** Contains all the settings for the application. */
export type SettingsValueArgs = {
  path?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregated selection of "settings" */
export type Settings_Aggregate = {
  __typename?: "settings_aggregate";
  aggregate?: Maybe<Settings_Aggregate_Fields>;
  nodes: Array<Settings>;
};

/** aggregate fields of "settings" */
export type Settings_Aggregate_Fields = {
  __typename?: "settings_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Settings_Max_Fields>;
  min?: Maybe<Settings_Min_Fields>;
};

/** aggregate fields of "settings" */
export type Settings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Settings_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Settings_Append_Input = {
  /** The value of the setting as JSONB */
  value?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** Boolean expression to filter rows from the table "settings". All fields are combined with a logical 'AND'. */
export type Settings_Bool_Exp = {
  _and?: InputMaybe<Array<Settings_Bool_Exp>>;
  _not?: InputMaybe<Settings_Bool_Exp>;
  _or?: InputMaybe<Array<Settings_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "settings" */
export enum Settings_Constraint {
  /** unique or primary key constraint on columns "name" */
  SettingsPkey = "settings_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Settings_Delete_At_Path_Input = {
  /** The value of the setting as JSONB */
  value?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Settings_Delete_Elem_Input = {
  /** The value of the setting as JSONB */
  value?: InputMaybe<Scalars["Int"]["input"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Settings_Delete_Key_Input = {
  /** The value of the setting as JSONB */
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** input type for inserting data into table "settings" */
export type Settings_Insert_Input = {
  /** The nested name of the setting. Used as a primary key (ex: storage.local.root) */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** The value of the setting as JSONB */
  value?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** aggregate max on columns */
export type Settings_Max_Fields = {
  __typename?: "settings_max_fields";
  /** The nested name of the setting. Used as a primary key (ex: storage.local.root) */
  name?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Settings_Min_Fields = {
  __typename?: "settings_min_fields";
  /** The nested name of the setting. Used as a primary key (ex: storage.local.root) */
  name?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "settings" */
export type Settings_Mutation_Response = {
  __typename?: "settings_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Settings>;
};

/** on_conflict condition type for table "settings" */
export type Settings_On_Conflict = {
  constraint: Settings_Constraint;
  update_columns?: Array<Settings_Update_Column>;
  where?: InputMaybe<Settings_Bool_Exp>;
};

/** Ordering options when selecting data from "settings". */
export type Settings_Order_By = {
  name?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: settings */
export type Settings_Pk_Columns_Input = {
  /** The nested name of the setting. Used as a primary key (ex: storage.local.root) */
  name: Scalars["String"]["input"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Settings_Prepend_Input = {
  /** The value of the setting as JSONB */
  value?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** select columns of table "settings" */
export enum Settings_Select_Column {
  /** column name */
  Name = "name",
  /** column name */
  Value = "value",
}

/** input type for updating data in table "settings" */
export type Settings_Set_Input = {
  /** The nested name of the setting. Used as a primary key (ex: storage.local.root) */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** The value of the setting as JSONB */
  value?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** Streaming cursor of the table "settings" */
export type Settings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Settings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Settings_Stream_Cursor_Value_Input = {
  /** The nested name of the setting. Used as a primary key (ex: storage.local.root) */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** The value of the setting as JSONB */
  value?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** update columns of table "settings" */
export enum Settings_Update_Column {
  /** column name */
  Name = "name",
  /** column name */
  Value = "value",
}

export type Settings_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Settings_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Settings_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Settings_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Settings_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Settings_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Settings_Set_Input>;
  /** filter the rows which have to be updated */
  where: Settings_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "Role" */
  Role: Array<Role>;
  /** fetch aggregated fields from the table: "Role" */
  Role_aggregate: Role_Aggregate;
  /** fetch data from the table: "Role" using primary key columns */
  Role_by_pk?: Maybe<Role>;
  /** fetch data from the table in a streaming manner: "Role" */
  Role_stream: Array<Role>;
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table in a streaming manner: "accounts" */
  accounts_stream: Array<Accounts>;
  /** fetch data from the table: "flat_settings" */
  flat_settings: Array<Flat_Settings>;
  /** fetch aggregated fields from the table: "flat_settings" */
  flat_settings_aggregate: Flat_Settings_Aggregate;
  /** fetch data from the table in a streaming manner: "flat_settings" */
  flat_settings_stream: Array<Flat_Settings>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table in a streaming manner: "sessions" */
  sessions_stream: Array<Sessions>;
  /** fetch data from the table: "settings" */
  settings: Array<Settings>;
  /** fetch aggregated fields from the table: "settings" */
  settings_aggregate: Settings_Aggregate;
  /** fetch data from the table: "settings" using primary key columns */
  settings_by_pk?: Maybe<Settings>;
  /** fetch data from the table in a streaming manner: "settings" */
  settings_stream: Array<Settings>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
  /** fetch data from the table: "user_role" using primary key columns */
  user_role_by_pk?: Maybe<User_Role>;
  /** fetch data from the table in a streaming manner: "user_role" */
  user_role_stream: Array<User_Role>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<User>;
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<Verification_Tokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: Verification_Tokens_Aggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** fetch data from the table in a streaming manner: "verification_tokens" */
  verification_tokens_stream: Array<Verification_Tokens>;
};

export type Subscription_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};

export type Subscription_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};

export type Subscription_RootRole_By_PkArgs = {
  value: Scalars["String"]["input"];
};

export type Subscription_RootRole_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Role_Stream_Cursor_Input>>;
  where?: InputMaybe<Role_Bool_Exp>;
};

export type Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootAccounts_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Subscription_RootFlat_SettingsArgs = {
  distinct_on?: InputMaybe<Array<Flat_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Flat_Settings_Order_By>>;
  where?: InputMaybe<Flat_Settings_Bool_Exp>;
};

export type Subscription_RootFlat_Settings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flat_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Flat_Settings_Order_By>>;
  where?: InputMaybe<Flat_Settings_Bool_Exp>;
};

export type Subscription_RootFlat_Settings_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Flat_Settings_Stream_Cursor_Input>>;
  where?: InputMaybe<Flat_Settings_Bool_Exp>;
};

export type Subscription_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

export type Subscription_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

export type Subscription_RootSessions_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootSessions_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Sessions_Stream_Cursor_Input>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

export type Subscription_RootSettingsArgs = {
  distinct_on?: InputMaybe<Array<Settings_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Settings_Order_By>>;
  where?: InputMaybe<Settings_Bool_Exp>;
};

export type Subscription_RootSettings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Settings_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Settings_Order_By>>;
  where?: InputMaybe<Settings_Bool_Exp>;
};

export type Subscription_RootSettings_By_PkArgs = {
  name: Scalars["String"]["input"];
};

export type Subscription_RootSettings_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Settings_Stream_Cursor_Input>>;
  where?: InputMaybe<Settings_Bool_Exp>;
};

export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Subscription_RootUser_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootUser_RoleArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

export type Subscription_RootUser_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

export type Subscription_RootUser_Role_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootUser_Role_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<User_Role_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Subscription_RootVerification_TokensArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

export type Subscription_RootVerification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

export type Subscription_RootVerification_Tokens_By_PkArgs = {
  token: Scalars["String"]["input"];
};

export type Subscription_RootVerification_Tokens_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Verification_Tokens_Stream_Cursor_Input>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
};

/** This is the table of all the users of the application along with their data. */
export type User = {
  __typename?: "user";
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** Is the user currently active right now in the application. */
  active: Scalars["Boolean"]["output"];
  /** The user profile image (Avatar) a link to a graphic (if any) */
  avatar: Scalars["String"]["output"];
  /** A cell phone number for the User.  Personnel Data. */
  cell: Scalars["String"]["output"];
  /** Current city of User.  Personnel Data. */
  city: Scalars["String"]["output"];
  /** Current country of User.   Personnel Data. */
  country: Scalars["String"]["output"];
  created_at: Scalars["timestamptz"]["output"];
  /** The users email. This must be unique per user */
  email: Scalars["String"]["output"];
  emailVerified?: Maybe<Scalars["timestamptz"]["output"]>;
  /** First name of the user.  Personnel Data. */
  first_name: Scalars["String"]["output"];
  id: Scalars["uuid"]["output"];
  /** The job title of the user. Personnel Data. */
  job_title: Scalars["String"]["output"];
  /** When was the user last active */
  last_activity: Scalars["timestamptz"]["output"];
  /** Last name of the User. Personnel Data. */
  last_name: Scalars["String"]["output"];
  /** Extra metadata in JSON format about the user */
  meta: Scalars["jsonb"]["output"];
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** The currently set theme of the user can be one of any set theme */
  theme_name: Scalars["String"]["output"];
  updated_at: Scalars["timestamptz"]["output"];
  /** An array relationship */
  user_roles: Array<User_Role>;
  /** An aggregate relationship */
  user_roles_aggregate: User_Role_Aggregate;
  /** The username of the user. */
  username: Scalars["citext"]["output"];
};

/** This is the table of all the users of the application along with their data. */
export type UserAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** This is the table of all the users of the application along with their data. */
export type UserAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** This is the table of all the users of the application along with their data. */
export type UserMetaArgs = {
  path?: InputMaybe<Scalars["String"]["input"]>;
};

/** This is the table of all the users of the application along with their data. */
export type UserSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** This is the table of all the users of the application along with their data. */
export type UserSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** This is the table of all the users of the application along with their data. */
export type UserUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

/** This is the table of all the users of the application along with their data. */
export type UserUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: "user_aggregate";
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: "user_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};

/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type User_Append_Input = {
  /** Extra metadata in JSON format about the user */
  meta?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  accounts?: InputMaybe<Accounts_Bool_Exp>;
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Bool_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  avatar?: InputMaybe<String_Comparison_Exp>;
  cell?: InputMaybe<String_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  emailVerified?: InputMaybe<Timestamptz_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  job_title?: InputMaybe<String_Comparison_Exp>;
  last_activity?: InputMaybe<Timestamptz_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  meta?: InputMaybe<Jsonb_Comparison_Exp>;
  sessions?: InputMaybe<Sessions_Bool_Exp>;
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Bool_Exp>;
  theme_name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_roles?: InputMaybe<User_Role_Bool_Exp>;
  user_roles_aggregate?: InputMaybe<User_Role_Aggregate_Bool_Exp>;
  username?: InputMaybe<Citext_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = "user_email_key",
  /** unique or primary key constraint on columns "id" */
  UserPkey = "user_pkey",
  /** unique or primary key constraint on columns "username" */
  UserUsernameKey = "user_username_key",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type User_Delete_At_Path_Input = {
  /** Extra metadata in JSON format about the user */
  meta?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type User_Delete_Elem_Input = {
  /** Extra metadata in JSON format about the user */
  meta?: InputMaybe<Scalars["Int"]["input"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type User_Delete_Key_Input = {
  /** Extra metadata in JSON format about the user */
  meta?: InputMaybe<Scalars["String"]["input"]>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  accounts?: InputMaybe<Accounts_Arr_Rel_Insert_Input>;
  /** Is the user currently active right now in the application. */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** The user profile image (Avatar) a link to a graphic (if any) */
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  /** A cell phone number for the User.  Personnel Data. */
  cell?: InputMaybe<Scalars["String"]["input"]>;
  /** Current city of User.  Personnel Data. */
  city?: InputMaybe<Scalars["String"]["input"]>;
  /** Current country of User.   Personnel Data. */
  country?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  /** The users email. This must be unique per user */
  email?: InputMaybe<Scalars["String"]["input"]>;
  emailVerified?: InputMaybe<Scalars["timestamptz"]["input"]>;
  /** First name of the user.  Personnel Data. */
  first_name?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** The job title of the user. Personnel Data. */
  job_title?: InputMaybe<Scalars["String"]["input"]>;
  /** When was the user last active */
  last_activity?: InputMaybe<Scalars["timestamptz"]["input"]>;
  /** Last name of the User. Personnel Data. */
  last_name?: InputMaybe<Scalars["String"]["input"]>;
  /** Extra metadata in JSON format about the user */
  meta?: InputMaybe<Scalars["jsonb"]["input"]>;
  sessions?: InputMaybe<Sessions_Arr_Rel_Insert_Input>;
  /** The currently set theme of the user can be one of any set theme */
  theme_name?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_roles?: InputMaybe<User_Role_Arr_Rel_Insert_Input>;
  /** The username of the user. */
  username?: InputMaybe<Scalars["citext"]["input"]>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: "user_max_fields";
  /** The user profile image (Avatar) a link to a graphic (if any) */
  avatar?: Maybe<Scalars["String"]["output"]>;
  /** A cell phone number for the User.  Personnel Data. */
  cell?: Maybe<Scalars["String"]["output"]>;
  /** Current city of User.  Personnel Data. */
  city?: Maybe<Scalars["String"]["output"]>;
  /** Current country of User.   Personnel Data. */
  country?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  /** The users email. This must be unique per user */
  email?: Maybe<Scalars["String"]["output"]>;
  emailVerified?: Maybe<Scalars["timestamptz"]["output"]>;
  /** First name of the user.  Personnel Data. */
  first_name?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  /** The job title of the user. Personnel Data. */
  job_title?: Maybe<Scalars["String"]["output"]>;
  /** When was the user last active */
  last_activity?: Maybe<Scalars["timestamptz"]["output"]>;
  /** Last name of the User. Personnel Data. */
  last_name?: Maybe<Scalars["String"]["output"]>;
  /** The currently set theme of the user can be one of any set theme */
  theme_name?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  /** The username of the user. */
  username?: Maybe<Scalars["citext"]["output"]>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: "user_min_fields";
  /** The user profile image (Avatar) a link to a graphic (if any) */
  avatar?: Maybe<Scalars["String"]["output"]>;
  /** A cell phone number for the User.  Personnel Data. */
  cell?: Maybe<Scalars["String"]["output"]>;
  /** Current city of User.  Personnel Data. */
  city?: Maybe<Scalars["String"]["output"]>;
  /** Current country of User.   Personnel Data. */
  country?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  /** The users email. This must be unique per user */
  email?: Maybe<Scalars["String"]["output"]>;
  emailVerified?: Maybe<Scalars["timestamptz"]["output"]>;
  /** First name of the user.  Personnel Data. */
  first_name?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  /** The job title of the user. Personnel Data. */
  job_title?: Maybe<Scalars["String"]["output"]>;
  /** When was the user last active */
  last_activity?: Maybe<Scalars["timestamptz"]["output"]>;
  /** Last name of the User. Personnel Data. */
  last_name?: Maybe<Scalars["String"]["output"]>;
  /** The currently set theme of the user can be one of any set theme */
  theme_name?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  /** The username of the user. */
  username?: Maybe<Scalars["citext"]["output"]>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: "user_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Order_By>;
  active?: InputMaybe<Order_By>;
  avatar?: InputMaybe<Order_By>;
  cell?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  job_title?: InputMaybe<Order_By>;
  last_activity?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  meta?: InputMaybe<Order_By>;
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Order_By>;
  theme_name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_roles_aggregate?: InputMaybe<User_Role_Aggregate_Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type User_Prepend_Input = {
  /** Extra metadata in JSON format about the user */
  meta?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** A relational table that contains all the roles assigned to a specific user */
export type User_Role = {
  __typename?: "user_role";
  /** An object relationship */
  Role: Role;
  /** Is this role the current active role. A user can have many roles and one active one */
  active?: Maybe<Scalars["Boolean"]["output"]>;
  /** When was this role originally assigned to this user */
  created_at: Scalars["timestamptz"]["output"];
  /** The primary key of the user_roles table */
  id: Scalars["Int"]["output"];
  /** The string name of the role the user should have */
  role: Role_Enum;
  /** An object relationship */
  user: User;
  /** The foreign key to the user id that this role belongs to */
  user_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "user_role" */
export type User_Role_Aggregate = {
  __typename?: "user_role_aggregate";
  aggregate?: Maybe<User_Role_Aggregate_Fields>;
  nodes: Array<User_Role>;
};

export type User_Role_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<User_Role_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<User_Role_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<User_Role_Aggregate_Bool_Exp_Count>;
};

export type User_Role_Aggregate_Bool_Exp_Bool_And = {
  arguments: User_Role_Select_Column_User_Role_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<User_Role_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type User_Role_Aggregate_Bool_Exp_Bool_Or = {
  arguments: User_Role_Select_Column_User_Role_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<User_Role_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type User_Role_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Role_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<User_Role_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_role" */
export type User_Role_Aggregate_Fields = {
  __typename?: "user_role_aggregate_fields";
  avg?: Maybe<User_Role_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<User_Role_Max_Fields>;
  min?: Maybe<User_Role_Min_Fields>;
  stddev?: Maybe<User_Role_Stddev_Fields>;
  stddev_pop?: Maybe<User_Role_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Role_Stddev_Samp_Fields>;
  sum?: Maybe<User_Role_Sum_Fields>;
  var_pop?: Maybe<User_Role_Var_Pop_Fields>;
  var_samp?: Maybe<User_Role_Var_Samp_Fields>;
  variance?: Maybe<User_Role_Variance_Fields>;
};

/** aggregate fields of "user_role" */
export type User_Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Role_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "user_role" */
export type User_Role_Aggregate_Order_By = {
  avg?: InputMaybe<User_Role_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Role_Max_Order_By>;
  min?: InputMaybe<User_Role_Min_Order_By>;
  stddev?: InputMaybe<User_Role_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Role_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Role_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Role_Sum_Order_By>;
  var_pop?: InputMaybe<User_Role_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Role_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Role_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_role" */
export type User_Role_Arr_Rel_Insert_Input = {
  data: Array<User_Role_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Role_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Role_Avg_Fields = {
  __typename?: "user_role_avg_fields";
  /** The primary key of the user_roles table */
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "user_role" */
export type User_Role_Avg_Order_By = {
  /** The primary key of the user_roles table */
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_role". All fields are combined with a logical 'AND'. */
export type User_Role_Bool_Exp = {
  Role?: InputMaybe<Role_Bool_Exp>;
  _and?: InputMaybe<Array<User_Role_Bool_Exp>>;
  _not?: InputMaybe<User_Role_Bool_Exp>;
  _or?: InputMaybe<Array<User_Role_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  role?: InputMaybe<Role_Enum_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_role" */
export enum User_Role_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserRolePkey = "user_role_pkey",
  /** unique or primary key constraint on columns "user_id", "role" */
  UserRoleRoleUserIdKey = "user_role_role_user_id_key",
}

/** input type for incrementing numeric columns in table "user_role" */
export type User_Role_Inc_Input = {
  /** The primary key of the user_roles table */
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "user_role" */
export type User_Role_Insert_Input = {
  Role?: InputMaybe<Role_Obj_Rel_Insert_Input>;
  /** Is this role the current active role. A user can have many roles and one active one */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** When was this role originally assigned to this user */
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  /** The primary key of the user_roles table */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** The string name of the role the user should have */
  role?: InputMaybe<Role_Enum>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  /** The foreign key to the user id that this role belongs to */
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type User_Role_Max_Fields = {
  __typename?: "user_role_max_fields";
  /** When was this role originally assigned to this user */
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  /** The primary key of the user_roles table */
  id?: Maybe<Scalars["Int"]["output"]>;
  /** The foreign key to the user id that this role belongs to */
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "user_role" */
export type User_Role_Max_Order_By = {
  /** When was this role originally assigned to this user */
  created_at?: InputMaybe<Order_By>;
  /** The primary key of the user_roles table */
  id?: InputMaybe<Order_By>;
  /** The foreign key to the user id that this role belongs to */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Role_Min_Fields = {
  __typename?: "user_role_min_fields";
  /** When was this role originally assigned to this user */
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  /** The primary key of the user_roles table */
  id?: Maybe<Scalars["Int"]["output"]>;
  /** The foreign key to the user id that this role belongs to */
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "user_role" */
export type User_Role_Min_Order_By = {
  /** When was this role originally assigned to this user */
  created_at?: InputMaybe<Order_By>;
  /** The primary key of the user_roles table */
  id?: InputMaybe<Order_By>;
  /** The foreign key to the user id that this role belongs to */
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_role" */
export type User_Role_Mutation_Response = {
  __typename?: "user_role_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<User_Role>;
};

/** on_conflict condition type for table "user_role" */
export type User_Role_On_Conflict = {
  constraint: User_Role_Constraint;
  update_columns?: Array<User_Role_Update_Column>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

/** Ordering options when selecting data from "user_role". */
export type User_Role_Order_By = {
  Role?: InputMaybe<Role_Order_By>;
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_role */
export type User_Role_Pk_Columns_Input = {
  /** The primary key of the user_roles table */
  id: Scalars["Int"]["input"];
};

/** select columns of table "user_role" */
export enum User_Role_Select_Column {
  /** column name */
  Active = "active",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Role = "role",
  /** column name */
  UserId = "user_id",
}

/** select "user_role_aggregate_bool_exp_bool_and_arguments_columns" columns of table "user_role" */
export enum User_Role_Select_Column_User_Role_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = "active",
}

/** select "user_role_aggregate_bool_exp_bool_or_arguments_columns" columns of table "user_role" */
export enum User_Role_Select_Column_User_Role_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = "active",
}

/** input type for updating data in table "user_role" */
export type User_Role_Set_Input = {
  /** Is this role the current active role. A user can have many roles and one active one */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** When was this role originally assigned to this user */
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  /** The primary key of the user_roles table */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** The string name of the role the user should have */
  role?: InputMaybe<Role_Enum>;
  /** The foreign key to the user id that this role belongs to */
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate stddev on columns */
export type User_Role_Stddev_Fields = {
  __typename?: "user_role_stddev_fields";
  /** The primary key of the user_roles table */
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "user_role" */
export type User_Role_Stddev_Order_By = {
  /** The primary key of the user_roles table */
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Role_Stddev_Pop_Fields = {
  __typename?: "user_role_stddev_pop_fields";
  /** The primary key of the user_roles table */
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "user_role" */
export type User_Role_Stddev_Pop_Order_By = {
  /** The primary key of the user_roles table */
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Role_Stddev_Samp_Fields = {
  __typename?: "user_role_stddev_samp_fields";
  /** The primary key of the user_roles table */
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "user_role" */
export type User_Role_Stddev_Samp_Order_By = {
  /** The primary key of the user_roles table */
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_role" */
export type User_Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Role_Stream_Cursor_Value_Input = {
  /** Is this role the current active role. A user can have many roles and one active one */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** When was this role originally assigned to this user */
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  /** The primary key of the user_roles table */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** The string name of the role the user should have */
  role?: InputMaybe<Role_Enum>;
  /** The foreign key to the user id that this role belongs to */
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate sum on columns */
export type User_Role_Sum_Fields = {
  __typename?: "user_role_sum_fields";
  /** The primary key of the user_roles table */
  id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "user_role" */
export type User_Role_Sum_Order_By = {
  /** The primary key of the user_roles table */
  id?: InputMaybe<Order_By>;
};

/** update columns of table "user_role" */
export enum User_Role_Update_Column {
  /** column name */
  Active = "active",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Role = "role",
  /** column name */
  UserId = "user_id",
}

export type User_Role_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Role_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Role_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Role_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Role_Var_Pop_Fields = {
  __typename?: "user_role_var_pop_fields";
  /** The primary key of the user_roles table */
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "user_role" */
export type User_Role_Var_Pop_Order_By = {
  /** The primary key of the user_roles table */
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Role_Var_Samp_Fields = {
  __typename?: "user_role_var_samp_fields";
  /** The primary key of the user_roles table */
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "user_role" */
export type User_Role_Var_Samp_Order_By = {
  /** The primary key of the user_roles table */
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Role_Variance_Fields = {
  __typename?: "user_role_variance_fields";
  /** The primary key of the user_roles table */
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "user_role" */
export type User_Role_Variance_Order_By = {
  /** The primary key of the user_roles table */
  id?: InputMaybe<Order_By>;
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Active = "active",
  /** column name */
  Avatar = "avatar",
  /** column name */
  Cell = "cell",
  /** column name */
  City = "city",
  /** column name */
  Country = "country",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  EmailVerified = "emailVerified",
  /** column name */
  FirstName = "first_name",
  /** column name */
  Id = "id",
  /** column name */
  JobTitle = "job_title",
  /** column name */
  LastActivity = "last_activity",
  /** column name */
  LastName = "last_name",
  /** column name */
  Meta = "meta",
  /** column name */
  ThemeName = "theme_name",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Username = "username",
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  /** Is the user currently active right now in the application. */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** The user profile image (Avatar) a link to a graphic (if any) */
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  /** A cell phone number for the User.  Personnel Data. */
  cell?: InputMaybe<Scalars["String"]["input"]>;
  /** Current city of User.  Personnel Data. */
  city?: InputMaybe<Scalars["String"]["input"]>;
  /** Current country of User.   Personnel Data. */
  country?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  /** The users email. This must be unique per user */
  email?: InputMaybe<Scalars["String"]["input"]>;
  emailVerified?: InputMaybe<Scalars["timestamptz"]["input"]>;
  /** First name of the user.  Personnel Data. */
  first_name?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** The job title of the user. Personnel Data. */
  job_title?: InputMaybe<Scalars["String"]["input"]>;
  /** When was the user last active */
  last_activity?: InputMaybe<Scalars["timestamptz"]["input"]>;
  /** Last name of the User. Personnel Data. */
  last_name?: InputMaybe<Scalars["String"]["input"]>;
  /** Extra metadata in JSON format about the user */
  meta?: InputMaybe<Scalars["jsonb"]["input"]>;
  /** The currently set theme of the user can be one of any set theme */
  theme_name?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  /** The username of the user. */
  username?: InputMaybe<Scalars["citext"]["input"]>;
};

/** Streaming cursor of the table "user" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  /** Is the user currently active right now in the application. */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** The user profile image (Avatar) a link to a graphic (if any) */
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  /** A cell phone number for the User.  Personnel Data. */
  cell?: InputMaybe<Scalars["String"]["input"]>;
  /** Current city of User.  Personnel Data. */
  city?: InputMaybe<Scalars["String"]["input"]>;
  /** Current country of User.   Personnel Data. */
  country?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  /** The users email. This must be unique per user */
  email?: InputMaybe<Scalars["String"]["input"]>;
  emailVerified?: InputMaybe<Scalars["timestamptz"]["input"]>;
  /** First name of the user.  Personnel Data. */
  first_name?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** The job title of the user. Personnel Data. */
  job_title?: InputMaybe<Scalars["String"]["input"]>;
  /** When was the user last active */
  last_activity?: InputMaybe<Scalars["timestamptz"]["input"]>;
  /** Last name of the User. Personnel Data. */
  last_name?: InputMaybe<Scalars["String"]["input"]>;
  /** Extra metadata in JSON format about the user */
  meta?: InputMaybe<Scalars["jsonb"]["input"]>;
  /** The currently set theme of the user can be one of any set theme */
  theme_name?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  /** The username of the user. */
  username?: InputMaybe<Scalars["citext"]["input"]>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Active = "active",
  /** column name */
  Avatar = "avatar",
  /** column name */
  Cell = "cell",
  /** column name */
  City = "city",
  /** column name */
  Country = "country",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  EmailVerified = "emailVerified",
  /** column name */
  FirstName = "first_name",
  /** column name */
  Id = "id",
  /** column name */
  JobTitle = "job_title",
  /** column name */
  LastActivity = "last_activity",
  /** column name */
  LastName = "last_name",
  /** column name */
  Meta = "meta",
  /** column name */
  ThemeName = "theme_name",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Username = "username",
}

export type User_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<User_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<User_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<User_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<User_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<User_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["uuid"]["input"]>;
  _gt?: InputMaybe<Scalars["uuid"]["input"]>;
  _gte?: InputMaybe<Scalars["uuid"]["input"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["uuid"]["input"]>;
  _lte?: InputMaybe<Scalars["uuid"]["input"]>;
  _neq?: InputMaybe<Scalars["uuid"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
};

/** columns and relationships of "verification_tokens" */
export type Verification_Tokens = {
  __typename?: "verification_tokens";
  expires?: Maybe<Scalars["timestamptz"]["output"]>;
  identifier: Scalars["String"]["output"];
  token: Scalars["String"]["output"];
};

/** aggregated selection of "verification_tokens" */
export type Verification_Tokens_Aggregate = {
  __typename?: "verification_tokens_aggregate";
  aggregate?: Maybe<Verification_Tokens_Aggregate_Fields>;
  nodes: Array<Verification_Tokens>;
};

/** aggregate fields of "verification_tokens" */
export type Verification_Tokens_Aggregate_Fields = {
  __typename?: "verification_tokens_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Verification_Tokens_Max_Fields>;
  min?: Maybe<Verification_Tokens_Min_Fields>;
};

/** aggregate fields of "verification_tokens" */
export type Verification_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "verification_tokens". All fields are combined with a logical 'AND'. */
export type Verification_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Verification_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Verification_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Verification_Tokens_Bool_Exp>>;
  expires?: InputMaybe<Timestamptz_Comparison_Exp>;
  identifier?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "verification_tokens" */
export enum Verification_Tokens_Constraint {
  /** unique or primary key constraint on columns "token" */
  VerificationTokensPkey = "verification_tokens_pkey",
}

/** input type for inserting data into table "verification_tokens" */
export type Verification_Tokens_Insert_Input = {
  expires?: InputMaybe<Scalars["timestamptz"]["input"]>;
  identifier?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Verification_Tokens_Max_Fields = {
  __typename?: "verification_tokens_max_fields";
  expires?: Maybe<Scalars["timestamptz"]["output"]>;
  identifier?: Maybe<Scalars["String"]["output"]>;
  token?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Verification_Tokens_Min_Fields = {
  __typename?: "verification_tokens_min_fields";
  expires?: Maybe<Scalars["timestamptz"]["output"]>;
  identifier?: Maybe<Scalars["String"]["output"]>;
  token?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "verification_tokens" */
export type Verification_Tokens_Mutation_Response = {
  __typename?: "verification_tokens_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Verification_Tokens>;
};

/** on_conflict condition type for table "verification_tokens" */
export type Verification_Tokens_On_Conflict = {
  constraint: Verification_Tokens_Constraint;
  update_columns?: Array<Verification_Tokens_Update_Column>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "verification_tokens". */
export type Verification_Tokens_Order_By = {
  expires?: InputMaybe<Order_By>;
  identifier?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** primary key columns input for table: verification_tokens */
export type Verification_Tokens_Pk_Columns_Input = {
  token: Scalars["String"]["input"];
};

/** select columns of table "verification_tokens" */
export enum Verification_Tokens_Select_Column {
  /** column name */
  Expires = "expires",
  /** column name */
  Identifier = "identifier",
  /** column name */
  Token = "token",
}

/** input type for updating data in table "verification_tokens" */
export type Verification_Tokens_Set_Input = {
  expires?: InputMaybe<Scalars["timestamptz"]["input"]>;
  identifier?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "verification_tokens" */
export type Verification_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Verification_Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Verification_Tokens_Stream_Cursor_Value_Input = {
  expires?: InputMaybe<Scalars["timestamptz"]["input"]>;
  identifier?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "verification_tokens" */
export enum Verification_Tokens_Update_Column {
  /** column name */
  Expires = "expires",
  /** column name */
  Identifier = "identifier",
  /** column name */
  Token = "token",
}

export type Verification_Tokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: Verification_Tokens_Bool_Exp;
};

export type AccountFragment = {
  __typename: "accounts";
  id: any;
  type: string;
  scope?: string | null;
  userId: any;
  id_token?: string | null;
  provider: string;
  expires_at?: any | null;
  token_type?: string | null;
  oauth_token?: string | null;
  access_token?: string | null;
  refresh_token?: string | null;
  session_state?: string | null;
  providerAccountId: string;
  oauth_token_secret?: string | null;
};

export type UserFragment = {
  __typename: "user";
  id: any;
  username: any;
  email: string;
  avatar: string;
  emailVerified?: any | null;
  name: any;
  image: string;
  user_roles: Array<{ __typename?: "user_role"; role: Role_Enum }>;
};

export type SessionFragment = {
  __typename: "sessions";
  id: any;
  userId: any;
  expires?: any | null;
  sessionToken: string;
};

export const AccountFragmentDoc = gql`
  fragment Account on accounts {
    __typename
    id
    type
    scope
    userId
    id_token
    provider
    expires_at
    token_type
    oauth_token
    access_token
    refresh_token
    session_state
    providerAccountId
    oauth_token_secret
  }
`;
export const UserFragmentDoc = gql`
  fragment User on user {
    __typename
    id
    username
    name: username
    email
    avatar
    image: avatar
    emailVerified
    user_roles {
      role
    }
  }
`;
export const SessionFragmentDoc = gql`
  fragment Session on sessions {
    __typename
    id
    userId
    expires
    sessionToken
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
  _variables,
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {};
}
export type Sdk = ReturnType<typeof getSdk>;
