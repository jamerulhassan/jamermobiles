<?php 
    include("database.php");
    header("Access-Control-Allow-Origin: *"); // Allow all domains
    header("Access-Control-Allow-Headers: *"); // Allow all headers
    header("Access-Control-Allow-Methods: *"); // Allow all HTTP methods (GET, POST, etc.)

    $datas = json_decode(file_get_contents("php://input"), true);
    $userName = $datas['userName']?? '';
    $password = password_hash($datas['password']?? '', PASSWORD_DEFAULT);
    $address = $datas['address']?? '';
    
    //fitration
    $sqlGetUser = "SELECT `User Name` FROM users WHERE `User Name` = '$userName'";
    $sqlInsert = "INSERT INTO users 
            (`User Name`,passwords,Address) 
            VALUES ('$userName','$password','$address')";
    try{
        $userNameFromDb = mysqli_query($conn, $sqlGetUser);
        if(mysqli_num_rows($userNameFromDb) > 0){
            echo json_encode([
                "status" => "fail",
                "message" => "User Name has already taken"
            ]);
        }else{
            mysqli_query($conn, $sqlInsert);
            echo json_encode([
                "status" => "success",
                "message" => "User inserted successfully"
            ]);
        }
    }
    catch (mysqli_sql_exception $e) {
        echo json_encode([
            "status" => "fail",
            "message" => "User insert failed",
            "error" => $e->getMessage()
        ]);
    }
    
    mysqli_close($conn);
?>