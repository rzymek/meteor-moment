function MomentLocaleLoader(api) {
  this.api = api;
  this.localePath = localePath;
  var fs = this.fs = Npm.require("fs");
  var path = this.path = Npm.require("path");

  var isRunningFromApp = fs.existsSync(path.resolve("packages"));
  var localePathPrefix = "";
  if (isRunningFromApp) {
    var momentPackageName = !!Package.onUse ? "mrt:moment" : "moment"
    localePathPrefix = path.resolve("packages", momentPackageName);
  }

  var localePath = path.resolve(localePathPrefix, "lib/moment/locale");
  if (!fs.existsSync(localePath)) {
    throw new Error("Could not resolve localePath: " + localePath);
  }
  this.localePath = localePath;
}

MomentLocaleLoader.prototype.loadFiles = function(clientLocales, serverLocales) {
  var self = this;

  function visit(folder, cb) {
    var folderContent = self.fs.readdirSync(folder);
    for (var i=0; i < folderContent.length; i++) {
      filename = folderContent[i]
      var absoluteFilename = self.path.join(folder, filename);
      var stat = self.fs.statSync(absoluteFilename);
      if(stat.isDirectory()){
        visit(absoluteFilename);
      } else{
        cb(absoluteFilename);
      }
    }
  }

  function createApiAddFunc(where) {
    return function(path) {
      self.api.add_files(path, where)
    }
  }

  if (clientLocales === "ALL") {
    visit(this.localePath, createApiAddFunc("client"));
  }
  if (serverLocales === "ALL") {
    visit(this.localePath, createApiAddFunc("server"));
  }
};

Package.describe({
  summary: "Moment.js, a JavaScript date library for dates, packaged for Meteor. See http://momentjs.com.",
  version: "2.8.1",
  git: "https://github.com/acreeger/meteor-moment.git"
});

Package.on_use(function (api, where) {
  var path = Npm.require("path");
  var fs = Npm.require("fs");

  where = where || ['client', 'server'];
  if(api.export) {
    api.export('moment', where);
  }
  api.add_files('lib/moment/moment.js', where);
  api.add_files('export-moment.js', where);

  var momentOptsString = process.env.METEOR_MOMENT_OPTS || "{}"
  var momentOpts = {clientLocales: ""};
  if (momentOptsString) {
    try{
      momentOpts = JSON.parse(momentOptsString);
    } catch(e) {
      console.error("Could not parse moment options: '%s':", momentOptsString, e);
    }
  }

  var localeLoader = new MomentLocaleLoader(api);
  //TODO: Loading on server not supported right now
  localeLoader.loadFiles(momentOpts.clientLocales, "");
});

if (Package.on_test) {
  Package.on_test(function (api) {
    var momentPackageName = !!Package.onUse ? "mrt:moment@2.8.1" : "moment"
    var localeLoader = new MomentLocaleLoader(api);

    api.use([momentPackageName, 'tinytest', 'test-helpers'], ['client', 'server']);

    //TODO: Loading on server not tested, because is not implemented
    localeLoader.loadFiles("ALL", "");

    api.add_files('test-mrt:moment.js', ['client', 'server']);
  });
}
