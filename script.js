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