// Find the header tag
var header = document.querySelector('header');
// Edit the innerhtml of the header tag
header.innerHTML = `<nav>
                      <ul>
                        <li><a href="index.html">Hem</a></li>
                        <li><a href="webb.html">Webbutveckling 1</a></li>
                        <li><a href="tree_clicker.html">Tree_clicker</a></li>
                      </ul>
                    </nav>`;

var footer = document.querySelector('footer');
footer.innerHTML = `<ul>
<li><a href="mailto:hampus.eriksson@ga.ntig.se">Maila Hampus</a></li>
<li><a href="https://github.com/HampusEriksson">Hampus Github</a></li>
</ul>`;