menu_list_Array = [deulex CHEESE,pepperoni,magarita ,calibri ]

function getmenu(){
    var htmldata;
    htmldata="<olclass=menulist">
    menu_list_Array,sort();
for(var i=0 i<menu_list_Array.length i++ ){
    htmldata=htmldata+"<li>"+menu_list_Array[i]+"</li>"
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML=htmldata;
}
