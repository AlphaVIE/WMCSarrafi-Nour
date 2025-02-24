function isPrime() {
  const input = document.getElementById("number");
  const textarea = document.getElementById("res");
  const number = input.value;

  function blink(color) {
    let originalColor = textarea.style.borderColor;
    textarea.style.border = `3px solid ${color}`;
    let interval = setInterval(() => {
      textarea.style.borderColor =
        textarea.style.borderColor === color ? originalColor : color;
    }, 500);

    input.addEventListener("input", () => {
      clearInterval(interval);
      textarea.style.borderColor = originalColor;
    });
  }

  if (number == undefined || number == "" || number == null) {
    blink("orange");
    textarea.value = "Bitte geben Sie eine Zahl ein!";
    return;
  } else if (number <= 1) {
    blink("orange");
    textarea.value = "Zahl muss größer als 1 sein!";
    return;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        blink("red");
        textarea.value = "Die Zahl ist keine Primzahl.";
        return;
      }
    }
    blink("green");
    textarea.value = "Die Zahl ist eine Primzahl.";
  }
}
