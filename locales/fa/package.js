Package.describe({
    name: 'rzymek:moment-locale-fa',
    summary: "Moment.js fa locale. Companion package for rzymek:moment",
    version: "2.8.3_10",
    git: "https://github.com/rzymek/meteor-moment.git"
});

Package.onUse(function(api) {
    api.use('rzymek:moment@2.8.3_10'); 
    api.addFiles('../import.js', 'client');
    api.addFiles('../../moment/locale/fa.js', 'client');
    api.imply('rzymek:moment');
});
