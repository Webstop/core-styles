---
layout: docs
title: Front-End Components
description: The component pattern is the basis of our front-end framework. 
group: guide
toc: true
---

The front-end component is a powerful design pattern for building 
front-end objects. The component pattern adds a level of reliability 
and confidence in your stylesheets you wouldn't have otherwise.

Front-End Components Are:

- portable
- reliable
- extensible
- reusable
- self-contained

## Anatomy of a Front-End Component

There are three basic parts of a component the name (namespace), 
modifier classes, and attributes. As illustrated below.

{% highlight html %}
{% include examples/guide/_component-anatomy-example.html %}
{% endhighlight %}

The component's name should always be the first CSS class listed 
in the class attribute, followed by any modifier classes.

### Name, Namespace, & Root Element

Each component should start with a single HTML tag (usually a 
`div`) that wraps the whole component. This acts as the root 
node of the component and every other part of the component is 
housed inside it. The component root always has a class name, 
unusually one or two words, that defines the component's 
namespace. 

The component name is the unique name of the component; it 
is _important_ you don't give two components the same name. 

The component name also acts as a namespace for all modifier classes 
and attributes of the component.

Consider the Price component.

{% capture example %}
{% include examples/prices/_price-dollar-example.html %}
{% endcapture %}
{% include example.html content=example %}

##### Naming Order

Notice how the component name `price` is the _first_ thing listed in the 
root element's class attribute, followed by the `price-big-dollars`, 
modifier class, this order is important for maintaining a clear understanding 
of a component. If the component's root element contained other 
classes, for example the responsive utility classes `d-none` 
and `d-sm-block`, then those would come after the component 
specific classes for name and modifier classes. 

For example:

{% highlight html %}
<p class="price price-big-dollars d-none d-sm-block"></p>
{% endhighlight %}


### Attributes

Observe how every attribute name begins with the component 
name plus a dash. Thus, what we might have called the 
`dollar-sign` attribute is actually expressed as `price-dollar-sign`. 
By strictly adhering to the namespacing of all attributes 
and modifier classes we are able to apply styling to a component 
with absolute confidence that no other component or portion 
of our website will be affected. This makes our design system 
very reliable! _I can't overstate what a benefit adhering to 
the namespacing approach!_

Notice that every element in our price component example has an 
attribute name class, even those we didn't apply styles to and 
don't intend to. At times this may seem like a lot of extra and 
unnecessary code, but there is a hidden power and flexibility 
to doing this this way! 

One of the obvious ways it helps to place attributes on all 
elements is when it comes to website theming. For example, the 
`price-prefix` class, it might be that we don't anticipate 
needing any additional styling to this element, what if we had 
simply left off the class? What happens when we get a 
retailer who insists the prefix area must be italic and dark 
green, but the rest of our component is to remain as 
originally designed?

In our retailer's theme we'd probably get some CSS that looks 
something like this:

{% highlight css %}
.price > span:first-child {
  font-style: italic;
}
{% endhighlight %}

At first blush this probably seems like a practical solution, 
but a whole host of issues can arise from it. What if in some 
contexts there is no prefix, so the designer left off that 
element -- whatever comes next would get the italics, maybe 
the dollar sign or the cents, who knows. 

To over come this issue you'd probably have to write 
something like this: 

{% highlight css %}
.price > span {
  font-style: italic;
}
.price-overlay,
.price-dollar-sign,
.price-dollars,
.price-cents,
.price-cent-sign,
.price-suffix,
.price-suffix-icon {
  font-style: normal;
}
{% endhighlight %}

Now what seemed simple is starting to get complicated. How will 
this new solution react if the same thinking that left the 
attribute name off the prefix also left it off a few other 
elements, like maybe the dollar sign or the cent sign. We'd 
have to start getting pretty exotic with our selectors to 
catch it. Also, consider what happens if someone decided to 
use a different HTML tag than the `span` tag? 

Now consider how being able to do the following is very simple, 
reliable, and robust.

{% highlight css %}
.price-prefix {
  font-style: italic;
}
{% endhighlight %}

You can write this in your retailer theme and have complete 
confidence it's not going to have any untended consequences. 

Plus, you won't see complicated & fragile CSS selectors like these gems 
lifted from the Tops website:

{% highlight css %}
.circular-nav-pages-right .pagination>li>a, .circular-nav-pages-left .pagination>li>a {
     padding: 3px 7px;
}
.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:focus, .navbar-inverse .navbar-nav>.active>a:hover {
  color: #fff;
  background-color: #d31145;
  background: #d31145;
}
{% endhighlight %}

In a well designed component based design system you'll never 
see CSS selectors that are deeply nested, or use anything other 
than a class name. If your selector needs more than two levels, 
that's a sign your component probably has a flaw in it's design. 
_You should never use actual tag names or id attributes for 
CSS selectors!_

### Modifier Classes 

