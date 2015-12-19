(function() {
    "use strict";

    var deviceInfos = [],
        listView = new WinJS.Binding.List(deviceInfos),
        Devices = Windows.Devices,
        DeviceEnumeration = Devices.Enumeration;

    WinJS.Namespace.define("HIDServer.Prototype.Devices", { list: listView });


    DeviceEnumeration.DeviceInformation.findAllAsync(DeviceEnumeration.DeviceClass.all).done(function (devs) {
        var len = devs.length;
        for (var i = len - 1; i >= 0; i--) {
            listView.push({ name: devs[i].name, kind: devs[i].kind });
        }
    });
})()