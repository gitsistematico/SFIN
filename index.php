<?php
include_once ('conexion/conexion.php');
// include_once ('funciones.php');
extract($_REQUEST);
extract($_SESSION);
global $bd, $functions;

$menus = "select * from menu";
$reg_menus = $bd->consultar($menus);

?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    	<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>SFIN</title>
		<link rel="stylesheet" href="main.css">
		<link rel="stylesheet" href="fonts.css">
		<link rel="stylesheet" href="../dashboarboot/plugins/bootstrap-3.3.7/css/bootstrap.css">
		<script src="../dashboarboot/plugins/jquery-3.1.1.min.js"></script>
		<style>
			.ad {
				position: absolute;
				width: 300px;
				height: 250px;
				border: 1px solid #ddd;
				left: 50%;
				transform: translateX(-50%);
				top: 250px;
				z-index: 10;
			}
			.ad .close {
				position: absolute;
				font-family: 'ionicons';
				width: 20px;
				height: 20px;
				color: #fff;
				background-color: #999;
				font-size: 20px;
				left: -20px;
				top: -1px;
				display: table-cell;
				vertical-align: middle;
				cursor: pointer;
				text-align: center;
			}
		</style>
		<!--<script type="text/javascript">
			$(function() {
				$('.close').click(function() {
					$('.ad').css('display', 'none');
				})
			})
		</script>-->

	</head>
	<body>
		<div class="header">
			<div class="logo">
				<i class="fa fa-tachometer"></i>
				<span>SFIN</span>
			</div>
			<a href="#" class="nav-trigger"><span></span></a>
		</div>
		<div class="side-nav">
			<div class="logo">
				<i class="fa fa-tachometer"></i>
				<span>SFIN</span>
			</div>
			<nav>
				<ul>
<?php
foreach ($reg_menus as $key => $value)
{
?>
					<li>
						<a href="#">

							<span class="icon-home3">&nbsp;
								<?php echo $reg_menus[$key][1]; ?>
							</span>
							<?php
							$menu = $reg_menus[$key][0];
							$modulos = "SELECT * "
											 . "FROM formularios f "
											 . "WHERE f.menu_id = '$menu'";
											 $modulos =  $bd->consultar($modulos);
							?>
									<ul>
										<<?php
										foreach ($modulos as $key => $value)
										{
										 ?>
										<li id=<?php echo $menu."-".$modulos[$key][0];?> class="form_menu">
											<a href="#"><?php echo $modulos[$key][1]; ?></a>
										</li>
										<!-- <li><a href="#">Entradas</a></li>
										<li><a href="#">Salidas</a></li> -->
										<?php
										 }
										 ?>
									</ul>

						</a>
					</li>
<?php
}
?>
					<!--
					<li>
						<a href="#">


							<span class="icon-mail3">&nbsp;Facturacion</span>
						</a>
					</li>
					<li class="active">
						<a href="#">

							<span class="icon-earth">&nbsp;Reportes </span>
						</a>
					</li>
					<li>
						<a href="#">

							<span class="icon-rocket">&nbsp;Payments</span>
						</a>
					</li> -->
				</ul>
			</nav>
		</div>
		<div class="main-content">
			<div class="title" style="text-align:center;">
				Sistema de Facturación, Inventario y Nomina.
			</div>
			<!-- <div class="main">-->
				<div class="container">
					<div class="form-group" style="margin-left:-15px !important;">
							<div class="panel with-nav-tabs panel-default">
								<div class="panel-heading" id="p_heading">
									 <ul class="nav nav-tabs" role="tablist" id="table_lis">

										 <!-- <li role="presentation" class="hide">
											 <a id="oculto" href="" aria-controls="" role=""
											 data-toggle=""></a>
										 </li> -->

										 <!-- <li role="presentation" class="active">
											 <a href="#producto" aria-controls="producto" role="tab"
											 data-toggle="tab">Productos</a>
										 </li>

										 <li role="presentation" class="">
											 <a href="#entrada" aria-controls="entrada" role="tab"
											 data-toggle="tab">Entradas</a>
										 </li>

										 <li role="presentation">
											 <a href="#salida" aria-controls="salida" role="tab"
											 data-toggle="tab">Salidas</a>
										 </li> -->
									 </ul>
								</div>

								<div class="panel-body">
								<div class="tab-content" id="tab_content_panel">
									<!-- <div role="tabpanel" class="tab-pane active" id="producto">
										<div class="container" style="width:100%;">
											<label>producto</label>
										</div>
									</div>
									<div role="tabpanel" class="tab-pane" id="entrada">
										<div class="container" style="width:100%;">
											<label>entrada</label>
										</div>
									</div>
									<div role="tabpanel" class="tab-pane" id="salida">
										<div class="container" style="width:100%;">
											<label>salida</label>
										</div>
									</div> -->
								</div>
							  </div>
							</div>
				</div>
			</div>
		</div>
	</body>
<footer>
	<script src="../dashboarboot/plugins/bootstrap-3.3.7/js/jquery.js"></script>
	<script src="../dashboarboot/plugins/bootstrap-3.3.7/js/bootstrap.js"></script>
	<script src="main.js"></script>
	<script src="ajax.js"></script>
</footer>
</html>
