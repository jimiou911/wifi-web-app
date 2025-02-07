document.getElementById("scan").addEventListener("click", function() {
    if (!navigator.usb) {
        alert("WebUSB is not supported in this browser.");
        return;
    }

    navigator.usb.requestDevice({ filters: [] })
        .then(device => {
            console.log("Device found:", device);
            document.getElementById("network-list").innerHTML = "<li>Device detected, but network scan requires backend.</li>";
        })
        .catch(error => console.log("Error:", error));
});
