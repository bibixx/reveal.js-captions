const revealElement = Reveal.getRevealElement();

revealElement.style.height = "calc(100% - 200px)";

let styles = 'initial';

const captionsHeight = 200;
const captionerBannerHeight = 61;
const h = 200 + captionerBannerHeight;

const initStyles = ($captionsElement) => {
  styles = 'initial';

  $captionsElement.style.height = `${h}px`;
  $captionsElement.style.width = "100%";
  $captionsElement.style.position = "relative";
}

const fullScreenStyles = ($captionsElement) => {
  styles = 'fullscreen';

  $captionsElement.style.height = "100%";
  $captionsElement.style.width = "100%";
  $captionsElement.style.position = "absolute";
  $captionsElement.style.top = "0";
  $captionsElement.style.left = "0";
  $captionsElement.style.zIndex = "99";
}

const $captionsElement = document.createElement('iframe');
$captionsElement.src = "https://webcaptioner.com/captioner?autostart";
$captionsElement.allow = "microphone";
$captionsElement.style.background = "#000";

initStyles($captionsElement);

revealElement.parentElement.appendChild($captionsElement);

window.addEventListener('keydown', (e) => {
  if(e.key === 'c') {
    if (styles === 'initial') {
      fullScreenStyles($captionsElement);
    } else {
      initStyles($captionsElement);
    }
  }
})
