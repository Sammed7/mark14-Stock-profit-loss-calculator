const initialPrice = document.querySelector("#initial-price");
const currentPrice = document.querySelector("#current-price");
const quantity = document.querySelector("#quantity");
const calculate = document.querySelector("#calculate");
const output = document.querySelector("#output");

calculate.addEventListener("click", calculateButtonHandler);
    
function calculateButtonHandler() {
    var ip = Number(initialPrice.value);
    var curr = Number(currentPrice.value);
    var qty = Number(quantity.value);

    calculateProfitAndLoss(ip, curr, qty);
};


function calculateProfitAndLoss(initial, current, quantity) {
    if(initial > current) {
        // loss logic here
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / current) * 100;
        showOutput(`loss is ${loss} and loss percentage is ${lossPercentage} %`);
        output.style.color = "red";
    } 
    else if(current > initial) {
        // profit logic here
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        showOutput(`Profit is ${profit} and Profit Percentage is ${profitPercentage} %`);
        output.style.color = "green"
    } else {
        showOutput("No pain No gain :)");
        output.style.color = "#9333ea";
    }
};

function showOutput(message) {
    output.innerHTML = message;
};