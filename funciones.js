var vldcns = false;
var isvalid = false;
var index_id = 0;
var renglon_id = 0;
var firma =  "";
var campos_v = "";
var grid = $("#grid-command-buttons").bootgrid({
    ajax: true,
    post: function ()
    {
        return {
            id: "b0df282a-0d67-40e5-8558-c9e93b7befed"
        };
    },
    url: "clase_rete_aico.php?control=consultar",
    formatters: {
        "commands": function(column, row)
        {
            return "<button type=\"button\" class=\"btn btn-xs btn-success btn-editar\" data-row-id=\"" + row.decl_basi_id + "\"><span class=\"glyphicon glyphicon-edit\"> Consultar </span></button> ";

        }
    },
    templates: {
      header: "<div id='{{ctx.id}}' class='{{css.header}}'>"+
                "<div class='row'>"+
                  "<div class='col-sm-12 actionBar'>"+
                    " <button class='btn btn-primary btn_add' title='Nuevo' type='button'>Nuevo <span class='icon glyphicon glyphicon-plus-sign'></span></button> "+
                    "<p class='{{css.search}}'></p>"+
                    "<p class='{{css.actions}}'></p>"+
                  "</div>"+
                "</div>"+
              "</div>"
    }
}).on("loaded.rs.jquery.bootgrid", function()
{
  grid.find(".btn-editar").on("click", function(e)
  {
     ConsultarVip('', '', $(this).data("row-id"), '');

//      var consulting;
//      var url = "clase_rete_aico.php";
//      var datos = "control=consultar_datos&filtro="+$(this).data("row-id");
//      consulting = peticion_ajax('POST',url,datos,false,'json',null);
//
//      var url = "formulario.php?control=formulario";
//      $('.modal-container').load(url,function(result)
//      {
//          $('#myModal').modal({show:true});
//          $("#btn-guardar").addClass("clasedit");
//          $('#myModal').on('shown.bs.modal', function () {
//            $('.chosen-select', this).chosen();
//          });
//          $('.form_date').datetimepicker({
//            language:  'es',
//            format: 'yyyy-mm-dd',
//            weekStart: 1,
//            todayBtn:  1,
//            autoclose: 1,
//            todayHighlight: 1,
//            startView: 2,
//            minView: 2,
//            forceParse: 0
//          });
//
//          $('[name ="decla_correccion"]').prop('disabled',true);
//          $('#decl_basi_id').prop('disabled',true);
//            /************************* inicia seccion de combox  ****************************************/
//            $.getJSON("clase_rete_aico.php?control=periodos",function(data)//voy configurando el reteICa
//            {
//                  $("#peri_id").empty();
//                  $('#peri_id').append(new Option('',0));
//                  $.each(data,function(index,value)
//                  {
//                      $('#peri_id').append(new Option(value[2],value[0]));
//                  });
//                  $("#peri_id").trigger("chosen:updated");
//            }).always(function (){
//                setTimeout(function()
//                  {
//                    $('#peri_id').val(consulting.info[0].peri_id);
//                    $('#peri_id').trigger("chosen:updated");
//                  },500
//
//                );
//              }
//            );
//
//            $.getJSON("clase_rete_aico.php?control=vigencias", function( data )
//            {
//              $.each(data, function( index, value )
//              {
//                  $("#frm-declaraciones_aico #vige_anio").append(new Option(value[0], value[1]));
//              });
//              $("#frm-declaraciones_aico  #vige_anio").trigger("chosen:updated");
//            }).always(function(){
//                setTimeout(function(){
//
//                  $('#vige_anio').val(consulting.info[0].vige_anio);
//                  $('#vige_anio').trigger("chosen:updated");
//                   $('#frm-declaraciones_aico  #vige_anio').chosen(); }, 500);
//            }).always(function()
//              {
//                  setTimeout(function(){
//                    var vigencia_renglones1 = consulting.info[0].vige_anio;
//
//                    $.getJSON("clase_rete_aico.php?control=actividades&filtro="+vigencia_renglones1,function(data)
//                    {
//                          $('#h_acti_ciiu').empty();
//                          $('#h_acti_ciiu').append(new Option('',''));
//                          $.each(data,function(index,value)
//                          {
//                              $('#h_acti_ciiu').append(new Option(value[0],value[0]));
//                          });
//                          $('#h_acti_ciiu').trigger("chosen:updated");
//                    });},600);
//              });
//              // $.getJSON("clase_rete_aico.php?control=vigencias", function( data )
//              // {
//              //   $("#frm-declaraciones_aico  #vige_anio").append(new Option('',''));
//              //   $.each(data, function( index, value )
//              //   {
//              //       $("#frm-declaraciones_aico #vige_anio").append(new Option(value[0], value[1]));
//              //   });
//              //   $("#frm-declaraciones_aico  #vige_anio").trigger("chosen:updated");
//              // }).always(function(){
//              //     setTimeout(function(){
//              //
//              //       $('#vige_anio').val(consulting.info[0].vige_anio);
//              //       $('#vige_anio').trigger("chosen:updated");
//              //        $('#frm-declaraciones_aico  #vige_anio').chosen(); }, 500);
//              // });
//
//              $.getJSON("clase_rete_aico.php?control=vigencias", function( data )
//              {
//                $.each(data, function( index, value )
//                {
//                    $("#frm-declaraciones_aico #vige_anio").append(new Option(value[0], value[1]));
//                });
//                $("#frm-declaraciones_aico  #vige_anio").trigger("chosen:updated");
//              }).always(function(){
//                  setTimeout(function(){
//
//                    $('#vige_anio').val(consulting.info[0].vige_anio);
//                    $('#vige_anio').trigger("chosen:updated");
//                     $('#frm-declaraciones_aico  #vige_anio').chosen(); }, 500);
//              }).always(function()
//                {
//                    setTimeout(function(){
//                      var vigencia_renglones1 = consulting.info[0].vige_anio;
//
//                      $.getJSON("clase_rete_aico.php?control=actividades&filtro="+vigencia_renglones1,function(data)
//                      {
//                            $('#h_acti_ciiu').empty();
//                            $('#h_acti_ciiu').append(new Option('',''));
//                            $.each(data,function(index,value)
//                            {
//                                $('#h_acti_ciiu').append(new Option(value[0],value[0]));
//                            });
//                            $('#h_acti_ciiu').trigger("chosen:updated");
//                      });},600);
//                });
//
//
//              $.getJSON("clase_rete_aico.php?control=departamentos",function(data)
//              {
//                    $('#depa_id_local').append(new Option('',''));
//                    $('#depa_id_notificacion').append(new Option('',''));
//                    $.each(data,function(index,value)
//                    {
//                        $('#depa_id_local').append(new Option(value[1],value[0]));
//                        $('#depa_id_notificacion').append(new Option(value[1],value[0]));
//                    });
//              }).always(function(){
//                  setTimeout(function()
//                  {
//                     $('#depa_id_local').val(consulting.info[0].depa_id);
//                     $('#depa_id_local').trigger("chosen:updated");
//
//
//                     $('#depa_id_notificacion').val(consulting.info[0].depa_id_notificacion);
//                     $('#depa_id_notificacion').trigger("chosen:updated");
//                   }, 500);
//              });
//
//              $.getJSON("clase_rete_aico.php?control=municipios",function(data)
//              {
//                    $('#muni_id_local').append(new Option('',''));
//                    $('#muni_id_notificacion').append(new Option('',''));
//                    $.each(data,function(index,value)
//                    {
//                        $('#muni_id_local').append(new Option(value[1],value[0]));
//                        $('#muni_id_notificacion  ').append(new Option(value[1],value[0]));
//                    });
//              }).always(function(){
//
//                  setTimeout(function()
//                  {
//                     $('#muni_id_local').val(consulting.info[0].muni_id);
//                     $('#muni_id_local').trigger("chosen:updated");
//
//
//                     $('#muni_id_notificacion').val(consulting.info[0].muni_id_notificacion);
//                     $('#muni_id_notificacion').trigger("chosen:updated");
//                   }, 500);
//              });
//
//
//              $.getJSON("clase_rete_aico.php?control=tipo_doc",function(data)
//              {
//                    $('#tipo_documento_id').append(new Option('',''));
//                    $.each(data,function(index,value)
//                    {
//                        $('#tipo_documento_id').append(new Option(value[1],value[0]));
//                    });
//              }).always(function ()
//                {
//                  // alert(consulting.info[0].decla_id);
//                  consultar_declaracion(consulting.info[0]);
//                  consultar_actividades(consulting.actividades);
//                  consultar_conceptos(consulting.conceptos);
//                }
//              );
//
//              /************************* finaliza seccion de combox  ****************************************/
//      });
  }).end().find(".btn-eleminar").on("click", function(e)
  {
      var url = "formulario.php?control=01&id="+$(this).data("row-id");
      $('.modal-container').load(url,function(result)
      {
          $('#myModal').modal({show:true});
      });
  });
});

$(document).ready(function()
{
    $(document).on(
    {
        'show.bs.modal': function () {
            var zIndex = 1040 + (10 * $('.modal:visible').length);
            $(this).css('z-index', zIndex);
            setTimeout(function()
            {
                $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
            }, 0);

        },
        'hidden.bs.modal': function() {
            if ($('.modal:visible').length > 0)
            {
                setTimeout(function()
                {
                    $(document.body).addClass('modal-open');
                }, 0);
            }
        }
    }, '.modal');

    $('.btn_add').off('click').click(function()
    {
        NuevaVip('','','');
    });
});

$(document).on('change','#peri_id',function()
{
  var url = "clase_rete_aico.php";
  var vigencia_periodo = $('#vige_anio').val();
  var datos = "control=fecha_presentacion&vigencia_limite="+vigencia_periodo+"&periodo="+$(this).val();
  if(vigencia_periodo != "" )
    {
      var limit_present = peticion_ajax('POST',url,datos,false,'json',null);
      $('#fecha_limi').val(limit_present[0].fecha_limite_decl);
      var fecha1 = $('#fecha_limi').val();
      var fecha2 = $('#fecha_sys').val();
      var meses = restaFechas(fecha1,fecha2);
      var mensaje = "";

      var url = "clase_rete_aico.php";
      var datos = "control=validar_vigencia&placa="+$("#decl_basi_placa").val()+"&vigencia="+$('#vige_anio').val()
                  +"&tipo_periodo="+$("#peri_id").val();

      if($("#decl_basi_placa").val())
      {
        mensaje = peticion_ajax('POST',url,datos,false,'json',null);
     // console.log("que llega = "+mensaje.danger);
          if(mensaje.danger == "0")
          {

            $("#decla_correccionS").prop("checked", false);
            $("#decla_correccionN").prop("checked", true);

            var url = "formulario.php?control=05&mensaje="+encodeURI("Verifique si el Nombre del Representante y Documento son los mismos de la declaracion !")+"&campo=nom_repre";
            $('.modal-modal-container').load(url,function(result)
            {
               $('#myModal_e').modal({show:true});

            });
          }else{

            $("#grid-command-buttons").bootgrid("reload");
            var url = "../../recursos/mensajes.php?control=03&contenido="+encodeURI(mensaje.danger);
            $('.modal-messages').load(url,function(result)
            {
                $('#myModalMensajes').modal({show:true});
            });
            $("#decla_correccionS").prop("checked", true);
            $("#decla_correccionN").prop("checked", false);

          }
      }

    }else {
      var url = "../../recursos/mensajes.php?control=03&contenido="+encodeURI("Debe Selecionar 1 Vigencia para continuar");
      $('.modal-messages').load(url,function(result)
      {
          $('#myModalMensajes').modal({show:true});
      });
      $('#frm-declaraciones_aico')[0].reset();

    }
});

