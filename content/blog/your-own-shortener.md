---
title: Your own link shortener
description: 'Discover how to create short links paired with your domain.'
tags: development
date: 1634839479350
updated: 1634839479350
---
You surely have heard of link shorteners. Be it bit.ly, t.co or aka.ms they're everywhere. And why do they exist? Branding purposes, creating convenient short links for really long URLs or just having a place to quickly share stuff between devices without having to store it elsewhere.

But how do I get one?

## The method
Kent C. Dodds created [an interesting tool](https://github.com/kentcdodds/netlify-shortener) on GitHub that lets you create short links with a simple console command. While it was made for Netlify, it could be adapted to other sites like Vercel or you could just write a simple Nginx rule if you got a VPS.

The explanation of this tool is quite simple. It leverages Netlify's built-in redirect system to create a custom route and take you to the desired external address. Then it auto-commits and pushes your code to the remote Git repository (e.g Github). If you have your Netlify site connected to the repo, it will trigger a new build, making your short link available to the world in a few seconds.

## Getting it to work
The first step is forking the repo and then setting up the Netlify site. Then just sync both. You don't need any paid Netlify features or complex setup.

Then clone the repo locally. Not strictly necessary, but I personally recommend to `npm link` the folder after cloning the repo. This will make the locally installed package available everywhere in your PC, allowing you to just run the CLI command and automatically doing the rest, even if you're not in that folder. 

If you named the linked binary "shorten":

`shorten https://example.com`

will yield a random short string. Just like typical shorteners do.

`shorten https://example.com ohwow` 

will yield a `mydomain.com/ohwow` as the short link, meaning that we can customize the short string if we needed a memorable name.

## Next steps
Now this is pretty great as it's probably the easiest method of having a self-hosted link shortener, but if you want the fancy web UI there are some interesting ideas. Inspired by NetlifyCMS, you could leverage their Git Gateway tool to "push" the commit containing the new redirect rules using the OAuth API. 

This would be effectively the most JAMStack link shortener ever made. I don't know if anyone else has tried it out yet, but it's certainly a good side project for the weekends.

