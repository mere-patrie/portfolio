
function myAge(){
    const now = new Date();
    const birthDate = new Date(2005, 9, 14);
    const dateDiff = now.getTime() - birthDate.getTime();
    const myAge =  Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365.25));
    $("#myAge").text(myAge);
}

function logoScrollEffect (){
    $("#landingPageLogo");
}

function main() {
    myAge();
}

function landingPageButtonsScroll() {
    $("[data-scroll]").click((e) => {
        $("#"+$(e.target)[0].closest(".buttonGridButton").getAttribute("data-scroll"))[0].scrollIntoView({ behavior: 'smooth' })
    });
}

$("document").ready(function() {
    main();
    landingPageButtonsScroll();
});

// $(window).scroll(function(e) {
//     $("#landingPageLogo").css("bottom", (window.pageYOffset)+$("#landingPageLogo").parent().innerHeight()*0.3);
// });