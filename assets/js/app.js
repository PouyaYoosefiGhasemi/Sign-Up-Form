function focus(enteryId) {
  document.getElementById(`${enteryId}-underline`).style.borderColor = "black";
  document.getElementById(`${enteryId}-logo`).style.color = "blue";
}

function blur(enteryId) {
  const id = document.getElementById(`${enteryId}`);

  if (id.checkValidity()) {
    document.getElementById(`${enteryId}-logo`).style.color = "green";
    document.getElementById(`${enteryId}`).style.color = "black";
    document.getElementById(`${enteryId}-underline`).style.borderColor =
      "green";
  } else {
    document.getElementById(`${enteryId}`).style.color = "red";
    document.getElementById(`${enteryId}-logo`).style.color = "red";
    document.getElementById(`${enteryId}-underline`).style.borderColor = "red";
  }
}

function finalCheck() {
  const id = document.getElementById("password-confirm").value;
  const id2 = document.getElementById("password").value;

  if (id != id2) {
    alert("مقادیر قرمز شده میباست یکسان باشند");
    return false;
  } else {
    return true;
  }
}

function inputCustomize(input) {
  const id = document.getElementById(`${input}`);

  id.addEventListener("focus", (test) => {
    focus(`${input}`);
  });

  id.addEventListener("blur", (test) => {
    blur(`${input}`);
  });
}

inputCustomize("last-name");
inputCustomize("phone");
inputCustomize("email");
inputCustomize("first-name");
inputCustomize("password");

document
  .getElementById("password-confirm")
  .addEventListener("focus", (test) => {
    focus("password-confirm");
  });
document.getElementById("password-confirm").addEventListener("blur", (test) => {
  const id = document.getElementById("password-confirm");
  const id2 = document.getElementById("password");

  if (!id.checkValidity()) {
    document.getElementById("password-confirm-logo").style.color = "red";
    id.style.color = "red";
    document.getElementById("password-confirm-underline").style.borderColor =
      "red";
  } else if (id.value != id2.value) {
    document.getElementById("password-confirm-underline").style.borderColor =
      "red";
    document.getElementById("password-underline").style.borderColor = "red";
    id.style.color = "black";
    id2.style.color = "black";
    document.getElementById("password-confirm-logo").style.color = "black";
    document.getElementById("password-logo").style.color = "black";
  } else {
    id.style.color = "black";
    document.getElementById("password-confirm-logo").style.color = "green";
    document.getElementById("password-confirm-underline").style.borderColor =
      "green";
    id2.style.color = "black";
    document.getElementById("password-logo").style.color = "green";
    document.getElementById("password-underline").style.borderColor = "green";
  }
});
