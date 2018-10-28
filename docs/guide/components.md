---
layout: docs
title: Front-End Components
description: The component pattern is the basis of our front-end framework. 
group: guide
toc: true
---

The front-end component is a powerful design pattern for building 
front-end objects.

- portable
- reliable
- extensible

## Anatomy of a Front-End Component

There are three basic parts of a component the name (namespace), sub-classes, 
and attributes. As illustrated below.

{% highlight html %}
{% include examples/guide/_component-anatomy-example.html %}
{% endhighlight %}

The components name should always be the first CSS class listed 
in the class attribute, followed by any subclasses.

### Name, Namespace, & Root Element

Each component should start with a single HTML tag (usually a 
`div`) that wraps the whole component. This acts as the root 
node of the component and every other part of the component is 
housed inside it. The component root always has a class name, 
unusually one or two words, that defines the component's 
namespace. 

The component name is the unique name of the component; it 
is _important_ you don't give two components the same name. 

The component name also acts as a namespace for all subclasses 
and attributes of the component.

Consider the Price component.

{% capture example %}
{% include examples/prices/_price-dollar-example.html %}
{% endcapture %}
{% include example.html content=example %}

##### Naming Order

Notice how the component name `price` is the _first_ thing listed in the 
root element's class attribute, followed by the `price-big-dollars`, 
subclass, this order is important for maintaining a clear understanding 
of a component. If the component's root element contained other 
classes, for example the responsive utility classes `d-none` 
and `d-sm-block`, then those would come after the component 
specific classes for name and subclasses. 

For example:

{% highlight html %}
<p class="price price-big-dollars d-none d-sm-block"></p>
{% endhighlight %}


### Attributes

Observe how every attribute name begins with the component 
name plus a dash. Thus, what we might have called the 
`dollar-sign` attribute is actually expressed as `price-dollar-sign`. 
By strictly adhering to the namespacing of all attributes 
and subclasses we are able to apply styling to a component 
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

Plus, you won't see fragile CSS selectors like these gems 
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

### Subclasses 

