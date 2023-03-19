# Project ESC

![GitHub last commit](https://img.shields.io/github/last-commit/parkj009/project-esc?logo=Github&style=plastic)
![Website](https://img.shields.io/website?down_message=offline&style=plastic&up_color=green&url=https%3A%2F%2Fprojectesc.io)
![GitHub](https://img.shields.io/github/license/parkj009/project-esc?style=plastic)
![GitHub repo size](https://img.shields.io/github/repo-size/parkj009/project-esc?style=plastic)

## Introduction

**Project ESC** is a browser-based game created for the purpose of practicing ReactJS and react-three-fiber (and to have fun, of course).

---

## Table of contents

1. [Overview](#overview)
2. [Getting Started](#getting-started)
3. [Testing](#testing)
4. [Production](#production)
5. [References](#references)
6. [Credits](#credits)

---

## Overview

Project ESC was created to provide the general public an awesome browser-based game utilizing an escape room concept. It was designed using the following technology stack below:

- ReactJS: JS Library
- react-three-fiber: React renderer for threejs
- Tailwind CSS: Utility-first CSS Framework
- NextJS: React framework
- (need backend)

---

## Getting Started

### Pre-requisites

Install [Node.js](https://nodejs.org/en/)

### Project Setup

Navigate to the directory where you want to set up a local dev environment. Clone this repo, cd into the folder and run the following:

```
npm install
npm run dev
```

npm install: Installs the file dependencies from package.json
npm run serve: Compiles and hot-reloads for development

---

## devDependencies

- prettier: an opinionated code formatter to stick with a agreed upon coding style
- husky: a git hook that improves git commits/pushes.
  - pre-commit: when git commit is run, `npm run lint` will be run first to identify any errors/issues within the code and will cancel the commit if it finds any.
  - pre-push: when git push is run, `npm run build` will be run first to ensure there are no errors in building the application in a production environment. If errors are found then the push will be cancelled.

---

## Testing

To be Added (identify what to use for unit, load, and end-to-end testing).

---

## Production

When you are ready for production, run the following:

```
npm run build
```

npm run build: Compiles and minifies assets

---

## References

- [Node.js](https://nodejs.org/en/about/)
- [ReactJS](https://reactjs.org/)
- [react-three-fiber](https://github.com/pmndrs/react-three-fiber)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [NextJS](https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs)
- [JSX](https://reactjs.org/docs/introducing-jsx.html)
- [Prettier](https://prettier.io/)
- [husky](https://github.com/typicode/husky)

---

## Credits

- Authors:
  - Grace Kim
  - James Park
  - Thomas Ouye
- Contributors:
