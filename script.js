document.addEventListener("DOMContentLoaded", function () {

    if (window.innerWidth > 900) {
        document.body.innerHTML = "";

        const msg = document.createElement('div');
        msg.textContent = "This site only for mobile Devices.";
        msg.style.textAlign = "center";
        msg.style.padding = "50px";
        msg.style.fontSize = "24px";
        document.body.appendChild(msg);
    }
});
function getDateRange(rangeName) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let fromDate = new Date(today);
    let toDate = new Date(today);

    const dayOfWeek = today.getDay();
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

    switch (rangeName) {
        case 'Today':
            break;

        case 'Yesterday':
            fromDate.setDate(today.getDate() - 1);
            toDate = new Date(fromDate);
            break;

        case 'Tomorrow':
            fromDate.setDate(today.getDate() + 1);
            toDate = new Date(fromDate);
            break;

        case 'Last 3 Days':
            fromDate.setDate(today.getDate() - 3);
            toDate.setDate(today.getDate() -1 );
            break;

        case 'This Week':
            fromDate.setDate(today.getDate() + mondayOffset);
            toDate.setDate(fromDate.getDate() + 6);
            break;

        case 'Next Week':
            fromDate.setDate(today.getDate() + mondayOffset + 7); 
            toDate.setDate(fromDate.getDate() + 6); 
            break;

        case 'Last Week':
            fromDate.setDate(today.getDate() + mondayOffset - 7);
            toDate.setDate(fromDate.getDate() + 6);
            break;

        case 'This Month':
            fromDate = new Date(today.getFullYear(), today.getMonth(), 1);
            toDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
            break;

        case 'Last Month':
            fromDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
            toDate = new Date(today.getFullYear(), today.getMonth(), 0);
            break;
        case 'Upcoming':
            fromDate.setDate(today.getDate() + 1);
            toDate.setDate(fromDate.getDate() + 1000);
            break;   
            
        case 'Left':
            fromDate.setDate(fromDate.getDate() - 1000);
            toDate.setDate(toDate.getDate() - 1);
            break;      

        default:
            fromDate = 'na';
            toDate = 'na';
            break;
    }
    return [fromDate, toDate];
}
function OpenloginInfoMenu() {
    var menu = document.getElementsByClassName('login-info-menu')[0];
    var barMenu = document.getElementsByClassName('fa-bars')[0];
    var Sc_width = menu.style.left;
    if (Sc_width === '-300px') {
        menu.style.left = '0px';
        barMenu.style.color = 'gray';
        document.getElementsByClassName('filter-container')[0].style.right = '-300px';
        document.getElementsByClassName('fa-filter')[0].style.color = '#008cff';
    } else {
        menu.style.left = '-300px';
        barMenu.style.color = '#008cff';
    }
    closeModal();
}
function OpenFilter() {
    var menu = document.getElementsByClassName('filter-container')[0];
    var barMenu = document.getElementsByClassName('fa-filter')[0];
    var Sc_width = menu.style.right;
    if (Sc_width === '-300px') {
        menu.style.right = '0px';
        document.getElementsByClassName('login-info-menu')[0].style.left = '-300px';
        document.getElementsByClassName('fa-bars')[0].style.color = '#008cff';
        barMenu.style.color = 'gray';
    } else {
        menu.style.right = '-300px';
        barMenu.style.color = '#008cff';
    }
    closeModal();
}
function FetchData() {
    const icon = document.getElementsByClassName('fa-rotate')[0];
    if (!icon) return;
    closeModal()

    icon.style.transition = 'transform 0.5s linear';
    let angle = 0;

    const rotateInterval = setInterval(() => {
        angle += 45;
        icon.style.transform = `rotate(${angle}deg)`;
    }, 100);

    setTimeout(() => {
        clearInterval(rotateInterval);
        icon.style.transform = '';
    }, 5000);
}
function NavPages(page) {
    var planning = document.getElementById('planning-page');
    var history = document.getElementById('history-page');
    planning.style.display = 'none';
    history.style.display = 'none';

    var planing_menu = document.getElementById('planning-page_menu_nav');
    var history_menu = document.getElementById('history-page_menu_nav');
    planing_menu.classList.remove('active');
    history_menu.classList.remove('active');

    var planning_filter = document.getElementById('planning-page-filter');
    var history_filter = document.getElementById('history-page-filter');
    planning_filter.style.display = 'none';
    history_filter.style.display = 'none';

    document.getElementsByClassName('login-info-menu')[0].style.left = '-300px';
    document.getElementsByClassName('fa-bars')[0].style.color = '#008cff';
    document.getElementsByClassName('filter-container')[0].style.right = '-300px';
    document.getElementsByClassName('fa-filter')[0].style.color = '#008cff';

    document.getElementById(page).style.display = '';
    document.getElementById(page + '_menu_nav').classList.add('active');
    document.getElementById(page + '-filter').style.display = '';
    if (page == "planning-page") {
        var name = 'Planning Report';
        document.getElementById('filter_applied_plan').style.display = '';
        document.getElementById('filter_applied_his').style.display = 'none';
    } else {
        var name = 'History Report';
        document.getElementById('filter_applied_plan').style.display = 'none';
        document.getElementById('filter_applied_his').style.display = '';
    }
    document.getElementById('pageName').innerHTML = name;
    closeModal();
}
function closeModal() {
    document.getElementsByClassName('modal-Box')[0].style.left = '-100dvh';
    document.getElementsByClassName('modal-Box')[1].style.left = '-100dvh';
    document.getElementsByClassName('modal-Box')[2].style.left = '-100dvh';
}
function openModalPendinginfo(partyName, page) {
    document.getElementsByClassName('modal-Box')[0].style.left = '0';
    if (page == 'History') {
        document.getElementsByClassName('update-modal')[0].style.display = 'none';
    } else {
        document.getElementsByClassName('update-modal')[0].style.display = '';
    }
}
function updateForm(trackingId) {
    document.getElementsByClassName('modal-Box')[1].style.left = '0';
}
function ChangePassword() {
    OpenloginInfoMenu();
    document.getElementsByClassName('modal-Box')[2].style.left = '0';
}
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var userID = document.getElementById('userID').value;
    var password = document.getElementById('password').value;
    if (userID == '10069' && password == '1242') {
        document.getElementsByClassName('login-Container')[0].style.display = 'none'
        document.getElementsByTagName('main')[0].style.display = '';
        NavPages('planning-page');
    } else {
        document.getElementById('login-Message').style.display = '';
    }
})
function logout() {
    document.getElementsByClassName('login-Container')[0].style.display = ''
    document.getElementsByTagName('main')[0].style.display = 'none';
    document.getElementById('login-Message').style.display = 'none';
    document.getElementById('userID').value = '';
    document.getElementById('password').value = '';
}
function resetPlanningFilter() {
    document.getElementById('PartyNamefilterplanning').value = '';
    document.getElementById('CurrentStatusfilterplanning').value = '';
    document.getElementById('priorityfilterplanning').value = '';
    PlanningFilter('reset');
}
function PlanningFilter(type) {
    var partyName_fil = document.getElementById('PartyNamefilterplanning').value.trim();
    var curStatus_fil = document.getElementById('CurrentStatusfilterplanning').value.trim();
    var Priority_fil = document.getElementById('priorityfilterplanning').value.trim();

    var trs = document.getElementById('planning-page').getElementsByClassName('Container-details');
    var months_data = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
    var filterApplied = false;

    var DateRange = getDateRange(Priority_fil); 
    var hasDateRange = DateRange && DateRange[0] instanceof Date && DateRange[1] instanceof Date;
    for (let i = 0; i < trs.length; i++) {
        let status = true;
        var partyName = trs[i].querySelector('.Container-top-left p')?.innerText || '';
        if (partyName_fil && !partyName.toLowerCase().includes(partyName_fil.toLowerCase())) {
            status = false;
        }
        var curStatus = trs[i].querySelector('.Container-bottom-right p')?.innerText || '';
        if (curStatus_fil && !curStatus.toLowerCase().includes(curStatus_fil.toLowerCase())) {
            status = false;
        }
        var dateParts = trs[i].querySelector('.Container-bottom-left p:nth-child(4)')?.innerText.split('-');
        if (dateParts && dateParts.length === 3) {
            let day = parseInt(dateParts[0], 10);
            let month = months_data[dateParts[1]];
            let year = parseInt(dateParts[2], 10);
            let rowDate = new Date(year, month, day);
            rowDate.setHours(0, 0, 0, 0);

            if (hasDateRange && (rowDate < DateRange[0] || rowDate > DateRange[1])) {
                status = false;
            }
        }
        trs[i].style.display = status ? '' : 'none';
        if (!status) filterApplied = true;
    }
    if (type !== 'reset') {
        OpenFilter(); 
    }
    document.getElementById('filter_applied_plan').innerText = filterApplied ? 'Filtered' : '';
}
function resetPanel_pen(){
    resetPlanningFilter();
    PlanningFilter('reset');
}

