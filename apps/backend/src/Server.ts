import "@tsed/ajv";
import "@tsed/bullmq";
import {
  AfterInit,
  AfterListen,
  AfterRoutesInit,
  BeforeInit,
  BeforeListen,
  BeforeRoutesInit,
  OnReady,
  PlatformApplication,
} from "@tsed/common";
import { Configuration, Inject } from "@tsed/di";
import { Logger } from "@tsed/logger";
import "@tsed/platform-express";
import "@tsed/swagger";
import "@tsed/terminus";
import "@void/hasura";
import { HasuraService } from "@void/hasura";

import { config } from "./config";
import cleanEnvs from "./config/envs";

@Configuration({
  ...config,
})
export class Server
  implements
    BeforeInit,
    AfterInit,
    BeforeRoutesInit,
    AfterRoutesInit,
    BeforeListen,
    AfterListen,
    OnReady
{
  @Configuration() protected settings: Configuration;

  @Inject() protected app: PlatformApplication;
  @Inject() protected logger: Logger;
  @Inject() protected hasura: HasuraService;

  public $beforeRoutesInit(): void | Promise<any> {
    this.app.getApp().set("trust proxy", 1); // trust first proxy
  }

  public $afterInit() {
    this.logger.trace("After Init");
  }

  $afterListen(): void | Promise<any> {
    return undefined;
  }

  $afterRoutesInit(): void | Promise<any> {
    return undefined;
  }

  $beforeInit(): void | Promise<any> {
    this.logger.level = cleanEnvs.LOG_LEVEL;
    return undefined;
  }

  $beforeListen(): void | Promise<any> {
    return undefined;
  }

  $onReady(): void | Promise<any> {
    // Don't await
    this.bootStrap().catch((e) => {
      console.log(e);
    });
    return undefined;
  }

  private async bootStrap() {
    this.logger.debug("Bootstrapping server");
    // Do shared setup here
    if (!cleanEnvs.isProd) {
      // Do dev only bootstrap stuff here
    }
  }
}
