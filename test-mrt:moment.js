//Tests
Tinytest.add('Moment can be initalized', function (test) {
  test.isNotNull(moment, 'moment should exist');
  test.isTrue(typeof(moment) === "function", 'moment should be a function');
});

Tinytest.add('Moment version is correct', function (test) {
  test.equal(moment.version, "2.8.1", 'moment version was not correct');
});

if (Meteor.isClient) {
  Tinytest.add('French locale is working correctly on the client', function (test) {
    var fr = moment().locale('fr');
    test.isNotNull(moment().locale("fr"), "'fr' locale was not loaded correctly")
    var testMoment = moment.utc("2013-12-01").locale("fr");
    test.equal(testMoment.format("dddd, MMMM Do YYYY"), "dimanche, décembre 1er 2013", "Moment can't speak french");
  });
}