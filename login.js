$(document).ready(function(){

    function etest()
    {
        setTimeout (function(){
        window.location.replace("todo.html"); 
        },3000);
    }
    $("#btn1").click(function(e){
        e.preventDefault();
        // alert("Authentication on process!!");

    // var uname= $("#email").val();
    // var pass= $("#pwd").val();
     
    if ($("#email").val()==""|| $("#pwd").val()=="")
    {
        $("p").html("<h2>Enter the credentials</h2>")

    }
    else if ($("#email").val()=="admin" &&  $("#pwd").val()=="12345")
    {
        setTimeout(function()
        {
            $("p").html("<h2> Success</h2>")
        },3000);
        // window.location.replace("todo.html");

        setTimeout(function()
        {
            $(p).html("<h2> Verification in process</h2>");
        },3000);
        
        access (etest)
    }
    else{
        $("p").html("<h2>Wrong entry</h2>")

    }
    function access(callback)
    {
        alert("Access granted");
        callback()
    }
     })

})
  