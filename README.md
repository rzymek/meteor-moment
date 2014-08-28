# Moment v2.8.1 for Meteor [![Build Status](https://travis-ci.org/acreeger/meteor-moment.svg?branch=master)](https://travis-ci.org/acreeger/meteor-moment)

[Moment.js](http://momentjs.com/), a JavaScript date library for parsing, validating, manipulating, and formatting dates, packaged for Meteor.

Installation
-------------

For Meteor v0.9.0 and above:
`meteor add mrt:moment`

For Meteor versions below v0.9.0 using Meteorite/AtmosphereJS:
`mrt add moment`

Usage
-------------
Just like the [moment docs](http://momentjs.com/docs/) tell you:

`var oneMomentPlease = moment();`

Locales
--------------
To send all moment locales to the client, set the following environment variables:

`METEOR_MOMENT_OPTS='{"clientLocales":"ALL"}'`

### Limitations:

* Locales are currently not supported on the server. This is due to the locales explicitly asking for the "window" object.
* In the future, I'd like to load only select locales. However, for now, it must remain a dream. Or a future pull request from one of you lovely people. That would be nice.

### Known Issues
* There seems to be some kind of caching of packaged files going on. If you toggle loading of locale files and restaart the server, there are times when the locales will load when not requested, and vice versa.