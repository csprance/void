import { PlatformTest } from "@tsed/common";
import { expect } from "vitest";

import { HasuraService } from "./index";

describe("HasuraService", () => {
  beforeEach(async () => {
    await PlatformTest.create();
  });
  afterEach(PlatformTest.reset);

  describe("Platform Tests", () => {
    it("Should be the Hasura Service", async () => {
      const service = PlatformTest.get<HasuraService>(HasuraService);
      expect(service).toBeInstanceOf(HasuraService);
    });
  });
  describe("Hasura API Tests", () => {
    it("SQL method", async () => {
      const service = PlatformTest.get<HasuraService>(HasuraService);
      const results = await service.sql(
        `SELECT t.*
         FROM audit.logged_actions t
         LIMIT 501;`,
      );
      console.log(results);
      expect(results).to.not.be.empty;
    });
  });
});
