$(document).ready(function () {

    const submit = $("#submit");
    const burger = $("#burger");

    //Create new burger on submit
    submit.click(() => {
        event.preventDefault();

        let newBurger = {
            name: burger.val()
        };
        burger.val("");

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

    $(".devour").on("click", () => {
        event.preventDefault();

        let id = $(this).data("burgerid");
        console.log(id);
        let newDevourState = {
            devoured: 1
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

    $(".remove").on("click", () => {
        event.preventDefault();

        let id = $(this).data("burgerid");
        console.log(id);
        let newDevourState = {
            devoured: 0
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
