
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function actualizarContador() {
  const contador = document.querySelector('#carrito-contador');
  if (contador) contador.textContent = carrito.length;
}

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarContador();
  mostrarCarrito();
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
  if (carrito.length === 0) {
    lista.innerHTML = '<li>El carrito está vacío.</li>';
    return;
  }
  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = item.nombre + ' - ' + item.precio + ' <button onclick="eliminarDelCarrito(' + index + ')">Quitar</button>';
    lista.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  actualizarContador();
  mostrarCarrito();

  const toggle = document.getElementById('carrito-toggle');
  const panel = document.getElementById('carrito-panel');
  if (toggle && panel) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
    });
    document.addEventListener('click', function (e) {
      if (!panel.contains(e.target) && e.target !== toggle && !toggle.contains(e.target)) {
        panel.style.display = 'none';
      }
    });
  }
});
