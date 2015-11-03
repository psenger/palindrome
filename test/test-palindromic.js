/**
 * Created by philip a senger on 3/11/2015.
 */
var assert = require ( 'assert' ),
    palindrome = require ( '../lib/index' );
describe ( 'palindromic', function () {
    context ( 'passing non-valid values', function () {
        describe ( 'Given I have passed undefined', function () {
            it ( 'should return false', function () {
                var result = palindrome.isPalindrome ();
                assert.equal ( result, false );
            } );
        } );
        describe ( 'Given I have passed null', function () {
            it ( 'should return false', function () {
                var result = palindrome.isPalindrome ( null );
                assert.equal ( result, false );
            } );
        } );
        describe ( 'Given I have passed a function', function () {
            it ( 'should return false', function () {
                var sample = function sample () {
                    return true;
                };
                var result = palindrome.isPalindrome ( sample );
                assert.equal ( result, false );
            } );
        } );
        describe ( 'Given I have passed a numeric int ', function () {
            it ( 'should return false', function () {
                var result = palindrome.isPalindrome ( 1245 );
                assert.equal ( result, false );
            } );
        } );
        describe ( 'Given I have passed a numeric real', function () {
            it ( 'should return false', function () {
                var result = palindrome.isPalindrome ( 12.45 );
                assert.equal ( result, false );
            } );
        } );
        describe ( 'Given I have passed a numeric negative', function () {
            it ( 'should return false', function () {
                var result = palindrome.isPalindrome ( -1234 );
                assert.equal ( result, false );
            } );
        } );
    } );
    describe ( 'Given I am passing strings', function () {
        describe ( 'Given I have passed a blank', function () {
            it ( 'should return true', function () {
                var result = palindrome.isPalindrome ( "" );
                assert.equal ( result, true );
            } );
        } );
        describe ( 'Given I have passed a simple symmetric value', function () {
            it ( 'should return true', function () {
                var result = palindrome.isPalindrome ( "ABBA" );
                assert.equal ( result, true );
            } );
        } );
        describe ( 'Given I have passed a simple asymmetric value', function () {
            it ( 'should return true', function () {
                var result = palindrome.isPalindrome ( "ABCBA" );
                assert.equal ( result, true );
            } );
        } );
        describe ( 'Given I have passed a simple symmetric mix value', function () {
            it ( 'should return true', function () {
                var result = palindrome.isPalindrome ( "ABba" );
                assert.equal ( result, true );
            } );
        } );
        describe ( 'Given I have passed a simple asymmetric mix value', function () {
            it ( 'should return true', function () {
                var result = palindrome.isPalindrome ( "ABCba" );
                assert.equal ( result, true );
            } );
        } );
        it ( 'should return false when it is not a Palindrome', function () {
            var result = palindrome.isPalindrome ( "The quick brown fox jumps over the lazy dog" );
            assert.equal ( result, false );
        } );
        it ( 'should return true when it is Palindrome of lower case', function () {
            var result = palindrome.isPalindrome ( "a toyotas a toyota" );
            assert.equal ( result, true );
        } );
        it ( 'should return true when it is Palindrome of mixed case', function () {
            var result = palindrome.isPalindrome ( "a tOyoTaS A toYota" );
            assert.equal ( result, true );
        } );
        it ( 'should return true when it is Palindrome of mixed case with punctuation', function () {
            var result = palindrome.isPalindrome ( "A Toyota’s a Toyota." );
            assert.equal ( result, true );
        } );
        it ( 'should return true when it is Palindrome of mixed case and contains white space', function () {
            var result = palindrome.isPalindrome ( "A Toyota’s\n\r a Toyota." );
            assert.equal ( result, true );
        } );
    } );
} );