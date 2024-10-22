# Backend

> This is the backend. You would use this for heavy processing tasks or stuff that you don't want to run on your frontend
> This is still useful even with things like next/nuxt.

## Barrelsby

This project uses [barrelsby](https://www.npmjs.com/package/barrelsby) to generate index files to import the controllers.

Edit `.barreslby.json` to customize it:

```json
{
  "directory": ["./src/controllers/rest", "./src/controllers/pages"],
  "exclude": ["__mock__", "__mocks__", ".spec.ts"],
  "delete": true
}
```
