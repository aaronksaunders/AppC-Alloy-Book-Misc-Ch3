var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        adapter: {
            type: "properties",
            collection_name: "cars"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

model = Alloy.M("cars", exports.definition, []);

collection = Alloy.C("cars", exports.definition, model);

exports.Model = model;

exports.Collection = collection;