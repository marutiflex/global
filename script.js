function toggleMenu() {
    var wind_width = window.innerWidth;
    if (wind_width <= 1100) {
        const menu = document.getElementById('navList');
        if (menu.style.right !== '-250px') {
            menu.style.right = '-250px';
            setTimeout(() => {
                menu.style.display = 'none';
            }, 200);

        } else {
            menu.style.display = 'flex';
            setTimeout(() => {
                menu.style.right = '0';
            }, 200);
        }
    }
}

const headersPJC = ["Vehicle No", "Job Card", "JC Date", "Aging", "Customer Name", "Fuel Type", "Model", "Technician", "Status", "Remarks", "Date"];
document.querySelectorAll("#PJCT_table tr").forEach(row => {
    row.querySelectorAll("td").forEach((td, i) => {
        td.setAttribute("data-label", headersPJC[i] + ':');
    });
});

const headersRejAdv = ["Vehicle No", "Job Card", "JC Date", "Aging", "Customer Name", "Fuel Type", "Model", "Technician", "Status", "Remarks", "Date"];
document.querySelectorAll("#RejAdv_table tr").forEach(row => {
    row.querySelectorAll("td").forEach((td, i) => {
        td.setAttribute("data-label", headersRejAdv[i] + ':');
    });
});

const headersTecW = ["Vehicle No", "Job Card", "Customer Name", "Contact", "Fuel Type", "Model", "Technician", "Start Time"];
document.querySelectorAll("#technicianWorking_table tr").forEach(row => {
    row.querySelectorAll("td").forEach((td, i) => {
        td.setAttribute("data-label", headersTecW[i] + ':');
    });
});

const headersUnderW = ["Vehicle No", "Job Card", "Customer Name", "Type", "Model", "Technician", "Start", "Pause", "Complete"];
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

const headersRejS = ["Vehicle No", "Job Card", "Customer Name", "Type", "Model", "Technician", "Status", "Remarks", "Exp Del date"];
document.querySelectorAll("#RejSer_table tr").forEach(row => {
    row.querySelectorAll("td").forEach((td, i) => {
        td.setAttribute("data-label", headersRejS[i] + ':');
    });
});

const headersAdvC = ["Vehicle No", "Job Card", "Customer Name", "Technician", "Model", "Remarks", "Exp Del date", "Update"];
document.querySelectorAll("#AdvisorChecking_table tr").forEach(row => {
    row.querySelectorAll("td").forEach((td, i) => {
        td.setAttribute("data-label", headersAdvC[i] + ':');
    });
});

const headersCallPend = ["Vehicle No", "Job Card", "Customer Name", "Technician", "Model", "Remarks", "Exp Del date", "Update"];
document.querySelectorAll("#CallPend_table tr").forEach(row => {
    row.querySelectorAll("td").forEach((td, i) => {
        td.setAttribute("data-label", headersCallPend[i] + ':');
    });
});

const headersPendD = ["Vehicle No", "Job Card", "Customer Name", "Mobile No", "Type", "Model", "Delivery Time", "Update"];
document.querySelectorAll("#PendD_table tr").forEach(row => {
    row.querySelectorAll("td").forEach((td, i) => {
        td.setAttribute("data-label", headersPendD[i] + ':');
    });
});

function FilterPendingJobCard() {
    var vehicleNo = document.getElementById('vehicleNoPJCT').value.toLowerCase();
    var CustomerName = document.getElementById('CustomerNamePJCT').value.toLowerCase();
    var ICEEV = document.getElementById('ICEEVPJCT').value.toLowerCase();
    var Model = document.getElementById('ModelPJCT').value.toLowerCase();
    var Technician = document.getElementById('TechnicianPJCT').value.toLowerCase();
    var status = document.getElementById('statusPJCT').value.toLowerCase();
    var JCnumPJCT = document.getElementById('JCnumPJCT').value.toLowerCase();

    var tbody = document.getElementById('PJCT_table');
    var trs = tbody.getElementsByTagName('tr');

    for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].getElementsByTagName('td');
        if (!tds.length) continue;

        var showRow = true;

        if (vehicleNo && !tds[0].textContent.toLowerCase().includes(vehicleNo)) showRow = false;
        if (CustomerName && !tds[4].textContent.toLowerCase().includes(CustomerName)) showRow = false;
        if (ICEEV && !tds[5].textContent.toLowerCase().includes(ICEEV)) showRow = false;
        if (Model && !tds[6].textContent.toLowerCase().includes(Model)) showRow = false;
        if (Technician && !tds[7].getElementsByTagName('select')[0].value.toLowerCase().includes(Technician)) showRow = false;
        if (status && !tds[8].getElementsByTagName('select')[0].value.toLowerCase().includes(status)) showRow = false;
        if (JCnumPJCT && !tds[1].textContent.toLowerCase().includes(JCnumPJCT)) showRow = false;

        trs[i].style.display = showRow ? '' : 'none';
    }
}


