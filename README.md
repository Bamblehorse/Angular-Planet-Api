# Angular-Planet-Api

This project is [live on GitHub pages](https://jonathandwood.github.io/Angular-Planet-Api/dist/).

This app uses my standard and ever evolving [Gulp worflow](https://github.com/JonathanDWood/Simple-Gulp-Workflow)

## Tickets
This project uses the [issue system](https://guides.github.com/features/issues/) from GitHub to track tickets. Master branch was [protected](https://github.com/blog/2051-protected-branches-and-required-status-checks) and issues were [linked](https://help.github.com/articles/closing-issues-via-commit-messages/) with tickets.

You can see the [issue for this section](https://github.com/JonathanDWood/Angular-Planet-Api/issues/2) on tickets as an example.

[Closed tickets.](https://github.com/JonathanDWood/Angular-Planet-Api/issues?q=is%3Aissue+is%3Aclosed)
[Milestones.](https://github.com/JonathanDWood/Angular-Planet-Api/milestones)

## Git Flow
This project uses [Git Flow](http://danielkummer.github.io/git-flow-cheatsheet/)

Note: [Some branches](https://github.com/JonathanDWood/Angular-Planet-Api/branches) were left open to demonstrate the use of feature branching.

## Important to note
This repo uses Gulp 4 and if you have gulp 3.9.x installed you may get the following error:

```
TypeError: Cannot read property 'apply' of undefined
    at /usr/local/lib/node_modules/gulp/bin/gulp.js
```
At this point you need to update the gulp-cli as follows:
```
npm i -g gulp-cli
```
More info [here](https://github.com/gulpjs/gulp-cli/issues/84)

## Getting Started
Below you will find instructions for setting the project up on your local machine.

### Prerequisities
You will need the following tools to run the project:
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Node.js and Npm](https://nodejs.org/en/download/)

### Installing
Navigate to a folder on your machine where you are happy to place the project folder.

Open up your command-line interface and type:
```
git clone https://github.com/JonathanDWood/Angular-Planet-Api
```
Now change directories into the project directory:
```
cd Angular-Planet-Api
```
Install the project dependencies with Npm:
```
npm install
```
Run the Gulp default task:
```
gulp
```
If the project hasn't automatically opened in your browser, [click here.](http://localhost:3000)

## Testing
Testing is done with protractor. Instructions are on the [official website](http://www.protractortest.org/#/).

Start up the Selium Server:

```
webdriver-manager start
```
It can be found here: [http://localhost:4444/wd/hub](http://localhost:4444/wd/hub)

Start the site on localhost:3000 by running gulp:
```
gulp
```

You may have to update your google chrome browser and the webdriver chrome version.
```
node_modules/protractor/bin/webdriver-manager update --versions.chrome
```
Run protractor
```
protractor conf.js
```
All tests will now run.

## Built With
* [Sublime Text 3](https://www.sublimetext.com/3)
* [Npm Gulp](https://www.npmjs.com/package/gulp) and related packages - listed in [package.json](package.json)
* [Npm/Node.js](https://nodejs.org/en/download/) and [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) - As above

## Author
* **Jonathan Wood** - [Github](https://github.com/JonathanDWood/)

## License
See the [license](LICENSE) file for details

YOU CAN DO IT TOO!
