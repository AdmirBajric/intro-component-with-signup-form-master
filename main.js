const form = document.querySelector(".form");
const btn = document.querySelector(".btn");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailRegEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  inputs.forEach((a) => {
    if (a.type === "email") {
      const span = document.querySelector(`.${a.id}`);
      v8n().pattern(emailRegEx).test(a.value)
        ? (span.style.opacity = 0)
        : (span.style.opacity = 1);
    } else {
      const span = document.querySelector(`.${a.id}`);
      v8n().empty().test(a.value)
        ? (span.style.opacity = 1)
        : (span.style.opacity = 0);
    }
  });
});
