// Save data locally
function getRecords() {
    return JSON.parse(localStorage.getItem("records")) || [];
}

function saveRecords(records) {
    localStorage.setItem("records", JSON.stringify(records));
}

// Add record
function addFinanceRecord() {
    const amount = document.getElementById("f_amount").value;
    const category = document.getElementById("f_category").value;
    const type = document.getElementById("f_type").value;

    const records = getRecords();

    records.push({
        amount: parseFloat(amount),
        category,
        type,
        date: new Date().toISOString().split("T")[0]
    });

    saveRecords(records);

    loadFinanceRecords();
    loadFinanceSummary();
}

// Load records
function loadFinanceRecords() {
    const records = getRecords();

    let html = "";
    records.forEach(r => {
        html += `<div style="background:white;padding:8px;margin:5px;border-radius:6px;">
            ₹${r.amount} - ${r.category} (${r.type})
        </div>`;
    });

    document.getElementById("finance_records").innerHTML = html;
}

// Load summary
function loadFinanceSummary() {
    const records = getRecords();

    let income = 0;
    let expense = 0;

    records.forEach(r => {
        if (r.type === "income") income += r.amount;
        else expense += r.amount;
    });

    document.getElementById("finance_summary").innerHTML = `
        <p><b>Income:</b> ₹${income}</p>
        <p><b>Expense:</b> ₹${expense}</p>
        <p><b>Balance:</b> ₹${income - expense}</p>
    `;
}

// Auto load
loadFinanceRecords();
loadFinanceSummary();
