---
slug: "build-with-gatsby-tailwind"
title: "Building My Platform With Gatsby And Tailwind"
date: "2020-07-04"
author: "@andrewywoo"
categories: "retrospect"
tags: "software engineer javascript"
---

<!-- TODO: Add Blog Intro Picture that also serves for SEO Preview -->

Since diving deep into the world of Javascript frameworks in 2017, React was just one of those things that clicked and felt right.
I've dabbled in AngularJS, Angular 2+, as well as a little bit of Svelte, and still feel the most comfortable working in React. For that reason,
when I made it a goal to create a developer portfolio and blog platform, I went with React, specifically [Gatsby](https://www.gatsbyjs.org/).

## Why I Chose Gatsby

I started this project for numerous reasons which led me to choose Gatsby as my framework of choice.

1. Create a platform where I can showcase myself
2. Maximize learning opportunities by choosing technologies I haven't worked with
3. Choose a project that's large enough that I can iterate upon in the future

While playing around with ideas in my head, I settled on the idea to create a developer portfolio/blog. A portfolio and blog is large enough of a project that
will allow me to flex my creativity and knowledge, as well as give me a place to convey information that I've learned to the rest of the community.

After researching some React based frameworks, I landed on Gatsby for a couple of reasons.

1. Gatsby takes care of organizing your data through GraphQL
2. A static site generator that builds HTML during the build proccess will ensure a fast web app
3. Loads of plugins that tackle most major problems in web development such as routing and image processing
4. Amazing documentation for almost everything you'd need to learn on how to utilize the framework

### GraphQL

[GraphQL](https://graphql.org/) has been on the top of my list to learn and use since I've heard about it at the start of my frontend journey. 
A query language that gives you the flexibility of grabbing only the data that you need is a web developers dream! 

As a small example, a query would look like:
```javascript
{
    person {
        name
    }
}
```

Which produces JSON like this:
```javascript
{
    person: {
        name: "Andrew"
    }
}
```

Gatsby choice of using GraphQL for data related procedures allows for more benefits on top of what GraphQL offers such as:

* Keeping logical file paths
* Baked in image optimizations
* Easier context management for all data when using Gatsby `createPages`.

For a detailed explanation on why Gatsby uses GraphQL, you can read it from them [here](https://www.gatsbyjs.org/docs/why-gatsby-uses-graphql/).

<!-- Push frontend complexity into queries — many data transformations can be done at build-time within your GraphQL queries -->
