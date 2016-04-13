Package.describe({
    name: 'rzymek:moment-locale-ms-my',
    summary: "Moment.js ms-my locale. Companion package for rzymek:moment",
    version: "2.12.0",
    documentation: '../../README.md',
    git: "https://github.com/rzymek/meteor-moment.git"
});

Package.onUse(function(api) {
    api.use('momentjs:moment@2.12.0'); 
    api.addFiles('server.js','server');
    api.addFiles('client.js','client');
    api.addFiles('locale.js');
    api.imply('momentjs:moment');
});
