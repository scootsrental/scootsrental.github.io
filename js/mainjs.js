// Navetation Bar
function showMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function currentYear() {

    return document.write(new Date().getFullYear());
}

function adjustAmount(value) {
    document.getElementById("amountvalue").innerHTML = value;
}

function setConfMessage() {
    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);

    const fullName = urlParams.get('full_name');

    document.getElementById("name").innerHTML = fullName;

}

function loadJSON() {

    const request = new Request("../data/scooterinventory.json");

    fetch(request)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.log(jsonObject);
  
      });
}





