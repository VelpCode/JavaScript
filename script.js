
document.getElementById("rollButton").onclick = function() {
    let x = Math.floor(Math.random() * 6) + 1;
    let y = Math.floor(Math.random() * 6) + 1;
    let z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xaxis").innerHTML = x;
    document.getElementById("yaxis").innerHTML = y;
    document.getElementById("zaxis").innerHTML = z;

}
