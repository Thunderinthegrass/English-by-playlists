let tableCheck =  document.querySelector('.table-check');
let tableCheckRus =  document.querySelector('.table-check-rus');
let wordEngMask = document.querySelectorAll('.word-eng__mask');
let wordRusMask = document.querySelectorAll('.word-rus__mask');
let showTranslate = document.querySelectorAll('.show-translate');
let showTranslateRus = document.querySelectorAll('.show-translate-rus');
let hideTranslateBg = document.querySelector('.hide-translate-bg');
let hideTranslateBgRus = document.querySelector('.hide-translate-bg-rus');
let showTranslateBg = document.querySelector('.show-translate-bg');
let showTranslateBgRus = document.querySelector('.show-translate-bg-rus');


tableCheck.onclick = function() {
  if (tableCheck.checked) {
    wordEngMask.forEach(element =>{
      element.classList.toggle('mask-eng');
    });
    hideTranslateBg.style.transform = "translateX(0)";
    showTranslateBg.style.transform = "translateX(-100%)";
  }
  else{
    wordEngMask.forEach(element =>{
      element.classList.remove('mask-eng');
    });
    hideTranslateBg.style.transform = "translateX(100%)";
    showTranslateBg.style.transform = "translateX(0)";
  }
}

tableCheckRus.onclick = function() {
  if (tableCheckRus.checked) {
    wordRusMask.forEach(element =>{
      element.classList.toggle('mask');
    });
    hideTranslateBgRus.style.transform = "translateX(100%)";
    showTranslateBgRus.style.transform = "translateX(0)";
  }
  else{
    wordRusMask.forEach(element =>{
      element.classList.remove('mask');
    });
    hideTranslateBgRus.style.transform = "translateX(0)";
    showTranslateBgRus.style.transform = "translateX(-100px)";
  }
}

// --------кнопки показать-скрыть русские слова-------------
let buttonView1 = document.querySelector('.button-view-1');
let buttonView2 = document.querySelector('.button-view-2');
let buttonView3 = document.querySelector('.button-view-3');
let buttonView4 = document.querySelector('.button-view-4');
let buttonView5 = document.querySelector('.button-view-5');
let buttonView6 = document.querySelector('.button-view-6');
let buttonView7 = document.querySelector('.button-view-7');
let buttonView8 = document.querySelector('.button-view-8');
let buttonView9 = document.querySelector('.button-view-9');
let buttonView10 = document.querySelector('.button-view-10');
let buttonView11 = document.querySelector('.button-view-11');
let buttonView12 = document.querySelector('.button-view-12');
let buttonView13 = document.querySelector('.button-view-13');
let buttonView14 = document.querySelector('.button-view-14');
let buttonView15 = document.querySelector('.button-view-15');
let buttonView16 = document.querySelector('.button-view-16');
let buttonView17 = document.querySelector('.button-view-17');
let buttonView18 = document.querySelector('.button-view-18');
let buttonView19 = document.querySelector('.button-view-19');
let buttonView20 = document.querySelector('.button-view-20');
let buttonView21 = document.querySelector('.button-view-21');
let buttonView22 = document.querySelector('.button-view-22');
let buttonView23 = document.querySelector('.button-view-23');
let buttonView24 = document.querySelector('.button-view-24');
let buttonView25 = document.querySelector('.button-view-25');
let buttonView26 = document.querySelector('.button-view-26');
let buttonView27 = document.querySelector('.button-view-27');
let buttonView28 = document.querySelector('.button-view-28');
let buttonView29 = document.querySelector('.button-view-29');
let buttonView30 = document.querySelector('.button-view-30');
let buttonView31 = document.querySelector('.button-view-31');
let buttonView32 = document.querySelector('.button-view-32');
let buttonView33 = document.querySelector('.button-view-33');
let buttonView34 = document.querySelector('.button-view-34');

