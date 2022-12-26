<div id="top"></div>

# Anilog

> An anime and manga tracker built with NextJS and GraphQL.

## Table of contents

- [About The Project](#about-the-project)
  - [Built With](#built-with)
  - [Highlights](#highlights)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Usage](#usage)
- [Acknowledgments](#acknowledgments)
- [Author](#author)

## About The Project

An anime and manga tracker using the [Anilist GraphQL API](https://github.com/AniList/ApiV2-GraphQL-Docs) for static and dynamic queries. First time using GraphQL and the Apollo client to consume an API in NextJS. Queries are executed on the server to pre-render pages using NextJS `getServerSideProps`. Dynamic queries are executed on the client side when searching for an anime or manga.

### Highlights

- GraphQL API calls and interactions
- Normalized reactive data caching using Apollo client
- Server side rendering to pre-render pages for better SEO and page loading performance
- NextJS images optimization to reduce load times and Largest Contentful Paint
- Client side search functionality and rendering
- Dynamic page routing
- Responsive on all screens

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GraphQL](https://graphql.org/)
- [Apollo Client](https://www.apollographql.com/)
- [Anilist GraphQL API](https://github.com/AniList/ApiV2-GraphQL-Docs)

🌐 [Live Demo](https://anilog.vercel.app/)

🏗️ [Storybook Design](https://anilog-storybook.vercel.app/?path=/story/complete-homepage--page)

🎨 [Figma Design](https://www.figma.com/file/wGhHnZDT59jzUZmz7RX6dG/ani-tracker?node-id=0%3A1&t=KSLPSVErdBmo5bLP-1)

![screenshot](/public/images/anilog-full-screenshot.png)

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

To get a local copy up and running follow these simple example steps.

<p align="right">(<a href="#top">back to top</a>)</p>

### Installation

Clone repository

```
git clone https://github.com/antonio-lopez/anilog.git
```

Install dependencies

```
cd anilog
npm install
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

```
cd anilog
npm run dev
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Acknowledgments

- Anilist GraphQL API
  - [Link](https://github.com/AniList/ApiV2-GraphQL-Docs)

<p align="right">(<a href="#top">back to top</a>)</p>

## Author

👤 **Antonio Lopez**

- Website: [Antonio Lopez](https://www.antoniolopez.me/)
- Github: [@antonio-lopez](https://github.com/antonio-lopez)

<p align="right">(<a href="#top">back to top</a>)</p>
