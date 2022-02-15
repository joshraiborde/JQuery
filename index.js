
    // $("h1").addClass("big-title margin-50");
    // manipulating classes

    // $("h1").text("Afternoon")
    // manipulating text

    // $("button").text("Don't Click Me!!!")
    // manipulating text

    // $("button").html("<em>Hey</em>")
    // manipulating html

    // $("img").attr("src")
    // manipulating attributes

    // $("a").attr("href", "https://www.yahoo.com")
    // manipulating attributes

    // adding Event Listeners using JQ
    // $("h1").click(function() {
    //     $("h1").css("color", "purple")
    // })

    // $("button").click(function(){
    //     $("h1").css("color","blue")
    // })

    // keydown event using JQ
    // $("input").keydown(function(event) {
    //     console.log(event.key)
    // })

    // keydown event for the entire page, not just the "input" using JQ
    $(document).keydown(function(event) {
         $("h1").text(event.key)
        // console.log(event.key)
    })
// or
// $(body).keydown(function(event) {
    // $("h1").text(event.key)
    // console.log(event.key)
// })


$("h1").on("mouseover", function() {
    $("h1").css("color", "orange")
   // console.log(event.key)
})

// $("button").on("click", function() {
//     $("h1").hide();
//     $("h1").show();
//     $("h1").toggle();
// });

// $("button").on("click", function() {
//     $("h1").fadeOut();
//     $("h1").fadeIn();
//     $("h1").fadeToggle();
// });

// $("button").on("click", function() {
    // $("h1").slideUp();
    // $("h1").slideOut();
    // $("h1").slideToggle();
// });

// $("button").on("click", function() {
//     $("h1").animate({opacity: 0.5});
// });

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
