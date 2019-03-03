---
layout: docs
title: Standard Digital Coupon Circular Item
description: Individual digital coupons inside the digital circular.
group: grocery
toc: true
source: Webstop
---

## Examples

The basic coupon item enhances the value of our digital circular content. 

Tower format digital coupon item with a variable size thumbnail image.

{% capture example %}
{% include examples/circular-items/_circular-item-standard-coupon-example.html %}
{% endcapture %}
{% include example.html content=example %}

The optional `col` class allows circular items align nicely in a flex box grid. 
Circular items which rest inside a `row` class and contain a `col` class will 
nicely divide up the available space in a row to provide a nice group presentation.

If a circular item is going to stand alone on a page or section of a page, the `col` 
class is unnecessary. 

### Grid of Coupon Circular Items

This layout is achieved by giving the circular items a `col` class within the context 
of a `row`.

<div class="bd-example">
  <div class="row">
    {% include examples/circular-items/_circular-item-standard-coupon-example.html %}
    {% include examples/circular-items/_circular-item-standard-coupon-example.html %}
    {% include examples/circular-items/_circular-item-standard-coupon-example.html %}
    {% include examples/circular-items/_circular-item-standard-coupon-example.html %}
    {% include examples/circular-items/_circular-item-standard-coupon-example.html %}
    {% include examples/circular-items/_circular-item-standard-coupon-example.html %}
  </div>
</div>

---

### Mixed Items Example

<div class="bd-example">
  <div class="row">
    {% include examples/circular-items/_circular-item-standard-coupon-example.html %}
    {% include examples/circular-items/_circular-item-standard-coupon-example.html %}
    {% include examples/circular-items/_circular-item-standard-coupon-example.html %}
    {% include examples/circular-items/_circular-item-coupon-example.html %}
    {% include examples/circular-items/_circular-item-standard-example.html %}
    {% include examples/circular-items/_circular-item-standard-example.html %}
    {% include examples/circular-items/_circular-item-standard-example.html %}
    {% include examples/circular-items/_circular-item-standard-example.html %}
    {% include examples/circular-items/_circular-item-standard-promotion-example.html %}
    {% include examples/circular-items/_circular-item-thumbnail-example.html %}
    {% include examples/circular-items/_circular-item-thumbnail-example.html %}
    {% include examples/circular-items/_circular-item-thumbnail-example.html %}
    {% include examples/circular-items/_circular-item-thumbnail-example.html %}
  </div>
</div>
