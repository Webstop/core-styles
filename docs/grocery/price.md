---
layout: docs
title: Price
description: A unit for laying out prices and associated data.
group: grocery
toc: true
---

## Examples



{% capture example %}
{% include_relative price-examples/_price-dollar-example.html %}
<hr>

{% include_relative price-examples/_price-cent-example.html %}
<hr>

{% include_relative price-examples/_price-overlay-example.html %}
{% endcapture %}
{% include example.html content=example %}


## Price in Dollars Example

This example shows a price in dollars.

{% capture example %}
{% include_relative price-examples/_price-dollar-example.html %}
{% endcapture %}
{% include example.html content=example %}

## Price in Cents Example

This example shows a price in cents.

{% capture example %}
{% include_relative price-examples/_price-cent-example.html %}
{% endcapture %}
{% include example.html content=example %}

## Price Overlay Example

In this example we want to overlay the price with text, but still give it special treatment.

{% capture example %}
{% include_relative price-examples/_price-overlay-example.html %}
{% endcapture %}
{% include example.html content=example %}
