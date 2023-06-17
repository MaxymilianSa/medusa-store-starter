# Medusa Store Starter 🚀

## Table of Contents

- [Technologies Used](#technologies-used)
- [Naming Convention](#naming-convention)
- [Directory Structure](#directory-structure)
- [Install project](#install-project)
- [Admin panel](#admin-panel)
- [Tests](#tests)

## Technologies Used

- Express.js
- Next.js
- TailwindCSS

## Frontend naming Convention

We will use a **PascalCase**. Names in pascal case start with a capital letter. In case of the names with multiple words, all words will start with capital letters.

Here are some examples of pascal case: `FirstName` and `LastName`.

## Directory Structure

- `apps/backend` - folder with api files
- `apps/frontend` - folder with store files
- `src/packages` - folder with the all global settings

## Prerequisites

- [Install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Install yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
- [Install postgresql](https://www.postgresql.org/download/)

## Install project

1. Clone repository
2. Run `yarn` to install project dependencies.
3. Run `yarn workspace backend install` to install backend dependencies.
4. Make copy of `apps/backend/.env.example` file with name `apps/backend/.env` (e.g. by executing command `cp apps/backend/.env.example apps/backend/.env`)
5. Start your postgresql database.
6. Go to `apps/backend` and run migrations by executing command `npx @medusajs/medusa-cli migrations run`
7. Back to root directory and run seed `yarn workspace backend seed` to set default data.
8. Run `yarn workspace frontend install` to install frontend dependencies.
9. Go to `apps/frontend` and make copy of `apps/frontend/.env.example` file with name `apps/frontend/.env` (e.g. by executing command `cp apps/frontend/.env.example apps/frontend/.env`)
10. Open .env file and edit api url (prefix `API_BASE_URL`)
11. Run `yarn dev` to run dev server or `yarn build` for production purposes.

## Admin panel

To open admin panel u need to open `http://localhost:8000/app/login`.

- Login: `admin@medusa-test.com`
- Password: `supersecret`

## Tests

1. Run `yarn dev` to run dev server
2. Go to frontend workspace by executing command `cd apps/frontend`.
3. Run `yarn cy:test` to use tests.
