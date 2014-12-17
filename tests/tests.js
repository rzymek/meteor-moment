Meteor.startup(function(){
	var s = moment().locale('pl').format('LL');
	console.log(s);
});
