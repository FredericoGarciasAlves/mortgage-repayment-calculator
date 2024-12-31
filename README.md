# Frontend Mentor - Mortgage repayment calculator solution

Isso é uma solução de [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges ajuda você a criar projetos realistas e a melhorar as suas habilidades.

## Indice

-   [Visão geral](#visão-geral)
    -   [O desafio](#O-desafio)
    -   [Links](#links)
-   [Meu processo](#Meu-processo)
    -   [O que eu aprendi](#O-que-eu-aprendi)
-   [Autor](#Autor)

## Visão geral

Esse é um projeto sobre calculadora de imposto aonde calcula-se somente o imposto e o reembolso

### O desafio

Os usuários devem ser capazes de:

-   Inserir informações sobre a hipoteca e visualizar os valores da parcela mensal e do total a ser pago após enviar o formulário.
-   Ver mensagens de validação do formulário caso algum campo esteja incompleto.
-   Preencher o formulário utilizando apenas o teclado.
-   Visualizar o layout ideal da interface, dependendo do tamanho da tela do dispositivo.
-   Ver os estados de hover e foco em todos os elementos interativos da página.

### Links

-   Solution URL: [GitHub solução](https://github.com/FredericoGarciasAlves/mortgage-repayment-calculator)
-   Live Site URL: [Site na web](https://fredericogarciasalves.github.io/mortgage-repayment-calculator/)

## Meu processo

Fiz pelo figma, de começo identifiquei que era um formulario estava fazendo em outro lugar do abitual então foi diferente o processo do que normalmente é tive um pouco de dificulddes em nomear as tags e como iria fazer os calculos, mas resolvi rapidamente, identifiquei que era uma calculadora de imposto e apartir disso que ciomecei o projeto as box do html e css foi padrão usei flexbox para resolver e não mudava de posição do responsivo para o desktop as animações foi facil de resolver e o responsivo também, estou optando fazer com as medidas literal do figma não estou optando por fazer responsivamente apartir do que eu acho que tem de tamanho de tela, acho que isso vai ficar responsavel por pelo pessoal do design saber o tamanho de tela que sera em cada dispositivo, e se for free lancer? agora me pegou acho que vou começar a fazer os tamanho de tela que mais tem, no mercado.

### O que eu aprendi

Esse botão clear tem que limpar os inputs mortgage amount, mortgage term, interestrate e desmarcar rrepayment e interest only e tirar o texto do botão de calcular, se tiver aparecendo em outra cor que não seja a padrão que esta na página principal do style.css voltar para a cor padrão

```js
// Esse botão clear tem que limpar os inputs mortgage amount, mortgage term, interestrate e desmarcar rrepayment e interest only e tirar o texto do botão de calcular, se tiver aparecendo em outra cor que não seja a padrão que esta na página principal do style.css voltar para a cor padrão

btnClear[0].addEventListener("click", () => {
    amount.value = "";
    term.value = "";
    rate.value = "";
    repayment.checked = false;
    intOnly.checked = false;
    spanBtn.textContent = "";
    boxShowResult.style.display = "flex";
    boxYourResult.style.display = "none";
    boxRadio[1].style.backgroundColor = "#fff";
    boxRadio[1].style.border = "1px solid #ccc";
    boxRadio[0].style.backgroundColor = "#fff";
    boxRadio[0].style.border = "1px solid #ccc";
    libra.style.backgroundColor = "#e4f4fd";
    libraInput.style.border = "1px solid #4e6e7e";
    libra.style.height = "47px";
    years.style.backgroundColor = "#e4f4fd";
    yearsInput.style.border = "1px solid #4e6e7e";
    years.style.right = "1px";
    percentagem.style.backgroundColor = "#e4f4fd";
    percentagemInput.style.border = "1px solid #4e6e7e";
    percentagem.style.right = "1px";
    textFieldRequeridAmount.remove();
    textFieldRequeridBoxRadio.remove();
    textFieldRequeridRate.remove();
    textFieldRequeridTerm.remove();
});

//adicione eventos de mudanças nas caixas de repayment e interest only para mudar a cor do button radio e a cor do fundo da caixa

repayment.addEventListener("change", () => {
    boxRadio[0].style.backgroundColor = "#e2e3ab";
    boxRadio[0].style.border = "1px solid #d8db2f";
    boxRadio[1].style.backgroundColor = "#fff";
    boxRadio[1].style.border = "1px solid #ccc";
    spanBtn.textContent = "Calculate Repayment";
    textFieldRequeridBoxRadio.remove();
});

intOnly.addEventListener("change", () => {
    boxRadio[1].style.backgroundColor = "#e2e3ab";
    boxRadio[1].style.border = "1px solid #d8db2f";
    spanBtn.textContent = "Calculate Interest Only";
    boxRadio[0].style.backgroundColor = "#fff";
    boxRadio[0].style.border = "1px solid #ccc";
    textFieldRequeridBoxRadio.remove();
});
//Adicione mudanças de cor para quando o input esta em foco, quando sair e estiver vazio, clicar no botão de calcular e estiver vazio, se for um NaN não calcular e aparecer a mensagem e quando estiver preenchido e voltar para a cor padrão

libraInput.addEventListener("focus", () => {
    libra.style.height = "4.8rem";
    libra.style.top = "1px";
    libra.style.backgroundColor = "#d8db2f";
    libraInput.style.border = "1px solid #d8db2f";
    textFieldRequeridAmount.remove();
});

libraInput.addEventListener("blur", () => {
    const amountValue = parseFloat(amount.value.replace(/,/g, ""));
    libra.style.height = "4.8rem";
    libra.style.backgroundColor = "#e4f4fd";
    libraInput.style.border = "1px solid #4e6e7e";
    if (!libraInput.value || isNaN(amountValue)) {
        libra.style.backgroundColor = "#d73328";
        libra.style.color = "#fff";
        libraInput.style.border = "1px solid #d73328";
        libra.style.top = "0px";
        libra.style.height = "5rem";
        textFieldRequeridAmount.setAttribute(
            "class",
            "text-field-requerid-amount"
        );
        boxMortgageAmount.insertAdjacentElement(
            "afterend",
            textFieldRequeridAmount
        );
    }
    if (!libraInput.value) {
        boxMortgageAmount.insertAdjacentElement(
            "afterend",
            textFieldRequeridAmount
        );
    }
});

if (!amount.value || isNaN(amounstReplace)) {
    textFieldRequeridAmount.setAttribute("class", "text-field-requerid-amount");
    boxMortgageAmount.insertAdjacentElement(
        "afterend",
        textFieldRequeridAmount
    );
    libra.style.backgroundColor = "#d73328";
    libra.style.color = "#fff";
    libraInput.style.border = "1px solid #d73328";
    libra.style.top = "0px";
    libra.style.height = "5rem";
}

//Se o campo estiver vazio adiciona uma mensagem abaixo

const amountReplace = parseFloat(amount.value.replace(",", "."));
if (!amount.value || isNaN(amountReplace)) {
    boxMortgageAmount.insertAdjacentElement(
        "afterend",
        textFieldRequeridAmount
    );
    libra.style.backgroundColor = "#d73328";
    libra.style.color = "#fff";
    libraInput.style.border = "1px solid #d73328";
    libra.style.top = "0px";
    libra.style.height = "5rem";
    console.log("esta disparando!");
}
```

```css
//precisei remover a cor padrão que vem do radio para poder colocar a cor de fundo e a cor do botão para amarelo
.main
    .container
    .box-mortgage-calculator
    .box-mortgage-type
    .box-radio
    .box-radio-input {
    border: 1px solid #4e6e7e;
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #ccc;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    transition: 0.3s ease;
}
```

## Autor

-   Frontend Mentor - [@FredericoGarciasAlves](https://www.frontendmentor.io/profile/FredericoGarciasAlves)
-   Instagram - [@fred_alves23](https://www.instagram.com/fred_alves23/)
-   Twitter - [@FredericoGa70](https://x.com/FredericoGA70)
-   Threads - [@fred_alves23](https://www.threads.net/@fred_alves23?hl=pt-br)
