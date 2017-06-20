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



---

Crafted by Greg Hemphill

