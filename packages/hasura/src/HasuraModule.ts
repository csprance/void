import { Inject, Module } from "@tsed/di";
import { Logger } from "@tsed/logger";

import { HasuraService } from "./HasuraService";

@Module()
export class HasuraModule {
  @Inject() protected logger: Logger;
  @Inject() protected hasura: HasuraService;

  $onRoutesInit() {
    this.logger.info("Before Init");
  }

  async $onDestroy() {
    this.logger.info("On Destroy");
  }

  public $onInit() {
    this.logger.info("Hasura Module Initialized");
  }
}
