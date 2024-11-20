document.getElementById("light-mode-btn").addEventListener("click", () => {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  });
  
  document.getElementById("dark-mode-btn").addEventListener("click", () => {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  });
  