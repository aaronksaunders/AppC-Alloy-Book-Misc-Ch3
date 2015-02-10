var args = arguments[0] || {};

function closeWindow(evt) {
	Alloy.Globals.closeWindow($.createItemWindow);
}

function doOpen(evt) {
	if (OS_ANDROID) {
		var abx = require('com.alcoapps.actionbarextras');
		abx.setBackgroundColor('#dddddd');
	}
}

//instance variable use in data binding to the model
//we do this here to trigger the events
//that will cause the data to be rendered
//$.car.set(args.data);

// free the model-view data binding resources when this
// view-controller closes
$.createItemWindow.addEventListener("close", function() {
	$.destroy();
});

function saveItem() {
	console.log("clicked save item " + $.makeText.value + " " + $.modelText.value);

	var carsCollection = Alloy.Collections.instance("cars");

	// because of binding, the list view will update automatically
	carsCollection.create({
		make : $.makeText.value,
		model : $.modelText.value
	});

	// close the window
	closeWindow();

}
