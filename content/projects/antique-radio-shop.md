---
title: Antique Radio Shop
description: A world-class antique ecommerce site built with Nuxt
date: 1653170400000
updated: 1655980885868
disableSidebar: true
url: https://antique-radioshop.com
thumbnail: /blog/ars-mockup.jpg
---

Antique Radio Shop is an antique ecommerce site that focuses mainly in tuberadios from the 50s-60s. I rebuilt and redesigned the whole site as part of a much needed update.

## Overview of the project

![](/blog/ars-mockup.jpg)

### Motivation and analysis

Most of the site hadn't have any sort of updates or changes since the website launch in 2008, which caused many problems.

There was no proper CMS (PHPMyAdmin), there were many security vulnerabilities and the website wasn't accessible and responsive at all since it relied on images instead of CSS for the design.

### Goals and requirements

- Use modern and secure technologies to ensure speed, stability, security and integrity.
- Follow best practices in e-commerce and improve the overall UI/UX

### Research

I used [the Baymard institute](https://baymard.com/) UX research as a source since they have extensive information about e-commerce sites.

## Web stack and why

### Nuxt 2

Antique Radio Shop sells collector items, so it's not a regular e-commerce site and I needed as much flexilibility as possible and custom integrations.

[Nuxt](https://nuxtjs.org) has been proven to be one of the most solid choices for a full-stack framework. It's built on top of Vue and has both SSG and SSR capabilities. The DX building the site was excellent thanks to HMR and framework modules.

A migration to Nuxt 3 is planned.

### NetlifyCMS + Nuxt Content

The site needed a proper CMS that allowed to easily browse the products and modify them, without cluttering.

Since I was already using Nuxt, I decided that NetlifyCMS and Nuxt Content could be a great pair since it manages the content in a Git installation and allows for easy deployment and version control.

### Netlify

Netlify is one of the best static hostings that are available nowadays. It also offers some 'serverless' capabilities to allow lambda function and form processing, as well as edge CDN in multiple locations. I chose a SSG content strategy, since the products didn't change often enough to use SSR.

What's more, since I was already using NetlifyCMS it fit really nicely with their Git gateway, after all it's built by the same people!

### Supabase

To migrate from the old MySQL databases and manage the day-to-day operations, I needed a database to store customer orders.

Supabase is a Firebase alternative that, among other things, offers PostgreSQL databases with REST APIs. The API docs generation and security policies were really nice to work with.

### Third-party integrations

I used the PayPal and Stripe integrations to offer an in-house checkout experience, secured with server-side validation.

## Challenges

### Design

![](/blog/ars-comparison.jpg)
Giving a fresh new face to a website isn't an easy task, specially when it looks so outdated.

I spent a few days on Figma making a lot of prototypes, and decided I would maintain a "luxury" style keeping the identity of the old site.

### PayPal SDK

While Stripe has the best developer experience, PayPal is quite the opposite. It needs an embedded button that loads via an external script and isn't well documented. After digging for a few days, I used the [paypal-js](https://github.com/paypal/paypal-js) official SDK which doesn't block page rendering and works great for SPA/SSG frameworks.

I will cover how to properly integrate Nuxt with PayPal in the future, since there's little to no information available.

### Newsletter

The company was interested in launching a newsletter, so I used Mailchimp and a simple sign-up flow (email-only) on the mainpage. I also designed a few email templates for the marketing campaigns.

## Lessons learned and closing thoughts

Rebuilding Antique Radio Shop taught me a lot of things in order to overcome the challenges and requirements of the projects.

The project was very successful:

- Improved SEO from Page 3-4 in Google to the first 5 results.
- Google Lighthouse 90+ scores in 4 categories (speed, accesibility, best practices, SEO).
- Received compliments from clients regarding the usability and aesthetics of the new site.
- Reduced architecture costs by switching to JAMstack technologies.

If you would like more details about the project or are intested in working with me, [contact me](/contact).