$(document).on('change','#frm-declaraciones_aico #vige_anio',function()
{

  var vigencia_renglones = $('#frm-declaraciones_aico #vige_anio').val();

          $.getJSON("clase_rete_aico.php?control=periodos&vigencia="+vigencia_renglones,function(data)
        {
              $("#peri_id").empty();
              $('#peri_id').append(new Option('',0));
              $.each(data,function(index,value)
              {
                  $('#peri_id').append(new Option(value[3],value[0]));
              });
              $("#peri_id").trigger("chosen:updated");
        }).always(function (){
            setTimeout(function()
              {
                $('#peri_id').val(consulting.info[0].peri_id);
                $('#peri_id').trigger("chosen:updated");
              },500

            );
          }
        );

 $.getJSON("clase_rete_aico.php?control=actividades&filtro="+vigencia_renglones,function(data)
   {
    //  alert("entro");
         $('#h_acti_ciiu').empty();
         $('#h_acti_ciiu').append(new Option('',''));
         $.each(data,function(index,value)
         {
             $('#h_acti_ciiu').append(new Option(value[0],value[0]));
         });
         $('#h_acti_ciiu').trigger("chosen:updated");
   }).always(function()
   {    //alert("hola");
           setTimeout(function()
           {
             for (var i = 0; i < 5; i++)
             {
               $('.btn_add_decl_actividad').click();
             }
           }, 100);
   });

   if($('.renglones_vigencia').length > 0)
   {
     limpiar_renglones();
   }

/*Clonar Renglones para rete ICA y cargue de  ellos*/
  $.getJSON("clase_rete_aico.php?control=renglones_ico&filtro="+vigencia_renglones,function(data)
  {

    $.each(data,function(index,value)//CLONAR RENGLONES
    {
        // console.log(value.conc_liqu_id);
      renglon_id++;

      var $div = $('#impu_ico'),
          $clone = $div
                  .clone()
                  .removeClass('hide')
                  .removeAttr('id')
                  .addClass('renglones_vigencia')
                  .attr('data-acti-index',renglon_id)
                  .insertBefore($div);
        $clone.find('[id="renglon"]').attr('id','renglon'+renglon_id).end();
        $clone.find('[name="renglon"]').attr('name','renglon[]').end();
        $clone.find('#renglon'+renglon_id).html(value.conc_liqu_id).end();

        $clone.find('[id="des_renglon"]').attr('id','des_renglon'+renglon_id).end();
        $clone.find('[name="des_renglon"]').attr('name','des_renglon[]').end();
        $clone.find('#des_renglon'+renglon_id).html(value.conc_liqu_nombre).end();

        $clone.find('[id="concepto_id"]').attr('id','t_concepto_id'+value.conc_id).end();
        $clone.find('[name="concepto_id"]').attr('name','t_concepto_id['+value.conc_id+']').end();
        $clone.find('#t_concepto_id'+value.conc_id).attr('value',value.conc_id).end();

        $clone.find('[id="t_industria_vd"]').attr('id','industria_vd'+value.conc_id).end();
        $clone.find('[name="t_industria_vd"]').attr('name','industria_vd['+value.conc_id+']').end();
        if(value.evento == "S")
        {
          if(value.c_readonly === "S")
          {
            $clone.find('#industria_vd'+value.conc_id).addClass('declarado').end();
            $clone.find('#industria_vd'+value.conc_id).prop('readonly',true).end();
          }
          else {
            $clone.find('#industria_vd'+value.conc_id).addClass('declarado').end();
          }
        }
        else {
          if(value.c_readonly == "S")
          {
            $clone.find('#industria_vd'+value.conc_id).prop('readonly',true).end();
          }
        }

        $clone.find('[id="t_industria_vs"]').attr('id','industria_vs'+value.conc_id).end();
        $clone.find('[name="t_industria_vs"]').attr('name','industria_vs['+value.conc_id+']').end();
        $clone.find('#industria_vs'+value.conc_id).prop('readonly',true).end();
    });
  });    // llenar actividades y traer los renglones de la declaraicon



});

function limpiar_renglones()
{
    $('.renglones_vigencia').each(function(index)
    {
      $(this).remove();
    });
}





$(document).on('change','#depa_id_local',function()
{
      var depa_id = $('#depa_id_local').val();
      $.getJSON("clase_rete_aico.php?control=municipios&filtro="+depa_id,function(data)
      {
            $("#muni_id_local").empty();
            $('#muni_id_local').append(new Option('',0));
            $.each(data,function(index,value)
            {
                $('#muni_id_local').append(new Option(value[1],value[0]));
            });
            $("#muni_id_local").trigger("chosen:updated");
      });
});
$(document).on('change','#depa_id_notificacion',function()
{
      var depa_id = $('#depa_id_notificacion').val();
      $.getJSON("clase_rete_aico.php?control=municipios&filtro="+depa_id,function(data)
      {
            $("#muni_id_notificacion").empty();
            $('#muni_id_notificacion').append(new Option('',0));
            $.each(data,function(index,value)
            {
                $('#muni_id_notificacion').append(new Option(value[1],value[0]));
            });
            $("#muni_id_notificacion").trigger("chosen:updated");
      });
});
$(document).on('change','#periodo',function()
{
      var tipo_perioso_id = $('#periodo').val();
      $.getJSON("clase_rete_aico.php?control=periodos&filtro="+tipo_perioso_id,function(data)
      {
            $("#peri_id").empty();
            $('#peri_id').append(new Option('',0));
            $.each(data,function(index,value)
            {
                $('#peri_id').append(new Option(value[2],value[0]));
            });
            $("#peri_id").trigger("chosen:updated");
      });
});

$(document).on('click','.btn-ok',function(event)
{
    firma = $(this).val();
    if(firma === "Si")
    {
        var url = "clase_rete_aico.php";
        var datos;
        $('[name ="decla_correccion"]').prop('disabled',false);
        $('[name ="decl_basi_id"]').prop('disabled',false);

        if($("#acti_ciiu1").val() === '')
        {
            var url = "../../recursos/mensajes.php?control=03&contenido="+encodeURI("Debe incluir 1 actividad principal para continuar");
            $('.modal-messages').load(url,function(result)
            {
                $('#myModalMensajes').modal({show:true});
            });
        }else {
          ValidarFormulario();
        }

        if(isvalid == true)
        {

            if ($('#btn-guardar').hasClass('clasnuevo'))
            {
                datos = "control=incluir&"+$('#frm-declaraciones_aico').serialize()+"&firma_contador="+firma;
            }else if ($('#btn-guardar').hasClass('clasedit')){
                $("#vige_anio").attr('disabled', false).trigger("liszt:updated");
                $("#peri_id").attr('disabled', false).trigger("liszt:updated");
                $('#decl_basi_placa').prop('disabled',false);
                $('#decl_basi_documento_cont').prop('disabled',false);
                datos = "control=modificar&"+$('#frm-declaraciones_aico').serialize()+"&firma_contador="+firma;
            }

            var resultados;
            resultados = peticion_ajax('POST',url,datos,false,'json',null);

                if(resultados.success)
                {
                    $('#myModal').modal('hide');
                    var url = "../../recursos/mensajes.php?control=01&contenido="+encodeURI(resultados.success);
                    if ($('#btn-guardar').hasClass('iframe-cerrar-btn'))
                    {
                        window.parent.AICOGridDeclaraciones(encodeURI(url));
                        $(".modal-iframe",parent.document).hide();
                        $("#iframe-modal",parent.document).remove();
                    }
                }else{
                    $('#myModal').modal('hide');
                    var url = "../../recursos/mensajes.php?control=04&contenido="+encodeURI(resultados.errorMsg);
                    if ($('#btn-guardar').hasClass('iframe-cerrar-btn'))
                    {
                        window.parent.AICOGridDeclaraciones(encodeURI(url));
                        $(".modal-iframe",parent.document).hide();
                        $("#iframe-modal",parent.document).remove();
                    }
                }
        }
    }else {
      var url = "clase_rete_aico.php";
      var datos;
      $('[name ="decla_correccion"]').prop('disabled',false);
      $('[name ="decl_basi_id"]').prop('disabled',false);

      if($("#acti_ciiu1").val() === '')
      {
          var url = "../../recursos/mensajes.php?control=03&contenido="+encodeURI("Debe incluir 1 actividad principal para continuar");
          $('.modal-messages').load(url,function(result)
          {
              $('#myModalMensajes').modal({show:true});
          });
      }else {
        ValidarFormulario();
      }

      if(isvalid == true)
      {
          if ($('#btn-guardar').hasClass('clasnuevo'))
          {
              datos = "control=incluir&"+$('#frm-declaraciones_aico').serialize()+"&firma_contador="+firma;
          }else if ($('#btn-guardar').hasClass('clasedit')){
              $("#vige_anio").attr('disabled', false).trigger("liszt:updated");
              $("#peri_id").attr('disabled', false).trigger("liszt:updated");
              $('#decl_basi_placa').prop('disabled',false);
              $('#decl_basi_documento_cont').prop('disabled',false);
              datos = "control=modificar&"+$('#frm-declaraciones_aico').serialize()+"&firma_contador="+firma;
          }

          var resultados;
          resultados = peticion_ajax('POST',url,datos,false,'json',null);

              if(resultados.success)
              {
                  $('#myModal').modal('hide');
                  var url = "../../recursos/mensajes.php?control=01&contenido="+encodeURI(resultados.success);
                  if ($('#btn-guardar').hasClass('iframe-cerrar-btn'))
                  {
                      window.parent.AICOGridDeclaraciones(encodeURI(url));
                      $(".modal-iframe",parent.document).hide();
                      $("#iframe-modal",parent.document).remove();
                  }
              }else{
                  $('#myModal').modal('hide');
                  var url = "../../recursos/mensajes.php?control=04&contenido="+encodeURI(resultados.errorMsg);
                  if ($('#btn-guardar').hasClass('iframe-cerrar-btn'))
                  {
                      window.parent.AICOGridDeclaraciones(encodeURI(url));
                      $(".modal-iframe",parent.document).hide();
                      $("#iframe-modal",parent.document).remove();
                  }
              }
        }
    }
});

