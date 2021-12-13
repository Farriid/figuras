let form = document.getElementById("my-form");
let content = document.getElementById("content");
 let formas = [];
 form.addEventListener("submit", (event) =>{
     event.preventDefault();
     let data = new Formdata(form);
     formas.push({
         nombre: data.get("nombre"),
         figura: data.get("figura"),
         color: data.get("color"),
     });
     pintar_figuras();
 })
 const pintar_figura = () => {
     content.innerHTML = "";
     figuras.foreach((e) =>{
         content.insertAdjacentHTML(
         'beforeend',
         
         <div
         class= "${e.figura}" 
         style="background: ${e.color};"
         >
         ${e.nombre}
         </div>
         
     );
         });
 };