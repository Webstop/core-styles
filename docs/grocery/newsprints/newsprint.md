---
layout: docs
title: Conventions
group: getting-started
source: Webstop
---


## Component Naming Conventions

The base component will be enclosed in a class of it's name. 
E.G. a coupon will be inclosed in an element (perhaps a `div` tag) with the `.coupon` class. 

The class names of the component will be prefixed by the component's name. 
E.G. the class for a coupon's title will be `.coupon-title`.

The class names for a single item will be singular and when we have a collection of items the wrapper class will be the plural version of the components name.

### Example

```html
<div class="coupons">
  <div class="coupon">
    <h4 class="coupon-title">some title</h4>
    ...
  </div>
  <div class="coupon">
    <h4 class="coupon-title">some title</h4>
    ...
  </div>
  <div class="coupon">
    <h4 class="coupon-title">some title</h4>
    ...
  </div>
  ...
</div>
```
