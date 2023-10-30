import {Sidebar, Links} from "../sitedata/links.js";

var counter = 0
var LinkNumber = 0
var Default = "mainPage"

function deleteLinkData() {
    document.getElementById("LinkArea").innerHTML = "";
}

document.body.addEventListener(onload, LoadData())

document.getElementById("SidebarItems").onclick = function(event) {
    if (event.target.innerText === "Gategory") {
        getData(Default)
    } else {
        getData(event.target.className);
    }
}

function getSidebar() {
    // Creates list item
    var item = document.createElement("li");
    // Gets text that is going to be shown and sets li element text
    var itemText = Sidebar.Gategories[counter];
    item.innerText = itemText;
    // Sets class name to element witch is used to get data
    item.className = Sidebar.Gategories[counter + 1]
    // Puts that item in sidebar
    document.getElementById("SidebarItems").appendChild(item)
    // updates counter
    counter = counter + 3
    // Calculates how many items sidebar show
    var numberOfGategories = Sidebar.Rows * 3 - 1
    // Checks if function has to be called again
    if (counter < numberOfGategories) {
        getSidebar()
    }
}

function getData(Gategory) {
    deleteLinkData()
    var requestCommand = "Links." + Gategory;
    // Header
    var item = document.createElement("h2");
    item.innerText = eval(requestCommand)[0].Header;
    document.getElementById("LinkArea").appendChild(item)
    // Description
    var item = document.createElement("p");
    item.innerText = eval(requestCommand)[0].Description;
    item.className = "LinkGategoryDescription";
    document.getElementById("LinkArea").appendChild(item)
    // Resets link number
    LinkNumber = 0
    // Calls next function
    GetLinks(requestCommand)
}

// Get links and creates element for each of them
function GetLinks(requestCommand) {
    // Data that is contains data of numder of links shown in website
    var NumberOfLinkElements = eval(requestCommand)[0].NumberOfLinks
    // Creates link element
    var item = document.createElement("a");
    item.innerText = eval(requestCommand)[0].linkItems[LinkNumber];
    item.href = eval(requestCommand)[0].linkItems[LinkNumber + 1];
    document.getElementById("LinkArea").appendChild(item)
    // Creates description element
    var item = document.createElement("p");
    item.innerText = eval(requestCommand)[0].linkItems[LinkNumber + 2];
    document.getElementById("LinkArea").appendChild(item)
    // Adds 3 to link number so it gets new link
    LinkNumber = LinkNumber + 3
    // Checks if function needs to be called again
    if (LinkNumber < NumberOfLinkElements) {
        GetLinks(requestCommand);
    }
}

// Function that is called onload
function LoadData() {
    // Calls function that updates sidebar
    getSidebar()
    // Calls funcrion that updates link area text
    getData(Default)
}