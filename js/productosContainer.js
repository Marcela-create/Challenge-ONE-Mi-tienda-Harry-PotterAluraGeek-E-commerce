// Recorrer las gorras y crear elementos HTML para cada una
var gorras = json.gorras;
for (var i = 0; i < gorras.length; i++) {
  var gorra = gorras[i];
  
  // Crear un elemento div para la gorra
  var gorraElement = document.createElement("div");
  gorraElement.innerHTML = gorra.nombre + " - $" + gorra.precio;
  
  // Agregar la gorra al contenedor de productos
  productosContainer.appendChild(gorraElement);
}

// Recorrer las bufandas y crear elementos HTML para cada una
var bufandas = json.bufandas;
for (var i = 0; i < bufandas.length; i++) {
  var bufanda = bufandas[i];
  
  // Crear un elemento div para la bufanda
  var bufandaElement = document.createElement("div");
  bufandaElement.innerHTML = bufanda.nombre + " - $" + bufanda.precio;
  
  // Agregar la bufanda al contenedor de productos
  productosContainer.appendChild(bufandaElement);
}


// Recorrer las tazas y crear elementos HTML para cada una
var tazas = json.tazas;
for (var i = 0; i < tazas.length; i++) {
  var taza = tazas[i];
  
  // Crear un elemento div para la bufanda
  var tazaElement = document.createElement("div");
  tazaElement.innerHTML = taza.nombre + " - $" + taza.precio;
  
  // Agregar la bufanda al contenedor de productos
  productosContainer.appendChild(tazaElement);
}


// Recorrer los buzos y crear elementos HTML para cada uno
var buzos = json.buzos;
for (var i = 0; i < buzos.length; i++) {
  var buzo = buzos[i];
  
  // Crear un elemento div para el buzo
  var buzoElement = document.createElement("div");
  buzoElement.innerHTML = buzo.nombre + " - $" + buzo.precio;
  
  // Agregar el buzo al contenedor de productos
  productosContainer.appendChild(buzoElement);
}

// Recorrer las varitas y crear elementos HTML para cada una
var varitas = json.varitas;
for (var i = 0; i < varitas.length; i++) {
  var varita = varitas[i];
  
  // Crear un elemento div para la varita
  var varitaElement = document.createElement("div");
  varitaElement.innerHTML = varita.nombre + " - $" + varita.precio;
  
  // Agregar la varita al contenedor de productos
  productosContainer.appendChild(varitaElement);
}