/*
Script: Request.JSON.js
	Extends the basic Request Class with additional methods for sending and receiving JSON data.

License:
	MIT-style license.
*/

Request.JSON = new Class({

	Extends: Request,

	options: {
		secure: true
	},

	initialize: function(options){
		this.parent(options);
		this.getOption('headers')['Accept'] = 'application/json';
		this.getOption('headers')['X-Request'] = 'JSON';
	}.protect(),

	success: function(text){
		this.response.json = JSON.decode(text, this.getOption('secure'));
		this.onSuccess(this.response.json, text);
	}.protect()

});
