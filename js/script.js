window.onload = function(){ 
   let icon = document.querySelector(".icon");
   let links = document.querySelector(".nav-list");
 
   icon.onclick = function(){
      if(links.style.maxHeight == 0){
         links.style.maxHeight = links.scrollHeight + "px";
      }else{
         links.style.maxHeight = "";
      }
   }
}