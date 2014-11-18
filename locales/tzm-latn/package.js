Package.describe({
    name: 'rzymek:moment-locale-tzm-latn',
    summary: "Moment.js tzm-latn locale. Companion package for rzymek:moment",
    version: "2.8.3_10",
    git: "https://github.com/rzymek/meteor-moment.git"
});

Package.onUse(function(api) {
    api.use('rzymek:moment@2.8.3_10'); 
    api.addFiles('../import.js', 'client');
    api.addFiles('../../moment/locale/tzm-latn.js', 'client');
    api.imply('rzymek:moment');
});
