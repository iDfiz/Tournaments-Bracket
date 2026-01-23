document.addEventListener("DOMContentLoaded", () => {
  function checkAnimations() {
    document.querySelectorAll(".animate").forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", checkAnimations);
  window.addEventListener("load", checkAnimations);
  checkAnimations();

  const observer = new MutationObserver(checkAnimations);
  observer.observe(document.body, { childList: true, subtree: true });
});
