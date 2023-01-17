function myAge(){
    const now = new Date();
    const birthDate = new Date(2005, 9, 14);
    const dateDiff = now.getTime() - birthDate.getTime();
    const myAge =  Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365.25));
    $("#myAge").text(myAge);
}

function landingPageButtonsScroll() {
    if(localStorage.getItem("section")){
        $(`#${localStorage.getItem("section")}`)[0].scrollIntoView({ behavior: 'smooth' });
    }
    $("[data-scroll]").click((e) => {
        $("#"+$(e.target)[0].closest(".buttonGridButton").getAttribute("data-scroll"))[0].scrollIntoView({ behavior: 'smooth' })
        localStorage.setItem('section', $(e.target)[0].closest(".buttonGridButton").getAttribute("data-scroll"));
    });
}

function main() {
    myAge();
}


$("document").ready(function() {
    main();
    landingPageButtonsScroll();
    scroll()
});

function scroll() {
    $("#pageContainer").scroll(function() {
        // Logo opacity
        var opacity = ($("#landingPageLogo").parent().offset().top+$("#landingPageLogo").parent().height()/2)/($("#landingPageLogo").parent().height()/2);
        opacity = opacity >= 1 ? 1 : opacity;
        opacity = opacity <= 0 ? 0 : opacity;
        $("#landingPageLogo").css("opacity", opacity);
        
        // Section url params
        var elements = [{name:"", position:0}];
        var goal = $("#pageContainer").scrollTop();
        
        // Appending every section name and position to array
        $("[data-scroll]").each(index => {
            var name = $("[data-scroll]")[index].getAttribute("data-scroll");
            var position = $("#"+name).height()*(index+1);
            elements.push({name:name, position:position})
        });
        
        // Getting closest section
        var closest = Object.values(elements).reduce(function(prev, curr) {
            return (Math.abs(curr.position - goal) < Math.abs(prev.position - goal) ? curr : prev);
        });
        
        // Setting the current section to localStorage
        if(localStorage.getItem("section") != closest.name){
            if(closest.name == ""){
                localStorage.removeItem("section");
            }else{
                localStorage.setItem("section", closest.name);
            }
        }
    });
}