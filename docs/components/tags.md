---
layout: docs
title: Tags
description: Layout for tagged content.
group: components
toc: true
source: Webstop
---

## Examples

### Basic Tag Example

{% capture example %}
<span class="tag">Blueberry</span>
{% endcapture %}
{% include example.html content=example %} 

### Tag with Color & Close

{% capture example %}
<span class="tag bg-primary">Blueberry <i class="icon-cancel"></i></span>
{% endcapture %}
{% include example.html content=example %} 


### Multiple Tags Example


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
>


## Usage Example

Tags are used by <a href="/docs/grocery/analytics/tags">Analytics Tags</a>.
