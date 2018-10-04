---
layout: docs
title: Circular Item
description: Individual sale items inside the digital circular.
group: grocery
toc: true
---

## Examples

The basic circular item is the basis for our digital circular content. 

### Thumbnail (Classic) Circular Item 

The original digital circular ad item.

{% capture example %}
{% include_relative circular-item-examples/_circular-item-thumbnail-example.html %}
{% endcapture %}
{% include example.html content=example %} 

### Small Circular Item 

Tall format digital circular ad item with a 250 pixel square image.

{% capture example %}
{% include_relative circular-item-examples/_circular-item-small-example.html %}
{% endcapture %}
{% include example.html content=example %}


{% capture example %}
<div class="row">
  <div class="col">
    {% include_relative circular-item-examples/_circular-item-small-example.html %}
  </div>
  <div class="col">
    {% include_relative circular-item-examples/_circular-item-small-example.html %}
  </div>
  <div class="col">
    {% include_relative circular-item-examples/_circular-item-small-example.html %}
  </div>
  <div class="col">
    {% include_relative circular-item-examples/_circular-item-thumbnail-example.html %}
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}
