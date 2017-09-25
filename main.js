$(document).ready(function() {
	$('.nav-trigger').click(function() {
		$('.side-nav').toggleClass('visible');
	});
});
var entrada = 0;
$(document).on('click','.form_menu',function()
{
	var modulo_id = $(this).attr("id");
	modulo_id = modulo_id.split("-");
	var menu = modulo_id[0];
	var modulo = modulo_id[1];
	var random = Math.floor(Math.random() * (15 - 1)) + 1;
	// alert(modulo_id[0]+"    "+modulo_id[1]);
	  var url = "clase_index.php";
	  var datos = "control=form_modulo&menu="+menu+"&modulo="+modulo;
	  consulting = peticion_ajax('POST',url,datos,false,'json',null);
		// alert(consulting[0].form_nombre);
		// var ul = $("#tabs_ul").attr("id");
		// var li = document.createElement("li");
		// role,		href,		role,		aria-controls,		data-toggle
		if (entrada == 0)
		{
			entrada=1;
			$("#table_lis").append("<li role='presentation' class='active' id ='li_"+consulting[0].form_nombre+random+"' >"
													+"<a href='#"+consulting[0].form_nombre+random+"' aria-controls='"+consulting[0].form_nombre+random
													+"' role='tab' data-toggle='tab'>"+consulting[0].form_nombre
													+"</a>"
													+"<span id='span_"+consulting[0].form_nombre+random+"' class='glyphicon glyphicon-remove equis' style='float:right; width:10px;height:10px;margin:-44px 7px;border:1px solid transparent;'></span>"
													// +"<a class='close glyphicon glyphicon-asterisk' aria-label='Close' style='float:right; width:10px;height:10px;margin-top:-47px;border:1px solid transparent;'></a>"
													+"</li>");

			$("#tab_content_panel").append("<div role='tabpanel' class='tab-pane active' id='"+consulting[0].form_nombre+random+"'>"
													+"<div class='container' style='width:100%;'>"
													+"<div class='row'> "
													+"		<div class='col-md-12'> "
													+"			 <object type='media_type' data='"+consulting[0].form_ruta+"' width='100%' height='600px;'></object> "
													+"		</div> "
													+"</div> "
													+"</div></div>");
		}else {
			$("#table_lis").append("<li role='presentation' class='' id ='li_"+consulting[0].form_nombre+random+"'>"
													+"<a href='#"+consulting[0].form_nombre+random+"' aria-controls='"+consulting[0].form_nombre+random
													+"' role='tab' data-toggle='tab'>"+consulting[0].form_nombre
													+"</a>"
													+"<span id='span_"+consulting[0].form_nombre+random+"' class='glyphicon glyphicon-remove equis' style='float:right; width:10px;height:10px;margin:-44px 7px;border:1px solid transparent;'></span>"
													+"</li>");
			$("#tab_content_panel").append("<div role='tabpanel' class='tab-pane' id='"+consulting[0].form_nombre+random+"'>"
													+"<div class='container' style='width:100%;'>"
													// +"<label>"+consulting[0].form_nombre+"</label>"
													+"<div class='row'> "
													+"		<div class='col-md-12'> "
													+"			 <object type='media_type' data='"+consulting[0].form_ruta+"' width='100%' height='600px;'></object> "
													+"		</div> "
													+"</div> "
													+"</div></div>");
		}

});

$(document).on('click','.equis',function()
{
		var id = $(this).attr('id');
		var id_panel = id.substring(5,255);
		$("#"+id_panel).remove();
		$("#li_"+id_panel).remove();
});
