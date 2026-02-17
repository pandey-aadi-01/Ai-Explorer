const mainBtn = document.getElementById("main-btn");
const options = document.getElementById("options");
const backBtn = document.getElementById("back-btn");

mainBtn.onclick = () => {
  mainBtn.classList.add("hide");
  options.classList.add("active");
  backBtn.classList.add("show");
};

backBtn.onclick = () => {
  options.classList.remove("active");
  backBtn.classList.remove("show");
  mainBtn.classList.remove("hide");
};
