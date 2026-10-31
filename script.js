    
  async function loadMarkdown(file) {
    try {
      const res = await fetch(file);
      const text = await res.text();
      document.getElementById("content").innerHTML = marked.parse(text);
      window.scrollTo(0, 0);
    } catch (err) {
      document.getElementById("content").innerHTML = "<p style='color:red'>Error al cargar el archivo.</p>";
    }
  }


/// MAIN 
function mostrarMenu(id) {
  // Oculta todos los menús
  document.querySelectorAll('.submenu').forEach(menu => {
    menu.style.display = 'none';
  });
  // Muestra solo el que corresponde
  const target = document.getElementById(id);
  if (target) target.style.display = 'block';
}

