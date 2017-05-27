
/*Simple closure function which increments counter value on each call */
var counterFunction = (function () {
    var counter = 0;
    document.getElementById("lblCounter").innerText = "Counter value -"
    return function () {
        counter += 1;
        document.getElementById("lblCounter").innerText = document.getElementById("lblCounter").innerText + " " + counter;
        console.log(counter);
        return(counter);
    }
})();