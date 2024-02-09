
     // Quando o usuário rolar a página, mostre ou esconda o botão
     window.onscroll = function() {scrollFunction()};

     function scrollFunction() {
         if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
             document.getElementById("myBtn").style.display = "block";
         } else {
             document.getElementById("myBtn").style.display = "none";
         }
     }
 
     // Quando o usuário clicar no botão, retorne ao topo da página
     function topFunction() {
         document.body.scrollTop = 0; // Para navegadores Safari
         document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
     }