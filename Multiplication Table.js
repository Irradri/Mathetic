$(function(){
    $("#callher").mouseenter(function(){
        $("#heroine").slideDown(1000);
    });
});
function createTable(){
    var rows=document.getElementById("Rows").value;
    var cols=document.getElementById("Columns").value;
    if(rows == "" || rows == null){
        rows = 10;
    }
    if(cols== "" || cols== null){
        cols = 10;
    }
    var j=1;
    var output = "<table class='table table-hover table-dark table-striped'>";
    for(i=1;i<=rows;i++){
        output = output + "<tr>";
        while(j<=cols){
            output = output + "<td>" + i*j + "</td>"; //1*1 1*2 1*10 2*1 2*2 2*3 2*10
            j = j+1; //j++
        }
        output = output + "</tr>";
        j= 1; 
    }
    output = output + "</table>";
    document.getElementById("tablearea").innerHTML=output;
    document.getElementById("TABLE").value="scroll down";
}