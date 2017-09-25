<?php
include_once ('conexion/conexion.php');
// include_once ('funciones.php');
extract($_REQUEST);
extract($_SESSION);
global $bd, $functions;

function getModulo($bd,$menu,$modulo)
{
  $select_modulo =  "SELECT form_codigo,form_nombre,form_ruta,menu_id,form_visible,form_contenedor,form_relacion  "
                 .  "FROM formularios f "
                 .  "WHERE f.menu_id = '$menu' AND f.form_codigo = '$modulo'";
                 $select_modulo = $bd->consultar($select_modulo);
  // $formulario_datos = array();
  // $formodulo = array();
  // foreach ($select_modulo as $key)
  // {
  //   array_push($formodulo,$select_modulo);
  // }
  echo json_encode($select_modulo);
}

switch ($control)
{

  case 'form_modulo':
      getModulo($bd,@$menu,@$modulo);
    break;
}
?>
