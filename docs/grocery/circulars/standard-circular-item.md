---
layout: docs
title: Standard Circular Item
description: Individual sale items inside the digital circular.
group: grocery
toc: true
source: Webstop
---

## Examples

The basic circular item is the basis for our digital circular content. 

### Standard Item Example

Tower format digital circular item with a 1k 16:9 image.

{% capture example %}
{% include examples/circular-items/_circular-item-standard-example.html %}
{% endcapture %}
{% include example.html content=example %}

The optional `col` class allows circular items align nicely in a flex box grid. 
Circular items which rest inside a `row` class and contain a `col` class will 
nicely divide up the available space in a row to provide a nice group presentation.

If a circular item is going to stand alone on a page or section of a page, the `col` 
class is unnecessary. 

### Price Pinned Bottom Example

Standard circular item with the price pinned to the bottom. 

{% capture example %}
{% include examples/circular-items/_circular-item-standard-price-bottom-example.html %}
{% endcapture %}
{% include example.html content=example %}

### Price Pinned Top Example

Standard circular item with the price pinned to the top.

{% capture example %}
{% include examples/circular-items/_circular-item-standard-price-top-example.html %}
{% endcapture %}
{% include example.html content=example %}

### Grid of Standard Circular Items

This layout is achieved by giving the circular items a `col` class within the context 
of a `row`.

<div class="bd-example">
  <div class="row">
    {% include examples/circular-items/_circular-item-standard-example.html %}
    {% include examples/circular-items/_circular-item-standard-example.html %}
    {% include examples/circular-items/_circular-item-standard-example.html %}
    {% include examples/circular-items/_circular-item-standard-example.html %}
    {% include examples/circular-items/_circular-item-standard-example.html %}
    {% include examples/circular-items/_circular-item-standard-example.html %}
  </div>
</div>

### Grid of Price Bottom Standard Circular Items

Demonstrates the alignment of prices on the bottom of circular items in a group.

<div class="bd-example">
  {% include examples/circular-items/_circular-item-standard-price-bottom-examples.html %}
</div>

### Grid of Price Top Standard Circular Items

Demonstrates the alignment of prices on the bottom of circular items in a group.

<div class="bd-example">
  {% include examples/circular-items/_circular-item-standard-price-top-examples.html %}
</div>

---

### Mixed Items Example

<div class="bd-example">
  <div class="row">
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
