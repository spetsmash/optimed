<?
        $to = 'info@medconsalt.net';
        $subject = 'Отзыв';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                        <p>Диагноз: '.$_POST['diagnosis'].'</p>
                        <p>Месяц и год обращения: '.$_POST['monthapply'].'</p>
                        <p>Сообщение: '.$_POST['message'].'</p>
                        <p>Адрес: '.$_POST['mail'].'</p>
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        mail($to, $subject, $message, $headers);

?>