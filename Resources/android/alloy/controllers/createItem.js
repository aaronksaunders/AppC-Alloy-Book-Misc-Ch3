function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId1() {
        $.__views.createItemWindow.removeEventListener("open", __alloyId1);
        if ($.__views.createItemWindow.activity) {
            $.__views.createItemWindow.activity.actionBar.displayHomeAsUp = true;
            $.__views.createItemWindow.activity.actionBar.onHomeIconItemSelected = closeWindow;
        } else {
            Ti.API.warn("You attempted to access an Activity on a lightweight Window or other");
            Ti.API.warn("UI component which does not have an Android activity. Android Activities");
            Ti.API.warn("are valid with only windows in TabGroups or heavyweight Windows.");
        }
    }
    function closeWindow() {
        Alloy.Globals.closeWindow($.createItemWindow);
    }
    function doOpen() {
        var abx = require("com.alcoapps.actionbarextras");
        abx.setBackgroundColor("#dddddd");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "createItem";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.createItemWindow = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "createItemWindow",
        title: "Create Item"
    });
    $.__views.createItemWindow && $.addTopLevelView($.__views.createItemWindow);
    doOpen ? $.__views.createItemWindow.addEventListener("open", doOpen) : __defers["$.__views.createItemWindow!open!doOpen"] = true;
    $.__views.createItemWindow.addEventListener("open", __alloyId1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.createItemWindow.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.createItemWindow!open!doOpen"] && $.__views.createItemWindow.addEventListener("open", doOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;