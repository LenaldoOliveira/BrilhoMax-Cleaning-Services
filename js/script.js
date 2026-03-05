// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Botão topo
const topBtn=document.getElementById("topBtn");
window.onscroll=function(){
  if(document.documentElement.scrollTop>300){
    topBtn.style.display="block";
  } else { topBtn.style.display="none"; }
};
topBtn.onclick=function(){
  window.scrollTo({top:0,behavior:'smooth'});
};

// Formulário
const form=document.getElementById("contactForm");
const msg=document.getElementById("formMessage");

form.addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const message=document.getElementById("message").value.trim();

  if(!name||!email||!message){
    msg.textContent="Please fill in all fields!";
    msg.style.color="red";
  } else {
    msg.textContent="Quote request sent successfully!";
    msg.style.color="green";
    form.reset();
  }
});
