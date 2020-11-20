const budgetSubmit = document.getElementById("budget-submit");
const expenseAdding = document.getElementById("expense");

budgetSubmit.addEventListener("click", function () {
    let budget = document.getElementById("my-budget").value;
    console.log(budget);
    if (!isNaN(budget)) {
        document.getElementById("money-i-have").innerHTML = '<i class="fas fa-dollar-sign fa-1x"></i> ' + budget;
        document.getElementById("not-a-number").innerHTML = '';
    } else {
        document.getElementById("not-a-number").innerHTML = 'Enter a number';
    }
});
expenseAdding.addEventListener("click", function(){
    let expenseName = document.getElementById("expence-name").value;
    let expenseValue = document.getElementById("expence-amound").value;

    document.getElementById("item-name").innerHTML = expenseName;
    console.log(expenseValue);
    if(!isNaN(expenseValue)){
        document.getElementById("cost").innerHTML = expenseValue;
        document.getElementById("not-num").innerHTML = '';
    }else{
        document.getElementById("not-num").innerHTML = 'Enter a number';
    }
});