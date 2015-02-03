var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.navWindow = null;

Alloy.Globals.openWindow = function(_window, _modal) {
    console.debug(Ti.Android, _modal);
    if (Ti.Android) _window.open({
        modal: _modal
    }); else if (!_modal && Alloy.Globals.navWindow) Alloy.Globals.navWindow.openWindow(_window); else if (_modal) {
        Alloy.Globals.modalNavWindow = Titanium.UI.iOS.createNavigationWindow({
            window: _window
        });
        Alloy.Globals.modalNavWindow.open({
            modal: _modal
        });
    } else _window.open({
        modal: _modal
    });
};

Alloy.Globals.closeWindow = function(_window) {
    if (Alloy.Globals.modalNavWindow) {
        Alloy.Globals.modalNavWindow.close();
        _window = null;
        Alloy.Globals.modalNavWindow = null;
    } else if (Alloy.Globals.navWindow) {
        Alloy.Globals.navWindow.closeWindow(_window);
        _window = null;
    } else {
        _window.close();
        _window = null;
    }
};

Alloy.createController("index");