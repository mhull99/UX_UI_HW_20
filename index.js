console.log("Your index.js file is loaded correctly!");

$(document).ready(function(){
    $(".tabContainer:first").show();
    $(".tabNav:first").addClass(".active");

    $(".tabNav:first").click(function(event){
        index= $(this).index();
        $(".tabNav li").removeClass("active");
        $(this).addClass("active");
        $(".tabContainer").hide();
        $(".tabContainer").eq(index).show();
    });
});

