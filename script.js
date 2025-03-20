import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { 
  getDatabase, 
  ref, 
  push, 
  onValue 
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

// Конфигурация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBbgXCs2uiGVU0kCrBB90f6xnPAwbsRLGE",
  authDomain: "axti-xti.firebaseapp.com",
  projectId: "axti-xti",
  storageBucket: "axti-xti.appspot.com",
  messagingSenderId: "404760789020",
  appId: "1:404760789020:web:a06665cf903e5099981fd9",
  measurementId: "G-46PPLM5840"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Элементы DOM для чата
const nicknameInput = document.getElementById('nickname');
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Переменная для хранения никнейма
let nickname = '';

// Обработчик ввода никнейма
nicknameInput.addEventListener('input', (e) => {
  nickname = e.target.value.trim();
});

// Обработчик отправки сообщения
sendButton.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (message === '' || nickname === '') {
    alert('Введите никнейм и сообщение!');
    return;
  }

  // Отправляем сообщение в Firebase
  const chatRef = ref(database, 'chat');
  push(chatRef, {
    user: nickname,
    text: message,
    timestamp: Date.now()
  });

  // Очищаем поле ввода сообщения
  messageInput.value = '';
});

// Загрузка и отображение сообщений
function loadChatMessages() {
  const chatRef = ref(database, 'chat');
  onValue(chatRef, (snapshot) => {
    chatBox.innerHTML = ''; // Очищаем чат перед обновлением
    snapshot.forEach((childSnapshot) => {
      const message = childSnapshot.val();
      const messageElement = document.createElement('p');
      messageElement.textContent = `${message.user}: ${message.text}`;
      chatBox.appendChild(messageElement);
    });

    // Прокручиваем чат вниз
    chatBox.scrollTop = chatBox.scrollHeight;
  });
}

// Загружаем сообщения при загрузке страницы
loadChatMessages();

const showGrid = document.getElementById('show-grid');
const posters = [];

for (let i = 1; i <= 16; i++) {
  posters.push(`photos/photo${i}.jpg`);
}

posters.sort(() => Math.random() - 0.5);
posters.forEach(poster => {
  const posterItem = document.createElement('div');
  posterItem.classList.add('show-item');
  posterItem.innerHTML = `<img src="${poster}" alt="Афиша">`;
  showGrid.appendChild(posterItem);
});
const headerTitle = document.querySelector('header h1');

// Список шрифтов для рандомного выбора
const fonts = [
  'Black Ops One, cursive',
  'UnifrakturMaguntia, cursive',
  'Roboto Mono, monospace',
  'Arial, sans-serif',
  'Courier New, monospace'
];

// Список цветов для рандомного выбора
const colors = [
  '#ff0000', // Красный
  '#00ff00', // Зеленый
  '#0000ff', // Синий
  '#ffff00', // Желтый
  '#ff00ff', // Пурпурный
  '#00ffff'  // Голубой
];

// Функция для рандомного изменения стилей
function randomizeTitle() {
  // Рандомный шрифт
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  // Рандомный цвет
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  // Рандомный текст (например, замена символов)
  const randomText = 'Axti-Xti'.split('').map(char => {
    return Math.random() > 0.5 ? char : String.fromCharCode(Math.floor(Math.random() * 94) + 32);
  }).join('');

  // Применяем изменения
  headerTitle.style.fontFamily = randomFont;
  headerTitle.style.color = randomColor;
  headerTitle.textContent = randomText;
}

// Запускаем анимацию каждые 2 секунды
setInterval(randomizeTitle, 2000);