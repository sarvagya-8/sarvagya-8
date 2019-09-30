var $  = function(param) {
    return document.querySelector(param);
}
document.addEventListener("DOMContentLoaded", function() {

    //This code will run after your page loads 
    $(".yeti").onmousedown = function() {   
        alert("Yaaaarrrr!");
    };

});