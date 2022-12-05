<?php
if (isset($_POST['send'])) {
	$name = $_POST['name'];
	$telephone = $_POST['telephone'];
	$to  = "digital.craft1@yandex.ru" ; 
$subject = "Новая заявка"; 
$message = ' <p>Была отправленная заявка</p></br> Имя: <b>'. $name .'</b> </br>Телефон:<b>'.$telephone.'</b> </br>';
$headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
$headers .= "From: digital.craft1@yandex.ru\r\n"; 

mail($to, $subject, $message, $headers); 
unset($_POST['send']);
}
if(isset($_POST['quiz'])){
	$telephone = $_POST['telephone'];
	$answer_1 = $_POST['answer'];
	$answer_2 = $_POST['answer2'];
	$answer_3 = $_POST['answer3'];
	$answer_4 = $_POST['answer4'];
	$answer_5 = $_POST['answer5'];
	$to  = "digital.craft1@yandex.ru" ; 
$subject = "Заявка"; 
$message = ' <p>Была отправленная заявка</p></br>Телефон:<b>'.$telephone.'</b> </br> вопрос 1: '. $answer_1. '</br> вопрос 2: '. $answer_2.'</br> вопрос 3: '. $answer_3.'</br> вопрос 4: '. $answer_4.'</br> вопрос 5: '. $answer_5.'';
$headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
$headers .= "From: digital.craft1@yandex.ru\r\n"; 

mail($to, $subject, $message, $headers); 
}
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="css/style.min.css?_v=20221205155934" />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap&_v=20221205155934"
			rel="stylesheet"
		/>
		<script src="https://code.jquery.com/jquery-3.6.1.min.js?_v=20221205155934"></script>
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css?_v=20221205155934"
		/>
		<title>благодарим</title>
	</head>
	<body>
		<div class="pages-wrapper">
			<header class="header">
	<div class="container-small">
		<div class="header__row">
			<a href="index.php" class="header__logo">
				<picture><source srcset="img/header/logo.webp" type="image/webp"><img src="img/header/logo.png" alt="logo" class="header__logo-photo" /></picture>
			</a>
			<div class="header__items">
				<div class="header__item">
					<img src="img/header/location.svg" alt="telephone" class="header__icon" />
					<span class="header__name">г. Новосибирск</span>
					<span class="header__subname">Татарская ул, д. 83, помещ. 5</span>
				</div>
				<div class="header__item">
					<img src="img/header/telephone.svg" alt="telephone" class="header__icon" />
					<a class="header__name" href="tel:8 (913) 917-59-47">8 (913) 917-59-47</a>
					<span class="header__subname">Ежедневно с 9:00 до 20:00</span>
				</div>
			</div>
		</div>
	</div>
</header>
			<main class="pages__main"><section class="thanks">
	<div class="container">
		<div class="thanks__body">
			<h1 class="thanks__title">
				СПАСИБО ЗА ЗАЯВКУ!<br />
				<span class="orange">МЫ СВЯЖИМСЯ С ВАМИ В ТЕЧЕНИЕ 15 МИНУТ</span>
			</h1>
			<a href="index.php" class="thanks__link">ВЕРНУТЬСЯ НА ГЛАВНУЮ</a>
		</div>
	</div>
</section></main>
			<footer class="footer">
	<div class="container-small">
		<div class="footer__inner">
			<picture><source srcset="img/footer/logo.webp" type="image/webp"><img src="img/footer/logo.png" alt="logo" class="footer__logo" /></picture>
			<div class="footer__row">
				<a href="#" class="footer__link">Согласие на обработку данных</a>
				<a href="#" class="footer__link">Служба поддержки</a>
				<a href="#" class="footer__link">Политика конфиденциальности</a>
			</div>
			<p class="footer__info">
				© oblift.ru, 2012-2022 | ООО “ОбьЛифт” ИНН 5404465603 КПП 540701001
				630005, Россия, Новосибирск, ул. Татарская 83 помещ. 5
			</p>
		</div>
	</div>
</footer>
		</div>
	</body>
</html>