function FiltertechnicianWorking() {
    var vehicleNo = document.getElementById('tecwVehicleNo').value.toLowerCase();
    var CustomerName = document.getElementById('tecwCusname').value.toLowerCase();
    var ICEEV = document.getElementById('ICEEVtecW').value.toLowerCase();
    var Model = document.getElementById('ModeltecW').value.toLowerCase();
    var Technician = document.getElementById('TechnicianttecW').value.toLowerCase();
    var tecwjcNum = document.getElementById('tecwjcNum').value.toLowerCase();

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
        if (tecwjcNum && !tds[1].textContent.toLowerCase().includes(tecwjcNum)) showRow = false;
        trs[i].style.display = showRow ? '' : 'none';
    }
}

function FilterunderW() {
    var vehicleNo = document.getElementById('underWVehicleNo').value.toLowerCase();
    var ICEEVunderW = document.getElementById('ICEEVunderW').value.toLowerCase();
    var ModelunderW = document.getElementById('ModelunderW').value.toLowerCase();
    var underWJcNum = document.getElementById('underWJcNum').value.toLowerCase();
    var techcianunderW = document.getElementById('techcianunderW').value.toLowerCase();

    var tbody = document.getElementById('underWorking_tbody');
    var trs = tbody.getElementsByTagName('tr');

    for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].getElementsByTagName('td');
        if (!tds.length) continue;

        var showRow = true;

        if (vehicleNo && !tds[0].textContent.toLowerCase().includes(vehicleNo)) showRow = false;
        if (ICEEVunderW && !tds[3].textContent.toLowerCase().includes(ICEEVunderW)) showRow = false;
        if (ModelunderW && !tds[4].textContent.toLowerCase().includes(ModelunderW)) showRow = false;
        if (underWJcNum && !tds[1].textContent.toLowerCase().includes(underWJcNum)) showRow = false;
        if (techcianunderW && !tds[5].textContent.toLowerCase().includes(techcianunderW)) showRow = false;

        trs[i].style.display = showRow ? '' : 'none';
    }

}
function FilterPendS() {
    var PendSVehicleNo = document.getElementById('PendSVehicleNo').value.toLowerCase();
    var ICEEVPendS = document.getElementById('ICEEVPendS').value.toLowerCase();
    var ModelPendS = document.getElementById('ModelPendS').value.toLowerCase();
    var PendSJcNumber = document.getElementById('PendSJcNumber').value.toLowerCase();
    var TechnicianPendS = document.getElementById('TechnicianPendS').value.toLowerCase();

    var tbody = document.getElementById('pendingServices_tbody');
    var trs = tbody.getElementsByTagName('tr');

    for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].getElementsByTagName('td');
        if (!tds.length) continue;

        var showRow = true;

        if (PendSVehicleNo && !tds[0].textContent.toLowerCase().includes(PendSVehicleNo)) showRow = false;
        if (ICEEVPendS && !tds[3].textContent.toLowerCase().includes(ICEEVPendS)) showRow = false;
        if (ModelPendS && !tds[4].textContent.toLowerCase().includes(ModelPendS)) showRow = false;
        if (PendSJcNumber && !tds[1].textContent.toLowerCase().includes(PendSJcNumber)) showRow = false;
        if (TechnicianPendS && !tds[5].textContent.toLowerCase().includes(TechnicianPendS)) showRow = false;

        trs[i].style.display = showRow ? '' : 'none';
    }
}

