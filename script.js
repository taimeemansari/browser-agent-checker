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

  let copyAction = document.querySelector("#copyAction");
  copyAction.addEventListener("click", copyToClipBoard);
  userAgentBlock.innerHTML = userAgent;
  mimeBlock.innerHTML = `pdf viewer enable: ${navigator.pdfViewerEnabled}`;
}

window.onload = function (e) {
  detectBrowser();
};
