import { PlatformTest } from "@tsed/common";
import SuperTest from "supertest";
import { Server } from "~/Server";
import cleanEnvs from "~/config/envs";

describe("MailController", () => {
  // bootstrap your Server to load all endpoints before run your test
  let request: any;

  beforeAll(PlatformTest.bootstrap(Server));
  beforeAll(() => {
    request = SuperTest(PlatformTest.callback());
  });
  afterAll(PlatformTest.reset);

  describe("POST /rest/mail/send", () => {
    it("Send a batch ingest email", async () => {
      // Send a request to the email endpoint
      const response = await request
        .post("/rest/mail/send")
        // Auth as SuperAdmin
        .set("AdminSecret", cleanEnvs.APP_SECRET)
        // Add Body data
        .send({
          templateName: "asset-ingest-batch",
          to: "chrissprance@gmail.com",
          templateData: { assets: [] },
        })
        .expect(200);
    });

    it("Send a single ingest email", async () => {
      // Send a request to the email endpoint
      const response = await request
        .post("/rest/mail/send")
        // Auth as SuperAdmin
        .set("AdminSecret", cleanEnvs.APP_SECRET)
        // Add Body data
        .send({
          templateName: "asset-ingest-single",
          to: "chrissprance@gmail.com",
          templateData: { assets: [] },
        })
        .expect(200);
    });
  });

  it("Send an email signing email", async () => {
    // Send a request to the email endpoint
    const response = await request
      .post("/rest/mail/send")
      // Auth as SuperAdmin
      .set("AdminSecret", cleanEnvs.APP_SECRET)
      // Add Body data
      .send({
        templateName: "email-sign-in",
        to: "chrissprance@gmail.com",
        templateData: { assets: [] },
      })
      .expect(200);
  });

  it("Send a password reset email", async () => {
    // Send a request to the email endpoint
    const response = await request
      .post("/rest/mail/send")
      // Auth as SuperAdmin
      .set("AdminSecret", cleanEnvs.APP_SECRET)
      // Add Body data
      .send({
        templateName: "password-reset",
        to: "chrissprance@gmail.com",
        templateData: { assets: [] },
      })
      .expect(200);
  });

  it("Send a welcome email", async () => {
    // Send a request to the email endpoint
    const response = await request
      .post("/rest/mail/send")
      // Auth as SuperAdmin
      .set("AdminSecret", cleanEnvs.APP_SECRET)
      // Add Body data
      .send({
        templateName: "welcome-email",
        to: "chrissprance@gmail.com",
        templateData: { assets: [] },
      })
      .expect(200);
  });
});
