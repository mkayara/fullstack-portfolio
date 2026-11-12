# Fullstack Portfolio

A responsive Next.js and Tailwind CSS showcase for a hands-on learning milestone: **Portfolio Mastery: Full Stack Web Development Workshop**, held at Taylor's University on April 26, 2024.

The workshop introduced the modern web stack and provided practical exposure to **Next.js**, **Tailwind CSS**, and **Firebase**. This site presents that experience as a small portfolio landing page.

## What is in this repo

- A responsive, accessible portfolio page built with the Next.js App Router.
- Custom styling with Tailwind CSS and a small set of bespoke CSS details.
- A workshop milestone section with the supplied event, date, location, and technologies.
- A clean install using the normal Next.js project dependencies.

Firebase is presented as part of the workshop stack, but this showcase does not connect to a Firebase project. There is no Firebase SDK, backend, API key, or service configuration to maintain.

## Run locally

Requires Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other useful commands:

```bash
npm run lint
npm run build
```

`node_modules/` is generated locally by npm and excluded from Git; do not commit it.

## Deploy

This Next.js app can be deployed to a Next.js-compatible host such as Vercel. No environment variables or Firebase setup are needed.

## Project structure

```text
src/app/
  globals.css   Responsive styles and Tailwind CSS import
  layout.tsx    Root layout and page metadata
  page.tsx      Portfolio landing page
```

## Workshop recognition

> In recognition of successful completion of the hands-on Portfolio Mastery: Full Stack Web Development Workshop event held at Taylor's University on April 26, 2024. The event provided exposure to the full-stack technology stack of modern web development and hands-on experience with Next.js, Tailwind CSS, and Firebase.

This repository is a personal showcase inspired by the workshop; it is not an official event or university website.
