declare module "omit-empty" {
  interface OmitOptions {
    omitZero?: boolean;
  }

  function omitEmpty<T>(obj: T, options?: OmitOptions): T;

  export default omitEmpty;
}
