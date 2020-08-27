---
layout: docs
title: Development Process
description: How to use our style guide to improve your productivity.
group: guide
toc: true
source: Webstop
---

Now you've read about our approach to front-end components, and using 
the Style Guide Drive Development methodology. This guide is less esoteric, 
it is more pragmatic as it gets into the nuts and 
bolts of how to use the style guide on a day-to-day basis.

## First Time Setup

Getting started is easy since we are using Docker to run our 
development server.

1. Fork the [core-styles repo](https://github.com/webstop/core-styles)
2. Clone the core-styles repo & setup git remotes for your repo and Webstop
3. Run the serve command `./serve`

Once you run the serve command Docker will run out and download the 
Docker images you need, install the Ruby Gems, and install the 
Node Modules.

After about 10 minutes everything should be downloaded and ready to use.

_If you have further questions about the repo see the 
[README]([https://github.com/webstop/core-styles#webstop-style-guide) file._

## Development

The following walks you through working with the core-styles living style guide.

### Starting for the Day

The first thing I like to do when developing with core-styles is to open 3 
terminal windows/tabs. 

1. Run `git status` in the first window/tab & make sure you don't have any 
  uncommitted changes laying around. Then create a new branch for the 
  feature you're about to create or update (_we'll need to be in a unique branch 
  when you want to try your changes in a back-end like Rails or Lasso_).
2. In the second terminal window/tab run  `./serve`. This will run the 
  contents of the `serve` file at the root of this project which fires 
  up the web server and makes sure all our Ruby Gems and Node Modules are 
  installed. Should take about 10 seconds for the server to start if it's 
  _not_ your first time.
3. In the third window/tab run `./watch`, this will run the contents of the 
  `watch` file in the root of our project. This will watch our SCSS directory 
  for any changes and compile our SCSS into CSS and place it in the `dist` 
  folder. 
  
  
At this point your first tab is available for you to run git commands, your 
second tab is running a web server, and your third tab is running a Sass 
watch script.

Now, visit the development website here: [localhost:4000]({{ jekyll_host }}/).

### Developing a Component

When you are working with a component there are three main files you'll be interacting 
with: the documentation page, the SCSS file, and the HTML examples. Every component 
gets these three files.

#### 1. The Documentation Page

**Location: `/docs/`**

Documentation pages are the web pages we can visit in the style guide to look up a 
component. They describe the component, the design rational, list the options we have 
available and most importantly display an example and show the HTML source code.

Documentation pages are found in the `/docs/` folder at the root of core-styles. Within 
the `docs` folder are folders for the various products Webstop provides (like `circulars`, 
`recipes`, & etc) giving our style guide a nice structure. 

 
##### New Documentation Pages

If you are adding a new documentation page, be sure to add the title of the file to the 
documentation navigation by adding it to the YAML file found here: `/_data/nav.yml`. This 
should be pretty self-explanatory once you open the YAML file. Sometimes changes to this 
file don't show up in the navigation right away. Given enough time it should show up, but 
you can always restart your server if you are impatent. Also, you can manually type the 
URL into your browser before it shows up in the section navigation.


#### 2. The Sass Stylesheet

**Location: `/SCSS/`**

By convention we have one Sass file per component. These Sass files contain all the 
styling for our component. Our build system takes all the various Sass files (plus 
external libraries like Bootstrap), and compiles them into a single compact CSS file.

It is the role of the watch script to look for changes in our Sass file and generate 
new CSS files. These generated CSS files can be found in the `dist` folder. _You should 
**never** edit the files in the `dist` folder directly._


##### New Sass Stylesheets

If you are adding a new stylesheet, make sure to add an `@import` statement to the 
`core-styles.scss` file found here: `/SCSS/core-styles.scss`. This should be pretty 
self-explanatory once you open the core-styles Sass file.


#### 3. The HTML Examples

**Location: `/_includes/examples/`**

HTML examples consist of the HTML we use for our component. Each component is going to 
want at least one example HTML file. The example HTML file contains _only_ the HTML for 
the component. You may want more than one example file to illustrate the component in 
different states or with different modifier classes applied.

Since these are just include files, nothing special needs to be done when you create a 
new one.



---




