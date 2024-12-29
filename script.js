document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const amount = document.getElementById("libra-input");
    const boxMortgageAmount = document.getElementById("mortgage-amount");
    const term = document.getElementById("years-input");
    const boxYearsInput = document.getElementById("box-years-input")
    const rate = document.getElementById("percentagem-input");
    const boxPercentagemInput = document.getElementById("box-percentagem-input");
    const repayment = document.getElementById("repayment");
    const intOnly = document.getElementById("int-only");
    const boxMortgageType = document.getElementById("box-mortgage-type");
    const boxYourResultsText = document.querySelector(".box-your-results-text");
    const results = document.querySelector(".results");
    const boxYourResultsRepay = document.querySelector(".box-your-results-repay");
    const repay = document.querySelector(".repay");
    const boxYourResult = document.querySelector(".box-your-results");
    const boxShowResult = document.querySelector(".box-show-result");
    const libraInput = document.getElementById("libra-input");
    const libra = document.querySelector(".libra")
    const yearsInput = document.getElementById("years-input");
    const years = document.querySelector(".years");
    const percentagemInput = document.getElementById("percentagem-input");
    const percentagem = document.querySelector(".percentagem");
    const boxRadio = document.querySelectorAll(".box-radio");
    const spanBtn = document.getElementById("span-btn");
    const textFieldRequeridAmount = document.createElement("p");
    const textFieldRequeridTerm = document.createElement("p");
    const textFieldRequeridRate = document.createElement("p");
    const textFieldRequeridBoxRadio = document.createElement("p");

    textFieldRequeridAmount.textContent = "This field is required";
    textFieldRequeridTerm.textContent = "This field is requered";
    textFieldRequeridRate.textContent = "This field is requered";

    textFieldRequeridAmount.setAttribute("class", "text-field-requerid-amount");
    textFieldRequeridTerm.setAttribute("class", "text-field-requerid-term");
    textFieldRequeridRate.setAttribute("class", "text-field-requerid-rate");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        removeEmptyField();
        mortgageCalculator();
        emptyField();
        mortgageCalculatorToggleDisplay();
    })
    repayment.addEventListener("click", () => {
        boxRadio[0].style.backgroundColor = "#e2e3ab";
        boxRadio[0].style.border = "1px solid #d8db2f";
        spanBtn.textContent = "Calculate Repayment";
        textFieldRequeridBoxRadio.remove();
    })

    intOnly.addEventListener("click", () => {
        boxRadio[1].style.backgroundColor = "#e2e3ab";
        boxRadio[1].style.border = "1px solid #d8db2f";
        spanBtn.textContent = "Calculate Interest Only";
        textFieldRequeridBoxRadio.remove();

    })
    repayment.addEventListener("blur", () => {
        boxRadio[0].style.backgroundColor = "#fff";
        boxRadio[0].style.border = "1px solid #ccc";

    })

    intOnly.addEventListener("blur", () => {
        boxRadio[1].style.backgroundColor = "#fff";
        boxRadio[1].style.border = "1px solid #ccc";

    })

    libraInput.addEventListener("focus", () => {
        libra.style.height = "5rem";
        libra.style.left = "1px";
        libra.style.top = "0px";
        libra.style.backgroundColor = "#d8db2f";
        libraInput.style.border = "1px solid #d8db2f";
        textFieldRequeridAmount.remove();

    });

    libraInput.addEventListener("blur", () => {
        libra.style.height = "4.75rem";
        libra.style.left = "1px";
        libra.style.top = "1px";
        libra.style.backgroundColor = "#e4f4fd";
        libraInput.style.border = "1px solid #4e6e7e";
        if (!libraInput.value) {
            libra.style.backgroundColor = "#d73328";
            libra.style.color = "#fff";
            libraInput.style.border = "1px solid #d73328";
            libra.style.top = "0px";
            libra.style.height = "5rem";
        }
        if (!libraInput.value) {
            boxMortgageAmount.insertAdjacentElement("afterend", textFieldRequeridAmount);
        }
    });

    yearsInput.addEventListener("focus", () => {
        years.style.height = "4.8rem";
        years.style.right = "1px"
        years.style.top = "1px"
        years.style.backgroundColor = "#d8db2f";
        yearsInput.style.border = "1px solid #d8db2f";
        textFieldRequeridTerm.remove();

    });

    yearsInput.addEventListener("blur", () => {
        years.style.height = "4.8rem";
        years.style.right = "1px";
        years.style.top = "1px";
        years.style.backgroundColor = "#e4f4fd";
        yearsInput.style.border = "1px solid #4e6e7e";
        if (!yearsInput.value) {
            years.style.backgroundColor = "#d73328";
            years.style.color = "#fff";
            yearsInput.style.border = "1px solid #d73328"
            years.style.right = "0px"
        }
        if (!yearsInput.value) {
            boxYearsInput.insertAdjacentElement("afterend", textFieldRequeridTerm);
        }

    });
    percentagemInput.addEventListener("focus", () => {
        percentagem.style.height = "4.8rem";
        percentagem.style.right = "0px"
        percentagem.style.top = "1px"
        percentagem.style.backgroundColor = "#d8db2f";
        percentagemInput.style.border = "1px solid #d8db2f";
        textFieldRequeridRate.remove();
    });

    percentagemInput.addEventListener("blur", () => {
        percentagem.style.height = "4.75rem";
        percentagem.style.right = "1px";
        percentagem.style.top = "1.2px";
        percentagem.style.backgroundColor = "#e4f4fd";
        percentagemInput.style.border = "1px solid #4e6e7e";
        if (!percentagemInput.value) {
            percentagem.style.backgroundColor = "#d73328";
            percentagem.style.color = "#fff";
            percentagemInput.style.border = "1px solid #d73328"
            percentagem.style.right = "0px"
        }
        if (!percentagemInput.value) {
            boxPercentagemInput.insertAdjacentElement("afterend", textFieldRequeridRate);
        }

    });




    function mortgageCalculator() {
        const amountValue = amount.value.replace(",", ".");;
        const termValue = term.value.replace(",", ".");;
        const rateValue = rate.value.replace(",", ".");
        const monthlyRate = rateValue / 12 / 100;
        const totalMonths = termValue * 12;

        if (repayment.checked) {
            function formatNumber(input) {
                input = input.toString();
                let formatted = input.replace(".", ",");

                let commaIndex = formatted.indexOf(",");

                if (commaIndex + 4 < formatted.length) {
                    formatted = formatted.slice(0, commaIndex + 4) + "." + formatted.slice(commaIndex + 4);
                }

                let firstDotIndex = formatted.indexOf(".");

                if (firstDotIndex + 3 < formatted.length) {
                    formatted = formatted.slice(0, firstDotIndex + 3);
                }

                return formatted;
            }

            boxYourResultsText.textContent = `Your monthly repayments`
            const monthlyPayment = (amountValue * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
                (Math.pow(1 + monthlyRate, totalMonths) - 1);
            let resultPayment = formatNumber(monthlyPayment);
            results.textContent = `£${resultPayment}`;

            boxYourResultsRepay.textContent = `Total you'll repay over the term`
            const totalPayment = monthlyPayment * totalMonths;
            let resultTotalPayment = formatNumber(totalPayment);
            repay.textContent = `£${resultTotalPayment}`;
        }

        if (intOnly.checked) {
            const amountFloat = parseFloat(amountValue);
            const rateFloat = parseFloat(rateValue);

            function formatNumber(input) {
                input = input.toString();

                let formatted = input.replace(".", ",");

                let commaIndex = formatted.indexOf(",");

                if (commaIndex + 4 < formatted.length) {
                    formatted = formatted.slice(0, commaIndex + 4) + "." + formatted.slice(commaIndex + 4);
                }

                let firstDotIndex = formatted.indexOf(".");

                if (firstDotIndex + 3 < formatted.length) {
                    formatted = formatted.slice(0, firstDotIndex + 3);
                }

                return formatted;
            }

            boxYourResultsText.textContent = `Your monthly interest`;
            const monthlyInterest = (amountFloat * rateFloat) / 100 / 12;
            let resultInterest = formatNumber(monthlyInterest);
            results.textContent = `£${resultInterest}`;


            boxYourResultsRepay.textContent = `Total you'll repay over the term`;
            const totalInterestOnly = monthlyInterest * totalMonths;
            let resultTotalinterestOnly = formatNumber(totalInterestOnly);
            repay.textContent = `£${resultTotalinterestOnly}`;
        }

    }
    function emptyField() {
        if (!amount.value) {
            textFieldRequeridAmount.setAttribute("class", "text-field-requerid-amount");
            boxMortgageAmount.insertAdjacentElement("afterend", textFieldRequeridAmount);
            libra.style.backgroundColor = "#d73328";
            libra.style.color = "#fff";
            libraInput.style.border = "1px solid #d73328";
            libra.style.top = "0px";
            libra.style.height = "5rem";
        }
        if (!term.value) {
            boxYearsInput.insertAdjacentElement("afterend", textFieldRequeridTerm);
            years.style.backgroundColor = "#d73328";
            years.style.color = "#fff";
            yearsInput.style.border = "1px solid #d73328"
            years.style.right = "0px"
        }
        if (!rate.value) {

            boxPercentagemInput.insertAdjacentElement("afterend", textFieldRequeridRate);
            percentagem.style.backgroundColor = "#d73328";
            percentagem.style.color = "#fff";
            percentagemInput.style.border = "1px solid #d73328"
            percentagem.style.right = "0px"
        }
        if (!intOnly.checked && !repayment.checked) {
            textFieldRequeridBoxRadio.setAttribute("class", "text-field-requerid-box-radio");
            textFieldRequeridBoxRadio.textContent = "This field is requerid";
            boxMortgageType.insertAdjacentElement("afterend", textFieldRequeridBoxRadio);
        }
    }

    function removeEmptyField() {
        // textFieldRequeridAmount.forEach((text, index) => {
        //     textFieldRequeridAmount[index + 1].remove();
        //     textFieldRequeridTerm[index + 1].remove();
        //     textFieldRequeridRate[index + 1].remove();
        //     textFieldRequeridBoxRadio[index + 1].remove();

        // })
    }

    function mortgageCalculatorToggleDisplay() {
        if (!isNaN(amount.value) && !isNaN(rate.value) && !isNaN(term.value) && !isNaN(intOnly.value) && !isNaN(intOnly.value) && !isNaN(repayment.value)) {
            if (amount.value || rate.value || term.value || intOnly.value || repayment.value) {
                boxShowResult.style.display = "none";
                boxYourResult.style.display = "block";
            }
        }
    }
});