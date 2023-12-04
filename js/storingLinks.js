var linkData

// function that handles contains linkItems info
function updateLinkData() {
    linkData = [];
    var data = checkCookie("Links")
    if (data != "empty") {
        data = getCookie("Links");
        var rawData = JSON.parse(data);
        linkData = rawData.linkItems
    }
}

updateLinkData();

// Add Link
document.getElementById("AddNewLinkButton").addEventListener("click", function() {
    // Link input fields
    var link = document.getElementById("Link").value;
    var linkHeader = document.getElementById("LinkHeader").value;
    var linkDesc = document.getElementById("LinkDesc").value;

    // Checks and corrects if input field is empty
    if (link != "") {
        if (linkHeader === "") {
            linkHeader = link
        }
        if (linkDesc === "") {
            linkDesc = " "
        }
        
        // Formats data
        linkData.push(linkHeader, link, linkDesc);
        var UserLinks = {
            "NumberOfLinks": linkData.length,
            "Header": "My Links",
            "Description": "Theese are localy stored links that you have added",
            "linkItems": linkData
        }

        // Stores data
        var storeableData = JSON.stringify(UserLinks);
        setCookie("Links", storeableData, 100000)
        // Empties all input fields
        document.getElementById("Link").value = "";
        document.getElementById("LinkHeader").value = "";
        document.getElementById("LinkDesc").value = "";
    }
})

// Function that empties link input fields
document.getElementById("CancelNewLinkButton").addEventListener("click", function() {
    document.getElementById("Link").value = "";
    document.getElementById("LinkHeader").value = "";
    document.getElementById("LinkDesc").value = "";
})