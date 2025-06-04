function toggleMenu() {
    var wind_width = window.innerWidth;
    if (wind_width <= 900) {
        const menu = document.getElementById('navList');
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    }
}

const headersPJC = ["Vehicle No", "Job Card", "Customer Name", "Contact", "Fuel Type", "Model", "Technician", "Status", "Remarks", "Date"];
document.querySelectorAll("#PJCT_table tr").forEach(row => {
    row.querySelectorAll("td").forEach((td, i) => {
        td.setAttribute("data-label", headersPJC[i] + ':');
    });
});

const headersTecW = ["Vehicle No", "Job Card", "Customer Name", "Contact", "Fuel Type", "Model", "Technician", "Start Time"];
document.querySelectorAll("#technicianWorking_table tr").forEach(row => {
    row.querySelectorAll("td").forEach((td, i) => {
        td.setAttribute("data-label", headersTecW[i] + ':');
    });
});

const headersUnderW = ["Vehicle No", "Job Card", "Customer Name", "Model", "Technician", "Start", "Pause", "Complete"];
document.querySelectorAll("#underWorking_table tr").forEach(row => {
    row.querySelectorAll("td").forEach((td, i) => {
        td.setAttribute("data-label", headersUnderW[i] + ':');
    });
});

const headersPendS = ["Vehicle No", "Job Card", "Customer Name", "Type", "Model", "Technician", "Status", "Remarks", "Exp Del date"];
document.querySelectorAll("#pendingServices_table tr").forEach(row => {
    row.querySelectorAll("td").forEach((td, i) => {
        td.setAttribute("data-label", headersPendS[i] + ':');
    });
});

const headersAdvC = ["Vehicle No", "Job Card", "Customer Name", "Type", "Model", "Remarks", "Exp Del date", "Update"];
document.querySelectorAll("#AdvisorChecking_table tr").forEach(row => {
    row.querySelectorAll("td").forEach((td, i) => {
        td.setAttribute("data-label", headersAdvC[i] + ':');
    });
});


function FilterPendingJobCard() {
    var vehicleNo = document.getElementById('vehicleNoPJCT').value.toLowerCase();
    var CustomerName = document.getElementById('CustomerNamePJCT').value.toLowerCase();
    var ICEEV = document.getElementById('ICEEVPJCT').value.toLowerCase();
    var Model = document.getElementById('ModelPJCT').value.toLowerCase();
    var Technician = document.getElementById('TechnicianPJCT').value.toLowerCase();
    var status = document.getElementById('statusPJCT').value.toLowerCase();

    var tbody = document.getElementById('PJCT_table');
    var trs = tbody.getElementsByTagName('tr');

    for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].getElementsByTagName('td');
        if (!tds.length) continue;

        var showRow = true;

        if (vehicleNo && !tds[0].textContent.toLowerCase().includes(vehicleNo)) showRow = false;
        if (CustomerName && !tds[2].textContent.toLowerCase().includes(CustomerName)) showRow = false;
        if (ICEEV && !tds[4].textContent.toLowerCase().includes(ICEEV)) showRow = false;
        if (Model && !tds[5].textContent.toLowerCase().includes(Model)) showRow = false;
        if (Technician && !tds[6].textContent.toLowerCase().includes(Technician)) showRow = false;
        if (status && !tds[7].textContent.toLowerCase().includes(status)) showRow = false;

        trs[i].style.display = showRow ? '' : 'none';
    }
}


function FiltertechnicianWorking() {
    var vehicleNo = document.getElementById('tecwVehicleNo').value.toLowerCase();
    var CustomerName = document.getElementById('tecwCusname').value.toLowerCase();
    var ICEEV = document.getElementById('ICEEVtecW').value.toLowerCase();
    var Model = document.getElementById('ModeltecW').value.toLowerCase();
    var Technician = document.getElementById('TechnicianttecW').value.toLowerCase();

    var tbody = document.getElementById('technicianWorking_table');
    var trs = tbody.getElementsByTagName('tr');

    for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].getElementsByTagName('td');
        if (!tds.length) continue;

        var showRow = true;

        if (vehicleNo && !tds[0].textContent.toLowerCase().includes(vehicleNo)) showRow = false;
        if (CustomerName && !tds[2].textContent.toLowerCase().includes(CustomerName)) showRow = false;
        if (ICEEV && !tds[4].textContent.toLowerCase().includes(ICEEV)) showRow = false;
        if (Model && !tds[5].textContent.toLowerCase().includes(Model)) showRow = false;
        if (Technician && !tds[6].textContent.toLowerCase().includes(Technician)) showRow = false;
        trs[i].style.display = showRow ? '' : 'none';
    }
}

