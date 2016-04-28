function toggleStatus(enabled) {
    var status = window.document.getElementById("dnt-" + enabled);
    var waiting = window.document.getElementById("dnt-waiting");
    waiting.classList.add("hidden");
    status.classList.remove("hidden");
}

if (navigator.doNotTrack == "yes" || navigator.doNotTrack == "1") {
    toggleStatus("on");
} else {
    toggleStatus("off");
}
