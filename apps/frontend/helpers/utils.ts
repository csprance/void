import _ from "lodash";
import { getActiveClient } from "villus";

import type { QueryTags } from "./query-tags";

/**
 * Filters a list of objects based on the presence of a search string within specified properties.
 *
 * @param objects - The array of objects to filter.
 * @param properties - An array of string keys to check within each object.
 * @param searchString - The string to search for within each object's specified properties.
 * @returns An array of objects that contain the search string in one or more specified properties.
 */
export function filterObjectsByProperties(
  objects: any[],
  properties: any[],
  searchString: string,
) {
  const filteredObjects = objects.filter((obj) => {
    return properties.some((prop) => {
      return (
        obj[prop] && String(obj[prop]).toLowerCase().includes(searchString)
      );
    });
  });

  return filteredObjects;
}

/**
 * Sorts an array of objects based on a specified property. Handles strings, numbers, and booleans.
 *
 * @param objects - The array of objects to sort.
 * @param property - The object property by which to sort.
 * @param reverse - Optional flag to reverse the sorting order.
 * @returns A sorted array of objects.
 */
export function sortObjectsByProperty(
  objects: any[],
  property: string,
  reverse = false,
) {
  if (objects.length > 0) {
    if (typeof objects[0][property] === "string") {
      objects.sort((a, b) => {
        if (!a[property] && !b[property]) {
          return 0;
        } else if (!a[property]) {
          return -1;
        } else if (!b[property]) {
          return 1;
        } else {
          return a[property].localeCompare(b[property]);
        }
      });
    } else {
      objects.sort((a, b) => {
        if (!a[property] && !b[property]) {
          return 0;
        } else if (!a[property]) {
          return -1;
        } else if (!b[property]) {
          return 1;
        } else {
          return a[property] - b[property];
        }
      });
    }
  }

  if (reverse) {
    return objects.reverse();
  }

  return objects;
}

/**
 * Finds the index of an object within an array based on its 'id' property.
 *
 * @param list - The array of objects to search.
 * @param id - The id to look for.
 * @returns The index of the object with the matching id, or -1 if not found.
 */
export function getIndexByID(list: any[], id: any) {
  if (typeof list !== "undefined") {
    return list.findIndex((obj) => obj.id.toString() === id.toString());
  }
  return -1;
}

/**
 * Determines the next index in a list, considering optional reverse traversal and wrap-around.
 *
 * @param list - The array to traverse.
 * @param currentIndex - The current index within the array.
 * @param reverse - Optional flag to reverse the traversal direction.
 * @returns The next index in the list.
 */
export function getNextIndex(
  list: string | any[],
  currentIndex: number,
  reverse = false,
) {
  const direction = reverse ? -1 : 1;
  return (currentIndex + direction + list.length) % list.length;
}

/**
 * Triggers a refetch of GraphQL queries that are tagged with specified tags.
 *
 * @param refetchTags - An array of QueryTags used to identify which queries to refetch.
 */
export function refetchQueriesByTags(refetchTags: QueryTags[]) {
  const client = getActiveClient();
  client.refetchTaggedQueries(refetchTags);
}

/**
 * Converts a string to title case.
 *
 * @param str - The string to convert.
 * @returns The title-cased string.
 */
export function toTitleCase(str: string): string {
  return str
    .trim()
    .split(" ")
    .map((word) => {
      let newWord = "";
      for (let i = 0; i < word.length; i++) {
        if (i === 0) {
          // Convert the first character to uppercase
          newWord += word[i].toUpperCase();
        } else if (!isNaN(Number(word[i - 1])) && word[i].match(/[a-z]/i)) {
          // Convert the character following a digit to uppercase
          newWord += word[i].toUpperCase();
        } else {
          // Convert the rest to lowercase
          newWord += word[i].toLowerCase();
        }
      }
      return newWord;
    })
    .join(" ");
}

/**
 * Generates the full path for a thumbnail.
 *
 * @param thumbnail - The thumbnail identifier.
 * @param width - Optional width of the thumbnail.
 * @param height - Optional height of the thumbnail.
 * @returns A string representing the full path of the thumbnail.
 */
