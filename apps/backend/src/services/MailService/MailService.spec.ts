import { PlatformTest } from "@tsed/common";

import { MailService } from "./index";

describe("MailService", () => {
  beforeEach(async () => {
    await PlatformTest.create();
  });
  afterEach(PlatformTest.reset);

  describe("Service Tests", () => {
    it("Should the Mail Service", async () => {
      const service = PlatformTest.get<MailService>(MailService);
      expect(service).toBeInstanceOf(MailService);
    });

    // it('Should getMetadataFromTemplate', async () => {
    //   const service = PlatformTest.get<MailService>(MailService);
    //   const name = 'asset-ingest-single';
    //   const metadata = await service.getMetadataFromTemplate({ name });
    //   expect(metadata).toEqual({
    //     subject: 'VOID - Single Ingest Report',
    //     defaults: {
    //       id: 1,
    //       name: 'This is a name',
    //       description: 'A Default description of an app',
    //     },
    //   });
    // });

    // it('Should send a test email', async () => {
    //   const service = PlatformTest.get<MailService>(MailService);
    //   const name = 'asset-ingest-single';
    //   const results = await service.sendEmail({
    //     to: 'test@test.com',
    //     template: {
    //       name,
    //       data: {
    //         id: 1,
    //         name: 'Test',
    //         description: 'Test Description',
    //       },
    //     },
    //   });
    //   expect(results).toBeDefined();
    // });
  });
});
