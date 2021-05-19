---
layout: docs
title: Aye, Analytics Tracking 
description: The easy way to gather analytics about specific page elements.
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

We provide three base types of tracking actions. The value is used to populate the name field in our analytics database.

| Action Attribute               | Description |
|--------------------------------|-------------|
| Track View `data-aye-view`     | Applying the `data-aye-view` attribute to an HTML element will record a record when the web page is rendered in the browser. See the [Track View Example](#track-view-example) for usage details. |
| Track Click `data-aye-click`   | Applying the `data-aye-click` attribute to an HTML element will record a record when the consumer clicks or taps the HTML element. See the [Track Click Example](#track-click-example) for usage details. |
| Track Submit `data-aye-submit` | Applying the `data-aye-submit` attribute to an HTML form element will record a record when the consumer submits the form. See the [Track Submit Example](#track-submit-example) for usage details. |


#### Action Names

These tracking action attributes require a value to populate the event record's name field. The value submitted to the API will combine the name of 
the action with the value submitted. The following examples illustrate how the event name setting works.


##### Action Name Examples 

The following view action will record `view coupon` in the name field of the events database table:

{% highlight html %}
<div data-aye-view="coupon">...</div>
{% endhighlight %}

The following click action will record `click coupon` in the name field of the events database table:

{% highlight html %}
<a href="/coupon" data-aye-click="coupon">...</a>
{% endhighlight %}

The following submit action will record `submit coupon` in the name field of the events database table:

{% highlight html %}
<form data-aye-submit="coupon">...</form>
{% endhighlight %}



### Attributes

The following optional attributes provide data to the tracking API. _Try to provide as many attributes as the available data allows._

| Attribute                 | Description |
|---------------------------|-------------|
| `data-aye-app-id`         | The [product ID](#product-id-list) of the current app (a.k.a. module). See the [product ID list](#product-id-list) section below. |
| `data-aye-resource`       | The Rails model name of the item being tracked. |
| `data-aye-resource-id`    | The database record ID of the resource being tracked. |
| `data-aye-resource-label` | A note field about the resource. |
| `data-aye-context`        | The Rails model name of the parent resource our item is being served within. See the [resource vs. context](#resource-vs-context) section below. |
| `data-aye-context-id`     | The database record ID of the context being tracked within. |
| `data-aye-context-label`  | A note field about the context. |
| `data-aye-property-*`     | A prefix for adding arbitrary properties to the database, use `data-property-` followed by an arbitrary key name (i.e. `data-property-key-name`, e.g. `data-property-title` or `data-property-qty`). All properties will be placed in the properties field as a hash.  |
| `data-aye-category`       | The main section label used to organize the data on analytics pages. |
| `data-aye-group`          | A lower level label used to organize the data within a report. It acts as a sub-category to the category field. A category is required when presenting a group. |
| `data-aye-tags`           | Tags group data together. The format is: 1. all lowercase, 2. comas to separate tags (e.g. `erie insider, free offer, monopoly`). |

### Resource vs. Context

The difference between the resource and context attributes is the most common source of confusion in the Aye attributes. 
The resource is the object you are tracking. For example, if the item you are tracking is a coupon offer with an id of 
`123` the value of your `data-aye-resource` would be `Offer` (matches the Rails model name), and the `data-aye-resource-id`
would be `123`. We embed coupons all sorts of places, sometimes they are in the coupon gallery, sometimes they are in a 
digital circular, sometimes in a recipe and etc. This is the purpose of the context, to record *where* the item was being 
displayed. For example, if our coupon offer is displayed inside recipe `456` then we'd have a context like `data-aye-context` 
is `Recipe` and `data-aye-context-id` is `456`. 

{% highlight html %}
<div data-aye-view="coupon" 
  data-aye-resource="Offer" 
  data-aye-resource-id="123"
  data-aye-context="Recipe" 
  data-aye-context-id="456">
...
</div>
{% endhighlight %}

Often times the context and resource are the same. For example, a recipe that is displayed on the recipe detail page 
might look like the following (this is an [actual recipe](https://www.topsmarkets.com/Recipes/Detail/7643/Mini_Turkey_Pizzas/)). 

{% highlight html %}
<div data-aye-view="recipe" 
  data-aye-resource="Recipe" 
  data-aye-resource-id="25264"
  data-aye-context="Recipe" 
  data-aye-context-id="25264"
  data-aye-property-recipe-number="7643"
  data-aye-property-title="Mini Turkey Pizzas"
  data-aye-property-exclusive-id="69">
...
</div>
{% endhighlight %}

## Data Lists

Below you'll find the value lists for the `data-aye-app-id` attribute and the `data-aye-property-marketing-type` attribute.


### Product ID List

These values are used by the `data-aye-app-id` attribute. The following values match those found 
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


### Circular Property Marketing Type List

The following are the approved values for the `data-aye-property-marketing-type` attribute, _when_ used on circular items.

| Circular Property Marketing Type |
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
| Circular Property Marketing Type |
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
  data-aye-click="add recipe ingredient" 
  data-aye-app-id="8" 
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

1. The consumer was using our `Recipe` product (`data-aye-app-id="8"`).
2. The item tracked came from the `RecipeIngredient` model (`data-aye-resource="RecipeIngredient"`).
3. The item tracked has a record id of `120` in the `recipe_ingredients` database (`data-aye-resource-id="120"`).
4. The item tracked was displayed in the context of a `Recipe` model (`data-aye-context="Recipe"`).
5. The context the item being tracked within has a record id of `10` in the `recipes` database (`data-aye-context-id="10"`).
6. The item tracked will have an event name of `click add recipe ingredient`.

### Track View Example

By adding the `data-aye-view` attribute our aye.js analytics javascript 
will discover the element and create a record in our analytics database when the 
the consumer visits a web page containing the element.

{% capture example %}
<img src="/assets/images/aye-analytics/7233_Recipe_SIMG.jpg" style="max-width: 325px;"
  data-aye-view="recipe"  
  data-aye-app-id="1" 
  data-aye-resource="AdItem" 
  data-aye-resource-id="1000" 
  data-aye-resource-label="Recipe: Silly Muffin" 
  data-aye-context="Ad" 
  data-aye-context-id="500" 
  data-aye-property-marketing-type="Recipe"
  data-aye-property-recipe-id="23517"
  data-aye-property-recipe-number="7233"
  data-aye-property-recipe-title="Silly Muffin"> 
{% endcapture %}
{% include example.html content=example %} 

Placing `data-aye-view` on an element alone doesn't give us much useful data to record. 
We augment the analytics record with additional data by adding more `data-aye-*` attributes.

In this case the analytics record will record that:

1. The consumer was using our `Circular` product (`data-aye-app-id="1"`).
2. The item tracked came from the `AdItem` model (`data-aye-resource="AdItem"`).
3. The item tracked has a record id of `1000` in the `ad_item` database (`data-aye-resource-id="1000"`).
4. The item tracked was displayed in the context of an `Ad` model (`data-aye-context="Ads"`).
5. The context the item being tracked within has a record id of `500` in the `ads` database (`data-aye-context-id="500"`).
6. The item tracked belongs to the `Recipe` property marketing type (`data-aye-property-marketing-type="Recipe"`).
7. The event record will have the custom property `recipe_id` recorded with a value of `23517` (`data-aye-property-recipe-id="23517"`).
8. The event record will have the custom property `recipe_number` recorded with a value of `7233` (`data-aye-property-recipe-number="7233"`).
9. The event record will have the custom property `recipe_title` recorded with a value of `Silly Muffin` (`data-aye-property-recipe-title="Silly Muffin"`).
10. The item tracked will have an event name of `view recipe`.

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
  data-aye-submit="newsletter sign-up" 
  data-aye-app-id="6"
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

1. The consumer was using our `Grocery Newsletters` product (`data-aye-app-id="6"`).
2. The item tracked came from the `GroceryNewsletter` model (`data-aye-resource="GroceryNewsletters"`).
3. The item tracked has a record id of `20` in the `grocery_newsletters` database (`data-aye-resource-id="20"`).
4. The item tracked was displayed in the context of an `Ad` model (`data-aye-context="Ad"`).
5. The context the item being tracked within has a record id of `1000` in the `ads` database (`data-aye-context-id="1000"`).
6. The item tracked will have an event name of `submit newsletter sign-up`.

## Setup & Installation

You might have noticed that Aye has zero CSS, it's all about the JavaScript interface. There are three JavaScript files 
we need to install in the correct order for this to work.

#### JavaScript Files <small class="text-muted">(listed in order)</small>: 

1. `/dist/js/core-styles/config.js`
2. `/dist/js/ahoy/ahoy.js`
3. `/dist/js/core-styles/aye.js`

---

Using Aye.js requires a few things be setup on your site template. Specifically, some data attributes on the body tag of 
the web page. Aye uses these data attributes to craft the URL used to submit tracking events.

| Attribute          | Description |
|--------------------|-------------|
| `data-retailer-id` | The record id from the retailer table of the current grocery website. |
| `data-environment` | This is used to determine what API host to use. Supports `production` (`https://api.grocerywebsite.com`), `development` (`http://grocery.local:3000`), and `test` (`http://grocery.local:3000`). If you need a different environment then you set the `data-api-host` attribute. |
| `data-api-host`    | If you need to use an environment other than production or local development & testing, you can specify the domain host to use manually with this attribute (e.g. `http://grocery.core1.rails1.webstophq.com`).   |

### Examples

For **local development** you'd have the following data attributes:

{% highlight html %}
<body data-retailer-id="767" data-environment="development">
{% endhighlight %}

For **local testing** you'd have the following data attributes:

{% highlight html %}
<body data-retailer-id="767" data-environment="test">
{% endhighlight %}

For **production** you'd have the following data attributes:

{% highlight html %}
<body data-retailer-id="767" data-environment="production">
{% endhighlight %}

For **other environments** you can specify the following:

{% highlight html %}
<body data-retailer-id="767" data-api-host="http://grocery.core1.rails1.webstophq.com">
{% endhighlight %}

_The example above would be used for Webstop's Core 1 testing server._
