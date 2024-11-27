function initializePlayerData() {
    // 초기 플레이어 데이터 설정
    if (!localStorage.getItem('coins')) {
        localStorage.setItem('coins', 0);
    }
    if (!localStorage.getItem('ownedBoats')) {
        localStorage.setItem('ownedBoats', JSON.stringify(['boat1'])); // 처음 보유 배
    }
    if (!localStorage.getItem('ownedRods')) {
        localStorage.setItem('ownedRods', JSON.stringify(['stick1'])); // 처음 보유 낚시대
    }
    if (!localStorage.getItem('equippedBoat')) {
        localStorage.setItem('equippedBoat', 'boat1'); // 착용 중인 배
    }
    if (!localStorage.getItem('equippedRod')) {
        localStorage.setItem('equippedRod', 'stick1'); // 착용 중인 낚시대
    }
}

function loadPlayerData() {
    initializePlayerData(); // 초기화 함수 호출
    const coins = localStorage.getItem('coins') || 0;
    const ownedBoats = JSON.parse(localStorage.getItem('ownedBoats')) || [];
    const ownedRods = JSON.parse(localStorage.getItem('ownedRods')) || [];
    const equippedBoat = localStorage.getItem('equippedBoat') || '없음';
    const equippedRod = localStorage.getItem('equippedRod') || '없음';

    document.getElementById('coins').innerText = `보유 코인: ${coins}`;
    document.getElementById('ownedBoats').innerText = `구매한 배: ${ownedBoats.join(', ') || '없음'}`;
    document.getElementById('ownedRods').innerText = `구매한 낚시대: ${ownedRods.join(', ') || '없음'}`;
    document.getElementById('equippedBoat').innerText = `착용 중인 배: ${equippedBoat}`;
    document.getElementById('equippedRod').innerText = `착용 중인 낚시대: ${equippedRod}`;
}


function addCoins(amount) {
    const currentCoins = parseInt(localStorage.getItem('coins') || 0);
    localStorage.setItem('coins', currentCoins + amount);
    loadPlayerData();
}

function buyBoat(boat) {
    const ownedBoats = JSON.parse(localStorage.getItem('ownedBoats')) || [];
    if (!ownedBoats.includes(boat)) {
        ownedBoats.push(boat);
        localStorage.setItem('ownedBoats', JSON.stringify(ownedBoats));
        loadPlayerData();
    }
}

function buyRod(rod) {
    const ownedRods = JSON.parse(localStorage.getItem('ownedRods')) || [];
    if (!ownedRods.includes(rod)) {
        ownedRods.push(rod);
        localStorage.setItem('ownedRods', JSON.stringify(ownedRods));
        loadPlayerData();
    }
}

function equipBoat(boat) {
    localStorage.setItem('equippedBoat', boat);
    loadPlayerData();
}

function equipRod(rod) {
    localStorage.setItem('equippedRod', rod);
    loadPlayerData();
}