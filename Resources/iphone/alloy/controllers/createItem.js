function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function closeWindow() {
        Alloy.Globals.closeWindow($.createItemWindow);
    }
    function doOpen() {
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
    var rightNavButtons = [];
    $.__views.__alloyId1 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.DONE,
        id: "__alloyId1"
    });
    rightNavButtons.push($.__views.__alloyId1);
    closeWindow ? $.__views.__alloyId1.addEventListener("click", closeWindow) : __defers["$.__views.__alloyId1!click!closeWindow"] = true;
    $.__views.createItemWindow.rightNavButtons = rightNavButtons;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.createItemWindow.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.createItemWindow!open!doOpen"] && $.__views.createItemWindow.addEventListener("open", doOpen);
    __defers["$.__views.__alloyId1!click!closeWindow"] && $.__views.__alloyId1.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;