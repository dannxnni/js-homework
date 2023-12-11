const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
  false => input에 is--invalid 추가
  true => input에 is--invalid 제거

2. pw 정규표현식을 사용한 validation
  false => input에 is--invalid 추가
  true => input에 is--invalid 제거

3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

/* 내 코드 */

// function emailReg(text) {
//   const re =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//   return re.test(String(text).toLowerCase());
// }

// function pwReg(text) {
//   const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
//   return re.test(String(text).toLowerCase());
// }

// const userEmail = document.querySelector(".user-email-input");
// const userPw = document.querySelector(".user-password-input");
// const loginBtn = document.querySelector(".btn-login");

// // 이메일, 비밀번호 유효성 여부나타내는 상태 변수
// let isEmailValid = false;
// let isPwValid = false;

// // 상태 변수 업데이트
// function updateState() {
//   isEmailValid = emailReg(userEmail.value);
//   isPwValid = pwReg(userPw.value);
// }

// // 폼의 유효성 체크
// function isFormValid() {
//   return isEmailValid && isPwValid;
// }

// loginBtn.addEventListener("click", (e) => {
//   e.preventDefault();

//   updateState();

//   // 폼 유효 && 입력한 이메일 && 입력한 비밀번호
//   if (
//     isFormValid() &&
//     userEmail.value === user.id &&
//     userPw.value === user.pw
//   ) {
//     window.location.href = "welcome.html";
//   } else {
//     alert(" 아이디 또는 비밀번호를 잘못 입력했습니다.");
//   }
// });

/* 범쌤 코드 */

const emailInput = document.querySelector("#userEmail");
const pwInput = document.querySelector("#userPassword");
const loginButton = document.querySelector(".btn-login");

let emailPass = false;
let pwPass = false;

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function handleCheckEmail() {
  // 사용자가 타이핑 할 때마다 걔속 실행됨
  let value = this.value;

  if (emailReg(value)) {
    // success
    this.classList.remove("is--invalid");
    emailPass = true;
  } else {
    this.classList.add("is--invalid");
    emailPass = false;
  }
}

function handleCheckPw() {
  // 사용자가 타이핑 할 때마다 걔속 실행됨
  let value = this.value;

  if (pwReg(value)) {
    // success
    this.classList.remove("is--invalid");
    pwPass = true;
  } else {
    this.classList.add("is--invalid");
    pwPass = false;
  }
}

function handleLogin(e) {
  e.preventDefault(); // 기본 동작 차단

  if (emailPass && pwPass) {
    try {
      const id = emailInput.value;
      const pw = pwInput.value;
      const getUserId = user.id;  // 비동기 => 1s
      const getUserPw = user.pw;  // 비동기 => 1s
  
      if (id === getUserId && pw === getUserPw) {
        window.location.href = "welcome.html";
      }
    } catch(e) {
      console.log("해당 유저의 정보를 가져오지 못했습니다.")
    }
  } else {
    // alert("ERROR");
    gsap.to("form", {
      y: 10,
      repeat: 8,
      yoyo: true,
      duration: 0.08,
      clearProps: true,
    });
  }
}

emailInput.addEventListener("input", handleCheckEmail);
pwInput.addEventListener("input", handleCheckPw);
loginButton.addEventListener("click", handleLogin);
