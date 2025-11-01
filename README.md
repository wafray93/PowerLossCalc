Favicon и Open Graph Image Инструкции
🎨 Favicon (Browser Tab Icon)
Изисквания:
Формат: .ico или .png
Размер: 32x32 pixels (препоръчително) или 16x16 pixels
Име на файл: favicon.ico
Локация: /static/favicon.ico
Стъпки за добавяне:
Създайте favicon:

Използвайте онлайн tool като https://favicon.io/ или https://realfavicongenerator.net/
Качете лого или създайте текстов favicon
Изтеглете генерирания favicon.ico файл
Качете файла:

static/
└── favicon.ico  ← Поставете файла тук

Добавете към HTML (автоматично): Добавете тази линия в templates/base.html в <head> секцията:

<link rel="icon" type="image/x-icon" href="{{ url_for('static', filename='favicon.ico') }}">

Допълнителни размери (optional):
За по-добра поддръжка на различни устройства:

favicon-16x16.png
favicon-32x32.png
apple-touch-icon.png (180x180px за iOS)
📸 Open Graph Image (Social Media Preview)
Изисквания:
Формат: .png или .jpg
Размер: 1200x630 pixels (препоръчително от Facebook/Twitter)
Име на файл: og-image.png
Локация: /static/images/og-image.png
Файлов размер: Под 8MB (препоръчително под 1MB)
Съдържание на изображението:
Включете следната информация в дизайна:

Logo/Icon на PowerLossCalc
Заглавие: "PowerLossCalc - Si/SiC/GaN Calculator"
Описание: "2409 Transistors, 220 Drivers, Scientific Database"
Визуализация: Схематични елементи на транзистори или графики
Цветова схема: Синьо-лилава градиент (#667eea → #764ba2)
Стъпки за създаване:
Вариант 1: Използвайте Canva (най-лесно)

Отворете https://www.canva.com/
Изберете "Custom Size" → 1200x630 px
Добавете текст и графики
Изтеглете като PNG
Вариант 2: Photoshop/GIMP

Създайте нов файл 1200x630px
Дизайнете изображението
Експортирайте като PNG
Вариант 3: Онлайн tool

https://www.opengraph.xyz/ - OG image generator
https://www.bannerbear.com/ - Автоматичен генератор
Качване на файла:
static/
└── images/
    └── og-image.png  ← Поставете файла тук (1200x630px)

Проверка дали работи:
Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/

Twitter Card Validator: https://cards-dev.twitter.com/validator

LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

✅ Checklist
 Създаден favicon.ico (32x32px)
 Качен във /static/favicon.ico
 Добавен <link rel="icon"> в base.html
 Създадено OG image (1200x630px)
 Качено във /static/images/og-image.png
 Тествано със Facebook/Twitter validators
📝 Бележки
OG image-а вече е конфигуриран в templates/base.html (линия 20)
След качване на файловете, изчистете кеша на браузъра (Ctrl+F5)
За production, използвайте CDN за по-бързо зареждане
Въпроси? Свържете се на contact@powerlosscalc.com
