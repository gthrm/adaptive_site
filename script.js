let username = document.getElementById('username');
let email = document.getElementById('email');
let tel = document.getElementById('tel');
let city = document.getElementById('city');
let message = document.getElementById('message');

username.oninput = function(){
    if (username.value !== "") {
        username.setAttribute("style", "border-bottom: 3px solid rgba(0, 0, 0, 1);font-family: 'CirceExtraBold' ;text-transform: uppercase;");
    } else {
        username.setAttribute("style", "")
    };
};

email.oninput = function(){
    if (email.value !== "") {
        email.setAttribute("style", "border-bottom: 3px solid rgba(0, 0, 0, 1);font-family: 'CirceExtraBold' ;text-transform: uppercase;");
    } else {
        email.setAttribute("style", "")
    };
};

city.oninput = function(){
    if (city.value !== "") {
        city.setAttribute("style", "border-bottom: 3px solid rgba(0, 0, 0, 1);font-family: 'CirceExtraBold' ;text-transform: uppercase;");
    } else {
        city.setAttribute("style", "")
    };
};

tel.oninput = function(){
    if (tel.value !== "") {
        tel.setAttribute("style", "border-bottom: 3px solid rgba(0, 0, 0, 1);font-family: 'CirceExtraBold' ;text-transform: uppercase;");
    } else {
        tel.setAttribute("style", "")
    };
};

message.oninput = function(){
    if (message.value !== "") {
        message.setAttribute("style", "border-bottom: 3px solid rgba(0, 0, 0, 1);font-family: 'CirceExtraBold' ;text-transform: uppercase;");
    } else {
        message.setAttribute("style", "")
    };
};

send.onclick = function send() {
    

    if (username.value === "" || email.value === "" || tel.value === "" || city.value === "" || message.value === "") {  
        swal ( "Ой" ,  "Ты не заполнил все поля! :)" ,  "error" );
        return false;

    } else {
        let captcha = grecaptcha.getResponse();
        if (captcha.length == "") {
            // alert('Пройдите капчу!');
            swal ( "Ой" ,  "Ты не робот? Пройди капчу! ;)" ,  "error" );
            return false;
        } else {
            // отправка запроса
            httpReq("127.0.0.1:8080", "POST", captcha, function(res) {
                console.log("response:", res);
            }, function(err) {
                console.error(err);
            });
            //

            console.log(captcha);
            console.log(username.id + ": " + username.value);
            console.log(email.id + ": " + email.value);
            console.log(tel.id + ": " + tel.value);
            console.log(city.id + ": " + city.value);
            console.log(message.id + ": " + message.value);
            var newWin = window.open("about:blank", "data", "width=200,height=200");
            newWin.document.write("Данные отправлены в Консоль!");
            setTimeout(function() {
                newWin.close();
                username.value = "";
                username.setAttribute("style", "");
                email.value = "";
                email .setAttribute("style", "");
                tel.value = "";
                tel.setAttribute("style", "");
                city.value = "";
                city.setAttribute("style", "");
                message.value = "";
                message.setAttribute("style", "");
            }, 3000);
            return false;
        };

        
    };
     
    
};