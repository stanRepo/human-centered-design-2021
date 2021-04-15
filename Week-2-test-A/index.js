let pickedUpItems = [];
function pickUp() {
  const items = document.querySelectorAll("ol>li");
  const mouseElementsTarget = document.querySelector("#mouseElements");
  const mouseEl = document.querySelector(".mouseEl");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      item.parentElement.parentElement.children[1].classList.remove("hidden");

      const mouseEl = document.createElement("p");
      mouseEl.classList.add("mouseEl");
      mouseEl.innerHTML += item.innerText;
      pickedUpItems.push(mouseEl);

      console.log(pickedUpItems);
      removeFromList(item);
      putBack(item, mouseEl);
      dustBin(mouseEl, pickedUpItems);
      if (mouseElementsTarget.children.length !== pickedUpItems.length) {
        mouseElementsTarget.insertAdjacentElement("afterbegin", mouseEl);

        document.onmousemove = (e) => {
          pickedUpItems.forEach((item, i) => {
            item.style.left = `${e.clientX + 5}px`;
            item.style.top = `${e.clientY + i * 30}px`;
          });
        };
      }
    });
  });
}

pickUp();

function putBack(item, mouseEl) {
  const plaatsTerugBtns = document.querySelectorAll(".plaatsTerug");
  plaatsTerugBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("fired");
      console.log(item);
      console.log(mouseEl.parentElement);
      btn.parentElement.children[2].appendChild(item);
      mouseEl.parentElement.removeChild(mouseEl);
      item.parentElement.parentElement.children[1].classList.add("hidden"); // hide putback
      pickedUpItems = [];
    });
  });
}

function removeFromList(item) {
  item.parentElement.removeChild(item);
}

function deleteMouseEl(mouseEl) {
  mouseEl.parentElement.removeChild(mouseEl);
}

function dustBin(mouseEl, pickedUpItems) {
  const dustBin = document.querySelector("#dustBin");
  dustBin.addEventListener("click", () => {
    // mouseEl.paren;
    pickedUpItems = [];
    deleteMouseEl(mouseEl);
  });
}
