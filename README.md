# Mars rover app 

Small Express/Angular/Node app that controls a mars rover in a server from a browser through an API and paints the result on a grid

### Based on  the mars rover problem

```
A squad of robotic rovers are to be landed by NASA on a plateau on Mars.

This plateau, which is curiously rectangular, must be navigated by the rovers so that their on board cameras can get a complete view of the surrounding terrain to send back to Earth.

A rover's position is represented by a combination of an x and y co-ordinates and a letter representing one of the four cardinal compass points (N, S, E or W) . The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.

In order to control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot.

'M' means move forward one grid point, and maintain the same heading.

Assume that the square directly North from (x, y) is (x, y+1).

Input:

The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0.

The rest of the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input. The first line gives the rover's position, and the second line is a series of instructions telling the rover how to explore the plateau.

The position is made up of two integers and a letter separated by spaces, corresponding to the x and y co-ordinates and the rover's orientation.

Each rover will be finished sequentially, which means that the second rover won't start to move until the first one has finished moving.

Output:

The output for each rover should be its final co-ordinates and heading.

Test Input:

5 5
1 2 N
LMLMLMLMM

Instructions 2: 
3 3 E
MMRMMRMRRM

Expected Output:

1 3 N
5 1 E
```
### Assumptions
- The plateau is 5*5
- Instructions are uppercase
- There's no default rover
- Left is west 
- Node version 4.2.3 


The application moves 1 rover and the resulting position from the API updates the form and clears the old instructions so only instructions are required on a second interaction with the rover. New positions will overwrite. 




**Originally generated from HotTowel Angular** Use the following instructions to run th app

>*Opinionated Angular style guide for teams by [@john_papa](//twitter.com/john_papa)*

>More details about the styles and patterns used in this app can be found in my [Angular Style Guide](https://github.com/johnpapa/angularjs-styleguide) and my [Angular Patterns: Clean Code](http://jpapa.me/ngclean) course at [Pluralsight](http://pluralsight.com/training/Authors/Details/john-papa) and working in teams.

## Prerequisites

1. Install [Node.js](http://nodejs.org)
 - on OSX use [homebrew](http://brew.sh) `brew install node`
 - on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

2. Install Yeoman `npm install -g yo`

3. Install these NPM packages globally

    ```bash
    npm install -g bower gulp nodemon
    ```

    >Refer to these [instructions on how to not require sudo](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md)
    

## Running HotTowel

### Linting
 - Run code analysis using `gulp vet`. This runs jshint, jscs, and plato.

### Running in dev mode
 - Run the project with `gulp serve-dev`

 - opens it in a browser and updates the browser with any files changes.

### Building the project
 - Build the optimized project using `gulp build`
 - This create the optimized code for the project and puts it in the build folder

### Running the optimized code
 - Run the optimize project from the build folder with `gulp serve-build`

### Installing Packages
When you generate the project it should run these commands, but if you notice missing packages, run these again:

 - `npm install`
 - `bower install`


## Gulp Tasks

### Task Listing

- `gulp help`

    Displays all of the available gulp tasks.

### Code Analysis

- `gulp vet`

    Performs static code analysis on all javascript files. Runs jshint and jscs.

- `gulp vet --verbose`

    Displays all files affected and extended information about the code analysis.


### Bower Files

- `gulp wiredep`

    Looks up all bower components' main files and JavaScript source code, then adds them to the `index.html`.

    The `.bowerrc` file also runs this as a postinstall task whenever `bower install` is run.

### Angular HTML Templates

- `gulp templatecache`

    Create an Angular module that adds all HTML templates to Angular's $templateCache. This pre-fetches all HTML templates saving XHR calls for the HTML.

- `gulp templatecache --verbose`

    Displays all files affected by the task.

### Serving Development Code

- `gulp serve-dev`

    Serves the development code and launches it in a browser. The goal of building for development is to do it as fast as possible, to keep development moving efficiently. This task serves all code from the source folders and compiles less to css in a temp folder.

- `gulp serve-dev --nosync`

    Serves the development code without launching the browser.

- `gulp serve-dev --debug`

    Launch debugger with node-inspector.

- `gulp serve-dev --debug-brk`

    Launch debugger and break on 1st line with node-inspector.

### Building Production Code

- `gulp optimize`

    Optimize all javascript and styles, move to a build folder, and inject them into the new index.html

- `gulp build`

    Copies all fonts, copies images and runs `gulp optimize` to build the production code to the build folder.

### Serving Production Code

- `gulp serve-build`

    Serve the optimized code from the build folder and launch it in a browser.

- `gulp serve-build --nosync`

    Serve the optimized code from the build folder and manually launch the browser.

- `gulp serve-build --debug`

    Launch debugger with node-inspector.

- `gulp serve-build --debug-brk`

    Launch debugger and break on 1st line with node-inspector.

### Bumping Versions

- `gulp bump`

    Bump the minor version using semver.
    --type=patch // default
    --type=minor
    --type=major
    --type=pre
    --ver=1.2.3 // specific version

## License

MIT
