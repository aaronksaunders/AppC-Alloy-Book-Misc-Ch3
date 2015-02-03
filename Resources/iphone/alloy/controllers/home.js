function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
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
                title: "iOS Window"
            });
            Alloy.isTablet && _.extend(o, {
                title: "iPad Window"
            });
            _.extend(o, {
                id: "win"
            });
            return o;
        }());
        $.__views.sharedhome = Alloy.createController("sharedhome", {
            id: "sharedhome",
            __parentSymbol: $.__views.win
        });
        $.__views.sharedhome.setParent($.__views.win);
        $.__views.__alloyId10 = Ti.UI.createButton({
            title: "ADD",
            systemButton: Ti.UI.iPhone.SystemButton.ADD,
            id: "__alloyId10"
        });
        $.__views.win.rightNavButton = $.__views.__alloyId10;
        doAdd ? $.__views.__alloyId10.addEventListener("click", doAdd) : __defers["$.__views.__alloyId10!click!doAdd"] = true;
        $.__views.nav = Ti.UI.iOS.createNavigationWindow({
            window: $.__views.win,
            id: "nav"
        });
        $.__views.nav && $.addTopLevelView($.__views.nav);
    }
    if (Alloy.isTablet) {
        $.__views.win = Ti.UI.createWindow(function() {
            var o = {};
            _.extend(o, {
                backgroundColor: "#fff",
                orientationModes: [ Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT ]
            });
            Alloy.isHandheld && _.extend(o, {
                title: "iOS Window"
            });
            Alloy.isTablet && _.extend(o, {
                title: "iPad Window"
            });
            _.extend(o, {
                id: "win"
            });
            return o;
        }());
        $.__views.sharedhome = Alloy.createController("sharedhome", {
            id: "sharedhome",
            __parentSymbol: $.__views.win
        });
        $.__views.sharedhome.setParent($.__views.win);
        $.__views.__alloyId11 = Ti.UI.createButton({
            title: "ADD",
            systemButton: Ti.UI.iPhone.SystemButton.ADD,
            id: "__alloyId11"
        });
        $.__views.win.rightNavButton = $.__views.__alloyId11;
        doAdd ? $.__views.__alloyId11.addEventListener("click", doAdd) : __defers["$.__views.__alloyId11!click!doAdd"] = true;
        $.__views.nav = Ti.UI.iOS.createNavigationWindow({
            window: $.__views.win,
            id: "nav"
        });
        $.__views.nav && $.addTopLevelView($.__views.nav);
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
    __defers["$.__views.__alloyId10!click!doAdd"] && $.__views.__alloyId10.addEventListener("click", doAdd);
    __defers["$.__views.__alloyId11!click!doAdd"] && $.__views.__alloyId11.addEventListener("click", doAdd);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;