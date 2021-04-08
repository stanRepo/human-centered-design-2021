console.dir("running in background");
console.log(self);
function addLayer() {
  let body = document.querySelector("body");
  console.log(body);
  body.insertAdjacentHTML(
    "beforeend",
    `
        <div class="mouseBot-layer"><h1>MOUSEBOT</h1></div>
        `
  );
  const layer = document.querySelector(".mouseBot-layer");
}

addLayer();
