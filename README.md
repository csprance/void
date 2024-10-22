# VOID Stack

> A boilerplate framework for modern web service development. Virtualization/Orchestration/Integration/Deployment
> all wrapped up in one with fantastic DX. Battle tested.

## Documentation

- [Documentation Website](https://docs.void-app.org)
- Or run `yarn run docs`

## Folder Structure

> Monorepo

- apps/
  - These are services or applications that can run
- infrastructure/
  - These are things like databases or high level admin
- packages/
  - These are shared packages we want to share between the repository

## Deployment

Any push to the `main` branch triggers a new build and deployment.

If you wish to avoid this, please make changes in a different branch **OR** add the string `SKIP-DEPLOY` to a git commit message.
This will cause the Deployment to be skipped.

To reset the production database to be the default database as if the application was just created add the string
`:feelsgood: RESET-PROD`

You can modify this behavior in the [deploy.yml](.github/workflows/deploy.yml) file.
