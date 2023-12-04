// Guide !!!
// When you add new section of links you also have to add it in here
// Rows tells website how many rows are showd in sidebar.
// Gatogories contains data witch is in format ["Side bar item name", "Section name", "subgategory name"]
// and after that last one you can put column and resume the pattern again and again.

// IMPORTANT subgategory functional is not ready so use false

// Data that is showed in sidebar
var Sidebar = {
    "Rows": 6,
    "Gategories": [
        "mainpage", "mainPage", "false",
        "Used Resourses", "usedResources", "false",
        "Games", "games", "false",
        "Tools", "tools", "false",
        "Fun stuff", "funStuff", "false",
        "My Websites", "mySites", "false"
    ]
}



// Guide !!!
// When you want to create new section you put it after last square bracets.
// NumberOfLinks means how many text boxes are in linkItems section
// Header is displayed top of all links
// Description is text that is displayed under header and top of first link
// LinkItems is made with format ["Displayed text", "link", "Description for the link"] and
// after that last one you can put column and resume the pattern again and again.
// REMEMBER TO CHANGE NumberOfLinks. Otherwise your links won't be displayed!


// Data that is shown in website
var Links = {
    "mainPage": [
        {
            "NumberOfLinks": 21,
            "Header": "Main",
            "Description": "Theese are links that i use most.",
            "linkItems": ["Youtube", "https://www.youtube.com/", "Place where you can watch videos.",
            "Docker hub", "https://hub.docker.com/", "Place where you can find docker containers.",
            "w3schools", "https://www.w3schools.com/html/default.asp", "Place where you can find data for difrent programming languages",
            "FiveM Natives", "https://docs.fivem.net/natives/", "Place where you can find all FiveM natives.",
            "Printables", "https://www.printables.com/", "",
            "Thingiverse", "https://www.thingiverse.com/", "Place where you can download 3D models for 3D printing",
            "App Inventor", "https://appinventor.mit.edu/", "Web software that lets you create android aplications with scratch programming language."]
        }
    ],
    "usedResources": [
        {
            "NumberOfLinks": 9,
            "Header": "Used resources",
            "Description": "Theese are links to resourses that i have been using and want to support.",
            "linkItems": ["Stablediffusion", "https://github.com/vladmandic/automatic", "Stabledíffusion build that i have been using.", 
            "Stablediffusion installation guide", "https://rentry.co/GUItard", "Guide that i used when i installed stabblediffusion",
            "CivitAi","https://civitai.com/models", "Place where you can download difrent stablediffusion models.",
            "EXO Rifter aplication", "https://bit.ly/2Jw3mrG", "Application for EXO Rifter gaming mouse"]
        }
    ],
    "games": [
        {
            "NumberOfLinks": 33,
            "Header": "Games",
            "Description": "Difrent games or mod sites for games.",
            "linkItems": ["Aternos", "https://aternos.org/", "Website that allows you to host your minecraft server for free.",
            "Optifine", "https://www.optifine.net/home", "Mod for minecraft that allows difrent additional features and game optimisation.",
            "Krunker", "https://krunker.io/", "First person shooter game that you can play on your web browser or download it from steam.",
            "1vs1.lol", "https://1v1.lol/", "Free batleroyale game that you can play in your web browser.",
            "Gta guesser", "https://gtaguessr.com/", "Fun little game that makes GTA V GeoGuesser",
            "Farming Simulator mods", "https://www.farming-simulator.com/mods.php", "Place where you can download mods for difrent farming simulator games",
            "Nexusmods", "https://www.nexusmods.com/", "Place where you can download mods for difrent games.",
            "Racedepartment", "https://www.racedepartment.com/", "Racedepartment is place where you can download mods for diffrent games.",
            "Reshade", "https://reshade.me/", "Main program that has to be downloaded to be able to use following scripts.", 
            "Reshade Zoom", "https://github.com/mhgar/ReShade-Magnifier", "Reshade zoom script", 
            "Reshade xhair", "https://github.com/notpeelz/reshade-xhair", "Reshade xhair script"]
        }
    ],
    "tools": [
        {
            "NumberOfLinks": 33,
            "Header": "Tools and softwares",
            "Description": "Tools that i have been using and can suggest.",
            "linkItems": ["Visual Studio Code", "https://code.visualstudio.com/", "Code editor that i use.",
            "WinSCP", "https://winscp.net/eng/index.php", "WinSCP is file server client that you can use to move files to your server.",
            "Discord", "https://discord.com/", "Great message aplication that supports cross platform.",
            "ZoomIt", "https://learn.microsoft.com/en-us/sysinternals/downloads/zoomit", "Program that lets you zoom in on your screen and do markings.",
            "OBS Studio", "https://obsproject.com/", "Easy to use screen recording software.",
            "Blender", "https://www.blender.org/", "3D modeling software where you can make many animations or 3D models.",
            "TinkerCAD", "https://www.tinkercad.com/", "Easy to use 3D modeling software.",
            "OpenSCAD", "https://openscad.org/", "3D modeling usin SCAD programming language.",
            "ChatGPT", "https://chat.openai.com/", "Free to use chatbot ai.",
            "Playground AI", "https://playgroundai.com/", "Free to use ai image generator website.",
            "Leonardo AI", "https://leonardo.ai/", "Free to use ai image generaator website."]
        }
    ],
    "funStuff": [
        {
            "NumberOfLinks": 6,
            "Header": "Fun stuff",
            "Description": "All kinds of fun styff that you can play with",
            "linkItems": ["Minecraft font", "https://github.com/IdreesInc/Monocraft", "Github repository that contains minecraft font and you can download and use it.",
            "True Size", "https://www.thetruesize.com/", "World map site"
            ]
        }
    ],
    "mySites": [
        {
            "NumberOfLinks": 3,
            "Header": "My websites",
            "Description": "Websites created by lepsuplays",
            "linkItems": ["Make Text Big", "https://lepsuplays.github.io/MakeTextBig/", "Simple website that shows inputed text bigger."]
        }
    ]
};

export {Sidebar, Links}