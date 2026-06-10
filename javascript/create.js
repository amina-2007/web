function addPlanet() {
    var color = document.getElementById('planetColor').value;
var size = document.getElementById('planetSize').value;
    var name = document.getElementById('planetName').value.trim();
    var image = document.getElementById('planetImage').value.trim();
    var image1 = document.getElementById('planetImage1').value.trim();
    var image2 = document.getElementById('planetImage2').value.trim();
    var image3 = document.getElementById('planetImage3').value.trim();
    var info = document.getElementById('planetInfo').value.trim();
    var animation = document.getElementById('planetAnimation').value;

    if (!name) {
        alert('Название обязательно!');
        return;
    }

    var busySpots = [
        {x: 540, y: 400}, {x: 640, y: 400}, {x: 690, y: 390},
        {x: 740, y: 375}, {x: 800, y: 360}, {x: 870, y: 340},
        {x: 950, y: 310}, {x: 1040, y: 270}, {x: 1100, y: 230},
        {x: 850, y: 100}, {x: 150, y: 750}, {x: 50, y: 200},
        {x: 930, y: 700}, {x: 730, y: 50}
    ];

    var xPx, yPx, tooClose, tries = 0;
    do {
        var xPercent = Math.random() * 90 + 5;
        var yPercent = Math.random() * 70 + 5;
        xPx = Math.floor(xPercent * 12);
        yPx = Math.floor(yPercent * 10);
        tooClose = false;
        for (var j = 0; j < busySpots.length; j++) {
            var dist = Math.sqrt((xPx - busySpots[j].x) ** 2 + (yPx - busySpots[j].y) ** 2);
            if (dist < 150) { tooClose = true; break; }
        }
        tries++;
    } while (tooClose && tries < 300);

    var pics = [ 
        image1 || "images/defaults.png",
        image2 || "images/defaults.png",
        image3 || "images/defaults.png"
    ];

    var newPlanet = {
    id: 'custom_' + Date.now(),
    title: name.toUpperCase(),
    mainColor: color,
    textColor: color,
    borderColor: color,
    btnBg: color,
    bgColor: color,
    icon: image || 'images/default.png',
    pics: pics,
    info: info || 'Пользовательская планета.',
    animation: animation,
    size: size,
    posX: xPx,
    posY: yPx,
    isCustom: true
};
 
    var customPlanets = JSON.parse(localStorage.getItem('customPlanets')) || [];
    customPlanets.push(newPlanet);
    localStorage.setItem('customPlanets', JSON.stringify(customPlanets));

    updateOrderForm(name);
    alert('Планета ' + name + ' добавлена!');
    window.location.href = 'index.html';
}