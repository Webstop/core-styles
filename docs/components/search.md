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
| `data-hide`   | The attribute `data-hide` identifies the HTML elements to hide while the search results are being displayed, and reveal when the search is cancelled. |
| `action`      | The `action` attribute identifies the URL to use for the AJAX search request. **The results are to be in HTML format.** |

<br>

### Search Form in a Toolbar Example

Inline search forms can be placed inside a toolbar. 

Notice the `toolbar-group` class is placed inside the form on the same element containing the `input-group`, trying to 
place the `toolbar-group` class on other elements will likely produce undesirable results.

<div class="toolbar-detached">
{% capture example %}
{% include examples/search/_search-form-in-toolbar-example.html %}
{% endcapture %}
{% include example.html content=example %} 
</div>


### Complex Search Form Example

Search forms can have any number of fields and the AJAX request will submit them along with the 
`search-from-search-text` field.

<div class="toolbar-detached">
{% capture example %}
{% include examples/search/_search-form-complex-example.html %}
{% endcapture %}
{% include example.html content=example %} 
</div>


