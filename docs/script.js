document.getElementById('year').textContent = new Date().getFullYear();

// Copy to clipboard for code example
document.querySelectorAll('.copy-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetSel = btn.getAttribute('data-copy-target');
    const codeEl = document.querySelector(targetSel);
    if (!codeEl) return;
    const text = codeEl.innerText;
    navigator.clipboard.writeText(text).then(() => {
      const original = btn.textContent;
      btn.textContent = 'Copied';
      setTimeout(() => (btn.textContent = original), 1200);
    });
  });
});
