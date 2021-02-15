const submitBudjetButton = document.getElementById("budget-submit");
const addExpenseButton = document.getElementById("expense");
const expenseContainer = document.querySelector(".expense-container");
const showMyBudjet = document.getElementById("show-my-budjet");
const showMyExpense = document.getElementById("show-my-expense");
const showMyBalense = document.getElementById("show-my-balanse");

let myBudject;
let balense;
let myExpense;
let expense = [];
let EDIT = false;

const budjectSubmit = () => {
    let budJect = document.getElementById("my-budget").value;
    document.getElementById("my-budget").value = "";
    myBudject = parseInt(budJect);
    showMyBudjet.innerText = myBudject;
}

const addExpense = () => {
    if (EDIT) {
        let newName = document.getElementById("expence-name").value;
        let newExpenceValue = document.getElementById("expence-amound").value;
        let id = document.getElementById("id").value;
        let newExpense = {
            id: id,
            name: newName,
            expence: parseInt(newExpenceValue)
        }
        let expenc = expense.filter((expenc) => expenc.id != id);
        expense = [...expenc, newExpense]
        document.getElementById("expence-name").value = '';
        document.getElementById("expence-amound").value = '';
        setItems(expense)
        EDIT = false;
        return;
    }
    let newName = document.getElementById("expence-name").value;
    let newExpenceValue = document.getElementById("expence-amound").value;
    if (balense >= 0) alert("Increase your budject")
    if (myBudject == undefined) return
    document.getElementById("expence-name").value = '';
    document.getElementById("expence-amound").value = '';
    let newExpense = {
        id: new Date().getTime().toString(),
        name: newName,
        expence: parseInt(newExpenceValue)
    }
    expense = [...expense, newExpense]
    calculateExpence(expense);
}


const calculateExpence = (expense) => {
    myExpense = expense.reduce((total, expense) => total + expense.expence, 0);
    balense = myBudject - myExpense
    showMyBalense.innerText = balense
    showMyExpense.innerText = myExpense
    setItems(expense);
}


const setItems = (expense) => {
    let fullExpense = ''
    expense.map((expense) => {
        const { id, name, expence } = expense;
        fullExpense +=
            `
            <div class="expense-items">
                <span class="widthval">
                    <h6 id="item-name">${name}</h6>
                </span>
                <span class="widthval">
                    <h6 id="cost">${expence}</h6>
                </span>
                <div class="icons">
                    <i class="fas fa-edit" onclick="editExpense(${id})"></i>
                    <i class="fa fa-trash" aria-hidden="true"onclick="deletExpense(${id})"></i>
                </div>
            </div>
            `
    })
    expenseContainer.innerHTML = fullExpense
}

submitBudjetButton.addEventListener("click", budjectSubmit);
addExpenseButton.addEventListener("click", addExpense);


const editExpense = (itid) => {
    EDIT = true;
    let expens = expense.find((expense) => expense.id == itid);
    const { name, expence, id } = expens
    document.getElementById("expence-name").value = name;
    document.getElementById("expence-amound").value = expence;
    document.getElementById("id").value = id;
    console.log(id);
}

const deletExpense = (itid) => {
    let Delete = confirm("Do you want to Delet");
    if (!Delete) return;
    let expens = expense.filter((expense) => expense.id != itid);
    let { expence } = expense.find((expense) => expense.id == itid);
    balense += expence;
    myExpense -= expence;
    showMyExpense.innerText = myExpense;
    showMyBalense.innerText = balense;
    expense = [...expens];
    setItems(expens);
}