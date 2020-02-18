$( document ).ready(function() {
    $("#first .btn-seta").on("click", function(){
        $("#second").removeClass("escondida-leftright");
        $("#second").addClass("start right");
        setTimeout(function(){
            $("#second .full").addClass("show");
        }, 100);
        
    });
});