function FilterRejSer() {
    var RejSerJCNum = document.getElementById('RejSerJCNum').value.toLowerCase();
    var RejSerVehicleNo = document.getElementById('RejSerVehicleNo').value.toLowerCase();
    var TechnicianRejSer = document.getElementById('TechnicianRejSer').value.toLowerCase();
    var ModelRejSer = document.getElementById('ModelRejSer').value.toLowerCase();

    var tbody = document.getElementById('RejSer_tbody');
    var trs = tbody.getElementsByTagName('tr');

    for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].getElementsByTagName('td');
        if (!tds.length) continue;

        var showRow = true;

        if (RejSerJCNum && !tds[1].textContent.toLowerCase().includes(RejSerJCNum)) showRow = false;
        if (RejSerVehicleNo && !tds[0].textContent.toLowerCase().includes(RejSerVehicleNo)) showRow = false;
        if (TechnicianRejSer && !tds[5].textContent.toLowerCase().includes(TechnicianRejSer)) showRow = false;
        if (ModelRejSer && !tds[4].textContent.toLowerCase().includes(ModelRejSer)) showRow = false;

        trs[i].style.display = showRow ? '' : 'none';
    }
}

function FilterAdvC() {
    var AdvCVehicleNo = document.getElementById('AdvCVehicleNo').value.toLowerCase();
    var TechnicianAdvC = document.getElementById('TechnicianAdvC').value.toLowerCase();
    var ModelAdvC = document.getElementById('ModelAdvC').value.toLowerCase();
    var AdvCJcNum = document.getElementById('AdvCJcNum').value.toLowerCase();

    var tbody = document.getElementById('AdvisorChecking_tbody');
    var trs = tbody.getElementsByTagName('tr');

    for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].getElementsByTagName('td');
        if (!tds.length) continue;

        var showRow = true;

        if (AdvCVehicleNo && !tds[0].textContent.toLowerCase().includes(AdvCVehicleNo)) showRow = false;
        if (TechnicianAdvC && !tds[3].textContent.toLowerCase().includes(TechnicianAdvC)) showRow = false;
        if (ModelAdvC && !tds[4].textContent.toLowerCase().includes(ModelAdvC)) showRow = false;
        if (AdvCJcNum && !tds[1].textContent.toLowerCase().includes(AdvCJcNum)) showRow = false;

        trs[i].style.display = showRow ? '' : 'none';
    }
}


function FilterCallPend() {
    var CallPendJcNu = document.getElementById('CallPendJcNu').value.toLowerCase();
    var CallPendVehicleNo = document.getElementById('CallPendVehicleNo').value.toLowerCase();
    var TechnicianCallPend = document.getElementById('TechnicianCallPend').value.toLowerCase();
    var ModelCallPend = document.getElementById('ModelCallPend').value.toLowerCase();

    var tbody = document.getElementById('CallPend_tbody');
    var trs = tbody.getElementsByTagName('tr');

    for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].getElementsByTagName('td');
        if (!tds.length) continue;

        var showRow = true;

        if (CallPendJcNu && !tds[1].textContent.toLowerCase().includes(CallPendJcNu)) showRow = false;
        if (CallPendVehicleNo && !tds[0].textContent.toLowerCase().includes(CallPendVehicleNo)) showRow = false;
        if (TechnicianCallPend && !tds[3].textContent.toLowerCase().includes(TechnicianCallPend)) showRow = false;
        if (ModelCallPend && !tds[4].textContent.toLowerCase().includes(ModelCallPend)) showRow = false;

        trs[i].style.display = showRow ? '' : 'none';
    }
}

