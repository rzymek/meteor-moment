Package.describe({
    name: 'rzymek:moment-locale-et',
    summary: "Moment.js et locale. Companion package for rzymek:moment",
    version: "2.8.3_10",
    git: "https://github.com/rzymek/meteor-moment.git"
});

Package.onUse(function(api) {
    api.use('rzymek:moment@2.8.3_10'); 
    api.addFiles('../import.js', 'client');
    api.addFiles('../../moment/locale/et.js', 'client');
    api.imply('rzymek:moment');
});
