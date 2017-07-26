# Moment.js locales for Meteor

[Moment.js](http://momentjs.com/), a JavaScript date library for parsing, validating, manipulating, and formatting dates, packaged for Meteor.

These packages use the offical `momentjs:moment` Meteor package.

Locales:
-------------

To add a specific locale user

    meteor add rzymek:moment-locale-pl

The complete list of locales can be obtained by

    meteor search rzymek:moment-locale-.*

To add all locales use:

    meteor add rzymek:moment-locales

Note that locale specific package implies the core 'momentjs:moment', so you don't need to add it yourself.

Usage
-------------
Just like the [moment docs](http://momentjs.com/docs/) tell you:

    var now = moment();
