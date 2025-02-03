async function copyToClipBoard() {
  const toast = document.querySelector("#toast");
  const content = document.querySelector("#user-agent-code-block").innerHTML;
  await navigator.clipboard.writeText(content);
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 1000);
}

function detectBrowser() {
  let userAgent = navigator.userAgent;
  let userAgentBlock = document.querySelector("#user-agent-code-block");
  let mimeBlock = document.querySelector("#mimeTypes");
  let cookieEnabled = document.querySelector("#cookieEnabled");
  let plugins = document.querySelector("#plugins");
  let copyAction = document.querySelector("#copyAction");

  copyAction.addEventListener("click", copyToClipBoard);
  userAgentBlock.innerHTML = userAgent;
  cookieEnabled.innerHTML = `pdf viewer enable: ${navigator}`;
  plugins.innerHTML = `plugins: ${navigator.plugins.length}`;

  console.log(navigator.plugins.length);
}

window.onload = function (e) {
  detectBrowser();
};
