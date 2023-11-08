$("#menu").on("click", () => {

    $("#menu").css("transform", "rotate(180deg)");
    $("#menu_close").css("transform", "rotate(180deg)");
    $("#mobile_navigation").css("display", "block");

    // Apply the transitioned styles
    setTimeout(() => {

        $("#menu").css("display", "none");
        $("#menu_close").css("display", "block");
        $("#mobile_navigation").css("opacity", "1");
        $("#mobile_navigation").css("transform", "translateX(0)");


    }, 300); // Add a slight delay to allow the initial styles to take effect
});

$("#menu_close").on("click", () => {

    $("#menu_close").css("transform", "rotate(-180deg)");
    $("#menu").css("transform", "rotate(-180deg)");

    // Apply the transitioned styles
    setTimeout(() => {

        $("#menu_close").css("display", "none");
        $("#menu").css("display", "block");
        // $("#mobile_navigation").css("display", "none");
        $("#mobile_navigation").css("opacity", "0");
        $("#mobile_navigation").css("transform", "translateX(100%)");

    }, 300); // Add a slight delay to allow the initial styles to take effect
});
