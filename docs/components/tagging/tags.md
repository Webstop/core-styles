---
layout: docs
title: Tags
description: Layout for tagged content.
group: components
toc: true
source: Webstop
---


## Basic Tag Example

{% capture example %}
<span class="tag">Blueberry</span>
{% endcapture %}
{% include example.html content=example %} 

## Tag with Color & Close

{% capture example %}
<span class="tag bg-primary">Blueberry <i class="icon-cancel"></i></span>
{% endcapture %}
{% include example.html content=example %} 


## Tag Group Example

When you want to display more than one tag, wrap the tags in a `tag-group` container. 
This will apply consistent spacing around your tags.

{% capture example %}
<div class="tag-group">
  <span class="tag bg-danger">Strawberry <i class="icon-cancel"></i></span>
  <span class="tag bg-success">Lime <i class="icon-cancel"></i></span>
  <span class="tag bg-warning">Lemon <i class="icon-cancel"></i></span>
  <span class="tag bg-primary">Blueberry <i class="icon-cancel"></i></span>
  <span class="tag bg-danger">Strawberry <i class="icon-cancel"></i></span>
  <span class="tag bg-success">Lime <i class="icon-cancel"></i></span>
  <span class="tag bg-warning">Lemon <i class="icon-cancel"></i></span>
  <span class="tag bg-primary">Blueberry <i class="icon-cancel"></i></span>
  <span class="tag bg-danger">Strawberry <i class="icon-cancel"></i></span>
  <span class="tag bg-success">Lime <i class="icon-cancel"></i></span>
  <span class="tag bg-warning">Lemon <i class="icon-cancel"></i></span>
  <span class="tag bg-primary">Blueberry <i class="icon-cancel"></i></span>
</div>
{% endcapture %}
{% include example.html content=example %} 
