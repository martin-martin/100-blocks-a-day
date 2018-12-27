$(document).ready(function () {

    // create a grid of 10x10 blocks
    for (let i = 0; i < 100; i++) {
        let block = $("<div>", {class: "block"});
        $(".block-box").append(block);
    }

    // initialize color and assign to object on click
    let currentColor = "white"; // base empty color
    // change color of clicked block according to currently selected color
    $(".block").click(function (event) {
        event.preventDefault();
        let clickColor = $(this).css('background-color')
        if (clickColor !== currentColor) {
            $(this).css('background-color', currentColor);
        } else {  // remove color if clicked on twice with same color selection
            $(this).css('background-color', "white");
        }
    });

    // allow users to add new tasks with new colors
    $(function () {
        $('#add').on('click', function () {
            let color = $('#hex-code').val();
            let name = $('#task-name').val();
            if(color !== '' && name !== '') {
                let cont = $("<div class='color-card'></div>");
                let colorElem = $("<div class='color-cube'></div>").css('background-color', color);
                let textElem = $("<p class='color-desc'></p>").text(name);
                $(cont).append(colorElem, textElem);
                // TODO: add possibility to remove a task/color item after creating it
                // $(elem).append("<button class='rem'>X</button>");
                $('#tasks').append(cont);
                $('#hex-code').val(""); // clear the input
                $('#task-name').val(""); // clear the input
            }
        })
    });

    // TODO: click is bound to dynamically generated div, therefore new color/tasks don't function
    // https://teamtreehouse.com/community/having-trouble-selecting-dynamically-created-elements-with-jquery
    // fetch the clicked color value and assign it to the global currentColor variable
    $(".color-card").click( function () {
        let color = $(this).find("div.color-cube").css('background-color');
        currentColor = color;
    })
});