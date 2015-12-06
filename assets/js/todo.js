/*jslint browser: true, devel: true, sloppy: true*/
/*jshint browser: true, jquery: true*/
//Check off todos
$("li").click(function () {
    $(this).toggleClass("selected");
});