Modifier classes allow you to enhance the default characteristics 
of the component or extend it with a subclass. 

Modifier classes are _usually_ placed on the component's root element 
directly proceeding the component's name class. The one exception to 
this is when you're building a modifier that only affects one item in 
a list of items, and you need to specify which item to apply the effect 
to.

Modifier classes can come in many different varieties. 

Example Modifier classes:

- Size classes like `name-sm` or `name-lg`
- Visual effects like `name-shadow`, `name-stripped`, or `name-bordered`
- Colors like `name-primary`, `name-warning`, or `name-danger`

Note: _in the examples above the `name` portion would be replaced by 
the name of your component (e.g. `price-sm`, `price-lg`)._

These are just a few examples so you can get an idea of how modifier 
classes work.

#### Subclasses

A special kind of modifier class is the subclass. Those familiar with 
Object Oriented Programming (OOP) ought to recognize the term subclass. 
We are assuming you are familiar with the concept, so we won't be going 
into a detailed description here. However, it's important to understand 
how subclasses are implemented in our design system.

Consider the following example:

{% highlight html %}
<div class="circular-item circular-item-standard"> ... </div>
<div class="circular-item circular-item-standard-promotion"> ... </div>
<div class="circular-item circular-item-standard-coupon"> ... </div>
{% endhighlight %}

Here we have three `circular-item` components. Each one shares some 
common styling, they are all cards on the grid, with a slight shadow, 
and padding at the bottom for an absolute positioned button row, 
rounded corners, a `1px` border, & etc. They all receive this styling 
by having the root `circular-item` class. 

While they are similar in many ways, they also have some distinct 
differences handled by their subclass. For example, of these three 
items only the `circular-item-standard` has a `circular-item-heading` 
`circular-item-details` attributes. Also the 
`circular-item-standard-promotion` is the only one with a square image 
instead of the shorter rectangle images the other two have. By 
subclassing we are able to apply styles common to all `circular-item` 
components and unique styles for each subclass. 

## Components within Components

The whole point of components is to create discrete, reusable, parts. 
We can use simple components to build more complex components. This 
means we have a bunch of very simple objects that are included within 
more complex objects. 

An easy example to understand is the button object. The button component 
looks something like this:

{% capture example %}
<button type="submit" class="btn btn-primary">
  Add to Shopping List
</button>
{% endcapture %}
{% include example.html content=example %}

Now look at our `circular-item` component we want a shopping list form 
at the bottom of each component, so we use a `btn` component.


{% highlight html %}
<div class="circular-item circular-item-standard">
  <div class="circular-item-heading">Wow!</div>
  <div class="circular-item-title">Some Awesome Deal!</div>
 ... 
   <button type="submit" class="btn btn-primary">
     Add to Shopping List
   </button>
 </div>
{% endhighlight %}

When you take an even closer look you'll see the 
`circular-item circular-item-standard` component contains several 
more basic components:

- `price`
- `icon`
- `btn`
- `shopping-list-item`

{% capture example %}
{% include examples/circular-items/_circular-item-standard-example.html %}
{% endcapture %}
{% include example.html content=example %}

### Multi-Component Objects

If you look at the example above you'll notice the `circular-item`
component also has a `card` component on the same element. In 
case it should be clear that `card` is a less specific and 
more generic component, and the `circular-item` is a more specific 
and less composable object. 


If you look at the example above you'll notice the `circular-item`
component also has a `card` component on the same element. We list 
the `circular-item` component and it's modifiers first because it 
is the more specific component and the `card` component afterwards 
because it is more generic. 



When two component are defined on the same HTML element, list the 
more specific component and it's modifiers first and the more 
generic second. A good rule of thumb for deciding which is the more 
specific and which is the more generic, ask yourself this "can I 
add the CSS rule sets for object A and place it in object B 
and still call it an object B?" and then ask the reverse and see 
which holds more true.

For example:

A. Can I add the CSS rule sets for `circular-item` and place it in 
`card` and still call it a `card`?

_This wouldn't workout very well, it wouldn't make sense to include 
a sale item's data, and add to shopping list button and etc in all 
the places we use a card._

vs.

B. Can I add the CSS rule sets for `card` and place it in 
`circular-item` and still call it a `circular-item`?

_This would work just fine, there probably are none (or very few) 
places we would want a circular item without it having a card 
layout._

Using this little test it should be clear the preferred way to list 
our classes is as follows:

{% highlight html %}
<div class="circular-item circular-item-standard card card-standard"> ... </div>
{% endhighlight %}

## Conclusions

The component design pattern is:

- **Reliable**: by namespacing the component, it's attributes, and modifiers 
  you can have complete confidence your styles won't inadvertently 
  affect some other part of the website.
- **Reusable**: a component can be used many times on the same page
- **Portable**: a components are self-contained and able to be 
  dropped in anywhere
- **Extensible**: using modifier classes and subclasses we can build 
  a variety of component variations
