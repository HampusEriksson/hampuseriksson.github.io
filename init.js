// =====================
// Header
var header = document.querySelector('header');
header.innerHTML = `
<nav class="navbar navbar-dark bg-dark">
  <ul class="navbar-nav d-flex flex-row justify-content-center w-100">
    <li class="nav-item mx-3">
      <a class="nav-link" href="index.html">Start</a>
    </li>
    <li class="nav-item mx-3">
      <a class="nav-link" href="webbutveckling.html">Webbutveckling 1</a>
    </li>
 
  </ul>
</nav>
`;

// =====================
// Footer
var footer = document.querySelector('footer');
footer.innerHTML = `
<div class="text-center py-3 text-white">
  <a href="mailto:hampus.eriksson@ga.ntig.se" class="text-white mx-2 text-decoration-none">Maila Hampus</a>
  <a href="https://github.com/HampusEriksson" class="text-white mx-2 text-decoration-none">Hampus Github</a>
  <div class="mt-2 text-muted small">&copy; 2025 Hampus Eriksson</div>
</div>
`;
