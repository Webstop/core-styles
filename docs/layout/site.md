---
layout: docs
title: Site Structure
description: The basic template for laying out a site's structure.
group: layout
toc: true
---

## Basic Example

The `site` class resides on the root element of a website. It should sit inside the body of  

{% capture example %}
{% include examples/layout/_site-basic-example.html %}
{% endcapture %}
{% include example.html content=example %}



## Options



We can customize our site by adding a subclass to our site object. 


<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Options</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="text-nowrap">.site-fluid</code></td>
      <td>For a responsive website utilizing 100% of the brower’s width. Use this in place of Bootstrap's `container-fluid` class.</td>
    </tr>
    <tr>
      <td><code class="text-nowrap">.site-fixed</code></td>
      <td>For a website constrained to a maximum 1024 pixels wide. Use this in place of Bootstrap's `container` class.</td>
    </tr>
    <tr>
      <td><code class="text-nowrap">.site-content-only</code></td>
      <td>Hides the header, footer, and site navigation. Useful for hosting the site in an iframe or for AJAX requests.</td>
    </tr>
    <tr>
      <td><code class="text-nowrap">.site-debug-on</code></td>
      <td>This shows the debug section of our template (below the footer). Useful for fixing bugs.</td>
    </tr>
  </tbody>
</table>




### Options Examples

Here we find examples of each of our options. Notice they are applied to the same root element as the 
`site` class. 

{% capture example %}
{% include examples/layout/_site-sub-classes-example.html %}
{% endcapture %}
{% include example.html content=example %}