function closeAdvisorUpdate() {
    document.getElementsByClassName('advisorUpdate')[0].style.display = 'none'
}
function openAdvisorUpdate(jcNo) {
    document.getElementsByClassName('advisorUpdate')[0].style.display = '';
    var inputtag = document.getElementById('JcNumberAdvUpdate');
    inputtag.value = jcNo;
    inputtag.setAttribute('disabled', true)
    document.getElementById('paramUpdateAction1').style.display = 'none';
    document.getElementById('paramUpdateAction2').style.display = 'none';
    document.getElementById('paramUpdateAction3').style.display = 'none';
    var inputtag1 = document.getElementById('WAintegrationAdvUpdate');
    var inputtag2 = document.getElementById('calledtoClientAdvUpdate');
    var inputtag3 = document.getElementById('ExpdateAdvUpdate');
    inputtag1.value = '';
    inputtag2.value = '';
    inputtag3.value = '';
    document.getElementById('StatusAdvUpdate').value = '';
}
function Navpages(page) {
    var homePage = document.getElementById('homePage');
    var PendingJob = document.getElementById('PendingJob');
    var TechnicianWorking = document.getElementById('TechnicianWorking');
    var UnderWorking = document.getElementById('UnderWorking');
    var PendingServices = document.getElementById('PendingServices');
    var AdvisorChecking = document.getElementById('AdvisorChecking');
    var AdvisorPendingDelivery = document.getElementById('AdvisorPendingDelivery');
    var RejectedAdvisor = document.getElementById('RejectedAdvisor');
    var RejectedServices = document.getElementById('RejectedServices');
    var CallPending = document.getElementById('CallPending');

    homePage.style.display = 'none';
    PendingJob.style.display = 'none';
    TechnicianWorking.style.display = 'none';
    UnderWorking.style.display = 'none';
    PendingServices.style.display = 'none';
    AdvisorChecking.style.display = 'none';
    AdvisorPendingDelivery.style.display = 'none';
    RejectedAdvisor.style.display = 'none';
    RejectedServices.style.display = 'none';
    CallPending.style.display = 'none';

    document.getElementById('homePage' + 'nav').classList.remove('active');
    document.getElementById('PendingJob' + 'nav').classList.remove('active');
    document.getElementById('TechnicianWorking' + 'nav').classList.remove('active');
    document.getElementById('UnderWorking' + 'nav').classList.remove('active');
    document.getElementById('PendingServices' + 'nav').classList.remove('active');
    document.getElementById('AdvisorChecking' + 'nav').classList.remove('active');
    document.getElementById('AdvisorPendingDelivery' + 'nav').classList.remove('active');
    document.getElementById('RejectedAdvisor' + 'nav').classList.remove('active');
    document.getElementById('RejectedServices' + 'nav').classList.remove('active');
    document.getElementById('CallPending' + 'nav').classList.remove('active');

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
        Navpages('homePage');
        toggleMenu();
    } else {
        document.getElementById('login-page-cred').style.display = '';
    }
});
function logout() {
    document.getElementById('login-page').style.display = '';
    document.getElementById('mainPage').style.display = 'none';
}
function startingFunction(jcNo) {
    var trs_underWorking = document.getElementById('underWorking_tbody').getElementsByTagName('tr');
    var tech = '';
    for (let i = 0; i < trs_underWorking.length; i++) {
        var tds = trs_underWorking[i].getElementsByTagName('td');
        var jcnum_td = tds[1].innerHTML;
        if (jcnum_td == jcNo) {
            tech = tds[5].innerHTML;
        }
    }
    for (let i = 0; i < trs_underWorking.length; i++) {
        var tds = trs_underWorking[i].getElementsByTagName('td');
        var jcnum_td = tds[1].innerHTML;
        var tech_td = tds[5].innerHTML;

        if (jcnum_td !== jcNo && tech == tech_td) {
            trs_underWorking[i].style.display = 'none';
        } else if (jcnum_td == jcNo) {
            tds[6].getElementsByTagName('input')[0].style.display = 'none'
            tds[7].getElementsByTagName('input')[0].style.display = 'block'
            tds[8].getElementsByTagName('input')[0].style.display = 'block'
        }
    }
}
function PausingFunction(jcNo) {
    document.getElementsByClassName('advisorUpdate')[1].style.display = '';
    var inputID = document.getElementById('JcNumberpauseReasons');
    inputID.value = jcNo;
    inputID.setAttribute('disabled', true);
}
document.getElementById('pauseReasons').addEventListener('submit', function (e) {
    e.preventDefault();
    var jcNo = document.getElementById('JcNumberpauseReasons').value;
    var trs_underWorking = document.getElementById('underWorking_tbody').getElementsByTagName('tr');
    var tech = '';
    for (let i = 0; i < trs_underWorking.length; i++) {
        var tds = trs_underWorking[i].getElementsByTagName('td');
        var jcnum_td = tds[1].innerHTML;
        if (jcnum_td == jcNo) {
            tech = tds[5].innerHTML;
        }
    }
    for (let i = 0; i < trs_underWorking.length; i++) {
        var tds = trs_underWorking[i].getElementsByTagName('td');
        var jcnum_td = tds[1].innerHTML;
        var tech_td = tds[5].innerHTML;

        if (tech == tech_td) {
            trs_underWorking[i].style.display = '';
            tds[6].getElementsByTagName('input')[0].style.display = 'block';
            tds[7].getElementsByTagName('input')[0].style.display = 'none';
            tds[8].getElementsByTagName('input')[0].style.display = 'none';
        }
    }
    document.getElementsByClassName('advisorUpdate')[1].style.display = 'none';
    document.getElementById('pauseReasons').reset();
})
function closePauseReasons() {
    document.getElementsByClassName('advisorUpdate')[1].style.display = 'none';
}

