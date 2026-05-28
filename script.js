/* ===================================================
   CROSSOVER LATAM — JavaScript compartido
   =================================================== */

// ─── Menú móvil (botón hamburguesa) ───
const burger = document.getElementById('burger');
if (burger) {
  burger.addEventListener('click', function () {
    const links = document.querySelector('.nav-links');
    if (links.style.display === 'flex') {
      links.style.display = '';
    } else {
      links.style.display = 'flex';
      links.style.position = 'absolute';
      links.style.top = '64px';
      links.style.left = '0';
      links.style.right = '0';
      links.style.flexDirection = 'column';
      links.style.background = 'var(--black)';
      links.style.padding = '20px 24px';
      links.style.borderBottom = '1px solid var(--g700)';
      links.style.gap = '18px';
    }
  });
}

// ─── Formulario de newsletter ───
const nlBtn = document.getElementById('nl-btn');
if (nlBtn) {
  nlBtn.addEventListener('click', function () {
    const email = document.getElementById('nl-email').value.trim();
    const msg = document.getElementById('nl-msg');
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      msg.style.color = '#FF4C1B';
      msg.textContent = 'Ingresa un correo válido, por favor.';
      return;
    }
    msg.style.color = 'var(--lime)';
    msg.textContent = '¡Gracias por suscribirte a Crossover! ⚡';
    document.getElementById('nl-email').value = '';
    // NOTA: aquí se conectará con Brevo/Mailchimp cuando lo configures
  });
}

// ─── Formulario de contacto ───
const contactBtn = document.getElementById('contact-btn');
if (contactBtn) {
  contactBtn.addEventListener('click', function () {
    const name = document.getElementById('c-name').value.trim();
    const email = document.getElementById('c-email').value.trim();
    const message = document.getElementById('c-message').value.trim();
    const msg = document.getElementById('contact-msg');
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !validEmail || !message) {
      msg.style.color = '#FF4C1B';
      msg.textContent = 'Completa todos los campos con datos válidos.';
      return;
    }
    msg.style.color = 'var(--lime)';
    msg.textContent = '¡Mensaje enviado! Te responderemos pronto. ⚡';
    document.getElementById('c-name').value = '';
    document.getElementById('c-email').value = '';
    document.getElementById('c-message').value = '';
    // NOTA: aquí se conectará con tu servicio de correo cuando lo configures
  });
}

// ─── Filtros del blog ───
const filterBtns = document.querySelectorAll('.filter-btn');
if (filterBtns.length) {
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.blog-card').forEach(function (card) {
        if (filter === 'todos' || card.dataset.sport === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
