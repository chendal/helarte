
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function actualizarContador() {
  const contador = document.querySelector('#carrito-contador');
  contador.textContent = carrito.length;
}

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarContador();
  alert(nombre + " añadido al carrito.");
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarCarrito();
  actualizarContador();
}

function mostrarCarrito() {
  const lista = document.querySelector('#carrito-lista');
  if (!lista) return;
  lista.innerHTML = '';
  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item.nombre + " - " + item.precio;
    const btn = document.createElement('button');
    btn.textContent = "Quitar";
    btn.onclick = () => eliminarDelCarrito(index);
    li.appendChild(btn);
    lista.appendChild(li);
  });
}

// Ejecutar al cargar
document.addEventListener('DOMContentLoaded', () => {
  actualizarContador();
  mostrarCarrito();
});
