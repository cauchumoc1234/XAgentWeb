$(document).ready(function(){
    $("#search-btn").click(function(){
        $("#search-box").fadeToggle("slow")
    })
    $(".navbtn").click(function(){
        
        $(".main").toggle("slow");
    })
    $(window).resize(function(){
        if(window.outerWidth > 767){
            $(".main").css("display","flex")
        }
        else
        {
            $(".main").css("display","none")
        } 
    })
})