/* Constants */
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

/* Selectors */
const body = document.querySelector('body');
const displayedColorSpan = document.getElementById('displayedColorSpan');
const changeColorBtn = document.getElementById('changeColorBtn');
const generateNewColorBtn = document.getElementById('generateNewColorBtn');

/* Functions */
const handleChangeColorBtnClick = (isRandom = false) => {
  console.log('isRandom', isRandom);
  const randomColor = isRandom
    ? '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')
    : COLORS[Math.floor(Math.random() * COLORS.length)];

  body.style.backgroundColor = randomColor;
  displayedColorSpan.textContent = randomColor;
};

/* Event Listeners */
changeColorBtn.addEventListener('click', () => handleChangeColorBtnClick());
generateNewColorBtn.addEventListener('click', () =>
  handleChangeColorBtnClick(true)
);
