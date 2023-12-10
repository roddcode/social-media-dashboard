const bodyElement = document.querySelector('body');
const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const radioButtons = document.querySelectorAll('.toggle__wrapper input');

const setColorMode = (mode) => {
  bodyElement.classList = mode;
  localStorage.setItem('colorMode', mode);
};

const colorModeFromLocalStorage = () => localStorage.getItem('colorMode') || null;

const colorModeFromPreferences = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const loadAndUpdateColor = () => {
  const color = colorModeFromLocalStorage() || colorModeFromPreferences();
  setColorMode(color);
  color === 'dark' ? darkButton.click() : lightButton.click();
};

const handleButtonClick = () => {
  darkButton.checked ? setColorMode('dark') : setColorMode('light');
};

radioButtons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  event.matches ? darkButton.click() : lightButton.click();
});

loadAndUpdateColor();
