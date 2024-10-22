import { Inject } from "@tsed/di";
import { Logger } from "@tsed/logger";
import { Middleware, MiddlewareMethods } from "@tsed/platform-middlewares";
import { Context } from "@tsed/platform-params";
import * as fs from "fs";
import * as path from "path";
import { getTempDir } from "~/lib/util";

type TempFile = {
  destination: string;
  filename: string;
};

/**
 * Middleware class to clean up temporary files after processing.
 *
 * This middleware deletes any temporary files created during request processing.
 * It should be used after any middleware that creates temporary files (e.g., multer for file uploads).
 * The temporary files to be deleted should be stored in the 'TEMP_FILES' context variable.
 */
@Middleware()
export class CleanupTempFilesMiddleware implements MiddlewareMethods {
  @Inject()
  private logger: Logger;

  /**
   * Middleware method to clean up temporary files.
   *
   * @param {Context} ctx - The request context object, which contains the temporary files to delete.
   * @returns {Promise<void>} A promise that resolves when the temporary files have been deleted.
   */
  async use(@Context() ctx: Context) {
    const files: TempFile[] = ctx.get("TEMP_FILES") || [];

    if (ctx.get("CLEANUP_TEMP_FOLDER")) {
      this.logger.info("Cleaning up entire temp folder");
      const tempDir = getTempDir();
      const tempFiles = fs.readdirSync(tempDir);

      tempFiles.forEach((tempFile) => {
        files.push({
          destination: tempDir,
          filename: tempFile,
        }); // We only need these two what's a better type?
      });
    }

    if (files.length > 0) {
      this.cleanupTempFiles(files.filter((x) => x)); // Filter out any nulls
    }
  }

  /**
   * Helper method to delete the provided temporary files.
   *
   * @param {TempFile[]} files - An array of temporary files to delete.
   * @returns {void} This method does not return any value.
   */
  private cleanupTempFiles(files: TempFile[]) {
    files.forEach((file) => {
      try {
        const tempFilePath = path.join(file.destination, file.filename);
        fs.unlink(tempFilePath, (err) => {
          if (err) {
            this.logger.error(`Error deleting temp file: ${tempFilePath}`, err);
          } else {
            this.logger.info(`Temp file deleted: ${tempFilePath}`);
          }
        });
      } catch (e) {
        this.logger.error(`Error deleting temp file:`, e);
      }
    });
  }
}
