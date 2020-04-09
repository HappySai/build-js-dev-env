//Register babel to transpile before our tests run
require('babel-register')();

//Disable webpack features that Mocha doesn't understand
//Here we are telling to mocha to check if anything related to webpac like css and then make this one empty function.
require.extensions['.css'] = function () { };
