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
function initQuiz(){
   const quiz = document.querySelector('.quiz')
   const quastions = quiz.querySelectorAll('.quiz__template')
   const discount = quiz.querySelector('.quiz__discaunt');
   const wrapper = quiz.querySelector('.quiz__wrapper')
   const prevBtn = quiz.querySelector('.quiz__btn-prev');
   const result = quiz.querySelector('.quiz__result');
   const nextBtn = quiz.querySelector('.quiz__btn-next')
   let current = 0;
   prevBtn.addEventListener('click',()=>{
      if(current > 0){
         current--;
         quastions[current].classList.add('quiz__template-active')
         quastions[current+1].classList.remove('quiz__template-active')
         discount.textContent = (current+1) * 1000
      }
      
   })
   nextBtn.addEventListener('click',()=>{
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
      
   })
   
}
