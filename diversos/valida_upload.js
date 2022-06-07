// arquivo.zip comprimido - javascript com izitoast alert https://izitoast.marcelodolza.com/

<div class="col-md-6">
	<%= f.label :arquivo, "Arquivo do Lote" %>
	<%= f.file_field :arquivo, id: 'arquivo', class: 'form-control', accept: params[:colaborador].present? ? 'application/zip' : 'application/pdf,application/zip' %>
</div>"

<script>
  // Limita em 220Mb o tamanho do arquivo zip para upload
  var uploadField = document.getElementById("arquivo");

  uploadField.onchange = function() {
    if(this.files[0].size > 220000000){
      iziToast.warning({
        icon: 'fa fa-ban',
        title: 'Você tentou importar um arquivo maior que 220 mb!',
        position: 'topCenter',
        progressBarColor: '#1E90FF'
      });
      this.value = "";
    };
  };
  
</script>


// arquivo individual pdf/jpeg e etc....

<div class="col-10">
    <%= form.file_field :arquivo, class: 'arquivo-zip form-control-file', accept: 'application/pdf', required: true %>
</div>

<script>
 // Limita em 5Mb o tamanho do arquivo para upload
 var uploadField = document.querySelector(".arquivo-zip");

 uploadField.onchange = function() {
   if(this.files[0].size > 5000000){ //50000000 bytes
     iziToast.warning({
       icon: 'fa fa-ban',
       title: 'Você tentou importar um arquivo maior que 5 mb!',
       position: 'topCenter',
       progressBarColor: '#1E90FF'
     });
     this.value = "";
   };
 }; 
  
 </script>
