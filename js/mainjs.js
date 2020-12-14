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

            jsonObject.rentalTypeList.forEach(element => {


                divCatalogue = document.queryCommandValue('div.catalogue');

                let divImage = document.createElement("div");

                let figure = document.createElement("figure");
                let img = document.createElement("img");

                let figcaption = document.createElement("figcaption");
                figcaption.innerHTML = element.rentalType;


                figure.appendChild(img);
                figure.appendChild(figcaption);

                divImage.appendChild(figure);

                let table = document.createElement("table");
                let thead = document.createElement("thead");
                let thead_tr = document.createElement("tr");
                let thead_tr_th = document.createElement("th");

                thead_tr_th.innerHTML = "Pricing";
                thead_tr_th.style.columnSpan = "3";
                thead_tr.appendChild(thead_tr_th);
                thead.appendChild(thead_tr);

                let tbody = document.createElement("tbody");
                let tbody_tr1 = document.createElement("tr");
                let reservationHalfDay = document.createElement("th");
                let reservationHalfDayPrice = document.createElement("th");

                tbody_tr1.appendChild(reservationHalfDayPrice);
                tbody_tr1.appendChild(reservationHalfDay);

                let tbody_tr2 = document.createElement("tr");
                let reservationFullDay = document.createElement("th");
                let reservationFullDayPrice = document.createElement("th");

                tbody_tr2.appendChild(reservationFullDayPrice);
                tbody_tr2.appendChild(reservationFullDay);

                let tbody_tr3 = document.createElement("tr");
                let walkInHalfDay = document.createElement("th");
                let walkInHalfDayPrice = document.createElement("th");

                tbody_tr3.appendChild(walkInHalfDayPrice);
                tbody_tr3.appendChild(walkInHalfDay);

                let tbody_tr4 = document.createElement("tr");
                let walkInFullDay = document.createElement("th");
                let walkInFullDayPrice = document.createElement("th");

                tbody_tr4.appendChild(walkInFullDayPrice);
                tbody_tr4.appendChild(walkInFullDay);

                tbody.appendChild(tbody_tr1);
                tbody.appendChild(tbody_tr2);
                tbody.appendChild(tbody_tr3);
                tbody.appendChild(tbody_tr4);

                table.appendChild(thead);
                table.appendChild(tbody);

                divImage.appendChild(table);
                divCatalogue.appendChild(divImage);
            });


        });
}





