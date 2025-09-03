<?php
    $db_server = "sql103.infinityfree.com";
    $db_user = "if0_39515127";
    $db_pass = "Hassan2004dhaan";
    $db_name = "if0_39515127_userdetails";
    $conn = "";
     
    try{
        $conn = mysqli_connect(
                                $db_server,   
                                $db_user,
                                $db_pass,
                                $db_name);
    }
    catch(mysqli_sql_exception){
        echo "you are not connected <br>";
    }
?>