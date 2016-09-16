---
layout: docs
title: Introduction
group: getting-started
---

Webstop's front-end framework contains finely crafted HTML5, CSS3 & JavaScript designed to produce compelling web experiences for grocery retailer websites. Our framework takes advantage of modern tools to create mobile-first responsive websites.

This guide will help you get your website up and running with our modern framework in short order.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Quick start

To install Webstop's front-end framework simply place the following script tag on any authorized website.

```js
<script src="//api.grocerywebsite.com/front_end_framework/render_assets"></script>
```

This script will look at the domain name of the page it's placed on to determine which retailer site is being used. This will include all the CSS and JavaScript required for the framework, including jQuery, Tether, Bootstrap, & .

### Options

| Parameter   | Default | Description                                              |
|-------------|---------|----------------------------------------------------------|
| `js`        | `true`  | Set to `false` to exclude the JavaScript files.          |
| `css`       | `true`  | Set to `false` to exclude the Stylesheet files.          |
| `analytics` | `true`  | Set to `false` to exclude analytics.                     |
| `retailer`  | `nil`   | The `retailer_id` value. An integer assigned by Webstop. |

#### Examples

The following examples illustrate the use of the options listed above.

##### Basic Example

Using this version will render all the CSS & JavaScript for a retailer's site.

```js
<script src="//api.grocerywebsite.com/front_end_framework/render_assets"></script>
```

<p class="alert alert-warning" role="alert">
  <strong>Heads Up!</strong> In the basic example above the Webstop server will use the domain name of the page requesting the script to determine which retailer's files to return. If the domain is not setup on Webstop's servers it will fall back to the base framework without any of the retailer's settings, customizations, branding, or theme elements. Use the Retailer ID example below for development environments or for other domains not registered in Webstop's system.
</p>

##### Development Example

Use this version for development environments (e.g. `http://localhost`), or other times when the domain name isn't associated with the retailer in Webstop's system. Also, when in non-production environments you'll want to turn off analytics.

```js
<script src="//api.grocerywebsite.com/front_end_framework/render_assets?retailer=767&analytics=false"></script>
```

<p class="alert alert-success" role="alert">
  <strong>Tip!</strong> There's no down side to including the retailer ID parameter at all times and in all environments.
</p>


## Starter template

Be sure to have your pages set up with the latest design and development standards. That means:

* Using an HTML5 doctype
* Forcing Internet Explorer to use its latest rendering mode ([read more](http://stackoverflow.com/q/6771258))
* And, utilizing the viewport meta tag.

Put it all together and your pages should look like this:

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <!-- Webstop CSS -->
    <script src="//api.grocerywebsite.com/front_end_framework/render_assets?js=false"></script>
    <!-- Your custom CSS goes here -->
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Webstop JavaScript -->
    <!-- This will include jQuery, Tether, Bootstrap JS, & Grocery Modules JS. -->
    <script src="//api.grocerywebsite.com/front_end_framework/render_assets?css=false"></script>
    <!-- Your custom JS goes here -->
  </body>
</html>
{% endhighlight %}

That's all you need for overall page requirements. Visit the [Layout docs]({{ site.baseurl }}/layout/overview) to start laying out your site's content and components.

## Important globals

The framework employs a handful of important global styles and settings that you'll need to be aware of when using it, all of which are almost exclusively geared towards the *normalization* of cross browser styles. Let's dive in.

### HTML5 doctype

The framework requires the use of the HTML5 doctype. Without it, you'll see some funky incomplete styling, but including it shouldn't cause any considerable hiccups.

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  ...
</html>
{% endhighlight %}

### Responsive meta tag

The framework is developed *mobile-first* utilizing *responsive design*, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, **add the responsive viewport meta tag** to your `<head>`.

{% highlight html %}
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
{% endhighlight %}

You can see an example of this in action in the [starter template](#starter-template).

### Box-sizing

For more straightforward sizing in CSS, we switch the global `box-sizing` value from `content-box` to `border-box`. This ensures `padding` does not affect the final computed width of an element, but it can cause problems with some third party software like Google Maps and Google Custom Search Engine.

On the rare occasion you need to override it, use something like the following:

{% highlight scss %}
.selector-for-some-widget {
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
          box-sizing: content-box;
}
{% endhighlight %}

With the above snippet, nested elements—including generated content via `:before` and `:after`—will all inherit the specified `box-sizing` for that `.selector-for-some-widget`.

Learn more about [box model and sizing at CSS Tricks](https://css-tricks.com/box-sizing/).

### Reset via Normalize.css & Reboot

For improved cross-browser rendering, we use [Normalize.css](http://necolas.github.io/normalize.css/) to correct small inconsistencies across browsers and devices. We further build on this with Bootstrap's, slightly more opinionated styles with [Reboot]({{ site.baseurl }}/content/reboot/).

## Support

<p class="alert alert-danger" role="alert">
  <strong>TODO:</strong> Add Webstop support & contact information here
</p>








---


Welcome to the WSG!

<p class="alert alert-info">
<strong>Attention Webstop Staff:</strong> Webstop's front-end framework is already installed inside the Core-Rails, Core-Ember, & Core-Lasso apps; it is so comes pre-installed in all retailer custom Rails apps. <em>The following Installation notes are for 3rd party vendors only.</em>
</p>




To install the WSG use one of the following methods.

### Ruby Gem Installation

`command to install`

### Node Module Installation

`command to install`

### Bower Component Installation

`command to install`
