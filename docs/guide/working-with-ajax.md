---
layout: docs
title: Working with AJAX
description: Guide for working with components that utilize AJAX . 
group: guide
toc: false
---

When working with AJAX you will sometimes need a response from the server that changes based on the data you submit 
along with an AJAX request. This can be challenging when working with our [Jekyll](https://jekyllrb.com) 
site because it is a simple static site generator. How do you know the fancy JavaScript you are writing in the 
core-styles development site is sending the required data correctly if it is being submitted to a simple 
static HTML page?

We have answered this problem by embeding a very basic [Sinatra](http://sinatrarb.com) app into our core-styles repo. 
With this simple Sinatra app we are able to read post and get parameters and either display them or apply 
Ruby code to them. This way we can test that the JavaScript we have written to perform AJAX requests is 
functioning properly.

**Note:** _The goal here is to write faux responses. We don't want to write full back-end feature code, but 
rather just enough that we are able to verify our JavaScripts are making well formed requests and/or sending 
the data and parameters we expect._

Another use for this is to be able to style AJAX responses so we can simulate the user experience. An 
example of this can be found in our [Site Modal](/docs/components/site-modal/) page. Here we perform an 
AJAX request that returns a static HTML form which our JavaScript places inside the body of a Bootstrap 
Modal.

## Sinatra Development

Working with the [Sinatra](http://sinatrarb.com) app is about as simple to work with as any web app you'll encounter. 

How do we get both a Sinatra app and a Jekyll app working together? We run each server on a different port, so we can 
make requests to either one at localhost simply by changing the port. We run our Jekyll development app on port `4000`, 
and our Sinatra app on port `4567`.

- Jekyll server: [`http://localhost:4000`](http://localhost:4000)
- Sinatra server: [`http://localhost:4567/alert_success`](http://localhost:4567/alert_success)


### File Structure

In the root of the core-styles repo you'll find a folder named `sinatra`, this contains all your Sinatra related files.

```tree
.
└── sinatra
    ├── server.rb
    └── views
        ├── search_results.erb
        ├── alert_success.erb
        └── etc.
```

There are basically two files to work with here. The `server.rb` is where we setup the routes we listen too, any 
logic we need to run at that route, and assign a view to return. Then you create a view file that contains the HTML you 
wish to return, these are erb files so you can put programming logic in there like you would in a Rails app.

#### The `server.rb` File

You create routes in Sinatra like the following:

```ruby
get '/foo' do
  response['Access-Control-Allow-Origin'] = '*' # this allows AJAX from Jekyll pages
  erb( :foo, layout: :layout_empty )
end
```

This will respond to any `get` request coming into `http://localhost:4567/foo`, and will return the 
`sinatra/views/foo.erb` file as specified by the `erb` tag on the last line. And it's that simple. The contents of the 
view file don't need to do any anything fancy, just represent what a result would look like. 

Here is real example we are using for the search results of the [Live Search](/docs/components/search/) component. 
You'll notice we are using `post` instead of `get`, we did this because our form uses the post method instead of the 
get method. We also create a `@search` variable from the `search` parameter, which is accessible in our view. 

```ruby
post '/search_results' do
  response['Access-Control-Allow-Origin'] = '*' # this allows AJAX from Jekyll pages
  @search = params['search']
  erb( :search_results, layout: :layout_empty )
end
```

One caveat on the whole get vs post thing is that if you want the Sinatra app to respond to both a get and a post you 
need to make two entries in the `server.rb` file. For example, I made a generic success response that can be used 
anywhere we need a nicely formatter success response, and I want it available for both get and post requests. So we have 
two entries for it, like so:

```ruby
get '/alert_success' do
  response['Access-Control-Allow-Origin'] = '*' # this allows AJAX from Jekyll pages
  erb( :alert_success, layout: :layout_empty )
end

post '/alert_success' do
  response['Access-Control-Allow-Origin'] = '*' # this allows AJAX from Jekyll pages
  erb( :alert_success, layout: :layout_empty )
end
```

#### The View Files

The view files are located in the `/sinatra/views' folder. They are simple .erb files. Most of the time you can put 
straight HTML in them, but they are erb files so you can display variables (e.g. `you serached for: <%= @searech %>) or 
other ruby code like `if` statements. 

Here is the view file `alert_success.erb` referenced in the `server.rb` code example above: 

```html
<div class="alert alert-success" role="alert">
  <strong>Success!</strong> You did it! You should feel very proud of yourself right now!
</div>
```
