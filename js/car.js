$("#close").click(function()
{
    $('.content .car').css({"transform":"scale(0)"});
    $('.content').addClass("scale");
    $('body').css({"overflow":"initial"});
});



class car
{
    constructor(selector)
    {
        this.selector = selector;
    }

    description()
    {
        return $(this.selector).parent("article").children("section");
        
    }
    
    image()
    {
        let  bi = $(this.selector).parent("article").children("div").css("background-image");
        let imageLink = bi.split(/"/)[1];
        console.log(bi,"\n",imageLink);
        return imageLink;
    }
    
    name()
    {
        return $(this.selector).parent("article").children(" h2").html();
    }

    fixe()
    {
        $(".car").children("#img-car")[0].style.backgroundImage = "url("+this.image()+")";
        $("#description").children("h2")[0].innerHTML= this.name();
        $("#description section").html(this.description().clone());
    }
    
}






$('.div input[type="button"]').click(function(){
    $('body').css("overflow","hidden")
    $('.content').removeClass("scale").css({"transform":"scale(1)"});
    $('.content .car').css({"transform":"scale(1)"});
    let c = new car(this);
    c.fixe();
});



document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        $('#close').click();
    }
};


