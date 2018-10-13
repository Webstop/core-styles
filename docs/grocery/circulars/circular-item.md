---
layout: docs
title: Circular Item
description: Individual sale items inside the digital circular.
group: grocery
toc: true
---

## Examples

The basic circular item is the basis for our digital circular content. 

### Standard Circular Item 

Tower format digital circular ad item with a 1k 16:9 image.

{% capture example %}
{% include examples/circular-items/_circular-item-standard-example.html %}
{% endcapture %}
{% include example.html content=example %}

#### Grid of Standard Circular Items

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

---

### Thumbnail (Classic) Circular Item 

The original digital circular ad item. With a `85px` x `83px` image.

<div class="alert alert-warning" role="alert">
  <h4 class="alert-heading">Deprecation Warning!</h4>
  <p>
    The thumbnail layout is being superseeded by the Standard Circular Item. 
    We will continue to support this format while retailers transition to 
    larger graphics. 
  </p>
</div>

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

---

### Mixed Items

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
