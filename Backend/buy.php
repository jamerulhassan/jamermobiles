<?php

    include("database.php");

    header("Access-Control-Allow-Origin: *"); // Allow all domains
    header("Access-Control-Allow-Headers: *"); // Allow all headers
    header("Access-Control-Allow-Methods: *"); // Allow all HTTP methods (GET, POST, etc.)

    $datas = json_decode(file_get_contents("php://input"), true);
    $Name = $datas['Name']?? '';
    $Phoneno = $datas['Phoneno']?? '';
    $address = $datas['address']?? '';
    
    $sqlInsert = "INSERT INTO Orders 
            (Name,Phoneno,Address) 
            VALUES ('$Name','$Phoneno','$address')";
    try{
        mysqli_query($conn, $sqlInsert);
        echo json_encode([
            "status" => "success",
            "message" => "order placed successfully"
        ]);
    }catch (mysqli_sql_exception $e) {
        echo json_encode([
            "status" => "fail",
            "message" => "User insert failed",
            "error" => $e->getMessage()
        ]);
    }
    mysqli_close($conn);
?>