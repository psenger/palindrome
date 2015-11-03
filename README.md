# palindrome

A simple NodeJS v4.0.0 app written to test if a string is a Palindrome without reversing it. I used Mocha with BDD style tests, istanbul to validate code coverage, NPM to bump the version and create a release so it can link into a node project with NPM, and used Travis CI for CI. 

[![Build Status](https://travis-ci.org/psenger/palindrome.svg?branch=master)](https://travis-ci.org/psenger/palindrome)

## How to run the test

Install node js [here](https://nodejs.org/en/)
Install git [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Then clone this project with git

```
git clone https://github.com/psenger/palindrome.git
```

then **cd** into the newly checked out directory

```
cd palindrome
```

and execute the following

```
npm install 
npm test
```

The tests will run, and code coverage will be included in the output.

## Documentation

You can link this project directly into a NPM project via by using this package.json file. Replace xxxxxxxx with your Github Personal access tokens.

```js

  "devDependencies": {
    "palindrome": "git+https://xxxxxxxx:x-oauth-basic@github.com/psenger/palindrome.git",
  }

```

<a name="module_palindromic"></a>
## palindromic
This module contains variations of the Palindrome functions

**Author:** Philip A Senger  
<a name="module_palindromic.isPalindrome"></a>
### palindromic.isPalindrome(aString) ⇒ <code>boolean</code>
Test if a string is a Palindrome

**Kind**: static method of <code>[palindromic](#module_palindromic)</code>  
**Api**: public  

| Param | Type | Description |
| --- | --- | --- |
| aString | <code>string</code> | The string value a Palindrome test, numbers, null, undefined, and functions will return false. |

**Example**  
```js
if ( palindrome.isPalindrome ( "a toyotas a toyota" ) {
  console.log( 'yes' );
}
```
**Example**  
```js
if ( palindrome.isPalindrome ( "1221" ) {
  console.log( 'yes' );
}
```
**Example**  
```js
if ( palindrome.isPalindrome ( "abBA" ) {
  console.log( 'yes' );
}
```

