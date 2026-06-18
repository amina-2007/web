 
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
 
    var customPlanets = JSON.parse(localStorage.getItem('customPlanets')) || [];
    for (var i = 0; i < customPlanets.length; i++) {
        busySpots.push({
            x: customPlanets[i].posX,
            y: customPlanets[i].posY
        });
    }
 
    var xPx, yPx, tooClose, tries = 0;
    var maxTries = 500;
    var found = false;
    
    do {
        xPx = Math.floor(Math.random() * 80 + 10) * 10; // 100-900px
        yPx = Math.floor(Math.random() * 60 + 10) * 10; // 100-700px
        
        tooClose = false;
        for (var j = 0; j < busySpots.length; j++) {
            var dist = Math.sqrt((xPx - busySpots[j].x) ** 2 + (yPx - busySpots[j].y) ** 2);
            if (dist < 150) { 
                tooClose = true; 
                break; 
            }
        }
        tries++;
        if (!tooClose) {
            found = true;
            break;
        }
    } while (tries < maxTries);
 
    if (!found) {
        xPx = Math.floor(Math.random() * 80 + 10) * 10;
        yPx = Math.floor(Math.random() * 60 + 10) * 10;
    }
 
    var pics = [
        image1 || image1 || "images/defaults.png",
        image2 || image2 || "images/defaults.png",
        image3 || image3 || "images/defaults.png"
    ];
 
    var newPlanet = {
        id: 'custom_' + Date.now(),
        title: name.toUpperCase(),
        mainColor: color,
        textColor: color,
        borderColor: color,
        btnBg: color,
        bgColor: color,
        icon: image || "images/default.png",
        pics: pics,
        info: info || 'Пользовательская планета.',
        animation: animation,
        size: parseInt(size),
        posX: xPx,
        posY: yPx,
        isCustom: true
    };
 
 
    customPlanets.push(newPlanet);
    localStorage.setItem('customPlanets', JSON.stringify(customPlanets));
 
    var saved = JSON.parse(localStorage.getItem('customPlanets')); 

    alert('Планета ' + name + ' добавлена!');
    window.location.href = 'index.html';
} 
function previewImage() {
    var url = document.getElementById('planetImage').value.trim();
    var preview = document.getElementById('preview');
    if (url) {
        preview.style.backgroundImage = 'url(' + url + ')';
        preview.style.backgroundSize = 'cover';
        preview.style.backgroundPosition = 'center';
    } else {
        preview.style.backgroundImage = 'none';
    }
}