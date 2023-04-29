// disable the rightclick and some key function
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// disable keys
document.onkeydown = (e) => {
  if (e.keyCode === 123) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode === "I".charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode === "J".charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode === "C".charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) {
    return false;
  }
  if (e.keyCode === "Q".charCodeAt(0)) {
    return false;
  }
};