let wordRusMask1 = document.querySelector('.word-rus__mask-1');
let wordRusMask2 = document.querySelector('.word-rus__mask-2');
let wordRusMask3 = document.querySelector('.word-rus__mask-3');
let wordRusMask4 = document.querySelector('.word-rus__mask-4');
let wordRusMask5 = document.querySelector('.word-rus__mask-5');
let wordRusMask6 = document.querySelector('.word-rus__mask-6');
let wordRusMask7 = document.querySelector('.word-rus__mask-7');
let wordRusMask8 = document.querySelector('.word-rus__mask-8');
let wordRusMask9 = document.querySelector('.word-rus__mask-9');
let wordRusMask10 = document.querySelector('.word-rus__mask-10');
let wordRusMask11 = document.querySelector('.word-rus__mask-11');
let wordRusMask12 = document.querySelector('.word-rus__mask-12');
let wordRusMask13 = document.querySelector('.word-rus__mask-13');
let wordRusMask14 = document.querySelector('.word-rus__mask-14');
let wordRusMask15 = document.querySelector('.word-rus__mask-15');
let wordRusMask16 = document.querySelector('.word-rus__mask-16');
let wordRusMask17 = document.querySelector('.word-rus__mask-17');
let wordRusMask18 = document.querySelector('.word-rus__mask-18');
let wordRusMask19 = document.querySelector('.word-rus__mask-19');
let wordRusMask20 = document.querySelector('.word-rus__mask-20');
let wordRusMask21 = document.querySelector('.word-rus__mask-21');
let wordRusMask22 = document.querySelector('.word-rus__mask-22');
let wordRusMask23 = document.querySelector('.word-rus__mask-23');
let wordRusMask24 = document.querySelector('.word-rus__mask-24');
let wordRusMask25 = document.querySelector('.word-rus__mask-25');
let wordRusMask26 = document.querySelector('.word-rus__mask-26');
let wordRusMask27 = document.querySelector('.word-rus__mask-27');
let wordRusMask28 = document.querySelector('.word-rus__mask-28');
let wordRusMask29 = document.querySelector('.word-rus__mask-29');
let wordRusMask30 = document.querySelector('.word-rus__mask-30');
let wordRusMask31 = document.querySelector('.word-rus__mask-31');
let wordRusMask32 = document.querySelector('.word-rus__mask-32');
let wordRusMask33 = document.querySelector('.word-rus__mask-33');
let wordRusMask34 = document.querySelector('.word-rus__mask-34');


buttonView1.onclick = function(){
  wordRusMask1.classList.toggle('mask');
}

buttonView2.onclick = function(){
  wordRusMask2.classList.toggle('mask');
}

buttonView3.onclick = function(){
  wordRusMask3.classList.toggle('mask');
}

buttonView4.onclick = function(){
  wordRusMask4.classList.toggle('mask');
}

buttonView5.onclick = function(){
  wordRusMask5.classList.toggle('mask');
}

buttonView6.onclick = function(){
  wordRusMask6.classList.toggle('mask');
}

buttonView7.onclick = function(){
  wordRusMask7.classList.toggle('mask');
}

buttonView8.onclick = function(){
  wordRusMask8.classList.toggle('mask');
}

buttonView9.onclick = function(){
  wordRusMask9.classList.toggle('mask');
}

buttonView10.onclick = function(){
  wordRusMask10.classList.toggle('mask');
}

buttonView11.onclick = function(){
  wordRusMask11.classList.toggle('mask');
}

buttonView12.onclick = function(){
  wordRusMask12.classList.toggle('mask');
}

buttonView13.onclick = function(){
  wordRusMask13.classList.toggle('mask');
}

buttonView14.onclick = function(){
  wordRusMask14.classList.toggle('mask');
}

buttonView15.onclick = function(){
  wordRusMask15.classList.toggle('mask');
}

buttonView16.onclick = function(){
  wordRusMask16.classList.toggle('mask');
}

buttonView17.onclick = function(){
  wordRusMask17.classList.toggle('mask');
}

buttonView18.onclick = function(){
  wordRusMask18.classList.toggle('mask');
}

buttonView19.onclick = function(){
  wordRusMask19.classList.toggle('mask');
}

buttonView20.onclick = function(){
  wordRusMask20.classList.toggle('mask');
}

buttonView21.onclick = function(){
  wordRusMask21.classList.toggle('mask');
}

buttonView22.onclick = function(){
  wordRusMas22.classList.toggle('mask');
}
buttonView23.onclick = function(){
  wordRusMask23.classList.toggle('mask');
}

buttonView24.onclick = function(){
  wordRusMask24.classList.toggle('mask');
}

buttonView25.onclick = function(){
  wordRusMask25.classList.toggle('mask');
}

buttonView26.onclick = function(){
  wordRusMask26.classList.toggle('mask');
}

buttonView27.onclick = function(){
  wordRusMask27.classList.toggle('mask');
}

buttonView28.onclick = function(){
  wordRusMask28.classList.toggle('mask');
}

buttonView29.onclick = function(){
  wordRusMask29.classList.toggle('mask');
}

buttonView30.onclick = function(){
  wordRusMask30.classList.toggle('mask');
}

buttonView31.onclick = function(){
  wordRusMask31.classList.toggle('mask');
}

buttonView32.onclick = function(){
  wordRusMask32.classList.toggle('mask');
}

buttonView33.onclick = function(){
  wordRusMask33.classList.toggle('mask');
}

buttonView34.onclick = function(){
  wordRusMask34.classList.toggle('mask');
}
