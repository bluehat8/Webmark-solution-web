var btn_1 = document.getElementById('ctn');
var btn_2 = document.getElementById('ctn1');


function mostrarBoton () {
    btn_1.style.display = 'none';
}

function ocultarBoton(){
    btn_1.style.display = 'inline';

}

menuBtn.addEventListener('click',()=>{
   // btn_1.style.display = 'none';
   // btn_2.style.display = 'none';
    btn_1.classList.toggle('.ctn')

   
 })