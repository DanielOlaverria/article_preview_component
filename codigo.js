let botoncompartirmovil = document.querySelector(".img_boton_compartir_movil");
let botoncompartirdesktop = document.querySelector(".img_boton_compartir_desktop");
let secciongeneral = document.querySelector(".seccion_general");
let redessociales = document.querySelector(".redes_sociales");
let nombreavatar = document.querySelector(".contenedor_avatar");

botoncompartirmovil.addEventListener("click", () => {
    if ("secciongeneral.display.width>=0.88*100" && "secciongeneral.display.width<0.64*100"){
        redessociales.style.display="flex";
        nombreavatar.style.display="none";
    } else{
            redessociales.style.display="none";
            nombreavatar.style.display="flex";
    }
});

botoncompartirdesktop.addEventListener("click", () => {
 
    if ("secciongeneral.display.width>=0.65*100"){
        nombreavatar.style.display="flex";
        redessociales.style.display="none";
        
}
})
