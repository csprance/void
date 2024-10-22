import { Constant, Inject, Service } from "@tsed/di";
import { Logger } from "@tsed/logger";
import axios, { AxiosInstance } from "axios";
import { GraphQLClient } from "graphql-request";

import { Sdk, getSdk } from "./gql/sdk";

/**
 * HasuraService class that initializes and manages the GraphQL client and SDK for Hasura.
 * This class also provides utility methods for executing raw SQL queries and metadata requests.
 * This service always executes commands in the context of the ADMIN
 */
@Service()
export class HasuraService {
  @Constant("hasura.appSecret") appSecret: string;
  @Constant("hasura.url") hasuraUrl: string;

  @Inject() private logger: Logger;

  private axios: AxiosInstance;
  public client: GraphQLClient;
  public _sdk: Sdk;

  get sdk() {
    this.mount();
    return this._sdk;
  }

  private mount() {
    this.axios = axios.create({
      baseURL: this.hasuraUrl,
      headers: {
        "Content-Type": "application/json",
        "X-Hasura-Role": "admin",
        "x-hasura-admin-secret": this.appSecret,
      },
    });
    this.client = new GraphQLClient(`${this.hasuraUrl}/v1/graphql`, {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret": this.appSecret,
      },
    });
    this._sdk = getSdk(this.client);
  }

  /**
   * Execute a raw SQL query.
   * @param sql - The SQL query string.
   */
  public async sql(sql: string) {
    try {
      const response = await this.axios.post(`/v2/query`, {
        type: "run_sql",
        args: {
          sql,
        },
      });

      this.logger.info("SQL query executed successfully", response.data);
      return response.data;
    } catch (error) {
      this.logger.error("Error executing SQL query", error);
      throw error;
    }
  }

  /**
   * Execute a metadata request.
   * @param request - The metadata request object.
   */
  public async metadata(request: object) {
    throw Error("Not Implemented");
  }

  /**
   * Schedule A  Cron Trigger to Run
   */
  public async createCronTrigger({
    name,
    webhook,
    schedule,
    comment,
    payload,
    headers,
    replace,
  }: {
    name: string;
    webhook: string;
    schedule: string;
    payload?: Record<string, any>;
    comment?: string;
    headers?: Record<string, any>;
    replace?: boolean;
  }) {
    try {
      const response = await this.axios.post(`/v1/query`, {
        type: "create_cron_trigger",
        args: {
          name,
          webhook,
          schedule,
          payload,
          include_in_metadata: false,
          comment,
          headers,
          replace,
        },
      });

      this.logger.info("Scheduled event created successfully", response.data);
      return response.data;
    } catch (error) {
      this.logger.error("Error creating scheduled event", error);
      throw error;
    }
  }

  /**
   * Delete a cron trigger
   * @param name - The name of the trigger to delete
   */
  public async deleteCronTrigger({ name }: { name: string }) {
    try {
      const response = await this.axios.post(`/v1/query`, {
        type: "delete_cron_trigger",
        args: {
          name,
        },
      });

      this.logger.info("Scheduled event created successfully", response.data);
      return response.data;
    } catch (error) {
      this.logger.error("Error creating scheduled event", error);
      throw error;
    }
  }

  /**
   * Create a scheduled event
   * @param options - The details of the scheduled event including webhook, schedule time, payload, headers, and comment.
   */
  public async createScheduledEvent({
    webhook,
    scheduleAt,
    payload,
    headers,
    comment,
  }: {
    webhook: string;
    scheduleAt: string; // ISO 8601 format
    payload?: Record<string, any>;
    headers?: Array<{ name: string; value: string }>;
    comment?: string;
  }) {
    try {
      const response = await this.axios.post(`/v1/metadata`, {
        type: "create_scheduled_event",
        args: {
          webhook,
          schedule_at: scheduleAt,
          payload,
          headers,
          comment,
        },
      });

      this.logger.info("Scheduled event created successfully", response.data);

      return response.data;
    } catch (error) {
      this.logger.error("Error creating scheduled event", error);
      throw error;
    }
  }

  /**
   * Delete a scheduled event
   * @param eventId - The unique identifier of the event to delete.
   */
  public async deleteScheduledEvent({ eventId }: { eventId: string }) {
    try {
      const response = await this.axios.post(`/v1/metadata`, {
        type: "delete_scheduled_event",
        args: {
          type: "one_off",
          event_id: eventId,
        },
      });

      this.logger.info("Scheduled event deleted successfully", response.data);
      return response.data;
    } catch (error) {
      this.logger.error("Error deleting scheduled event", error);
      throw error;
    }
  }
}
