console.log(moment().toString());
if (Meteor.isClient) {
    Template.hello.helpers({
        moment: function() {
            return moment().locale('pl').format('LL');
        }
    });
}
