export default function replace() {
  const replaceItems = document.querySelectorAll("[data-replace]");
  if (replaceItems.length && window.matchMedia("(max-width: 743px)").matches) {
    replaceItems.forEach(item => {
      const nextString = item.dataset.replace;
      item.textContent = nextString;
    })
  }
}