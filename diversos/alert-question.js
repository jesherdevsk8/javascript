// alert question com jquery e izitoast alert https://izitoast.marcelodolza.com/

// botão
<p><%= link_to gestao_polo_relatorio_polo_path(@polo, format: :pdf), target: '_blank', class: 'btn btn-sm btn-primary', id: 'a_relato' do %><i class="fa fa-print"></i> Dados sobre o Polo (Completo)<% end %></p>


<script>

  $('#a_relato').on('click', function(e){
      e.preventDefault();
      iziToast.question({
      resetOnHover: true,
      transitionIn: 'flipInX',
      transitionOut: 'flipOutX',
      timeout: 8000,
      zindex: 999,
      icon: 'fa fa-file-pdf-o',
      title: 'Olá',
      message: 'Qual versão você deseja?',
      position: 'topCenter',
      progressBarColor: '#1E90FF',
      buttons: [
          ['<button><strong>Com Relato Global</strong></button>', function (instance, toast) {
  
              window.open("<%= gestao_polo_relatorio_polo_path(@polo, format: :pdf) %>");
  
          }, true],
          ['<button><strong>Sem Relato Global</strong></button>', function (instance, toast) {
  
              window.open("<%= gestao_polo_relatorio_polo_path(@polo, relato: true, format: :pdf) %>");  
  
          }],
      ],
      onClosing: function(instance, toast, closedBy){
          console.info('Closing | closedBy: ' + closedBy);
      },
      onClosed: function(instance, toast, closedBy){
          console.info('Closed | closedBy: ' + closedBy);
      }
    });
  });

</script>
