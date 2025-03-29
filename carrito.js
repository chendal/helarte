
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

  const toggle = document.querySelector('#carrito-toggle');
  const panel = document.querySelector('#carrito-panel');
  if (toggle && panel) {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      panel.classList.toggle('visible');
      panel.style.display = panel.classList.contains('visible') ? 'block' : 'none';
    });
    document.addEventListener('click', (e) => {
      if (!panel.contains(e.target) && e.target !== toggle) {
        panel.classList.remove('visible');
        panel.style.display = 'none';
      }
    });
  }
});
