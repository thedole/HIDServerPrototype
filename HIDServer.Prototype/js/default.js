// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application,
        activation = Windows.ApplicationModel.Activation,
        Devices = Windows.Devices,
        DeviceEnumeration = Devices.Enumeration;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize your application here.
            } else {
                // TODO: This application was suspended and then terminated.
                // To create a smooth user experience, restore application state here so that it looks like the app never stopped running.
            }
            args.setPromise(WinJS.UI.processAll().then(function(args) {
                DeviceEnumeration.DeviceInformation.findAllAsync(DeviceEnumeration.DeviceClass.all).done(function (devs) {
                    var len = devs.length,
                        deviceInfo,
			            line = [],
                        outputList = document.getElementById('output'),
                        li;

                    for (var i = len - 1; i >= 0; i--) {
                        deviceInfo = devs[i];
                        line.push(deviceInfo.name);
                        line.push(deviceInfo.kind);

                        li = document.createElement('li');
                        li.innerText = line.join(' - ');
                        outputList.appendChild(li);
                        line = [];
                    }
                });
            }));
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state that needs to persist across suspensions here.
        // You might use the WinJS.Application.sessionState object, which is automatically saved and restored across suspension.
        // If you need to complete an asynchronous operation before your application is suspended, call args.setPromise().
    };

    app.start();
})();
