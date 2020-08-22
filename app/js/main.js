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


// Прокрутка номеров уроков
;(function() {
	'use strict';

	function ScrollBox(container, nameEvent) {
		// имя события прокрутки
		this.nameEvent = nameEvent;
		// родительский элемент в котором находится контент и скроллбар
		this.viewport = container.querySelector('.viewport');
		// элемент с контентом
		this.content = this.viewport.querySelector('.content');
		// высоты полученных элементов
		this.viewportHeight = this.viewport.offsetHeight;
		this.contentHeight = this.content.scrollHeight;
		// возможная максимальная прокрутка контента
		this.max = this.viewport.clientHeight - this.contentHeight;
		// соотношение между высотами вьюпорта и контента
		this.ratio = this.viewportHeight / this.contentHeight;
		// минимальная высота ползунка скроллбара
		this.scrollerHeightMin = 25;
		// шаг прокручивания контента при наступлении события 'wheel'
		// чем меньше шаг, тем медленнее и плавнее будет прокручиваться контент
		this.step = 20;
		// флаг нажатия на левую кнопку мыши
		this.pressed = false;
	}

	// для сокращения записи, создадим переменную, которая будет ссылаться
	// на прототип 'ScrollBox'
	const fn = ScrollBox.prototype;

	fn.init = function() {
		// если высота контента меньше или равна высоте вьюпорта,
		// выходим из функции
		if (this.viewportHeight >= this.contentHeight) return;
		// формируем полосу прокрутки и полунок
		this.createScrollbar();
		// устанавливаем обработчики событий
		this.registerEventsHandler();
	};

	fn.createScrollbar = function() {
		// создаём новые DOM-элементы DIV из которых будет
		// сформирован скроллбар
		let scrollbar = document.createElement('div'),
			scroller = document.createElement('div');

		// присваиваем созданным элементам соответствующие классы
		scrollbar.className = 'scrollbar';
		scroller.className = 'scroller';

		// вставляем созданные элементы в document
		scrollbar.appendChild(scroller);
		this.viewport.appendChild(scrollbar);

		// получаем DOM-объект ползунка полосы прокрутки, вычисляем и
		// устанавливаем его высоту
		this.scroller = this.viewport.querySelector('.scroller');
		this.scrollerHeight = parseInt(this.ratio * this.viewportHeight);
		this.scrollerHeight = (this.scrollerHeight < this.scrollerHeightMin) ? this.scrollerHeightMin : this.scrollerHeight;
		this.scroller.style.height = this.scrollerHeight + 'px';
		// вычисляем максимально возможное смещение ползунка от верхней границы вьюпорта
		// это смещение зависит от высоты вьюпорта и высоты самого ползунка
		this.scrollerMaxOffset = this.viewportHeight - this.scroller.offsetHeight;
	};

	// регистрация обработчиков событий
	fn.registerEventsHandler = function(e) {
		// вращение колёсика мыши
		if (this.nameEvent === 'wheel') {
			this.viewport.addEventListener('wheel', this.scroll.bind(this));
		} else {
			this.content.addEventListener('scroll', () => {
				this.scroller.style.top = (this.content.scrollTop * this.ratio) + 'px';
			});
		}

		// нажатие на левую кнопку мыши
		this.scroller.addEventListener('mousedown', e => {
			// координата по оси Y нажатия левой кнопки мыши
			this.start = e.clientY;
			// устанавливаем флаг, информирующий о нажатии левой кнопки мыши
			this.pressed = true;
		});

		// перемещение мыши
		document.addEventListener('mousemove', this.drop.bind(this));

		// отпускание левой кнопки мыши
		document.addEventListener('mouseup', () => this.pressed = false);
	};

	fn.scroll = function(e) {
		e.preventDefault();
		// направление вращения колёсика мыши
		let dir = -Math.sign(e.deltaY);
		// шаг прокручивания контента, в зависимости от прокручивания
		// колёсика мыши
		let	step = (Math.abs(e.deltaY) >= 3) ? this.step * dir : 0;

		// управляем позиционированием контента
		this.content.style.top = (this.content.offsetTop + step) + 'px';
		// ограничиваем прокручивание контента вверх и вниз
		if (this.content.offsetTop > 0) this.content.style.top = '0px';
		if (this.content.offsetTop < this.max) this.content.style.top = this.max + 'px';

		// перемещаем ползунок пропорционально прокручиванию контента
		this.scroller.style.top = (-this.content.offsetTop * this.ratio) + 'px';
	};

	fn.drop = function(e) {
		e.preventDefault();
		// если кнопка мыши не нажата, прекращаем работу функции
		if (this.pressed === false) return;

		// величина перемещения мыши
		let shiftScroller = this.start - e.clientY;
		// изменяем положение бегунка на величину перемещения мыши
		this.scroller.style.top = (this.scroller.offsetTop - shiftScroller) + 'px';

		// ограничиваем перемещение ползунка по верхней границе вьюпорта
		if (this.scroller.offsetTop <= 0) this.scroller.style.top = '0px';
		// ограничиваем перемещение ползунка по нижней границе вьюпорта
		// сумма высоты ползунка и его текущего отступа от верхней границы вьюпорта
		let	totalHeight = this.scroller.offsetHeight + this.scroller.offsetTop;
		if (totalHeight >= this.viewportHeight) this.scroller.style.top = this.scrollerMaxOffset + 'px';

		// расстояние, на которую должен переместиться контент
		// это расстояние пропорционально смещению ползунка
		let	shiftContent = this.scroller.offsetTop / this.ratio;
		// прокручиваем контент по событию 'wheel'
		if (this.nameEvent === 'wheel') {
		// прокручиваем контент на величину пропорциональную перемещению ползунка,
		// она имеет обратный знак, т.к. ползунок и контент прокручиваются
		// в противоположных направлениях
			this.content.style.top = -shiftContent + 'px';
		// прокручиваем контент по событию 'scroll'
		} else {
			this.content.scrollTo(0, shiftContent);
		}
		// устанавливаем координату Y начала движения мыши равной текущей координате Y
		this.start = e.clientY;
	};

	// выбираем все блоки на странице, в которых может понадобиться
	// прокрутка контента
	const containers = document.querySelectorAll('[data-control]');
	// перебираем полученную коллекцию элементов
	for (const container of containers) {
		// имя события, используемого для прокручивания контента
		let nameEvent = container.getAttribute('data-control');
		// с помощью конструктора 'ScrollBox' создаём экземпляр объекта,
		// в котором будем прокручивать контент
		let scrollbox = new ScrollBox(container, nameEvent);
		// создание скроллбара, исходя из полученных в конструкторе высот
		// контента и вьюпорта текущего блока, регистрация обработчиков событий
		scrollbox.init();
	}
})();
// --------------------------

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