function CompleteFunction(jcNo) {
    var trs_underWorking = document.getElementById('underWorking_tbody').getElementsByTagName('tr');
    var tech = '';
    for (let i = 0; i < trs_underWorking.length; i++) {
        var tds = trs_underWorking[i].getElementsByTagName('td');
        var jcnum_td = tds[1].innerHTML;
        if (jcnum_td == jcNo) {
            tech = tds[5].innerHTML;
        }
    }
    for (let i = 0; i < trs_underWorking.length; i++) {
        var tds = trs_underWorking[i].getElementsByTagName('td');
        var jcnum_td = tds[1].innerHTML;
        var tech_td = tds[5].innerHTML;

        if (tech == tech_td) {
            trs_underWorking[i].style.display = '';
            tds[6].getElementsByTagName('input')[0].style.display = 'block';
            tds[7].getElementsByTagName('input')[0].style.display = 'none';
            tds[8].getElementsByTagName('input')[0].style.display = 'none';
        }
    }
}
function AdvisorUpdateSubmitParam() {
    var values = document.getElementById('StatusAdvUpdate').value;
    var inputtag1 = document.getElementById('WAintegrationAdvUpdate');
    var inputtag2 = document.getElementById('calledtoClientAdvUpdate');
    inputtag1.value = '';
    inputtag2.value = '';

    if (values == 'Yes') {
        document.getElementById('paramUpdateAction1').style.display = '';
        document.getElementById('paramUpdateAction2').style.display = '';

        inputtag1.setAttribute('required', true);
        inputtag2.setAttribute('required', true);

    } else {
        document.getElementById('paramUpdateAction1').style.display = 'none';
        document.getElementById('paramUpdateAction2').style.display = 'none';

        inputtag1.removeAttribute('required');
        inputtag2.removeAttribute('required');
    }
}
function CalledtoCusSubmitParam() {
    var values = document.getElementById('calledtoClientAdvUpdate').value;
    var inputtag3 = document.getElementById('ExpdateAdvUpdate');
    inputtag3.value = '';

    if (values == 'Yes') {
        document.getElementById('paramUpdateAction3').style.display = '';
        inputtag3.setAttribute('required', true);
    } else {
        document.getElementById('paramUpdateAction3').style.display = 'none';
        inputtag3.removeAttribute('required');
    }
}
document.getElementById('updateLines_AdvisorApproval').addEventListener('submit', function (e) {
    e.preventDefault();
    var jcNum = document.getElementById('JcNumberAdvUpdate').value;
    var approvalStatus = document.getElementById('StatusAdvUpdate').value;
    var whatsappRequired = document.getElementById('WAintegrationAdvUpdate').value;
    var calledStatus = document.getElementById('calledtoClientAdvUpdate').value;
    var delTime = document.getElementById('ExpdateAdvUpdate').value;
    console.log([jcNum, approvalStatus, whatsappRequired, calledStatus, delTime])
    document.getElementsByClassName('advisorUpdate')[0].style.display = 'none';

    var trs = document.getElementById('AdvisorChecking_tbody').getElementsByTagName('tr');
    for (let i = 0; i < trs.length; i++) {
        var tds = trs[i].getElementsByTagName('td')[1];
        if (tds.innerHTML == jcNum) {
            trs[i].style.display = 'none';
        }
    }
})
function FilterPendD() {
    const vehicleNoFilter = document.getElementById("PendDVehicleNo").value.toUpperCase();
    const typeFilter = document.getElementById("ICEEVPendD").value.toUpperCase();
    const modelFilter = document.getElementById("ModelPendD").value.toUpperCase();

    const table = document.getElementById("PendD_table");
    const rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        const vehicleNo = cells[0].textContent.toUpperCase();
        const type = cells[3].textContent.toUpperCase();
        const model = cells[4].textContent.toUpperCase();

        const matchesVehicleNo = vehicleNo.includes(vehicleNoFilter);
        const matchesType = !typeFilter || type === typeFilter;
        const matchesModel = !modelFilter || model === modelFilter;

        if (matchesVehicleNo && matchesType && matchesModel) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}
