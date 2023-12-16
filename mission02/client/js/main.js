/* 

1. 클릭 이벤트 활성화
  - 이벤트 위임
  - 반복문
2. nav 클릭시 배경 색상 변경
  - data.js에서 불러오기
3. 이미지 변경
  - 배경색 변경 
  - 이미지 변경
4. 텍스트 변경
5. 함수 분리
  - setBgColor ✔️
  - setImage  ✔️
  - setNameText ✔️
*/

const nav = document.querySelector(".nav");
const visualImg = document.querySelector(".visual img");
const nickName = document.querySelector("h1");

function setBgColor(target) {
  let idx = target.dataset.index;

  document.body.style.background = `linear-gradient(to bottom, ${
    data[idx - 1].color[0]
  }, ${data[idx - 1].color[1]})`;
}

function setImage(target) {
  let idx = target.dataset.index;

  visualImg.src = `./assets/${data[idx - 1].name}.jpeg`;
  visualImg.alt = data[idx - 1].alt;
}

function setNameText(target) {
  let idx = target.dataset.index;

  nickName.textContent = data[idx - 1].name;
}

function setAudio(target) {
  let idx = target.dataset.index;
  let audio = new Audio();

  audio.src = `./assets/audio/${data[idx - 1].name.toLowerCase()}.m4a`;
  audio.volume = 0.5;
  audio.play();
}

function handleClick(e) {
  e.preventDefault();

  let clickedLi = e.target.closest("li");
  if (!clickedLi) return;

  const list = Array.from(nav.querySelectorAll("li"));

  list.forEach((li) => li.classList.remove("is-active"));
  clickedLi.classList.add("is-active");

  setBgColor(clickedLi);
  setImage(clickedLi);
  setNameText(clickedLi);
  setAudio(clickedLi);
}

nav.addEventListener("click", handleClick);
