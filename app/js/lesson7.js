const wordRusText = document.querySelectorAll('.word__rus-text');
 const wordRus = document.querySelectorAll('.word-rus');
 let lesson6Rus = [
  "Мне нравится это",
  "Мне нравится английский",
  "Мне нравятся твои уроки",
  "Мне нравится эта идея",
  "Мне нравится эта вещь",
  "Мне нравится это видео",
  "Мне нравится этот плейлист",
  "Мне нравится этот канал",
  "Мне нравится этот метод",
  "Мне действительно это нравится",
  "Мне действительно нравятся эти уроки",
  "Мне также это нравится",
  "Мне так же нравится этот канал",
  "Мне нравится этот канал так же",
  "Нам нравится это",
  "Тебе нравится это",
  "Им нравится это",
  "Ему нравится это",
  "Ей нравится это",
  "Я вижу,тебе это нравится",
  "Я знаю, это им нравится",
  "Ей нравится это место",
  "Ему нравится это платье",
  "Моему другу нравится этот отель",
  "Я хотел бы чашку чая",
  "Я хотел бы чашку кофе",
  "Я хотел бы выпить чашку кофе",
  "Я хотел бы выпить чашку чая",
  "Я хотел бы сделать это",
  "Я хотел бы знать английсктй очень хорошо",
  "Я хотел бы посетить это место",
  "Я хотел бы стать доктором",
];

const wordEngText = document.querySelectorAll('.word__eng-text');
let lesson6Eng = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];


for (let i = 0; i < wordRusText.length; i++) {
  wordRusText[i].textContent = lesson6Rus[i];
  wordEngText[i].textContent = lesson6Eng[i];
//убирает строки с классом "new-word-hide", вместо них отрисовывается то, что в html
  if (wordRusText[i].classList.contains('new-word-hide')) {
    wordRusText[i].textContent = '';
  }
  if (wordEngText[i].classList.contains('new-word-hide')) {
    wordEngText[i].textContent = '';
  }

if(lesson6Rus[i].length > 43) {
  // console.log(lesson6Rus[i].length);
  // console.log(i);
  // console.log(wordRusText[i].textContent);
  wordRus[i].classList.remove('word-rus');
  wordRus[i].classList.add('lh-min');
}
}

const newWordsBtn = document.querySelector('.new-words-btn').onclick = viewNewWords;

function viewNewWords() {
  let newWord = document.querySelectorAll('.new-word');
  for (let i = 0; i < newWord.length; i++) {
    newWord[i].classList.add('new-word-active');
  }
}
