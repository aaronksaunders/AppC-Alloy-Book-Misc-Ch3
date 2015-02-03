function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId13() {
        $.__views.win.removeEventListener("open", __alloyId13);
        if ($.__views.win.activity) ; else {
            Ti.API.warn("You attempted to access an Activity on a lightweight Window or other");
            Ti.API.warn("UI component which does not have an Android activity. Android Activities");
            Ti.API.warn("are valid with only windows in TabGroups or heavyweight Windows.");
        }
    }
    function __alloyId15() {
        $.__views.win.removeEventListener("open", __alloyId15);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId14 = {
                id: "closeitem",
                title: "Add",
                icon: Ti.Android.R.drawable.ic_menu_add,
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS
            };
            $.__views.closeitem = e.menu.add(_.pick(__alloyId14, Alloy.Android.menuItemCreateArgs));
            $.__views.closeitem.applyProperties(_.omit(__alloyId14, Alloy.Android.menuItemCreateArgs));
            doAdd ? $.__views.closeitem.addEventListener("click", doAdd) : __defers["$.__views.closeitem!click!doAdd"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function __alloyId17() {
        $.__views.win.removeEventListener("open", __alloyId17);
        if ($.__views.win.activity) ; else {
            Ti.API.warn("You attempted to access an Activity on a lightweight Window or other");
            Ti.API.warn("UI component which does not have an Android activity. Android Activities");
            Ti.API.warn("are valid with only windows in TabGroups or heavyweight Windows.");
        }
    }
    function __alloyId19() {
        $.__views.win.removeEventListener("open", __alloyId19);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId18 = {
                id: "closeitem",
                title: "Add",
                icon: Ti.Android.R.drawable.ic_menu_add,
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS
            };
            $.__views.closeitem = e.menu.add(_.pick(__alloyId18, Alloy.Android.menuItemCreateArgs));
            $.__views.closeitem.applyProperties(_.omit(__alloyId18, Alloy.Android.menuItemCreateArgs));
            doAdd ? $.__views.closeitem.addEventListener("click", doAdd) : __defers["$.__views.closeitem!click!doAdd"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function doOpen() {
        var abx = require("com.alcoapps.actionbarextras");
        abx.setBackgroundColor("#dddddd");
    }
    function doAdd(evt) {
        console.debug(JSON.stringify(evt));
        var controller = Alloy.createController("createItem");
        var view = controller.getView();
        Alloy.Globals.openWindow(view, true);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
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
    if (!Alloy.isTablet) {
        $.__views.win = Ti.UI.createWindow(function() {
            var o = {};
            _.extend(o, {
                backgroundColor: "#fff",
                orientationModes: [ Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT ]
            });
            Alloy.isHandheld && _.extend(o, {
                title: "Android Window"
            });
            Alloy.isTablet && _.extend(o, {
                title: "Android Tablet Window"
            });
            _.extend(o, {
                id: "win"
            });
            return o;
        }());
        $.__views.win && $.addTopLevelView($.__views.win);
        doOpen ? $.__views.win.addEventListener("open", doOpen) : __defers["$.__views.win!open!doOpen"] = true;
        $.__views.win.addEventListener("open", __alloyId13);
        $.__views.win.addEventListener("open", __alloyId15);
        $.__views.sharedhome = Alloy.createController("sharedhome", {
            id: "sharedhome",
            __parentSymbol: $.__views.win
        });
        $.__views.sharedhome.setParent($.__views.win);
    }
    if (Alloy.isTablet) {
        $.__views.win = Ti.UI.createWindow(function() {
            var o = {};
            _.extend(o, {
                backgroundColor: "#fff",
                orientationModes: [ Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT ]
            });
            Alloy.isHandheld && _.extend(o, {
                title: "Android Window"
            });
            Alloy.isTablet && _.extend(o, {
                title: "Android Tablet Window"
            });
            _.extend(o, {
                id: "win"
            });
            return o;
        }());
        $.__views.win && $.addTopLevelView($.__views.win);
        doOpen ? $.__views.win.addEventListener("open", doOpen) : __defers["$.__views.win!open!doOpen"] = true;
        $.__views.win.addEventListener("open", __alloyId17);
        $.__views.win.addEventListener("open", __alloyId19);
        $.__views.sharedhome = Alloy.createController("sharedhome", {
            id: "sharedhome",
            __parentSymbol: $.__views.win
        });
        $.__views.sharedhome.setParent($.__views.win);
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    Alloy.Collections.instance("cars");
    Alloy.Collections.cars.reset([ {
        make: "Honda",
        model: "Civic"
    }, {
        make: "Honda",
        model: "Accord"
    }, {
        make: "Ford",
        model: "Escape"
    }, {
        make: "Ford",
        model: "Mustang"
    }, {
        make: "Nissan",
        model: "Altima"
    } ]);
    Alloy.isTablet || __defers["$.__views.win!open!doOpen"] && $.__views.win.addEventListener("open", doOpen);
    __defers["$.__views.closeitem!click!doAdd"] && $.__views.closeitem.addEventListener("click", doAdd);
    Alloy.isTablet && __defers["$.__views.win!open!doOpen"] && $.__views.win.addEventListener("open", doOpen);
    __defers["$.__views.closeitem!click!doAdd"] && $.__views.closeitem.addEventListener("click", doAdd);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;