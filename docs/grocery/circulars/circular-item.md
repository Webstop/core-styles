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

The original digital circular ad item. With a 

{% capture example %}
{% include examples/circular-items/_circular-item-thumbnail-example.html %}
{% endcapture %}
{% include example.html content=example %} 

#### Grid of Thumbnail Circular Items

<div class="bd-example">
  <div class="row">
    {% include examples/circular-items/_circular-item-thumbnail-example.html %} 
    {% include examples/circular-items/_circular-item-thumbnail-example.html %}
    {% include examples/circular-items/_circular-item-thumbnail-example.html %}
    {% include examples/circular-items/_circular-item-thumbnail-example.html %}
    {% include examples/circular-items/_circular-item-thumbnail-example.html %}
    {% include examples/circular-items/_circular-item-thumbnail-example.html %}
  </div>
</div>

<!--
### Small Circular Item 

Tall format digital circular ad item with a 250 pixel square image.

{% capture example %}
{% include examples/circular-items/_circular-item-small-example.html %}
{% endcapture %}
{% include example.html content=example %}

#### Grid of Small Circular Items
<div class="bd-example">
  <div class="row">
    {% include examples/circular-items/_circular-item-small-example.html %}
    {% include examples/circular-items/_circular-item-small-example.html %}
    {% include examples/circular-items/_circular-item-small-example.html %}
    {% include examples/circular-items/_circular-item-small-example.html %}
    {% include examples/circular-items/_circular-item-small-example.html %}
    {% include examples/circular-items/_circular-item-small-example.html %}
  </div>
</div>
-->

### Tower (1k) Circular Item 

Tall format digital circular ad item with a 1k 16:9 image.

{% capture example %}
{% include examples/circular-items/_circular-item-tower-1k-example.html %}
{% endcapture %}
{% include example.html content=example %}

#### Grid of Tower Circular Items
<div class="bd-example">
  <div class="row">
    {% include examples/circular-items/_circular-item-tower-1k-example.html %}
    {% include examples/circular-items/_circular-item-tower-1k-example.html %}
    {% include examples/circular-items/_circular-item-tower-1k-example.html %}
    {% include examples/circular-items/_circular-item-tower-1k-example.html %}
    {% include examples/circular-items/_circular-item-tower-1k-example.html %}
    {% include examples/circular-items/_circular-item-tower-1k-example.html %}
  </div>
</div>

### Mixed Items

<div class="bd-example">
  <div class="row">
    {% include examples/circular-items/_circular-item-tower-1k-example.html %}
    {% include examples/circular-items/_circular-item-tower-1k-example.html %}
    {% include examples/circular-items/_circular-item-tower-1k-example.html %}
    {% include examples/circular-items/_circular-item-tower-1k-example.html %}
    {% include examples/circular-items/_circular-item-thumbnail-example.html %}
    {% include examples/circular-items/_circular-item-thumbnail-example.html %}
    {% include examples/circular-items/_circular-item-thumbnail-example.html %}
    {% include examples/circular-items/_circular-item-thumbnail-example.html %}
  </div>
</div>
