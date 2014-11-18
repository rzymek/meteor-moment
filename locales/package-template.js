Package.describe({
    name: 'rzymek:moment-locale-{{locale}}',
    summary: "Moment.js {{locale}} locale. Companion package for rzymek:moment",
    version: "{{version}}",
    git: "https://github.com/rzymek/meteor-moment.git"
});

Package.onUse(function(api) {
    api.use('rzymek:moment@{{version}}'); 
    api.addFiles('../import.js', 'client');
    api.addFiles('../../moment/locale/{{locale}}.js', 'client');
    api.imply('rzymek:moment');
});
