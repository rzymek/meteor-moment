Package.describe({
    name: 'rzymek:moment-locale-en-gb',
    summary: "Moment.js en-gb locale. Companion package for rzymek:moment",
    version: "2.8.3_10",
    git: "https://github.com/rzymek/meteor-moment.git"
});

Package.onUse(function(api) {
    api.use('rzymek:moment@2.8.3_10'); 
    api.addFiles('../import.js', 'client');
    api.addFiles('../../moment/locale/en-gb.js', 'client');
    api.imply('rzymek:moment');
});
