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

const headersAdvC = ["Vehicle No", "Job Card", "Customer Name", "Type", "Model", "Remarks", "Exp Del date", "Update"];
document.querySelectorAll("#AdvisorChecking_table tr").forEach(row => {
    row.querySelectorAll("td").forEach((td, i) => {
        td.setAttribute("data-label", headersAdvC[i] + ':');
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

    homePage.style.display = 'none';
    PendingJob.style.display = 'none';
    TechnicianWorking.style.display = 'none';
    UnderWorking.style.display = 'none';
    PendingServices.style.display = 'none';
    AdvisorChecking.style.display = 'none';
    AdvisorPendingDelivery.style.display = 'none';

    document.getElementById('homePage' + 'nav').classList.remove('active');
    document.getElementById('PendingJob' + 'nav').classList.remove('active');
    document.getElementById('TechnicianWorking' + 'nav').classList.remove('active');
    document.getElementById('UnderWorking' + 'nav').classList.remove('active');
    document.getElementById('PendingServices' + 'nav').classList.remove('active');
    document.getElementById('AdvisorChecking' + 'nav').classList.remove('active');
    document.getElementById('AdvisorPendingDelivery' + 'nav').classList.remove('active');

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
    var inputtag3 = document.getElementById('ExpdateAdvUpdate');
    inputtag1.value = '';
    inputtag2.value = '';
    inputtag3.value = '';

    if (values == 'Yes') {
        document.getElementById('paramUpdateAction1').style.display = '';
        document.getElementById('paramUpdateAction2').style.display = '';
        document.getElementById('paramUpdateAction3').style.display = '';

        inputtag1.setAttribute('required', true);
        inputtag2.setAttribute('required', true);
        inputtag3.setAttribute('required', true);

    } else {
        document.getElementById('paramUpdateAction1').style.display = 'none';
        document.getElementById('paramUpdateAction2').style.display = 'none';
        document.getElementById('paramUpdateAction3').style.display = 'none';

        inputtag1.removeAttribute('required');
        inputtag2.removeAttribute('required');
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
    document.getElementById('FeedL8').setAttribute('required', true);
    var iTag = document.getElementById('startssec').getElementsByTagName('i');
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
}
function closeDelD() {
    document.getElementsByClassName('advisorUpdate')[2].style.display = 'none';
}
function PendDUpdate(jcNo){
    document.getElementsByClassName('advisorUpdate')[2].style.display = '';
    document.getElementById('JcNumberDelD').innerHTML = jcNo;
    ResetExistingForm();
}
document.getElementById('DeliveryForm').addEventListener('submit',function(e){
    e.preventDefault();
    var JcNo = Number(document.getElementById('JcNumberDelD').innerHTML);
    var status = document.getElementById('DelF_delivery').value;

    var feedQ1_value = '';
    var feedQ1 = document.getElementsByName('feedQ1');
    if(feedQ1[0].checked){feedQ1_value = 'Yes' }else if(feedQ1[1].checked){feedQ1_value = 'No' };

    var feedQ2_value = '';
    var feedQ2 = document.getElementsByName('feedQ2');
    if(feedQ2[0].checked){feedQ2_value = 'Yes' }else if(feedQ2[1].checked){feedQ2_value = 'No' };
    
    var feedQ3_value = '';
    var feedQ3 = document.getElementsByName('feedQ3');
    if(feedQ3[0].checked){feedQ3_value = 'Yes' }else if(feedQ3[1].checked){feedQ3_value = 'No' };
        
    var feedQ4_value = '';
    var feedQ4 = document.getElementsByName('feedQ4');
    if(feedQ4[0].checked){feedQ4_value = 'Yes' }else if(feedQ4[1].checked){feedQ4_value = 'No' };

    var feedQ5_value = '';
    var feedQ5 = document.getElementsByName('feedQ5');
    if(feedQ5[0].checked){feedQ5_value = 'Yes' }else if(feedQ5[1].checked){feedQ5_value = 'No' };
    
    var feedQ6_value = '';
    var feedQ6 = document.getElementsByName('feedQ6');
    if(feedQ6[0].checked){feedQ6_value = 'Yes' }else if(feedQ6[1].checked){feedQ6_value = 'No' };

    var FeedL7_value = document.getElementById('FeedL7_value').innerHTML ; 
    
    var FeedL8_value =  document.getElementById('FeedL8').value

    if(feedQ1_value=="" || feedQ2_value=="" || feedQ3_value=="" || feedQ4_value=="" || feedQ5_value=="" || feedQ6_value=="" || FeedL7_value=="" || FeedL8_value ==""){
        alert('Please Fill Necessary Fields')
    }else{
        ResetExistingForm();
        document.getElementsByClassName('advisorUpdate')[2].style.display = 'none';
        console.log(JcNo,status,feedQ1_value,feedQ2_value,feedQ3_value,feedQ4_value,feedQ5_value,feedQ6_value,FeedL7_value,FeedL8_value)
    }
    
})
