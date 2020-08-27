---
layout: docs
title: Checkbox Selector
description: Enables Select All and Unselect All for checkbox groups.
group: components
toc: true
source: Webstop
---

When you have a large group of checkboxes it is helpful to be able to have a Select All or Unselect All button that will 
quickly change the state of all grouped checkboxes. The Checkbox Selector component allows you to place checkboxes into 
groups and provide a Select/Unselect All button for each group.

The button/link will be in the `select` state if there are more unchecked checkboxes than checked, and if there are not 
more unchecked than checked it will be in the `unselect` state. The component will monitor the state of each checkbox 
and change the state if the balance of checked and unchecked changes. Try checking and unchecking checkboxes in the 
example below to get a feel for how this works.


## Button Example

To start place the `data-check-selector-for` attribute on the element you'd like to act as your select all trigger. 
In our example we have placed it in a button, but it could be just about anything really. The `data-check-selector-for` 
attribute needs have the name of the group set as it's value, in this case the group is `pets`. Now place the 
`data-check-selector-group` attribute on each checkbox input you'd like affected by the selector button, be sure to give 
it the same value you used in the `data-check-selector-for` attribute. In this case `pets`.  

{% capture example %}
<button data-check-selector-for="pets" data-check-selector-state="select" class="is-select btn btn-outline-primary">
  <span class="check-select-text">Select All</span>
  <span class="check-unselect-text">Unselect All</span>
</button>
<div class="form-check">
  <input data-check-selector-group="pets" class="form-check-input" type="checkbox" value="" id="dog">
  <label class="form-check-label" for="dog">
    Dog
  </label>
</div>
<div class="form-check">
  <input data-check-selector-group="pets" class="form-check-input" type="checkbox" value="" id="cat">
  <label class="form-check-label" for="cat">
    Cat
  </label>
</div>
<div class="form-check">
  <input data-check-selector-group="pets" class="form-check-input" type="checkbox" value="" id="fish">
  <label class="form-check-label" for="fish">
    Fish
  </label>
</div>
{% endcapture %}
{% include example.html content=example %}


## Link Example

By having named groups we are able to have multiple sets of checkbox selector groups on the same page that affect 
different sets of checkboxes. Notice the example below uses the `genders` group while the example above uses the 
`pets` group. Also notice we choose the make the selector trigger an anchor tag.


{% capture example %}
<div class="form-check">
  <input data-check-selector-group="genders" class="form-check-input" type="checkbox" value="" id="male" checked>
  <label class="form-check-label" for="male">
    Male
  </label>
</div>
<div class="form-check">
  <input data-check-selector-group="genders" class="form-check-input" type="checkbox" value="" id="female" checked>
  <label class="form-check-label" for="female">
    Female
  </label>
</div>
<div class="form-check">
  <input data-check-selector-group="genders" class="form-check-input" type="checkbox" value="" id="non-binary" checked>
  <label class="form-check-label" for="non-binary">
    Non-Binary
  </label>
</div>
<div class="form-check">
  <input data-check-selector-group="genders" class="form-check-input" type="checkbox" value="" id="binary">
  <label class="form-check-label" for="binary">
    Binary
  </label>
</div>
<div class="form-check">
  <input data-check-selector-group="genders" class="form-check-input" type="checkbox" value="" id="null">
  <label class="form-check-label" for="null">
    Null
  </label>
</div>
<div class="form-check">
  <input data-check-selector-group="genders" class="form-check-input" type="checkbox" value="" id="non-null" checked>
  <label class="form-check-label" for="non-null">
    Non-Null Non-Binary
  </label>
</div>
<a href="#" data-check-selector-for="genders" data-check-selector-state="select" class="is-select">
  <span class="check-select-text">Select All Genders</span>
  <span class="check-unselect-text">Unselect All Genders</span>
</a>
{% endcapture %}
{% include example.html content=example %}
