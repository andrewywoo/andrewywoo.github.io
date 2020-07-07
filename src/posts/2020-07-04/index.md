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
Currently this site doesn't utilize a bunch of GraphQL but the plugin list is extensive when I want to eventually pull in data from places like Github.
As of now, I am utilizing Gatsby and GraphQL to optimize the low amount of images on this platform utilizing the gatsby-plugin-sharp plugin, as well as dynamically 
generating the blog posts via Markdown with gatsby-transformer-remark. 

*I do plan to eventually swap over to using MDX instead as I would love the added benefit of utilizing JSX within Markdown.*

### Creating Blog Posts Dynamically With Markdown

I chose to dynamically generate blog posts via markdown as it was a simple and fast solution that would allow me to create posts easily. As a developer, I'm already pretty used
to markdown language as I use it with my team at work. Gatsby provide a very easy way to setup the usage of Markdown into web-ready content through a plugin called `gatsby-transformer-remark`.
There is a very well written guide [here](https://www.gatsbyjs.org/docs/adding-markdown-pages/) if you'd like to get it setup yourself. Below I'll go over my implementation.

I first started with installing the plugins with npm and setting up the `gatsby-config.js` file. 

```
npm install --save gatsby-source-filesystem gatsby-transformer-remark
```
```javascript
module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts`,
            },
        },
        `gatsby-transformer-remark`,
    ],
}
```

Then I created a posts folder, [you can see it here](https://github.com/andrewywoo/andrewywoo.github.io/tree/source/src/posts), under src which will hold the markdown files. 
I kept them in folders labeled by date but the naming convention is up to you. When providing `gatsby-source-filesystem` the path to this directory, the plugin helps source 
the Markdown files which can now be transformed to HTML and JSON to be queried via GraphQL.
