---
layout: docs
title: Live Search
description: Get search results as you type.
group: components
toc: true
---

Live search watches a search field and makes AJAX requests as you type.

## Examples

The base `search-form` class defines the search form. The `search-from-search-text` class identifies the 
text field to watch; the field the consumer types search terms into.

### Basic Search Example

<div class="toolbar-detached">
{% capture example %}
{% include examples/search/_search-form-example.html %}
{% endcapture %}
{% include example.html content=example %} 
</div>

#### Important Attributes

The following attributes are required for Live Search to function. **They are all placed on the root `form` element**, 
the same form element the `search-form` is placed on.

| Attribute     | Description |
|---------------| ----|
| `data-search` | The attribute `data-search` with a value of `live` enables Live Search on the form. |
| `data-target` | The attribute `data-target` identifies the HTML element to place the search results inside. |
| `action`      | The `action` attribute identifies the URL to use for the AJAX search request. **The results are to be in HTML format.** |

<br>

### Search Form in a Toolbar Example

Inline search forms can be placed inside a toolbar.

<div class="toolbar-detached">
{% capture example %}
{% include examples/search/_search-form-in-toolbar-example.html %}
{% endcapture %}
{% include example.html content=example %} 
</div>


