
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
        var element = $("#"+$($(e.target)[0]).attr("data-scroll"));
        element[0].scrollIntoView({ behavior: 'smooth' })
    });
}

$("document").ready(function() {
    main();
    landingPageButtonsScroll();
    $("body").scroll((e) => {
        console.log("scroll");
    })
})
