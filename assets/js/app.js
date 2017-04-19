var coders = ["Eli Cortez", "Grecia Rayme", "Steph Hiyagon", "Luz Gutierrez", "Ruth Salvador", "Glissel Jorge"];

function createDom(elem){
  var div2 = document.createElement("div");
  div2.setAttribute("class","div-coder");
  var img = document.createElement("img");
  img.setAttribute("class","coder-photo");
  var index = coders.indexOf(elem) + 1;
  img.setAttribute("src","assets/img/"+index+".png");
  img.setAttribute("alt",elem);
  var span = document.createElement("span");
  span.setAttribute("class","coder-name")
  span.innerText = elem;
  div2.appendChild(img);
  div2.appendChild(span);
  return div2;
}

window.addEventListener("load",function(){
  var div1 = document.createElement("div");
  div1.setAttribute("class","title");
  var h3 = document.createElement("h3");
  h3.setAttribute("class","text");
  h3.innerText = "Nuestras Coders"
  var linea = document.createElement("div");
  linea.setAttribute("class","linea")
  div1.appendChild(h3);
  div1.appendChild(linea);

  var section = document.getElementById("main-container");
  section.appendChild(div1);
  var extra = document.createElement("div");
  extra.setAttribute("class","photos")
  var alumnas = coders.forEach(function(e){
    extra.appendChild(createDom(e))
  });
  section.appendChild(extra);
});
