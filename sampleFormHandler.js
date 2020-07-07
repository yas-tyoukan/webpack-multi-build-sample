import maskKey from './maskKey';

const buttonEl = document.getElementById('sample-button');
const inputEl = document.querySelector('[name=key]');
buttonEl.addEventListener('click', () => {
  alert(maskKey(inputEl.value));
});
