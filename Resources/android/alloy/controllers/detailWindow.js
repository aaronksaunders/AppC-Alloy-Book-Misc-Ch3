function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId3() {
        $.__views.detailWindow.removeEventListener("open", __alloyId3);
        if ($.__views.detailWindow.activity) {
            $.__views.detailWindow.activity.actionBar.displayHomeAsUp = true;
            $.__views.detailWindow.activity.actionBar.onHomeIconItemSelected = closeWindow;
        } else {
            Ti.API.warn("You attempted to access an Activity on a lightweight Window or other");
            Ti.API.warn("UI component which does not have an Android activity. Android Activities");
            Ti.API.warn("are valid with only windows in TabGroups or heavyweight Windows.");
        }
    }
    function closeWindow() {
        $.detailWindow.close();
    }
    function doOpen() {
        var abx = require("com.alcoapps.actionbarextras");
        abx.setBackgroundColor("#dddddd");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detailWindow";
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
    $.car = Alloy.createModel("cars");
    $.__views.detailWindow = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT ],
        title: "Car Detail Window",
        layout: "vertical",
        modal: true,
        id: "detailWindow",
        model: "$.car"
    });
    $.__views.detailWindow && $.addTopLevelView($.__views.detailWindow);
    doOpen ? $.__views.detailWindow.addEventListener("open", doOpen) : __defers["$.__views.detailWindow!open!doOpen"] = true;
    $.__views.detailWindow.addEventListener("open", __alloyId3);
    $.__views.make_lbl = Ti.UI.createLabel({
        top: 10,
        textAlign: "center",
        font: {
            fontWeight: "bold",
            fontSize: 18
        },
        color: "#000",
        height: Ti.UI.SIZE,
        id: "make_lbl"
    });
    $.__views.detailWindow.add($.__views.make_lbl);
    $.__views.model_lbl = Ti.UI.createLabel({
        top: 10,
        textAlign: "center",
        font: {
            fontWeight: "bold",
            fontSize: 18
        },
        color: "#000",
        height: Ti.UI.SIZE,
        id: "model_lbl"
    });
    $.__views.detailWindow.add($.__views.model_lbl);
    var __alloyId4 = function() {
        $.make_lbl.text = _.isFunction($.car.transform) ? $.car.transform()["make"] : _.template("<%=car.make%>", {
            car: $.car.toJSON()
        });
        $.model_lbl.text = _.isFunction($.car.transform) ? $.car.transform()["model"] : _.template("<%=car.model%>", {
            car: $.car.toJSON()
        });
    };
    $.car.on("fetch change destroy", __alloyId4);
    exports.destroy = function() {
        $.car.off("fetch change destroy", __alloyId4);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.car.set(args.data);
    $.detailWindow.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.detailWindow!open!doOpen"] && $.__views.detailWindow.addEventListener("open", doOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;