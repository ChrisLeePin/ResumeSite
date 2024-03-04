var state = 0;

window.onload = function(){ 
   let icon = document.querySelector(".icon");
   let links = document.querySelector(".nav-list");

   //This method controls the dropdown
   icon.onclick = function(){
      if(links.style.maxHeight == 0){
         links.style.maxHeight = links.scrollHeight + "px";
      }else{
         links.style.maxHeight = "";
      }
   }
}

//The function needs the "this" from the onclick in order to tell eaxactly which object needs the CSS change, otherwise it will only apply to the first element it detects.
function showDesc(skItem){
   let skDesc = document.getElementById(skItem.textContent + "-desc");
   let sd = document.querySelectorAll(".skillDescWrap");
   if(skDesc.style.maxHeight == ""){
      //List of delays
      //Closing an opened one
      //Opening another while one is still opened
      var animationDuration = 400;

      if (state > 0){
         sd.forEach(skillDesc => {
            skillDesc.style.maxHeight = "";
            state = 0;
         });
         setTimeout(function(){
            skDesc.style.maxHeight = "500px";
            state = state + 1;
         }, animationDuration);
      }
      else{
         skDesc.style.maxHeight = "500px";
         state = state + 1;
      }
   }
   else{
      skDesc.style.maxHeight = "";
      state = state - 1;
   }
}

