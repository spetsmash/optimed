<?

        $to = 'info@medconsalt.net';
        $subject = 'Заявка';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>

                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        mail($to, $subject, $message, $headers);

?>