document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const amount = document.getElementById("libra-input");
    const boxMortgageAmount = document.getElementById("mortgage-amount");
    const term = document.getElementById("years-input");
    const boxYearsInput = document.getElementById("box-years-input");
    const rate = document.getElementById("percentagem-input");
    const boxPercentagemInput = document.getElementById(
        "box-percentagem-input"
    );
    const repayment = document.getElementById("repayment");
    const intOnly = document.getElementById("int-only");
    const boxMortgageType = document.getElementById("box-mortgage-type");
    const boxYourResultsText = document.querySelector(".box-your-results-text");
    const results = document.querySelector(".results");
    const boxYourResultsRepay = document.querySelector(
        ".box-your-results-repay"
    );
    const repay = document.querySelector(".repay");
    const boxYourResult = document.querySelector(".box-your-results");
    const boxShowResult = document.querySelector(".box-show-result");
    const libraInput = document.getElementById("libra-input");
    const libra = document.querySelector(".libra");
    const yearsInput = document.getElementById("years-input");
    const years = document.querySelector(".years");
    const percentagemInput = document.getElementById("percentagem-input");
    const percentagem = document.querySelector(".percentagem");
    const boxRadio = document.querySelectorAll(".box-radio");
    const spanBtn = document.getElementById("span-btn");
    const btnClear = document.getElementsByClassName("btn-clear");

    const textFieldRequeridAmount = document.createElement("p");
    const textFieldRequeridTerm = document.createElement("p");
    const textFieldRequeridRate = document.createElement("p");
    const textFieldRequeridBoxRadio = document.createElement("p");

    textFieldRequeridAmount.textContent = "This field is required";
    textFieldRequeridTerm.textContent = "This field is requered";
    textFieldRequeridRate.textContent = "This field is requered";
    textFieldRequeridBoxRadio.textContent = "This field is requerid";

    textFieldRequeridAmount.setAttribute("class", "text-field-requerid-amount");
    textFieldRequeridTerm.setAttribute("class", "text-field-requerid-term");
    textFieldRequeridRate.setAttribute("class", "text-field-requerid-rate");
    textFieldRequeridBoxRadio.setAttribute(
        "class",
        "text-field-requerid-box-radio"
    );

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        mortgageCalculator();
        emptyField();
        mortgageCalculatorToggleDisplay();
        console.log(isNaN(amount.value));
    });

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

    yearsInput.addEventListener("focus", () => {
        years.style.height = "4.8rem";
        years.style.backgroundColor = "#d8db2f";
        yearsInput.style.border = "1px solid #d8db2f";
        textFieldRequeridTerm.remove();
    });

    yearsInput.addEventListener("blur", () => {
        const termReplace = parseFloat(term.value.replace(",", "."));
        years.style.height = "4.8rem";
        years.style.right = "1px";
        years.style.top = "1px";
        years.style.backgroundColor = "#e4f4fd";
        yearsInput.style.border = "1px solid #4e6e7e";
        if (!yearsInput.value || isNaN(termReplace)) {
            years.style.backgroundColor = "#d73328";
            years.style.color = "#fff";
            yearsInput.style.border = "1px solid #d73328";
            years.style.right = "0px";
            boxYearsInput.insertAdjacentElement(
                "afterend",
                textFieldRequeridTerm
            );
        }
        if (!yearsInput.value) {
            boxYearsInput.insertAdjacentElement(
                "afterend",
                textFieldRequeridTerm
            );
        }
    });
    percentagemInput.addEventListener("focus", () => {
        percentagem.style.height = "4.8rem";
        percentagem.style.right = "0px";
        percentagem.style.top = "1px";
        percentagem.style.backgroundColor = "#d8db2f";
        percentagemInput.style.border = "1px solid #d8db2f";
        textFieldRequeridRate.remove();
    });

    percentagemInput.addEventListener("blur", () => {
        const rateReplace = parseFloat(rate.value.replace(",", "."));
        percentagem.style.height = "4.75rem";
        percentagem.style.right = "1px";
        percentagem.style.top = "1.2px";
        percentagem.style.backgroundColor = "#e4f4fd";
        percentagemInput.style.border = "1px solid #4e6e7e";
        if (!percentagemInput.value || isNaN(rateReplace)) {
            percentagem.style.backgroundColor = "#d73328";
            percentagem.style.color = "#fff";
            percentagemInput.style.border = "1px solid #d73328";
            percentagem.style.right = "0px";
            percentagem.style.height = "48px";
            boxPercentagemInput.insertAdjacentElement(
                "afterend",
                textFieldRequeridRate
            );
        }
        if (!percentagemInput.value) {
            boxPercentagemInput.insertAdjacentElement(
                "afterend",
                textFieldRequeridRate
            );
        }
    });

    function mortgageCalculator() {
        const amountValue = parseFloat(amount.value.replace(/,/g, ""));
        const termValue = parseFloat(term.value.replace(",", "."));
        const rateValue = parseFloat(rate.value.replace(",", "."));
        const monthlyRate = rateValue / 12 / 100;
        const totalMonths = termValue * 12;

        if (repayment.checked) {
            function formatCurrency(value) {
                return value.toLocaleString("en-GB", {
                    style: "currency",
                    currency: "GBP",
                });
            }

            boxYourResultsText.textContent = `Your monthly repayments`;
            const monthlyPayment =
                (amountValue *
                    monthlyRate *
                    Math.pow(1 + monthlyRate, totalMonths)) /
                (Math.pow(1 + monthlyRate, totalMonths) - 1);
            let resultPayment = formatCurrency(monthlyPayment);
            results.textContent = `${resultPayment}`;

            boxYourResultsRepay.textContent = `Total you'll repay over the term`;
            const totalPayment = monthlyPayment * totalMonths;
            let resultTotalPayment = formatCurrency(totalPayment);
            console.log(resultTotalPayment);
            repay.textContent = `${resultTotalPayment}`;
        }

        if (intOnly.checked) {
            const amountFloat = parseFloat(amountValue);
            const rateFloat = parseFloat(rateValue);

            function formatCurrency(value) {
                return value.toLocaleString("en-GB", {
                    style: "currency",
                    currency: "GBP",
                });
            }

            boxYourResultsText.textContent = `Your monthly interest`;
            const monthlyInterest = (amountFloat * rateFloat) / 100 / 12;
            let resultInterest = formatCurrency(monthlyInterest);
            results.textContent = `${resultInterest}`;

            boxYourResultsRepay.textContent = `Total you'll repay over the term`;
            const totalInterestOnly = monthlyInterest * totalMonths;
            let resultTotalinterestOnly = formatCurrency(totalInterestOnly);
            repay.textContent = `${resultTotalinterestOnly}`;
        }
    }
    function emptyField() {
        const amountReplace = parseFloat(amount.value.replace(",", "."));
        const rateReplace = parseFloat(rate.value.replace(",", "."));
        const termReplace = parseFloat(term.value.replace(",", "."));
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

        if (!term.value || isNaN(termReplace)) {
            boxYearsInput.insertAdjacentElement(
                "afterend",
                textFieldRequeridTerm
            );
            years.style.backgroundColor = "#d73328";
            years.style.color = "#fff";
            yearsInput.style.border = "1px solid #d73328";
            years.style.right = "0px";
        }

        if (!rate.value || isNaN(rateReplace)) {
            boxPercentagemInput.insertAdjacentElement(
                "afterend",
                textFieldRequeridRate
            );
            percentagem.style.backgroundColor = "#d73328";
            percentagem.style.color = "#fff";
            percentagemInput.style.border = "1px solid #d73328";
            percentagem.style.right = "0px";
            console.log("esta disparando!");
        }

        if (!intOnly.checked && !repayment.checked) {
            boxMortgageType.insertAdjacentElement(
                "afterend",
                textFieldRequeridBoxRadio
            );
        }
    }

    function mortgageCalculatorToggleDisplay() {
        const amountReplace = parseFloat(amount.value.replace(",", "."));
        const rateReplace = parseFloat(rate.value.replace(",", "."));
        const termReplace = parseFloat(term.value.replace(",", "."));
        if (
            !isNaN(amountReplace) &&
            !isNaN(rateReplace) &&
            !isNaN(termReplace)
        ) {
            console.log("Está disparando");
            if (amount.value && rate.value && term.value) {
                if (intOnly.checked || repayment.checked) {
                    boxShowResult.style.display = "none";
                    boxYourResult.style.display = "block";
                    boxYourResult.style.right = "0";
                }
            }
        }
    }
});
