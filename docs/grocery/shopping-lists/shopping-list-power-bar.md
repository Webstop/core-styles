---
layout: docs
title: Shopping List Power Bar
description: Site wide shopping list side car.
group: grocery
toc: true
source: Webstop
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
<div class="bd-example">
  {% include examples/shopping-lists/_shopping-list-power-bar-site-example.html %}
</div>

### Faux Shopping List Power Bar

If the content of your power bar is being loaded via ajax, there may be a delay before the content loads. 
In the mean time we can display a faux shopping list, and it has an altered look to help indicate it's 
faux state. The faux version is sub-classed by `shopping-list-power-bar-faux`.

<div class="example-height-fixed">
{% capture example %}
{% include examples/shopping-lists/_shopping-list-power-bar-faux-example.html %}
{% endcapture %}
{% include example.html content=example %}
</div>
