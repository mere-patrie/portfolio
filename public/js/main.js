
function myAge(){
    const now = new Date();
    const birthDate = new Date(2005, 9, 14);
    const dateDiff = now.getTime() - birthDate.getTime();
    const myAge =  Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365.25));
    $("#myAge").text(myAge);
}

function landingPageButtonsScroll() {
    $("[data-scroll]").click((e) => {
        $("#"+$(e.target)[0].closest(".buttonGridButton").getAttribute("data-scroll"))[0].scrollIntoView({ behavior: 'smooth' })
    });
}

function main() {
    myAge();
}


$("document").ready(function() {
    main();
    landingPageButtonsScroll();
});

$("#pageContainer").scroll(function() {
    var opacity = ($("#landingPageLogo").parent().offset().top+$("#landingPageLogo").parent().innerHeight()/2)/($("#landingPageLogo").parent().height()/2);
    opacity = opacity >= 1 ? 1 : opacity;
    opacity = opacity <= 0 ? 0 : opacity;
    $("#landingPageLogo").css("opacity", opacity);
});