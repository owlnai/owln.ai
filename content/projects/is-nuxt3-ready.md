---
title: Is Nuxt 3 Ready
description: A community-built compatibility guide for Nuxt 3 modules
date: 1635368278138
updated: 1655980885868
disableSidebar: true
url: https://antique-radioshop.com
thumbnail: /blog/isnuxt3ready.jpg
---

Is Nuxt 3 Ready was a project to list which Nuxt modules were compatible with the Nuxt 3 beta and the compatibility status. I built it while the official site was adding compatibility support
## Overview of the project

![](/blog/isnuxt3ready.jpg)

### Motivation and analysis

Nuxt 3 beta was released in late 2021. At the time, most modules were incompatible with the new module architecture. Although there was an official site about modules, it didn't show their compatibility with the new version.

[@pi0](https://github.com/nuxt/framework/discussions/751) launched a Discussions post with a table detailing the compatibility of each module. Someone suggested it would be cool to create a site for this. I read it during the weekend and I thought: _why not?_

### Goals and requirements

- List modules with their respective compatibility (2.x, Bridge, 3.x)
- Easy to use interface, minimize clutter
- Search and filter support
- Coordinate the migration of other modules and keep the community informed

### Research

I got inspired by the name and design of [Is Apple Silicon Ready?](https://isapplesiliconready.com/). I used the official modules repo and @pi0's data table as sources of data.

## Web stack and why

### Nuxt 3

Nuxt 3 was pretty fresh. Not even a month had passed and I was already making a site on production! I choose it not only because it made sense to choose Nuxt, but also because I wanted to try out the new Nuxt 3 features.

I loved trying out the new Nuxt 3 features. It had a few SSR errors that needed a server restart and a few hotfixes, but overall it worked fine.

I also exposed the data via API functions in case someone else needed the data.


### Netlify

There was no static support at the time, so I chose Netlify as it had built-in support thanks to Nitro server presets and I could take advantage of SSR with lambda functions.

The concept of using lambda functions to render a SSR site on Netlify still feels surreal, but it was neat having access to function logs to debug issues.

## Challenges

### Design a source of data

The site consumed its own data API, so I had to plan how to structure the content and expose it in a simple way.

There were about 3-4 Nuxt 3 ready modules at the time, so I went with a static JSON file. The API function would read this file and return it.

However, as the list grew, it probably would have been better to have dedicated JSON/YAML files instead of one single file to make PRs and maintenance easier.

## Lessons learned and closing thoughts

The site was well received by the Nuxt community (and I'm eternally thankful for their support). I learnt a lot about Nuxt 3 as well as how great the OSS community can be.

Some time after, I archived the site in favor of the official modules site as I got the opportunity to integrate some of the features into the official site!