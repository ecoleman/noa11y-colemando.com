const Panel = imports.ui.panel;
const Main = imports.ui.main;

idx = null;

function enable() {
    idx = Panel.STANDARD_STATUS_AREA_ORDER.indexOf("a11y");
	Main.panel._rightBox.get_children()[idx].destroy();
	// addToStatusArea would throw an error on disable if we don't set this to null 
	Main.panel._statusArea['a11y'] = null;
}

function disable() {
	let indicator = new Panel.STANDARD_STATUS_AREA_SHELL_IMPLEMENTATION["a11y"];
	Main.panel.addToStatusArea("a11y", indicator, idx);
}

function init() {
}