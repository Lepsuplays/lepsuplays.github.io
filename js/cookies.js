// Cookie Names

// Cookies
// Color[number]

// Gets data from cookie
function getCookie(cookieName) {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Checs if cookie exists
// If it found data it returns dataFound but if not it returns empty
function checkCookie(cookieName) {
    let Cookie = getCookie(cookieName);
    if (Cookie != "") {
        return("dataFound")
    } else {
        return("empty")
    }
}

// Creates new cookie if cookies are allowed
function setCookie(cookieName, cookieValue, expirationDays) {
    var data = checkCookie("Cookies")
    if (cookieName === "Cookies") {
        data = "CookieAproved"
    }
    if (data != "empty") {
        const d = new Date();
        d.setTime(d.getTime() + (expirationDays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    }
}