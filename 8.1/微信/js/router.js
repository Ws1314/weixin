

$(function() {
    $("#dynamic").load("../微信center/微信center1.html")
    $(".foot").click(function(){
        $("#dynamic").load($(this).data("page"))
    })
})