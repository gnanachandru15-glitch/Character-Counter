const messageInput = document.getElementById("message");
const counter = document.getElementById("counter");
const warning = document.getElementById("warning");
const maxLength = 200;

function updateCounter() {
  const typedLength = messageInput.value.length;
  const remaining = maxLength - typedLength;

  counter.textContent = `${typedLength}/${maxLength} characters`;

  if (typedLength >= maxLength) {
    warning.classList.add("show");
  } else {
    warning.classList.remove("show");
  }

  if (remaining < 0) {
    messageInput.value = messageInput.value.slice(0, maxLength);
  }
}

messageInput.addEventListener("input", updateCounter);
updateCounter();
