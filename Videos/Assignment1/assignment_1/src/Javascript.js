var model1 = document.getElementById("model1");
var btn_view = document.getElementById("btn-view");

btn_view.onclick = function(){
    model1.style.display = "block";
}

window.onclick = function(event)
{
     if(event.target == model1)
     {
         model1.style.display = "none"
     }
}