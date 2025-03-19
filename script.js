<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBbgXCs2uiGVU0kCrBB90f6xnPAwbsRLGE",
    authDomain: "axti-xti.firebaseapp.com",
    projectId: "axti-xti",
    storageBucket: "axti-xti.firebasestorage.app",
    messagingSenderId: "404760789020",
    appId: "1:404760789020:web:a06665cf903e5099981fd9",
    measurementId: "G-46PPLM5840"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

// Элементы DOM
const authButton = document.getElementById('auth-button');
const authModal = document.getElementById('auth-modal');
const closeModal = document.querySelector('.close');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const registerEmail = document.getElementById('register-email');
const registerPassword = document.getElementById('register-password');
const loginButton = document.getElementById('login-button');
const registerButton = document.getElementById('register-button');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');
const logoutButton = document.getElementById('logout-button');
const authError = document.getElementById('auth-error');
const scrollTopButton = document.getElementById('scroll-top');

// Открытие модального окна
authButton.addEventListener('click', () => {
  authModal.style.display = 'flex';
});

// Закрытие модального окна
closeModal.addEventListener('click', () => {
  authModal.style.display = 'none';
});

// Переключение между формами
showRegister.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
});

showLogin.addEventListener('click', (e) => {
  e.preventDefault();
  registerForm.style.display = 'none';
  loginForm.style.display = 'block';
});

// Регистрация
registerButton.addEventListener('click', () => {
  const email = registerEmail.value;
  const password = registerPassword.value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      authError.style.display = 'none';
      alert('Регистрация успешна!');
      authModal.style.display = 'none';
    })
    .catch((error) => {
      authError.textContent = error.message;
      authError.style.display = 'block';
    });
});

// Вход
loginButton.addEventListener('click', () => {
  const email = loginEmail.value;
  const password = loginPassword.value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      authError.style.display = 'none';
      alert('Вход выполнен!');
      authModal.style.display = 'none';
    })
    .catch((error) => {
      authError.textContent = error.message;
      authError.style.display = 'block';
    });
});

// Выход
logoutButton.addEventListener('click', () => {
  auth.signOut().then(() => {
    alert('Вы вышли из системы.');
  });
});

// Отслеживание состояния аутентификации
auth.onAuthStateChanged((user) => {
  if (user) {
    // Пользователь авторизован
    authButton.style.display = 'none';
    logoutButton.style.display = 'block';
  } else {
    // Пользователь не авторизован
    authButton.style.display = 'block';
    logoutButton.style.display = 'none';
  }
});

// Показ кнопки "Наверх" при прокрутке
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
});