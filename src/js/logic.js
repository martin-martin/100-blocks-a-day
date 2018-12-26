$(document).ready(function () {

    // create a grid of 10x10 blocks
    let i;
    for (i = 0; i < 100; i++) {
        let block = $("<div>", {class: "empty"});
        $(".boxbox").append(block);
    }
    // toggle color by adding/removing class to clicked box element
    $(".empty").click(function (event) {
        event.preventDefault()
        $(this).toggleClass("full");
    });
    // allow users to add new tasks with new colors
    $(function () {
        $('#add').on('click', function () {
            let color = $('#hex-code').val();
            console.log(color);
            let name = $('#task-name').val();
            console.log(name);
            if(color !== '' && name !== '') {
                let cont = $("<div class='color-card'></div>");
                let colorElem = $("<div class='color-cube'></div>").css('background-color', color);
                let textElem = $("<p class='color-desc'></p>").text(name);
                $(cont).append(colorElem, textElem);
                // $(elem).append("<button class='rem'>X</button>");
                $('#tasks').append(cont);
                $('#hex-code').val(""); // clear the input
                $('#task-name').val(""); // clear the input
            }
        })
    })

})

// $('#add-task').