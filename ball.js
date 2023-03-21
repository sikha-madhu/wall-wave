let wave1 = document.getElementById("wave_1");
let wave2 = document.getElementById("wave_2");
let wave3 = document.getElementById("wave_3");
let wave4 = document.getElementById("wave_4");
let wave5 = document.getElementById("wave_5");
let waveElements = document.getElementsByTagName("span");
console.log(waveElements);
setTimeout(()=>{
    wave1.style.removeProperty("animation-delay");
    wave2.style.removeProperty("animation-delay");
    wave3.style.removeProperty("animation-delay");
    wave4.style.removeProperty("animation-delay");
    wave5.style.removeProperty("animation-delay");
    // wave1.style.animation="a2  ease-out 1s";
    // wave2.style.animation="a2  ease-out 2s";
    // wave3.style.animation="a2  ease-out 3s";
    // wave4.style.animation="a2  ease-out 4s";
    // wave5.style.animation="a2 2.9s ease-in";

    // wave1.style.animation="a2  ease-in 2s";
    // wave2.style.animation="a2  ease-in 2.5s";
    // wave3.style.animation="a2  ease-in 3s";
    // wave4.style.animation="a2  ease-in 3.5s";
    // wave5.style.animation="a2  ease-in 4s";

    wave1.style.animation="a2  ease-out 2s";
    wave2.style.animation="a2  ease-in 2.5s";
    wave3.style.animation="a2  ease-in 3s";
    wave4.style.animation="a2  ease-in 3.5s";
    wave5.style.animation="a2  ease-in 5s";

    // wave1.style.animation="a2  linear 2s";
    // wave2.style.animation="a2  linear 2.5s";
    // wave3.style.animation="a2  linear 3s";
    // wave4.style.animation="a2  linear 3.5s";
    // wave5.style.animation="a2  linear 4.7s";

},6500)