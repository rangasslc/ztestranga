/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["barcodetest/project1/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
