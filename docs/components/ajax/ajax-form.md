---
layout: docs
title: Ajax Form
description: An easy way to submit form contents & load the response into a section of the page.
group: components
toc: true
source: Webstop
---

{% include environment_based_variables.html %}

## Examples

Here are a couple of use examples of the AJAX Form feature.

### Basic Example

This example contains the minimum attributes need. The form contains the `data-ajax-form` attribute 
which triggers the form to submit via ajax instead of a web page reload. The `action` attribute 
specifies the URL to pull the content from, the content is expected to be in HTML format. 

{% capture example %}
{% include examples/ajax-form/_ajax-form-example.html %}
{% endcapture %}
{% include example.html content=example %}

### Custom Target Example

In the following example we enable some of the optional attributes, including `data-target` and 
`data-power-bar`. By default the ajax will replace the form with the ajax content, in this example 
we select a different target using the `data-target` attribute, it accepts standard jQuery selectors. 
The `data-power-bar` attribute triggers a reload of the Shopping List Power Bar after the ajax content 
is returned.

{% capture example %}
{% include examples/ajax-form/_ajax-form-full-example.html %}
{% endcapture %}
{% include example.html content=example %}

### Load on Callback Example

In the following example we enable perform an ajax load on an additional portions of the page based on after we receive 
a response back from the ajax-form request. We use the attributes `data-load-on-callback` and
`data-target-on-callback` to specify what content we want to load and where we want to load it. The attributes can 
contain a single value or a comma seperated array. 

{% capture example %}
<form data-ajax-form action="http://localhost:4567/alert_success" 
  data-load-on-callback="http://localhost:4567/alert_success,http://localhost:4567/alert_error"
  data-target-on-callback="#callback-target-1,#callback-target-2">
  <div class="form-group">
    <label for="title-example">Title</label>
    <input type="text" class="form-control" name="title-example" id="title-example" placeholder="Title">
  </div>
  <button class="btn btn-primary" type="submit">
    Save Title
  </button>
</form>
<div id="callback-target-1" class="mt-4">
  <div class="alert alert-info">Callback 1 Content goes here.</div>
</div>
<div id="callback-target-2" class="mt-4">
  <div class="alert alert-info">Callback 2 Content goes here.</div>
</div>
{% endcapture %}
{% include example.html content=example %}

## Attributes

The `data-ajax-form` & `action` attributes are required. The rest are optional.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Options</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="text-nowrap">data-ajax-form</code></td>
      <td>The presence of this attribute indicates submitting on this form should trigger an AJAX load.</td>
    </tr>
    <tr>
      <td><code class="text-nowrap">action</code></td>
      <td>
        Attribute specifies the URL of the content you want AJAX'd. The AJAX request should return 
        HTML content to display inside the target element. 
      </td>
    </tr>
    <tr>
      <td><code class="text-nowrap">data-target</code></td>
      <td>
        The DOM node to load the content into. Uses standard jQuery selectors, usually targets an id attribute 
        (e.g. <code class="text-nowrap">#some-target</code>). Optional, if the <code class="text-nowrap">data-target</code> attribute isn't 
        present the content will replace the ajax form.
      </td>
    </tr>
    <tr>
      <td><code class="text-nowrap">data-power-bar</code></td>
      <td>
        When present, completing the ajax call triggers a reload of the Shopping List Power Bar.
      </td>
    </tr>
    <tr>
      <td><code class="text-nowrap">data-load-on-callback</code></td>
      <td>
        Once the initial AJAX request completes, additional AJAX requests listed in this attribute will trigger. Accepts 
        one URL or a comma separated list of URLs. The AJAX request should return 
        HTML content to display inside the target element. Target elements are specified using the 
        <code class="text-nowrap">data-target-on-callback</code> attribute.
      </td>
    </tr>
    <tr>
      <td><code class="text-nowrap">data-target-on-callback</code></td>
      <td>
        The DOM node to load the content into. Uses standard jQuery selectors, usually targets an id attribute 
        (e.g. <code class="text-nowrap">#some-target</code>). Optional, if the <code class="text-nowrap">data-target</code> attribute isn't 
        present the content will replace the ajax form.

        Once the initial AJAX request completes, additional AJAX requests listed in this attribute will trigger. Accepts 
        one URL or a comma separated list of URLs. The AJAX request should return 
        HTML content to display inside the target element. Target elements are specified using the 
        <code>data-target-on-callback</code> attribute.
      </td>
    </tr>
  </tbody>
</table>
