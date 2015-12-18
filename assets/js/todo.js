/*jshint jquery: true*/
/*jslint browser: true, devel: true, sloppy: true*/
/*jshint browser: true, jquery: true*/
//Check off todos
$("ul").on("click", "li", function () { //when a li is clicked inside a ul. necessary for dynamicly added elements same for delete function
    $(this).toggleClass("selected");
});

$("ul").on("click", "span", function () { //on click of a span within a ul, run this event
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) { // 13 ist keycode für Enter taste
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
});
