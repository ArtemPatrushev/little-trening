<?php
//В файле на первом этапе нужно принять данные из пост массива. Для этого создаем две переменные:
$firstName = $_POST['first-name'];
$email = $_POST['email'];
$lastName = $_POST['last-name'];

//Первая функция преобразует все символы, которые пользователь попытается добавить в форму:
$firstName = htmlspecialchars($firstName);
$lastName = htmlspecialchars($lastName);
$email = htmlspecialchars($email);

//Вторая функция декодирует url, если пользователь попытается его добавить в форму.
$firstName = urldecode($firstName);
$lastName = urldecode($lastName);
$email = urldecode($email);

//Третей функцией мы удалим пробелы с начала и конца строки, если таковые имеются:
$firstName = trim($firstName);
$lastName = trim($lastName);
$email = trim($email);

//Для того, чтобы проверить, работает ли этот код, передаются ли данные можно просто их вывести на экран при помощи функции echo:
echo $fio;
echo "<br>";
echo $email;

//Необходимо добавить условие, которе проверит отправилась ли форма при помощи PHP на указанные адрес электронной почты.
if (mail("example@mail.ru", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: example2@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>