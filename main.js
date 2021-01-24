const toTopBtn = document.querySelector(".to-top");

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
});

toTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
