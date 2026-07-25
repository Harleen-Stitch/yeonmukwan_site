class MonNavbar extends HTMLElement {
  connectedCallback() {
    const current = this.getAttribute('current');
    const lienActif = (nom) => current === nom ? 'text-nav-text-selected font-bold' : 'text-nav-text';

    this.innerHTML = `
      <nav class="z-100 fixed w-full flex justify-end md:gap-x-6 md:pt-2 md:pb-2 md:pr-6 md:bg-white">

      <!-- visible uniquement sur PC -->
        <div class="hidden md:flex gap-6">
          <a href="../index.html" class="${current === 'accueil' ? 'text-nav-text-selected font-bold' : 'text-nav-text'}">Accueil</a>
          <a href="../pages/about.html" class="${current === 'about' ? 'text-nav-text-selected font-bold' : 'text-nav-text'}">Qui sommes-nous&nbsp?</a>
          <a href="../pages/dir_tech.html" class="${current === 'direction' ? 'text-nav-text-selected font-bold' : 'text-nav-text'}">Direction technique</a>
          <a href="../pages/member.html" class="${current === 'member' ? 'text-nav-text-selected font-bold' : 'text-nav-text'}">Devenir membre</a>
        </div>


        <!-- Bouton hamburger visible seulement en dessous de md -->
        <button class="md:hidden text-black border-2 border-black bg-white/70 text-3xl mr-2 mt-2 pb-1" id="burger-btn">☰</button>
        
        <!--  Menu mobile déplié, caché par défaut -->
        <div class="hidden flex-col absolute justify-end w-full bg-black/95 p-6 gap-4 z-100" id="mobile-menu">
          <a href="../index.html" class="${lienActif('accueil')}">Accueil</a>
          <a href="../pages/about.html" class="${lienActif('about')}">Qui sommes-nous&nbsp?</a>
          <a href="../pages/dir_tech.html" class="${lienActif('direction')}">Direction technique</a>
          <a href="../pages/member.html" class="${lienActif('member')}">Devenir membre</a>
        </div>
      </nav>
    `;
    // Récupère les éléments qu'on vient de créer, pour pouvoir les manipuler
    const bouton = this.querySelector('#burger-btn');
    const menu = this.querySelector('#mobile-menu');

    bouton.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      menu.classList.toggle('flex');
    });
  }
}
customElements.define('mon-navbar', MonNavbar);
