function getRecords() {
    return JSON.parse(localStorage.getItem("records")) || [];
}

function saveRecords(records) {
    localStorage.setItem("records", JSON.stringify(records));
}

function addFinanceRecord() {
    const amount = document.getElementById("f_amount").value;
    const category = document.getElementById("f_category").value;
    const type = document.getElementById("f_type").value;

    if (!amount || !category) {
        alert("Please fill all fields");
        return;
    }

    const records = getRecords();

    records.push({
        amount: parseFloat(amount),
        category,
        type,
        date: new Date().toISOString().split("T")[0]
    });

    saveRecords(records);

    document.getElementById("f_amount").value = "";
    document.getElementById("f_category").value = "";

    loadFinanceRecords();
    loadFinanceSummary();
}

function loadFinanceRecords() {
    const records = getRecords();

    let html = "";

    records.forEach((r, index) => {
        html += `
            <div style="background:white;padding:10px;margin:6px;border-radius:8px;">
                ₹${r.amount} - ${r.category} (${r.type})
                <button onclick="deleteRecord(${index})" style="float:right;">❌</button>
            </div>
        `;
    });

    document.getElementById("finance_records").innerHTML = html;
}

function deleteRecord(index) {
    const records = getRecords();
    records.splice(index, 1);
    saveRecords(records);

    loadFinanceRecords();
    loadFinanceSummary();
}

function loadFinanceSummary() {
    const records = getRecords();

    let income = 0;
    let expense = 0;

    records.forEach(r => {
        if (r.type === "income") income += r.amount;
        else expense += r.amount;
    });

    document.getElementById("finance_summary").innerHTML = `
        <p><b>Total Income:</b> ₹${income}</p>
        <p><b>Total Expense:</b> ₹${expense}</p>
        <p><b>Balance:</b> ₹${income - expense}</p>
    `;
}

window.onload = function () {
    loadFinanceRecords();
    loadFinanceSummary();
};
