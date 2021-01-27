---
layout: docs
title: Ajax Load
description: An easy way to load HTML content into a section of the page.
group: components
toc: true
source: Webstop
---

{% include environment_based_variables.html %}

## Examples

Here are a couple of common uses of the AJAX Load feature.

### Basic Example

To use the Ajax Load feature place a `data-ajax` attribute on an HTML element (e.g. link or button). The `data-load` 
attribute specifies the URL to pull the content from, it is expected to be in HTML format. You specify where to place 
the AJAX content with the `data-target` attribute, it accepts standard jQuery selectors.


{% capture example %}
{% include examples/ajax-load/_ajax-load-example.html %}
{% endcapture %}
{% include example.html content=example %}

### Replacement Example

In the following example we replace the button that triggers the request with the content returned by the AJAX call.

{% capture example %}
{% include examples/ajax-load/_ajax-load-replace-example.html %}
{% endcapture %}
{% include example.html content=example %}

### With Ajax-Form Example

In the following example we want to submit an ajax-form, and also perform an ajax-load to refresh content on another 
part of the page.


{% capture example %}
<form data-ajax-form action="http://localhost:4567/alert_success">
  <div class="form-group">
    <label for="title-example">Title</label>
    <input type="text" class="form-control" name="title-example" id="title-example" placeholder="Title">
  </div>
  <button data-ajax-load data-prevent-default="false" data-target="#ajax-target-3" data-load="http://localhost:4567/alert_success" class="btn btn-primary" type="submit">
    Save Title & Load Content
  </button>
</form>
<div id="ajax-target-3" class="mt-3">
  <div class="alert alert-info">
    This box could be replaced by AJAX load content, if only someone would click the button above.
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}


## Attributes

The following attributes are required.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Options</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="text-nowrap">data-ajax-load</code></td>
      <td>The presence of this attribute indicates clicking on this element should trigger an AJAX load.</td>
    </tr>
    <tr>
      <td><code class="text-nowrap">data-load</code></td>
      <td>
        Attribute specifies the URL of the content you want AJAX'd. The AJAX request should return 
        HTML content to display inside the target element. 
      </td>
    </tr>
    <tr>
      <td><code class="text-nowrap">data-target</code></td>
      <td>
        The DOM node to load the content into. Uses standard jQuery selectors, usually targets an id attribute 
        (e.g. <code class="text-nowrap">#some-target</code>).
      </td>
    </tr>
    <tr>
      <td><code class="text-nowrap">data-prevent-default="false"</code></td>
      <td>
        Allows you to disable <code>event.preventDefault</code>. Useful when you want the button you've attached the 
        <code>data-ajax-load</code> to also submit a 
        <a href="/docs/components/ajax/ajax-form"><code>data-ajax-form</code></a>. Without this option the 
         ajax-form would be prevented from triggering a form submit event and the ajax-form would not be performed.
      </td>
    </tr>
    <tr>
      <td><code class="text-nowrap">data-power-bar</code></td>
      <td>
        When present, completing the ajax call triggers a reload of the Shopping List Power Bar.
      </td>
    </tr>
  </tbody>
</table>


