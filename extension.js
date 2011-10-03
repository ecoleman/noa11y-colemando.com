const Panel = imports.ui.panel;
const Main = imports.ui.main;

function enable() {
	for (let i = 0; i < Main.panel._rightBox.get_children().length; i++) {
		if (Main.panel._statusArea['a11y'] == Main.panel._rightBox.get_children()[i]._delegate) {
			Main.panel._rightBox.get_children()[i].destroy();
			break;
		} 
	}
	// addToStatusArea would throw an error on disable if we don't set this to null 
	Main.panel._statusArea['a11y'] = null;
}

function disable() {
	let indicator = new Panel.STANDARD_STATUS_AREA_SHELL_IMPLEMENTATION["a11y"];
	Main.panel.addToStatusArea("a11y", indicator, Panel.STANDARD_STATUS_AREA_ORDER.indexOf('a11y'));
}

function init() {
}