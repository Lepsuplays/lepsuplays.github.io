// Functio that toggles element visibility using id
function toggleVisibility(targetId, hidden, visible) {
    var target = document.getElementById(targetId);
    if (target.style.display === visible) {
        target.style.display = hidden;
    }
    else {
        target.style.display = visible;
    }
}

// Functio that sets element visibility using id
function setVisibility(targetId, visibility) {
    var target = document.getElementById(targetId);
    target.style.display = visibility;
}

// Allow cookies
function allowCookies() {
    setCookie("Cookies", "allowed", 180)
    setVisibility("Cookies", "none")
}