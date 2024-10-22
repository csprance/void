import { Req } from "@tsed/common";
import { HasuraActionHandlerPayload } from "@void/hasura";
import { Readable } from "node:stream";

import cleanEnvs, { isProduction } from "../config/envs";

export function isProd(): boolean {
  return cleanEnvs.isProd;
}

export function notProd(): boolean {
  return !isProd();
}

export function getDataDir() {
  return !isProduction ? "../../.data" : "/void";
}

export function getTempDir() {
  return !isProduction ? "../../.data/tmp" : "/void/tmp";
}

export function noop(...args: any[]) {}
/**
 * Just like the python zip function baby ya! Woo! Python FTW
 * @param a The first list
 * @param b The second list
 * @return c an array of arrays
 * @example
 * const a = [1, 2, 3];
 * const b = ['a', 'b', 'c'];
 * zip(a, b)
 * >> [[1, 'a'], [2, 'b'], [3, 'c']]
 */
export function zip(a: any[], b: any[]): any[] {
  return a.map((k, i) => [k, b[i]]);
}

export function objMap(obj: object, mapFunc: (arg: any) => any) {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k, v.map(mapFunc)]),
  );
}

/**
 * Check against some rules to see if a path is a thumbnail path and if it
 * is return true
 * @param filepath A path to a file
 */
export function isPathAThumbnail(filepath: string): boolean {
  const thumbnailRegex = /.*(thumbnail|thumb).*\.(jpg|jpeg|png|gif|webp|bmp)$/;
  return thumbnailRegex.test(filepath.toLowerCase());
}

/**
 * Check against some regex to see if a path is a thumbnail path and if it
 * is return true
 * @param filepath A path to a file
 */
export function isPathAVideoThumbnail(filepath: string) {
  const thumbnailRegex = /.*(thumbnail|thumb).*\.(mp4|webm|ogg|avi)$/;
  return thumbnailRegex.test(filepath.toLowerCase());
}

/**
 * Check against some extensions to see if a path has an extension If it does return true
 * @param filepath A path to a file
 * @param extensions A list of extensions to check
 */
export function isPathOneOf(
  filepath: string,
  extensions: string[] = [],
): boolean {
  const imageRegex = new RegExp(`.*\\.(${extensions.join("|")})$`, "i");
  return imageRegex.test(filepath.toLowerCase());
}

/**
 * Check against some extensions to see if a path is an IMAGE. If it is return true
 * @param filepath A path to a file
 */
export function isPathAnImage(filepath: string) {
  const imageTypes = [
    "jpg",
    "jpeg",
    "png",
    "gif",
    "webp",
    "bmp",
    "ico",
    "tiff",
    "svg",
    "heif",
    "bat",
    "raw",
    "tga",
    "indd",
    "ai",
    "eps",
    "pdf",
    "psd",
  ];
  return isPathOneOf(filepath, imageTypes);
}

export function isPathAWebImage(filepath: string) {
  const imageTypes = [
    "jpg",
    "jpeg",
    "png",
    "gif",
    "webp",
    "bmp",
    "ico",
    "svg",
    "eps",
    "pdf",
  ];
  return isPathOneOf(filepath, imageTypes);
}
/**
 * Check against some extensions to see if a path is a VIDEO. If it is return true
 * @param filepath A path to a file
 */
export function isPathAVideo(filepath: string) {
  return isPathOneOf(filepath, ["mp4", "webm", "ogg", "avi"]);
}

/**
 * Check against some extensions to see if a path is a MODEL. If it is return true
 * @param filepath A path to a file
 */
export function isPathAModel(filepath: string) {
  return isPathOneOf(filepath, [
    "fbx",
    // 'obj',
    // 'usd',
    // 'usda',
    // 'gltf',
    // 'ma',
    // 'mb',
    // 'max',
    // '3ds',
  ]);
}

/**
 * Convert a Buffer to a Stream
 * @param buffer
 */
export const bufferToStream = (buffer: Buffer) => {
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);
  return stream;
};

/**
 * Converts a Readable stream to a Buffer.
 *
 * @param {Readable} readable - The Readable stream to convert.
 * @returns {Promise<Buffer>} A promise that resolves to a Buffer containing the data from the Readable stream.
 * @throws {Error} If there is an error while reading the stream.
 */
export async function readableToBuffer(readable: Readable): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];

    readable.on("data", (chunk: Buffer) => {
      chunks.push(chunk);
    });

    readable.on("end", () => {
      resolve(Buffer.concat(chunks));
    });

    readable.on("error", (error) => {
      reject(error);
    });
  });
}

/**
 * Clamps a given value within the specified range.
 *
 * @param value - The number to clamp.
 * @param min - The minimum value of the range.
 * @param max - The maximum value of the range.
 * @returns The clamped value within the range [min, max].
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Converts a Unix timestamp to an ISO 8601 formatted date string.
 *
 * @param {number} unixTimestamp - The Unix timestamp to convert.
 * @return {string} The ISO 8601 formatted date string.
 */
export function convertUnixTimestampToISO8601(unixTimestamp: number): string {
  // Convert the Unix timestamp from milliseconds to seconds
  const date = new Date(unixTimestamp);

  // Format the date as an ISO 8601 string
  return date.toISOString();
}

export const transformDate = <T extends { [key: string]: unknown }>(
  object: T | null | undefined,
  key: keyof T,
) => {
  if (!object) return;

  if (object[key]) {
    return {
      ...object,
      [key]: new Date(object[key] as string),
    };
  }

  return object;
};

/**
 * We need this function because the cookie changes whether we're in prod or not
 * because we're using secure cookies
 */
export function getNextAuthCookiesSessionTokenName() {
  const useSecureCookies = isProd();
  const cookiePrefix = useSecureCookies ? "__Secure-" : "";
  return `${cookiePrefix}next-auth.session-token`;
}

/**
 * Utility type to get everything but the defined key as optional
 */
export type OptionalExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;

export async function asyncIterableToArray<T>(
  asyncIterable: AsyncIterable<T>,
): Promise<T[]> {
  const resultArray: T[] = [];
  for await (const item of asyncIterable) {
    resultArray.push(item);
  }
  return resultArray;
}

// Helper function to convert a readable stream to a string
export async function streamToString(readable: Readable): Promise<string> {
  let data = "";
  for await (const chunk of readable) {
    data += chunk;
  }
  return data;
}

export function stringToStream(myString: string) {
  const s = new Readable();
  s.push(myString); // the string you want
  s.push(null); // indicates end-of-file basically - the end of the stream
  return s;
}

export function isValidUUID(uuid: string): boolean {
  const regex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return regex.test(uuid);
}

/**
 * Get the Hasura Action Handler Payload from the req object
 * https://hasura.io/docs/2.0/actions/action-handlers/
 * @param req
 */
export function getHasuraActionPayload<InputType = Record<string, any>>(
  req: Req,
) {
  return (req as any).body as HasuraActionHandlerPayload<InputType>;
}
