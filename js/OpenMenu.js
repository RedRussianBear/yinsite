$("#hamburger").click(function () {
    $("#menu").toggleClass("expand-menu");
    $("#menu").css("background-color", $("#border-box").css("border-color"));
});