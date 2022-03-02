function add()
{
    var title=document.getElementById("title").value;
    var rating=document.getElementById("rating").value;
    var table=document.getElementById("mytable");
    var newnode1=document.createElement("tr");
    var newnode2=document.createElement("td");
    var textnode2=document.createTextNode(title);
    newnode2.appendChild(textnode2);
    var newnode3=document.createElement("td");
    var textnode3=document.createTextNode(rating);
    newnode3.appendChild(textnode3);
    newnode1.appendChild(newnode2);
    newnode1.appendChild(newnode3);
    table.appendChild(newnode1);
    var newnode4=document.createElement("td");
    var button1=document.createElement("button");
    // button1.addEventListener("onclick",function(){
    //     deleteRow(this);
    // });
    var textnode4=document.createTextNode("DELETE")
    button1.appendChild(textnode4);
    button1.setAttribute("style","width: 100px;");
    button1.setAttribute("onclick","deleteRow(this)");
    newnode4.appendChild(button1);
    newnode1.appendChild(newnode4);
}


function deleteRow(r)
{
    var i=r.parentNode.parentNode.rowIndex;
    document.getElementById("mytable").deleteRow(i);
}