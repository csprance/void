import _ from "lodash";
import { describe, expect, it } from "vitest";
import { getValueByPath, objectToPaths, toTitleCase } from "~/helpers/utils";

describe("utils", () => {
  it("toTitleCase should correctly convert string to title case", () => {
    const str = "a 2d string #2 that looks like this.";
    const expected = "A 2D String #2 That Looks Like This.";
    const result = toTitleCase(str);
    expect(result).to.eq(expected);
  });

  it("toTitleCase should correctly convert string to title case", () => {
    const str = "a 3d string #2 that looks like this.";
    const expected = "A 3D String #2 That Looks Like This.";
    const result = toTitleCase(str);
    expect(result).to.eq(expected);
  });
});

describe("objectToPath", () => {
  it("should convert a simple nested object to a path array", () => {
    const obj = {
      where: { collections: { collection: { name: { _eq: "value" } } } },
    };
    const results = objectToPaths(obj);
    expect(results).toEqual(["where.collections.collection.name._eq"]);
    expect(getValueByPath(obj, results[0])).toEqual("value");
  });

  it("should handle a deeply nested object", () => {
    const obj = { a: { b: { c: { d: { e: "value" } } } } };
    const results = objectToPaths(obj);
    expect(results).toEqual(["a.b.c.d.e"]);
    expect(getValueByPath(obj, results[0])).toEqual("value");
  });

  it("should handle a deeply nested object and then getValueByPath from a similar object", () => {
    const obj = { a: { b: { c: { d: { e: "value" } } } } };
    const similarObj = {
      a: {
        b: {
          c: { d: { e: "value", b: true }, f: "other", somethingElse: obj },
          lookatme: "teste",
        },
        someOther: "thing",
      },
      test: "",
    };
    const results = objectToPaths(obj);
    expect(results).toEqual(["a.b.c.d.e"]);
    expect(getValueByPath(similarObj, results[0])).toEqual("value");
  });

  it("should return empty array for non-object inputs (number)", () => {
    expect(objectToPaths(42 as any)).toEqual([]);
  });

  it("should return empty array for non-object inputs (string)", () => {
    expect(objectToPaths("string" as any)).toEqual([]);
  });

  it("should return empty array for non-object inputs (array)", () => {
    expect(objectToPaths([1, 2, 3])).toEqual([]);
  });

  it("should return empty array for non-object inputs (undefined)", () => {
    expect(objectToPaths(undefined as any)).toEqual([]);
  });

  it("should return an empty array for an empty object", () => {
    expect(objectToPaths({})).toEqual([]);
  });

  it("should return an empty array for an object where it can't find anything", () => {
    const obj = {
      where: { collections: { collection: { name: { _eq: "value" } } } },
    };
    const results = objectToPaths(obj);
    expect(results).toEqual(["where.collections.collection.name._eq"]);
    expect(
      getValueByPath({ some: "random", obj: ["e", "c", "t"] }, results[0]),
    ).toEqual(undefined);
  });

  it("should handle complex objects correctly", () => {
    const obj = { a: { b: [1, 2, 3], c: null, d: { e: "value" } } };
    const results = objectToPaths(obj);
    expect(results).toEqual(["a.b", "a.c", "a.d.e"]);
    for (const [path, value] of _.zip(results, [[1, 2, 3], null, "value"])) {
      expect(getValueByPath(obj, path!)).toEqual(value);
    }
  });
});
