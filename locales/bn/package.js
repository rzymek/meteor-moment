Package.describe({
    name: 'rzymek:moment-locale-bn',
    summary: "Moment.js bn locale. Companion package for rzymek:moment",
    version: "2.8.4",
    git: "https://github.com/rzymek/meteor-moment.git"
});

Package.onUse(function(api) {
    api.use('momentjs:moment@2.8.4'); 
    api.addFiles('server.js','server');
    api.addFiles('client.js','client');
    api.addFiles('locale.js');
    api.imply('momentjs:moment');
});
