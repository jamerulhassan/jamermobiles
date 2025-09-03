<?php

    include("database.php");
    header("Access-Control-Allow-Origin: *"); // Allow all domains
    header("Access-Control-Allow-Headers: *"); // Allow all headers
    header("Access-Control-Allow-Methods: *"); // Allow all HTTP methods (GET, POST, etc.)

    $datas = json_decode(file_get_contents("php://input"), true);
    $username = $datas['userName'] ?? '';
    $password = $datas['password'] ?? '';

    //checking
    $sqlGetUser = "SELECT `User Name`, passwords FROM users WHERE `User Name` = '$username'";
    $results = mysqli_query($conn, $sqlGetUser);
    if($results && mysqli_num_rows($results) > 0){
        $datasToVerify = mysqli_fetch_assoc($results);
        if(password_verify($password, $datasToVerify['passwords'])){
            try{
                $sqlToDelete = "DELETE FROM users WHERE `User Name` = '$username'";
                mysqli_query($conn, $sqlToDelete);
                echo json_encode([
                    "status"=>"Deleted",
                    "message"=>"user get deleted from db"
                ]);
            }catch(mysqli_sql_exception $e){
                echo json_encode([
                    "status"=>"not deleted",
                    "message"=> $e->getMessage()
                ]);
            }
        }else{
            echo json_encode([
                "status"=>"password incorrect",
                "message"=>"Password is incorrect"
            ]);
        }   
    }else{
        echo json_encode([
            "status"=>"User not found",
            "message"=>"user name is incorrect"
        ]);
    }
    mysqli_close($conn);
?>