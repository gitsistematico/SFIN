<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <!-- <link rel="stylesheet" href="../dashboarboot/plugins/bootstrap-3.3.7/css/bootstrap.min.css"> -->
    <link rel="stylesheet" href="../dashboarboot/plugins/bootstrap-3.3.7/css/bootstrap.css">
    <link rel="stylesheet" href="../dashboarboot/plugins/bootstrap-3.3.7/css/tabs.css">
    <!-- <script src="../dashboarboot/plugins/bootstrap-3.3.7/js/bootstrap.min.js"></script> -->
  </head>
  <body>
    <div class="container">
      <div class="form-group">
          <div class="panel with-nav-tabs panel-default">
            <div class="panel-heading">
               <ul class="nav nav-tabs" role="tablist">
                 <li role="presentation" class="active">
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
                 </li>
               </ul>
            </div>

            <div class="panel-body">
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="producto">
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
  </footer>
</html>