function resetHistoryFilter() {
    document.getElementById('PartyNamefilterhistory').value = '';
    document.getElementById('CurrentStatusfilterhistory').value = '';
    document.getElementById('priorityfilterhistory').value = '';
    HistoryFilter('reset');
}
function HistoryFilter(type) {
    var partyName_fil = document.getElementById('PartyNamefilterhistory').value.trim();
    var curStatus_fil = document.getElementById('CurrentStatusfilterhistory').value.trim();
    var Priority_fil = document.getElementById('priorityfilterhistory').value.trim();
    var trs = document.getElementById('history-page').getElementsByClassName('Container-details');
    var filterApplied = false;
    var months_data = {
        Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
        Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
    };
    var DateRange = getDateRange(Priority_fil); 
    var hasDateRange = DateRange && DateRange[0] instanceof Date && DateRange[1] instanceof Date;
    for (let i = 0; i < trs.length; i++) {
        let status = true;
        var partyName = trs[i].querySelector('.Container-top-left p')?.innerText || '';
        if (partyName_fil && !partyName.toLowerCase().includes(partyName_fil.toLowerCase())) {
            status = false;
        }
        var curStatus = trs[i].querySelector('.Container-bottom-left p:nth-child(3)')?.innerText || '';
        if (curStatus_fil && !curStatus.toLowerCase().includes(curStatus_fil.toLowerCase())) {
            status = false;
        }
        var dateStr = trs[i].querySelector('.Container-bottom-left p:nth-child(2)')?.innerText || '';
        var dateParts = dateStr.split('-');
        if (dateParts.length === 3 && hasDateRange) {
            let day = parseInt(dateParts[0], 10);
            let month = months_data[dateParts[1]];
            let year = parseInt(dateParts[2], 10);

            let rowDate = new Date(year, month, day);
            rowDate.setHours(0, 0, 0, 0);

            if (rowDate < DateRange[0] || rowDate > DateRange[1]) {
                status = false;
            }
        }
        trs[i].style.display = status ? '' : 'none';
        if (!status) filterApplied = true;
    }
    if (type !== 'reset') {
        OpenFilter();
    }
    document.getElementById('filter_applied_his').innerText = filterApplied ? 'Filtered' : '';
}
function resetPanel_his(){
    resetHistoryFilter();
    HistoryFilter('reset');
}
