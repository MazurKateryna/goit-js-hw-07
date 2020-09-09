const inputRange = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

function ghangeFontSize() {
  spanText.setAttribute('style', `font-size: ${inputRange.value}px`);
}

inputRange.addEventListener('input', ghangeFontSize);