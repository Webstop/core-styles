---
layout: docs
title: Development Approach
description: Our design system is setup to support Style Guide Driven Development (SGDD).
group: guide
toc: true
---

Style Guide Driven Development is an approach which places a living 
style guide a the heart of the front-end development process. This 
approach produces more reliable, portable, and well documented 
front-end pattern libraries.


## Living Style Guide

A living style guide acts as a reference point for designers and 
developers use to understand how to craft the front-end portion of 
a website or application. 

A living style guide is constantly updated and evolves with the 
product. It establishes the baseline for a design system.

By having an established pattern library at our disposal designers 
and developers are able to work at a faster pace when developing 
the front-end assets.

Having a current and up-to-date pattern library enables our team 
to build we confidence and more quickly.

_Saying you have a living style guide and actually keeping it 
up-to-date are two very different things. This is where 
Style Guide Driven Development comes in!_

## Style Guide Driven Development
 
Style Guide Driven Development is a methodology that keeps your 
style guide up to date as an affect of the process. 

The core concept of SGDD is to build your front-end assets within 
the actual style guide. The style guide acts as the source for 
the core-styles CSS & JS. Because development work for new components 
and updates to existing ones are being done within the actual 
style guide, using the example in the documentation to develop 
against, the style guide remains current as a matter of course. 

Since modern front-end build systems use package managers 
(like [NPM](https://www.npmjs.com) or [Yarn](https://yarnpkg.com/en/)) 
to import CSS & JavaScript libraries from node packages, it is a 
relatively simple matter to import our homegrown front-end assets 
into our various back-end systems the same way.


---

See our [Development Process Guide](/docs/guide/development-process/) to 
learn more about how to use the core-styles in day-to-day design and 
development.  
