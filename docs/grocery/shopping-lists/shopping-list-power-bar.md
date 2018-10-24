---
layout: docs
title: Shopping List Power Bar
description: Site wide shopping list side car.
group: grocery
toc: true
---

## Examples

The shopping list side car sits inside the site template and persists across page views. 
It uses a "side car" approach, that is to say it slides out from the right side of the 
page and retreats back off the page. 


<div class="example-height-fixed">
{% capture example %}
{% include examples/shopping-lists/_shopping-list-power-bar-example.html %}
{% endcapture %}
{% include example.html content=example %}
</div>

### Shopping List Power Bar in a Site Layout


{% capture example %}
{% include examples/shopping-lists/_shopping-list-power-bar-site-example.html %}
{% endcapture %}
{% include example.html content=example %}

