window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('record-email-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailString = form.querySelector('input[type=email]').value;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://us-east-1.aws.data.mongodb-api.com/app/api-v0-cviqo/endpoint/notifyme', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById('success-banner').classList.remove('hide');
      }
    };

    xhr.send(JSON.stringify({ 'email': emailString }));
  });
});
