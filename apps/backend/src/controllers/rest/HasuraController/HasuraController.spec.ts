import { PlatformTest } from "@tsed/common";
import SuperTest from "supertest";
import TestAgent from "supertest/lib/agent";
import { beforeEach, describe, expect, it, beforeAll, afterAll } from "bun:test";
import { Server } from "~/Server";
import cleanEnvs from "~/config/envs";

describe("HasuraController", () => {
  let request: TestAgent;
  beforeAll(PlatformTest.bootstrap(Server));
  afterAll(PlatformTest.reset);
  beforeEach(() => {
    request = SuperTest(PlatformTest.callback());
  });

  describe("POST /rest/hasura/actions/version", () => {
    const url = "/rest/hasura/actions/version";

    it("Should fail because no auth", async () => {
      const response = await request.post(url).expect(401);
      // Check if the response body is a non-empty buffer
      expect(response.body).toBeDefined();
    });

    it("Should succeed because auth", async () => {
      const request = SuperTest(PlatformTest.callback());
      const response = await request
        .post(url)
        .set({ AdminSecret: "APP-SECRET-DEVELOPMENT-LOCALHOST" })
        .expect(200);
      console.log(response);
      // Check if the response body is a non-empty buffer
      expect(response.body).toBeDefined();
    });
  });

  describe("POST /rest/hasura/events/settings", () => {
    const url = "/rest/hasura/event-triggers/settings";

    it("Should fail because no auth", async () => {
      const response = await request.post(url).expect(401);
      // Check if the response body is a non-empty buffer
      expect(response.body).toBeDefined();
    });

    it("Should succeed because auth", async () => {
      const request = SuperTest(PlatformTest.callback());
      const response = await request
        .post(url)
        .set({ AdminSecret: "APP-SECRET-DEVELOPMENT-LOCALHOST" })
        .expect(200);
      // Check if the response body is a non-empty buffer
      expect(response.body).toBeDefined();
    });
  });

  describe("POST /rest/hasura/cron/purge-audit-log", () => {
    const url = "/rest/hasura/purge-audit-log";

    it("Should fail because no auth", async () => {
      const response = await request.post(url).expect(401);
      // Check if the response body is a non-empty buffer
      expect(response.body).toBeDefined();
    });

    it("Should succeed because auth", async () => {
      const request = SuperTest(PlatformTest.callback());
      const response = await request
        .post(url)
        .set({ AdminSecret: "APP-SECRET-DEVELOPMENT-LOCALHOST" })
        .expect(200);
      // Check if the response body is a non-empty buffer
      expect(response.body).toBeDefined();
    });
  });

  describe("POST /rest/hasura/cron/sync-storage-point", () => {
    const url = "/rest/hasura/cron/sync-storage-point";

    it("Should fail because no auth", async () => {
      const response = await request.post(url).expect(401);
      // Check if the response body is a non-empty buffer
      expect(response.body).toBeDefined();
    });

    it("Should succeed because auth", async () => {
      const request = SuperTest(PlatformTest.callback());
      const response = await request
        .post(url)
        .set({ AdminSecret: "APP-SECRET-DEVELOPMENT-LOCALHOST" })
        .expect(200);
      // Check if the response body is a non-empty buffer
      expect(response.body).toBeDefined();
    });
  });

  describe("POST /rest/hasura/actions/ml_tag_batch", () => {
    it("should batch generate all tags", async () => {
      const response = await request
        .post("/rest/hasura/actions/ml_tag_batch")
        .set("AdminSecret", cleanEnvs.APP_SECRET)
        .expect(200);
      expect(response).toEqual(1);
    });
  });

  describe("POST /rest/hasura/actions/ml_tag_single", () => {
    it("should generate a single tag", async () => {
      const response = await request
        .post("/rest/hasura/actions/ml_tag_single")
        .set("AdminSecret", cleanEnvs.APP_SECRET)
        .expect(200);
      expect(response).toEqual(1);
    });
  });
});
