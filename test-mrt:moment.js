//Tests
Tinytest.add('Moment can be initalized', function (test) {
  test.isNotNull(moment, 'moment should exist');
  test.isTrue(typeof(moment) === "function", 'moment should be a function');
});
