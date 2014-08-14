Package.describe({
  summary: "Moment.js, a JavaScript date library for parsing, validating, manipulating, and formatting dates, packaged for Meteor. See http://momentjs.com.",
  version: "2.8.1",
  git: "https://github.com/acreeger/meteor-moment.git"
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server'];
  if(api.export) {
    api.export('moment', where);
  }
  api.add_files('lib/moment/moment.js', where);
  api.add_files('export-moment.js', where);
});

if (Package.on_test) {
  Package.on_test(function (api) {
    api.use(['acreeger:moment', 'tinytest', 'test-helpers'], ['client', 'server']);
    api.add_files('test-acreeger:moment.js', ['client', 'server']);
  });
}
