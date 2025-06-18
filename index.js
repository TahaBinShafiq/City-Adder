var cities = [];
var list = document.getElementById("list");

function addToCity(){
    var city = prompt("Enter the city to add");
    cities.push(city);
    updateList();
}

function updateList(){
    list.innerHTML = "";
    for(var i = 0; i < cities.length; i++){
        list.innerHTML += `<li>${cities[i]}</li>`;
    }
}










