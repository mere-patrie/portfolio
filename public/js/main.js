
function myAge(){
    const now = new Date();
    const birthDate = new Date(2005, 9, 14);
    const dateDiff = now.getTime() - birthDate.getTime();
    const myAge =  Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365.25));
    $("#myAge").text(myAge);
}

function logoScrollEffect (){
    $("#landingPageLogo")
}

function main() {
    myAge();
}

$("document").ready(function() {
    main();
    $("body").scroll((e) => {
        console.log("scroll");
    })
})
