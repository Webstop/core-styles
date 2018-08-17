---
layout: docs
title: Circular Item
description: Individual sale items inside the digital circular.
group: grocery
toc: true
---

## Examples

The basic circular item is the basis for our digital circular content. 

{% capture example %}
<article class="circular-item  ">
  <div class="circluar-item-top-row ">
    <div class="circular-item-images">
      <img src="https://tops-secure-graphics.grocerywebsite.com/G_WeeklyAd_TOPS/circular/Corn_Amaize_White_.jpg" alt="Picture of Homegrown Amaize! Sweet Corn" class="img-responsive circular-item-image">
    </div>
    <div class="circular-item-text-col">
      <p class="circular-item-heading">TOPS LOCAL! Amaize! Sweet Corn - The Best Corn You'll Ever Eat!</p>
      <h3 class="circular-item-title">Homegrown Amaize! Sweet Corn</h3>
      <p class="circular-item-description">White Sweet Corn with an Amazing Flavor, Distinctively Delicious Pop and Crunch</p>
      <p class="circular-item-price-wrapper">
        <span class="circular-item-price-prefix circular-item-price-text">12 for </span>
        <span class="circular-item-price-dollar-sign circular-item-price-text">$</span>
        <span class="circular-item-price-dollars circular-item-price-text">4</span>
        <span class="circular-item-price-suffix circular-item-price-text"></span>
        <img src="https://tops-secure-graphics.grocerywebsite.com/G_WeeklyAd_TOPS/Card/Card_45x29.gif" class="circular-item-card" alt="Save with your TOPS BonusPlus<sup>®</sup>">
      </p>
      <p class="Item">Available for a Limited Time - Only at Tops</p>
    </div>
  </div>
  <div class="circular-item-bottom-row ">
    <div role="region" id="ListItem0_2" class="circular-item-shopping-list-wrapper" aria-live="polite">
      <form action="http://www.topsmarkets.com/WeeklyAd/ShoppingList/Add/NoJS//?I=457079&amp;L=0_2&amp;Ad=180812&amp;D=2018-08-16&amp;Test=" method="post" onsubmit="listAdd('457079', '0_2', '180812', '2018-08-16', '', ''); return false;" class="circular-item-shopping-list-form">
        <fieldset>
          <legend class="sr-only">Add Homegrown Amaize! Sweet Corn to shopping list</legend>
          <input type="hidden" name="URL" value="WeeklyAd/Index/" id="URL0_2">
          <label for="Qty0_2" class="sr-only">Qty for Homegrown Amaize! Sweet Corn</label>
          <div class="form-group circular-item-qty-group">
            <div class="input-group">
              <span class="input-group-addon" id="circular-item-qty-label-0-2">Qty</span>
              <input type="text" name="Qty" value="12" maxlength="2" class="circular-item-qty form-control" id="Qty0_2" aria-labelledby="circular-item-qty-label-0-2">
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Add to Shopping List
          </button>
        </fieldset>
      </form>
    </div>
    <p class="circular-item-recipe">
      <span class="circular-item-recipe-label">Recipe:</span>
      <a href="http://www.topsmarkets.com/Recipes/Detail/7417/Amaize_Sweet_Corn_Summer_Spreads/" class="circular-item-recipe-title-link">
        Amaize Sweet Corn Summer Spreads
      </a>
    </p>
  </div>
  <div class="clearfix"></div>
</article>
{% endcapture %}
{% include example.html content=example %}


