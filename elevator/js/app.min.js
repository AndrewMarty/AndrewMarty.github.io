//Проверка поддерживает ли браузер формат webp
testWebP(function (support) {
	if (support == true) {
		document.querySelector("body").classList.add("webp");
	} else {
		document.querySelector("body").classList.add("no-webp");
	}
});
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src =
		"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

document.addEventListener('DOMContentLoaded',initQuiz)
$('.tel').inputmask("+7 (999) 999-99-99");
function initQuiz(){
   const quiz = document.querySelector('.quiz')
   const quastions = quiz.querySelectorAll('.quiz__template')
   const discount = quiz.querySelector('.quiz__discaunt');
   const wrapper = quiz.querySelector('.quiz__wrapper')
   const prevBtn = quiz.querySelector('.quiz__btn-prev');
   const result = quiz.querySelector('.quiz__result');
   const nextBtn = quiz.querySelector('.quiz__btn-next')
   let current = 0;
   document.addEventListener('keyup',(e)=>{
      if(e.code == 'Enter'){
         nextQuastion()
      }
   })
   prevBtn.addEventListener('click',()=>{
      if(current > 0){
         current--;
         quastions[current].classList.add('quiz__template-active')
         quastions[current+1].classList.remove('quiz__template-active')
         discount.textContent = (current+1) * 1000
      }
      
   })
   nextBtn.addEventListener('click',()=>{
      nextQuastion()
   })
   function nextQuastion(){
      let select = false
      quastions[current].querySelectorAll('.quiz__field').forEach((item)=>{
         if(item.checked){
            select = true;
         }
      })
      if(current < 4 && select){
         current++;
         quastions[current-1].classList.remove('quiz__template-active')
         quastions[current].classList.add('quiz__template-active')
         discount.textContent = (current+1) * 1000
      }
      else if ( current >= 4 && select){
         wrapper.remove()
         result.classList.add('quiz__result-active')
      }
      
   }
   
}
!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function() {

   /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
   var modalButtons = document.querySelectorAll('.js-open-modal'),
       overlay      = document.querySelector('.js-overlay-modal'),
       closeButtons = document.querySelectorAll('.js-modal-close');


   /* Перебираем массив кнопок */
   modalButtons.forEach(function(item){

      /* Назначаем каждой кнопке обработчик клика */
      item.addEventListener('click', function(e) {

         /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
         e.preventDefault();

         /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


         /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
         modalElem.classList.add('active');
         overlay.classList.add('active');
      }); // end click

   }); // end foreach


   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');

         parentModal.classList.remove('active');
         overlay.classList.remove('active');
      });

   }); // end foreach


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });




}); // end ready
