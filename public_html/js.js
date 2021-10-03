// const let var
var lenyek = [];
var osztalyokTanulok = [];
var menuSzoveg;

$(function () {

    $.ajax(
            {url: "osztalyokTanulok.json",
                success: function (result) {
                    osztalyokTanulok = result.osztalyok;
                    lenyek = result.allatlista;
                    console.log("ajax hivasban");
                    osztalyLegorduloMegjelenit();

                }
            }
    );
});
function osztalyLegorduloMegjelenit() {
    console.log(osztalyokTanulok[0]);
    $("article #osztaly2").append("<option >-</option>");
    for (const x in osztalyokTanulok[0]) {
        $("article #osztaly2").append("<option >" + x + "</option>");
    }

}
function megjelenit() {/*adatok megjelenitese*/
    let szoveg;
    $("section").empty();
        osztalyokTanulok[0][menuSzoveg].forEach((a)=>{
            console.log(a);
//        console.log(osztalyokTanulok[0][menuSzoveg][index]);
    });

//    for (var item in osztalyokTanulok[0][menuSzoveg]) {
//        console.log(osztalyokTanulok[0][menuSzoveg][item]);
//    }
//    for (var i = 0; i < osztalyokTanulok[0][menuSzoveg].length; i++) {
//        console.log(osztalyokTanulok[0][menuSzoveg][i]);
//    }
    console.log(menuSzoveg);
    $("section").append("<table></table>");
    szoveg = "<tr id='fejléc'><th>OSZTALY</th><th>TANULO</th><th>ALLAT1</th><th>ALLAT2</th><th>ALLAT3</th></tr>";
    for (var a in osztalyokTanulok[0][menuSzoveg]) {
        szoveg += "<tr id='" + a + "'>";

        szoveg += "<td id='" + a + "'>";
        szoveg += menuSzoveg;
//                    console.log(menuSzoveg);
        szoveg += "</td>";
        szoveg += "<td id='" + a + 1 + "'>";
        szoveg += osztalyokTanulok[0][menuSzoveg][a];
//                    console.log(osztalyokTanulok[0][menuSzoveg][i]);
        szoveg += "</td>";

        szoveg += randomSzamok();
        console.log(randomSzamok());

        console.log(" ");
        szoveg += "</tr>";
    }
//            for (var a = 0; a < osztalyokTanulok[0][menuSzoveg].length; a++) {
// 
//            }
    $("section table").append(szoveg);
}

function kattint() {
    var id = document.getElementById("osztaly2");
    menuSzoveg = id.options[id.selectedIndex].text;
    megjelenit();
}
function randomSzamok() {
    var kiegeszit = "";
    var randomSzamok = [];
    while (randomSzamok.length < 3) {
        var kijeloltSzam = Math.floor(Math.random() * lenyek.length);
        if (randomSzamok.indexOf(kijeloltSzam) === -1)
            randomSzamok.push(kijeloltSzam);
    }
    for (var i = 0; i < 3; i++) {
        kiegeszit += "<td id='" + randomSzamok[i] + "'>";
        kiegeszit += lenyek[randomSzamok[i]];
        kiegeszit += "</td>";
    }
    return kiegeszit;
}
