//controllers/home.js

/*
 Even though your Views are platform-specific, you can still keep your controllers cross-platform.
 This controller will be used for your home View regardless of the platform, so you'll have to
 manually check in case you need to perform platform-specific operations
 */

var args = arguments[0] || {};

//defining the collection in the controller rather than the view
Alloy.Collections.instance("cars");

// delete all of the items, this is to clean up objects
// from the previous run of the application.
//
// Need to loop backwards through the loop since it is an
// Array of models
Alloy.Collections.cars.fetch({
	success : function(_response) {

		// loop through and destroy all models
		for (var i = _response.models.length; i--; ) {
			_response.models[i].destroy();
		}

		// after deleting everything, add the new models
		addNewModels();
	}
});

/**
 * add the sample data to the list
 */
function addNewModels() {
	//add the data to the collection after the  view-controller pair is created
	var DEFAULT_CAR_DATA = [{
		"make" : "Honda",
		"model" : "Civic"
	}, {
		"make" : "Honda",
		"model" : "Accord"
	}, {
		"make" : "Ford",
		"model" : "Escape"
	}, {
		"make" : "Ford",
		"model" : "Mustang"
	}, {
		"make" : "Nissan",
		"model" : "Altima"
	}];

	// use underscore for looping through array to create a new model
	// and add it to the collection for the sample
	_.each(DEFAULT_CAR_DATA, function(_item) {
		Alloy.Collections.cars.create(_item);
	});
}

function doOpen(evt) {
	if (OS_ANDROID) {
		var abx = require('com.alcoapps.actionbarextras');
		abx.setBackgroundColor('#dddddd');
	}
}

function doAdd(evt) {
	var controller = Alloy.createController('createItem', {
		parent : $.sharedhome
	});
	var view = controller.getView();

	Alloy.Globals.openWindow(view, true);
}
