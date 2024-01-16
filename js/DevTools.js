import {Fonts, Colors} from "../sitedata/DevToolsData.js";

document.body.onload = function(){document.getElementById("Fonts").click();}

document.getElementById("Fonts").addEventListener("click", function() {
    document.getElementById("DataArea").innerHTML = "";
    var NumberOfFonts = Fonts.Data.length
    var Counter = 0
    var Header = document.createElement("h1");
    Header.innerText = Fonts.Header;
    Header.classList.add("GategoryHeader")
    document.getElementById("DataArea").appendChild(Header);


    while (Counter < NumberOfFonts) {
        var FontName = document.createElement("h2")
        FontName.innerText = Fonts.Data[Counter];
        FontName.classList.add("FontNames")
        document.getElementById("DataArea").appendChild(FontName)

        var FontShowcase = document.createElement("p");
        FontShowcase.classList.add("FontShowcase")
        FontShowcase.style.fontFamily = Fonts.Data[Counter];
        FontShowcase.innerText = "This is an example text that shows you how this amazing font look.";
        document.getElementById("DataArea").appendChild(FontShowcase)

        // Font description
        var FontShowcase = document.createElement("p");
        FontShowcase.classList.add("FontDescription")
        FontShowcase.innerText = Fonts.Data[Counter + 1];
        document.getElementById("DataArea").appendChild(FontShowcase)


        Counter = Counter + 2
    }
})


document.getElementById("Colors").addEventListener("click", function() {
    document.getElementById("DataArea").innerHTML = ""
    var NumberOfColors = Colors.Data.length
    var Counter = 0
    var Header = document.createElement("h1");
    Header.innerText = Colors.Header;
    Header.classList.add("GategoryHeader")
    document.getElementById("DataArea").appendChild(Header);


    while (Counter < NumberOfColors) {
        var ColorBox = document.createElement("div");
        ColorBox.classList.add("ColorBox")
        ColorBox.style.backgroundColor = Colors.Data[Counter]
        
        var ColorLabel = document.createElement("label");
        ColorLabel.innerText = Colors.Data[Counter];
        ColorBox.appendChild(ColorLabel)

        document.getElementById("DataArea").appendChild(ColorBox);

        var ColorDescription = document.createElement("p");
        ColorDescription.classList.add("ColorDescription")
        ColorDescription.innerText = Colors.Data[Counter + 1];
        document.getElementById("DataArea").appendChild(ColorDescription);
        Counter = Counter + 2
    }
})