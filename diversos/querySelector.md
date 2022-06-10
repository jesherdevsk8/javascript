## Brincar com texto de um site usando o devtools em tempo de execução

```html
<div class='_evt'>
	<span class='mostrar-text'> Olá mundo!! </span>
</div>

```

```javascript

document.querySelector('.mostrar-text').innerText = 'Mudando o texto em tempo de execução pelo devtools';

```


