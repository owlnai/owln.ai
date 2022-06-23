---
title: Refactoring my personal site for the nth time
description: 'Why I decided to re-do my site and how.'
tag: development
date: 1631138400000
updated: 1655980885868
---

I've been building websites for a decade, but there's one thing that I never got right: my personal website. A personal website is a reflection of your brand, what you want to show to other people. 

## Why building a new site
I think every web developer who has been in the industry for a while has felt the need to redesign their portfolio. Either because they want to implement new ideas they've just learned or they just want to get their hands into coding. Either way, I really enjoy building stuff and I was happy to work on this.

## Rebuilding the site
### Designing the site

Every time I open Figma, in order to improve my skills and abilities, I try to create my best work so far. I believe that's a good way to surpass your limits and get out of your confort zone. 

After some time looking for design inspiration on the Internet and world-class portfolios, I got a few ideas to implement.

![Early Figma prototype of the site](/blog/figma.png)
*A prototype doesn't need to be pixel-perfect and the accurate final representation, but rather a playground to test your ideas and evolve.*

### Implementing the idea

Now it was time to make the idea come to life. I decided to go with Nuxt and UnoCSS since they're tipically my favorite stack to work with. After spending a weekend, the page was nearly finished. I made some changes compared to the Figma file above, which you should notice if you go to the [homepage](/). 

After getting everything to work, it was time to polish it. I ran multiple Lighthouse audits as well as my own testing using DevTools and while I got 100/100/100/100 scores, there was room for improvement, so I spent hours optimizing font files, testing on multiple screens and devices...until it was good to go.


### Hosting it

Now it comes the fun part. Setting up the domain and making it available to the rest of the world. I chose Netlify as I've been their customer and user for years, and they were already managing the namespace of my domain for certain tools and even my own link shortener. At the time of publishing this blog, I'll have open-sourced it if you want to take a look at it.
 
---

I'm really happy with how fast the site was finished, and my friends liked the result. Got any comments or questions? Feel free to [contact me](/contact).
