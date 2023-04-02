function showInp(){
    getSelectValue = document.getElementById("opciones").value;
    if(getSelectValue=="1"){
      document.getElementById("value1").style.display = "inline-block","boton1";
      document.getElementById("value2").style.display = "none";
      document.getElementById("value3").style.display = "none";
      document.getElementById("value4").style.display = "none";
      document.getElementById("value5").style.display = "none";
      document.getElementById("value6").style.display = "none";
      
    }else if(getSelectValue=="2"){
      document.getElementById("value1").style.display = "none";
      document.getElementById("value2").style.display = "inline-block","boton2";
      document.getElementById("value3").style.display = "none";
      document.getElementById("value4").style.display = "none";
      document.getElementById("value5").style.display = "none";
      document.getElementById("value6").style.display = "none";

    }else if(getSelectValue=="3"){
      document.getElementById("value1").style.display = "none";
      document.getElementById("value2").style.display = "none";
      document.getElementById("value3").style.display = "inline-block","boton3";
      document.getElementById("value4").style.display = "none";
      document.getElementById("value5").style.display = "none";
      document.getElementById("value6").style.display = "none";


    }else if(getSelectValue=="4"){
        document.getElementById("value1").style.display = "none";
        document.getElementById("value2").style.display = "none";
        document.getElementById("value3").style.display = "none";
        document.getElementById("value4").style.display = "inline-block";
        document.getElementById("value5").style.display = "none";
        document.getElementById("value6").style.display = "none";
  
  
      }else if(getSelectValue=="5"){
        document.getElementById("value1").style.display = "none";
        document.getElementById("value2").style.display = "none";
        document.getElementById("value3").style.display = "none";
        document.getElementById("value4").style.display = "none";
        document.getElementById("value5").style.display = "inline-block";
        document.getElementById("value6").style.display = "none";
  
  
      }else if(getSelectValue=="6"){
        document.getElementById("value1").style.display = "none";
        document.getElementById("value2").style.display = "none";
        document.getElementById("value3").style.display = "none";
        document.getElementById("value4").style.display = "none";
        document.getElementById("value5").style.display = "none";
        document.getElementById("value6").style.display = "inline-block";
  
  
      }

  }
  function init() {
 
    let uno = document.createElement("1");
    uno.setAttribute("href", "Desafío ONE AluraGeek CRUD con JS y Json-server/EnPreparacion.html");
    let aTexto = document.createTextNode("Tazas");
    uno.appendChild(aTexto);
     
    document.body.appendChild(uno);
 
}
 
window.onload = init;