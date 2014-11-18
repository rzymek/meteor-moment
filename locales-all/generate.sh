#!/bin/bash
set -e
cd `dirname $0`
version=`cat ../package.js |grep version|cut -d'"' -f2`
echo "
Package.describe({
    name: 'rzymek:moment-locales',
    summary: 'Moment.js all locales. Companion package for rzymek:moment',
    version: '$version',
    git: 'https://github.com/rzymek/meteor-moment.git'
});

Package.onUse(function(api) {
    api.use('rzymek:moment@$version'); 
    api.imply('rzymek:moment');
" > package.js
for d in ../locales/*/;do
    locale=`basename $d`
    echo "    api.use('rzymek:moment-locale-$locale@$version');" >> package.js
done
echo "});" >> package.js
