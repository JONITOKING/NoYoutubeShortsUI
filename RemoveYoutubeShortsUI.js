let urlStringArray = window.location.href.split("/");
let destinationURL = "";

for (let i = 0; i < urlStringArray.length; i++) {
    if (urlStringArray[i] == "shorts"){
        urlStringArray[i] = "watch?v=";
        destinationURL += urlStringArray[i];
    }
    else
        destinationURL += urlStringArray[i] + "/";
}

window.location.replace(destinationURL);