const spaceObjects = [
  {
    id: 'sun',
    title: 'СОЛНЦЕ',
    cssFile: 'stil/infostyle.css',
    borderColor: '#fff243',
    textColor: '#fff243',
    bgColor: '#fff243',
    pics: [
      'https://avatars.mds.yandex.net/i?id=cc438f70c23168f85099c79199a6193fb5869615-9147160-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=ddc5e5ae32f151c93f210effd4ebab4146038cfd-5874162-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=1804c047553b3b2cec445a52f9176320efab7627-10730710-images-thumbs&n=13s'
    ],
    info: 'Солнце — это звезда, расположенная в центре нашей Солнечной системы...'
  },
  {
    id: 'mercury',
    title: 'МЕРКУРИЙ',
    cssFile: 'stil/mstyle.css',
    borderColor: '#5364b3',
    textColor: '#5364b3',
    bgColor: '#5364b3',
    pics: [
      'https://avatars.mds.yandex.net/i?id=4f0dc1bc27ecc32c0914e4850f4d7ca6b0e091a5-7874410-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=2deb9ce8814df144e1d1e091286729316074e71f-4820974-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=cb77e08255b43c3b301f199b6735fbd27916956c-13235253-images-thumbs&n=13'
    ],
    info: 'Меркурий - самая маленькая и наиболее приближенная к Солнцу планета...'
  },
  {
    id: 'venus',
    title: 'ВЕНЕРА',
    cssFile: 'stil/vstyle.css',
    borderColor: '#dfa73f',
    textColor: '#dfa73f',
    bgColor: '#dfa73f',
    pics: [
      'https://avatars.mds.yandex.net/i?id=9d3e509b755fdc372e9c99886ce8e956ca0fcbf7-8427500-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=6b78883307eaf1f9504b309695467de6b2a92e16-4323870-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=dd448866f2e24ec09a1d908477874144ede60435-5220482-images-thumbs&n=13'
    ],
    info: 'Венера – вторая планета от Солнца, известная как утренняя звезда...'
  },
  {
    id: 'earth',
    title: 'ЗЕМЛЯ',
    cssFile: 'stil/estyle.css',
    borderColor: '#6adb5b',
    textColor: '#6adb5b',
    bgColor: '#6adb5b',
    pics: [
      'https://avatars.mds.yandex.net/i?id=69c0d386253cae399489f6ac10d23f695c9ad445-16451811-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=67470b473ab64f3a48c5c8d0c019b54ae2c60afa-3788438-images-thumbs&n=13',
      'https://i.pinimg.com/originals/e1/06/fd/e106fde125db4557b61ba8e04bc2d407.jpg'
    ],
    info: 'Земля — третья планета от Солнца и, пока что, единственное известное место во Вселенной, где существует жизнь...'
  },
  {
    id: 'mars',
    title: 'MAPC',
    cssFile: 'stil/mrstyle.css',
    borderColor: '#db5b5b',
    textColor: '#db5b5b',
    bgColor: '#db5b5b',
    pics: [
      'https://avatars.mds.yandex.net/i?id=b3c0b6c8c66552595b935f727b83c13a07689157-6139770-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=25f4cc278783e0e453dcbaee1f22240441176767-11031910-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=7cf78e26a135546f208f8a97e7d57d2b0625506f-10493468-images-thumbs&n=13'
    ],
    info: 'Марс — четвёртая планета от Солнца и последний из планет земной группы...'
  },
  {
    id: 'jupiter',
    title: 'ЮПИТЕР',
    cssFile: 'stil/jstyle.css',
    borderColor: '#816552',
    textColor: '#816552',
    bgColor: '#816552',
    pics: [
      'https://avatars.mds.yandex.net/i?id=f24bbe9d13d1bf3d12de409db11a30e11090f221-9291521-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=b848a3ff6d7e34380bc07d05186f4d697dcdfd4c-10246869-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=260632d6b884478952d0ddd38a16af0ead1c6e2c-12639726-images-thumbs&n=13'
    ],
    info: 'Юпитер — пятая планета от Солнца и крупнейшая планета в нашей Солнечной системе...'
  },
  {
    id: 'saturn',
    title: 'CATУРН',
    cssFile: 'stil/sstyle.css',
    borderColor: '#b3b68a',
    textColor: '#b3b68a',
    bgColor: '#b3b68a',
    pics: [
      'https://avatars.mds.yandex.net/i?id=caca4efc95f3e4b7137c604305e5e0b82344650c-5318461-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=feb950808393a296588f2d5868035f478f21c963-6844425-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=a2006fbecd5b5d00e93afc5993dbaed200e94d79-5231722-images-thumbs&n=13'
    ],
    info: 'Сатурн – шестая планета от Солнца и вторая по величине планета в нашей Солнечной системе...'
  },
  {
    id: 'uranus',
    title: 'УРАН',
    cssFile: 'stil/ustyle.css',
    borderColor: '#59d0ff',
    textColor: '#59d0ff',
    bgColor: '#59d0ff',
    pics: [
      'https://avatars.mds.yandex.net/i?id=d98d6c1f963a715a3c2f32219fa846220e6f8f83-16236323-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=ff0253c95a9d5ec059764179c07f5d40f75ec988-8341807-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=5a01d8d10b6876adbc0c44f1fcac0472cebba8b1-8253954-images-thumbs&n=13'
    ],
    info: 'Уран — седьмая планета от Солнца и один из ледяных гигантов нашей Солнечной системы...'
  },
  {
    id: 'neptune',
    title: 'НЕПТУН',
    cssFile: 'stil/nstyle.css',
    borderColor: '#5977ff',
    textColor: '#5977ff',
    bgColor: '#5977ff',
    pics: [
      'https://avatars.mds.yandex.net/i?id=70663825998ab9598f05926de3fac8219f4bad78-8425660-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=1ecfe8cc119610c25568ec7ee367ddcffddb263f-5288660-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=9c953d1d6f9d09515a2901c8ed61b1e789953e2a-9196574-images-thumbs&n=13'
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
      'https://avatars.mds.yandex.net/i?id=55e9ce6c86de7ac8c7bfc268c2bc018d94ab6906-10628463-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=1e30240b0a5d95dcfc24941f728f4d60c2448705-5331866-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=adadbd67f99b641f2f54349245a00ae98f845cb0-5318071-images-thumbs&n=13'
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
    info: '–£—З–µ–љ—Л–Љ–Є –±—Л–ї–Є –љ–∞–є–і–µ–љ—Л –і–Њ–Ї–∞–Ј–∞—В–µ–ї—М—Б—В–≤–∞ —Б—Г—Й–µ—Б—В–≤–Њ–≤–∞–љ–Є—П –Є–љ–Њ–њ–ї–∞–љ–µ—В–љ—Л—Е —Ж–Є–≤–Є–ї–Є–Ј–∞—Ж–Є–є...'
  }
];