function updateValue_DelF() {
    var chec = document.getElementById('DelF_delivery');
    if (chec.checked) {
        chec.value = 'Delivered';
    } else {
        chec.value = '';
    }
}
function LabelColor(label, status) {
    var labelTag = document.getElementById(label);
    if (status == "Yes") {
        labelTag.style.color = 'Green';
    } else {
        labelTag.style.color = 'red';
    }
}
function starSelected(number) {
    var stars = document.getElementsByName('stars');
    const col_pat = ['#B71C1C', '#EF6C00', '#F9A825', '#7CB342', '#2E7D32'];
    document.getElementById('FeedL7_value').innerHTML = number;
    for (let i = 1; i <= 5; i++) {
        if (i <= number) {
            stars[(i - 1)].style.color = col_pat[(i - 1)];
            document.getElementById('FeedL7').style.color = col_pat[(i - 1)];
        } else {
            stars[(i - 1)].style.color = 'gray';
        }
    }
}
function NextPage() {
    var chec = document.getElementById('DelF_delivery');
    if (chec.checked) {
        var sectionForm = document.getElementsByClassName('sectionForm');
        sectionForm[0].style.display = 'none';
        sectionForm[1].style.display = '';
        document.getElementById('circleCancell').style.display = '';
        document.getElementById('resetingForm').style.display = '';
        document.getElementById('nextPageSection').style.display = 'none';
        document.getElementById('submitbtnForm').removeAttribute('disabled');
        document.getElementById('formType').innerHTML = 'Customer Feedback Form';
        document.getElementById('skippedFeedBack').innerHTML = '';
    } else {
        alert('Please Select Delivery before Proceed')
    }
}
function ResetExistingForm() {
    var form = document.getElementById('DeliveryForm')
    form.reset();
    document.getElementById('circleCancell').style.display = 'none';
    document.getElementById('resetingForm').style.display = 'none';
    document.getElementById('nextPageSection').style.display = '';
    document.getElementById('submitbtnForm').setAttribute('disabled', true);
    var label = form.getElementsByTagName('label');
    var sectionForm = document.getElementsByClassName('sectionForm');
    sectionForm[1].style.display = 'none';
    sectionForm[0].style.display = '';
    document.getElementById('skippedFeedBack').innerHTML = '';
    document.getElementById('FeedL8').setAttribute('required', true);
    var iTag = document.getElementById('startssec').getElementsByTagName('i');
    document.getElementById('formType').innerHTML = 'Delivery Form';
    for (let i = 0; i < iTag.length; i++) {
        iTag[i].style.color = 'gray';
    }
    for (let i = 0; i < label.length; i++) {
        label[i].style.color = 'gray';
    }
}
function skipingFeedback() {
    var sectionForm = document.getElementsByClassName('sectionForm');
    sectionForm[0].style.display = '';
    sectionForm[1].style.display = 'none';
    document.getElementById('FeedL8').removeAttribute('required');
    document.getElementById('circleCancell').style.display = 'none';
    document.getElementById('formType').innerHTML = 'Delivery Form';
    document.getElementById('skippedFeedBack').innerHTML = 'Skipped';
}
function closeDelD() {
    document.getElementsByClassName('advisorUpdate')[2].style.display = 'none';
}
function PendDUpdate(jcNo) {
    document.getElementsByClassName('advisorUpdate')[2].style.display = '';
    document.getElementById('JcNumberDelD').innerHTML = jcNo;
    ResetExistingForm();
}
document.getElementById('DeliveryForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var JcNo = Number(document.getElementById('JcNumberDelD').innerHTML);
    var status = document.getElementById('DelF_delivery').value;
    var skipStatus = document.getElementById('skippedFeedBack').innerHTML;

    var feedQ1_value = '';
    var feedQ1 = document.getElementsByName('feedQ1');
    if (feedQ1[0].checked) { feedQ1_value = 'Yes' } else if (feedQ1[1].checked) { feedQ1_value = 'No' };

    var feedQ2_value = '';
    var feedQ2 = document.getElementsByName('feedQ2');
    if (feedQ2[0].checked) { feedQ2_value = 'Yes' } else if (feedQ2[1].checked) { feedQ2_value = 'No' };

    var feedQ3_value = '';
    var feedQ3 = document.getElementsByName('feedQ3');
    if (feedQ3[0].checked) { feedQ3_value = 'Yes' } else if (feedQ3[1].checked) { feedQ3_value = 'No' };

    var feedQ4_value = '';
    var feedQ4 = document.getElementsByName('feedQ4');
    if (feedQ4[0].checked) { feedQ4_value = 'Yes' } else if (feedQ4[1].checked) { feedQ4_value = 'No' };

    var feedQ5_value = '';
    var feedQ5 = document.getElementsByName('feedQ5');
    if (feedQ5[0].checked) { feedQ5_value = 'Yes' } else if (feedQ5[1].checked) { feedQ5_value = 'No' };

    var feedQ6_value = '';
    var feedQ6 = document.getElementsByName('feedQ6');
    if (feedQ6[0].checked) { feedQ6_value = 'Yes' } else if (feedQ6[1].checked) { feedQ6_value = 'No' };

    var FeedL7_value = document.getElementById('FeedL7_value').innerHTML;

    var FeedL8_value = document.getElementById('FeedL8').value

    if (skipStatus == "Skipped") {
        feedQ1_value = skipStatus; 
        feedQ2_value = skipStatus; 
        feedQ3_value = skipStatus; 
        feedQ4_value = skipStatus; 
        feedQ5_value = skipStatus; 
        feedQ6_value = skipStatus; 
        FeedL7_value = skipStatus; 
        FeedL8_value = skipStatus;
    }

    if (feedQ1_value == "" || feedQ2_value == "" || feedQ3_value == "" || feedQ4_value == "" || feedQ5_value == "" || feedQ6_value == "" || FeedL7_value == "" || FeedL8_value == "") {
        alert('Please Fill Necessary Fields')
    } else {
        ResetExistingForm();
        document.getElementsByClassName('advisorUpdate')[2].style.display = 'none';
        console.log(JcNo, status, feedQ1_value, feedQ2_value, feedQ3_value, feedQ4_value, feedQ5_value, feedQ6_value, FeedL7_value, FeedL8_value)
    }
})
function callAdvisorUpdate(jcNo) {
    var input = document.getElementById('JcNumberCallUpdate');
    input.value = jcNo;
    input.setAttribute('disabled', true);
    document.getElementsByClassName('advisorUpdate')[3].style.display = '';
}
function closeCallUpdate() {
    document.getElementsByClassName('advisorUpdate')[3].style.display = 'none';
}
function FilterRejAdv() {
    var vehicleNo = document.getElementById('vehicleNoRejAdv').value.toLowerCase();
    var CustomerName = document.getElementById('CustomerNameRejAdv').value.toLowerCase();
    var ICEEV = document.getElementById('ICEEVRejAdv').value.toLowerCase();
    var Model = document.getElementById('ModelRejAdv').value.toLowerCase();
    var Technician = document.getElementById('TechnicianRejAdv').value.toLowerCase();
    var status = document.getElementById('statusRejAdv').value.toLowerCase();
    var JCnumPJCT = document.getElementById('JCnumRejAdv').value.toLowerCase();

    var tbody = document.getElementById('RejAdv_table');
    var trs = tbody.getElementsByTagName('tr');

    for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].getElementsByTagName('td');
        if (!tds.length) continue;
        var showRow = true;
        if (vehicleNo && !tds[0].textContent.toLowerCase().includes(vehicleNo)) showRow = false;
        if (CustomerName && !tds[4].textContent.toLowerCase().includes(CustomerName)) showRow = false;
        if (ICEEV && !tds[5].textContent.toLowerCase().includes(ICEEV)) showRow = false;
        if (Model && !tds[6].textContent.toLowerCase().includes(Model)) showRow = false;
        if (Technician && !tds[7].getElementsByTagName('select')[0].value.toLowerCase().includes(Technician)) showRow = false;
        if (status && !tds[8].getElementsByTagName('select')[0].value.toLowerCase().includes(status)) showRow = false;
        if (JCnumPJCT && !tds[1].textContent.toLowerCase().includes(JCnumPJCT)) showRow = false;

        trs[i].style.display = showRow ? '' : 'none';
    }
}
