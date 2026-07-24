# Luniva Baby & Flowers

Luniva Baby & Flowers icin hazirlanan tek sayfalik web sitesi taslagidir.

Canli site:

```text
https://luniva-baby-flowers.farko16cengiz.chatgpt.site
```

GitHub repo:

```text
https://github.com/090420047/luniva-baby-flowers
```

Site su an su amaclara odaklanir:

- Yapilan bebek hediyelikleri ve cicekli aranjmanlari gostermek
- Musteriyi WhatsApp uzerinden siparise yonlendirmek
- Instagram vitrinini ve sponsorlu tanitim planini gostermek
- Arkadasa veya musteriye hizli onizleme sunmak

## Arkadasim projeyi nasil calistirir?

1. Bilgisayarda Node.js kurulu degilse once buradan kur:

```text
https://nodejs.org
```

2. Projeyi GitHub Desktop ile indir:

- GitHub Desktop acilir.
- File > Clone repository secilir.
- URL sekmesine bu link yapistirilir:

```text
https://github.com/090420047/luniva-baby-flowers.git
```

- Clone denir.
- Sonra GitHub Desktop icinden Open in Visual Studio Code denir.

3. VS Code'da terminal acilir:

```text
Terminal > New Terminal
```

4. Ilk kurulum icin terminale yazilir:

```powershell
& "C:\Program Files\nodejs\npm.cmd" install
```

5. Siteyi calistirmak icin terminale yazilir:

```powershell
& "C:\Program Files\nodejs\npm.cmd" run dev
```

6. Terminalde verilen link acilir. Genelde bu olur:

```text
http://localhost:3000
```

Siteyi durdurmak icin terminalde `Ctrl + C` yapilir.

## Projede nereler duzenlenir?

- `app/page.tsx`: Ana sayfa icerigi, WhatsApp linki, Instagram linki ve bolumler
- `app/globals.css`: Renkler, genel stil, mobil/masaustu gorunum ayarlari
- `public/luniva/`: Sitede kullanilan gorseller

## Kisa calistirma

```bash
npm install
npm run dev
```

Tarayicida:

```text
http://localhost:3000
```

## Guncellenecek Bilgiler

`app/page.tsx` icindeki `whatsappNumber` gecici olarak ayarlandi. Gercek WhatsApp numarasi ve Instagram kullanici adi netlesince bu alanlar degistirilir.

## Kontrol

```bash
npm run build
```