$(document).on('click','#btn-guardar',function (event)//--guardar
{/*ojo NO borrar ´por nada del mundo (mayor_uvt se cargar dentro de las formulas de concepto de liquidacion)*/
  // if ($('#mayor_uvt').val() == 'Si')
  // {
    $('#decl_basi_placa').prop('disabled',false);
    $('#decl_basi_documento_cont').prop('disabled',false);
      var cajas = validar_obligatorios(true);
      if (cajas == true)
      {
        var url = "formulario.php?control=02&mensaje="+encodeURI("Verifique si la declaracion lleva firma del revisor Fiscal !");
        $('.modal-modal-container').load(url,function(result)
        {
           $('#myModal_p').modal({show:true});

        });
      }else {
        var url = "formulario.php?control=03&mensaje="+encodeURI(cajas);
        $('.modal-modal-container').load(url,function(result)
        {
           $('#myModal_v').modal({show:true});

        });
      }

  // }else
  // {
  //       var url = "clase_rete_aico.php";
  //       var datos;
  //       $('[name ="decla_correccion"]').prop('disabled',false);
  //       $('[name ="decl_basi_id"]').prop('disabled',false);
  //
  //       if($("#acti_ciiu1").val() === '')
  //       {
  //           var url = "../../recursos/mensajes.php?control=03&contenido="+encodeURI("Debe incluir 1 actividad principal para continuar");
  //           $('.modal-messages').load(url,function(result)
  //           {
  //               $('#myModalMensajes').modal({show:true});
  //           });
  //       }else {
  //         ValidarFormulario();
  //       }
  //
  //       if(isvalid == true)
  //       {
  //           if ($(this).hasClass('clasnuevo'))
  //           {
  //               datos = "control=incluir&"+$('#frm-declaraciones_aico').serialize();
  //           }else if ($(this).hasClass('clasedit')){
  //               $("#vige_anio").attr('disabled', false).trigger("liszt:updated");
  //               $("#peri_id").attr('disabled', false).trigger("liszt:updated");
  //               $('#decl_basi_placa').prop('disabled',false);
  //               $('#decl_basi_documento_cont').prop('disabled',false);
  //               datos = "control=modificar&"+$('#frm-declaraciones_aico').serialize();
  //           }
  //
  //           var resultados;
  //           resultados = peticion_ajax('POST',url,datos,false,'json',null);
  //
  //               if(resultados.success)
  //               {
  //                   $('#myModal').modal('hide');
  //                   var url = "../../recursos/mensajes.php?control=01&contenido="+encodeURI(resultados.success);
  //                   if ($(this).hasClass('iframe-cerrar-btn'))
  //                   {
  //                       window.parent.AICOGridDeclaraciones(encodeURI(url));
  //                       $(".modal-iframe",parent.document).hide();
  //                       $("#iframe-modal",parent.document).remove();
  //                   }
  //               }else{
  //                   $('#myModal').modal('hide');
  //                   var url = "../../recursos/mensajes.php?control=04&contenido="+encodeURI(resultados.errorMsg);
  //                   if ($(this).hasClass('iframe-cerrar-btn'))
  //                   {
  //                       window.parent.AICOGridDeclaraciones(encodeURI(url));
  //                       $(".modal-iframe",parent.document).hide();
  //                       $("#iframe-modal",parent.document).remove();
  //                   }
  //               }
  //       }
  // }

});

$(document).on('click','#btn-eliminar',function ()
{
  var url = "clase_rete_aico.php";
  var datos = "control=eliminar&id="+$(this).data("id");
  var resultados;
  resultados = peticion_ajax('POST',url,datos,false,'json',null);
  if((resultados.success) || (resultados.danger))
  {
    var control;
    var contenido;
    $('#myModal').modal('hide');
    $("#grid-command-buttons").bootgrid("reload");
    if(resultados.success)
    {
       control = "01";
       contenido = resultados.success;
    }else if(resultados.danger){
       control = "04";
       contenido = resultados.danger;
    }
    var url = "../../recursos/mensajes.php?control="+control+"&contenido="+encodeURI(contenido);
    $('.modal-messages').load(url,function(result)
    {
        $('#myModalMensajes').modal({show:true});
    });
  }else{
    $('#myModal').modal('hide');
    $("#grid-command-buttons").bootgrid("reload");
    var url = "../../recursos/mensajes.php?control=04&contenido="+encodeURI(resultados.errorMsg);
    $('.modal-messages').load(url,function(result)
    {
        $('#myModalMensajes').modal({show:true});
    });
  }
});

$(document).on('click','#frm-declaraciones_aico .btn_add_decl_actividad',function(e)
{
    index_id++;
    var $div = $('#decl_acti'),
        $clone = $div
                .clone()
                .removeClass('hide')
                .removeAttr('id')
                .attr('data-acti-index',index_id)
                .insertBefore($div);


                $clone.find('#h_acti_ciiu').each(function(){
                    $(this).attr('name', 'acti_ciiu[' + index_id + ']');
                    $(this).attr('id', 'acti_ciiu' + index_id);
                    $(this).attr('data-placeholder', '');
                    $(this).addClass('chosen-select tab_acti_ciiu');
                    $(this).chosen({ width: '100%' });
                }).end();

                $clone.find('[id="h_rel_decl_nombre_act"]').addClass('rel_decl_nombre_act').end();
                $clone.find('[id="h_rel_decl_nombre_act"]').attr('id','rel_decl_nombre_act'+index_id).end();
                $clone.find('[name="h_rel_decl_nombre_act"]').attr('name','rel_decl_nombre_act[' + index_id + ']').end();
                $("#rel_decl_nombre_act"+index_id).attr("tabindex",500);


                $clone.find('[id="h_rel_decl_base_rete"]').addClass('rel_decl_base_rete').end();
                $clone.find('[id="h_rel_decl_base_rete"]').attr('id','rel_decl_base_rete'+index_id).end();
                $clone.find('[name="h_rel_decl_base_rete"]').attr('name','rel_decl_base_rete[' + index_id + ']').end();
                $(document).on('blur','#rel_decl_base_rete'+index_id,function(event)
                {
                  event.preventDefault();
                  var valor = $(this).val();
                  valor = valor.replace(/\./gi,"");
                  $(this).val(number_format(valor,0));
                });
                $clone.find('[id="h_rel_decl_act_acti_tarifa"]').addClass('rel_decl_act_acti_tarifa').end();
                $clone.find('[id="h_rel_decl_act_acti_tarifa"]').attr('id','rel_decl_act_acti_tarifa'+index_id).end();
                $clone.find('[name="h_rel_decl_act_acti_tarifa"]').attr('name','rel_decl_act_acti_tarifa[' + index_id + ']').end();
                //valor sistema
                $clone.find('[id="h_rel_decl_act_acti_tarifa_vs"]').attr('id','rel_decl_act_acti_tarifa_vs'+index_id).end();
                $clone.find('[name="h_rel_decl_act_acti_tarifa_vs"]').attr('name','rel_decl_act_acti_tarifa_vs[' + index_id + ']').end();
                $("#rel_decl_act_acti_tarifa_vs"+index_id).attr("tabindex",500);

                $clone.find('[id="h_rel_decl_act_tottal_rete"]').addClass('rel_decl_act_tottal_rete').end();
                $clone.find('[id="h_rel_decl_act_tottal_rete"]').attr('id','rel_decl_act_tottal_rete'+index_id).end();
                $clone.find('[name="h_rel_decl_act_tottal_rete"]').attr('name','rel_decl_act_tottal_rete[' + index_id + ']').end();
                //valor sistema
                $clone.find('[id="h_rel_decl_act_tottal_rete_vs"]').attr('id','rel_decl_act_tottal_rete_vs'+index_id).end();
                $clone.find('[name="h_rel_decl_act_tottal_rete_vs"]').attr('name','rel_decl_act_tottal_rete_vs[' + index_id + ']').end();
                $("#rel_decl_act_tottal_rete_vs"+index_id).attr("tabindex",500);

});

$(document).on('click','#frm-declaraciones_aico .btn-eleminar_actividad',function (event)
{
    var elim_id = $(this).prop('id');
    var index_id = elim_id.substring(13,255);
    var combo_acti = $('#acti_ciiu'+index_id).val();

    event.preventDefault();
    $(this.parentNode.parentNode).remove();
    var vig = $('#vige_anio').val();
    var per = $('#peri_id').val();
    var dcl_id = $('#decl_basi_id').val();

    var url =  "clase_rete_aico.php"
    var datos = "control=eliminar_actividad&cod_acti="+combo_acti+"&vigencia="+vig+"&periodo="+per+"&dcl_id="+dcl_id;
    consulting = peticion_ajax('POST',url,datos,false,'json',null);

});

// $(document).on('focus','#frm-declaraciones_aico .tab_acti_ciiu',function(event)
// {
//
//       event.preventDefault();
//       var vlr = $(this.parentNode).find(":selected").val();
//       var cdn =  $(this).parent().children("select").prop('id');
//       var linea = cdn.substring(9, 255);
//       var vigencia = $('#vige_anio').val();
//       alert(vigencia);
//       // console.log('vigencia = '+vigencia);
//       if(vigencia)
//       {
//              $.getJSON("clase_rete_aico.php?control=actividades&filtro="+vigencia,function(data)
//              {
//               //  alert("entro");
//                    $('#acti_ciiu'+linea).empty();
//                    $('#acti_ciiu'+linea).append(new Option('',''));
//                    $.each(data,function(index,value)
//                    {
//                        $('#acti_ciiu'+linea).append(new Option(value[0],value[0]));
//                    });
//                    $('#acti_ciiu'+linea).trigger("chosen:updated");
//
//              });
//        }
//
// });

/*Cargue de combox de las actividades y su descripccion, tarifa etc..*/
$(document).on('change','#frm-declaraciones_aico .tab_acti_ciiu',function(event)
{

      event.preventDefault();
      var vlr = $(this.parentNode).find(":selected").val();
      var cdn =  $(this).parent().children("select").prop('id');
      var linea = cdn.substring(9, 255);
      var vigencia = $('#vige_anio').val();

       $.getJSON("clase_rete_aico.php?control=actividades&filtro="+vigencia+"&ciiu="+vlr,function(data)
       {
             $.each(data,function(index,value)
             {
                  $('#rel_decl_act_acti_tarifa'+linea).val(value[4]);
                  $('#rel_decl_act_acti_tarifa_vs'+linea).val(value[4]);
                  $('#rel_decl_nombre_act'+linea).val(value[3]);
             });
             $("#rel_decl_act_acti_tarifa").trigger("chosen:updated");


       });
});


$(document).on('focus','#frm-declaraciones_aico .rel_decl_base_rete',function(event)
{

    event.preventDefault();
    var vlr = $(this).val();
    var cdn =  $(this).prop('id');
    var linea = cdn.substring(18, 255);

    if(!$('#acti_ciiu'+linea).val())
    {
      var url = "../../recursos/mensajes.php?control=02&contenido="+encodeURI("Actividad economica no puede estar Vacia");
      $('.modal-messages').load(url,function(result)
      {
          $('#myModalMensajes').modal({show:true});
      });
        $('#acti_ciiu'+linea).focus();
    }


});

