# Angular7-CypressCodeCoverage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.


## Install needed packages
Open Vs Code as Admin and install needed packages by running npm install

## Build project with Angular Webpack

Run `npm run buildwp` to build the code.  

## Serve the code

Run `npm run r` to serve the code to localhost. Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.

## Running client side tests with cypress.

Run `npm run coverage` to execute the cypress unit tests .

## Viewing the results

Navigate to the project folder coverage/index.html and open in chrome to display coverage report results.

## Extra - Referencing files with import

.babelrc file is ok if there is no angular 6+ components being importanted from external packages. If there is the webpack needs to build them which requires using babel.config.js

When building the webpack, all importants in components must use either the 

'@' in the import like =>  import { Router } from '@angular/router'; | custom ones can be created in the tsconfig.json file.
or 
'./<location>' like import { SecondpageComponent } from './SecondPage/secondpage.component';
 
 Start with name will NOT work for webpack build like 'SecondPage/secondpage.component';
 
## Extra - Referencing external angular files
In tsconfig.json you will want to include them in the build like so but you will need to excule all the spec.ts files for the build.

"include":["./src/**/*","./node_modules/<package name>/**/*"],
"exclude":["**/*.spec.ts"]

 
 
 
