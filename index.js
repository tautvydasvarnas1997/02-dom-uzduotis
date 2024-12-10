// pirmas div

document.getElementById('pirma-antraste').innerHTML = 'Naujas pirmos antrastes tekstas';
document.getElementById('pirmas paragrafas').innerHTML = 'Naujas pakeistas pirmo paragrafo tekstas';

// antras div

console.log('ANTRAS DIV');

let tekstasIsParagrafo = document.getElementById('paragrafo-tekstas').innerHTML;
console.log('paimtas su innerHTML tekstas:', tekstasIsParagrafo);

let tekstasIsParagrafo2 = document.getElementById('paragrafo-tekstas').innerText;
console.log('paimtas su innerText tekstas:', tekstasIsParagrafo2);

console.log();

// trecias div

console.log('TRECIAS DIV');

console.log('innerHTML turinys:', document.getElementById('trecias').innerHTML);
console.log('innerText turinys:', document.getElementById('trecias').innerText);

console.log();

// septintas div

function pakeisti() {
    document.getElementById("septinto-tekstas").innerHTML = "naujas tekstas";
}

// astuntas div

function pakeisti2(elementas, tekstas) {
    document.getElementById(elementas).innerHTML = tekstas;
}