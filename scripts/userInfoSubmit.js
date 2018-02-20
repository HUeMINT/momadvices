var myFirebaseApp = "momadvices";

var userInfo = new Firebase("https://" + myFirebaseApp + ".firebaseio.com/userInfo");

var submitUserInfo = function(){
    
    var phoneNumber = $("#phoneNumber").val();
    var date = $("#date").val();
    
    userInfo.push({
        "phoneNumber": phoneNumber,
        "date": date
    });
};

$(window).load(function(){
    $("#userInfoForm").submit(submitUserInfo);
});