function FilterunderW() {
    var vehicleNo = document.getElementById('underWVehicleNo').value.toLowerCase();
    var ICEEVunderW = document.getElementById('ICEEVunderW').value.toLowerCase();
    var ModelunderW = document.getElementById('ModelunderW').value.toLowerCase();
    var tbody = document.getElementById('underWorking_tbody');
    var rows = tbody.getElementsByTagName('tr');

    for (var i = 0; i < rows.length; i++) {
        var cols = rows[i].getElementsByTagName('td');

        // Make sure there are enough columns to check
        if (cols.length < 5) continue;

        var vehicleCell = cols[0].textContent.toLowerCase();
        var iceevCell = cols[3].textContent.toLowerCase();
        var modelCell = cols[4].textContent.toLowerCase();

        var showRow =
            vehicleCell.includes(vehicleNo) &&
            iceevCell.includes(ICEEVunderW) &&
            modelCell.includes(ModelunderW);

        rows[i].style.display = showRow ? '' : 'none';
    }
}
function FilterPendS() {
    var PendSVehicleNo = document.getElementById('PendSVehicleNo').value.toLowerCase();
    var ICEEVPendS = document.getElementById('ICEEVPendS').value.toLowerCase();
    var ModelPendS = document.getElementById('ModelPendS').value.toLowerCase();
    var tbody = document.getElementById('pendingServices_tbody');
    var rows = tbody.getElementsByTagName('tr');

    for (var i = 0; i < rows.length; i++) {
        var cols = rows[i].getElementsByTagName('td');

        var vehicleCell = cols[0].textContent.toLowerCase(); // Vehicle No.
        var iceevCell = cols[3].textContent.toLowerCase();   // ICE/EV
        var modelCell = cols[4].textContent.toLowerCase();   // Model

        var showRow =
            vehicleCell.includes(PendSVehicleNo) &&
            iceevCell.includes(ICEEVPendS) &&
            modelCell.includes(ModelPendS);

        rows[i].style.display = showRow ? '' : 'none';
    }
}

function closeAdvisorUpdate() {
    document.getElementsByClassName('advisorUpdate')[0].style.display = 'none'
}
function openAdvisorUpdate(jcNo) {
    document.getElementsByClassName('advisorUpdate')[0].style.display = '';
    document.getElementById('JcNumberAdvUpdate').value = jcNo;
}
function Navpages(page) {
    var homePage = document.getElementById('homePage');
    var PendingJob = document.getElementById('PendingJob');
    var TechnicianWorking = document.getElementById('TechnicianWorking');
    var UnderWorking = document.getElementById('UnderWorking');
    var PendingServices = document.getElementById('PendingServices');
    var AdvisorChecking = document.getElementById('AdvisorChecking');

    homePage.style.display = 'none';
    PendingJob.style.display = 'none';
    TechnicianWorking.style.display = 'none';
    UnderWorking.style.display = 'none';
    PendingServices.style.display = 'none';
    AdvisorChecking.style.display = 'none';

    document.getElementById('homePage' + 'nav').classList.remove('active');
    document.getElementById('PendingJob' + 'nav').classList.remove('active');
    document.getElementById('TechnicianWorking' + 'nav').classList.remove('active');
    document.getElementById('UnderWorking' + 'nav').classList.remove('active');
    document.getElementById('PendingServices' + 'nav').classList.remove('active');
    document.getElementById('AdvisorChecking' + 'nav').classList.remove('active');

    document.getElementById(page).style.display = '';
    document.getElementById(page + 'nav').classList.add('active');
    toggleMenu();
}

document.getElementById('myform').addEventListener('submit', function (e) {
    e.preventDefault();
    var userid = document.getElementById('userid-log').value;
    var passwordlog = document.getElementById('password-log').value;
    if (userid == '10069' && passwordlog == '1242') {
        document.getElementById('login-page').style.display = 'none'
        document.getElementById('mainPage').style.display = '';
        document.getElementById('myform').reset();
    } else {
        document.getElementById('login-page-cred').style.display = '';
    }
})
