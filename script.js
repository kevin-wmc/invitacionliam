const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");


formulario.addEventListener("submit", function(event){
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const edad = document.getElementById("edad").value;
if(nombre === "" || email === "" || edad === ""){
    resultado.innerHTML = "<p style='color:red'>todos los campos son obligatorios</p>";
    return;
}
resultado.innerHTML = `
    <h2>Usuario Registrado</h2>
    <p>Nombre: ${nombre}</p>
    <p>Email: ${email}</p>
    <p>Edad: ${edad}</p>
`;
});
