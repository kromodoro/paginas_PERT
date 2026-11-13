# paginas_PERT
[DIGITALIZAÇÃO][LIVRO] Uma introdução programada ao PERT : avaliação de programa e técnica de revisão

LINK: https://kromodoro.github.io/paginas_PERT/

<hr>

## Estrutura

```
/
├── index.html            # capa
├── folha_01..04.html     # folhas de rosto
├── objetivos*.html       # objetivos
├── prefacio_*.html       # prefácios (pt/en)
├── agradecimentos.html
├── paginas/              # 001.html .. 148.html
├── img/                  # imagens digitalizadas
└── assets/
    ├── css/style.css     # estilos compartilhados por todas as páginas
    └── js/theme.js       # dark mode (cookie) + config do Tailwind
```

Todas as páginas usam o mesmo `<head>`:

```html
<script src="https://cdn.tailwindcss.com"></script>
<script src="assets/js/theme.js"></script>       <!-- ../assets/... nas páginas de paginas/ -->
<link rel="stylesheet" href="assets/css/style.css">
```

- **Classe de texto/link:** `link-answer` (links azuis sublinhados dentro do texto) e `indent-1`
  (recuo de 40px) substituem os antigos `style="..."` repetidos.
- **Listas:** o reset do Tailwind remove marcadores; `style.css` devolve `1.` / `a.` / `•`
  dentro de `.content-card`.
- **Tabelas do livro:** `pert-data` (tabelas em `<table>`) e `pert-table` (blocos alinhados em
  fonte monoespaçada) reproduzem as tabelas da edição impressa.
- **Tema:** `theme.js` aplica o tema salvo no cookie `darkMode` antes da renderização e liga o
  botão `#darkModeToggle`.
- **Legado:** `style.css` mantém regras mínimas para classes herdadas do Bootstrap
  (`img-fluid`, `d-block`, `table-bordered`, `fw-bold`, `text-decoration-underline`, `bg-dark`),
  que não existem no Tailwind.

<hr>

https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msub

```
(<math>
    <msub>
        <mi>T</mi>
        <mn>L</mn>
    </msub>
</math>).

(<math>
    <msub>
        <mi>T</mi>
        <mn>e</mn>
    </msub>
</math>).

(<math>
    <msub>
        <mi>t</mi>
        <mn>e</mn>
    </msub>
</math>).
```



https://imasters.com.br/desenvolvimento/bash-for-loop-primeiro-passo-na-automacao-no-linux
```
{
    for counter in $(seq 3 9); do cat 002.html > "00${counter}.html"; done
    for counter in $(seq 10 99); do cat 002.html > "0${counter}.html"; done
    for counter in $(seq 100 148); do cat 002.html > "${counter}.html"; done
}
```

```
for ($i = 2; $i <= 148;$i++) {
	$valor = str_pad($i, 3, 0, STR_PAD_LEFT);
    $aux = $valor;
    $min = $aux - 1;
    $max = $aux + 1;
	echo "sed -i 's/001.html/" . str_pad($min, 3, 0, STR_PAD_LEFT) .".html/' {$valor}.html<br>";
	echo "sed -i 's/002.html/" . str_pad($max, 3, 0, STR_PAD_LEFT) .".html/' {$valor}.html<br>";
    echo "sed -i 's/qwerty/{$i}/' {$valor}.html<br>";
    echo "<br>";
}
?>
```

55 imagens


<img src="../img/img01.png" class="img-fluid mx-auto d-block">

<div>
    <ol type="a">
        <li>Sim ................................................ <a href="002.html"><i>Veja página 2</i></a></li>
        <li>Não ............................................... <a href="003.html"><i>Veja página 3</i></a></li>
        <li>Eu Não sei .................................. <a href="004.html"><i>Veja página 4</i></a></li>
    </ol>
</div>



<a href="001.html"><i>Volte para a página 1 e escolha outra resposta.</i></a>