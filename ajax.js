var obj;
function obj_ajax()
{
    if(window.XMLHttpRequest)
    {
        return new XMLHttpRequest();
        //return objeto;
    }else{
        if(window.ActiveXObject)
        {
            var version = new array('Msxml2.XMLHHTP.5.0',
                                    'Msxml2.XMLHHTP.4.0',
                                    'Msxml2.XMLHHTP.3.0',
                                    'Msxml2.XMLHHTP',
                                    'Microsoft.XMLHHTP');
            for(var i = 0;i < version.length; i++)
            {
                try
                {
                    return  new ActiveXObject(version[i]);
                }catch(errorControlado){

                }
            }
	}
	throw new error("No se pudo crear objeto ajax");
    }
}

function peticion_ajax(metodo,url,datos,estado,devuelve,httpfunction)
{
    var resultado;
    var obj = obj_ajax();
    var preloader;
    preloader = document.getElementById('preloader');

    if (obj)
    {
        if(estado === false)
        {
            if(metodo === 'POST')
            {
                // obj.onreadystatechange=function()
                // {
                //     if(obj.readyState==1)
                //     {
                //         preloader.style.display = 'block';
                //         preloader.style.position = "absolute";
                //         preloader.style.top = "50%";
                //         preloader.style.left = "50%";
                //         preloader.style.marginTop = "-200px";
                //         preloader.style.zIndex = "50";
                //     }else if(obj.readyState==4)
                //     {
                //         preloader.style.display = 'none';
                //         preloader.style.background = "";
                //         preloader.style.width = "";
                //         preloader.style.height = "";
                //     }
                // }

                obj.open(metodo, url, estado);
                obj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                obj.setRequestHeader("Content-length", datos.length);
                obj.setRequestHeader("Connection", "close");
                obj.send(datos);

                resultado = obj.responseText;
                if (devuelve || devuelve == "json"  )
                {
                    resultado = eval("(" + resultado + ")");
                }
            }

            if (metodo === 'GET')
            {
                // obj.onreadystatechange=function()
                // {
                //     if(obj.readyState==1){
                //         preloader.style.display = 'block';
                //         preloader.style.position = "absolute";
                //         preloader.style.top = "50%";
                //         preloader.style.left = "50%";
                //         preloader.style.marginTop = "-200px";
                //         preloader.style.zIndex = "50";
                //     }else if(obj.readyState==4){
                //         preloader.style.display = 'none';
                //         preloader.style.background = "";
                //         preloader.style.width = "";
                //         preloader.style.height = "";
                //     }
                // }

                var url_get = url+"?"+datos;
                obj.open(metodo,url_get,estado);

                obj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                obj.setRequestHeader("Content-length", datos.length);
                obj.setRequestHeader("Connection", "close");
                obj.send(null);
                resultado = obj.responseText;
                if (devuelve || devuelve == "json"  )
                {
                    resultado = eval("(" + resultado + ")");
                }
            }

            return resultado;
        }

        if (estado === true)
        {
            if(metodo === 'POST')
            {
                obj.open(metodo, url, estado);
                obj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                obj.setRequestHeader("Content-length", datos.length);
                obj.setRequestHeader("Connection", "close");
                obj.send(datos);
                resultado = obj.responseText;
            }

            if (metodo === 'GET')
            {
                obj.open(metodo,url+datos,estado);
                // alert(httpfunction);
                obj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                //obj.setRequestHeader("Content-length", datos.length);
                //obj.setRequestHeader("Connection", "close");
                obj.send(null);

                obj.onreadystatechange = respuesta_ajax;
			//{

			//  if (obj.readyState==4 && obj.status==200)
			//  {
			//    document.getElementById("datos").innerHTML=obj.responseText;
			//    resultado = obj.responseText;
			//    return resultado;
			//  }
			//}

            }
        }
    }
}
