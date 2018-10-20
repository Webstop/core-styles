---
layout: docs
title: Standard Promotion Circular Item
description: Individual image items inside the digital circular. 
group: grocery
toc: true
---

*The Standard Promotion replaces the legacy SIMG item.*

In marketing, promotion refers to any type of marketing communication used to inform or persuade target audiences of the relative merits of a product, service, brand or issue. The aim of promotion is to increase awareness, create interest, generate sales or create brand loyalty.

## Examples

The basic circular image item adds promotional content beyond the standard sale items.

### Standard Promotion Circular Item 

Tower format digital circular item with a 2k square image. The format 
is designed to sit nicely next to our 
[Standard Circular Item](/docs/grocery/circulars/standard-circular-item) 
in a row of similar sized items. 

{% capture example %}
{% include examples/circular-items/_circular-item-standard-promotion-example.html %}
{% endcapture %}
{% include example.html content=example %}

#### Button Text

There is an upper limit of about 18 character to the amount of text you can place in the button 
before the text overflows the button at the smallest size. Because we are using proportional fonts 
the actual number of characters may vary based on which letters are used and if the site is using a 
custom font or custom font size. 

##### Button Examples

The following button examples are forced to the minimum size (`223px`) used in a 
Tower (2k) Square Image Circular Item.

<div class="row">
  <div class="col text-center">
    <h5>10 Characters</h5>
    <button class="circular-image-item-button btn btn-primary mb-2" style="width: 223px;">
      1234567890 <i class="icon-arrow-right"></i>
    </button>
    <p>Short text like the 10 character example will nicely center in the button at any size.</p>
  </div>
  <div class="col text-center">
    <h5>18 Characters</h5>
    <button class="circular-image-item-button btn btn-primary mb-2" style="width: 223px;">
      123456789012345678 <i class="icon-arrow-right"></i>
    </button>
    <p>18 characters is about as big as we can get without the button design looking broken.</p>
  </div>
  <div class="col text-center">
    <h5>20 Characters</h5>
    <button class="circular-image-item-button btn btn-primary mb-2" style="width: 223px;">
      12345678901234567890 <i class="icon-arrow-right"></i>
    </button>
    <p>At 20 characters the right arrow is uncomfortably close to the right side, it looks like a design mistake.</p>
   </div>
  <div class="col text-center">
    <h5>23 Characters</h5>
    <button class="circular-image-item-button btn btn-primary mb-2" style="width: 223px;">
      12345678901234567890123 <i class="icon-arrow-right"></i>
    </button>
    <p>23 characters pushes content off the edge of the button, which is hidden from view.</p>
  </div>
</div>

##### Button Title Suggestions

The following button examples are effective calls to action. They are forced to the minimum size 
(`223px`) used in a Tower (2k) Square Image Circular Item.

<button class="circular-image-item-button btn btn-primary mb-2" style="width: 223px;">
  Learn More! <i class="icon-arrow-right"></i>
</button>
<button class="circular-image-item-button btn btn-primary mb-2" style="width: 223px;">
  Click Here! <i class="icon-arrow-right"></i>
</button>
<button class="circular-image-item-button btn btn-primary mb-2" style="width: 223px;">
  Enter Contest! <i class="icon-arrow-right"></i>
</button>
<button class="circular-image-item-button btn btn-primary mb-2" style="width: 223px;">
  Subscribe! <i class="icon-arrow-right"></i>
</button>
<button class="circular-image-item-button btn btn-primary mb-2" style="width: 223px;">
  Newsletter Sign-Up! <i class="icon-arrow-right"></i>
</button>
<button class="circular-image-item-button btn btn-primary mb-2" style="width: 223px;">
  Enter To Win! <i class="icon-arrow-right"></i>
</button>
<button class="circular-image-item-button btn btn-primary mb-2" style="width: 223px;">
  Watch Video! <i class="icon-arrow-right"></i>
</button>

#### Grid of Standard Promotion Circular Items

<div class="bd-example">
  <div class="row">
    {% include examples/circular-items/_circular-item-standard-promotion-example.html %}
    {% include examples/circular-items/_circular-item-standard-promotion-example.html %}
    {% include examples/circular-items/_circular-item-standard-promotion-example.html %}
    {% include examples/circular-items/_circular-item-standard-promotion-example.html %}
    {% include examples/circular-items/_circular-item-standard-promotion-example.html %}
    {% include examples/circular-items/_circular-item-standard-promotion-example.html %}
  </div>
</div>

---

### Mixed Items

<div class="bd-example">
  <div class="row">
    {% include examples/circular-items/_circular-item-standard-promotion-example.html %}
    {% include examples/circular-items/_circular-item-standard-example.html %}
    {% include examples/circular-items/_circular-item-standard-example.html %}
    {% include examples/circular-items/_circular-item-standard-example.html %}
    {% include examples/circular-items/_circular-item-standard-example.html %}
    {% include examples/circular-items/_circular-item-standard-promotion-example.html %}
    {% include examples/circular-items/_circular-item-thumbnail-example.html %}
    {% include examples/circular-items/_circular-item-thumbnail-example.html %}
    {% include examples/circular-items/_circular-item-thumbnail-example.html %}
    {% include examples/circular-items/_circular-item-thumbnail-example.html %}
    {% include examples/circular-items/_circular-item-standard-promotion-example.html %}
  </div>
</div>
