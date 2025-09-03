<?php

    include("database.php");
    header("Access-Control-Allow-Origin: *"); // Allow all domains
    header("Access-Control-Allow-Headers: *"); // Allow all headers
    header("Access-Control-Allow-Methods: *"); // Allow all HTTP methods (GET, POST, etc.)

    $datas = json_decode(file_get_contents("php://input"), true);

    $userName = $datas['userName']?? '';
    $password = $datas['password']?? '';

    $sql = "SELECT passwords FROM users WHERE `user Name` = '$userName' ";

    try{
        $data = mysqli_query($conn, $sql);
        if(mysqli_num_rows($data) > 0){
            $row = mysqli_fetch_assoc($data);
            if(password_verify($password, $row['passwords'])){
                echo json_encode([
                    "status" => "confirm"
                ]);
            }else{
                echo json_encode([
                    "status" => "cancel"
                ]);
            }
        }
        else{
            echo json_encode([
                "status" => "userNotFound"
            ]);
        }
    }
    catch(mysqli_sql_exception $e){
        echo json_encode([
            "err" => $e->getMessage()
        ]);
    }

?>