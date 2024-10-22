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
export type Boolean_comparison_exp = {
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
export type Int_comparison_exp = {
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

export type MLTagOutput = {
  __typename?: "MLTagOutput";
  asset_id: Scalars["uuid"]["output"];
};

/** An enum table of all the possible roles that a user can be */
export type Role = {
  __typename?: "Role";
  level: Scalars["String"]["output"];
  /** An array relationship */
  user_roles: Array<user_role>;
  /** An aggregate relationship */
  user_roles_aggregate: user_role_aggregate;
  value: Scalars["String"]["output"];
};

/** An enum table of all the possible roles that a user can be */
export type Roleuser_rolesArgs = {
  distinct_on?: InputMaybe<Array<user_role_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<user_role_order_by>>;
  where?: InputMaybe<user_role_bool_exp>;
};

/** An enum table of all the possible roles that a user can be */
export type Roleuser_roles_aggregateArgs = {
  distinct_on?: InputMaybe<Array<user_role_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<user_role_order_by>>;
  where?: InputMaybe<user_role_bool_exp>;
};

/** aggregated selection of "Role" */
export type Role_aggregate = {
  __typename?: "Role_aggregate";
  aggregate?: Maybe<Role_aggregate_fields>;
  nodes: Array<Role>;
};

/** aggregate fields of "Role" */
export type Role_aggregate_fields = {
  __typename?: "Role_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Role_max_fields>;
  min?: Maybe<Role_min_fields>;
};

/** aggregate fields of "Role" */
export type Role_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<Role_select_column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "Role". All fields are combined with a logical 'AND'. */
export type Role_bool_exp = {
  _and?: InputMaybe<Array<Role_bool_exp>>;
  _not?: InputMaybe<Role_bool_exp>;
  _or?: InputMaybe<Array<Role_bool_exp>>;
  level?: InputMaybe<String_comparison_exp>;
  user_roles?: InputMaybe<user_role_bool_exp>;
  user_roles_aggregate?: InputMaybe<user_role_aggregate_bool_exp>;
  value?: InputMaybe<String_comparison_exp>;
};

/** unique or primary key constraints on table "Role" */
export enum Role_constraint {
  /** unique or primary key constraint on columns "value" */
  Role_pkey = "Role_pkey",
}

export enum Role_enum {
  /** 4 You can do everything but core system actions */
  admin = "admin",
  /** 3 This is what a manager would be. They can do most things */
  manager = "manager",
  /** 1 Everyone starts as public */
  public = "public",
  /** 5 This is the super admin and everytime it's used it's logged */
  superAdmin = "superAdmin",
  /** 2 This is the base user role */
  user = "user",
}

/** Boolean expression to compare columns of type "Role_enum". All fields are combined with logical 'AND'. */
export type Role_enum_comparison_exp = {
  _eq?: InputMaybe<Role_enum>;
  _in?: InputMaybe<Array<Role_enum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Role_enum>;
  _nin?: InputMaybe<Array<Role_enum>>;
};

/** input type for inserting data into table "Role" */
export type Role_insert_input = {
  level?: InputMaybe<Scalars["String"]["input"]>;
  user_roles?: InputMaybe<user_role_arr_rel_insert_input>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Role_max_fields = {
  __typename?: "Role_max_fields";
  level?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Role_min_fields = {
  __typename?: "Role_min_fields";
  level?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "Role" */
export type Role_mutation_response = {
  __typename?: "Role_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Role>;
};

/** input type for inserting object relation for remote table "Role" */
export type Role_obj_rel_insert_input = {
  data: Role_insert_input;
  /** upsert condition */
  on_conflict?: InputMaybe<Role_on_conflict>;
};

/** on_conflict condition type for table "Role" */
export type Role_on_conflict = {
  constraint: Role_constraint;
  update_columns?: Array<Role_update_column>;
  where?: InputMaybe<Role_bool_exp>;
};

/** Ordering options when selecting data from "Role". */
export type Role_order_by = {
  level?: InputMaybe<order_by>;
  user_roles_aggregate?: InputMaybe<user_role_aggregate_order_by>;
  value?: InputMaybe<order_by>;
};

/** primary key columns input for table: Role */
export type Role_pk_columns_input = {
  value: Scalars["String"]["input"];
};

/** select columns of table "Role" */
export enum Role_select_column {
  /** column name */
  level = "level",
  /** column name */
  value = "value",
}

/** input type for updating data in table "Role" */
export type Role_set_input = {
  level?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "Role" */
export type Role_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: Role_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Role_stream_cursor_value_input = {
  level?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "Role" */
export enum Role_update_column {
  /** column name */
  level = "level",
  /** column name */
  value = "value",
}

export type Role_updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Role_set_input>;
  /** filter the rows which have to be updated */
  where: Role_bool_exp;
};

export type StopSyncOutput = {
  __typename?: "StopSyncOutput";
  message: Scalars["String"]["output"];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_comparison_exp = {
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
export type accounts = {
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
  user: user;
  userId: Scalars["uuid"]["output"];
};

/** aggregated selection of "accounts" */
export type accounts_aggregate = {
  __typename?: "accounts_aggregate";
  aggregate?: Maybe<accounts_aggregate_fields>;
  nodes: Array<accounts>;
};

export type accounts_aggregate_bool_exp = {
  count?: InputMaybe<accounts_aggregate_bool_exp_count>;
};

export type accounts_aggregate_bool_exp_count = {
  arguments?: InputMaybe<Array<accounts_select_column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<accounts_bool_exp>;
  predicate: Int_comparison_exp;
};

/** aggregate fields of "accounts" */
export type accounts_aggregate_fields = {
  __typename?: "accounts_aggregate_fields";
  avg?: Maybe<accounts_avg_fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<accounts_max_fields>;
  min?: Maybe<accounts_min_fields>;
  stddev?: Maybe<accounts_stddev_fields>;
  stddev_pop?: Maybe<accounts_stddev_pop_fields>;
  stddev_samp?: Maybe<accounts_stddev_samp_fields>;
  sum?: Maybe<accounts_sum_fields>;
  var_pop?: Maybe<accounts_var_pop_fields>;
  var_samp?: Maybe<accounts_var_samp_fields>;
  variance?: Maybe<accounts_variance_fields>;
};

/** aggregate fields of "accounts" */
export type accounts_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<accounts_select_column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "accounts" */
export type accounts_aggregate_order_by = {
  avg?: InputMaybe<accounts_avg_order_by>;
  count?: InputMaybe<order_by>;
  max?: InputMaybe<accounts_max_order_by>;
  min?: InputMaybe<accounts_min_order_by>;
  stddev?: InputMaybe<accounts_stddev_order_by>;
  stddev_pop?: InputMaybe<accounts_stddev_pop_order_by>;
  stddev_samp?: InputMaybe<accounts_stddev_samp_order_by>;
  sum?: InputMaybe<accounts_sum_order_by>;
  var_pop?: InputMaybe<accounts_var_pop_order_by>;
  var_samp?: InputMaybe<accounts_var_samp_order_by>;
  variance?: InputMaybe<accounts_variance_order_by>;
};

/** input type for inserting array relation for remote table "accounts" */
export type accounts_arr_rel_insert_input = {
  data: Array<accounts_insert_input>;
  /** upsert condition */
  on_conflict?: InputMaybe<accounts_on_conflict>;
};

/** aggregate avg on columns */
export type accounts_avg_fields = {
  __typename?: "accounts_avg_fields";
  expires_at?: Maybe<Scalars["Float"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "accounts" */
export type accounts_avg_order_by = {
  expires_at?: InputMaybe<order_by>;
  refresh_token_expires_in?: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type accounts_bool_exp = {
  _and?: InputMaybe<Array<accounts_bool_exp>>;
  _not?: InputMaybe<accounts_bool_exp>;
  _or?: InputMaybe<Array<accounts_bool_exp>>;
  access_token?: InputMaybe<String_comparison_exp>;
  expires_at?: InputMaybe<bigint_comparison_exp>;
  id?: InputMaybe<uuid_comparison_exp>;
  id_token?: InputMaybe<String_comparison_exp>;
  oauth_token?: InputMaybe<String_comparison_exp>;
  oauth_token_secret?: InputMaybe<String_comparison_exp>;
  provider?: InputMaybe<String_comparison_exp>;
  providerAccountId?: InputMaybe<String_comparison_exp>;
  refresh_token?: InputMaybe<String_comparison_exp>;
  refresh_token_expires_in?: InputMaybe<bigint_comparison_exp>;
  scope?: InputMaybe<String_comparison_exp>;
  session_state?: InputMaybe<String_comparison_exp>;
  token_type?: InputMaybe<String_comparison_exp>;
  type?: InputMaybe<String_comparison_exp>;
  user?: InputMaybe<user_bool_exp>;
  userId?: InputMaybe<uuid_comparison_exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum accounts_constraint {
  /** unique or primary key constraint on columns "id" */
  accounts_pkey = "accounts_pkey",
}

/** input type for incrementing numeric columns in table "accounts" */
export type accounts_inc_input = {
  expires_at?: InputMaybe<Scalars["bigint"]["input"]>;
  refresh_token_expires_in?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "accounts" */
export type accounts_insert_input = {
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
  user?: InputMaybe<user_obj_rel_insert_input>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type accounts_max_fields = {
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
export type accounts_max_order_by = {
  access_token?: InputMaybe<order_by>;
  expires_at?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  id_token?: InputMaybe<order_by>;
  oauth_token?: InputMaybe<order_by>;
  oauth_token_secret?: InputMaybe<order_by>;
  provider?: InputMaybe<order_by>;
  providerAccountId?: InputMaybe<order_by>;
  refresh_token?: InputMaybe<order_by>;
  refresh_token_expires_in?: InputMaybe<order_by>;
  scope?: InputMaybe<order_by>;
  session_state?: InputMaybe<order_by>;
  token_type?: InputMaybe<order_by>;
  type?: InputMaybe<order_by>;
  userId?: InputMaybe<order_by>;
};

/** aggregate min on columns */
export type accounts_min_fields = {
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
export type accounts_min_order_by = {
  access_token?: InputMaybe<order_by>;
  expires_at?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  id_token?: InputMaybe<order_by>;
  oauth_token?: InputMaybe<order_by>;
  oauth_token_secret?: InputMaybe<order_by>;
  provider?: InputMaybe<order_by>;
  providerAccountId?: InputMaybe<order_by>;
  refresh_token?: InputMaybe<order_by>;
  refresh_token_expires_in?: InputMaybe<order_by>;
  scope?: InputMaybe<order_by>;
  session_state?: InputMaybe<order_by>;
  token_type?: InputMaybe<order_by>;
  type?: InputMaybe<order_by>;
  userId?: InputMaybe<order_by>;
};

/** response of any mutation on the table "accounts" */
export type accounts_mutation_response = {
  __typename?: "accounts_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<accounts>;
};

/** on_conflict condition type for table "accounts" */
export type accounts_on_conflict = {
  constraint: accounts_constraint;
  update_columns?: Array<accounts_update_column>;
  where?: InputMaybe<accounts_bool_exp>;
};

/** Ordering options when selecting data from "accounts". */
export type accounts_order_by = {
  access_token?: InputMaybe<order_by>;
  expires_at?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  id_token?: InputMaybe<order_by>;
  oauth_token?: InputMaybe<order_by>;
  oauth_token_secret?: InputMaybe<order_by>;
  provider?: InputMaybe<order_by>;
  providerAccountId?: InputMaybe<order_by>;
  refresh_token?: InputMaybe<order_by>;
  refresh_token_expires_in?: InputMaybe<order_by>;
  scope?: InputMaybe<order_by>;
  session_state?: InputMaybe<order_by>;
  token_type?: InputMaybe<order_by>;
  type?: InputMaybe<order_by>;
  user?: InputMaybe<user_order_by>;
  userId?: InputMaybe<order_by>;
};

/** primary key columns input for table: accounts */
export type accounts_pk_columns_input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "accounts" */
export enum accounts_select_column {
  /** column name */
  access_token = "access_token",
  /** column name */
  expires_at = "expires_at",
  /** column name */
  id = "id",
  /** column name */
  id_token = "id_token",
  /** column name */
  oauth_token = "oauth_token",
  /** column name */
  oauth_token_secret = "oauth_token_secret",
  /** column name */
  provider = "provider",
  /** column name */
  providerAccountId = "providerAccountId",
  /** column name */
  refresh_token = "refresh_token",
  /** column name */
  refresh_token_expires_in = "refresh_token_expires_in",
  /** column name */
  scope = "scope",
  /** column name */
  session_state = "session_state",
  /** column name */
  token_type = "token_type",
  /** column name */
  type = "type",
  /** column name */
  userId = "userId",
}

/** input type for updating data in table "accounts" */
export type accounts_set_input = {
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
export type accounts_stddev_fields = {
  __typename?: "accounts_stddev_fields";
  expires_at?: Maybe<Scalars["Float"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "accounts" */
export type accounts_stddev_order_by = {
  expires_at?: InputMaybe<order_by>;
  refresh_token_expires_in?: InputMaybe<order_by>;
};

/** aggregate stddev_pop on columns */
export type accounts_stddev_pop_fields = {
  __typename?: "accounts_stddev_pop_fields";
  expires_at?: Maybe<Scalars["Float"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "accounts" */
export type accounts_stddev_pop_order_by = {
  expires_at?: InputMaybe<order_by>;
  refresh_token_expires_in?: InputMaybe<order_by>;
};

/** aggregate stddev_samp on columns */
export type accounts_stddev_samp_fields = {
  __typename?: "accounts_stddev_samp_fields";
  expires_at?: Maybe<Scalars["Float"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "accounts" */
export type accounts_stddev_samp_order_by = {
  expires_at?: InputMaybe<order_by>;
  refresh_token_expires_in?: InputMaybe<order_by>;
};

/** Streaming cursor of the table "accounts" */
export type accounts_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: accounts_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type accounts_stream_cursor_value_input = {
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
export type accounts_sum_fields = {
  __typename?: "accounts_sum_fields";
  expires_at?: Maybe<Scalars["bigint"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by sum() on columns of table "accounts" */
export type accounts_sum_order_by = {
  expires_at?: InputMaybe<order_by>;
  refresh_token_expires_in?: InputMaybe<order_by>;
};

/** update columns of table "accounts" */
export enum accounts_update_column {
  /** column name */
  access_token = "access_token",
  /** column name */
  expires_at = "expires_at",
  /** column name */
  id = "id",
  /** column name */
  id_token = "id_token",
  /** column name */
  oauth_token = "oauth_token",
  /** column name */
  oauth_token_secret = "oauth_token_secret",
  /** column name */
  provider = "provider",
  /** column name */
  providerAccountId = "providerAccountId",
  /** column name */
  refresh_token = "refresh_token",
  /** column name */
  refresh_token_expires_in = "refresh_token_expires_in",
  /** column name */
  scope = "scope",
  /** column name */
  session_state = "session_state",
  /** column name */
  token_type = "token_type",
  /** column name */
  type = "type",
  /** column name */
  userId = "userId",
}

export type accounts_updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<accounts_inc_input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<accounts_set_input>;
  /** filter the rows which have to be updated */
  where: accounts_bool_exp;
};

/** aggregate var_pop on columns */
export type accounts_var_pop_fields = {
  __typename?: "accounts_var_pop_fields";
  expires_at?: Maybe<Scalars["Float"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "accounts" */
export type accounts_var_pop_order_by = {
  expires_at?: InputMaybe<order_by>;
  refresh_token_expires_in?: InputMaybe<order_by>;
};

/** aggregate var_samp on columns */
export type accounts_var_samp_fields = {
  __typename?: "accounts_var_samp_fields";
  expires_at?: Maybe<Scalars["Float"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "accounts" */
export type accounts_var_samp_order_by = {
  expires_at?: InputMaybe<order_by>;
  refresh_token_expires_in?: InputMaybe<order_by>;
};

/** aggregate variance on columns */
export type accounts_variance_fields = {
  __typename?: "accounts_variance_fields";
  expires_at?: Maybe<Scalars["Float"]["output"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "accounts" */
export type accounts_variance_order_by = {
  expires_at?: InputMaybe<order_by>;
  refresh_token_expires_in?: InputMaybe<order_by>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type bigint_comparison_exp = {
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
export type citext_comparison_exp = {
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
export enum cursor_ordering {
  /** ascending ordering of the cursor */
  ASC = "ASC",
  /** descending ordering of the cursor */
  DESC = "DESC",
}

/** columns and relationships of "flat_settings" */
export type flat_settings = {
  __typename?: "flat_settings";
  settings?: Maybe<Scalars["jsonb"]["output"]>;
};

/** columns and relationships of "flat_settings" */
export type flat_settingssettingsArgs = {
  path?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregated selection of "flat_settings" */
export type flat_settings_aggregate = {
  __typename?: "flat_settings_aggregate";
  aggregate?: Maybe<flat_settings_aggregate_fields>;
  nodes: Array<flat_settings>;
};

/** aggregate fields of "flat_settings" */
export type flat_settings_aggregate_fields = {
  __typename?: "flat_settings_aggregate_fields";
  count: Scalars["Int"]["output"];
};

/** aggregate fields of "flat_settings" */
export type flat_settings_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<flat_settings_select_column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "flat_settings". All fields are combined with a logical 'AND'. */
export type flat_settings_bool_exp = {
  _and?: InputMaybe<Array<flat_settings_bool_exp>>;
  _not?: InputMaybe<flat_settings_bool_exp>;
  _or?: InputMaybe<Array<flat_settings_bool_exp>>;
  settings?: InputMaybe<jsonb_comparison_exp>;
};

/** Ordering options when selecting data from "flat_settings". */
export type flat_settings_order_by = {
  settings?: InputMaybe<order_by>;
};

/** select columns of table "flat_settings" */
export enum flat_settings_select_column {
  /** column name */
  settings = "settings",
}

/** Streaming cursor of the table "flat_settings" */
export type flat_settings_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: flat_settings_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type flat_settings_stream_cursor_value_input = {
  settings?: InputMaybe<Scalars["jsonb"]["input"]>;
};

export type jsonb_cast_exp = {
  String?: InputMaybe<String_comparison_exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type jsonb_comparison_exp = {
  _cast?: InputMaybe<jsonb_cast_exp>;
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
export type mutation_root = {
  __typename?: "mutation_root";
  /** delete data from the table: "Role" */
  delete_Role?: Maybe<Role_mutation_response>;
  /** delete single row from the table: "Role" */
  delete_Role_by_pk?: Maybe<Role>;
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<accounts_mutation_response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<accounts>;
  /** delete data from the table: "sessions" */
  delete_sessions?: Maybe<sessions_mutation_response>;
  /** delete single row from the table: "sessions" */
  delete_sessions_by_pk?: Maybe<sessions>;
  /** delete data from the table: "settings" */
  delete_settings?: Maybe<settings_mutation_response>;
  /** delete single row from the table: "settings" */
  delete_settings_by_pk?: Maybe<settings>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<user_mutation_response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<user>;
  /** delete data from the table: "user_role" */
  delete_user_role?: Maybe<user_role_mutation_response>;
  /** delete single row from the table: "user_role" */
  delete_user_role_by_pk?: Maybe<user_role>;
  /** delete data from the table: "verification_tokens" */
  delete_verification_tokens?: Maybe<verification_tokens_mutation_response>;
  /** delete single row from the table: "verification_tokens" */
  delete_verification_tokens_by_pk?: Maybe<verification_tokens>;
  /** Given a prompt and a model generate and return an embedding for that */
  embed_prompt?: Maybe<EmbedPromptOutput>;
  /** insert data into the table: "Role" */
  insert_Role?: Maybe<Role_mutation_response>;
  /** insert a single row into the table: "Role" */
  insert_Role_one?: Maybe<Role>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<accounts_mutation_response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<accounts>;
  /** insert data into the table: "sessions" */
  insert_sessions?: Maybe<sessions_mutation_response>;
  /** insert a single row into the table: "sessions" */
  insert_sessions_one?: Maybe<sessions>;
  /** insert data into the table: "settings" */
  insert_settings?: Maybe<settings_mutation_response>;
  /** insert a single row into the table: "settings" */
  insert_settings_one?: Maybe<settings>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<user_mutation_response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<user>;
  /** insert data into the table: "user_role" */
  insert_user_role?: Maybe<user_role_mutation_response>;
  /** insert a single row into the table: "user_role" */
  insert_user_role_one?: Maybe<user_role>;
  /** insert data into the table: "verification_tokens" */
  insert_verification_tokens?: Maybe<verification_tokens_mutation_response>;
  /** insert a single row into the table: "verification_tokens" */
  insert_verification_tokens_one?: Maybe<verification_tokens>;
  /** Start the processing of tags via machine learning ollama multi modal vision model for assets provided */
  ml_tag_batch: Scalars["String"]["output"];
  /** Generate ML Tags for a single asset */
  ml_tag_single?: Maybe<MLTagOutput>;
  /** Stops syncing a storage point by name */
  stop_sync_storage_point?: Maybe<StopSyncOutput>;
  sync_storage_point?: Maybe<SyncResponse>;
  /** update data of the table: "Role" */
  update_Role?: Maybe<Role_mutation_response>;
  /** update single row of the table: "Role" */
  update_Role_by_pk?: Maybe<Role>;
  /** update multiples rows of table: "Role" */
  update_Role_many?: Maybe<Array<Maybe<Role_mutation_response>>>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<accounts_mutation_response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<accounts>;
  /** update multiples rows of table: "accounts" */
  update_accounts_many?: Maybe<Array<Maybe<accounts_mutation_response>>>;
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<sessions_mutation_response>;
  /** update single row of the table: "sessions" */
  update_sessions_by_pk?: Maybe<sessions>;
  /** update multiples rows of table: "sessions" */
  update_sessions_many?: Maybe<Array<Maybe<sessions_mutation_response>>>;
  /** update data of the table: "settings" */
  update_settings?: Maybe<settings_mutation_response>;
  /** update single row of the table: "settings" */
  update_settings_by_pk?: Maybe<settings>;
  /** update multiples rows of table: "settings" */
  update_settings_many?: Maybe<Array<Maybe<settings_mutation_response>>>;
  /** update data of the table: "user" */
  update_user?: Maybe<user_mutation_response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<user>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<user_mutation_response>>>;
  /** update data of the table: "user_role" */
  update_user_role?: Maybe<user_role_mutation_response>;
  /** update single row of the table: "user_role" */
  update_user_role_by_pk?: Maybe<user_role>;
  /** update multiples rows of table: "user_role" */
  update_user_role_many?: Maybe<Array<Maybe<user_role_mutation_response>>>;
  /** update data of the table: "verification_tokens" */
  update_verification_tokens?: Maybe<verification_tokens_mutation_response>;
  /** update single row of the table: "verification_tokens" */
  update_verification_tokens_by_pk?: Maybe<verification_tokens>;
  /** update multiples rows of table: "verification_tokens" */
  update_verification_tokens_many?: Maybe<
    Array<Maybe<verification_tokens_mutation_response>>
  >;
};

/** mutation root */
export type mutation_rootdelete_RoleArgs = {
  where: Role_bool_exp;
};

/** mutation root */
export type mutation_rootdelete_Role_by_pkArgs = {
  value: Scalars["String"]["input"];
};

/** mutation root */
export type mutation_rootdelete_accountsArgs = {
  where: accounts_bool_exp;
};

/** mutation root */
export type mutation_rootdelete_accounts_by_pkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type mutation_rootdelete_sessionsArgs = {
  where: sessions_bool_exp;
};

/** mutation root */
export type mutation_rootdelete_sessions_by_pkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type mutation_rootdelete_settingsArgs = {
  where: settings_bool_exp;
};

/** mutation root */
export type mutation_rootdelete_settings_by_pkArgs = {
  name: Scalars["String"]["input"];
};

/** mutation root */
export type mutation_rootdelete_userArgs = {
  where: user_bool_exp;
};

/** mutation root */
export type mutation_rootdelete_user_by_pkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type mutation_rootdelete_user_roleArgs = {
  where: user_role_bool_exp;
};

/** mutation root */
export type mutation_rootdelete_user_role_by_pkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type mutation_rootdelete_verification_tokensArgs = {
  where: verification_tokens_bool_exp;
};

/** mutation root */
export type mutation_rootdelete_verification_tokens_by_pkArgs = {
  token: Scalars["String"]["input"];
};

/** mutation root */
export type mutation_rootembed_promptArgs = {
  model?: InputMaybe<Scalars["String"]["input"]>;
  prompt: Scalars["String"]["input"];
};

/** mutation root */
export type mutation_rootinsert_RoleArgs = {
  objects: Array<Role_insert_input>;
  on_conflict?: InputMaybe<Role_on_conflict>;
};

/** mutation root */
export type mutation_rootinsert_Role_oneArgs = {
  object: Role_insert_input;
  on_conflict?: InputMaybe<Role_on_conflict>;
};

/** mutation root */
export type mutation_rootinsert_accountsArgs = {
  objects: Array<accounts_insert_input>;
  on_conflict?: InputMaybe<accounts_on_conflict>;
};

/** mutation root */
export type mutation_rootinsert_accounts_oneArgs = {
  object: accounts_insert_input;
  on_conflict?: InputMaybe<accounts_on_conflict>;
};

/** mutation root */
export type mutation_rootinsert_sessionsArgs = {
  objects: Array<sessions_insert_input>;
  on_conflict?: InputMaybe<sessions_on_conflict>;
};

/** mutation root */
export type mutation_rootinsert_sessions_oneArgs = {
  object: sessions_insert_input;
  on_conflict?: InputMaybe<sessions_on_conflict>;
};

/** mutation root */
export type mutation_rootinsert_settingsArgs = {
  objects: Array<settings_insert_input>;
  on_conflict?: InputMaybe<settings_on_conflict>;
};

/** mutation root */
export type mutation_rootinsert_settings_oneArgs = {
  object: settings_insert_input;
  on_conflict?: InputMaybe<settings_on_conflict>;
};

/** mutation root */
export type mutation_rootinsert_userArgs = {
  objects: Array<user_insert_input>;
  on_conflict?: InputMaybe<user_on_conflict>;
};

/** mutation root */
export type mutation_rootinsert_user_oneArgs = {
  object: user_insert_input;
  on_conflict?: InputMaybe<user_on_conflict>;
};

/** mutation root */
export type mutation_rootinsert_user_roleArgs = {
  objects: Array<user_role_insert_input>;
  on_conflict?: InputMaybe<user_role_on_conflict>;
};

/** mutation root */
export type mutation_rootinsert_user_role_oneArgs = {
  object: user_role_insert_input;
  on_conflict?: InputMaybe<user_role_on_conflict>;
};

/** mutation root */
export type mutation_rootinsert_verification_tokensArgs = {
  objects: Array<verification_tokens_insert_input>;
  on_conflict?: InputMaybe<verification_tokens_on_conflict>;
};

/** mutation root */
export type mutation_rootinsert_verification_tokens_oneArgs = {
  object: verification_tokens_insert_input;
  on_conflict?: InputMaybe<verification_tokens_on_conflict>;
};

/** mutation root */
export type mutation_rootml_tag_batchArgs = {
  asset_ids: Array<Scalars["String"]["input"]>;
};

/** mutation root */
export type mutation_rootml_tag_singleArgs = {
  asset_id: Scalars["uuid"]["input"];
};

/** mutation root */
export type mutation_rootstop_sync_storage_pointArgs = {
  name: Scalars["String"]["input"];
};

/** mutation root */
export type mutation_rootsync_storage_pointArgs = {
  name: Scalars["String"]["input"];
};

/** mutation root */
export type mutation_rootupdate_RoleArgs = {
  _set?: InputMaybe<Role_set_input>;
  where: Role_bool_exp;
};

/** mutation root */
export type mutation_rootupdate_Role_by_pkArgs = {
  _set?: InputMaybe<Role_set_input>;
  pk_columns: Role_pk_columns_input;
};

/** mutation root */
export type mutation_rootupdate_Role_manyArgs = {
  updates: Array<Role_updates>;
};

/** mutation root */
export type mutation_rootupdate_accountsArgs = {
  _inc?: InputMaybe<accounts_inc_input>;
  _set?: InputMaybe<accounts_set_input>;
  where: accounts_bool_exp;
};

/** mutation root */
export type mutation_rootupdate_accounts_by_pkArgs = {
  _inc?: InputMaybe<accounts_inc_input>;
  _set?: InputMaybe<accounts_set_input>;
  pk_columns: accounts_pk_columns_input;
};

/** mutation root */
export type mutation_rootupdate_accounts_manyArgs = {
  updates: Array<accounts_updates>;
};

/** mutation root */
export type mutation_rootupdate_sessionsArgs = {
  _set?: InputMaybe<sessions_set_input>;
  where: sessions_bool_exp;
};

/** mutation root */
export type mutation_rootupdate_sessions_by_pkArgs = {
  _set?: InputMaybe<sessions_set_input>;
  pk_columns: sessions_pk_columns_input;
};

/** mutation root */
export type mutation_rootupdate_sessions_manyArgs = {
  updates: Array<sessions_updates>;
};

/** mutation root */
export type mutation_rootupdate_settingsArgs = {
  _append?: InputMaybe<settings_append_input>;
  _delete_at_path?: InputMaybe<settings_delete_at_path_input>;
  _delete_elem?: InputMaybe<settings_delete_elem_input>;
  _delete_key?: InputMaybe<settings_delete_key_input>;
  _prepend?: InputMaybe<settings_prepend_input>;
  _set?: InputMaybe<settings_set_input>;
  where: settings_bool_exp;
};

/** mutation root */
export type mutation_rootupdate_settings_by_pkArgs = {
  _append?: InputMaybe<settings_append_input>;
  _delete_at_path?: InputMaybe<settings_delete_at_path_input>;
  _delete_elem?: InputMaybe<settings_delete_elem_input>;
  _delete_key?: InputMaybe<settings_delete_key_input>;
  _prepend?: InputMaybe<settings_prepend_input>;
  _set?: InputMaybe<settings_set_input>;
  pk_columns: settings_pk_columns_input;
};

/** mutation root */
export type mutation_rootupdate_settings_manyArgs = {
  updates: Array<settings_updates>;
};

/** mutation root */
export type mutation_rootupdate_userArgs = {
  _append?: InputMaybe<user_append_input>;
  _delete_at_path?: InputMaybe<user_delete_at_path_input>;
  _delete_elem?: InputMaybe<user_delete_elem_input>;
  _delete_key?: InputMaybe<user_delete_key_input>;
  _prepend?: InputMaybe<user_prepend_input>;
  _set?: InputMaybe<user_set_input>;
  where: user_bool_exp;
};

/** mutation root */
export type mutation_rootupdate_user_by_pkArgs = {
  _append?: InputMaybe<user_append_input>;
  _delete_at_path?: InputMaybe<user_delete_at_path_input>;
  _delete_elem?: InputMaybe<user_delete_elem_input>;
  _delete_key?: InputMaybe<user_delete_key_input>;
  _prepend?: InputMaybe<user_prepend_input>;
  _set?: InputMaybe<user_set_input>;
  pk_columns: user_pk_columns_input;
};

/** mutation root */
export type mutation_rootupdate_user_manyArgs = {
  updates: Array<user_updates>;
};

/** mutation root */
export type mutation_rootupdate_user_roleArgs = {
  _inc?: InputMaybe<user_role_inc_input>;
  _set?: InputMaybe<user_role_set_input>;
  where: user_role_bool_exp;
};

/** mutation root */
export type mutation_rootupdate_user_role_by_pkArgs = {
  _inc?: InputMaybe<user_role_inc_input>;
  _set?: InputMaybe<user_role_set_input>;
  pk_columns: user_role_pk_columns_input;
};

/** mutation root */
export type mutation_rootupdate_user_role_manyArgs = {
  updates: Array<user_role_updates>;
};

/** mutation root */
export type mutation_rootupdate_verification_tokensArgs = {
  _set?: InputMaybe<verification_tokens_set_input>;
  where: verification_tokens_bool_exp;
};

/** mutation root */
export type mutation_rootupdate_verification_tokens_by_pkArgs = {
  _set?: InputMaybe<verification_tokens_set_input>;
  pk_columns: verification_tokens_pk_columns_input;
};

/** mutation root */
export type mutation_rootupdate_verification_tokens_manyArgs = {
  updates: Array<verification_tokens_updates>;
};

/** column ordering options */
export enum order_by {
  /** in ascending order, nulls last */
  asc = "asc",
  /** in ascending order, nulls first */
  asc_nulls_first = "asc_nulls_first",
  /** in ascending order, nulls last */
  asc_nulls_last = "asc_nulls_last",
  /** in descending order, nulls first */
  desc = "desc",
  /** in descending order, nulls first */
  desc_nulls_first = "desc_nulls_first",
  /** in descending order, nulls last */
  desc_nulls_last = "desc_nulls_last",
}

export type query_root = {
  __typename?: "query_root";
  /** fetch data from the table: "Role" */
  Role: Array<Role>;
  /** fetch aggregated fields from the table: "Role" */
  Role_aggregate: Role_aggregate;
  /** fetch data from the table: "Role" using primary key columns */
  Role_by_pk?: Maybe<Role>;
  /** An array relationship */
  accounts: Array<accounts>;
  /** An aggregate relationship */
  accounts_aggregate: accounts_aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<accounts>;
  /** Get The version of the backend */
  backend_version?: Maybe<VersionOutput>;
  /** fetch data from the table: "flat_settings" */
  flat_settings: Array<flat_settings>;
  /** fetch aggregated fields from the table: "flat_settings" */
  flat_settings_aggregate: flat_settings_aggregate;
  /** An array relationship */
  sessions: Array<sessions>;
  /** An aggregate relationship */
  sessions_aggregate: sessions_aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<sessions>;
  /** fetch data from the table: "settings" */
  settings: Array<settings>;
  /** fetch aggregated fields from the table: "settings" */
  settings_aggregate: settings_aggregate;
  /** fetch data from the table: "settings" using primary key columns */
  settings_by_pk?: Maybe<settings>;
  /** fetch data from the table: "user" */
  user: Array<user>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: user_aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<user>;
  /** fetch data from the table: "user_role" */
  user_role: Array<user_role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: user_role_aggregate;
  /** fetch data from the table: "user_role" using primary key columns */
  user_role_by_pk?: Maybe<user_role>;
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<verification_tokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: verification_tokens_aggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk?: Maybe<verification_tokens>;
};

export type query_rootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Role_order_by>>;
  where?: InputMaybe<Role_bool_exp>;
};

export type query_rootRole_aggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Role_order_by>>;
  where?: InputMaybe<Role_bool_exp>;
};

export type query_rootRole_by_pkArgs = {
  value: Scalars["String"]["input"];
};

export type query_rootaccountsArgs = {
  distinct_on?: InputMaybe<Array<accounts_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<accounts_order_by>>;
  where?: InputMaybe<accounts_bool_exp>;
};

export type query_rootaccounts_aggregateArgs = {
  distinct_on?: InputMaybe<Array<accounts_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<accounts_order_by>>;
  where?: InputMaybe<accounts_bool_exp>;
};

export type query_rootaccounts_by_pkArgs = {
  id: Scalars["uuid"]["input"];
};

export type query_rootflat_settingsArgs = {
  distinct_on?: InputMaybe<Array<flat_settings_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<flat_settings_order_by>>;
  where?: InputMaybe<flat_settings_bool_exp>;
};

export type query_rootflat_settings_aggregateArgs = {
  distinct_on?: InputMaybe<Array<flat_settings_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<flat_settings_order_by>>;
  where?: InputMaybe<flat_settings_bool_exp>;
};

export type query_rootsessionsArgs = {
  distinct_on?: InputMaybe<Array<sessions_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<sessions_order_by>>;
  where?: InputMaybe<sessions_bool_exp>;
};

export type query_rootsessions_aggregateArgs = {
  distinct_on?: InputMaybe<Array<sessions_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<sessions_order_by>>;
  where?: InputMaybe<sessions_bool_exp>;
};

export type query_rootsessions_by_pkArgs = {
  id: Scalars["uuid"]["input"];
};

export type query_rootsettingsArgs = {
  distinct_on?: InputMaybe<Array<settings_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<settings_order_by>>;
  where?: InputMaybe<settings_bool_exp>;
};

export type query_rootsettings_aggregateArgs = {
  distinct_on?: InputMaybe<Array<settings_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<settings_order_by>>;
  where?: InputMaybe<settings_bool_exp>;
};

export type query_rootsettings_by_pkArgs = {
  name: Scalars["String"]["input"];
};

export type query_rootuserArgs = {
  distinct_on?: InputMaybe<Array<user_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<user_order_by>>;
  where?: InputMaybe<user_bool_exp>;
};

export type query_rootuser_aggregateArgs = {
  distinct_on?: InputMaybe<Array<user_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<user_order_by>>;
  where?: InputMaybe<user_bool_exp>;
};

export type query_rootuser_by_pkArgs = {
  id: Scalars["uuid"]["input"];
};

export type query_rootuser_roleArgs = {
  distinct_on?: InputMaybe<Array<user_role_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<user_role_order_by>>;
  where?: InputMaybe<user_role_bool_exp>;
};

export type query_rootuser_role_aggregateArgs = {
  distinct_on?: InputMaybe<Array<user_role_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<user_role_order_by>>;
  where?: InputMaybe<user_role_bool_exp>;
};

export type query_rootuser_role_by_pkArgs = {
  id: Scalars["Int"]["input"];
};

export type query_rootverification_tokensArgs = {
  distinct_on?: InputMaybe<Array<verification_tokens_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<verification_tokens_order_by>>;
  where?: InputMaybe<verification_tokens_bool_exp>;
};

export type query_rootverification_tokens_aggregateArgs = {
  distinct_on?: InputMaybe<Array<verification_tokens_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<verification_tokens_order_by>>;
  where?: InputMaybe<verification_tokens_bool_exp>;
};

export type query_rootverification_tokens_by_pkArgs = {
  token: Scalars["String"]["input"];
};

/** columns and relationships of "sessions" */
export type sessions = {
  __typename?: "sessions";
  expires?: Maybe<Scalars["timestamptz"]["output"]>;
  id: Scalars["uuid"]["output"];
  sessionToken: Scalars["String"]["output"];
  /** An object relationship */
  user: user;
  userId: Scalars["uuid"]["output"];
};

/** aggregated selection of "sessions" */
export type sessions_aggregate = {
  __typename?: "sessions_aggregate";
  aggregate?: Maybe<sessions_aggregate_fields>;
  nodes: Array<sessions>;
};

export type sessions_aggregate_bool_exp = {
  count?: InputMaybe<sessions_aggregate_bool_exp_count>;
};

export type sessions_aggregate_bool_exp_count = {
  arguments?: InputMaybe<Array<sessions_select_column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<sessions_bool_exp>;
  predicate: Int_comparison_exp;
};

/** aggregate fields of "sessions" */
export type sessions_aggregate_fields = {
  __typename?: "sessions_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<sessions_max_fields>;
  min?: Maybe<sessions_min_fields>;
};

/** aggregate fields of "sessions" */
export type sessions_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<sessions_select_column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "sessions" */
export type sessions_aggregate_order_by = {
  count?: InputMaybe<order_by>;
  max?: InputMaybe<sessions_max_order_by>;
  min?: InputMaybe<sessions_min_order_by>;
};

/** input type for inserting array relation for remote table "sessions" */
export type sessions_arr_rel_insert_input = {
  data: Array<sessions_insert_input>;
  /** upsert condition */
  on_conflict?: InputMaybe<sessions_on_conflict>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type sessions_bool_exp = {
  _and?: InputMaybe<Array<sessions_bool_exp>>;
  _not?: InputMaybe<sessions_bool_exp>;
  _or?: InputMaybe<Array<sessions_bool_exp>>;
  expires?: InputMaybe<timestamptz_comparison_exp>;
  id?: InputMaybe<uuid_comparison_exp>;
  sessionToken?: InputMaybe<String_comparison_exp>;
  user?: InputMaybe<user_bool_exp>;
  userId?: InputMaybe<uuid_comparison_exp>;
};

/** unique or primary key constraints on table "sessions" */
export enum sessions_constraint {
  /** unique or primary key constraint on columns "id" */
  sessions_pkey = "sessions_pkey",
}

/** input type for inserting data into table "sessions" */
export type sessions_insert_input = {
  expires?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  sessionToken?: InputMaybe<Scalars["String"]["input"]>;
  user?: InputMaybe<user_obj_rel_insert_input>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type sessions_max_fields = {
  __typename?: "sessions_max_fields";
  expires?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  sessionToken?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "sessions" */
export type sessions_max_order_by = {
  expires?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  sessionToken?: InputMaybe<order_by>;
  userId?: InputMaybe<order_by>;
};

/** aggregate min on columns */
export type sessions_min_fields = {
  __typename?: "sessions_min_fields";
  expires?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  sessionToken?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "sessions" */
export type sessions_min_order_by = {
  expires?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  sessionToken?: InputMaybe<order_by>;
  userId?: InputMaybe<order_by>;
};

/** response of any mutation on the table "sessions" */
export type sessions_mutation_response = {
  __typename?: "sessions_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<sessions>;
};

/** on_conflict condition type for table "sessions" */
export type sessions_on_conflict = {
  constraint: sessions_constraint;
  update_columns?: Array<sessions_update_column>;
  where?: InputMaybe<sessions_bool_exp>;
};

/** Ordering options when selecting data from "sessions". */
export type sessions_order_by = {
  expires?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  sessionToken?: InputMaybe<order_by>;
  user?: InputMaybe<user_order_by>;
  userId?: InputMaybe<order_by>;
};

/** primary key columns input for table: sessions */
export type sessions_pk_columns_input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "sessions" */
export enum sessions_select_column {
  /** column name */
  expires = "expires",
  /** column name */
  id = "id",
  /** column name */
  sessionToken = "sessionToken",
  /** column name */
  userId = "userId",
}

/** input type for updating data in table "sessions" */
export type sessions_set_input = {
  expires?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  sessionToken?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "sessions" */
export type sessions_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: sessions_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type sessions_stream_cursor_value_input = {
  expires?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  sessionToken?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "sessions" */
export enum sessions_update_column {
  /** column name */
  expires = "expires",
  /** column name */
  id = "id",
  /** column name */
  sessionToken = "sessionToken",
  /** column name */
  userId = "userId",
}

export type sessions_updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<sessions_set_input>;
  /** filter the rows which have to be updated */
  where: sessions_bool_exp;
};

/** Contains all the settings for the application. */
export type settings = {
  __typename?: "settings";
  /** The nested name of the setting. Used as a primary key (ex: storage.local.root) */
  name: Scalars["String"]["output"];
  /** The value of the setting as JSONB */
  value: Scalars["jsonb"]["output"];
};

/** Contains all the settings for the application. */
export type settingsvalueArgs = {
  path?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregated selection of "settings" */
export type settings_aggregate = {
  __typename?: "settings_aggregate";
  aggregate?: Maybe<settings_aggregate_fields>;
  nodes: Array<settings>;
};

/** aggregate fields of "settings" */
export type settings_aggregate_fields = {
  __typename?: "settings_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<settings_max_fields>;
  min?: Maybe<settings_min_fields>;
};

/** aggregate fields of "settings" */
export type settings_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<settings_select_column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type settings_append_input = {
  /** The value of the setting as JSONB */
  value?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** Boolean expression to filter rows from the table "settings". All fields are combined with a logical 'AND'. */
export type settings_bool_exp = {
  _and?: InputMaybe<Array<settings_bool_exp>>;
  _not?: InputMaybe<settings_bool_exp>;
  _or?: InputMaybe<Array<settings_bool_exp>>;
  name?: InputMaybe<String_comparison_exp>;
  value?: InputMaybe<jsonb_comparison_exp>;
};

/** unique or primary key constraints on table "settings" */
export enum settings_constraint {
  /** unique or primary key constraint on columns "name" */
  settings_pkey = "settings_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type settings_delete_at_path_input = {
  /** The value of the setting as JSONB */
  value?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type settings_delete_elem_input = {
  /** The value of the setting as JSONB */
  value?: InputMaybe<Scalars["Int"]["input"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type settings_delete_key_input = {
  /** The value of the setting as JSONB */
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** input type for inserting data into table "settings" */
export type settings_insert_input = {
  /** The nested name of the setting. Used as a primary key (ex: storage.local.root) */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** The value of the setting as JSONB */
  value?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** aggregate max on columns */
export type settings_max_fields = {
  __typename?: "settings_max_fields";
  /** The nested name of the setting. Used as a primary key (ex: storage.local.root) */
  name?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type settings_min_fields = {
  __typename?: "settings_min_fields";
  /** The nested name of the setting. Used as a primary key (ex: storage.local.root) */
  name?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "settings" */
export type settings_mutation_response = {
  __typename?: "settings_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<settings>;
};

/** on_conflict condition type for table "settings" */
export type settings_on_conflict = {
  constraint: settings_constraint;
  update_columns?: Array<settings_update_column>;
  where?: InputMaybe<settings_bool_exp>;
};

/** Ordering options when selecting data from "settings". */
export type settings_order_by = {
  name?: InputMaybe<order_by>;
  value?: InputMaybe<order_by>;
};

/** primary key columns input for table: settings */
export type settings_pk_columns_input = {
  /** The nested name of the setting. Used as a primary key (ex: storage.local.root) */
  name: Scalars["String"]["input"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type settings_prepend_input = {
  /** The value of the setting as JSONB */
  value?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** select columns of table "settings" */
export enum settings_select_column {
  /** column name */
  name = "name",
  /** column name */
  value = "value",
}

/** input type for updating data in table "settings" */
export type settings_set_input = {
  /** The nested name of the setting. Used as a primary key (ex: storage.local.root) */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** The value of the setting as JSONB */
  value?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** Streaming cursor of the table "settings" */
export type settings_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: settings_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type settings_stream_cursor_value_input = {
  /** The nested name of the setting. Used as a primary key (ex: storage.local.root) */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** The value of the setting as JSONB */
  value?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** update columns of table "settings" */
export enum settings_update_column {
  /** column name */
  name = "name",
  /** column name */
  value = "value",
}

export type settings_updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<settings_append_input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<settings_delete_at_path_input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<settings_delete_elem_input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<settings_delete_key_input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<settings_prepend_input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<settings_set_input>;
  /** filter the rows which have to be updated */
  where: settings_bool_exp;
};

export type subscription_root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "Role" */
  Role: Array<Role>;
  /** fetch aggregated fields from the table: "Role" */
  Role_aggregate: Role_aggregate;
  /** fetch data from the table: "Role" using primary key columns */
  Role_by_pk?: Maybe<Role>;
  /** fetch data from the table in a streaming manner: "Role" */
  Role_stream: Array<Role>;
  /** An array relationship */
  accounts: Array<accounts>;
  /** An aggregate relationship */
  accounts_aggregate: accounts_aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<accounts>;
  /** fetch data from the table in a streaming manner: "accounts" */
  accounts_stream: Array<accounts>;
  /** fetch data from the table: "flat_settings" */
  flat_settings: Array<flat_settings>;
  /** fetch aggregated fields from the table: "flat_settings" */
  flat_settings_aggregate: flat_settings_aggregate;
  /** fetch data from the table in a streaming manner: "flat_settings" */
  flat_settings_stream: Array<flat_settings>;
  /** An array relationship */
  sessions: Array<sessions>;
  /** An aggregate relationship */
  sessions_aggregate: sessions_aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<sessions>;
  /** fetch data from the table in a streaming manner: "sessions" */
  sessions_stream: Array<sessions>;
  /** fetch data from the table: "settings" */
  settings: Array<settings>;
  /** fetch aggregated fields from the table: "settings" */
  settings_aggregate: settings_aggregate;
  /** fetch data from the table: "settings" using primary key columns */
  settings_by_pk?: Maybe<settings>;
  /** fetch data from the table in a streaming manner: "settings" */
  settings_stream: Array<settings>;
  /** fetch data from the table: "user" */
  user: Array<user>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: user_aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<user>;
  /** fetch data from the table: "user_role" */
  user_role: Array<user_role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: user_role_aggregate;
  /** fetch data from the table: "user_role" using primary key columns */
  user_role_by_pk?: Maybe<user_role>;
  /** fetch data from the table in a streaming manner: "user_role" */
  user_role_stream: Array<user_role>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<user>;
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<verification_tokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: verification_tokens_aggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk?: Maybe<verification_tokens>;
  /** fetch data from the table in a streaming manner: "verification_tokens" */
  verification_tokens_stream: Array<verification_tokens>;
};

export type subscription_rootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Role_order_by>>;
  where?: InputMaybe<Role_bool_exp>;
};

export type subscription_rootRole_aggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Role_order_by>>;
  where?: InputMaybe<Role_bool_exp>;
};

export type subscription_rootRole_by_pkArgs = {
  value: Scalars["String"]["input"];
};

export type subscription_rootRole_streamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Role_stream_cursor_input>>;
  where?: InputMaybe<Role_bool_exp>;
};

export type subscription_rootaccountsArgs = {
  distinct_on?: InputMaybe<Array<accounts_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<accounts_order_by>>;
  where?: InputMaybe<accounts_bool_exp>;
};

export type subscription_rootaccounts_aggregateArgs = {
  distinct_on?: InputMaybe<Array<accounts_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<accounts_order_by>>;
  where?: InputMaybe<accounts_bool_exp>;
};

export type subscription_rootaccounts_by_pkArgs = {
  id: Scalars["uuid"]["input"];
};

export type subscription_rootaccounts_streamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<accounts_stream_cursor_input>>;
  where?: InputMaybe<accounts_bool_exp>;
};

export type subscription_rootflat_settingsArgs = {
  distinct_on?: InputMaybe<Array<flat_settings_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<flat_settings_order_by>>;
  where?: InputMaybe<flat_settings_bool_exp>;
};

export type subscription_rootflat_settings_aggregateArgs = {
  distinct_on?: InputMaybe<Array<flat_settings_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<flat_settings_order_by>>;
  where?: InputMaybe<flat_settings_bool_exp>;
};

export type subscription_rootflat_settings_streamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<flat_settings_stream_cursor_input>>;
  where?: InputMaybe<flat_settings_bool_exp>;
};

export type subscription_rootsessionsArgs = {
  distinct_on?: InputMaybe<Array<sessions_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<sessions_order_by>>;
  where?: InputMaybe<sessions_bool_exp>;
};

export type subscription_rootsessions_aggregateArgs = {
  distinct_on?: InputMaybe<Array<sessions_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<sessions_order_by>>;
  where?: InputMaybe<sessions_bool_exp>;
};

export type subscription_rootsessions_by_pkArgs = {
  id: Scalars["uuid"]["input"];
};

export type subscription_rootsessions_streamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<sessions_stream_cursor_input>>;
  where?: InputMaybe<sessions_bool_exp>;
};

export type subscription_rootsettingsArgs = {
  distinct_on?: InputMaybe<Array<settings_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<settings_order_by>>;
  where?: InputMaybe<settings_bool_exp>;
};

export type subscription_rootsettings_aggregateArgs = {
  distinct_on?: InputMaybe<Array<settings_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<settings_order_by>>;
  where?: InputMaybe<settings_bool_exp>;
};

export type subscription_rootsettings_by_pkArgs = {
  name: Scalars["String"]["input"];
};

export type subscription_rootsettings_streamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<settings_stream_cursor_input>>;
  where?: InputMaybe<settings_bool_exp>;
};

export type subscription_rootuserArgs = {
  distinct_on?: InputMaybe<Array<user_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<user_order_by>>;
  where?: InputMaybe<user_bool_exp>;
};

export type subscription_rootuser_aggregateArgs = {
  distinct_on?: InputMaybe<Array<user_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<user_order_by>>;
  where?: InputMaybe<user_bool_exp>;
};

export type subscription_rootuser_by_pkArgs = {
  id: Scalars["uuid"]["input"];
};

export type subscription_rootuser_roleArgs = {
  distinct_on?: InputMaybe<Array<user_role_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<user_role_order_by>>;
  where?: InputMaybe<user_role_bool_exp>;
};

export type subscription_rootuser_role_aggregateArgs = {
  distinct_on?: InputMaybe<Array<user_role_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<user_role_order_by>>;
  where?: InputMaybe<user_role_bool_exp>;
};

export type subscription_rootuser_role_by_pkArgs = {
  id: Scalars["Int"]["input"];
};

export type subscription_rootuser_role_streamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<user_role_stream_cursor_input>>;
  where?: InputMaybe<user_role_bool_exp>;
};

export type subscription_rootuser_streamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<user_stream_cursor_input>>;
  where?: InputMaybe<user_bool_exp>;
};

export type subscription_rootverification_tokensArgs = {
  distinct_on?: InputMaybe<Array<verification_tokens_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<verification_tokens_order_by>>;
  where?: InputMaybe<verification_tokens_bool_exp>;
};

export type subscription_rootverification_tokens_aggregateArgs = {
  distinct_on?: InputMaybe<Array<verification_tokens_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<verification_tokens_order_by>>;
  where?: InputMaybe<verification_tokens_bool_exp>;
};

export type subscription_rootverification_tokens_by_pkArgs = {
  token: Scalars["String"]["input"];
};

export type subscription_rootverification_tokens_streamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<verification_tokens_stream_cursor_input>>;
  where?: InputMaybe<verification_tokens_bool_exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type timestamptz_comparison_exp = {
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
export type user = {
  __typename?: "user";
  /** An array relationship */
  accounts: Array<accounts>;
  /** An aggregate relationship */
  accounts_aggregate: accounts_aggregate;
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
  sessions: Array<sessions>;
  /** An aggregate relationship */
  sessions_aggregate: sessions_aggregate;
  /** The currently set theme of the user can be one of any set theme */
  theme_name: Scalars["String"]["output"];
  updated_at: Scalars["timestamptz"]["output"];
  /** An array relationship */
  user_roles: Array<user_role>;
  /** An aggregate relationship */
  user_roles_aggregate: user_role_aggregate;
  /** The username of the user. */
  username: Scalars["citext"]["output"];
};

/** This is the table of all the users of the application along with their data. */
export type useraccountsArgs = {
  distinct_on?: InputMaybe<Array<accounts_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<accounts_order_by>>;
  where?: InputMaybe<accounts_bool_exp>;
};

/** This is the table of all the users of the application along with their data. */
export type useraccounts_aggregateArgs = {
  distinct_on?: InputMaybe<Array<accounts_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<accounts_order_by>>;
  where?: InputMaybe<accounts_bool_exp>;
};

/** This is the table of all the users of the application along with their data. */
export type usermetaArgs = {
  path?: InputMaybe<Scalars["String"]["input"]>;
};

/** This is the table of all the users of the application along with their data. */
export type usersessionsArgs = {
  distinct_on?: InputMaybe<Array<sessions_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<sessions_order_by>>;
  where?: InputMaybe<sessions_bool_exp>;
};

/** This is the table of all the users of the application along with their data. */
export type usersessions_aggregateArgs = {
  distinct_on?: InputMaybe<Array<sessions_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<sessions_order_by>>;
  where?: InputMaybe<sessions_bool_exp>;
};

/** This is the table of all the users of the application along with their data. */
export type useruser_rolesArgs = {
  distinct_on?: InputMaybe<Array<user_role_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<user_role_order_by>>;
  where?: InputMaybe<user_role_bool_exp>;
};

/** This is the table of all the users of the application along with their data. */
export type useruser_roles_aggregateArgs = {
  distinct_on?: InputMaybe<Array<user_role_select_column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<user_role_order_by>>;
  where?: InputMaybe<user_role_bool_exp>;
};

/** aggregated selection of "user" */
export type user_aggregate = {
  __typename?: "user_aggregate";
  aggregate?: Maybe<user_aggregate_fields>;
  nodes: Array<user>;
};

/** aggregate fields of "user" */
export type user_aggregate_fields = {
  __typename?: "user_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<user_max_fields>;
  min?: Maybe<user_min_fields>;
};

/** aggregate fields of "user" */
export type user_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<user_select_column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type user_append_input = {
  /** Extra metadata in JSON format about the user */
  meta?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type user_bool_exp = {
  _and?: InputMaybe<Array<user_bool_exp>>;
  _not?: InputMaybe<user_bool_exp>;
  _or?: InputMaybe<Array<user_bool_exp>>;
  accounts?: InputMaybe<accounts_bool_exp>;
  accounts_aggregate?: InputMaybe<accounts_aggregate_bool_exp>;
  active?: InputMaybe<Boolean_comparison_exp>;
  avatar?: InputMaybe<String_comparison_exp>;
  cell?: InputMaybe<String_comparison_exp>;
  city?: InputMaybe<String_comparison_exp>;
  country?: InputMaybe<String_comparison_exp>;
  created_at?: InputMaybe<timestamptz_comparison_exp>;
  email?: InputMaybe<String_comparison_exp>;
  emailVerified?: InputMaybe<timestamptz_comparison_exp>;
  first_name?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<uuid_comparison_exp>;
  job_title?: InputMaybe<String_comparison_exp>;
  last_activity?: InputMaybe<timestamptz_comparison_exp>;
  last_name?: InputMaybe<String_comparison_exp>;
  meta?: InputMaybe<jsonb_comparison_exp>;
  sessions?: InputMaybe<sessions_bool_exp>;
  sessions_aggregate?: InputMaybe<sessions_aggregate_bool_exp>;
  theme_name?: InputMaybe<String_comparison_exp>;
  updated_at?: InputMaybe<timestamptz_comparison_exp>;
  user_roles?: InputMaybe<user_role_bool_exp>;
  user_roles_aggregate?: InputMaybe<user_role_aggregate_bool_exp>;
  username?: InputMaybe<citext_comparison_exp>;
};

/** unique or primary key constraints on table "user" */
export enum user_constraint {
  /** unique or primary key constraint on columns "email" */
  user_email_key = "user_email_key",
  /** unique or primary key constraint on columns "id" */
  user_pkey = "user_pkey",
  /** unique or primary key constraint on columns "username" */
  user_username_key = "user_username_key",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type user_delete_at_path_input = {
  /** Extra metadata in JSON format about the user */
  meta?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type user_delete_elem_input = {
  /** Extra metadata in JSON format about the user */
  meta?: InputMaybe<Scalars["Int"]["input"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type user_delete_key_input = {
  /** Extra metadata in JSON format about the user */
  meta?: InputMaybe<Scalars["String"]["input"]>;
};

/** input type for inserting data into table "user" */
export type user_insert_input = {
  accounts?: InputMaybe<accounts_arr_rel_insert_input>;
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
  sessions?: InputMaybe<sessions_arr_rel_insert_input>;
  /** The currently set theme of the user can be one of any set theme */
  theme_name?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_roles?: InputMaybe<user_role_arr_rel_insert_input>;
  /** The username of the user. */
  username?: InputMaybe<Scalars["citext"]["input"]>;
};

/** aggregate max on columns */
export type user_max_fields = {
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
export type user_min_fields = {
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
export type user_mutation_response = {
  __typename?: "user_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<user>;
};

/** input type for inserting object relation for remote table "user" */
export type user_obj_rel_insert_input = {
  data: user_insert_input;
  /** upsert condition */
  on_conflict?: InputMaybe<user_on_conflict>;
};

/** on_conflict condition type for table "user" */
export type user_on_conflict = {
  constraint: user_constraint;
  update_columns?: Array<user_update_column>;
  where?: InputMaybe<user_bool_exp>;
};

/** Ordering options when selecting data from "user". */
export type user_order_by = {
  accounts_aggregate?: InputMaybe<accounts_aggregate_order_by>;
  active?: InputMaybe<order_by>;
  avatar?: InputMaybe<order_by>;
  cell?: InputMaybe<order_by>;
  city?: InputMaybe<order_by>;
  country?: InputMaybe<order_by>;
  created_at?: InputMaybe<order_by>;
  email?: InputMaybe<order_by>;
  emailVerified?: InputMaybe<order_by>;
  first_name?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  job_title?: InputMaybe<order_by>;
  last_activity?: InputMaybe<order_by>;
  last_name?: InputMaybe<order_by>;
  meta?: InputMaybe<order_by>;
  sessions_aggregate?: InputMaybe<sessions_aggregate_order_by>;
  theme_name?: InputMaybe<order_by>;
  updated_at?: InputMaybe<order_by>;
  user_roles_aggregate?: InputMaybe<user_role_aggregate_order_by>;
  username?: InputMaybe<order_by>;
};

/** primary key columns input for table: user */
export type user_pk_columns_input = {
  id: Scalars["uuid"]["input"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type user_prepend_input = {
  /** Extra metadata in JSON format about the user */
  meta?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** A relational table that contains all the roles assigned to a specific user */
export type user_role = {
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
  role: Role_enum;
  /** An object relationship */
  user: user;
  /** The foreign key to the user id that this role belongs to */
  user_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "user_role" */
export type user_role_aggregate = {
  __typename?: "user_role_aggregate";
  aggregate?: Maybe<user_role_aggregate_fields>;
  nodes: Array<user_role>;
};

export type user_role_aggregate_bool_exp = {
  bool_and?: InputMaybe<user_role_aggregate_bool_exp_bool_and>;
  bool_or?: InputMaybe<user_role_aggregate_bool_exp_bool_or>;
  count?: InputMaybe<user_role_aggregate_bool_exp_count>;
};

export type user_role_aggregate_bool_exp_bool_and = {
  arguments: user_role_select_column_user_role_aggregate_bool_exp_bool_and_arguments_columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<user_role_bool_exp>;
  predicate: Boolean_comparison_exp;
};

export type user_role_aggregate_bool_exp_bool_or = {
  arguments: user_role_select_column_user_role_aggregate_bool_exp_bool_or_arguments_columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<user_role_bool_exp>;
  predicate: Boolean_comparison_exp;
};

export type user_role_aggregate_bool_exp_count = {
  arguments?: InputMaybe<Array<user_role_select_column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<user_role_bool_exp>;
  predicate: Int_comparison_exp;
};

/** aggregate fields of "user_role" */
export type user_role_aggregate_fields = {
  __typename?: "user_role_aggregate_fields";
  avg?: Maybe<user_role_avg_fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<user_role_max_fields>;
  min?: Maybe<user_role_min_fields>;
  stddev?: Maybe<user_role_stddev_fields>;
  stddev_pop?: Maybe<user_role_stddev_pop_fields>;
  stddev_samp?: Maybe<user_role_stddev_samp_fields>;
  sum?: Maybe<user_role_sum_fields>;
  var_pop?: Maybe<user_role_var_pop_fields>;
  var_samp?: Maybe<user_role_var_samp_fields>;
  variance?: Maybe<user_role_variance_fields>;
};

/** aggregate fields of "user_role" */
export type user_role_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<user_role_select_column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "user_role" */
export type user_role_aggregate_order_by = {
  avg?: InputMaybe<user_role_avg_order_by>;
  count?: InputMaybe<order_by>;
  max?: InputMaybe<user_role_max_order_by>;
  min?: InputMaybe<user_role_min_order_by>;
  stddev?: InputMaybe<user_role_stddev_order_by>;
  stddev_pop?: InputMaybe<user_role_stddev_pop_order_by>;
  stddev_samp?: InputMaybe<user_role_stddev_samp_order_by>;
  sum?: InputMaybe<user_role_sum_order_by>;
  var_pop?: InputMaybe<user_role_var_pop_order_by>;
  var_samp?: InputMaybe<user_role_var_samp_order_by>;
  variance?: InputMaybe<user_role_variance_order_by>;
};

/** input type for inserting array relation for remote table "user_role" */
export type user_role_arr_rel_insert_input = {
  data: Array<user_role_insert_input>;
  /** upsert condition */
  on_conflict?: InputMaybe<user_role_on_conflict>;
};

/** aggregate avg on columns */
export type user_role_avg_fields = {
  __typename?: "user_role_avg_fields";
  /** The primary key of the user_roles table */
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "user_role" */
export type user_role_avg_order_by = {
  /** The primary key of the user_roles table */
  id?: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "user_role". All fields are combined with a logical 'AND'. */
export type user_role_bool_exp = {
  Role?: InputMaybe<Role_bool_exp>;
  _and?: InputMaybe<Array<user_role_bool_exp>>;
  _not?: InputMaybe<user_role_bool_exp>;
  _or?: InputMaybe<Array<user_role_bool_exp>>;
  active?: InputMaybe<Boolean_comparison_exp>;
  created_at?: InputMaybe<timestamptz_comparison_exp>;
  id?: InputMaybe<Int_comparison_exp>;
  role?: InputMaybe<Role_enum_comparison_exp>;
  user?: InputMaybe<user_bool_exp>;
  user_id?: InputMaybe<uuid_comparison_exp>;
};

/** unique or primary key constraints on table "user_role" */
export enum user_role_constraint {
  /** unique or primary key constraint on columns "id" */
  user_role_pkey = "user_role_pkey",
  /** unique or primary key constraint on columns "user_id", "role" */
  user_role_role_user_id_key = "user_role_role_user_id_key",
}

/** input type for incrementing numeric columns in table "user_role" */
export type user_role_inc_input = {
  /** The primary key of the user_roles table */
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "user_role" */
export type user_role_insert_input = {
  Role?: InputMaybe<Role_obj_rel_insert_input>;
  /** Is this role the current active role. A user can have many roles and one active one */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** When was this role originally assigned to this user */
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  /** The primary key of the user_roles table */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** The string name of the role the user should have */
  role?: InputMaybe<Role_enum>;
  user?: InputMaybe<user_obj_rel_insert_input>;
  /** The foreign key to the user id that this role belongs to */
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type user_role_max_fields = {
  __typename?: "user_role_max_fields";
  /** When was this role originally assigned to this user */
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  /** The primary key of the user_roles table */
  id?: Maybe<Scalars["Int"]["output"]>;
  /** The foreign key to the user id that this role belongs to */
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "user_role" */
export type user_role_max_order_by = {
  /** When was this role originally assigned to this user */
  created_at?: InputMaybe<order_by>;
  /** The primary key of the user_roles table */
  id?: InputMaybe<order_by>;
  /** The foreign key to the user id that this role belongs to */
  user_id?: InputMaybe<order_by>;
};

/** aggregate min on columns */
export type user_role_min_fields = {
  __typename?: "user_role_min_fields";
  /** When was this role originally assigned to this user */
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  /** The primary key of the user_roles table */
  id?: Maybe<Scalars["Int"]["output"]>;
  /** The foreign key to the user id that this role belongs to */
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "user_role" */
export type user_role_min_order_by = {
  /** When was this role originally assigned to this user */
  created_at?: InputMaybe<order_by>;
  /** The primary key of the user_roles table */
  id?: InputMaybe<order_by>;
  /** The foreign key to the user id that this role belongs to */
  user_id?: InputMaybe<order_by>;
};

/** response of any mutation on the table "user_role" */
export type user_role_mutation_response = {
  __typename?: "user_role_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<user_role>;
};

/** on_conflict condition type for table "user_role" */
export type user_role_on_conflict = {
  constraint: user_role_constraint;
  update_columns?: Array<user_role_update_column>;
  where?: InputMaybe<user_role_bool_exp>;
};

/** Ordering options when selecting data from "user_role". */
export type user_role_order_by = {
  Role?: InputMaybe<Role_order_by>;
  active?: InputMaybe<order_by>;
  created_at?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  role?: InputMaybe<order_by>;
  user?: InputMaybe<user_order_by>;
  user_id?: InputMaybe<order_by>;
};

/** primary key columns input for table: user_role */
export type user_role_pk_columns_input = {
  /** The primary key of the user_roles table */
  id: Scalars["Int"]["input"];
};

/** select columns of table "user_role" */
export enum user_role_select_column {
  /** column name */
  active = "active",
  /** column name */
  created_at = "created_at",
  /** column name */
  id = "id",
  /** column name */
  role = "role",
  /** column name */
  user_id = "user_id",
}

/** select "user_role_aggregate_bool_exp_bool_and_arguments_columns" columns of table "user_role" */
export enum user_role_select_column_user_role_aggregate_bool_exp_bool_and_arguments_columns {
  /** column name */
  active = "active",
}

/** select "user_role_aggregate_bool_exp_bool_or_arguments_columns" columns of table "user_role" */
export enum user_role_select_column_user_role_aggregate_bool_exp_bool_or_arguments_columns {
  /** column name */
  active = "active",
}

/** input type for updating data in table "user_role" */
export type user_role_set_input = {
  /** Is this role the current active role. A user can have many roles and one active one */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** When was this role originally assigned to this user */
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  /** The primary key of the user_roles table */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** The string name of the role the user should have */
  role?: InputMaybe<Role_enum>;
  /** The foreign key to the user id that this role belongs to */
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate stddev on columns */
export type user_role_stddev_fields = {
  __typename?: "user_role_stddev_fields";
  /** The primary key of the user_roles table */
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "user_role" */
export type user_role_stddev_order_by = {
  /** The primary key of the user_roles table */
  id?: InputMaybe<order_by>;
};

/** aggregate stddev_pop on columns */
export type user_role_stddev_pop_fields = {
  __typename?: "user_role_stddev_pop_fields";
  /** The primary key of the user_roles table */
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "user_role" */
export type user_role_stddev_pop_order_by = {
  /** The primary key of the user_roles table */
  id?: InputMaybe<order_by>;
};

/** aggregate stddev_samp on columns */
export type user_role_stddev_samp_fields = {
  __typename?: "user_role_stddev_samp_fields";
  /** The primary key of the user_roles table */
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "user_role" */
export type user_role_stddev_samp_order_by = {
  /** The primary key of the user_roles table */
  id?: InputMaybe<order_by>;
};

/** Streaming cursor of the table "user_role" */
export type user_role_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: user_role_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type user_role_stream_cursor_value_input = {
  /** Is this role the current active role. A user can have many roles and one active one */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** When was this role originally assigned to this user */
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  /** The primary key of the user_roles table */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** The string name of the role the user should have */
  role?: InputMaybe<Role_enum>;
  /** The foreign key to the user id that this role belongs to */
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate sum on columns */
export type user_role_sum_fields = {
  __typename?: "user_role_sum_fields";
  /** The primary key of the user_roles table */
  id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "user_role" */
export type user_role_sum_order_by = {
  /** The primary key of the user_roles table */
  id?: InputMaybe<order_by>;
};

/** update columns of table "user_role" */
export enum user_role_update_column {
  /** column name */
  active = "active",
  /** column name */
  created_at = "created_at",
  /** column name */
  id = "id",
  /** column name */
  role = "role",
  /** column name */
  user_id = "user_id",
}

export type user_role_updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<user_role_inc_input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<user_role_set_input>;
  /** filter the rows which have to be updated */
  where: user_role_bool_exp;
};

/** aggregate var_pop on columns */
export type user_role_var_pop_fields = {
  __typename?: "user_role_var_pop_fields";
  /** The primary key of the user_roles table */
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "user_role" */
export type user_role_var_pop_order_by = {
  /** The primary key of the user_roles table */
  id?: InputMaybe<order_by>;
};

/** aggregate var_samp on columns */
export type user_role_var_samp_fields = {
  __typename?: "user_role_var_samp_fields";
  /** The primary key of the user_roles table */
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "user_role" */
export type user_role_var_samp_order_by = {
  /** The primary key of the user_roles table */
  id?: InputMaybe<order_by>;
};

/** aggregate variance on columns */
export type user_role_variance_fields = {
  __typename?: "user_role_variance_fields";
  /** The primary key of the user_roles table */
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "user_role" */
export type user_role_variance_order_by = {
  /** The primary key of the user_roles table */
  id?: InputMaybe<order_by>;
};

/** select columns of table "user" */
export enum user_select_column {
  /** column name */
  active = "active",
  /** column name */
  avatar = "avatar",
  /** column name */
  cell = "cell",
  /** column name */
  city = "city",
  /** column name */
  country = "country",
  /** column name */
  created_at = "created_at",
  /** column name */
  email = "email",
  /** column name */
  emailVerified = "emailVerified",
  /** column name */
  first_name = "first_name",
  /** column name */
  id = "id",
  /** column name */
  job_title = "job_title",
  /** column name */
  last_activity = "last_activity",
  /** column name */
  last_name = "last_name",
  /** column name */
  meta = "meta",
  /** column name */
  theme_name = "theme_name",
  /** column name */
  updated_at = "updated_at",
  /** column name */
  username = "username",
}

/** input type for updating data in table "user" */
export type user_set_input = {
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
export type user_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: user_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type user_stream_cursor_value_input = {
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
export enum user_update_column {
  /** column name */
  active = "active",
  /** column name */
  avatar = "avatar",
  /** column name */
  cell = "cell",
  /** column name */
  city = "city",
  /** column name */
  country = "country",
  /** column name */
  created_at = "created_at",
  /** column name */
  email = "email",
  /** column name */
  emailVerified = "emailVerified",
  /** column name */
  first_name = "first_name",
  /** column name */
  id = "id",
  /** column name */
  job_title = "job_title",
  /** column name */
  last_activity = "last_activity",
  /** column name */
  last_name = "last_name",
  /** column name */
  meta = "meta",
  /** column name */
  theme_name = "theme_name",
  /** column name */
  updated_at = "updated_at",
  /** column name */
  username = "username",
}

export type user_updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<user_append_input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<user_delete_at_path_input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<user_delete_elem_input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<user_delete_key_input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<user_prepend_input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<user_set_input>;
  /** filter the rows which have to be updated */
  where: user_bool_exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type uuid_comparison_exp = {
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
export type verification_tokens = {
  __typename?: "verification_tokens";
  expires?: Maybe<Scalars["timestamptz"]["output"]>;
  identifier: Scalars["String"]["output"];
  token: Scalars["String"]["output"];
};

/** aggregated selection of "verification_tokens" */
export type verification_tokens_aggregate = {
  __typename?: "verification_tokens_aggregate";
  aggregate?: Maybe<verification_tokens_aggregate_fields>;
  nodes: Array<verification_tokens>;
};

/** aggregate fields of "verification_tokens" */
export type verification_tokens_aggregate_fields = {
  __typename?: "verification_tokens_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<verification_tokens_max_fields>;
  min?: Maybe<verification_tokens_min_fields>;
};

/** aggregate fields of "verification_tokens" */
export type verification_tokens_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<verification_tokens_select_column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "verification_tokens". All fields are combined with a logical 'AND'. */
export type verification_tokens_bool_exp = {
  _and?: InputMaybe<Array<verification_tokens_bool_exp>>;
  _not?: InputMaybe<verification_tokens_bool_exp>;
  _or?: InputMaybe<Array<verification_tokens_bool_exp>>;
  expires?: InputMaybe<timestamptz_comparison_exp>;
  identifier?: InputMaybe<String_comparison_exp>;
  token?: InputMaybe<String_comparison_exp>;
};

/** unique or primary key constraints on table "verification_tokens" */
export enum verification_tokens_constraint {
  /** unique or primary key constraint on columns "token" */
  verification_tokens_pkey = "verification_tokens_pkey",
}

/** input type for inserting data into table "verification_tokens" */
export type verification_tokens_insert_input = {
  expires?: InputMaybe<Scalars["timestamptz"]["input"]>;
  identifier?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type verification_tokens_max_fields = {
  __typename?: "verification_tokens_max_fields";
  expires?: Maybe<Scalars["timestamptz"]["output"]>;
  identifier?: Maybe<Scalars["String"]["output"]>;
  token?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type verification_tokens_min_fields = {
  __typename?: "verification_tokens_min_fields";
  expires?: Maybe<Scalars["timestamptz"]["output"]>;
  identifier?: Maybe<Scalars["String"]["output"]>;
  token?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "verification_tokens" */
export type verification_tokens_mutation_response = {
  __typename?: "verification_tokens_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<verification_tokens>;
};

/** on_conflict condition type for table "verification_tokens" */
export type verification_tokens_on_conflict = {
  constraint: verification_tokens_constraint;
  update_columns?: Array<verification_tokens_update_column>;
  where?: InputMaybe<verification_tokens_bool_exp>;
};

/** Ordering options when selecting data from "verification_tokens". */
export type verification_tokens_order_by = {
  expires?: InputMaybe<order_by>;
  identifier?: InputMaybe<order_by>;
  token?: InputMaybe<order_by>;
};

/** primary key columns input for table: verification_tokens */
export type verification_tokens_pk_columns_input = {
  token: Scalars["String"]["input"];
};

/** select columns of table "verification_tokens" */
export enum verification_tokens_select_column {
  /** column name */
  expires = "expires",
  /** column name */
  identifier = "identifier",
  /** column name */
  token = "token",
}

/** input type for updating data in table "verification_tokens" */
export type verification_tokens_set_input = {
  expires?: InputMaybe<Scalars["timestamptz"]["input"]>;
  identifier?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "verification_tokens" */
export type verification_tokens_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: verification_tokens_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type verification_tokens_stream_cursor_value_input = {
  expires?: InputMaybe<Scalars["timestamptz"]["input"]>;
  identifier?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "verification_tokens" */
export enum verification_tokens_update_column {
  /** column name */
  expires = "expires",
  /** column name */
  identifier = "identifier",
  /** column name */
  token = "token",
}

export type verification_tokens_updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<verification_tokens_set_input>;
  /** filter the rows which have to be updated */
  where: verification_tokens_bool_exp;
};

export type PublicUserDataFragment = {
  __typename?: "user";
  username: any;
  id: any;
  first_name: string;
  last_name: string;
  email: string;
  active: boolean;
  job_title: string;
  created_at: any;
  updated_at: any;
  avatar: string;
  active_role: Array<{ __typename?: "user_role"; role: Role_enum }>;
  user_roles: Array<{ __typename?: "user_role"; role: Role_enum }>;
};

export type CreateAccountMutationVariables = Exact<{
  data: accounts_insert_input;
}>;

export type CreateAccountMutation = {
  __typename?: "mutation_root";
  insert_accounts_one?: {
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
  } | null;
};

export type CreatePublicRoleMutationVariables = Exact<{
  user_id: Scalars["uuid"]["input"];
  role?: InputMaybe<Role_enum>;
}>;

export type CreatePublicRoleMutation = {
  __typename?: "mutation_root";
  insert_user_role_one?: {
    __typename?: "user_role";
    id: number;
    created_at: any;
  } | null;
};

export type DeleteAccountMutationVariables = Exact<{
  provider: Scalars["String"]["input"];
  providerAccountId: Scalars["String"]["input"];
}>;

export type DeleteAccountMutation = {
  __typename?: "mutation_root";
  delete_accounts?: {
    __typename?: "accounts_mutation_response";
    returning: Array<{
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
    }>;
  } | null;
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
};

export type SessionFragment = {
  __typename: "sessions";
  id: any;
  userId: any;
  expires?: any | null;
  sessionToken: string;
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

export type VerificationTokenFragment = {
  __typename: "verification_tokens";
  token: string;
  expires?: any | null;
  identifier: string;
};

export type GetSessionQueryVariables = Exact<{
  sessionToken?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetSessionQuery = {
  __typename?: "query_root";
  sessions: Array<{
    __typename: "sessions";
    id: any;
    userId: any;
    expires?: any | null;
    sessionToken: string;
    user: {
      __typename: "user";
      id: any;
      username: any;
      email: string;
      avatar: string;
      emailVerified?: any | null;
      name: any;
      image: string;
    };
  }>;
};

export type CreateSessionMutationVariables = Exact<{
  data: sessions_insert_input;
}>;

export type CreateSessionMutation = {
  __typename?: "mutation_root";
  insert_sessions_one?: {
    __typename: "sessions";
    id: any;
    userId: any;
    expires?: any | null;
    sessionToken: string;
  } | null;
};

export type UpdateSessionMutationVariables = Exact<{
  sessionToken?: InputMaybe<Scalars["String"]["input"]>;
  data: sessions_set_input;
}>;

export type UpdateSessionMutation = {
  __typename?: "mutation_root";
  update_sessions?: {
    __typename?: "sessions_mutation_response";
    returning: Array<{
      __typename: "sessions";
      id: any;
      userId: any;
      expires?: any | null;
      sessionToken: string;
    }>;
  } | null;
};

export type DeleteSessionMutationVariables = Exact<{
  sessionToken?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type DeleteSessionMutation = {
  __typename?: "mutation_root";
  delete_sessions?: {
    __typename?: "sessions_mutation_response";
    returning: Array<{
      __typename: "sessions";
      id: any;
      userId: any;
      expires?: any | null;
      sessionToken: string;
    }>;
  } | null;
};

export type GetUserQueryVariables = Exact<{
  id: Scalars["uuid"]["input"];
}>;

export type GetUserQuery = {
  __typename?: "query_root";
  user_by_pk?: {
    __typename: "user";
    id: any;
    username: any;
    email: string;
    avatar: string;
    emailVerified?: any | null;
    name: any;
    image: string;
  } | null;
};

export type GetUsersQueryVariables = Exact<{
  where: user_bool_exp;
}>;

export type GetUsersQuery = {
  __typename?: "query_root";
  user: Array<{
    __typename: "user";
    id: any;
    username: any;
    email: string;
    avatar: string;
    emailVerified?: any | null;
    name: any;
    image: string;
  }>;
};

export type CreateUserMutationVariables = Exact<{
  data: user_insert_input;
}>;

export type CreateUserMutation = {
  __typename?: "mutation_root";
  insert_user_one?: {
    __typename: "user";
    id: any;
    username: any;
    email: string;
    avatar: string;
    emailVerified?: any | null;
    name: any;
    image: string;
  } | null;
};

export type UpdateUserMutationVariables = Exact<{
  id: Scalars["uuid"]["input"];
  data: user_set_input;
}>;

export type UpdateUserMutation = {
  __typename?: "mutation_root";
  update_user_by_pk?: {
    __typename: "user";
    id: any;
    username: any;
    email: string;
    avatar: string;
    emailVerified?: any | null;
    name: any;
    image: string;
  } | null;
};

export type DeleteUserMutationVariables = Exact<{
  id: Scalars["uuid"]["input"];
}>;

export type DeleteUserMutation = {
  __typename?: "mutation_root";
  delete_user_by_pk?: {
    __typename: "user";
    id: any;
    username: any;
    email: string;
    avatar: string;
    emailVerified?: any | null;
    name: any;
    image: string;
  } | null;
};

export type CreateVerificationTokenMutationVariables = Exact<{
  data: verification_tokens_insert_input;
}>;

export type CreateVerificationTokenMutation = {
  __typename?: "mutation_root";
  insert_verification_tokens_one?: {
    __typename: "verification_tokens";
    token: string;
    expires?: any | null;
    identifier: string;
  } | null;
};

export type DeleteVerificationTokenMutationVariables = Exact<{
  identifier: Scalars["String"]["input"];
  token: Scalars["String"]["input"];
}>;

export type DeleteVerificationTokenMutation = {
  __typename?: "mutation_root";
  delete_verification_tokens?: {
    __typename?: "verification_tokens_mutation_response";
    returning: Array<{
      __typename: "verification_tokens";
      token: string;
      expires?: any | null;
      identifier: string;
    }>;
  } | null;
};

export const PublicUserDataFragmentDoc = gql`
  fragment PublicUserData on user {
    username
    id
    first_name
    last_name
    email
    active
    active_role: user_roles(where: { active: { _eq: true } }) {
      role
    }
    user_roles(order_by: { role: asc_nulls_last }) {
      role
    }
    job_title
    created_at
    updated_at
    avatar
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
export const VerificationTokenFragmentDoc = gql`
  fragment VerificationToken on verification_tokens {
    __typename
    token
    expires
    identifier
  }
`;
export const CreateAccountDocument = gql`
  mutation CreateAccount($data: accounts_insert_input!) {
    insert_accounts_one(object: $data) {
      ...Account
    }
  }
  ${AccountFragmentDoc}
`;
export const CreatePublicRoleDocument = gql`
  mutation CreatePublicRole($user_id: uuid!, $role: Role_enum = public) {
    insert_user_role_one(
      object: { user_id: $user_id, role: $role, active: true }
    ) {
      id
      created_at
    }
  }
`;
export const DeleteAccountDocument = gql`
  mutation DeleteAccount($provider: String!, $providerAccountId: String!) {
    delete_accounts(
      where: {
        provider: { _eq: $provider }
        providerAccountId: { _eq: $providerAccountId }
      }
    ) {
      returning {
        ...Account
      }
    }
  }
  ${AccountFragmentDoc}
`;
export const GetSessionDocument = gql`
  query GetSession($sessionToken: String) {
    sessions(where: { sessionToken: { _eq: $sessionToken } }) {
      ...Session
      user {
        ...User
      }
    }
  }
  ${SessionFragmentDoc}
  ${UserFragmentDoc}
`;
export const CreateSessionDocument = gql`
  mutation CreateSession($data: sessions_insert_input!) {
    insert_sessions_one(object: $data) {
      ...Session
    }
  }
  ${SessionFragmentDoc}
`;
export const UpdateSessionDocument = gql`
  mutation UpdateSession($sessionToken: String, $data: sessions_set_input!) {
    update_sessions(
      where: { sessionToken: { _eq: $sessionToken } }
      _set: $data
    ) {
      returning {
        ...Session
      }
    }
  }
  ${SessionFragmentDoc}
`;
export const DeleteSessionDocument = gql`
  mutation DeleteSession($sessionToken: String) {
    delete_sessions(where: { sessionToken: { _eq: $sessionToken } }) {
      returning {
        ...Session
      }
    }
  }
  ${SessionFragmentDoc}
`;
export const GetUserDocument = gql`
  query GetUser($id: uuid!) {
    user_by_pk(id: $id) {
      ...User
    }
  }
  ${UserFragmentDoc}
`;
export const GetUsersDocument = gql`
  query GetUsers($where: user_bool_exp!) {
    user(where: $where) {
      ...User
    }
  }
  ${UserFragmentDoc}
`;
export const CreateUserDocument = gql`
  mutation CreateUser($data: user_insert_input!) {
    insert_user_one(object: $data) {
      ...User
    }
  }
  ${UserFragmentDoc}
`;
export const UpdateUserDocument = gql`
  mutation UpdateUser($id: uuid!, $data: user_set_input!) {
    update_user_by_pk(pk_columns: { id: $id }, _set: $data) {
      ...User
    }
  }
  ${UserFragmentDoc}
`;
export const DeleteUserDocument = gql`
  mutation DeleteUser($id: uuid!) {
    delete_user_by_pk(id: $id) {
      ...User
    }
  }
  ${UserFragmentDoc}
`;
export const CreateVerificationTokenDocument = gql`
  mutation CreateVerificationToken($data: verification_tokens_insert_input!) {
    insert_verification_tokens_one(object: $data) {
      ...VerificationToken
    }
  }
  ${VerificationTokenFragmentDoc}
`;
export const DeleteVerificationTokenDocument = gql`
  mutation DeleteVerificationToken($identifier: String!, $token: String!) {
    delete_verification_tokens(
      where: { token: { _eq: $token }, identifier: { _eq: $identifier } }
    ) {
      returning {
        ...VerificationToken
      }
    }
  }
  ${VerificationTokenFragmentDoc}
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
  return {
    CreateAccount(
      variables: CreateAccountMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateAccountMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateAccountMutation>(
            CreateAccountDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "CreateAccount",
        "mutation",
        variables,
      );
    },
    CreatePublicRole(
      variables: CreatePublicRoleMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreatePublicRoleMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreatePublicRoleMutation>(
            CreatePublicRoleDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "CreatePublicRole",
        "mutation",
        variables,
      );
    },
    DeleteAccount(
      variables: DeleteAccountMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteAccountMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteAccountMutation>(
            DeleteAccountDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "DeleteAccount",
        "mutation",
        variables,
      );
    },
    GetSession(
      variables?: GetSessionQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetSessionQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetSessionQuery>(GetSessionDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetSession",
        "query",
        variables,
      );
    },
    CreateSession(
      variables: CreateSessionMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateSessionMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateSessionMutation>(
            CreateSessionDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "CreateSession",
        "mutation",
        variables,
      );
    },
    UpdateSession(
      variables: UpdateSessionMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateSessionMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateSessionMutation>(
            UpdateSessionDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "UpdateSession",
        "mutation",
        variables,
      );
    },
    DeleteSession(
      variables?: DeleteSessionMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteSessionMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteSessionMutation>(
            DeleteSessionDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "DeleteSession",
        "mutation",
        variables,
      );
    },
    GetUser(
      variables: GetUserQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetUserQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetUserQuery>(GetUserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetUser",
        "query",
        variables,
      );
    },
    GetUsers(
      variables: GetUsersQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetUsersQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetUsersQuery>(GetUsersDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetUsers",
        "query",
        variables,
      );
    },
    CreateUser(
      variables: CreateUserMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateUserMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateUserMutation>(CreateUserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "CreateUser",
        "mutation",
        variables,
      );
    },
    UpdateUser(
      variables: UpdateUserMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateUserMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateUserMutation>(UpdateUserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "UpdateUser",
        "mutation",
        variables,
      );
    },
    DeleteUser(
      variables: DeleteUserMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteUserMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteUserMutation>(DeleteUserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "DeleteUser",
        "mutation",
        variables,
      );
    },
    CreateVerificationToken(
      variables: CreateVerificationTokenMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateVerificationTokenMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateVerificationTokenMutation>(
            CreateVerificationTokenDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "CreateVerificationToken",
        "mutation",
        variables,
      );
    },
    DeleteVerificationToken(
      variables: DeleteVerificationTokenMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteVerificationTokenMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteVerificationTokenMutation>(
            DeleteVerificationTokenDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "DeleteVerificationToken",
        "mutation",
        variables,
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
