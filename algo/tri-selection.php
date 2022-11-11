<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>selection</title>
</head>

<body>
    <h1>tri par selection</h1>
    <?php 
        
        $tableau = [5, 7, 9, 10];
        print_r($tableau);
    ?>


    <h1>total </h1>

    <?php 
        $total = count($tableau);
        echo $total;
    ?>



    <h1>programme principale</h1>

    <?php

    $minimum = 100;

    for($i = 0 ; $i < $total ; $i++ ){

        if($tableau[$i] < $minimum) {
            $minimum = $tableau[$i];
        }

    }

    
    ?>



    
</body>
</html>