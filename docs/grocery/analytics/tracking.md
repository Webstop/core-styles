---
layout: docs
title: Aye, Analytics Tracking 
description: Easy way to track elements.
group: grocery
toc: true
source: Webstop
---


Aye, analytics provides a convent way to track activity on web and mobile pages. It extends Ahoy 
analytics with a data attribute interface and a set of special attributes.

tl;dr [skip to examples](#examples)

## Data Attributes

Nearly all analytics tracking can be enabled and configured through HTML alone with data 
attributes (our preferred way of using JavaScript functionality). 

This document focuses on using our tracking on the front-end HTML. We also provide a JSON API, 
and Rails helper methods for tracking as well, but those are beyond the scope of this document.


### Actions

We provide three base types of tracking actions: 

| Action Attribute               | Description |
|--------------------------------|-------------|
| Track View `data-aye-view`     | Applying the `data-aye-view` attribute to an HTML element will record a record when the web page is rendered in the browser. See the [Track View Example](#track-view-example) for usage details. |
| Track Click `data-aye-click`   | Applying the `data-aye-click` attribute to an HTML element will record a record when the consumer clicks or taps the HTML element. See the [Track Click Example](#track-click-example) for usage details. |
| Track Submit `data-aye-submit` | Applying the `data-aye-submit` attribute to an HTML form element will record a record when the consumer submits the form. See the [Track Submit Example](#track-submit-example) for usage details. |

These tracking actions don't require a value to trigger the tracking action. Any value set on an 
action attribute will be ignored.

### Attributes

The following optional attributes provide data to the tracking API. _Try to provide as many attributes as the available data allows._

| Attribute                 | Description |
|---------------------------|-------------|
| `data-aye-app`            | The [product ID](#product-id-list) of the current app (a.k.a. module). See the [product ID list](#product-id-list) section below. |
| `data-aye-resource`       | The Rails model name of the item being tracked. |
| `data-aye-resource-id`    | The database record ID of the resource being tracked. |
| `data-aye-resource-label` | A note field about the resource. |
| `data-aye-context`        | The Rails model name of the parent resource our item is being served within. See the [resource vs. context](#resource-vs-context) section below. |
| `data-aye-context-id`     | The database record ID of the context being tracked within. |
| `data-aye-context-label`  | A note field about the context. |
| `data-aye-property-*`     | A prefix for adding arbitrary properties to the database, use `data-property-` followed by an arbitrary key name (i.e. `data-property-key-name`, e.g. `data-property-title` or `data-property-qty`). All properties will be placed in the properties field as a hash.  |
| `data-aye-category`       | The main section label used to organize the data on analytics pages. |
| `data-aye-group`          | A lower level label used to organize the data within a report. |
| `data-aye-tags`           | Hash tags used to group data. The format is: 1. all lowercase, 2. use-dashes between words 3. start with a `#` hash tag, 4. uses spaces to seperate tags (e.g. `#erie-insider #free-offer`). |


## Data Lists

Below you'll find the value lists for the `data-aye-app` attribute and the `data-aye-group` attribute.


### Product ID List

These values are used by the `data-aye-app` attribute. The following values match those found 
in core-rails `app` database. You can find the full list on the 
[core-admin apps page](https://admin.grocerywebsite.com/apps).  

| ID | Name |
|---:|:-----|
|  1 | circulars
|  2 | consumer accounts
|  3 | contact us
|  4 | coupons
|  5 | coupons.com
|  6 | grocery newsletters
|  7 | PDF circulars
|  8 | recipes
|  9 | shopping lists
| 10 | store locator
| 11 | donations

_You can find the full list on the [core-admin apps page](https://admin.grocerywebsite.com/apps)._  


### Circular Groups List

The following are the approved values for the `data-aye-group` attribute, _when_ used on circular items.

| Circular Group |
|:---------------|
| Beauty Shot    |
| Contest        |
| Coupon         |
| Newsletter     |
| Promotion      |
| Recipe         |
| Registration   |
| Survey         |
| Video          |

<!--
| Circular Group |
|:---------------|
| Beauty Shot    |
| Contest        |
| Coupon         |
| Layout         |
| Newsletter     |
| Other          |
| Page           |
| Promotion      |
| Recipe         |
| Registration   |
| Survey         |
| Tracking       |
| Video          |


original List

- Beauty Shot
- Contest
- Coupon
- Layout
- Newsletter
- Other
- Page
- Promotion
- Recipe
- Registration
- Survey
- Tracking
- Video
-->


## Examples

The following examples will write a record to our analytics database by 
supplying the data to the Webstop event tracking API. 


### Track Click Example

By adding the `data-aye-click` attribute our aye.js analytics javascript 
will watch the element and create a record in our analytics database when the 
the consumer clicks the element.

{% capture example %}
<button class="btn btn-primary" 
  data-aye-click 
  data-aye-app="8" 
  data-aye-resource="RecipeIngredient" 
  data-aye-resource-id="120" 
  data-aye-context="Recipe" 
  data-aye-context-id="10">
  Add Ingredient
</button> 
{% endcapture %}
{% include example.html content=example %} 

Placing `data-aye-click` on an element alone doesn't give us much useful data to record. 
We augment the analytics record with additional data by adding more `data-aye-*` attributes.

In this case the analytics record will record that:

1. The consumer was using our `Recipe` product (`data-aye-app="8"`).
2. The item tracked came from the `RecipeIngredient` model (`data-aye-resource="RecipeIngredient"`).
3. The item tracked has a record id of `120` in the `recipe_ingredients` database (`data-aye-resource-id="120"`).
4. The item tracked was displayed in the context of a `Recipe` model (`data-aye-context="Recipe"`).
5. The context the item being tracked within has a record id of `10` in the `recipes` database (`data-aye-context-id="10"`).

### Track View Example

By adding the `data-aye-view` attribute our aye.js analytics javascript 
will discover the element and create a record in our analytics database when the 
the consumer visits a web page containing the element.

{% capture example %}
<img src="/assets/images/aye-analytics/7233_Recipe_SIMG.jpg" style="max-width: 325px;"
  data-aye-view 
  data-aye-app="1" 
  data-aye-resource="AdItem" 
  data-aye-resource-id="1000" 
  data-aye-resource-label="Recipe: Silly Muffin" 
  data-aye-context="Ad" 
  data-aye-context-id="500" 
  data-aye-group="Recipe"
  data-aye-property-recipe-id="23517"
  data-aye-property-recipe-number="7233"
  data-aye-property-recipe-title="Silly Muffin"> 
{% endcapture %}
{% include example.html content=example %} 

Placing `data-aye-view` on an element alone doesn't give us much useful data to record. 
We augment the analytics record with additional data by adding more `data-aye-*` attributes.

In this case the analytics record will record that:

1. The consumer was using our `Circular` product (`data-aye-app="1"`).
2. The item tracked came from the `AdItem` model (`data-aye-resource="AdItem"`).
3. The item tracked has a record id of `1000` in the `ad_item` database (`data-aye-resource-id="1000"`).
4. The item tracked was displayed in the context of an `Ad` model (`data-aye-context="Ads"`).
5. The context the item being tracked within has a record id of `500` in the `ads` database (`data-aye-context-id="500"`).
6. The item tracked belongs to the `Recipe` group (`data-aye-group="Recipe"`).
7. The event record will have the custom property `recipe_id` recorded with a value of `23517` (`data-aye-property-recipe-id="23517"`).
8. The event record will have the custom property `recipe_number` recorded with a value of `7233` (`data-aye-property-recipe-number="7233"`).
9. The event record will have the custom property `recipe_title` recorded with a value of `Silly Muffin` (`data-aye-property-recipe-title="Silly Muffin"`).

_That's **a lot** of useful information to build analytics reports and dashboards off of!_

#### About Properties

Notice the use of the three `data-aye-property-*` attributes. You can record any arbitrary set 
of data using the property prefix, everything in the attribute name after the prefix 
(`data-aye-property-`) will be used as a key in the properties field in the analytics database. 
When naming your aye properties use dash case (e.g. `recipe-title`), the aye.js script will 
convert it to snake case (e.g. `recipe_title`), before submitting it to the API.

The example above will write the following to the properties json database field:

{% highlight json %}
properties: {
  recipe_id: 23517,
  recipe_number: 7233,
  recipe_title: 'Silly Muffin'
}
{% endhighlight %}


### Track Submit Example

By adding the `data-aye-submit` attribute to a form, our aye.js analytics javascript 
will watch the form and create a record in our analytics database when the 
the consumer submits the form.

{% capture example %}
<form
  data-aye-submit 
  data-aye-app="6"
  data-aye-resource="GroceryNewsletter" 
  data-aye-resource-id="20" 
  data-aye-context="Ads" 
  data-aye-context-id="1000">
  
  <div class="form-group">
    <label for="email">Email Address</label>
    <input type="email" data-aye-property-email class="form-control" id="email">
  </div>
  <button type="submit" class="btn btn-primary">Subscribe to Newsletter</button>
</form> 
{% endcapture %}
{% include example.html content=example %} 

Placing `data-aye-submit` on an element alone doesn't give us much useful data to record. 
We augment the analytics record with additional data by adding more `data-aye-*` attributes.

In this case the analytics record will record that:

1. The consumer was using our `Grocery Newsletters` product (`data-aye-app="6"`).
2. The item tracked came from the `GroceryNewsletter` model (`data-aye-resource="GroceryNewsletters"`).
3. The item tracked has a record id of `20` in the `grocery_newsletters` database (`data-aye-resource-id="20"`).
4. The item tracked was displayed in the context of an `Ad` model (`data-aye-context="Ad"`).
5. The context the item being tracked within has a record id of `1000` in the `ads` database (`data-aye-context-id="1000"`).

## Installation

Using Aye.js requires a few things be setup on your site template. Specifically some data attributes on the body tag of 
the web page. Aye uses these variables to craft the URL to submit tracking events to.

| Attribute          | Description |
|--------------------|-------------|
| `data-retailer-id` | The record id from the retailer table of the current grocery website. |
| `data-environment` | This is used to determine what API host to use. Supports `production` (`https://api.grocerywebsite.com`), `development` (`http://grocery.local:3000`), and `test` (`http://grocery.local:3000`). If you need a different environment then you set the `data-api-host` attribute. |
| `data-api-host`    | If you need to use an environment other than production or local development & testing, you can specify the domain host to use manually with this attribute (e.g. `http://grocery.core1.rails1.webstophq.com`).   |

### Examples

For local development you'd have the following data attributes:

{% highlight html %}
<body data-retailer-id="767" data-environment="development">
{% endhighlight %}

For local testing you'd have the following data attributes:

{% highlight html %}
<body data-retailer-id="767" data-environment="test">
{% endhighlight %}

For production you'd have the following data attributes:

{% highlight html %}
<body data-retailer-id="767" data-environment="production">
{% endhighlight %}

For other environments you can specify the following:

{% highlight html %}
<body data-retailer-id="767" data-api-host="http://grocery.core1.rails1.webstophq.com">
{% endhighlight %}

_The example above would be used for the Core1 testing server._
