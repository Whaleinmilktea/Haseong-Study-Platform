const _ = require("./unberbar.js");
require("./style.css");

const shout = (...sentance) => console.log(...sentance);
const shoutToHtml = (...sentance) => {
  const app = document.querySelector("#app");
  app.append(
    ...sentance.map((sentance) => {
      const shoutHere = document.createElement("div");
      shoutHere.className = "shout";
      shoutHere.textContent = sentance;
      return shoutHere;
      // 코드가 실행이 되면, html의 요소 중 id가 app이라는 하위 요소를 찾고
      // 해당 요소의 자식 요소로 class="shout"이라는 div요소를 생성한다.
      // 그리고 div요소 내부에 들어갈 컨텐츠는 인자로 전달받은 sentance이다.
    })
  );
  return;
};

const mySentence = "Deus creavit homines significantia.";

const shoutOnce = _.once(shout);
const shoutToHtmlOnce = _.once(shoutToHtml);

shoutOnce(mySentence);
shoutOnce(mySentence);
shoutOnce(mySentence);
shoutOnce(mySentence);

shoutToHtmlOnce(mySentence);
shoutToHtmlOnce(mySentence);
shoutToHtmlOnce(mySentence);
shoutToHtmlOnce(mySentence);
