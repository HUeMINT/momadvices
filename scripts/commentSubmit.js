var myFirebaseApp = "momadvices";

var comments = new Firebase("https://" + myFirebaseApp + ".firebaseio.com/comments");

var submitComment = function(){
    
    var comment = $("#comment").val();
    
    comments.push({
        "comment": comment
    });
};

$(window).load(function(){
    $("#commentForm").submit(submitComment);
});