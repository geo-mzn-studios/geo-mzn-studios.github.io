function copyCode() {
  const text = document.getElementById("code").innerText;
  navigator.clipboard.writeText(text);
  console.log(text)
  alert("Copied!");
}
