// Quando o usuário rolar a página 20px para baixo, o botão aparecerá
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var button = document.getElementById("backToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// Quando o usuário clicar no botão, a página rolará de volta para o topo
document.getElementById("backToTop").onclick = function() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para navegadores Chrome, Firefox, IE e Opera
};