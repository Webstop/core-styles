---
layout: docs
title: Analytics Tracking 
description: Easy way to track elements.
group: grocery
toc: true
source: Webstop
---

## Examples

The following examples will write a record to our analytics database by 
supplying the data to the Webstop tracking API.


### Track Click Example

By adding the `data-track` attribute with a value of `click` our analytics script 
will watch the element and record a record in our analytics database when the 
the consumer clicks the element.

{% capture example %}
{% include examples/analytics/_track-click-example.html %}
{% endcapture %}
{% include example.html content=example %}

Placing `data-track="click"` on an element alone doesn't give us much useful data to record. 
We augment the analytics record with additional data by adding more `data-tracking-*` attributes.



In this case the analytics record will record


#### Apps

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

https://admin.grocerywebsite.com/apps
