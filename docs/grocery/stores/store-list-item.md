---
layout: docs
title: Store List Item
description: An individual store listing in a list of store locations.
group: grocery
toc: true
source: Webstop
---

## Example

Pretty straight forward. The `store-list-item` class namespaces the item, which includes address information for the 
store. This example wraps the contents of the element in a link, but you could alternatively make it a form element.

{% capture example %}
        {% include examples/stores/_store-list-item-example.html store_number=221 address='221B Baker Street' city='London' location_name='Mystery Marketplace' %}
{% endcapture %}
{% include example.html content=example %}