$(document).on('blur','#frm-declaraciones_aico .rel_decl_base_rete',function(event)
{
      event.preventDefault();
      var vlr = $(this).val();
      var cdn =  $(this).prop('id');
      var linea = cdn.substring(18, 255);
      var base_rete_ica = "";
      var base_rete_ica_vs = "";

      var tarifa = parseFloat($('#rel_decl_act_acti_tarifa'+linea).val());
      var tarifa_vs = parseFloat($('#rel_decl_act_acti_tarifa_vs'+linea).val());

            if($('#rel_decl_base_rete'+linea).val())
            {
              base_rete_ica = $('#rel_decl_base_rete'+linea).val();
              base_rete_ica = base_rete_ica.replace(/\./gi,"");
            } else{
              $('#rel_decl_base_rete'+linea).val('0');base_rete_ica = 0;
            };
            base_rete_ica_vs = $('#rel_decl_base_rete'+linea).val();
            base_rete_ica_vs = base_rete_ica_vs.replace(/\./gi,"");

            if($('#acti_ciiu'+linea).val())
            {
              var total_imp = base_rete_ica * tarifa / 1000;
              total_imp = Math.round(total_imp/1000)*1000;
              var total_imp_vs = base_rete_ica_vs * tarifa_vs / 1000;
              total_imp_vs = Math.round(total_imp_vs/1000)*1000;
              $('#rel_decl_act_tottal_rete'+linea).val(number_format(total_imp,0));/*lleno total de industria y comercio*/
              $('#rel_decl_act_tottal_rete_vs'+linea).val(number_format(total_imp_vs,0));

              var total_rete_ica = 0;
              var total_retenido = 0;
              var total_retenido_vs = 0;
              var i = 0;
              $(".rel_decl_base_rete").each(function(index_caja)
              {
                    var caja =  $(this).prop('id');
                    var id = caja.substring(18, 255);
                    var s_brutos = $("#rel_decl_base_rete"+id).val();
                    s_brutos = s_brutos.replace(/\./gi,"");
                    if(s_brutos > 0)//suma de brutos
                    {
                        total_rete_ica = (parseFloat(s_brutos) + parseFloat(total_rete_ica));
                    }

                    var v_rete = $("#rel_decl_act_tottal_rete"+id).val();
                    v_rete = v_rete.replace(/\./gi,"");
                    if(v_rete > 0)//suma total ingresos
                    {

                        total_retenido = (parseFloat(v_rete) + parseFloat(total_retenido));
                    }

                    var v_rete_vs = $("#rel_decl_act_tottal_rete_vs"+id).val();
                    v_rete_vs = v_rete_vs.replace(/\./gi,"");
                    if(v_rete_vs > 0)//suma total ingresos
                    {

                        total_retenido_vs = (parseFloat(v_rete_vs) + parseFloat(total_retenido_vs));
                    }
              });
              $('#t_rel_decl_base_ica').val(number_format(total_rete_ica,0));
              $('#t_rel_decl_act_tottal_ica').val(number_format(total_retenido,0));
              $('#t_rel_decl_act_tottal_ica_vs').val(number_format(total_retenido_vs,0));

            }
});

$(document).on('blur','#frm-declaraciones_aico .rel_decl_act_acti_tarifa',function(event)
{
  event.preventDefault();
  var vlr = $(this).val();
  var cdn =  $(this).prop('id');
  var linea = cdn.substring(24, 255);
  var base_rete_ica = "";
  var base_rete_ica_vs = "";

  var tarifa = parseFloat($('#rel_decl_act_acti_tarifa'+linea).val());
  var tarifa_vs = parseFloat($('#rel_decl_act_acti_tarifa_vs'+linea).val());

        if($('#rel_decl_base_rete'+linea).val())
        {
          base_rete_ica = $('#rel_decl_base_rete'+linea).val();
          base_rete_ica = base_rete_ica.replace(/\./gi,"");
        } else{
          $('#rel_decl_base_rete'+linea).val('0');base_rete_ica = 0;
        };
        base_rete_ica_vs = $('#rel_decl_base_rete'+linea).val();
        base_rete_ica_vs = base_rete_ica_vs.replace(/\./gi,"");

        if($('#acti_ciiu'+linea).val())
        {

            var total_imp = base_rete_ica * tarifa / 1000;
            total_imp = Math.round(total_imp/1000)*1000;
            var total_imp_vs = base_rete_ica_vs * tarifa_vs / 1000;
            total_imp_vs = Math.round(total_imp_vs/1000)*1000;
            $('#rel_decl_act_tottal_rete'+linea).val(number_format(total_imp,0));/*lleno total de industria y comercio*/
            $('#rel_decl_act_tottal_rete_vs'+linea).val(number_format(total_imp_vs,0));

            var total_rete_ica = 0;
            var total_retenido = 0;
            var total_retenido_vs = 0;

            $(".rel_decl_base_rete").each(function(index_caja)
            {
                  var caja =  $(this).prop('id');
                  var id = caja.substring(18, 255);

                  var s_brutos = $("#rel_decl_base_rete"+id).val();
                  s_brutos = s_brutos.replace(/\./gi,"");
                  if(s_brutos > 0)//suma de brutos
                  {
                      total_rete_ica = (parseFloat(s_brutos) + parseFloat(total_rete_ica));
                  }

                  var v_rete = $("#rel_decl_act_tottal_rete"+id).val();
                  v_rete = v_rete.replace(/\./gi,"");
                  if(v_rete > 0)//suma total ingresos
                  {

                      total_retenido = (parseFloat(v_rete) + parseFloat(total_retenido));
                  }

                  var v_rete_vs = $("#rel_decl_act_tottal_rete_vs"+id).val();
                  v_rete_vs = v_rete_vs.replace(/\./gi,"");
                  if(v_rete_vs > 0)//suma total ingresos
                  {

                      total_retenido_vs = (parseFloat(v_rete_vs) + parseFloat(total_retenido_vs));
                  }
            });
            $('#t_rel_decl_base_ica').val(number_format(total_rete_ica,0));
            $('#t_rel_decl_act_tottal_ica').val(number_format(total_retenido,0));
            $('#t_rel_decl_act_tottal_ica_vs').val(number_format(total_retenido_vs,0));
        }
});

$(document).on('blur','#frm-declaraciones_aico .rel_decl_act_tottal_rete',function(event)
{
  event.preventDefault();
  var vlr = $(this).val();
  var cdn =  $(this).prop('id');
  var linea = cdn.substring(24, 255);
  var base_rete_ica = "";
  var base_rete_ica_vs = "";

        if($('#acti_ciiu'+linea).val())
        {

          var total_retenido = 0;
          var total_retenido_vs = 0;
          $(".rel_decl_base_rete").each(function(index_caja)
          {
              var caja =  $(this).prop('id');
              var id = caja.substring(18, 255);

              var s_base_total = $("#rel_decl_act_tottal_rete"+id).val();
              s_base_total = s_base_total.replace(/\./gi,"");
              if(s_base_total > 0)//suma total ingresos
              {
                  total_retenido = (parseFloat(s_base_total) + parseFloat(total_retenido));
              }
              $('#t_rel_decl_act_tottal_ica').val(number_format(total_retenido,0));


              var v_rete_vs = $("#rel_decl_act_tottal_rete_vs"+id).val();
              v_rete_vs = v_rete_vs.replace(/\./gi,"");
              if(v_rete_vs > 0)//suma total ingresos
              {

                  total_retenido_vs = (parseFloat(v_rete_vs) + parseFloat(total_retenido_vs));
              }
              $('#t_rel_decl_act_tottal_ica_vs').val(number_format(total_retenido_vs,0));
          });
          vlr = vlr.replace(/\./gi,"");
          $(this).val(number_format(vlr,0));
        }
});



$(document).on('blur','#frm-declaraciones_aico .declarado',function(event)//Calculo de formulas para los renglones de la declaracion.
{
    renglon_id = 0;
    var vigencia_renglones = $('#vige_anio').val();
    $("#btn-guardar").prop('disabled',false);
    $.getJSON("clase_rete_aico.php?control=renglones_ico&filtro="+vigencia_renglones,function(data)
    {
      $.each(data,function(index,value)
      {
        renglon_id++;
        if(value.conc_liqu_estado == 'Activo')
        {
          var formula_eval1 = eval(value.conc_liqu_formula);
          $('#industria_vd'+value.conc_id).val(number_format(formula_eval1,0));
          $('#industria_vs1').val($('#industria_vd1').val());
          var formula_eval2 = eval(value.conc_liqu_formula2);
          $('#industria_vs'+value.conc_id).val(number_format(formula_eval2,0));
        }
      });
    });

});

$(document).on('click','#frm-declaraciones_aico .declarado',function(event)//Calculo de formulas para los renglones de la declaracion.
{
    renglon_id = 0;
    var vigencia_renglones = $('#vige_anio').val();

    $.getJSON("clase_rete_aico.php?control=renglones_ico&filtro="+vigencia_renglones,function(data)
    {
      $.each(data,function(index,value)
      {
        renglon_id++;
        if(value.conc_liqu_estado == 'Activo')
        {
          var formula_eval1 = eval(value.conc_liqu_formula);
          $('#industria_vd'+value.conc_id).val(number_format(formula_eval1,0));
          $('#industria_vs1').val($('#industria_vd1').val());
          var formula_eval2 = eval(value.conc_liqu_formula2);
          $('#industria_vs'+value.conc_id).val(number_format(formula_eval2,0));
        }
      });
    });

});



/***************************************** Validaciones ************************************/

function llenar_general(datos)
{
  $('#razon_social').val(datos[0].cont_razon_social);
  $('#nom_repre').val(datos[0].pers_nombre_completo);
  $('#documento_repre').val(datos[0].documento_repre);
  $('#decl_basi_telefono').val(datos[0].pers_telefono_fijo);
  $('#decl_basi_direc_establecimiento').val(datos[0].esta_direccion);
  $('#depa_id_local').val(datos[0].depa_id_est);
  $('#depa_id_local').trigger("chosen:updated");
  $('#decl_basi_email').val(datos[0].esta_correo);

  $.getJSON("clase_rete_aico.php?control=municipios&filtro="+datos[0].depa_id_est,function(data)
  {
        $('#muni_id_local').append(new Option('',''));
        $.each(data,function(index,value)
        {
            $('#muni_id_local').append(new Option(value[1],value[0]));
        });
          $('#muni_id_local').val(datos[0].muni_id_est);
          $('#muni_id_local').trigger("chosen:updated");
  });

  $('#decl_basi_direc_notificacion').val(datos[0].esta_direccion_notificacion);
  $('#depa_id_notificacion').val(datos[0].depa_id_notificacion);
  $.getJSON("clase_rete_aico.php?control=municipios&filtro="+datos[0].depa_id_notificacion,function(data)
  {
        $('#muni_id_notificacion').append(new Option('',''));
        $.each(data,function(index,value)
        {
            $('#muni_id_notificacion  ').append(new Option(value[1],value[0]));
        });
        $('#muni_id_notificacion').val(datos[0].muni_id_notificacion);
        $('#muni_id_notificacion').trigger("chosen:updated");
  });
  // $('#muni_id_local').val(datos[0].muni_id_est);
  // $('#muni_id_local').trigger("chosen:updated");

  $('#depa_id_notificacion').trigger("chosen:updated");
  // $('#muni_id_notificacion').val(datos[0].muni_id_notificacion);
  // $('#muni_id_notificacion').trigger("chosen:updated");
  if(datos[0].esta_patente){$('#patente').val(datos[0].esta_patente);}
  if(datos[0].esta_pesas){$('#pesas').val(datos[0].esta_pesas);}
}

$(document).on('blur','#decl_basi_documento_cont',function()
{
  var resul_est = "";
  var url = "clase_rete_aico.php";
  var datos = "control=validar_nit&placa="+$('#decl_basi_placa').val()+"&nit="+$(this).val();

  if($(this).val())
  {
    resul_est = peticion_ajax('POST',url,datos,false,'json',null);
    if(resul_est.danger)
    {
      $("#grid-command-buttons").bootgrid("reload");
      var url = "../../recursos/mensajes.php?control=04&contenido="+encodeURI(resul_est.danger);
      $('.modal-messages').load(url,function(result)
      {
          $('#myModalMensajes').modal({show:true});
      });
      $('#frm-declaraciones_aico')[0].reset();
    }else {
      llenar_general(resul_est);
    }
   }//else {
  //
  //   $("#grid-command-buttons").bootgrid("reload");
  //   var url = "../../recursos/mensajes.php?control=03&contenido="+encodeURI("Identificacion del establecimiento no puede estar Vacia");
  //   $('.modal-messages').load(url,function(result)
  //   {
  //       $('#myModalMensajes').modal({show:true});
  //   });
  // }
});

