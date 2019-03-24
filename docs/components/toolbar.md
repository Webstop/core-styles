---
layout: docs
title: Toolbar
description: Navigation, settings, and controls for page features.
group: components
toc: true
source: Webstop
---

## Examples

The toolbar holds the primary controls and navigation for page content.

The base `toolbar` class defines the toolbar unit. Inside the toolbar we group items using the `toolbar-group` class.
The `toolbar-group` class provides consistent position and margins between toolbar elements. 

### Basic Toolbar Example

<div class="toolbar-detached">
{% capture example %}
{% include examples/toolbars/_toolbar-basic-example.html %}
{% endcapture %}
{% include example.html content=example %} 
</div>

### Form Toolbar Example

Inline forms can be placed inside a toolbar.

<div class="toolbar-detached">
{% capture example %}
{% include examples/toolbars/_toolbar-form-example.html %}
{% endcapture %}
{% include example.html content=example %} 
</div>

### Toolbar Horizontal Alignment Example

Use any of the [Horizontal Alignment classes](/docs/bootstrap/4.1/layout/grid#horizontal-alignment) from the Bootstrap Grid to 
adjust the alignment of your toolbar groups. 

<div class="toolbar-detached">
{% capture example %}
{% include examples/toolbars/_toolbar-alignment-example.html %}
{% endcapture %}
{% include example.html content=example %} 
</div>
