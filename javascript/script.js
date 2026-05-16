const spaceObjects = [
  {
    id: 'sun',
    title: 'СОЛНЦЕ', 
    borderColor: '#fff243',
    textColor: '#fff243',
    bgColor: '#fff243',
    pics: [
      'images/lastimages/firstimages/FRSTsun.png',  
  'images/lastimages/firstimages/LASTsun.png',
  'images/lastimages/surfaces/SURsun.png'
    ],
    info: 'Солнце — это звезда, расположенная в центре нашей Солнечной системы...'
  },
  {
    id: 'mercury',
    title: 'МЕРКУРИЙ',
    borderColor: '#5364b3',
    textColor: '#5364b3',
    bgColor: '#5364b3',
    pics: [
       'images/lastimages/firstimages/FRSTmercury.png',  
  'images/lastimages/LASTmercury.png',
  'images/lastimages/surfaces/SURmercury.png'
    ],
    info: 'Меркурий - самая маленькая и наиболее приближенная к Солнцу планета...'
  },
  {
    id: 'venus',
    title: 'ВЕНЕРА',
    borderColor: '#dfa73f',
    textColor: '#dfa73f',
    bgColor: '#dfa73f',
    pics: [
       'images/lastimages/firstimages/FRSTvenus.png',  
  'images/lastimages/LASTvenus.png',
  'images/lastimages/surfaces/SURvenus.png'
    ],
    info: 'Венера – вторая планета от Солнца, известная как утренняя звезда...'
  },
  {
    id: 'earth',
    title: 'ЗЕМЛЯ',
    borderColor: '#6adb5b',
    textColor: '#6adb5b',
    bgColor: '#6adb5b',
    pics: [
       'images/lastimages/firstimages/FRSTearth.png',  
  'images/lastimages/LASTearth.png',
  'images/lastimages/surfaces/SURearth.png'
    ],
    info: 'Земля — третья планета от Солнца и, пока что, единственное известное место во Вселенной, где существует жизнь...'
  },
  {
    id: 'mars',
    title: 'MAPC',
    borderColor: '#db5b5b',
    textColor: '#db5b5b',
    bgColor: '#db5b5b',
    pics: [
       'images/lastimages/firstimages/FRSTmars.png',  
  'images/lastimages/LASTmars.png',
  'images/lastimages/surfaces/SURmars.png'
    ],
    info: 'Марс — четвёртая планета от Солнца и последний из планет земной группы...'
  },
  {
    id: 'jupiter',
    title: 'ЮПИТЕР',
    borderColor: '#816552',
    textColor: '#816552',
    bgColor: '#816552',
    pics: [
       'images/lastimages/firstimages/FRSTjupiter.png',  
  'images/lastimages/LASTjupiter.png',
  'images/lastimages/surfaces/SURjupiter.png'
    ],
    info: 'Юпитер — пятая планета от Солнца и крупнейшая планета в нашей Солнечной системе...'
  },
  {
    id: 'saturn',
    title: 'CATУРН',
    borderColor: '#b3b68a',
    textColor: '#b3b68a',
    bgColor: '#b3b68a',
    pics: [
       'images/lastimages/firstimages/FRSTsaturn.png',  
  'images/lastimages/LASTsaturn.png',
  'images/lastimages/surfaces/SURsaturn.png'
    ],
    info: 'Сатурн – шестая планета от Солнца и вторая по величине планета в нашей Солнечной системе...'
  },
  {
    id: 'uranus',
    title: 'УРАН',
    borderColor: '#59d0ff',
    textColor: '#59d0ff',
    bgColor: '#59d0ff',
    pics: [
       'images/lastimages/firstimages/FRSTuranus.png',  
  'images/lastimages/LASTuranus.png',
  'images/lastimages/surfaces/SURuranus.png'
    ],
    info: 'Уран — седьмая планета от Солнца и один из ледяных гигантов нашей Солнечной системы...'
  },
  {
    id: 'neptune',
    title: 'НЕПТУН',
    borderColor: '#5977ff',
    textColor: '#5977ff',
    bgColor: '#5977ff',
    pics: [
       'images/lastimages/firstimages/FRSTneptune.png',  
  'images/lastimages/LASTneptune.png',
  'images/lastimages/surfaces/SURneptune.png'
    ],
    info: 'Нептун – восьмая и самая дальняя от Солнца планета нашей Солнечной системы...'
  },
  {
    id: 'black',
    title: 'TON618',
    cssFile: 'stil/bstyle.css',
    borderColor: '#ffffff',
    textColor: '#ffffff',
    bgColor: '#ffffff',
    pics: [
      'images/lastimages/firstimages/FIRSTTON618.png',  
  'images/lastimages/LASTTON618.png'
    ],
    info: 'TON 618 - это чрезвычайно далёкий и сверхмассивный квазар в созвездии Гончих Псов...'
  },
  {
    id: 'andromeda',
    title: 'АНДРОМЕДА',
    cssFile: 'stil/astyle.css',
    borderColor: '#de8aff',
    textColor: '#de8aff',
    bgColor: '#de8aff',
    pics: [
      'https://avatars.mds.yandex.net/i?id=7661c55c585a377bb2d40ff21e26802405975aa0-5284035-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=fe230c4f105c6c6eb41328b81d1c856ce83bee52-16401557-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=adadbd67f99b641f2f54349245a00ae98f845cb0-5318071-images-thumbs&n=13'
    ],
    info: 'Галактика Андромеды (M31) - спиральная галактика, находящаяся на расстоянии около 2,5 миллионов световых лет от Земли...'
  },
  {
    id: 'volopas',
    title: 'ПУСТОТА ВОЛОПАСА',
    cssFile: 'stil/vostyle.css',
    borderColor: '#777777',
    textColor: '#777777',
    bgColor: '#777777',
    pics: [
      'https://avatars.mds.yandex.net/i?id=796e1a567766fcd0fd022e5fb5658475de47b55b-8710170-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=cae7adb193fb219815e831c3936895edf82c2086-4577690-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=6b81fdd7b83e3005054be9e2c2a07042e6f810f2-4524149-images-thumbs&n=13'
    ],
    info: 'Пустота Волопаса — это обширная область межзвёздного пространства, расположенная в созвездии Волопаса...'
  },
  {
    id: 'voyager',
    title: 'ВОЯДЖЕР-1',
    cssFile: 'stil/vgstyle.css',
    borderColor: '#c4c4c4',
    textColor: '#c4c4c4',
    bgColor: '#c4c4c4',
    pics: [
      'https://avatars.mds.yandex.net/i?id=2cb25f814d408bfec848efed5478808d7f14427b-6338651-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=7792a7f18a21cc6bf15ac45d4fe36088414a17ee-10414552-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=8258aeb8379f071bb91d6c678738df015a4625cb-7465150-images-thumbs&n=13'
    ],
    info: 'Вояджер 1 — это американский межзвёздный зонд, запущенный НАСА 5 сентября 1977 года...'
  },
  {
    id: 'vkusno',
    title: '???',
    cssFile: 'stil/vkustyle.css',
    borderColor: '#777777',
    textColor: '#777777',
    bgColor: '#777777',
    pics: [
      'https://avatars.mds.yandex.net/i?id=796e1a567766fcd0fd022e5fb5658475de47b55b-8710170-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=cae7adb193fb219815e831c3936895edf82c2086-4577690-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=6b81fdd7b83e3005054be9e2c2a07042e6f810f2-4524149-images-thumbs&n=13'
    ],
    info: '–£—З–µ–љ—Л–Љ–Є –±—Л–ї–Є –љ–∞–є–і–µ–љ—Л –і–Њ–Ї–∞–Ј–∞—В–µ–ї—М—Б—В–≤–∞ —Б—Г—Й–µ—Б—В–≤–Њ–≤–∞–љ–Є—П –Є–љ–Њ–њ–ї–∞–љ–µ—В–љ—Л—Е —Ж–Є–≤–Є–ї–Є–Ј–∞—Ж–Є–є–£—З–µ–љ—Л–Љ–Є –±—Л–ї–Є –љ–∞–є–і–µ–љ—Л –і–Њ–Ї–∞–Ј–∞—В–µ–ї—М—Б—В–≤–∞ —Б—Г—Й–µ—Б—В–≤–Њ–≤–∞–љ–Є—П –Є–љ–Њ–њ–ї–∞–љ–µ—В–љ—Л—Е —Ж–Є–≤–Є–ї–Є–Ј–∞—Ж–Є–є–£—З–µ–љ—Л–Љ–Є –±—Л–ї–Є –љ–∞–є–і–µ–љ—Л –і–Њ–Ї–∞–Ј–∞—В–µ–ї—М—Б—В–≤–∞ —Б—Г—Й–µ—Б—В–≤–Њ–≤–∞–љ–Є—П –Є–љ–Њ–њ–ї–∞–љ–µ—В–љ—Л—Е —Ж–Є–≤–Є–ї–Є–Ј–∞—Ж–Є–є–£—З–µ–љ—Л–Љ–Є –±—Л–ї–Є –љ–∞–є–і–µ–љ—Л –і–Њ–Ї–∞–Ј–∞—В–µ–ї—М—Б—В–≤–∞ —Б—Г—Й–µ—Б—В–≤–Њ–≤–∞–љ–Є—П –Є–љ–Њ–њ–ї–∞–љ–µ—В–љ—Л—Е —Ж–Є–≤–Є–ї–Є–Ј–∞—Ж–Є–є–£—З–µ–љ—Л–Љ–Є –±—Л–ї–Є –љ–∞–є–і–µ–љ—Л –і–Њ–Ї–∞–Ј–∞—В–µ–ї—М—Б—В–≤–∞ —Б—Г—Й–µ—Б—В–≤–Њ–≤–∞–љ–Є—П –Є–љ–Њ–њ–ї–∞–љ–µ—В–љ—Л—Е —Ж–Є–≤–Є–ї–Є–Ј–∞—Ж–Є–є–£—З–µ–љ—Л–Љ–Є –±—Л–ї–Є –љ–∞–є–і–µ–љ—Л –і–Њ–Ї–∞–Ј–∞—В–µ–ї—М—Б—В–≤–∞ —Б—Г—Й–µ—Б—В–≤–Њ–≤–∞–љ–Є—П –Є–љ–Њ–њ–ї–∞–љ–µ—В–љ—Л—Е —Ж–Є–≤–Є–ї–Є–Ј–∞—Ж–Є–є–£—З–µ–љ—Л–Љ–Є –±—Л–ї–Є –љ–∞–є–і–µ–љ—Л –і–Њ–Ї–∞–Ј–∞—В–µ–ї—М—Б—В–≤–∞ —Б—Г—Й–µ—Б—В–≤–Њ–≤–∞–љ–Є—П –Є–љ–Њ–њ–ї–∞–љ–µ—В–љ—Л—Е —Ж–Є–≤–Є–ї–Є–Ј–∞—Ж–Є–є–£—З–µ–љ—Л–Љ–Є –±—Л–ї–Є –љ–∞–є–і–µ–љ—Л –і–Њ–Ї–∞–Ј–∞—В–µ–ї—М—Б—В–≤–∞ —Б—Г—Й–µ—Б—В–≤–Њ–≤–∞–љ–Є—П –Є–љ–Њ–њ–ї–∞–љ–µ—В–љ—Л—Е —Ж–Є–≤–Є–ї–Є–Ј–∞—Ж–Є–є–£—З–µ–љ—Л–Љ–Є –±—Л–ї–Є –љ–∞–є–і–µ–љ—Л –і–Њ–Ї–∞–Ј–∞—В–µ–ї—М—Б—В–≤–∞ —Б—Г—Й–µ—Б—В–≤–Њ–≤–∞–љ–Є—П –Є–љ–Њ–њ–ї–∞–љ–µ—В–љ—Л—Е —Ж–Є–≤–Є–ї–Є–Ј–∞—Ж–Є–є–£—З–µ–љ—Л–Љ–Є –±—Л–ї–Є –љ–∞–є–і–µ–љ—Л –і–Њ–Ї–∞–Ј–∞—В–µ–ї—М—Б—В–≤–∞ —Б—Г—Й–µ—Б—В–≤–Њ–≤–∞–љ–Є—П –Є–љ–Њ–њ–ї–∞–љ–µ—В–љ—Л—Е —Ж–Є–≤–Є–ї–Є–Ј–∞—Ж–Є–є–£—З–µ–љ—Л–Љ–Є –±—Л–ї–Є –љ–∞–є–і–µ–љ—Л –і–Њ–Ї–∞–Ј–∞—В–µ–ї—М—Б—В–≤–∞ —Б—Г—Й–µ—Б—В–≤–Њ–≤–∞–љ–Є—П –Є–љ–Њ–њ–ї–∞–љ–µ—В–љ—Л—Е —Ж–Є–≤–Є–ї–Є–Ј–∞—Ж–Є–є–£—З–µ–љ—Л–Љ–Є –±—Л–ї–Є –љ–∞–є–і–µ–љ—Л '
  }
];