$(document).on('blur','#decl_basi_placa',function()
{
  var mensaje = "";
  var url = "clase_rete_aico.php";
  var datos = "control=validar_vigencia&placa="+$(this).val()+"&vigencia="+$('#vige_anio').val()
              +"&tipo_periodo="+$("#peri_id").val();

  if($(this).val())
  {
    mensaje = peticion_ajax('POST',url,datos,false,'json',null);
 // console.log("que llega = "+mensaje.danger);
      if(mensaje.danger == "0")
      {

        $("#decla_correccionS").prop("checked", false);
        $("#decla_correccionN").prop("checked", true);
      }else{

        $("#grid-command-buttons").bootgrid("reload");
        var url = "../../recursos/mensajes.php?control=03&contenido="+encodeURI(mensaje.danger);
        $('.modal-messages').load(url,function(result)
        {
            $('#myModalMensajes').modal({show:true});
        });
        $("#decla_correccionS").prop("checked", true);
        $("#decla_correccionN").prop("checked", false);

      }
  }
});

function validar_renglones()
{
  var numero_reng = $('.declarado').length;
  if(numero_reng > 0)
  {
    // for(var i = 1; i < numero_reng+1; i++)
    // {
      $(".declarado").each(function (index)
      {
        var id_element = $(this).prop('id');
        var id = id_element.substring(12,255);
        if($('#industria_vd'+id).val() == "")
        {
          alert("Renglon Vacio = "+id);
        }
      })
    // }
  }

}

function ValidarFormulario()
{

  $("#frm-declaraciones_aico")
  .find('[name="vige_anio"]')
            .change(function(e) {
                $('#frm-declaraciones_aico').formValidation('revalidateField', 'vige_anio');
            })
        .end()
.find('[name="peri_id"]')
          .change(function(e) {
              $('#frm-declaraciones_aico').formValidation('revalidateField', 'peri_id');
          })
      .end()
.find('[name="depa_id_local"]')
          .change(function(e) {
              $('#frm-declaraciones_aico').formValidation('revalidateField', 'depa_id_local');
          })
      .end()
.find('[name="muni_id_local"]')
          .change(function(e) {
              $('#frm-declaraciones_aico').formValidation('revalidateField', 'muni_id_local');
          })
      .end()
.find('[name="acti_ciiu[1]"]')
          .change(function(e) {
              $('#frm-declaraciones_aico').formValidation('revalidateField', 'acti_ciiu[1]');
          })
      .end()
    .formValidation(
    {
        framework: 'bootstrap',
        // excluded: [':disabled'],
        icon:
        {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        err: {
            container: 'tooltip'
        },
        fields:{
            vige_anio: {
                excluded: false,
                validators: {
                    callback: {
                        message: 'La vigencia es  obligatorio',
                        callback: function(value, validator, $field) {

                            var options = validator.getFieldElements('vige_anio').val();
                            return (options.length >= 1);
                        }
                    }
                }
            },
            peri_id:{
                excluded: false,
                validators: {
                    callback: {
                        message: 'El periodo obligatorio',
                        callback: function(value, validator, $field) {

                            var options = validator.getFieldElements('vige_anio').val();
                            return (options.length >= 1);
                        }
                    }
                }
            },
            decl_basi_placa: {
                validators: {
                    notEmpty: {
                        message: 'El Placa no es valido y es obligatorio'
                    },
                    stringLength: {
                        min: 1,
                        max: 11,
                        message: 'Minimo 3 caracteres y maximo 11'
                    },
                    regexp: {
                        regexp: /^[0123456789a-zA-Z]+$/,
                        message: 'No se aceptan simbolos'
                    }
                }
            },
            decl_basi_documento_cont: {
                validators: {
                    notEmpty: {
                        message: 'El Nit no es valido y es obligatorio'
                    },
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: 'Minimo 6 caracteres y maximo 12'
                    },
                    regexp: {
                        regexp: /^[0123456789a-zA-Z]+$/,
                        message: 'No se aceptan simbolos'
                    }
                }
            },
            razon_social: {
                validators: {
                    notEmpty: {
                        message: 'El Razon social es obligatorio'
                    }
                    // ,
                    // regexp: {
                    //   regexp: /^[0-9a-zA-ZáéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_\s]+$/,
                    //     message: 'No se aceptan simbolos'
                    // }
                }
            },
            nom_repre: {
                validators: {
                    notEmpty: {
                        message: 'El Nombre del Representante es obligatorio'
                    },
                    regexp: {
                        regexp: /^[0123456789a-zA-Z\s]+$/,
                        message: 'No se aceptan simbolos'
                    }
                }
            },
            documento_repre: {
                validators: {
                    notEmpty: {
                        message: 'El Documento del Representante es obligatorio'
                    },
                    regexp: {
                        regexp: /^[0123456789a-zA-Z]+$/,
                        message: 'No se aceptan simbolos'
                    }
                }
            },
            decl_basi_direc_establecimiento: {
                validators: {
                    notEmpty: {
                        message: 'La Dirección del establecimiento es obligatoria'
                    },
                    regexp: {
                        regexp: /^[0123456789a-zA-Z\s\-]+$/,
                        message: 'No se aceptan simbolos'
                    }
                }
            },
            depa_id_local: {
                excluded: false,
                validators: {
                    callback: {
                        message: 'El Departamento del establecimiento es obligatorio',
                        callback: function(value, validator, $field) {
                            var options = validator.getFieldElements('depa_id_local').val();
                            return (options.length >= 1);
                        }
                    }
                }
            },
            muni_id_local: {
                excluded: false,
                validators: {
                    callback: {
                        message: 'El Municipio del establecimiento es obligatorio',
                        callback: function(value, validator, $field) {
                            var options = validator.getFieldElements('muni_id_local').val();
                            return (options.length >= 1);
                        }
                    }
                }
            },
      'acti_ciiu[1]': {
           row: '.col-md-1',
           validators: {
               notEmpty: {
                   message: 'The task is required'
               }
           }
       },
      n_correccion: {
          validators: {
              callback: {
                  message: 'Please specific the channel',
                  callback: function(value, validator, $field) {
                      var correccion = $('#frm-declaraciones_aico').find('[name="decla_correccion"]:checked').val();
                      return (correccion !== 'Si') ? true : (value !== '');

                              }
                          }
                      }
              }
        }
    })
    .on('change', '[name="decla_correccion"]', function(e) {
      $('#frm-declaraciones_aico').formValidation('revalidateField', 'n_correccion');
    })
    .on('success.field.fv', function(e, data) {
        if (data.field === 'n_correccion') {
            var channel = $('#frm-declaraciones_aico').find('[name="decla_correccion"]:checked').val();
            if (channel !== 'Si')
            {
               data.element.closest('.form-group').removeClass('has-success');
               data.element.data('fv.icon').hide();
            }
        }
    })
    .on('err.field.fv', function(e, data) {
         isvalid = false;
    }).on('success.field.fv', function(e, data) {
        if (data.fv.getInvalidFields().length > 0)
        {
            isvalid = false;
        }else{
            isvalid = true;
        }
    });
  //
    $("#frm-declaraciones_aico").submit();

    return isvalid;
}

/*******************************************consultar de reteica****************************/

function consultar_declaracion(datos,datos_repre)
{

  $('#decl_basi_id').val(datos['decla_id']);
  $('#decl_fecha_presentacion').val(datos['decl_fecha_presentacion']);
  $('#decl_basi_placa').val(datos['esta_id']);
  $('#decl_basi_documento_cont').val(datos['decl_basi_documento_cont']);
  $('#razon_social').val(datos['decl_basi_razon_social']);

  $('#nom_repre').val(datos_repre['pers_nombre_completo']);
  $('#documento_repre').val(datos_repre['pers_documento']);
  $('#decl_basi_telefono').val(datos_repre['pers_telefono_fijo']);

  $('#decl_basi_direc_establecimiento').val(datos['esta_direccion']);
  $('#decl_basi_direc_notificacion').val(datos['decl_basi_direc_notificacion']);
  $('#decl_basi_placas').val(datos['decl_numero_placas']);
  // if(datos['decl_basi_lleva_libros_contables'] == "Si"){$('#decl_basi_lleva_libros_contablesS').attr('checked',true);}
  $('#decl_basi_email').val(datos['esta_correo']);
  if(datos['decl_basi_ingre_otr_muni'] == "Si"){$('#decl_basi_ingre_otr_muniS').attr('checked',true);}
  $('#decl_basi_nombres_muni').val(datos['decl_basi_nombres_muni']);
  if(datos['decla_correcion'] == "Si"){$('#decla_correccionS').attr('checked',true);}
  $('#n_correccion').val(datos['decla_numero_correccion']);
  $('#esta_fecha_correcion').val(datos['decla_fecha_correccion']);
  // if(datos['esta_patente']){$('#patente').val(datos['esta_patente']);}
  // if(datos['esta_pesas']){$('#pesas').val(datos['esta_pesas']);}
}

function editar_actividades(actividades)
{
    var base = 0;
    var total = 0;
    var total1 = 0;

    $.each(actividades,function(index,value)
    {
      index_id++;
      var $div = $('#decl_acti'),
          $clone = $div
                  .clone()
                  .removeClass('hide')
                  .removeAttr('id')
                  .attr('data-acti-index',index)
                  .insertBefore($div);
                  $clone.find('#h_acti_ciiu').each(function()
                  {
                      $(this).attr('name', 'acti_ciiu[' + index_id + ']');
                      $(this).attr('id', 'acti_ciiu' + index_id);
                      $(this).attr('data-placeholder', '');
                      $(this).addClass('chosen-select tab_acti_ciiu');
                      $('#acti_ciiu'+index_id).val(value[0]);
                      $('#acti_ciiu'+index_id).trigger("chosen:updated");
                      $(this).chosen({ width: '100%' });
                  }).end();

        $clone.find('[id="h_rel_decl_nombre_act"]').addClass('rel_decl_nombre_act').end();
        $clone.find('[id="h_rel_decl_nombre_act"]').attr('id','rel_decl_nombre_act'+index_id).end();
        $clone.find('[name="h_rel_decl_nombre_act"]').attr('name','rel_decl_nombre_act[' + index_id + ']').end();
        $('#rel_decl_nombre_act'+index_id).val(actividades[index].acti_descripcion);

        $clone.find('[id="h_rel_decl_base_rete"]').addClass('rel_decl_base_rete').end();
        $clone.find('[id="h_rel_decl_base_rete"]').attr('id','rel_decl_base_rete'+index_id).end();
        $clone.find('[name="h_rel_decl_base_rete"]').attr('name','rel_decl_base_rete[' + index_id + ']').end();
        $('#rel_decl_base_rete'+index_id).val(number_format(actividades[index].rel_decl_base_retenido,0));

        base += parseFloat(actividades[index].rel_decl_base_retenido);
        $(document).on('blur','#rel_decl_base_rete'+index_id,function(event)
        {
          event.preventDefault();
          var valor = $(this).val();
          valor = valor.replace(/\./gi,"");
          $(this).val(number_format(valor,0));
        });

        $clone.find('[id="h_rel_decl_act_acti_tarifa"]').addClass('rel_decl_act_acti_tarifa').end();
        $clone.find('[id="h_rel_decl_act_acti_tarifa"]').attr('id','rel_decl_act_acti_tarifa'+index_id).end();
        $clone.find('[name="h_rel_decl_act_acti_tarifa"]').attr('name','rel_decl_act_acti_tarifa[' + index_id + ']').end();
        $('#rel_decl_act_acti_tarifa'+index_id).val(actividades[index].rel_decl_act_acti_tarifa,0);

        $clone.find('[id="h_rel_decl_act_acti_tarifa_vs"]').attr('id','rel_decl_act_acti_tarifa_vs'+index_id).end();
        $clone.find('[name="h_rel_decl_act_acti_tarifa_vs"]').attr('name','rel_decl_act_acti_tarifa_vs[' + index_id + ']').end();
        $('#rel_decl_act_acti_tarifa_vs'+index_id).val(actividades[index].rel_decl_act_acti_tarifa_vs);

        $clone.find('[id="h_rel_decl_act_tottal_rete"]').addClass('rel_decl_act_tottal_rete').end();
        $clone.find('[id="h_rel_decl_act_tottal_rete"]').attr('id','rel_decl_act_tottal_rete'+index_id).end();
        $clone.find('[name="h_rel_decl_act_tottal_rete"]').attr('name','rel_decl_act_tottal_rete[' + index_id + ']').end();
        $('#rel_decl_act_tottal_rete'+index_id).val(number_format(actividades[index].rel_decl_total_retenido,0));
        total += parseFloat(actividades[index].rel_decl_total_retenido);

        $clone.find('[id="h_rel_decl_act_tottal_rete_vs"]').attr('id','rel_decl_act_tottal_rete_vs'+index_id).end();
        $clone.find('[name="h_rel_decl_act_tottal_rete_vs"]').attr('name','rel_decl_act_tottal_rete_vs[' + index_id + ']').end();
        $('#rel_decl_act_tottal_rete_vs'+index_id).val(number_format(actividades[index].rel_decl_act_tottal_rete_vs,0));
        total1 += parseFloat(actividades[index].rel_decl_act_tottal_rete_vs);

        $clone.find('.btn-eleminar_actividad').attr('id','eleminar_acti'+ index_id).end();
    });
    $('#t_rel_decl_base_ica').val(number_format(base,0));
    $('#t_rel_decl_act_tottal_ica').val(number_format(total,0));
    $('#t_rel_decl_act_tottal_ica_vs').val(number_format(total1,0));
}

