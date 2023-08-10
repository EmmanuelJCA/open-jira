<p align="center">
  <a href="https://nextjs.org">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png">
      <img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" height="128">
    </picture>
    <h1 align="center">Next.js</h1>
  </a>
</p>

<p align="center">The React Framework for the Web</p>

# Open Jira

## Environment Variables
1. Clone the .env.template file and rename it to .env.
2. Change environment variables.

## Lift the database
```bash
$ docker-compose up -d
```

## Installation

```bash
$ npm install
# or
$ yarn install
# or
$ pnpm install
```

## Running the app

```bash
# development
$ npm run dev
# or
$ yarn dev
# or
$ pnpm dev
```

## Fill database with test data

Execute:
```
http://localhost:3000/api/seed
```
