---
layout: docs
title: Tag Search
description: Search for and assign tags in a web form.
group: components
toc: true
source: Webstop
---

## Tag Search

The Tag Search component is a convent way to assign tags in a web form. 

When assigning tags, it is useful if the same tags get reused, and things like typos 
or similarly names tags are avoided. This is where the Tag Search component comes into 
play. It uses AJAX to search Webstop's tag API. 

### Example

{% capture example %}
<form>
  <div class="form-group">
    <label for="tag-search-1">Tag Search</label>
    <input type="text" class="form-control" id="tag-search-1" data-tag-search data-tag-search-context="aye_tags" data-tag-search-target="#tag-search-1-target" data-tag-search-display="#tag-search-1-display" data-tag-search-results="#tag-search-1-results" aria-describedby="tag-search-1-help">
    <small id="tag-search-1-help" class="form-text text-muted">Search for the tags you'd like to add in the form above.</small>
  </div>
  <div id="tag-search-1-results"></div>
  <div class="form-group">
    <label for="tag-search-1-target">Tags</label>
    <div id="tag-search-1-display" class="tag-group"></div>
    <input type="text" class="form-control" id="tag-search-1-target" value="foo" aria-describedby="tag-search-1-target-help">
    <small id="tag-search-1-target-help" class="form-text text-muted">Normally this would be a hidden form field. We are displaying it here so you can see what happens behind the scenes.</small>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %} 

<!--
You can have multiple forms on the same page and they will work independently of each other, as the example below indicates.

{% capture example %}
<form>
  <div class="form-group">
    <label for="tag-search-1">Tag Search</label>
    <input type="text" class="form-control" id="tag-search-1" data-tag-search data-tag-search-context="aye_tags" data-tag-search-target="#tag-search-2-target" data-tag-search-display="#tag-search-2-display" data-tag-search-results="#tag-search-2-results" aria-describedby="tag-search-2-help">
    <small id="tag-search-2-help" class="form-text text-muted">Search for the tags you'd like to add in the form above.</small>
  </div>
  <div id="tag-search-2-results"></div>
  <div class="form-group">
    <label for="tag-search-2-target">Tags</label>
    <div id="tag-search-2-display" class="tag-group"></div>
    <input type="text" class="form-control" id="tag-search-2-target" value="foo" aria-describedby="tag-search-target-2-help">
    <small id="tag-search-target-2-help" class="form-text text-muted">Normally this would be a hidden form field. We are displaying it here so you can see what happens behind the scenes.</small>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

-->

Notice how the `foo` tag is displayed on page load by reading the values from the target form field.
This allows us to use this component to edit records with pre-existing tags.

#### To use search tags you need the following HTML elements:

1. **A tag search field.** A text field searches for tags can be performed in. 
2. **A tag results element.** Where the tag search results are displayed. Usually right under the search field.
3. **A tag display element.** Where the selected tags are visually displayed. It should have the class <code class="text-nowrap">tag-group</code>.
4. **A tag target field.** The form field the tags are placed into. Usually a hidden form field.


## Attributes of the Search Field

The following attributes are required. All attributes have the namespace `data-tag-search`.

<!--
data-tag-search 
data-tag-search-context="aye_tags" 
data-tag-search-target="#tag-search-2-target" 
data-tag-search-display="#tag-search-2-display" 
data-tag-search-results="#tag-search-2-results" 
-->

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Options</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="text-nowrap">data-tag-search</code></td>
      <td>The presence of this attribute indicates typing in this form field should trigger an AJAX call to the tag search API.</td>
    </tr>
    <tr>
      <td><code class="text-nowrap">id</code></td>
      <td>Unique identifier for the search form field.</td>
    </tr>
    <tr>
     <td><code class="text-nowrap">data-tag-search-context</code></td>
     <td>
       Attribute specifies the context you want to search within. It's like a category of tags. At the time of this 
       writing the only valid value is <code>aye_tags</code>.
     </td>
   </tr>
    <tr>
      <td><code class="text-nowrap">data-tag-search-target</code></td>
      <td>
        Attribute specifies the DOM node of the form field you want to place selected tags into. Uses standard jQuery 
        selectors, usually targets an id attribute (e.g. <code class="text-nowrap">data-tag-search-target="#tag-search-target"</code>). This 
        should reference a hidden form field (e.g. <code class="text-nowrap">&lt;input type="hidden" id="tag-search-target"&gt;</code>).
      </td>
    </tr>
    <tr>
      <td><code class="text-nowrap">data-tag-search-results</code></td>
      <td>
        Attribute specifies the DOM node of the element you want to place search results into. Uses standard jQuery 
        selectors, usually targets an id attribute (e.g. <code class="text-nowrap">data-tag-search-results="#tag-search-results"</code>). 
        The element it references is usually placed right under the search field (e.g. <code class="text-nowrap">&lt;div id="tag-search-results"&gt;&lt;/div&gt;</code>).
      </td>
    </tr>
    <tr>
      <td><code class="text-nowrap">data-tag-search-display</code></td>
      <td>
        Attribute specifies the DOM node of the element you want to display selected tags in. Uses standard jQuery 
        selectors, usually targets an id attribute 
        (e.g. <code class="text-nowrap">data-tag-search-display="#tag-search-display"</code>). 
        The element it references is usually placed right under the search results element 
        (e.g. <code class="text-nowrap">&lt;div class="tag-group" id="tag-search-display"&gt;&lt;/div&gt;</code>). 
        The element it references should contain the CSS class <code class="text-nowrap">tag-group</code>.
      </td>
    </tr>
  </tbody>
</table>

The search field should look similar to the following:

```html
<input type="text" class="form-control" 
  id="tag-search"
  data-tag-search 
  data-tag-search-context="aye_tags" 
  data-tag-search-target="#tag-search-target" 
  data-tag-search-display="#tag-search-display" 
  data-tag-search-results="#tag-search-results"
>
```
