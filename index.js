AOS.init({
    once:true
});

const opennav = document.querySelector(".openNav");
function openNav(){
    document.querySelector(".link__wrap").style.display="block";
    document.querySelector(".link__wrap").style.transition="1s";
}
const closenav = document.querySelector(".closeNav");
function closeNav(){
    document.querySelector(".link__wrap").style.display="none";
    document.querySelector(".link__wrap").style.transition="1s";
}
$(document).ready(function(){
    $(".num").counterUp({
        delay: 10,
        time: 1200
    })
})