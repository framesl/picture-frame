$(".dark-btn").click(
    function(){
        $(".container").toggleClass("dark");
        $(".box").toggleClass("dark");
    }
);
$(".spin-btn").click (
    function(){
        $(".box").toggleClass("spin");
    }
);
$(".reveal-btn").click(
    function(){
        // $(".dog").addClass("reveal");
        // $(".dog").css("display", "inline");
        $(".dog").show();
        $(".reveal-btn").hide();
    }
)

$(".draggable").draggable();
