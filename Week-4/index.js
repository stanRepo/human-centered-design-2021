const mouseList = document.querySelector("#mouseElements");
let pickedUpItems = [];

const main = () => {
  const listItems = document.querySelectorAll("ol>li");
  listItems.forEach((item) => {
    item.addEventListener("click", pickUp);
  });
};

// const pakAlles = () => {
//   const btn = document.querySelector("#pakAlles");
//   btn.addEventListener("click", (e) => {
//     console.log(e.target.parentElement.children[3]);
//     [].forEach.call(e.target.parentElement.children[3], function (child, i) {
//       pickUp(child);
//     });
//   });
// };

const pickUp = (e) => {
  console.log("firing");
  e.target.classList.add("hidden"); // hide section element

  const mouseElement = document.createElement("li"); // create new element
  mouseElement.innerHTML = e.target.innerHTML; // set newElement to section element
  mouseElement.classList.add("mouseEl");
  pickedUpItems.push(mouseElement);
  updateMouse(mouseElement);
  listenForPutDown(mouseList);
  document.body.style.cursor = "grabbing";
};

const updateMouse = (mouseElement) => {
  mouseList.appendChild(mouseElement);
  [].forEach.call(mouseList.children, function (child, i) {
    child.style.marginTop = `${45 * i}px`;
  });
};

const startMouseFollow = (mouseList) => {
  document.onmousemove = (e) => {
    mouseList.style.left = `${e.clientX + 10}px`;
    mouseList.style.top = `${e.clientY + window.scrollY}px`;
  };
};

const listenForPutDown = () => {
  const placeBackButtons = document.querySelectorAll(".plaatsTerug");
  if (mouseList.children.length !== 0) {
    placeBackButtons.forEach((btn) => {
      console.log("showing place down btn");
      btn.classList.remove("hidden");
      btn.addEventListener("click", (e) => {
        console.log(btn.parentElement);
        const ol = btn.parentElement.querySelector("ol");
        console.log(ol);
        ol.innerHTML += mouseList.innerHTML;
        mouseList.innerHTML = "";

        [].forEach.call(ol.children, function (child, i) {
          console.log(child);
          child.classList.remove("mouseEl");
          child.style.marginTop = 0;
        });

        placeBackButtons.forEach((thisBTN) => {
          thisBTN.classList.add("hidden");
        });
        document.body.style.cursor = "default";
      });
    });
  }
};

const dustBin = () => {
  const bin = document.querySelector("#dustBin");
  bin.style.cursor = "cell";

  console.log(bin);
  bin.addEventListener("click", (e) => {
    mouseList.innerHTML = "";
    document.body.style.cursor = "default";
  });
};

main();
// pakAlles();
startMouseFollow(mouseList);
dustBin();
