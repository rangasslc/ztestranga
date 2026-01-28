sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ndc/BarcodeScanner",
    "sap/m/MessageToast"
], (Controller, BarcodeScanner, MessageToast) => {
    "use strict";

    return Controller.extend("barcodetest.project1.controller.View1", {
        onInit() {
        },

        onScan: function () {
            BarcodeScanner.scan(
                function (mResult) {
                    debugger;
                    if (!mResult.cancelled) {
                        this.getView().byId("idBarcodeField").setValue(mResult.text);
                        MessageToast.show("Scan successful: " + mResult.format);
                    } else {
                        MessageToast.show("Scanning cancelled.");
                    }
                }.bind(this),

                function (mError) {
                    MessageToast.show("Scanning failed: " + mError);
                },

                function (mLiveResult) {
                    // Optional: Intermediate live updates while scanning
                }
            );
        }
    });
});