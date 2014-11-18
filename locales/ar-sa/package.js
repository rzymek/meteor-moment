Package.describe({
    name: 'rzymek:moment-locale-ar-sa',
    summary: "Moment.js ar-sa locale. Companion package for rzymek:moment",
    version: "2.8.3_10",
    git: "https://github.com/rzymek/meteor-moment.git"
});

Package.onUse(function(api) {
    api.use('rzymek:moment@2.8.3_10'); 
    api.addFiles('../import.js', 'client');
    api.addFiles('../../moment/locale/ar-sa.js', 'client');
    api.imply('rzymek:moment');
});
