Package.describe({
    name: 'rzymek:moment',
    summary: "Moment.js, a JavaScript date library for dates, packaged for Meteor. See http://momentjs.com.",
    version: "2.8.3_3",
    git: "https://github.com/rzymek/meteor-moment.git"
});

Package.onUse(function(api) {
    api.export('moment');
    api.addFiles('moment/moment.js');
//    api.addFiles('moment/locale/en-gb.js', 'client');
//    api.addFiles('moment/locale/pl.js', 'client');
});
