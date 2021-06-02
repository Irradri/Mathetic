$(document).ready(function (){
    $("#callhim").mouseenter(function (){
        $("#hero").animate({
            opacity: 1,
            right: '0px'
        },1000);
    });
});
$(function (){
    $("#÷").click(function (){
            $("#middle").text("÷");
    });
    $("#✕").click(function (){
            $("#middle").text("✕");
    });
    $("#-").click(function (){
            $("#middle").text("-");
    });
    $("#plus").click(function (){
            $("#middle").text("+");
    });
    $("#9").click(function (){
        if ($("#middle").text()==""){
            $("#left").text($("#left").text()+"9");
        }
        else{
            $("#right").text($("#right").text()+"9");
        }
    });
    $("#8").click(function (){
        if ($("#middle").text()==""){
            $("#left").text($("#left").text()+"8");
        }
        else{
            $("#right").text($("#right").text()+"8");
        }
    });
    $("#7").click(function (){
        if ($("#middle").text()==""){
            $("#left").text($("#left").text()+"7");
        }
        else{
            $("#right").text($("#right").text()+"7");
        }
    });
    $("#6").click(function (){
        if ($("#middle").text()==""){
            $("#left").text($("#left").text()+"6");
        }
        else{
            $("#right").text($("#right").text()+"6");
        }
    });
    $("#5").click(function (){
        if ($("#middle").text()==""){
            $("#left").text($("#left").text()+"5");
        }
        else{
            $("#right").text($("#right").text()+"5");
        }
    });
    $("#4").click(function (){
        if ($("#middle").text()==""){
            $("#left").text($("#left").text()+"4");
        }
        else{
            $("#right").text($("#right").text()+"4");
        }
    });
    $("#3").click(function (){
        if ($("#middle").text()==""){
            $("#left").text($("#left").text()+"3");
        }
        else{
            $("#right").text($("#right").text()+"3");
        }
    });
    $("#2").click(function (){
        if ($("#middle").text()==""){
            $("#left").text($("#left").text()+"2");
        }
        else{
            $("#right").text($("#right").text()+"2");
        }
    });
    $("#1").click(function (){
        if ($("#middle").text()==""){
            $("#left").text($("#left").text()+"1");
        }
        else{
            $("#right").text($("#right").text()+"1");
        }
    });
    $("#0").click(function (){
        if ($("#middle").text()==""){
            $("#left").text($("#left").text()+"0");
        }
        else{
            $("#right").text($("#right").text()+"0");
        }
    });
    //here
    $("#C").click(function (){
        $("#left").text("");
        $("#middle").text("");
        $("#right").text("");
    });
    $("#equal").click(function (){
        if ($("#middle").text()=="÷") {
            $("#left").text(parseInt($("#left").text())/parseInt($("#right").text()));
            $("#middle").text("");
            $("#right").text("");
        }
        if ($("#middle").text()=="✕") {
            $("#left").text(parseInt($("#left").text())*parseInt($("#right").text()));
            $("#middle").text("");
            $("#right").text("");
        }
        if ($("#middle").text()=="-") {
            $("#left").text(parseInt($("#left").text())-parseInt($("#right").text()));
            $("#middle").text("");
            $("#right").text("");
        }
        if ($("#middle").text()=="+") {
            $("#left").text(parseInt($("#left").text())+parseInt($("#right").text()));
            $("#middle").text("");
            $("#right").text("");
        }
    });
});