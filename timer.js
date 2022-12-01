

var countDownDate = new Date("Sep 1, 2022 15:37:25").getTime();

var x = setInterval(function(){


    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days =  Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 *60 ));
    var minutes = Math.floor((distance % (1000 * 60 *60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60 )) / 1000);

    document.getElementById("demo").innerHTML = days + "d" + hours + "h"
    + minutes + "m" + seconds + "s";

    if(distance < 0){
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000)


function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "sender@email_address.com",
      Password: "Enter your password",
      To: 'receiver@email_address.com',
      From: "sender@email_address.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }

       

    
    
    
