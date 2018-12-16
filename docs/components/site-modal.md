---
layout: docs
title: Site Modal
description: A modal available site-wide for AJAX content.
group: components
toc: true
---

The `site-model` is included on every page when you used the code found on the [site layout](/docs/layout/site/) page.

## Example

When you set the `data-target` of a modal trigger to `#site-modal`, then you are indicating you want to use the site wide 
modal, which enables remote content loading via AJAX. The `data-load` attribute specifies the URL to pull the body 
content from, it is expected to be in HTML format. You should also include the `data-title` to set the text for the title of the modal.


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
        HTML content to display inside the modal. 
      </td>
    </tr>
    <tr>
      <td><code class="text-nowrap">data-footer</code></td>
      <td>
        By default the modal will display a footer with a close button. To hide the footer and it's content, include the 
        attribute <code class="text-nowrap">data-footer</code> set to <code class="text-nowrap">hide</code>
        (<code class="text-nowrap">data-footer="hide"</code>) on the trigger element.
      </td>
    </tr>
  </tbody>
</table>



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
