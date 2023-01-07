const form = document.querySelector(".form");
const btn = document.querySelector(".btn");
const inputs = document.querySelectorAll("input");
const spans = document.querySelectorAll(".form span");

spans.forEach((a) => {
  a.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((a) => {
    if (a.type === "email") {
      const span = document.querySelector(`.${a.id}`);
      v8n()
        .pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        .test(a.value)
        ? (span.style.display = "none")
        : (span.style.display = "");
    } else {
      const span = document.querySelector(`.${a.id}`);
      v8n().empty().test(a.value)
        ? (span.style.display = "")
        : (span.style.display = "none");
    }
  });
});
