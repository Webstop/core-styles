# ToDos






# 3rd Party Script Tag

Third parties will be able to drop the following script tag on 
their site.

```js
<script src="//api.grocerywebsite.com/front_end_framework/render_assets"></script>
```

This script will look at the domain name,  include all the CSS and JS required for the site.

### Options

| Parameter | Default | Description                                    |
|-----------|---------|------------------------------------------------|
| `js`      | `true`  | Set to `false` to exclude the JavaScript file. |
| `css`     | `true`  | Set to `false` to exclude the Stylesheet fils. |

#### Examples

#### Both Javascript & Stylesheet Example

```js
<script src="//api.grocerywebsite.com/front_end_framework/render_assets"></script>
```

#### No Javascript Example

```js
<script src="//api.grocerywebsite.com/front_end_framework/render_assets?js=false"></script>
```

#### No Stylesheet Example

```js
<script src="//api.grocerywebsite.com/front_end_framework/render_assets?css=false"></script>
```
