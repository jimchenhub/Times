# Times

This website is to record the moments of our class.

***

## File Organization Structure   
### ***Annotation***  
`****` is a directory   
**** is a file

### root directory structure
|-`build`   
|-`dist`   
|-`src`   
|-`test`   
|-`vendor`   
|-.gitignore   
|-LICENSE   
|-package.json   
|-README.md

`src` contains source code files   
`test` contains test code files   
`vendor` contains third party library   
`build` contains build scripts   
`dist` contains build result which will deploy into the target environment

### src directory structure
|-`app`     
|-`assets`   
|-`common`   
|-`style`    
|-index.html   

`assets` contains images and icons. `common` contains common AngularJS scripts like directives and services. `style` contains css and sass files which control the style of web pages.    

`app` directory consist of functional modules. eg: we have home and asset module. So there are two directory in it. In each module directory, it will have html template and corresponding AngularJS script.

### test directory structure
|-`config`     
|-`e2e`   
|-`unit`   
|-`vendor`    

`config` contains universal config file of all tests. `e2e` contains end to end test scripts for whole application. `unit` contains unit test scripts. `vendor` contains third party libraries.

***

## File Naming Conventions   
- All Javascript files have `.js` extension name.
- Child template files have `.tpl.html` extension name.
- Test scripts have same with target source files. Unit test scripts have `.spec.js` extension name.