# Cypress Tests for the Catch of the Day Project

## Cypress Project
The purpose of this repo is to offer an easy to test project using Cypress. In the main directory you will find a `Cypress` folder. This contains the Cypress tests and helpers that make it possible.

----
## Test Project (Catch of the Day)
The project Cypress is testing was built by following along the [React For Beginners](https://reactforbeginners.com/) course by Wes Bos. If you're interested in the project that is being tested, I highly encourage you taking this or any of his courses.

The main contents of this project are found in the `src` folder within the main directory.

----
## Getting Started

In the local directory where you want to set up this project, clone this repository and change into the directory

`git clone https://github.com/micleners/cypress-cotd.git`

`cd cypress-cotd`

Then install the node packages

`npm install`

*Note: If this fails because it could not find Python, this is likely because packages from Firebase have gotten out of date. Try force installing:* 
`npm install --force` 

After installation is complete, run the Cypress tests:

`npm run cypress`

You'll **notice** that some tests are failing! This is because some tests are running against the [deployed version](https://cypress-cotd.micleners.com/) of this app, while others are running against the [local version](http://localhost:3000/). To get the local versions to pass, start up your local development server of the Test Project:

`npm run start`

----
