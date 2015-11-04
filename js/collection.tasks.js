/* Author: shoba - 11/03/2015 
Description :Backbone search and sort - collection
*/

myapp.collection.Tasks = Backbone.Collection.extend({
	currentStatus : function(status){
		return _(this.filter(function(data) {
		  	return data.get("completed") == status;
		}));
	},
	search : function(letters){
		if(letters == "") return this;
		
		var pattern = new RegExp(letters,"gi");
		return _(this.filter(function(data) {
		  	return pattern.test(data.get("name"));
		}));
	}
});


myapp.collection.tasks = new myapp.collection.Tasks([tasks1,tasks2,tasks3,tasks4,tasks5,tasks6,tasks7,tasks8,tasks9,tasks10,
tasks11,tasks12,tasks13,tasks14,tasks15,tasks16,tasks17,tasks18,tasks19,tasks20,
tasks21,tasks22,tasks23,tasks24,tasks25,tasks26,tasks27,tasks28,tasks29,tasks30,
tasks31,tasks32,tasks33,tasks34,tasks35,tasks36,tasks37,tasks38,tasks39,tasks40,
tasks41,tasks42,tasks43,tasks44,tasks45,tasks46,tasks47,tasks48,tasks49,tasks50,]);


