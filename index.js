document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const radios = document.querySelectorAll(
    'input[type="radio"][name="colors"]'
  );

  radios.forEach((radio, index) => {
    radio.addEventListener("change", () => {
      cards.forEach((card, i) => {
        if (i === index) {
          card.classList.add("active");
        } else {
          card.classList.remove("active");
        }
      });
    });
  });
});
