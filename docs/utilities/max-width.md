---
layout: docs
title: Max Width
description: Standard maximum widths used for page content.
group: utilities
toc: true
source: Webstop
---

## Examples

The max width utility classes set the maximum with of content areas for the page.

It can be used on body content, headers, footers, & toolbars to get a consistent look 
across the web page. We provide three standard sizes for page width, `1140`, `1440`,
and `1600` pixels wide.

### Max Width 1140 Example

<div class="toolbar-detached">
{% capture example %}
<div class="max-width-1140">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
{% endcapture %}
{% include example.html content=example %} 
</div>

### Max Width 1440 Example

<div class="toolbar-detached">
{% capture example %}
<div class="max-width-1440">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
{% endcapture %}
{% include example.html content=example %} 
</div>

### Max Width 1600 Example

<div class="toolbar-detached">
{% capture example %}
<div class="max-width-1600">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
{% endcapture %}
{% include example.html content=example %} 
</div>

## Centering

You'll most likely want the content you are applying the max width to be centered on 
the page. This can easily be accomplished by adding Bootstrap's margin utility class 
`mx-auto`.

### Centered Max Width 1140 Example

<div class="toolbar-detached">
{% capture example %}
<div class="max-width-1140 mx-auto">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
{% endcapture %}
{% include example.html content=example %} 
</div>
