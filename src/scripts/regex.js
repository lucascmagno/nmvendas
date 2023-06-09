function divSelect(input) {
  var inputSelect= (document.activeElement === input);
  var div = input.parentNode;
  
  if (inputSelect) {
    div.classList.add('selected');
  } else {
    div.classList.remove('selected');
  }
}


function formatarValor() {
  var display = document.querySelector("#valor-vende");
  var ValorCobrar = document.querySelector("#valor-cobrar");
  var valor = ValorCobrar.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  
  // Remover zeros à esquerda
  valor = valor.replace(/^0+/, '');
  
  // Adicionar ponto a cada três dígitos da parte inteira
  var parteInteira = valor.slice(0, -2);
  var parteDecimal = valor.slice(-2);
  parteInteira = parteInteira.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
  // Adicionar vírgula antes dos dois últimos dígitos
  if (parteInteira.length <= 0) {
    parteInteira = '0';
    ValorCobrar.value = '0,00';
    display.innerHTML = '0,00';
  }
  
  var valorFormatado = parteInteira + ',' + parteDecimal;

  if (parteInteira != '0'){
      display.innerHTML = valorFormatado;
  }
  
  // Atualizar o valor no input formatado
  ValorCobrar.value = valorFormatado;
}


