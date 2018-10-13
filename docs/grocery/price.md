---
layout: docs
title: Price
description: A unit for laying out prices and associated data.
group: grocery
toc: true
---

## Examples

{% capture example %}
{% include examples/prices/_price-dollar-example.html %}
<hr>

{% include examples/prices/_price-cent-example.html %}
<hr>

{% include examples/prices/_price-overlay-example.html %}
{% endcapture %}
{% include example.html content=example %}


### Price in Dollars Example

This example shows a price in dollars. Use the `price-big-dollars` sub-class to 
give a larger emphasis to the dollar portion of the price.

{% capture example %}
{% include examples/prices/_price-dollar-example.html %}
{% endcapture %}
{% include example.html content=example %}

### Price in Cents Example

This example shows a price in cents. Use the `price-big-cents` sub-class to 
give a larger emphasis to the cents portion of the price.

{% capture example %}
{% include examples/prices/_price-cent-example.html %}
{% endcapture %}
{% include example.html content=example %}

### Price Overlay Example

In this example we want to overlay the price with text, but still give it special treatment.

{% capture example %}
{% include examples/prices/_price-overlay-example.html %}
{% endcapture %}
{% include example.html content=example %}
