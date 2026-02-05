const components = document.querySelectorAll('[data-component]')

components.forEach((component) => {
  const name = component.dataset.component

  fetch(`components/${name}.html`)
    .then((res) => res.text())
    .then((html) => (component.innerHTML = html))
    .catch((err) => console.error(`Error cargando ${name}`, err))
})
