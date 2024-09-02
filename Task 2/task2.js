var light = prompt("Enter a color from traffic light.");
if (light == "Red" || light == "red"){
    console.log("Must Stop");
}
else if(light == "Yellow" || light == "yellow"){
        console.log("Ready to move");
}
else if(light == "Green" || light == "green"){
    console.log("Move Now");
}
else{
    console.log("Color not found");
}