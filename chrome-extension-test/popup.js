console.dir("running extension");
// chrome.tabs.query({}, function (tabs) {
//     for (var i = 0; i < tabs.length; i++) {
//         chrome.tabs.executeScript(tabs[i].id, {file: "main.js"});
//     }
// }
// );

// chrome.runtime.onInstalled.addListener(function() {
//     chrome.storage.sync.set({color: '#3aa757'}, function() {
//       console.log('The color is green.');
//     });
//     chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//       chrome.declarativeContent.onPageChanged.addRules([{
//         conditions: [new chrome.declarativeContent.PageStateMatcher({
//           pageUrl: {hostEquals: 'https://sportsartdenhelder.nl/'},
//         })
//         ],
//             actions: [new chrome.declarativeContent.ShowPageAction()]
//       }]);
//     });
//   });

function save() {
  const inputSaveURL = document.querySelector("#saveSiteURL");
  const inputSaveName = document.querySelector("#saveSiteName");
  const inputElements = document.querySelectorAll("input");
  const saveBtn = document.querySelector("main>button");

  console.dir(inputElements);
  console.dir(inputElements);
  saveBtn.addEventListener("click", (e) => {
    // assemble obj
    const obj = {
      name: inputSaveName.value,
      URL: inputSaveURL.value,
    };
    // const history = window.localStorage.getItem("mouseBotHistory");
    let history;
    if (chrome.storage.sync.get(["mouseBotHistory"])) {
      history = chrome.storage.sync.get(["mouseBotHistory"]);
    }
    console.log(history);

    if (history === null || undefined) {
      chrome.storage.sync.set({ mouseBotHistory: [obj] }, function () {
        //console.log("Value is set to " + value);
      });
    } else {
      history.push(obj);
      chrome.storage.sync.set({ mouseBotHistory: history }, function () {
        // console.log("Value is set to " + value);
      });
    }

    chrome.storage.sync.get(["mouseBotHistory"], function (result) {
      console.log("Value currently is " + result.key);
    });
  });
}

save();
