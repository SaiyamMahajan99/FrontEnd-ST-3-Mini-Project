//Javascript
var i=1;

function add(){
    var error = 0;
    var naam = document.getElementById("name").value;
    var mob = document.getElementById("mob").value;
    var email = document.getElementById("email").value;
    if(naam=="" || mob=="" || email==""){
        alert("No field should be blank");
        error = 1;
    }
    if(naam.length<3){
        error=1;
    }
    if(!mob.length==10){
        error=1;
    }
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
        error = 1; 
    }  

    if(error == 0){
        document.getElementsByTagName("table")[0].style.opacity = "100%";

        var naam = document.getElementById("name").value;
        var mob = document.getElementById("mob").value;
        var email = document.getElementById("email").value;
        var index = "trow"+ i + "";

        var tablerow = document.createElement("tr"); 
        tablerow.setAttribute("id",index);

        var tablenaam = document.createElement("td");
        var textnaam = document.createTextNode(naam);
        tablenaam.append(textnaam);

        var tablemob = document.createElement("td");
        var textmob = document.createTextNode(mob);
        tablemob.append(textmob);

        var tableemail = document.createElement("td");
        var textemail = document.createTextNode(email);
        tableemail.append(textemail);

        var tabdelete = document.createElement("td"); 
        var deletebutton = document.createElement("button");
        deletebutton.setAttribute("onclick","itemDelete('"+index+"')");
        var textbutton = document.createTextNode("Delete");
        deletebutton.append(textbutton);
        tabdelete.append(deletebutton);
        tablerow.append(tablenaam);
        tablerow.append(tablemob);
        tablerow.append(tableemail);
        tablerow.append(tabdelete);
        
        document.getElementById("form-details-table").append(tablerow);
    }
}
function itemDelete(indexnumber){
    document.getElementById(indexnumber).remove();
}