//varitas
const crearListaVaritas = (id,name, titulo, imagen,precio) => {
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    const contenido = `
    <img src="${imagen}" alt="${titulo}" class="prod-img">
    <p class="prod-name">${name}</p>
    <h2 class="prod-titulo">${titulo}</h2>
    <p class="prod-precio">${precio}</p>
    <a href="#" class="prod-enlace" id="${id}">Ver más</a>
    `;
    div.innerHTML = contenido;
    return div;
};
//tazas
const crearListaTazas = (id, name, titulo, imagen,precio) => {
  const div = document.createElement("div");
  div.classList.add("tarjeta");
  const contenido = `
  <img src="${imagen}" alt="${titulo}" class="prod-img">
  <p class="prod-name">${name}</p>
  <h2 class="prod-titulo">${titulo}</h2>
  <p class="prod-precio">${precio}</p>
  <a href="#" class="prod-enlace" id="${id}">Ver más</a>
  `;
  div.innerHTML = contenido;
  return div;
};
//bufandas
const crearListaBufandas = (id,name, titulo, imagen,precio) => {
  const div = document.createElement("div");
  div.classList.add("tarjeta");
  const contenido = `
  <img src="${imagen}" alt="${titulo}" class="prod-img">
  <p class="prod-name">${name}</p>
  <h2 class="prod-titulo">${titulo}</h2>
  <p class="prod-precio">${precio}</p>
  <a href="#" class="prod-enlace" id="${id}">Ver más</a>
  `;
  div.innerHTML = contenido;
  return div;
};
//buzos
const crearListaBuzos = (id,name, titulo, imagen,precio) => {
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    const contenido = `
    <img src="${imagen}" alt="${titulo}" class="prod-img">
    <p class="prod-name">${name}</p>
    <h2 class="prod-titulo">${titulo}</h2>
    <p class="prod-precio">${precio}</p>
    <a href="#" class="prod-enlace" id="${id}">Ver más</a>
    `;
    div.innerHTML = contenido;
    return div;
};
//gorros
const crearListaGorros = (id, name, titulo, imagen,precio) => {
  const div = document.createElement("div");
  div.classList.add("tarjeta");
  const contenido = `
  <img src="${imagen}" alt="${titulo}" class="prod-img">
  <p class="prod-name">${name}</p>
  <h2 class="prod-titulo">${titulo}</h2>
  <p class="prod-precio">${precio}</p>
  <a href="#" class="prod-enlace" id="${id}">Ver más</a>
  `;
  div.innerHTML = contenido;
  return div;
};
//soportes
const crearListaSoportes = (id,name, titulo, imagen,precio) => {
  const div = document.createElement("div");
  div.classList.add("tarjeta");
  const contenido = `
  <img src="${imagen}" alt="${titulo}" class="prod-img">
  <p class="prod-name">${name}</p>
  <h2 class="prod-titulo">${titulo}</h2>
  <p class="prod-precio">${precio}</p>
  <a href="#" class="prod-enlace" id="${id}">Ver más</a>
  `;
  div.innerHTML = contenido;
  return div;
};

  const contVaritas = document.querySelector("#varitas");
  const contTazas = document.querySelector("#tazas");
  const contBufandas = document.querySelector("#bufandas");
  const contBuzos = document.querySelector("#buzos");
  const contGorros = document.querySelector("#gorros");
  const contSoportes = document.querySelector("#soportes");




const listaUsuario = () => {
    const promise = new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.open("GET", "http://localhost:3000/usuario");
      http.send();
      http.onload = () => {
        const response = JSON.parse(http.response);
        if (http.status >= 400) {
          reject(response);
        } else {
          resolve(response);
        }
      };
    });
    return promise;
  };
  const listaCategories = () => {
    const promise = new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.open("GET", "http://localhost:3000/categories");
      http.send();
      http.onload = () => {
        const response = JSON.parse(http.response);
        if (http.status >= 400) {
          reject(response);
        } else {
          resolve(response);
        }
      };
    });
    return promise;
  };

  const listaVaritas = () => {
    const promise = new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.open("GET", "http://localhost:3000/varitas");
      http.send();
      http.onload = () => {
        const response = JSON.parse(http.response);
        if (http.status >= 400) {
          reject(response);
        } else {
          resolve(response);
        }
      };
    });
    return promise;
  };
  const listaCasa_Gryffindor = () => {
    const promise = new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.open("GET", " http://localhost:3000/casa_Gryffindor");
      http.send();
      http.onload = () => {
        const response = JSON.parse(http.response);
        if (http.status >= 400) {
          reject(response);
        } else {
          resolve(response);
        }
      };
    });
    return promise;
  };
  const listaCasa_Hufflepuff = () => {
    const promise = new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.open("GET", "   http://localhost:3000/casa_Hufflepuff");
      http.send();
      http.onload = () => {
        const response = JSON.parse(http.response);
        if (http.status >= 400) {
          reject(response);
        } else {
          resolve(response);
        }
      };
    });
    return promise;
  };
  const listaCasa_Ravenclaw = () => {
    const promise = new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.open("GET", "  http://localhost:3000/casa_Ravenclaw");
      http.send();
      http.onload = () => {
        const response = JSON.parse(http.response);
        if (http.status >= 400) {
          reject(response);
        } else {
          resolve(response);
        }
      };
    });
    return promise;
  };

  const listaCasa_Slytherin = () => {
    const promise = new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.open("GET", "  http://localhost:3000/casa_Slytherin");
      http.send();
      http.onload = () => {
        const response = JSON.parse(http.response);
        if (http.status >= 400) {
          reject(response);
        } else {
          resolve(response);
        }
      };
    });
    return promise;
  };



  listaTazas()
    .then((data) => {
      data.forEach((tazas) => {
        const taza = crearListaTaza(taza.id,taza.name, taza.titulo, taza.imagen, taza.precio);
        contSudaderas.appendChild(taza);
      });
    })
    .catch((error) => alert("Ocurrió un error"));

  listaBufandas()
  .then((data) => {
    data.forEach((bufandas) => {
      const bufanda= crearListaBufanda(bufanda.id,bufanda.name, bufanda.titulo, bufanda.imagen,bufanda.precio);
      contBufanda.appendChild(bufanda);
    });
  })
  .catch((error) => alert("Ocurrió un error"));

  listaBuzos()
  .then((data) => {
    data.forEach((buzos) => {
      const buzo = crearListaBuzo(buzo.id,buzo.name, buzo.titulo, buzo.imagen, buzo.precio);
      contBuzo.appendChild(buzo);
    });
  })
  .catch((error) => alert("Ocurrió un error"));


  listaGorros()
  .then((data) => {
    data.forEach((gorros) => {
      const gorro= crearListaGorro(gorro.id,gorro.name, gorro.titulo, gorro.imagen, gorro.precio);
      contGorro.appendChild(gorro);
    });
  })
  .catch((error) => alert("Ocurrió un error"));

  listaSoportes()
  .then((data) => {
    data.forEach((soportes) => {
      const soporte = crearListaSoporte(taza.id,taza.name, taza.titulo, taza.imagen, taza.precio);
      contSoporte.appendChild(soporte);
    });
  })
  .catch((error) => alert("Ocurrió un error"));
  
  // console.log(data);
  //
  