function consultar_actividades(actividades)
{
    var base = 0;
    var total = 0;
    var total1 = 0;
    index_id = 0;

    $.each(actividades,function(index,value)
    {
      index_id++;
      var $div = $('#decl_acti'),
          $clone = $div
                  .clone()
                  .removeClass('hide')
                  .removeAttr('id')
                  .attr('data-acti-index',index)
                  .insertBefore($div);
                  $clone.find('#h_acti_ciiu').each(function()
                  {
                      $(this).attr('name', 'acti_ciiu[' + index_id + ']');
                      $(this).attr('id', 'acti_ciiu' + index_id);
                      $(this).attr('data-placeholder', '');
                      $(this).addClass('chosen-select tab_acti_ciiu');
                      $('#acti_ciiu'+index_id).append(new Option(actividades[index].acti_ciiu,value[0]));
                      $('#acti_ciiu'+index_id).trigger("chosen:updated");
                      $(this).chosen({ width: '100%' });
                  }).end();

        $clone.find('[id="h_rel_decl_nombre_act"]').addClass('rel_decl_nombre_act').end();
        $clone.find('[id="h_rel_decl_nombre_act"]').attr('id','rel_decl_nombre_act'+index_id).end();
        $clone.find('[name="h_rel_decl_nombre_act"]').attr('name','rel_decl_nombre_act[' + index_id + ']').end();
        $('#rel_decl_nombre_act'+index_id).val(actividades[index].acti_descripcion);

        // $clone.find('[id="h_rel_decl_base_rete"]').addClass('rel_decl_base_rete').end();
        $clone.find('[id="h_rel_decl_base_rete"]').attr('id','rel_decl_base_rete'+index_id).end();
        $clone.find('[name="h_rel_decl_base_rete"]').attr('name','rel_decl_base_rete[' + index_id + ']').end();
        $('#rel_decl_base_rete'+ index_id).prop("readonly",true);
        $('#rel_decl_base_rete'+index_id).val(number_format(actividades[index].rel_decl_base_retenido,0));
        base += parseFloat(actividades[index].rel_decl_base_retenido);

        $clone.find('[id="h_rel_decl_act_acti_tarifa"]').attr('id','rel_decl_act_acti_tarifa'+index_id).end();
        $clone.find('[name="h_rel_decl_act_acti_tarifa"]').attr('name','rel_decl_act_acti_tarifa[' + index_id + ']').end();
        $('#rel_decl_act_acti_tarifa'+ index_id).prop("readonly",true);
        $('#rel_decl_act_acti_tarifa'+index_id).val(actividades[index].rel_decl_act_acti_tarifa);

        $clone.find('[id="h_rel_decl_act_acti_tarifa_vs"]').attr('id','rel_decl_act_acti_tarifa_vs'+index_id).end();
        $clone.find('[name="h_rel_decl_act_acti_tarifa_vs"]').attr('name','rel_decl_act_acti_tarifa_vs[' + index_id + ']').end();
        $('#rel_decl_act_acti_tarifa_vs'+index_id).val(actividades[index].rel_decl_act_acti_tarifa_vs);

        $clone.find('[id="h_rel_decl_act_tottal_rete"]').attr('id','rel_decl_act_tottal_rete'+index_id).end();
        $clone.find('[name="h_rel_decl_act_tottal_rete"]').attr('name','rel_decl_act_tottal_rete[' + index_id + ']').end();
        $('#rel_decl_act_tottal_rete'+ index_id).prop("readonly",true);
        $('#rel_decl_act_tottal_rete'+index_id).val(number_format(actividades[index].rel_decl_total_retenido,0));
        total += parseFloat(actividades[index].rel_decl_total_retenido);

        $clone.find('[id="h_rel_decl_act_tottal_rete_vs"]').attr('id','rel_decl_act_tottal_rete_vs'+index_id).end();
        $clone.find('[name="h_rel_decl_act_tottal_rete_vs"]').attr('name','rel_decl_act_tottal_rete_vs[' + index_id + ']').end();
        $('#rel_decl_act_tottal_rete_vs'+index_id).val(number_format(actividades[index].rel_decl_act_tottal_rete_vs,0));
        total1 += parseFloat(actividades[index].rel_decl_act_tottal_rete_vs);

        $clone.find('.btn-eleminar_actividad').attr('id','eleminar_acti'+ index_id).end();
        $('#eleminar_acti'+ index_id).prop("disabled",true);
    });
    $('#t_rel_decl_base_ica').val(number_format(base,0));
    $('#t_rel_decl_base_ica').prop("readonly",true);
    $('#t_rel_decl_act_tottal_ica').val(number_format(total,0));
    $('#t_rel_decl_act_tottal_ica').prop("readonly",true);
    $('#t_rel_decl_act_tottal_ica_vs').val(number_format(total1,0));

}

/*
function consultar_actividades(actividades)
{
  var base = 0
  var total = 0
  $.each(actividades,function(index,value)
    {

      var $div = $('#decl_acti'),
          $clone = $div
                  .clone()
                  .removeClass('hide')
                  .removeAttr('id')
                  .attr('data-acti-index',index)
                  .insertBefore($div);

                  $clone.find('#h_acti_ciiu').each(function(){
                      $(this).attr('name', 'acti_ciiu[' + index + ']');
                      $(this).attr('id', 'acti_ciiu' + index);
                      $(this).attr('data-placeholder', '');
                      $(this).addClass('chosen-select tab_acti_ciiu');
                      $('#acti_ciiu'+index).append(new Option(actividades[index].acti_ciiu,value[0]));
                      $(this).chosen({ width: '100%' });
                  }).end();

                  $clone.find('[id="h_rel_decl_nombre_act"]').addClass('rel_decl_nombre_act').end();
                  $clone.find('[id="h_rel_decl_nombre_act"]').attr('id','rel_decl_nombre_act'+index).end();
                  $clone.find('[name="h_rel_decl_nombre_act"]').attr('name','rel_decl_nombre_act[' + index + ']').end();
                  $('#rel_decl_nombre_act'+index).val(actividades[index].acti_descripcion);

                  $clone.find('[id="h_rel_decl_base_rete"]').addClass('rel_decl_base_rete').end();
                  $clone.find('[id="h_rel_decl_base_rete"]').attr('id','rel_decl_base_rete'+index).end();
                  $clone.find('[name="h_rel_decl_base_rete"]').attr('name','rel_decl_base_rete[' + index + ']').end();
                  $('#rel_decl_base_rete'+index).val(actividades[index].rel_decl_base_retenido);
                  base += parseFloat(actividades[index].rel_decl_base_retenido);

                  $clone.find('[id="h_rel_decl_act_acti_tarifa"]').attr('id','rel_decl_act_acti_tarifa'+index).end();
                  $clone.find('[name="h_rel_decl_act_acti_tarifa"]').attr('name','rel_decl_act_acti_tarifa[' + index + ']').end();
                  $('#rel_decl_act_acti_tarifa'+index).val(actividades[index].rel_decl_act_acti_tarifa);

                  $clone.find('[id="h_rel_decl_act_acti_tarifa_vs"]').attr('id','rel_decl_act_acti_tarifa_vs'+index).end();
                  $clone.find('[name="h_rel_decl_act_acti_tarifa_vs"]').attr('name','rel_decl_act_acti_tarifa_vs[' + index + ']').end();
                  $('#rel_decl_act_acti_tarifa_vs'+index).val(actividades[index].rel_decl_act_acti_tarifa);

                  $clone.find('[id="h_rel_decl_act_tottal_rete"]').attr('id','rel_decl_act_tottal_rete'+index).end();
                  $clone.find('[name="h_rel_decl_act_tottal_rete"]').attr('name','rel_decl_act_tottal_rete[' + index + ']').end();
                  $('#rel_decl_act_tottal_rete'+index).val(actividades[index].rel_decl_total_retenido);
                  total += parseFloat(actividades[index].rel_decl_total_retenido);

                  $clone.find('[id="h_rel_decl_act_tottal_rete_vs"]').attr('id','rel_decl_act_tottal_rete_vs'+index).end();
                  $clone.find('[name="h_rel_decl_act_tottal_rete_vs"]').attr('name','rel_decl_act_tottal_rete_vs[' + index + ']').end();
                  $('#rel_decl_act_tottal_rete_vs'+index).val(actividades[index].rel_decl_total_retenido);
                  total += parseFloat(actividades[index].rel_decl_total_retenido);

                });
                $('#t_rel_decl_base_ica').val(base);
                $('#t_rel_decl_act_tottal_ica').val(total);
}
*/

