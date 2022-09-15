const btn=document.getElementById("clickable");
const ab=document.getElementById("active-bar");
const sn=document.getElementById("side-navbar")
const rec=document.getElementById("rec")
const block=document.getElementById("block")

btn.addEventListener("click",()=>{
   if(ab.classList.contains("off")){
        ab.classList.remove("off")
        sn.classList.add("off")
        rec.classList.add("active")
        block.classList.add("off")
   }
   else{
    sn.classList.remove("off")
    ab.classList.add("off")
    rec.classList.remove("active")
    block.classList.remove("off")
   }
});