Webstop Style Guide
===================

tl;dr
-----

To run the development server:

```bash
./serve
```

Then visit [`http://localhost:4000`](http://localhost:4000) in your web browser.


To quit the server:

```bash
Ctrl + c
```

Setup
-----

1. Install Docker for Mac.  Click the 'Get Docker for Mac (stable)' link
on this page:

   * [https://docs.docker.com/docker-for-mac/](https://docs.docker.com/docker-for-mac/)

2. After copying the 'Docker' app from the downloaded DMG to your Applications folder
launch the app so that it can install and configure Docker on your computer.
This will add a whale icon menu item to your menubar which will automatically
launch on subsequent restarts of your mac.  This menubar item provides options
for stopping the docker vm if desired.

Run The Web Server
------------------

From the root directory of the project, run:

```bash
./serve
```

Then visit [`http://localhost:4000`](http://localhost:4000) in your web browser.

To quit the server:

```bash
Ctrl + c
```

Install Gems & Ruby Upgrades
----------------------------

Our development environment relies on a Docker container. The Docker container 
stores all the Ruby gems and specifies which version of Ruby we are using. To 
update changes specified in the gemfile, run the following command:

```bash
./build_docker.sh
```

Run Jekyll Commands
-------------------

Open a terminal window in the root of this project and then execute all
jekyll commands as usual - except replace the regular `jekyll` with `./jekyll`
so that it will instead execute the shell script in the project root named 
`jekyll`.

Note that the very first time that you execute a `./jekyll` command that docker
will go out and download the Node and Ruby docker containers.  This download is 
totally automatic and the command you entered will run directly after the 
download has finished.  This will only take about a minute.

Example `./jekyll` commands
--------------------------

```bash
./jekyll help build
```

```bash
./jekyll serve
```

```bash
./jekyll build
```

## Development 

### Creating Themes

##### 1. Create The Sass File

Create your theme using Scss by creating a new file in the `scss/core-themes` folder. 

##### 2. Enable CSS Compilation

In order to make the theme available to 3rd parties as pure CSS you need to add the name of the theme to the `css-compile` script in the `package.json` file. The text below adds the `country-farm` theme. 

```text
 && node-sass --output-style expanded --source-map true --precision 6 scss/core-themes/_country-farm.scss dist/css/core-themes/country-farm.css
```

Which produces something like: 

```text
"css-compile": "node-sass --output-style expanded --source-map true --precision 6 scss/core-styles.scss dist/css/core-styles.css && node-sass --output-style expanded --source-map true --precision 6 scss/core-themes/_country-farm.scss dist/css/core-themes/country-farm.css",
```

##### 3. Enable CSS Minification

In order to make minified versions of the CSS you need to add the name of the theme to the `css-minify` script in the `package.json` file. The text below adds the `country-farm` theme. 

```text
 && cleancss --level 1 --source-map --output dist/css/core-themes/country-farm.min.css dist/css/core-themes/country-farm.css
```

Which produces something like: 

```text
"css-minify": "cleancss --level 1 --source-map --output dist/css/core-styles.min.css dist/css/core-styles.css && cleancss --level 1 --source-map --output dist/css/core-themes/country-farm.min.css dist/css/core-themes/country-farm.css",
```

## Upgrading Bootstrap

After upgrading the Bootstrap-docs repo to the latest release of Bootstrap, you'll want to do the following.

See if the location of the documentation has changed. If it has, do the following.

- Update the paths in the file `plugins/move-bootstrap-docs.rb`
  - then run `./jekyll build` & verify the files are copied over to the correnct location in the `_site` folder
- Update the paths in the file `_data/nav.yml`

Run `./jekyll build` to copy over the new documentation files.


# Plugins

Lipsum Usage
============

It's usage is simple. For example, you insert this line in one of your posts:

    {% lipsum %}

And you'll get something like this:

> Aenean id lacinia neque nec bibendum odio risus a arcu imperdiet metus id velit augue id magna iaculis quis, pretium quam iaculis quis, sit amet nibh ullamcorper nec, pretium quam nonummy ac, erat libero tristique tellus, turpis at pulvinar vulputate, sed nisl molestie nec bibendum odio risus erat libero tristique tellus, a arcu imperdiet pretium quam turpis at pulvinar vulputate, sit amet nibh rutrum non, pretium quam augue id magna ullamcorper nec, porttitor ut, porttitor ut, nec bibendum odio risus sit amet nibh sit amet ante.

As you can see, a full paragraph of random text will substitute the original liquid tag.

Each paragraph will have a beginning, a middle part and an ending. The _size_ of the paragraph corresponds to the number of middle parts. A number of 3 will have 3 middle parts.

The following paragraph has a size of 1: Nam quis nulla ullamcorper nec, sit amet ante. The begining is "Nam quis nulla", the middle part is "ullamcorper nec," and the ending is "sit amet ante".

The beginings, middle parts and endings are taken randomly from 3 different pools of text.

The tag allows up to three numbers as parameters:

* The **first number** represents the number of paragraphs to be generated,
* The **second number** is the minimum size of the paragraph (number of middle parts). 
* The **third number** is the maximum size of the paragraph (number of middle parts).

Combining this, you can have the following situations:

Usage                    | Result
:------------------------|:----------------------------------------------------------------
``{% lipsum %}``         | 1 paragraph. Random length between 10 and 30
``{% lipsum n %}``       | **_n_** paragraphs. Random length between 10 and 30
``{% lipsum n l %}``     | **_n_** paragraphs. Exactly a length of **_l_**
``{% lipsum n l1 l2 %}`` | **_n_** paragraphs. Random length between **_l1_** and **_l2_**

You can improve or modify the behaviour of this liquid tag by simply editing its source code. There you can change the sentence parts to your wishes by simply editing the three arrays of strings from which the generator takes the text parts.


---

Crafted by Greg Hemphill