function consultar_conceptos(d_conceptos)
{
  $.each(d_conceptos,function(index,value)
  {
    var $div_r = $('#impu_ico'),
        $clone = $div_r
       .clone()
       .removeClass('hide')
       .removeAttr('id')
       .addClass('renglones_vigencia')
       .attr('data-renglon-index',index)
       .insertBefore($div_r);

       $clone.find('[id="renglon"]').attr('id','renglon'+index).end();
       $clone.find('[name="renglon"]').attr('name','renglon[]').end();
       $clone.find('#renglon'+index).html(d_conceptos[index].conc_liqu_id).end();

       $clone.find('[id="des_renglon"]').attr('id','des_renglon'+index).end();
       $clone.find('[name="des_renglon"]').attr('name','des_renglon[]').end();
       $clone.find('#des_renglon'+index).html(d_conceptos[index].conc_liqu_nombre).end();

       $clone.find('[id="concepto_id"]').attr('id','t_concepto_id'+d_conceptos[index].conc_id).end();
       $clone.find('[name="concepto_id"]').attr('name','t_concepto_id['+d_conceptos[index].conc_id+']').end();
       $clone.find('#t_concepto_id'+d_conceptos[index].conc_id).attr('value',d_conceptos[index].conc_id).end();

       $clone.find('[id="t_industria_vd"]').attr('id','industria_vd'+d_conceptos[index].conc_id).end();
       $clone.find('[name="t_industria_vd"]').attr('name','industria_vd['+d_conceptos[index].conc_id+']').end();
       $('#industria_vd'+d_conceptos[index].conc_id).val(number_format(d_conceptos[index].liqu_conc_decl_valor_declarado,0));
       $clone.find('#industria_vd'+d_conceptos[index].conc_id).prop('readonly',true).end();

       if(d_conceptos[index].evento == "S")
       {
         if(d_conceptos[index].c_readonly == "S")
         {
           $clone.find('#industria_vd'+d_conceptos[index].conc_id).addClass('declarado').end();
           $clone.find('#industria_vd'+d_conceptos[index].conc_id).prop('readonly',true).end();
         }
         else {
           $clone.find('#industria_vd'+d_conceptos[index].conc_id).addClass('declarado').end();
           $clone.find('#industria_vd'+d_conceptos[index].conc_id).prop('readonly',false).end();
         }
       }else {
         if(d_conceptos[index].c_readonly == "S")
         {
           $clone.find('#industria_vd'+d_conceptos[index].conc_id).prop('readonly',true).end();
         }
       }

       $clone.find('[id="t_industria_vs"]').attr('id','industria_vs'+d_conceptos[index].conc_id).end();
       $clone.find('[name="t_industria_vs"]').attr('name','industria_vs['+d_conceptos[index].conc_id+']').end();
       $('#industria_vs'+d_conceptos[index].conc_id).val(number_format(d_conceptos[index].liqu_conc_decl_valor_sistema,0));
       $clone.find('#industria_vs'+d_conceptos[index].conc_id).prop('readonly',true).end();
  });
}

//Inicia proceso de adecuación para busqueda Vip Boton Nuevo
function NuevaVip(esta_id, cont_documento, filtro, iframe_vip)
{
    var url = "formulario.php?control=formulario&esta_id="+esta_id+"&cont_documento="+cont_documento+"&filtro="+filtro+"&iframe_vip="+iframe_vip;
    $('.modal-container').load(url,function(result)
    {
        $('#myModal').modal({show:true});
        $("#btn-guardar").addClass("clasnuevo");
        $("#btn-guardar").prop('disabled',true);
        $('#myModal').on('shown.bs.modal', function ()
        {
            $('.chosen-select', this).chosen();
        });

        $('.form_date').datetimepicker({
          language:  'es',
          format: 'yyyy-mm-dd',
          weekStart: 1,
          todayBtn:  1,
          autoclose: 1,
          todayHighlight: 1,
          startView: 2,
          minView: 2,
          forceParse: 0
        });

        $('[name ="decla_correccion"]').prop('disabled',true);
        $('#decl_basi_id').prop('disabled',true);

        $.getJSON("clase_rete_aico.php?control=periodos",function(data)//voy configurando el reteICa
        {
              $("#peri_id").empty();
              $('#peri_id').append(new Option('',0));
              $.each(data,function(index,value)
              {
                  $('#peri_id').append(new Option(value[2],value[0]));
              });
              $("#peri_id").trigger("chosen:updated");
        });

        $.getJSON("clase_rete_aico.php?control=vigencias", function( data )
        {
          $("#frm-declaraciones_aico  #vige_anio").append(new Option('',''));
          $.each(data, function( index, value )
          {
              $("#frm-declaraciones_aico #vige_anio").append(new Option(value[0], value[1]));
          });
          $("#frm-declaraciones_aico  #vige_anio").trigger("chosen:updated");
        });

        $.getJSON("clase_rete_aico.php?control=departamentos",function(data)
        {
              $('#depa_id_local').append(new Option('',''));
              $('#depa_id_notificacion').append(new Option('',''));
              $.each(data,function(index,value)
              {
                  $('#depa_id_local').append(new Option(value[1],value[0]));
                  $('#depa_id_notificacion').append(new Option(value[1],value[0]));
              });
        });

        // $.getJSON("clase_rete_aico.php?control=municipios",function(data)
        // {
        //       $('#muni_id_local').append(new Option('',''));
        //       $('#muni_id_notificacion').append(new Option('',''));
        //       $.each(data,function(index,value)
        //       {
        //           $('#muni_id_local').append(new Option(value[1],value[0]));
        //           $('#muni_id_notificacion  ').append(new Option(value[1],value[0]));
        //       });
        // });

        $.getJSON("clase_rete_aico.php?control=tipo_doc",function(data)
        {
              $('#tipo_documento_id').append(new Option('',''));
              $.each(data,function(index,value)
              {
                  $('#tipo_documento_id').append(new Option(value[1],value[0]));
              });
        });

        if(iframe_vip == 'vip')
        {
            $("#frm-declaraciones_aico #decl_basi_documento_cont").blur();
        }
    });
}
//Finaliza proceso de adecuación para busqueda Vip Boton Nuevo

//Inicia proceso de adecuación para busqueda Vip Boton Consultar
function ConsultarVip(esta_id, cont_documento, filtro, iframe_vip)
{
    var consulting;
    var url = "clase_rete_aico.php";
    var datos = "control=consultar_datos&filtro="+filtro+"&esta_id="+esta_id;
    consulting = peticion_ajax('POST',url,datos,false,'json',null);

    var url = "formulario.php?control=formulario&esta_id="+esta_id+"&cont_documento="+cont_documento+"&filtro="+filtro+"&iframe_vip="+iframe_vip;
    $('.modal-container').load(url,function(result)
    {
        $('#myModal').modal({show:true});
        $("#btn-guardar").addClass("clasedit");
        $('#myModal').on('shown.bs.modal', function () {
            $('.chosen-select', this).chosen();
        });
        $('.form_date').datetimepicker({
            language:  'es',
            format: 'yyyy-mm-dd',
            weekStart: 1,
            todayBtn:  1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0
        });

        $('[name ="decla_correccion"]').prop('disabled',true);
        $('#decl_basi_id').prop('disabled',true);
        $('#nom_repre').prop('disabled',true);
        $('#documento_repre').prop('disabled',true);
        $('#decl_basi_telefono').prop('disabled',true);
        $('#decl_basi_direc_establecimiento').prop('disabled',true);
        $('#decl_basi_direc_notificacion').prop('disabled',true);
        $('#decl_basi_telefono').prop('disabled',true);
        $('#decl_basi_email').prop('disabled',true);


        $.getJSON("clase_rete_aico.php?control=vigencias", function( data )
        {
            $.each(data, function( index, value )
            {
                $("#frm-declaraciones_aico #vige_anio").append(new Option(value[0], value[1]));
            });
            $("#frm-declaraciones_aico  #vige_anio").trigger("chosen:updated");
        }).always(function(){
            setTimeout(function(){

            $('#vige_anio').val(consulting.info[0].vige_anio);
            $("#vige_anio").attr('disabled', true).trigger("liszt:updated");
            $('#vige_anio').trigger("chosen:updated");
            $('#frm-declaraciones_aico  #vige_anio').chosen(); }, 500);
        }).always(function()
        {
            setTimeout(function(){
            var vigencia_renglones1 = consulting.info[0].vige_anio;

            $.getJSON("clase_rete_aico.php?control=actividades&filtro="+vigencia_renglones1,function(data)
            {
                $('#h_acti_ciiu').empty();
                $('#h_acti_ciiu').append(new Option('',''));
                $.each(data,function(index,value)
                {
                    $('#h_acti_ciiu').append(new Option(value[0],value[0]));
                });
                $('#h_acti_ciiu').trigger("chosen:updated");
            });},600);
        });

        $.getJSON("clase_rete_aico.php?control=periodos&vigencia="+consulting.info[0].vige_anio,function(data)
        {
              $("#peri_id").empty();
              $('#peri_id').append(new Option('',0));
              $.each(data,function(index,value)
              {
                  $('#peri_id').append(new Option(value[3],value[0]));
              });
              $("#peri_id").trigger("chosen:updated");
        }).always(function (){
            setTimeout(function()
              {
                $('#peri_id').val(consulting.info[0].peri_id);
                $("#peri_id").attr('disabled', true).trigger("liszt:updated");
                $('#peri_id').trigger("chosen:updated");
              },500

            );
          }
        );

        $.getJSON("clase_rete_aico.php?control=departamentos",function(data)
        {
            $('#depa_id_local').append(new Option('',''));
            $('#depa_id_notificacion').append(new Option('',''));
            $.each(data,function(index,value)
            {
                $('#depa_id_local').append(new Option(value[1],value[0]));
                $('#depa_id_notificacion').append(new Option(value[1],value[0]));
            });
        }).always(function(){
            setTimeout(function()
            {
               $('#depa_id_local').val(consulting.info[0].depa_id_esta);
               $("#depa_id_local").attr('disabled', true).trigger("liszt:updated");
               $('#depa_id_local').trigger("chosen:updated");

               $('#depa_id_notificacion').val(consulting.info[0].depa_id_notificacion);
               $("#depa_id_notificacion").attr('disabled', true).trigger("liszt:updated");
               $('#depa_id_notificacion').trigger("chosen:updated");
            }, 500);
        });

        $.getJSON("clase_rete_aico.php?control=municipios&filtro="+consulting.info[0].depa_id_esta,function(data)
        {
            $('#muni_id_local').append(new Option('',''));
            $('#muni_id_notificacion').append(new Option('',''));
            $.each(data,function(index,value)
            {
                $('#muni_id_local').append(new Option(value[1],value[0]));
                $('#muni_id_notificacion  ').append(new Option(value[1],value[0]));
            });
        }).always(function(){
            setTimeout(function()
            {
               $('#muni_id_local').val(consulting.info[0].muni_id_esta);
               $("#muni_id_local").attr('disabled', true).trigger("liszt:updated");
               $('#muni_id_local').trigger("chosen:updated");

               $('#muni_id_notificacion').val(consulting.info[0].muni_id_notificacion);
               $("#muni_id_notificacion").attr('disabled', true).trigger("liszt:updated");
               $('#muni_id_notificacion').trigger("chosen:updated");
             }, 500);
        });

        $.getJSON("clase_rete_aico.php?control=tipo_doc",function(data)
        {
            $('#tipo_documento_id').append(new Option('',''));
            $.each(data,function(index,value)
            {
                $('#tipo_documento_id').append(new Option(value[1],value[0]));
            });
        }).always(function ()
        {
            consultar_declaracion(consulting.info[0],consulting.representante[0]);
            consultar_actividades(consulting.actividades);
            consultar_conceptos(consulting.conceptos);
        });

        if(iframe_vip == 'vip')
        {
            $("#btn-guardar").remove();
        }
    });
}
//Finaliza proceso de adecuación para busqueda Vip Boton Consultar

