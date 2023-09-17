function validaForm()
{
    Formulario = top.document.getElementById('frmContacto').id;
    if( Formulario === 'frmContacto') 
    {
        vrNombre = top.document.getElementById('txtNombre').value;
        vrApellido = top.document.getElementById('txtApellido').value;
        vrCiudad = top.document.getElementById('txtCiudad').value;
        vrDireccion = top.document.getElementById('txtDireccion').value;
        vrPostal  = top.document.getElementById('txtPostal').value;
        vrMail = top.document.getElementById('txtMail').value;
        
        vrCond = top.document.getElementById('chbCondiciones');
        vrMot = top.document.getElementById('rdTipoEvento1');
        vrMot2 = top.document.getElementById('rdTipoEvento2');
        vrMot3 = top.document.getElementById('rdTipoEvento3');
        
        if (vrNombre == '' || vrApellido == ''  || vrCiudad == '' || vrDireccion == '' 
                || vrPostal == '' ||vrMail == '' || (!vrMot.checked && !vrMot2.checked && !vrMot3.checked)) 
        {
            top.document.getElementById('pAviso').innerHTML = 
                    'Hace falta proporcionar m&aacute;s informaci&oacute;n';
        } else if(!vrCond.checked){
            top.document.getElementById('pAviso').innerHTML = 
                    'Es necesario que acepte los terminos y condiciones.';
        } else {
            top.document.getElementById('pAviso').innerHTML = '';
            
            FormIT = top.document.getElementById(Formulario)
            FormIT.action="mailto:"+top.document.getElementById('txtMail').value;
            FormIT.submit()
        }
    }
}

