export interface DeliveryInfo {
  current_retry: number;
  max_retries: number;
}

export interface EventData {
  new: { [key: string]: any };
  old: { [key: string]: any } | null;
}

export interface SessionVariables {
  "x-hasura-role": string;
}

export interface TraceContext {
  span_id: string;
  trace_id: string;
}

export interface HasuraEvent {
  data: EventData;
  op: "INSERT" | "UPDATE" | "DELETE" | "MANUAL";
  session_variables: SessionVariables;
  trace_context: TraceContext;
}

export interface TableInfo {
  name: string;
  schema: string;
}

export interface TriggerInfo {
  name: string;
}

/**
 * @link https://hasura.io/docs/latest/event-triggers/payload/
 */
export interface HasuraEventTriggerPayload {
  created_at: string;
  delivery_info: DeliveryInfo;
  event: HasuraEvent;
  id: string;
  table: TableInfo;
}

/**
 * @link https://hasura.io/docs/latest/actions/action-handlers/
 */
export interface HasuraActionHandlerPayload<T = Record<any, any>> {
  action: {
    name: string;
  };
  input: T;
  session_variables: {
    "x-hasura-user-id": string;
    "x-hasura-role": string;
  };
  request_query: string;
}

export interface HasuraModuleConfig {
  url: string;
  appSecret: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace TsED {
    interface Configuration {
      hasura: HasuraModuleConfig;
    }
  }
}