//Inicia proceso de adecuación para busqueda Vip Boton Editar
function EditarVip(esta_id, cont_documento, filtro, iframe_vip)
{
    if(iframe_vip == 'vip')
    {
        // $("#btn-radicado").remove();
    }
    var consulting;
    var url = "clase_rete_aico.php";
    var datos = "control=consultar_datos&filtro="+filtro+"&esta_id="+esta_id;
    consulting = peticion_ajax('POST',url,datos,false,'json',null);

    var url = "formulario.php?control=formulario&esta_id="+esta_id+"&cont_documento="+cont_documento+"&filtro="+filtro+"&iframe_vip="+iframe_vip;
    $('.modal-container').load(url,function(result)
    {
        $('#myModal').modal({show:true});
        $("#btn-guardar").addClass("clasedit");
        $('#myModal').on('shown.bs.modal', function () {
        $('.chosen-select', this).chosen();
        });
        $('.form_date').datetimepicker({
            language:  'es',
            format: 'yyyy-mm-dd',
            weekStart: 1,
            todayBtn:  1,
            pickerPosition: 'top-left',
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0
        });

        $('[name ="decla_correccion"]').prop('disabled',true);
        $('#decl_basi_id').prop('disabled',true);
        $('#decl_basi_placa').prop('disabled',true);
        $('#decl_basi_documento_cont').prop('disabled',true);

        var url = "clase_rete_aico.php";
        var datos_vigenci_limite = "control=fecha_presentacion&vigencia_limite="+consulting.info[0].vige_anio+"&periodo="+consulting.info[0].peri_id;
        var limit_present = peticion_ajax('POST',url,datos_vigenci_limite,false,'json',null);
        $('#fecha_limi').val(limit_present[0].fecha_limite_decl);
        /************************* inicia seccion de combox  ****************************************/
        $.getJSON("clase_rete_aico.php?control=vigencias", function( data )
        {
            $.each(data, function( index, value )
            {
                $("#frm-declaraciones_aico #vige_anio").append(new Option(value[0], value[1]));
            });
            $("#frm-declaraciones_aico  #vige_anio").trigger("chosen:updated");
        }).always(function(){
            setTimeout(function(){
            $('#vige_anio').val(consulting.info[0].vige_anio);
            $("#vige_anio").attr('disabled', true).trigger("liszt:updated");
            $('#vige_anio').trigger("chosen:updated");
            $('#frm-declaraciones_aico  #vige_anio').chosen(); }, 500);
        });

        $.getJSON("clase_rete_aico.php?control=periodos&vigencia="+consulting.info[0].vige_anio,function(data)
        {
              $("#peri_id").empty();
              $('#peri_id').append(new Option('',0));
              $.each(data,function(index,value)
              {
                  $('#peri_id').append(new Option(value[3],value[0]));
              });
              $("#peri_id").trigger("chosen:updated");
        }).always(function (){
            setTimeout(function()
              {
                $('#peri_id').val(consulting.info[0].peri_id);
                $("#peri_id").attr('disabled', true).trigger("liszt:updated");
                $('#peri_id').trigger("chosen:updated");
              },500
            );
          }
        );

        $.getJSON("clase_rete_aico.php?control=departamentos",function(data)
        {
            $('#depa_id_local').append(new Option('',''));
            $('#depa_id_notificacion').append(new Option('',''));
            $.each(data,function(index,value)
            {
                $('#depa_id_local').append(new Option(value[1],value[0]));
                $('#depa_id_notificacion').append(new Option(value[1],value[0]));
            });
        }).always(function(){
            setTimeout(function()
            {
               $('#depa_id_local').val(consulting.info[0].depa_id_esta);
               $('#depa_id_local').trigger("chosen:updated");

               $('#depa_id_notificacion').val(consulting.info[0].depa_id_notificacion);
               $('#depa_id_notificacion').trigger("chosen:updated");
            }, 500);
        });

        $.getJSON("clase_rete_aico.php?control=municipios&filtro="+consulting.info[0].depa_id_esta,function(data)
        {
            $('#muni_id_local').append(new Option('',''));
            $('#muni_id_notificacion').append(new Option('',''));
            $.each(data,function(index,value)
            {
                $('#muni_id_local').append(new Option(value[1],value[0]));
                $('#muni_id_notificacion  ').append(new Option(value[1],value[0]));
            });
        }).always(function(){
            setTimeout(function()
            {
               $('#muni_id_local').val(consulting.info[0].muni_id_esta);
               $('#muni_id_local').trigger("chosen:updated");

               $('#muni_id_notificacion').val(consulting.info[0].muni_id_notificacion);
               $('#muni_id_notificacion').trigger("chosen:updated");
             }, 500);
        });

        var vigencia_renglones1 = consulting.info[0].vige_anio;
        $.getJSON("clase_rete_aico.php?control=actividades&filtro="+vigencia_renglones1,function(data)
        {
            $.each(data,function(index,value)
            {
                $('#h_acti_ciiu').append(new Option(value[0],value[0]));
            });
            $('#h_acti_ciiu').trigger("chosen:updated");
        });

        $.getJSON("clase_rete_aico.php?control=tipo_doc",function(data)
        {
            $('#tipo_documento_id').append(new Option('',''));
            $.each(data,function(index,value)
            {
                $('#tipo_documento_id').append(new Option(value[1],value[0]));
            });
        }).always(function ()
        {
            consultar_declaracion(consulting.info[0],consulting.representante[0]);
            editar_actividades(consulting.actividades);
            consultar_conceptos(consulting.conceptos);
        });
        /************************* finaliza seccion de combox  ****************************************/
    });
}
//Finaliza proceso de adecuación para busqueda Vip Boton Editar


// Validacion de cajas manual
function validar_obligatorios(full)
{
  /**************************** valido periodo de la declaracion************************/
  var campo = "";
  if ($("#peri_id").val() == 0){ campo = "Periodo"+"<br>";}
  if (!$("#decl_basi_placa").val()){  campo += "Placa"+"<br>"; }
  if (!$("#decl_basi_documento_cont").val()){  campo += "NIT"+"<br>";}
  if (!$("#razon_social").val()){ campo += "Razon Social"+"<br>"; }
  if (!$("#nom_repre").val()){ campo += "Nombre Representante"+"<br>";}
  if (!$("#documento_repre").val()){  campo += "Documento Representante"+"<br>";  }
  if (!$("#decl_basi_direc_establecimiento").val()){ campo +="Direccion  Establecimiento"+"<br>";}
  if ($("#depa_id_local").val() == ""){  campo += "Depatamento  Establecimiento"+"<br>";}
  if ($("#muni_id_local").val() == ""){  campo += "Municipio  Establecimiento"+"<br>";}
  if (!$("#decl_basi_direc_notificacion").val()){  campo += "Direccion  Notificacion"+"<br>";}
  if ($("#depa_id_notificacion").val() == ""){  campo += "Depatamento  Notificacion"+"<br>";}
  if ($("#muni_id_notificacion").val() == ""){  campo += "Municipio  Notificacion";}

  if (campo != "") {  full = campo;  }else { full;  }

  return full;
}

$(document).on("click",".btn-ok-campos",function()
{
  var elemento = $("#campo_objeto").val();
  if($(this).val() == "No")
  {

    $("#"+elemento).css("background-color","#f0a0a0");
    campos_v = campos_v+","+$("#campo_objeto").val();
  }else {
    $("#"+elemento).css("background-color","#a5f79b");
  }
});

$(document).on('keyup','#nom_repre',function(event)
{
  var k = event.keyCode;
  if (k == 13 && $('#nom_repre').val())
  {
      $("#decl_basi_placa").prop("disabled",false);
      $("#myModal_e").remove();
      $("#nom_repre").css("background-color","#95ccf7");
      $("#documento_repre").css("background-color","#f0a0a0");
      var datos_update = "control=actulizar_representante&"+$('#frm-declaraciones_aico').serialize();
      var update_url = "clase_rete_aico.php";
      peticion_ajax('POST',update_url,datos_update,false,'',null);
      $("#decl_basi_placa").prop("disabled",true);
      // var url = "formulario.php?control=05&mensaje="+encodeURI("Verifique si el documento del Representante es mismo de la declaracion !")+"&campo=documento_repre";
      // $('.modal-modal-container2').load(url,function(result)
      // {
      //    $('#myModal_e').modal({show:true});
      // });
  }
});

$(document).on('keyup','#documento_repre',function(event)
{
  var k =  event.keyCode;
  if (k == 13 && $('#documento_repre').val())
  {
    $("#decl_basi_placa").prop("disabled",false);
    $("#myModal_e").remove();
    $("#nom_repre").css("background-color","#95ccf7");
    $("#documento_repre").css("background-color","#95ccf7");
    var datos_update = "control=actulizar_representante&"+$('#frm-declaraciones_aico').serialize();
    var update_url = "clase_rete_aico.php";
    peticion_ajax('POST',update_url,datos_update,false,'',null);
    $("#decl_basi_placa").prop("disabled",true);
    var url = "formulario.php?control=05&mensaje="+encodeURI("Verifique si la Dir. notificacion del Representante es la mismo de declaracion !")+"&campo=decl_basi_direc_notificacion";
    $('.modal-modal-container3').load(url,function(result)
    {
       $('#myModal_e').modal({show:true});
    });
  }
});

$(document).on('keyup','#decl_basi_direc_notificacion',function(event)
{
  var k =  event.keyCode;
  if (k == 13 && $('#decl_basi_direc_notificacion').val())
  {
    $("#decl_basi_placa").prop("disabled",false);
    $("#myModal_e").remove();
    $("#decl_basi_direc_notificacion").css("background-color","#95ccf7");
    var datos_update = "control=actulizar_representante&"+$('#frm-declaraciones_aico').serialize();
    var update_url = "clase_rete_aico.php";
    peticion_ajax('POST',update_url,datos_update,false,'',null);
    $("#decl_basi_placa").prop("disabled",true);
    var url = "formulario.php?control=05&mensaje="+encodeURI("Verifique si el correo electronico del Representante es la mismo de declaracion !")+"&campo=decl_basi_email";
    $('.modal-modal-container4').load(url,function(result)
    {
       $('#myModal_e').modal({show:true});
    });
  }
});

$(document).on('keyup','#decl_basi_email',function(event)
{
  var k =  event.keyCode;
  if (k == 13 && $('#decl_basi_email').val())
  {
    $("#decl_basi_placa").prop("disabled",false);
    $("#myModal_e").remove();
    $("#decl_basi_email").css("background-color","#95ccf7");
    var datos_update = "control=actulizar_representante&"+$('#frm-declaraciones_aico').serialize();
    var update_url = "clase_rete_aico.php";
    peticion_ajax('POST',update_url,datos_update,false,'',null);
    $("#decl_basi_placa").prop("disabled",true);
  }
});

$(document).on('keyup','#decl_basi_telefono',function(event)
{
  var k =  event.keyCode;
  if (k == 13 && $('#decl_basi_telefono').val())
  {
    $("#decl_basi_placa").prop("disabled",false);
    $("#decl_basi_telefono").css("background-color"," #95ccf7 ");
    var datos_update = "control=actulizar_representante&"+$('#frm-declaraciones_aico').serialize();
    var update_url = "clase_rete_aico.php";
    peticion_ajax('POST',update_url,datos_update,false,'',null);
    $("#decl_basi_placa").prop("disabled",true);
  }
});

$(document).on('keyup','#decl_basi_direc_establecimiento',function(event)
{
  var k =  event.keyCode;
  if (k == 13 && $('#decl_basi_direc_establecimiento').val())
  {
    $("#decl_basi_placa").prop("disabled",false);
    $("#decl_basi_direc_establecimiento").css("background-color"," #95ccf7 ");
    var datos_update = "control=actulizar_representante&"+$('#frm-declaraciones_aico').serialize();
    var update_url = "clase_rete_aico.php";
    peticion_ajax('POST',update_url,datos_update,false,'',null);
    $("#decl_basi_placa").prop("disabled",true);
  }
});
