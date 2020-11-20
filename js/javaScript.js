const budgetSubmit = document.getElementById("budget-submit");
const expenseAdding = document.getElementById("expense");

var budget;
var expenseName;
var expenseValue;
var container;
var itemBody;
var itemName;
var cost;
var icons;
var edit;
var trash;

budgetSubmit.addEventListener("click", function () {
    budget = document.getElementById("my-budget").value;
    if (!isNaN(budget)) {
        document.getElementById("money-i-have").innerHTML = '<i class="fas fa-dollar-sign fa-1x"></i> ' + budget;
        document.getElementById("not-a-number").innerHTML = '';
        document.getElementById("my-budget").value = '';
    } else {
        document.getElementById("not-a-number").innerHTML = 'Enter number';
    }
});



function createItem(){
    let allExpensse = document.querySelector(".expense-items");
    let item = document.createElement("div");
    item.classList.add("item");


    item.innerHTML = '<h6 id="item-name"></h6>' +
        '            <h6 id="cost"></h6>' +
        '            <div class="icons">' +
        '            <i class="fas fa-edit"></i>' +
        '            <i class="fa fa-trash" aria-hidden="true"></i>' +
        '                </div>';
        allExpensse.appendChild(item);
        document.getElementById("item-name").innerHTML = expenseName;
        document.getElementById("cost").innerHTML = expenseValue;
}


expenseAdding.addEventListener("click", function () {

    

    expenseName = document.getElementById("expence-name").value;
    expenseValue = document.getElementById("expence-amound").value;

    if (!isNaN(expenseValue)) {
        let balense = budget - expenseValue;
        if (expenseValue && expenseName) {
            if (!isNaN(balense)) {
                createItem();
                document.getElementById("balence-i-have").innerHTML = '<i class="fas fa-dollar-sign fa-1x"></i> ' + balense;
            }
            document.getElementById("show-expene").innerHTML = '<i class="fas fa-dollar-sign fa-1x"></i> ' + expenseValue;


            document.getElementById("not-num").innerHTML = '';
            document.getElementById("expence-name").value = "";
            document.getElementById("expence-amound").value = "";
        }


    } else {
        document.getElementById("not-num").innerHTML = 'Enter number';
    }
});