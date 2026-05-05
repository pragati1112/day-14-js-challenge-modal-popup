const openBtn = document.getElementById("openBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");

// Open
openBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

// Close button
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

// Outside click
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});