let signImg = document.querySelector(".sign-section__wrapper");
let btnSection = document.querySelector(".btn-section");
let signSection = document.querySelector(".sign");
let signIn = document.querySelector(".signIn");
let signUp = document.querySelector(".signUp");
let or = document.querySelector(".or");
let step1 = document.querySelector(".step_one");
let step2 = document.querySelector(".step_two");
let step3 = document.querySelector(".step_three");
let mainSection = document.querySelector(".main-section");
let statusSection = document.querySelector(".status-section");
let profileSection = document.querySelector('.profile-section')

function sign() {
  // signImg.style.backgroundImage = 'url(/img/sing.png)'
  signImg.style.minHeight = "calc(100vh - 185px)";
  btnSection.style.display = "flex";
}

// Вход

function signInn() {
  signImg.style.minHeight = "calc(100vh - 400px)";
  signIn.style.display = "flex";
  signUp.style.display = "none";
  or.style.display = "flex";
  document.getElementById("btnSignIn").onclick = mainSign;
  document.getElementById("create").onclick = signUpp;
}

// Регистрация

function signUpp() {
  signImg.style.minHeight = "calc(100vh - 485px)";
  signIn.style.display = "none";
  signUp.style.display = "flex";
  or.style.display = "none";
  document.getElementById("create").onclick = stepFirst;
  document.getElementById("btnSignIn").onclick = signInn;
}

// Первый шаг

function stepFirst() {
  console.log("1");
  signSection.style.display = "none";
  step1.style.display = "flex";
  step1.addEventListener("input", () => {
    if (
      document.getElementById("weightInput").value > 0 &&
      document.getElementById("weightInput").value < 500
    ) {
      document.getElementById("weightInput").value =
        document.getElementById("weightInput").value;
    } else {
      console.log("Некорректный ввод данных");
    }
  });
}

// Второй шаг

function stepTwo() {
  console.log("2");
  step1.style.display = "none";
  step2.style.display = "flex";
}

// Третий шаг

function stepThree() {
  console.log("2");
  step2.style.display = "none";
  step3.style.display = "flex";
}

// Главная с регстрации

function main() {
  step3.style.display = "none";
  mainSection.style.display = "flex";
  localStorage.setItem("page", "mainPage");
}

// Главная с входа

function mainSign() {
  signSection.style.display = "none";
  mainSection.style.display = "flex";
}

function return1() {
  step1.style.display = "none";
  signSection.style.display = "flex";
  signUpp();
}

function status() {
  if (localStorage.getItem("page") == "mainPage") {
    mainSection.style.display = "none";
    statusSection.style.display = "flex";
    localStorage.setItem("page", "statusPage");
  } else if (localStorage.getItem("page") == "statusPage") {
    statusSection.style.display = "none";
    mainSection.style.display = "flex";
    localStorage.setItem("page", "mainPage");
  }
}

function handleButton(page) {
  switch (page) {
    case "mainPage":
      console.log("Вы нажали на кнопку Главная");
      localStorage.setItem("page", "mainPage");
      document.addEventListener('click', function(event) {
        if (event.target.closest('section').className !== 'main-section') {
          console.log(event.target.closest('section').className, 'main-section')
          console.log(event.target.closest('section').className)
          event.target.closest('section').style.display = 'none'
        }
      })
      mainSection.style.display = "flex";
      break;
    case "statusPage":
      console.log("Вы нажали на кнопку Статус");
      localStorage.setItem("page", "statusPage");
      document.addEventListener('click', function(event) {
        if (event.target.closest('section').className !== 'status-section') {
          event.target.closest('section').style.display = 'none'
        }
      })
      statusSection.style.display = "flex";
      break;
    case "profilePage":
      console.log("Вы нажали на кнопку Профиль");
      console.log(localStorage.getItem('page'))
      localStorage.setItem("page", "profilePage");
      document.addEventListener('click', function(event) {
        if (event.target.closest('section').className !== 'profile-section') {
          event.target.closest('section').style.display = 'none'
        }
      })
      profileSection.style.display = 'flex'
      break;
    default:
      console.log("Неизвестная страница");
  }
}
