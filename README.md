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


---

Crafted by Greg Hemphill

