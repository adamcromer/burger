$(document).ready(function () {

    const submit = $("#submit");
    const burger = $("#burger");

    //Create new burger on submit
    submit.click(function() {
        event.preventDefault();

        let newBurger = {
            name: burger.val()
        };
        burger.val("");
        console.log("test")

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        )
    });

    $(".devour").on("click", function() {
        event.preventDefault();

        let id = $(this).data("burgerid");
        console.log(id);
        let newDevourState = {
            devour: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".remove").on("click", function() {
        event.preventDefault();

        let id = $(this).data("burgerid");
        console.log(id);
        let newDevourState = {
            devour: 0
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                location.reload();
            }
        );
    });
});
