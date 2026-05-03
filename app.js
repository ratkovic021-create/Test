// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Purchase modal
function handlePurchase(e) {
  e.preventDefault();
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modalOverlay').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

function completePurchase() {
  const input = document.querySelector('.modal__input');
  const email = input.value.trim();

  if (!email || !email.includes('@')) {
    input.style.borderColor = '#e17055';
    input.focus();
    return;
  }

  input.style.borderColor = '';

  const modal = document.querySelector('.modal');
  modal.innerHTML = `
    <div style="text-align:center;padding:20px 0;">
      <div style="font-size:4rem;margin-bottom:20px;">✅</div>
      <h3 style="margin-bottom:12px;">Purchase complete!</h3>
      <p>Check your inbox at <strong>${email}</strong> for download instructions.<br>Welcome to HabitFlow!</p>
      <button class="btn btn--primary btn--lg" style="margin-top:28px;width:100%;justify-content:center;" onclick="closeModal()">Start Building Habits</button>
    </div>
  `;
}

// Intersection observer for fade-in animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.feature-card, .testimonial-card, .step, .faq__item').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
