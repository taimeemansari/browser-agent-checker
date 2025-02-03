async function copyToClipBoard() {
  const userAgentToast = document.querySelector("#userAgentToast");
  const content = document.querySelector("#userAgentBlock").innerHTML;
  await navigator.clipboard.writeText(content);
  userAgentToast.classList.remove("hidden");
  setTimeout(() => {
    userAgentToast.classList.add("hidden");
  }, 1000);
}

function isFxFocusCheck() {
  let userAgent = navigator.userAgent.toLowerCase();
  const isFxFocusToast = document.querySelector("#isFxFocusToast");
  const isFFiOs = !!userAgent.match(/fxios/i) && userAgent.match(/safari/i) === null;
  const isFFAndriod = !!userAgent.match(/android/i) && !!userAgent.match(/firefox/i);
  const isServiceWorkerSupported = `${"serviceWorker" in navigator}`;

  if ((isFFiOs || isFFAndriod) && isServiceWorkerSupported) {
    isFxFocusToast.innerHTML = "yay! its firefox focus browser";
    isFxFocusToast.classList.remove("hidden");
  } else {
    isFxFocusToast.innerHTML = "No!..not a firefox focus browser";
    isFxFocusToast.classList.remove("hidden");
  }
  setTimeout(() => {
    isFxFocusToast.classList.add("hidden");
  }, 1000);
}

function detectBrowser() {
  let userAgent = navigator.userAgent;
  let userAgentBlock = document.querySelector("#userAgentBlock");
  let cookieEnabled = document.querySelector("#cookieEnabled");
  let pdfViewer = document.querySelector("#pdfViewer");
  let serviceWorker = document.querySelector("#serviceWorker");
  let copyAction = document.querySelector("#copyAction");
  let isFxFocusBtn = document.querySelector("#isFxFocusBtn");

  copyAction.addEventListener("click", copyToClipBoard);
  isFxFocusBtn.addEventListener("click", isFxFocusCheck);

  userAgentBlock.innerHTML = userAgent;
  cookieEnabled.innerHTML = `Cookie Enabled: ${navigator.cookieEnabled}`;
  pdfViewer.innerHTML = `PDF Viewer: ${navigator.cookieEnabled}`;
  serviceWorker.innerHTML = `Service Worker: ${"serviceWorker" in navigator ? "suppported" : "not"}`;
}

window.onload = function (e) {
  detectBrowser();
};
