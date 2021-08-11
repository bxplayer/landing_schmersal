let btn_submit = document.getElementById("btn_submit");
let form = document.getElementById("form");

let email = document.getElementById("email");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let empresa = document.getElementById("empresa");
let cargo = document.getElementById("cargo");
let celular = document.getElementById("celular");
let localidad = document.getElementById("localidad");
let motivo = document.getElementById("motivo");


let IdEvento = document.getElementById("IdEvento");
let IdSector = document.getElementById("IdSector");
let IdProfesion = document.getElementById("profesion");
let IdContactoR2 = document.getElementById("IdContactoR2");
let Tipo = document.getElementById("Tipo");
let Oid = document.getElementById("Oid");
let Chekin = document.getElementById("Chekin");
let ts = document.getElementById("ts");
let rubro = document.getElementById("rubro");



let buscar_mail = () => {
    

    if(email.value.length > 4 && email.value.includes('@')){
        let url = 'https://www.dinatecnica.com.ar/schmersal/procesar.php?buscar_email=' + email.value;               
        fetch(url,{            
            method: 'GET',        
        })
        .then((response) => response.json())
        .then(res => {

            if (res.IdContactoR2>0){

                
				nombre.value = res.Nombre;				
				apellido.value = res.Apellido;				
				empresa.value = res.Empresa;
				setSelectedValue(cargo, parseInt(res.IdCargo));
                celular.value = res.Celular;
                motivo.value = (res.Motivo == null)?0:res.Motivo;
                
				IdSector.value = res.IdSector;                
				IdProfesion.value = res.Profesion;				            
                IdContactoR2.value = res.IdContactoR2;
                rubro.value = res.IdRubro;
				Tipo.value = res.Tipo;
				Oid.value = res.Oid;
				Chekin.value = res.Chekin;
				ts.value = res.ts;

            }

        })
        .catch((err) => console.log(err));


    }
    
}

email.addEventListener('keyup', buscar_mail);

function setSelectedValue(selectObj, valueToSet) {
    for (var i = 0; i < selectObj.options.length; i++) {        
        if (selectObj.options[i].value== valueToSet) {
            selectObj.options[i].selected = true;
            return;
        }
    }
}


btn_submit.addEventListener('click', () => {

    let submit_form = true;
    let elemetos_validacion = document.querySelectorAll("input[type=text],input[type=email],select");
    
    Array.from(elemetos_validacion).map( x => {        
        if(x.hasAttribute("required") && (x.value == "" || x.value == "0") ){
            submit_form = false;
            x.nextElementSibling.style.display = 'block';            
            x.nextElementSibling.textContent = `El campo ${x.getAttribute("placeholder")} es requerido.`;
        }else{
            x.nextElementSibling.style.display = 'none';
        }

        if(submit_form)
        {
            document.getElementById("form").submit()
        }        
    })

})




var url = new URL(window.location.href);
var exito = url.searchParams.get("exito");

if(exito){
    let modal = new bootstrap.Modal(document.getElementById("modal"));

    modal.show();
}





let myID = document.getElementById("whatsapp");
let mobile_link = document.getElementById("mobile_link");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 2200) {
        myID.classList.remove("whatsapp_fixed");                
    } else {        
        myID.classList.add("whatsapp_fixed");         
    }

    if (y >= 3100) {        
        mobile_link.classList.remove("mobile_link_show");
        mobile_link.classList.add("mobile_link_hide");
    } else {                
        mobile_link.classList.add("mobile_link_show");
        mobile_link.classList.remove("mobile_link_hide");       
    }
};

window.addEventListener("scroll", myScrollFunc);