const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const userEmail = document.querySelector(".user-email-input");
const userPw = document.querySelector(".user-password-input");
const loginBtn = document.querySelector(".btn-login");

// 이메일, 비밀번호 유효성 여부나타내는 상태 변수
let isEmailValid = false;
let isPwValid = false;

// 상태 변수 업데이트
function updateState() {
  isEmailValid = emailReg(userEmail.value);
  isPwValid = pwReg(userPw.value);
}

// 폼의 유효성 체크
function isFormValid() {
  return isEmailValid && isPwValid;
}

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  updateState();

  // 폼 유효 && 입력한 이메일 && 입력한 비밀번호
  if (
    isFormValid() &&
    userEmail.value === user.id &&
    userPw.value === user.pw
  ) {
    window.location.href = "welcome.html";
  } else {
    alert(" 아이디 또는 비밀번호를 잘못 입력했습니다.");
  }
});
