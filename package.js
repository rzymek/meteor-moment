Package.describe({
  name: 'rzymek:moment-pl',
  summary: "Moment.js, a JavaScript date library for dates, packaged for Meteor. See http://momentjs.com.",
  version: "2.8.3_2",
  git: "https://github.com/rzymek/meteor-moment.git"
});

Package.onUse(function (api) {
  api.export('moment');
  api.addFiles('lib/moment/moment.js');
  api.addFiles('lib/moment/locale/en-gb.js', 'client');
  api.addFiles('lib/moment/locale/pl.js', 'client');
  api.addFiles('export-moment.js');
});

if (Package.on_test) {
  Package.on_test(function (api) {
    if (Package.onTest) {
      api.use(['mrt:moment@2.8.1', 'tinytest', 'test-helpers'], ['client', 'server']);
    } else {
      api.use(['moment', 'tinytest', 'test-helpers'], ['client', 'server']);
    }
    api.add_files('test-mrt:moment.js', ['client', 'server']);
  });
}
