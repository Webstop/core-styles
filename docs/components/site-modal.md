---
layout: docs
title: Site Modal
description: A modal available site-wide for AJAX content.
group: components
toc: true
---

The `site-model` is included on every page when you used the code found on the [site layout](/docs/layout/site/) page.

## Basic Example

When you set the `data-target` of a modal trigger to `#site-modal`, then you are specifing you want to use the site wide 
modal which enables remote content loading on the modal. 
Use the `data-load` attribute to load content using AJAX, or the `data-content` attribute to load content from the DOM. 
You should also include the `data-title` to set the text for the title of the modal.

{% capture example %}
{% include examples/layout/_site-modal-example.html %}
{% endcapture %}
{% include example.html content=example %}



## Options

The Site Modal inherits all the abilities of a standard modal, and is extended with the following options.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Options</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="text-nowrap">data-title</code></td>
      <td>Attribute used to set the title of the modal.</td>
    </tr>
    <tr>
      <td><code class="text-nowrap">data-load</code></td>
      <td>
        Attribute specifies the URL of the content you want AJAX'd into the modal body. The AJAX request should return 
        the HTML content to display inside the moda. Alternatively, you can use the `data-content` attribute instead of 
        `data-load`.
      </td>
    </tr>
    <tr>
      <td><code class="text-nowrap">data-content</code></td>
      <td>Alternative to `data-load`, specify the DOM node containing the HTML content to place in the modal body.</td>
    </tr>
    <tr>
      <td><code class="text-nowrap">data-footer="false"</code></td>
      <td>When set to `false` will hide the modal footer (which contains a close button).</td>
    </tr>
  </tbody>
</table>

**Note:** _if both `data-content` & `data-load` are present, the modal will first show the content from `data-content` and 
replace it once the AJAX request pulls the HTML from the URL specified in the `data-load` tag._

---


<div class="site-modal modal fade" id="site-modal" tabindex="-1" role="dialog" aria-labelledby="site-modal-title" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="site-modal-content modal-content">
      <div class="modal-header">
        <h4 class="site-modal-title modal-title" id="site-modal-title"></h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="site-modal-body modal-body" id="site-modal-body"></div>
      <div class="site-modal-footer modal-footer" id="site-modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
