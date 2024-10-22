import { isWebImage } from "~/services/IngestService/utils";

import {
  bufferToStream,
  clamp,
  isPathAModel,
  isPathAThumbnail,
  isPathAVideo,
  isPathAVideoThumbnail,
  isPathAnImage,
  objMap,
  readableToBuffer,
  zip,
} from "./util";

// Replace with the name of the file containing your utility functions

describe("Utility functions", () => {
  test("zip function", () => {
    const a = [1, 2, 3];
    const b = ["a", "b", "c"];
    const expected = [
      [1, "a"],
      [2, "b"],
      [3, "c"],
    ];
    expect(zip(a, b)).toEqual(expected);
  });

  test("objMap function", () => {
    const input = { a: [1, 2], b: [3, 4] };
    const expected = { a: [2, 4], b: [6, 8] };
    expect(objMap(input, (v) => v * 2)).toEqual(expected);
  });

  test("isPathAThumbnail function", () => {
    expect(isPathAThumbnail("path/to/thumbnail.jpg")).toBe(true);
    expect(isPathAThumbnail("path/to/image.jpg")).toBe(false);
  });

  test("isPathAVideoThumbnail function", () => {
    expect(isPathAVideoThumbnail("path/to/thumbnail.mp4")).toBe(true);
    expect(isPathAVideoThumbnail("path/to/video.mp4")).toBe(false);
  });

  test("isPathAnImage function", () => {
    expect(isPathAnImage("path/to/image.jpg")).toBe(true);
    expect(isPathAnImage("path/to/document.xyz")).toBe(false);
  });

  test("isPathAVideo function", () => {
    expect(isPathAVideo("path/to/image.mp4")).toBe(true);
    expect(isPathAVideo("path/to/image.avi")).toBe(true);
    expect(isPathAVideo("path/to/image.ogg")).toBe(true);
    expect(isPathAVideo("path/to/image.webm")).toBe(true);
    expect(isPathAVideo("path/to/document.xyz")).toBe(false);
    expect(isPathAVideo("path/to/document.webmfdf")).toBe(false);
    expect(isPathAVideo("path/to/document.vogg")).toBe(false);
  });

  test("isPathAModel function", () => {
    expect(isPathAModel("path/to/model.fbx")).toBe(true);
    expect(isPathAModel("path/to/model.obj")).toBe(true);
    expect(isPathAModel("path/to/model.ma")).toBe(true);
    expect(isPathAModel("path/to/model.mb")).toBe(true);
    expect(isPathAModel("path/to/model.usd")).toBe(true);
    expect(isPathAModel("path/to/model.usda")).toBe(true);
    expect(isPathAModel("path/to/model.gltf")).toBe(true);
    expect(isPathAModel("path/to/model.3ds")).toBe(true);
    expect(isPathAModel("path/to/model.max")).toBe(true);
    expect(isPathAModel("path/to/movie.mp4")).toBe(false);
  });

  test("bufferToStream and readableToBuffer functions", async () => {
    const buffer = Buffer.from("Hello, world!");
    const stream = bufferToStream(buffer);
    const newBuffer = await readableToBuffer(stream);
    expect(newBuffer).toEqual(buffer);
  });

  test("clamp function", () => {
    expect(clamp(5, 1, 10)).toBe(5);
    expect(clamp(-1, 1, 10)).toBe(1);
    expect(clamp(11, 1, 10)).toBe(10);
  });

  test("is web image", () => {
    expect(isWebImage("test.png")).toBe(true);
  });
});
