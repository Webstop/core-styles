---
layout: docs
title: Form Toggles
description: Checkboxes, radio buttons, or select lists can display or hide other portions of the form.
group: components
toc: true
source: Webstop
---

Section Toggles reveal or hide additional form content or information based on selections made within the form. It does 
so by adding or removing the Bootstrap class `d-none`. 
Section Toggles are organized into three basic types: [Checkbox Toggle](#checkbox-toggle), 
[Radio Button Toggle](#radio-button-toggle), and [Select List Toggle](#select-list-toggle).
  
## Checkbox Toggle

Selecting a checkbox will reveal or hide content, including additional form elements. 

Checkbox Toggle consists of two parts: 

1. **Trigger**: The checkbox which controls if the content section is displayed or hidden.
2. **Content**: The content section which is displayed or hidden based on the status of the checkbox.

#### Checkbox Trigger Attributes

| Name                          | Status   | Description |
|-------------------------------|----------|-------------|
| `data-form-toggle-trigger`    | Required | Place this data attribute on a checkbox to establish a listener which watch for changes in state. |
| `name`                        | Required | The unique identifier that distinguishes this checkbox from other checkboxes on the page. |

#### Content Attributes

| Name                  | Status   | Description |
|-----------------------|----------|-------------|
| `data-form-toggle`    | Required | Place this data attribute on a piece of content you'd like to toggle. It's value must contain the `id` of the checkbox that will toggle it's content. |


### Unchecked Example

To enable this functionality, the checkbox input tag has the `checkbox-toggle-source` CSS class name and a unique `name` attribute. 
Any html elements with a `data-form-toggle` attribute containing the `name` value of the checkbox will toggle between displaying and 
hiding when the checkbox is selected and unselected. Place a `d-none` class on the element with the `data-form-toggle` attribute 
to hide the content by default, commonly done when the checkbox is unchecked on page load.

{% capture example %}
<div class="form-group form-check">
  <input class="form-check-input" data-form-toggle-trigger type="checkbox" value="1" 
    name="has-contact-us" id="has-contact-us">
  <label class="form-check-label" for="has-contact-us">Contact Us CRM</label>
</div>
<div class="form-group form-check d-none" data-form-toggle="has-contact-us">
  <label for="email-to">Send Emails To</label>
  <input class="form-control" type="text" name="email-to" id="email-to">
</div>
{% endcapture %}
{% include example.html content=example %}


### Checked Example

The content can also default to showing by omitting the `d-none` class on the element with the `data-form-toggle` attribute, 
useful for checkboxes that are already checked when the page is rendered.

{% capture example %}
<div class="form-group form-check">
  <input class="form-check-input" data-form-toggle-trigger type="checkbox" value="1" checked="checked" 
    name="has-custom-pages-cms" id="has-custom-pages-cms">
  <label class="form-check-label" for="has-custom-pages-cms">Custom Pages CMS</label>
</div>
<div class="form-group form-check" data-form-toggle="has-custom-pages-cms">
  <label for="cms-nav-label">Custom Pages Navigation Label</label>
  <input class="form-control" type="text" name="cms-nav-label" id="cms-nav-label">
</div>
{% endcapture %}
{% include example.html content=example %}

### Reverse Toggle Example

Most of the time you'll want the additional content displayed when the checkbox is checked and hidden when it's unchecked. Sometimes 
you'll want the opposite behavior. This is easy to control by the `d-none` class on the element with the `data-form-toggle` 
attribute.

{% capture example %}
<div class="form-group form-check">
  <input class="form-check-input" data-form-toggle-trigger type="checkbox" value="1" checked="checked" 
    name="same-address" id="same-address">
  <label class="form-check-label" for="same-address">Use Shipping Address for Billing Address</label>
</div>
<div class="form-group form-check d-none" data-form-toggle="same-address">
  <div class="form-group">
    <label for="address">Billing Address</label>
    <input type="text" class="form-control" id="address" >
  </div>
  <div class="form-row">
    <div class="form-group col-7">
      <label for="city">City</label>
      <input type="text" class="form-control" id="city">
    </div>
    <div class="form-group col-2">
      <label for="state">State</label>
      <input type="text" class="form-control" id="state">
    </div>
    <div class="form-group col-3">
      <label for="zip">Zip</label>
      <input type="text" class="form-control" id="zip">
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Toggle Multiple Elements Example

There are two basic ways to have multiple elements toggle. The first method is the place all of the items you'd like to toggle 
inside a wrapper and to toggle the wrapper. The first method can be seen in the Reverse Toggle Example above. The second 
method is to to place the `data-form-toggle` attribute on multiple elements as illustrated below.


{% capture example %}
<div class="form-group form-check">
  <input class="form-check-input" data-form-toggle-trigger type="checkbox" value="1" 
    name="has-contact-us-2" id="has-contact-us-2">
  <label class="form-check-label" for="has-contact-us-2">Contact Us CRM</label>
</div>
<div class="form-group form-check d-none" data-form-toggle="has-contact-us-2">
  <label for="email-to-2">Send Emails To</label>
  <input class="form-control" type="text" name="email-to-2" id="email-to-2">
</div>
<div class="form-group form-check d-none" data-form-toggle="has-contact-us-2">
  <label for="email-from-2">Emails Sent From</label>
  <input class="form-control" type="text" name="email-from-2" id="email-from-2">
</div>
{% endcapture %}
{% include example.html content=example %}

### Layout Example

An effective layout technique is to indent dependant sections under the checkbox. This makes the hierarchy is clear, and is a 
visual clue that the items under the checkbox are dependant on the choice made on the checkbox. A common approach to achieving 
this sort of indentation is to reach for Bootstrap's built-in 
[margin and padding utility classes](http://localhost:4000/docs/bootstrap/4.1/utilities/spacing), however none of the standard 
Bootstrap spacing classes line up neatly. However the same `form-check` class used to align the text in a standard Bootstrap 
checkbox element can be used to provide indentation. The example below shows a number of common use cases 
for indenting using the `form-check` class.  


{% capture example %}
<div class="form-group form-check">
  <input class="form-check-input" data-form-toggle-trigger type="checkbox" value="1" 
    name="has-circulars" id="has-circulars" checked>
  <label class="form-check-label" for="has-circulars">Enable Digital Circulars</label>
</div>

<!-- For text fields you can add a form-check class to the element with the form-group class. -->
<div class="form-group form-check" data-form-toggle="has-circulars">
  <label for="feature-title">Feature Title</label>
  <input class="form-control" type="text" name="feature-title" id="feature-title" aria-describedby="feature-title-help">
  <small class="form-text text-muted" id="feature-title-help">The name of the feature used in navigation elements. Defaults to `Weekly Ads`.</small>
</div>

<!-- For checkbox or radio button fields, you can add a form-check wrapper inside the element with the form-group & form-check classes. -->
<div class="form-group form-check" data-form-toggle="has-circulars" data-form-toggle-show-for="digital">
  <div class="form-check">
    <input name="login-button" type="hidden" value="0"><input class="form-check-input" type="checkbox" value="1" name="login-button" id="login-button">
    <label for="login-button">Login Button on Circular Items</label>
    <small id="login-button-help" class="form-text text-muted">When checked, a consumer who is not logged in will see a login button in the space the <code>Add to Shopping List</code> button usually occupies on circular items.</small>
  </div>
</div>

<!-- If you have several elements ot indent, you can choose to wrap them in one form-check element instead of individually applying the form-check class. -->
<div class="form-check" data-form-toggle="has-circulars">
  <div class="form-group">
    <label for="admin-title">Admin Title</label>
    <input class="form-control" type="text" name="admin-title" id="admin-title" aria-describedby="admin-title-help">
    <small class="form-text text-muted" id="admin-title-help">The name of the feature used on internal administration pages. Defaults to `Circulars`.</small>
  </div>
  <div class="form-group">
    <label for="third-party-title">3rd Party Admin Title</label>
    <input class="form-control" type="text" name="third-party-title" id="third-party-title" aria-describedby="third-party-title-help">
    <small class="form-text text-muted" id="third-party-title-help">The name of the feature used on 3rd party administration pages. Defaults to `Circulars`.</small>
  </div>
</div>

<!-- For select lists you can add a form-check class to the element with the form-group class. -->
<div class="form-group form-check" data-form-toggle="has-circulars">
  <label for="qty-1">Quantity</label>
  <select class="form-control" name="qty-1" id="qty-1" data-form-toggle-trigger aria-describedby="qty-1-help">
    <option value="0">None</option>
    <option value="1">One</option>
    <option value="2">Two</option>
  </select>
  <small class="form-text text-muted" id="qty-1-help">This is a select list example.</small>
</div>

<!-- For radio buttons you can add a wrapper div with the form-check class. -->
<div class="form-check" data-form-toggle="has-circulars">
  <p>Circulars</p>
  <div class="form-group form-check">
    <input type="radio" name="ad-type-1" id="ad-type-1-none" value="none" class="form-check-input">
    <label class="form-check-label" for="ad-type-1-none">No Circular</label>
  </div>
  <div class="form-group form-check">
    <input type="radio" name="ad-type-1" id="ad-type-1-pdf" value="pdf" class="form-check-input">
    <label class="form-check-label" for="ad-type-1-pdf">PDF Circular</label>
  </div>
  <div class="form-group form-check">
    <input type="radio" name="ad-type-1" id="ad-type-1-digital" value="digital" class="form-check-input">
    <label class="form-check-label" for="ad-type-1-digital">Digital Circular</label>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

## Radio Button & Select List Toggle

Selecting a radio will reveal or hide content, including additional form elements. It has all 
the features listed above plus a few more. 

The toggle on radio buttons and select lists work a little differently than checkboxes. Checkboxes are 
simple booleans, it's either checked or not, and there is only one form element to listen to. The the value of a checkbox 
element doesn't matter. Select lists and radio buttons are not simple booleans. They have multiple values to choose from, 
for a content toggle to be useful it needs to trigger based on which _value_ was selected.

Radio Button Toggles & Select List Toggles consist of two parts: 

1. **Trigger**: The radio button or select list which controls if the content section is displayed or hidden.
2. **Content**: The content section which is displayed or hidden based on the status of the radio button or select list.

#### Trigger Attributes

| Name                           | Status   | Description |
|--------------------------------|----------|-------------|
| `data-form-toggle-trigger`     | Required | Place this data attribute on a checkbox to establish a listener which watch for changes in state. |
| `name`                         | Required | The unique identifier that distinguishes this checkbox from other checkboxes on the page. |

#### Content Attributes

The following attributes are placed on the piece of content you'd like to toggle.

| Name                        | Status   | Description |
|-----------------------------|----------|-------------|
| `data-form-toggle`          | Required | The value must contain the `name` value of the radio buttons or select list that will toggle it's content.  |
| `data-form-toggle-show-for` | Required | The value must contain the `value` that will display the content, all non-listed values will hide the content. |
| `data-form-toggle-match`    | Optional | Accepts the values `contain`, or `exact`. When omitted or left blank it defaults to `contain`. When set to `exact` the value in `data-form-toggle-show-for` must be exactly the same as the `name` it is matching. When set to `contains` the value can be a comma separated list of names to match. |


### Radio Button Example

Remember to place the `data-form-toggle-trigger` on every radio button, even those who don't display extra content.

{% capture example %}
<div class="form-group form-check">
  <input type="radio" name="ad-type" id="ad-type-none" value="none" class="form-check-input" data-form-toggle-trigger>
  <label class="form-check-label" for="ad-type-none">No Circular</label>
</div>
<div class="form-group form-check">
  <input type="radio" name="ad-type" id="ad-type-pdf" value="pdf" class="form-check-input" data-form-toggle-trigger>
  <label class="form-check-label" for="ad-type-pdf">PDF Circular</label>
</div>
<div class="form-group form-check">
  <input type="radio" name="ad-type" id="ad-type-digital" value="digital" class="form-check-input" data-form-toggle-trigger>
  <label class="form-check-label" for="ad-type-digital">Digital Circular</label>
</div>
<div class="form-group form-check d-none" data-form-toggle="ad-type" data-form-toggle-show-for="digital">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="1" name="has-printable-ad" id="has-printable-ad">
    <label class="form-check-label" for="has-printable-ad">Upload Printable (PDF) Circulars</label>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}


### Select List Example

{% capture example %}
<div class="form-group">
  <label for="qty">Quantity</label>
  <select class="form-control" name="qty" id="qty" data-form-toggle-trigger>
    <option value="0">None</option>
    <option value="1">One</option>
    <option value="2">Two</option>
  </select>
</div>
<div class="form-group form-check d-none" data-form-toggle="qty" data-form-toggle-show-for="2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="1" name="shipping" id="shipping" checked>
    <label class="form-check-label" for="shipping">Ship to the Same Address</label>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}


### Multiple Triggers Example

Radio buttons and select lists enable a feature not available to checkboxes. You can display or hide content based on 
multiple values. To do this, use a coma separated list in the `data-form-toggle-show-for` attribute, and omit the 
`data-form-toggle-match` attribute.


This first example uses radio buttons and has a content section that is displayed for two options and hidden for the other two.

{% capture example %}
<div class="form-group form-check">
  <input type="radio" name="ad-type-2" id="ad-type-2-none" value="none" class="form-check-input" data-form-toggle-trigger>
  <label class="form-check-label" for="ad-type-2-none">No Circular</label>
</div>
<div class="form-group form-check">
  <input type="radio" name="ad-type-2" id="ad-type-2-audio" value="audio" class="form-check-input" data-form-toggle-trigger>
  <label class="form-check-label" for="ad-type-2-audio">Audio Circular</label>
</div>
<div class="form-group form-check">
  <input type="radio" name="ad-type-2" id="ad-type-2-pdf" value="pdf" class="form-check-input" data-form-toggle-trigger>
  <label class="form-check-label" for="ad-type-2-pdf">PDF Circular</label>
</div>
<div class="form-group form-check">
  <input type="radio" name="ad-type-2" id="ad-type-2-digital" value="digital" class="form-check-input" data-form-toggle-trigger>
  <label class="form-check-label" for="ad-type-2-digital">Digital Circular</label>
</div>
<div class="form-group form-check d-none" data-form-toggle="ad-type-2" data-form-toggle-show-for="digital, pdf">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="1" name="has-printable-ad-2" id="has-printable-ad-2">
    <label class="form-check-label" for="has-printable-ad-2">Upload Printable (PDF) Circulars</label>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

This second example uses a select list and has a content section that is displayed for two options and hidden for the other two.

{% capture example %}
<div class="form-group">
  <label for="qty-2">Quantity</label>
  <select class="form-control" name="qty-2" id="qty-2" data-form-toggle-trigger>
    <option value="alpha">alpha</option>
    <option value="alpha">beta</option>
    <option value="foo">foo</option>
    <option value="bar">bar</option>
  </select>
</div>
<div class="form-group form-check d-none" data-form-toggle="qty-2" data-form-toggle-show-for="foo, bar">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="1" name="foobar-2" id="foobar-2" checked>
    <label class="form-check-label" for="foobar-2">Enable Foobar</label>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

### Exact Match Example

Sometimes the value of one item is included in the value of other items. You can use `data-form-toggle-match="exact"` to 
ensure only the correct value triggers the toggle. 

In the following example a match using the default `contain` method would cause a match on `A`, `AAA`, and `AAA`. Using 
`data-form-toggle-match="exact"` we are able to match on only `AAA` as desired.

{% capture example %}
<div class="form-group">
  <label for="letter">Award Level</label>
  <select class="form-control" name="award" id="award" data-form-toggle-trigger>
    <option value=""></option>
    <option value="aaa">AAA</option>
    <option value="aa">AA</option>
    <option value="a">A</option>
    <option value="b">B</option>
  </select>
</div>
<div class="form-group form-check d-none" data-form-toggle="award" data-form-toggle-match="exact" data-form-toggle-show-for="aaa">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="1" name="top-award" id="top-award" checked>
    <label class="form-check-label" for="letter-a">Enable Top Award avatar icon</label>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

