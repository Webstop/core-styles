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

### Load on Callback Example

In the following example we enable perform an ajax load on additional portions of the page based on after we receive
a response back from the initial ajax-load request. We use the attributes `data-load-on-callback` and
`data-target-on-callback` to specify what content we want to load and where we want to load it. The attributes can
contain a single value or a comma separated array.

{% capture example %}
<button data-ajax-load data-load="http://localhost:4567/alert_success" class="btn btn-primary"
  data-load-on-callback="http://localhost:4567/alert_success,http://localhost:4567/alert_error"
  data-target-on-callback="#callback-target-1,#callback-target-2">
    Click to Load
</button>
<div id="callback-target-1" class="mt-4">
  <div class="alert alert-info">Callback 1 Content goes here.</div>
</div>
<div id="callback-target-2" class="mt-4">
  <div class="alert alert-info">Callback 2 Content goes here.</div>
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
    <tr>
      <td><code class="text-nowrap">data-disable-loading-indicator</code></td>
      <td>
        When the button (or other element) is clicked it becomes disabled and the text in the is replaced with 
        <code class="text-nowrap">Loading...</code>. If the 
        <code class="text-nowrap">data-disable-loading-indicator</code> attribute is present this functionality is 
        disabled and the element clicked remains the same as it did before it was clicked.
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
        Once the initial AJAX request completes, additional AJAX requests listed in the 
        <code class="text-nowrap">data-load-on-callback</code> attribute will trigger.  The 
        <code class="text-nowrap">data-target-on-callback</code> attribute acts like the <code>action</code> attribute 
        in that it specifies the DOM node to load the content into. Uses standard jQuery selectors, usually targets an 
        id attribute  (e.g. <code class="text-nowrap">#some-target</code>). Accepts one selector or a comma separated 
        list of selectors.
      </td>
    </tr>
  </tbody>
</table>


