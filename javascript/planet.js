window.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const objectId = params.get('id');

  const obj = spaceObjects.find(function(item) {
    return item.id === objectId;
  });

  if (!obj) {
    document.getElementById('objectTitle').textContent = 'ОБЪЕКТ НЕ НАЙДЕН';
    document.getElementById('objectInfo').textContent =
      'Такого космического объекта не существует в нашей базе данных.';
    return;
  }
 
  const root = document.documentElement;
  root.style.setProperty('--main-color', obj.mainColor);
  root.style.setProperty('--border-color', obj.borderColor);
  root.style.setProperty('--btn-bg', obj.btnBg);
 
  document.getElementById('objectTitle').textContent = obj.title;
 
  document.getElementById('pic1').style.backgroundImage = 'url(' + obj.pics[0] + ')';
  document.getElementById('pic2').style.backgroundImage = 'url(' + obj.pics[1] + ')';
  document.getElementById('pic3').style.backgroundImage = 'url(' + obj.pics[2] + ')';
 
  document.getElementById('objectInfo').textContent = obj.info;
 
  if (obj.id === 'vkusno') {
    document.querySelector('.ok').textContent = '–Ю–Ъ, –Я–Ю–Э–ѓ–Ґ–Э–Ю';
  }
});