export function voidThumbnailPath(
  thumbnail: string,
  width = 128,
  height = 128,
): string {
  const {
    public: { backendUrl },
  } = useRuntimeConfig();
  return `${backendUrl}/rest/thumbnail/${thumbnail.replace(
    "thumbnails/",
    "",
  )}/${width}x${height}`;
}

/**
 * Generates the full path for a video thumbnail.
 *
 * @param thumbnail - The video thumbnail identifier.
 * @returns A string representing the full path of the video thumbnail.
 */
export function voidVideoThumbnailPath(thumbnail: string): string {
  const {
    public: { backendUrl },
  } = useRuntimeConfig();
  return `${backendUrl}/rest/thumbnail/video/${thumbnail.replace(
    "video-thumbnails/",
    "",
  )}`;
}

/**
 * Generates the full path for a gallery.
 *
 * @param gallery - The gallery identifier.
 * @returns A string representing the full path of the gallery.
 */
export function voidGalleryPath(gallery: string): string {
  const {
    public: { backendUrl },
  } = useRuntimeConfig();
  return `${backendUrl}/rest/${gallery}`;
}

/**
 * Clamps a number between a minimum and maximum value.
 *
 * @param value - The value to clamp.
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns The clamped value.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function isObject(val: any): val is Record<string, unknown> {
  return val != null && val.constructor === Object;
}

export function isNumber(val: any): val is number {
  return !isNaN(parseFloat(val)) && isFinite(val);
}

export function isBoolean(val: any): val is boolean {
  return val === "false" || val === "true";
}

export function isArray(val: any): val is unknown[] {
  return Array.isArray(val);
}

export function parseValue(val: unknown) {
  if (typeof val === "undefined" || val === "") {
    return null;
  }

  if (isBoolean(val)) {
    return parseBoolean(val);
  }
  if (isArray(val)) {
    return parseArray(val);
  }
  if (isObject(val)) {
    return parseObject(val);
  }
  if (isNumber(val)) {
    return parseNumber(val);
  }
  return val as string;
}

export function parseObject(obj: any): Record<string, any> {
  const result: Record<string, unknown> = {};
  for (const key in obj) {
    const val = parseValue(obj[key]);
    if (val !== null) result[key] = val; // ignore null values
  }
  return result;
}

export function parseArray(arr: any[]): any[] {
  return arr.map((item) => parseValue(item));
}

export function parseNumber(val: any): number {
  return Number(val);
}

export function parseBoolean(val: any): boolean {
  return val === "true";
}

/**
 * Converts a nested object into an array of string paths.
 * Each path represents a sequence of keys to access a particular nested value in the object.
 *
 * @param obj The object to be converted into paths. Should be a record with string keys.
 * @param prefix A string prefix used for recursive calls to build the full path.
 *               Should be left as the default for initial calls.
 * @returns An array of strings, where each string is a dot-separated path leading to a value in the object.
 *          Returns null if the input is not an object or is an array.
 *
 * @example
 * const obj = { a: { b: { c: 'value' } } };
 * const paths = objectToPaths(obj); // returns ['a.b.c']
 */
export function objectToPaths(obj: Record<string, any>, prefix = ""): string[] {
  // Check if the input is not an object or is an array, return empty array
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return [];
  }
  return _.flatMap(obj, (value, key) => {
    const fullPath = prefix ? `${prefix}.${key}` : key;
    return _.isPlainObject(value) ? objectToPaths(value, fullPath) : fullPath;
  });
}

/**
 * Retrieves the value at a specified path within an object.
 * The path is represented as a dot-separated string of keys.
 *
 * @param obj The object from which to retrieve the value.
 * @param pathString A dot-separated string representing the path to the value in the object.
 * @returns The value at the specified path within the object, or undefined if the path is invalid.
 *
 * @example
 * const obj = { a: { b: { c: 'value' } } };
 * const value = getValueByPath(obj, 'a.b.c'); // returns 'value'
 */
export function getValueByPath(obj: Record<string, any>, pathString: string) {
  const pathArray = pathString.split(".");
  let current = obj;

  for (const key of pathArray) {
    if (current[key] === undefined) {
      return undefined;
    }
    current = current[key];
  }

  return current;
}

export function capitalCase(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 *
 * @param key
 * @param val
 */
export function onUrlFilterClicked(key: any, val: any) {
  navigateTo({
    path: "/assets",
    query: {
      [key]: [val],
    },
  });
}
