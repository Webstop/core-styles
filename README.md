Webstop Style Guide
===================

tl;dr
-----

To run the development server:

```bash
./serve
```

Then visit [`{{ jekyll_host }}`]({{ jekyll_host }}) in your web browser.


To quit the server:

```bash
Ctrl + c
```

Setup
-----

1. Install docker for 

1. Install Docker for Mac.  Click the 'Get Docker for Mac (stable)' link
  on this page: [https://docs.docker.com/docker-for-mac/](https://docs.docker.com/docker-for-mac/)
2. Get a copy of the repo. First `cd` to the directory you want to install the project into then 
  run `git clone git@github.com:Webstop/core-styles.git` after the clone completes run `cd core-styles`.
3. Run `./serve` from the project's root directory. The first time you run this command it 
  take longer because it will be going out and downloading the Docker VMs and installing all 
  of the project's Ruby Gems. The whole process should take about 10 minutes. After you're 
  setup, the `./serve` command should take a few seconds to launch your web server.


Development
-----------

## Running The Web Server


From the root directory of the project, run:

```bash
./serve
```

Then visit [`{{ jekyll_host }}`]({{ jekyll_host }}) in your web browser.

The web Jekyll server will monitor for changes to your Markdown or HTML files and recompile the 
site every time you make a change.

> The first time you run this command it 
> take longer because it will be going out and downloading the Docker VMs and installing all 
> of the project's Ruby Gems. The whole process should take about 10 minutes. After you're 
> setup, the `./serve` command should take a few seconds to launch your web server.



### To quit the server:

```bash
Ctrl + c
```

## Watch Sass Files

When you make a change to a SCSS file it will automatically recompile all your Sass files into 
CSS files. This makes development much simplier. I usually run this along side the web server in 
a separated terminal tab.

From the root directory of the project, run:

```bash
./watch
```

### To quit the watch script:

```bash
Ctrl + c
```

## Move JavaScript Files

We don't have a watch script for JS files like we do for stylesheets or html pages. When you make 
changes to JavaScript files you can open a node terminal and run a simple command to distribute the 
Javascript source files into the served files.

In a 3rd tab run:

```bash
./node
```

This will open a terminal session into a Node.js server. Then after you make changes to a Javascript 
file you can run the following to make it available to the server:

```bash
npm run dist
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

## Development, Deeper Dive 

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

Deploying
---------

Follow these steps to deploy the Framework.

1. Update the version number in the `package.json` file (remember the new version number).
2. Run the distribution script. We will launch a node container and run the script that moves all our latest CSS and JavaScript into the `dist` folder.
  - Run the `./bash_node` command.
  - then run `npm run dist`.
  - then type `exit` to leave the node container. 
3. Commit & Push
  - Do a `git add -A`.
  - then a `git commit -m "some message"`.
  - then `git push webstop master`. 
4. Tag the Release
  - Visit [core-styles releases](https://github.com/Webstop/core-styles/releases) in a web browser.
  - Click the `Draft New Release` button.
  - Enter the same version number you used in step 1 with a `v` appended to the front (e.g. `1.0.2` = `v1.0.2`). 
  - Write a Helpful Title, and optionally a description.  
  - Click `Publish Release`.
  
At this point you've deployed the code and tagged it. It is ready and available 
to be installed as a Node module via NPM or Yarn.

### Installing via NPM or Yarn

In the project you'd like to include the new version of core-styles in:

1. Update the version in the `package.json` file (in the project root). 

Your `package.json` file will looks something like this, likely with a lot more stuff in it.

```json
{
  "name": "core-rails",
  "private": true,
  "dependencies": {
    "core-styles": "https://github.com/Webstop/core-styles.git#v0.5.14"
  }
}
```

On the line that reads ` "core-styles": "https://github.com/Webstop/core-styles.git#v0.5.14""`
you'll want to change that version number at the end of the line from `v0.5.14` to whatever version number you used 
when tagging a release on the Github website.

2. Then run `npm update`

Now you should have the latest version of the node module installed in your app.


### Installing in Legacy Lasso Pages

Because our legacy Lasso site doesn't have fun tools like NPM installed, we have to 
do things a bit more manually.

1. Move the dist files to S3 & CloudFront CDN
  - In your favorite FTP client connect to S3.
  - Open the `core_app_assets` bucket.
  - Navigate to `core-repos/core-styles`, in there you will see a bunch of folder, each corresponds to a version of core-styles.
  - Create a new folder inside the `core-styles` folder. Name the folder the same version number you used when you created the tagged release on the Github website (e.g. `v0.5.14`).
  - Open this new folder then copy the `dist` folder from your local copy of the `core-styles` app into your new folder.
2. Set `core-lasso` to use the new version.
  - In your development copy of the core-lasso site, open the [`/Templates/layouts/core_styles_2.inc`](https://github.com/Webstop/lasso_core/blob/master/Templates/layouts/core_styles_2.inc#L3) file.
  - In the top of this file (line 3 at the time of this writing) you'll see a variable named `core_styles_version` 
  being set. Change that variable is it is set to your new version number (e.g. `[var('core_styles_version' = 'v0.5.14')]`).

_If the only updates are to CSS or to existing JavaScript files, then you are done._ 
However if new JavaScript files are introduced you'll need to do the following additional step.

3. Add new JavaScript files to `core-lasso`.
  - In your development copy of the core-lasso site, open the [`/Templates/layouts/core_styles_2.inc`](https://github.com/Webstop/lasso_core/blob/master/Templates/layouts/core_styles_2.inc#L61-L72) file.
  - Near the bottom of the file you will find a list of JavaScript files to include (startign at line 61 at the time of this writing), add your new files to this list.


---

Crafted by Greg Hemphill & the Webstop team.

