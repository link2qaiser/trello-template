$(function() {
    var url = 'edit-status.php';
    $('ul[id^="sort"]').sortable({
        connectWith: ".sortable",
        receive: function(e, ui) {
            var status_id = $(ui.item).parent(".sortable").data("status-id");
            var task_id = $(ui.item).data("task-id");
            $.ajax({
                url: url + '?status_id=' + status_id + '&task_id=' + task_id,
                success: function(response) {}
            });
        }

    }).disableSelection();
});

$(document).ready(function() {

    $(document).on("click", ".text-row", function(event) {
        console.log("test");
    });
    $(document).on("click", ".add-card-btn", function(event) {
        let new_card = $("#new-card").html();
        $(this).closest(".status-card").find(".actions").prepend(new_card);
        $(this).hide();
    });
    $(document).on("click", ".saved", function(event) {
        let card_content = $(this).closest(".new-task").find("textarea").val();
        $(this).closest(".status-card").find("ul").append('<li class="text-row ui-sortable-handle" data-task-id="2" data-toggle="modal" data-target="#standardModal">' + card_content + '</li>');
        $(this).closest(".actions").find(".add-card-btn").show();
        $(this).closest(".new-task").hide();
    });
    $(document).on("click", ".closed", function(event) {
        $(this).closest(".actions").find(".add-card-btn").show();
        $(this).closest(".new-task").hide();
    });

});

$(document).ready(function() {
    $(".cli").click(function() {
        $(".para").toggle();
    });
});

$(document).ready(function() {
    $(".clic").click(function() {
        $(".parag").toggle();
    });
});

$(document).ready(function() {
    $(".clicko").click(function() {
        $(".paragr").toggle();
    });
});

$(document).ready(function() {
    $(".clickok").click(function() {
        $(".paragro").toggle();
    });
});

$(document).ready(function() {
    $(".clickk").click(function() {
        $(".paragra").toggle();
    });
});

$(document).ready(function() {
    $(".clickkk").click(function() {
        $(".paragrag").toggle();
    });
});

$(document).ready(function() {
    $(".clickkki").click(function() {
        $(".paragragh").toggle();
    });
});
$(document).on("click", ".tablet", function() {
    var text = $(this).text();
    console.log(text);
    if (text.toLowerCase() == "all") {
        $("#all").show();
        $("#comments").hide();
        $("#history").hide();
        $("#zendesk").hide();
        $("#salesforce").hide();
        $("#work").hide();
    } else if (text.toLowerCase() == "comments") {
        $("#all").hide();
        $("#comments").show();
        $("#history").hide();
        $("#zendesk").hide();
        $("#salesforce").hide();
        $("#work").hide();
    } else if (text.toLowerCase() == "history") {
        $("#all").hide();
        $("#comments").hide();
        $("#history").show();
        $("#zendesk").hide();
        $("#salesforce").hide();
        $("#work").hide();
    } else if (text.toLowerCase() == "zendesk support") {
        $("#all").hide();
        $("#comments").hide();
        $("#history").hide();
        $("#zendesk").show();
        $("#salesforce").hide();
        $("#work").hide();
    } else if (text.toLowerCase() == "salesforce comments") {
        $("#all").hide();
        $("#comments").hide();
        $("#history").hide();
        $("#zendesk").hide();
        $("#salesforce").show();
        $("#work").hide();
    } else if (text.toLowerCase() == "work log") {
        $("#all").hide();
        $("#comments").hide();
        $("#history").hide();
        $("#zendesk").hide();
        $("#salesforce").hide();
        $("#work").show();
    }
})
$("#message").keypress(function(e) {
    if (e.keyCode == 13) {
        var text = $(this).val();
        var data = `<div class="row mt-2">
             <div class="col-md-12">
             <div class="custom mr-2">ZA</div>
             <div><small class="mr-1"><b>zain_dixeam26</b></small><small>` + text + `</small><br><div class="fn-12">Jan 22 at 9:11 pm</div></div>
             </div>
             </div>`;
        $("#thisis").append(data);
        $("input[type=text], textarea").val("");

    }
})
$(document).ready(function() {
    $(".appe").click(function() {
        // alert("hello");
        $(".appe").append(`<button type="button" class="btn btn-info mt-1 form-control">Submitt</button>`);
    });
});