let buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll("span");
let value = document.getElementById("value");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    console.log(btn[i].innerHTML);
    if (btn[i].innerHTML == "=") {
      value.innerHTML = eval(value.innerHTML);
    } else {
      if (btn[i].innerHTML == "Clear") {
        value.innerHTML = "";
      } else {
        value.innerHTML += btn[i].innerHTML;
      }
    }
  });
}

const button = document.querySelector(".show"),
  toast = document.querySelector(".toast"),
  process = document.querySelector(".progress");

button.addEventListener("click", () => {
  toast.classList.add("active");
  process.classList.add("active");

  setTimeout(() => {
    toast.classList.remove("active");
  }, 5000);
});
