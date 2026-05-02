function copyCode() {
  const text = document.getElementById("code-container").innerText;
  navigator.clipboard.writeText(text);
  console.log(text);
  alert("Copied!");
}
