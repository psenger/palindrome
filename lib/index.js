/**
 * palindromic
 * @module palindromic
 * @author Philip A Senger
 * @description This module contains variations of the Palindrome functions
 */
"use strict";

var util = require('util');
/**
 * Test if a string is a Palindrome
 *
 * @example
 * if ( palindrome.isPalindrome ( "a toyotas a toyota" ) {
 *   console.log( 'yes' );
 * }
 * @example
 * if ( palindrome.isPalindrome ( "1221" ) {
 *   console.log( 'yes' );
 * }
 * @example
 * if ( palindrome.isPalindrome ( "abBA" ) {
 *   console.log( 'yes' );
 * }
 *
 * @type {Function}
 * @api public
 * @param {string} aString - The string value a Palindrome test, numbers, null, undefined, and functions will return false.
 * @returns {boolean}
 */
exports.isPalindrome = function isPalindrome ( aString ) {

    // Make sure we are dealing with a valid value for aString.
    if ( util.isFunction(  aString ) || util.isNumber(  aString ) || util.isNull(  aString ) || util.isUndefined(  aString )   ) {
        return false;
    }

    // anything that is not a through z ( case insensitive and globally ) and 0 through 9 remove it. then do a lower case.
    var cleanString = aString.replace ( /[^a-z0-9]/gi, "" ).toLowerCase ();

    // using two vars i and j and going towards the center of the string. this algorithm is not efficient because it overlaps. Big O (N)
    for ( var i = cleanString.length - 1, j = 0 ; i > 0 && j < cleanString.length; i--, j++ ) {
        if ( cleanString.charAt(i) != cleanString.charAt(j) ) {
            return false;
        }
    }
    return true;

};