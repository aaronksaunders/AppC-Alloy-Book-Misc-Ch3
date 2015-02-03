function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId9(e) {
        if (e && e.fromAdapter) return;
        __alloyId9.opts || {};
        var models = filter(__alloyId8);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId5 = models[i];
            __alloyId5.__transform = transform(__alloyId5);
            var __alloyId7 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId5.__transform["title"] ? __alloyId5.__transform["title"] : __alloyId5.get("title"),
                modelId: "undefined" != typeof __alloyId5.__transform["id"] ? __alloyId5.__transform["id"] : __alloyId5.get("id")
            });
            rows.push(__alloyId7);
        }
        $.__views.table.setData(rows);
    }
    function transform(model) {
        var carObject = model.toJSON();
        var output = {
            title: carObject.model + " by " + carObject.make,
            id: model.cid
        };
        console.log(output);
        return output;
    }
    function filter(collection) {
        return collection.where({
            make: "Honda"
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "sharedhome";
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
    Alloy.Collections.instance("cars");
    $.__views.sharedhome = Ti.UI.createView({
        id: "sharedhome"
    });
    $.__views.sharedhome && $.addTopLevelView($.__views.sharedhome);
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.sharedhome.add($.__views.table);
    var __alloyId8 = Alloy.Collections["cars"] || cars;
    __alloyId8.on("fetch destroy change add remove reset", __alloyId9);
    exports.destroy = function() {
        __alloyId8.off("fetch destroy change add remove reset", __alloyId9);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    $.getView().addEventListener("close", function() {
        $.destroy();
    });
    $.table.addEventListener("click", function(_event) {
        var model = Alloy.Collections.cars.getByCid(_event.rowData.modelId);
        var detailWindowController = Alloy.createController("detailWindow", {
            data: model
        });
        Alloy.Globals.openWindow(detailWindowController.getView());
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;