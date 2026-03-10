# Instrukce pro Cursor agenta

## Role a cíl

Jsi zkušený frontend developer specializovaný na statické weby s Apple-level kvalitou designu. Tvým úkolem je vytvořit kompletní single-page webovou stránku pro MacBook Neo zaměřenou na české školy.

## Postup práce (dodržuj přesně toto pořadí)

### Krok 1: Struktura projektu

Vytvoř tuto adresářovou strukturu:

```
macbook-neo/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
    ├── Apple-MacBook-Neo-hero-260304.jpg
    ├── Apple-MacBook-Neo-color-lineup-260304.jpg
    ├── Apple-MacBook-Neo-lifestyle-02-260304.jpg
    └── Apple-MacBook-Neo-lifestyle-03-260304.jpg
```

Fotografie budou dodány do složky `images/`. Ve svém kódu na ně odkazuj přesně těmito názvy.

### Krok 2: Nejdřív HTML kostra

Začni čistou HTML strukturou celé stránky. Všechny sekce, správná hierarchie headingů (jeden h1, pak h2 pro sekce, h3 pro podsekce). Žádný obsah nevynechej. Zkontroluj, že máš všech 10 sekcí + navigaci + footer.

### Krok 3: CSS styling

Potom styluj. Postupuj sekce po sekci, shora dolů. Po každé sekci zkontroluj, že:
- Střídání tmavého a světlého pozadí funguje
- Typografie odpovídá design systému (DM Serif Display nadpisy, DM Sans body)
- Karty a gridy jsou responzivní
- Dostatečný padding a volný prostor (Apple styl)

### Krok 4: JavaScript

Nakonec přidej interakce:
- Sticky navigace s blur efektem při scrollu
- Smooth scroll pro anchor links
- Mobilní hamburger menu
- Fade-in animace při scrollu (Intersection Observer)

### Krok 5: Kontrola

Na závěr projdi celou stránku a zkontroluj:
- [ ] Všech 10 sekcí je přítomných a obsahově kompletních
- [ ] Responzivita na 375px, 768px, 1200px+
- [ ] Všechna CTA tlačítka mají správný odkaz
- [ ] Odkazy na anketu a TCO kalkulačku fungují
- [ ] Obrázky mají alt texty v češtině
- [ ] Žádné em-dash (—) v textu
- [ ] Navigace funguje (anchor links, hamburger na mobilu)
- [ ] Barvy odpovídají design systému
- [ ] Čeština je bez chyb (háčky, čárky)

## Technická pravidla

### HTML
- Sémantický HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Každá sekce má unikátní `id` pro anchor links
- `lang="cs"` na `<html>` elementu
- Meta viewport pro responzivitu
- Preconnect na Google Fonts
- Lazy loading na obrázky: `loading="lazy"` (kromě hero)
- Open Graph meta tagy pro sdílení (title, description, image)

### CSS
- Všechny barvy, fonty a rozměry přes CSS custom properties (`:root`)
- Mobile-first přístup: základní styly pro mobil, media queries pro větší obrazovky
- Breakpointy: 768px (tablet), 1024px (desktop), 1200px (wide)
- Žádný CSS framework (Bootstrap, Tailwind). Čistý CSS.
- Flexbox a CSS Grid pro layout
- `box-sizing: border-box` globálně
- Plynulé přechody: `transition: all 0.3s ease`
- Maximální šířka obsahu: `max-width: 1200px; margin: 0 auto;`

### JavaScript
- Vanilla JS, žádné frameworky
- `DOMContentLoaded` wrapper
- Intersection Observer pro scroll animace (ne scroll event listener)
- Event delegation kde to dává smysl
- Debounce na scroll/resize eventy

### Výkon
- Obrázky: `loading="lazy"` na všechny kromě hero
- Fonty: `font-display: swap` v Google Fonts URL
- CSS v `<head>`, JS před `</body>` nebo s `defer`
- Minimální počet DOM elementů

### Přístupnost
- Kontrast minimálně 4.5:1 pro text (WCAG AA)
- Focus styly na interaktivní prvky
- `aria-label` na hamburger menu
- `aria-expanded` pro mobilní menu stav
- Skip navigation link (volitelné)

## Co NEDĚLAT

- Nepoužívej placeholder obrázky. Pokud fotka není k dispozici, vlož prázdný `<div>` s komentářem.
- Nepoužívej Lorem ipsum. Veškerý text je dodaný v obsahu níže.
- Neměň dodané texty. Copy je finální.
- Nepoužívej em-dash (—). Nahraď čárkou, tečkou nebo středníkem.
- Nepoužívej žádný CSS framework.
- Nepoužívej ikony z Font Awesome. Použij SVG ikony nebo Unicode znaky definované v obsahu.
- Nevynechávej sekce. Stránka má přesně 10 sekcí + navigaci + footer.
- Nedělej over-engineering. Stránka je statická, nepotřebuje build tools, bundler ani preprocessor.

## Hosting a deployment

Stránka bude hostovaná na Vercel jako statický web. Výstup musí být plně funkční otevřením `index.html` v prohlížeči bez jakéhokoliv build procesu.

---

# Obsah a design stránky

Níže následuje kompletní specifikace obsahu, designu a layoutu každé sekce.

---


## 1. Přehled projektu

Vytvoř single-page webovou stránku pro MacBook Neo zaměřenou na české školy. Stránka bude statický HTML/CSS/JS soubor (index.html) hostovaný na Vercel. Cílem stránky je přimět návštěvníka kliknout na CTA „Poslat nezávaznou nabídku".

Stránka je součástí ekosystému webů modernivyuka.digital a ucime.digital. Vizuálně musí navazovat na existující weby: anketa-vysledky.vercel.app a tco-kalkulacka.vercel.app.

Jazyk stránky: čeština.

---

## 2. Design systém

### Typografie

- **Nadpisy:** DM Serif Display (Google Fonts)
- **Body text:** DM Sans (Google Fonts)
- **Metriky/čísla (volitelné):** DM Sans Bold

### Barvy

```
/* Základ (existující design systém) */
--bg-dark: #111111;
--bg-light: #ffffff;
--bg-light-alt: #f8f8f8;
--text-on-dark: #ffffff;
--text-on-light: #111111;
--text-secondary: #888888;
--accent-green: #22c55e;

/* Nové pro MacBook Neo */
--accent-citrus: #D4E157;         /* Citrusově žlutá — primární akcent */
--accent-citrus-hover: #C0CA33;   /* Hover stav */
--accent-indigo: #3F4F8A;         /* Indigo — sekundární akcent */
--accent-rose: #E8A0BF;           /* Ruměná — doplňková */
```

### Tlačítka

- **Primární CTA:** pozadí citrusově žlutá (#D4E157), text tmavý (#111111), border-radius 8px, padding 16px 32px, font DM Sans 600
- **Sekundární (ghost):** průhledné pozadí, border 1px solid (bílý na tmavém, tmavý na světlém), border-radius 8px, stejný padding
- **Hover efekt:** lehké zesvětlení / opacity 0.9, transition 0.2s

### Layout

- Max-width obsahu: 1200px, centrovaný
- Sekce se střídají: tmavé (#111) a světlé (#fff nebo #f8f8f8) pozadí
- Padding sekcí: 80px nahoře a dole (desktop), 48px (mobil)
- Hodně volného prostoru mezi prvky (Apple styl)

### Responzivita

- Desktop: 1200px max-width
- Tablet: 768px breakpoint
- Mobil: 375px+ single column
- Obrázky přizpůsobivé, max-width 100%

---

## 3. Navigace (fixní menu)

Fixní horní menu, pozadí #111111 (s lehkým blur/opacity při scrollu), bílý text.

**Obsah menu:**
- Vlevo: text logo „modernivyuka.digital" (odkaz na hlavní stránku modernivyuka.digital)
- Uprostřed nebo vpravo: anchor links — MacBook Neo · Proč Mac · Přechod · Kompatibilita · Parametry
- Vpravo: CTA tlačítko „Poslat nezávaznou nabídku" (citrusově žlutá)

Na mobilu: hamburger menu.

---

## 4. Fotografie

V adresáři projektu jsou tyto Apple press fotografie MacBooku Neo:

1. `Apple-MacBook-Neo-hero-260304.jpg` — ruka drží citrusově žlutý MacBook Neo, bílé pozadí
2. `Apple-MacBook-Neo-color-lineup-260304.jpg` — 4 MacBooky Neo ve všech barvách (stříbrná, ruměná, žlutá, indigo), bílé pozadí
3. `Apple-MacBook-Neo-lifestyle-02-260304.jpg` — dívka se sluchátky u MacBooku Neo
4. `Apple-MacBook-Neo-lifestyle-03-260304.jpg` — studentka se žlutým MacBookem Neo v tělocvičně na lavici
5. `Apple-MacBook-Neo-lifestyle-04-260304.jpg` — NEPOUŽÍVAT (nevhodný kontext)

**Přiřazení fotek k sekcím:**
- Hero: `hero-260304.jpg`
- Představení produktu: `color-lineup-260304.jpg`
- Přechod z Windows: `lifestyle-03-260304.jpg`
- Záložní / baterie: `lifestyle-02-260304.jpg`

Fotky na tmavém pozadí: zobrazit na plnou šířku nebo s dostatečným paddingem.
Fotky na světlém pozadí: přirozené, bílé pozadí fotek splyne s bílým pozadím sekce.

---

## 5. Obsah stránky — sekce po sekci

---

### SEKCE 1: Hero
**Pozadí:** tmavé (#111)
**Fotka:** `Apple-MacBook-Neo-hero-260304.jpg` — velká, centrovaná nebo vpravo

**Nadpis (DM Serif Display, bílý, velký):**
MacBook Neo. První Mac za cenu Windows notebooku.

**Podnadpis (DM Sans, šedý #aaa, menší):**
Otevřete víko a za 2 vteřiny učíte. Žádné instalování aktualizací uprostřed hodiny. Baterie na celý školní den. Spolehlivý provoz po celou dobu životnosti.

**CTA tlačítko (citrusově žlutý):**
Poslat nezávaznou nabídku

**Doplňující řádek (DM Sans, malý, šedý):**
Vzdělávací cena od 14 290 Kč · 16 hodin baterie · Tichý provoz bez ventilátoru · 1,23 kg

---

### SEKCE 2: Co je MacBook Neo
**Pozadí:** světlé (#fff)
**Fotka:** `Apple-MacBook-Neo-color-lineup-260304.jpg` — pod textem nebo vedle, na plnou šířku

**Štítek (malý, uppercase, zelený #22c55e):**
NOVÝ PRODUKT

**Nadpis:**
Notebook, který dává smysl pro školy

**Text:**
MacBook Neo je úplně nový MacBook od Apple. Poprvé v historii nabízí kompletní Mac za cenu srovnatelnou s běžnými Windows notebooky.

Pro školy to znamená: 13palcový Liquid Retina displej s rozlišením vyšším než u většiny PC v této ceně, čip A18 Pro, celodenní baterie a tichý provoz bez ventilátoru. To vše za vzdělávací cenu od 14 290 Kč.

**6 karet (grid 2×3 nebo 3×2):**

Karta 1:
- Ikona: ⚡ (nebo relevantní SVG)
- Titulek: Okamžitě pracuje
- Text: Probuzení ze spánku za vteřinu, rychlé spouštění aplikací. Žádné čekání na aktualizace.

Karta 2:
- Ikona: 🔋
- Titulek: 16 hodin baterie
- Text: Celý školní den bez nabíječky. Ne slibovaných, ale skutečných.

Karta 3:
- Ikona: ✓
- Titulek: Spolehlivý i po letech
- Text: Školy, které Mac používají, potvrzují stabilní výkon i po několika letech provozu.

Karta 4:
- Ikona: 🔇
- Titulek: Tichý
- Text: Konstrukce bez ventilátoru. Žádné hučení při testech, natáčení nebo online výuce.

Karta 5:
- Ikona: ⚖️
- Titulek: 1,23 kg
- Text: Snadno přenosný mezi třídami, na porady, domů.

Karta 6:
- Ikona: 🎨
- Titulek: 4 barvy
- Text: Ruměná, indigo, stříbrná, citrusově žlutá.

---

### SEKCE 3: Co Mac znamená pro vedení školy
**Pozadí:** tmavé (#111)

**Štítek (malý, uppercase, zelený):**
PRO VEDENÍ ŠKOLY

**Nadpis (bílý):**
Co Mac znamená pro vedení školy

**Podnadpis (šedý):**
272 učitelů z českých škol testovalo MacBook Air půl roku. Tohle zjistili.

**Odkaz (citrusově žlutý, podtržený):**
Podívejte se na kompletní výsledky ankety →
(odkaz na anketa-vysledky.vercel.app)

**4 karty (grid 2×2, tmavší pozadí karet #1a1a1a, border 1px #333):**

Karta A:
- Titulek: Životnost zařízení: 5 až 7 let v provozu
- Text: Levnější notebooky ve školách často po několika letech zpomalují a vyžadují výměnu. Mac si zachovává výkon po celou dobu životnosti. ZŠ Česká Kamenice používá MacBooky od roku 2013 a stále s nimi pracuje.

Karta B:
- Titulek: Nižší zátěž na IT
- Text: S Macy se ve školách řeší méně problémů. Méně tiketů na helpdesk, méně servisních zásahů. IT správce se může věnovat rozvoji, ne hašení požárů. 173 z 272 učitelů v anketě neuvedlo žádné problémy s kompatibilitou.

Karta C:
- Titulek: Jednoduchá vzdálená správa
- Text: MacBook Neo se spravuje přes Apple School Manager a Mosyle, stejně jako iPady. Nasazení aplikací, bezpečnostní politiky, nastavení celé flotily na dálku. Vše z jednoho místa.

Karta D:
- Titulek: Bezpečnost v základu
- Text: Každý Mac má šifrování disku (FileVault), antivirovou ochranu a automatické bezpečnostní aktualizace zdarma. Škola nemusí kupovat další bezpečnostní software.

**Banner s čísly z ankety (pod kartami, na tmavém pozadí, výrazné čísla):**

| 272 | 9,34 | 95,6 % | 68 % |
|-----|------|--------|------|
| UČITELŮ | SPOKOJENOST ∅ | DOPORUČUJE | NOVÁČKŮ S MAC |

Čísla zobrazit velkým fontem (DM Sans Bold, 48px+), zelený akcent pro 272 a 95,6 %. Popisky malým šedým textem pod čísly.

---

### SEKCE 4: Kolik stojí Mac za 5 let (TCO)
**Pozadí:** světlé (#fff)

**Štítek:**
CELKOVÉ NÁKLADY

**Nadpis:**
Levnější notebook? Za 5 let to spočítejte znovu.

**Text:**
Levnější notebooky ve školách často po několika letech zpomalují a vyžadují výměnu. Za 5 let tak škola často kupuje dva.

MacBook Neo si zachovává výkon po celou dobu životnosti. A po skončení životnosti ho škola může prodat za 40 až 50 % původní ceny. Levný Windows notebook v tu chvíli nemá téměř žádnou hodnotu.

Přidejte k tomu méně servisních zásahů, méně času IT správce a bezplatné bezpečnostní aktualizace. Celkové náklady za 5 let vycházejí u Macu často nižší.

**Srovnávací tabulka (stylovaná, ne HTML default):**

| | Levnější Windows notebook | MacBook Neo |
|---|---|---|
| Pořizovací cena | ~15 000 Kč | od 14 290 Kč (edu) |
| Typická životnost ve škole | 2–4 roky | 5–7 let |
| Nákupy za 5 let | často 2× notebook | 1× notebook |
| Přeprodejní hodnota | minimální | 40–50 % ceny |
| IT zásahy | častější | výrazně méně |
| Bezpečnostní software | často placený | v ceně zařízení |

Sloupec MacBook Neo zvýraznit (lehký zelený tón pozadí nebo zvýrazněný border).

**CTA odkaz (sekundární tlačítko / textový odkaz):**
Spočítejte si to sami v naší TCO kalkulačce →
(odkaz na tco-kalkulacka.vercel.app)

---

### SEKCE 5: Přechod z Windows na Mac
**Pozadí:** tmavé (#111)
**Fotka:** `Apple-MacBook-Neo-lifestyle-03-260304.jpg` — velká, buď jako pozadí sekce s overlay, nebo vedle textu

**Štítek:**
PŘECHOD NA MAC

**Nadpis (bílý):**
Přecházíte z Windows? Za pár dní vám bude Mac připadat jako samozřejmost.

**Podnadpis (šedý):**
68 % učitelů z naší ankety nemělo s Macem žádnou předchozí zkušenost. Jednoduchost ovládání hodnotili průměrnou známkou 8,36 z 10.

**6 bodů (vertikální seznam s ikonami nebo čísly, ne grid):**

A) **Plocha vypadá skoro stejně**
Soubory máte ve složkách, internet v prohlížeči, poštu v Outlooku. Dock s aplikacemi dole, řádek nabídek nahoře. Nemáte se kde ztratit.

B) **Všechno, co znáte, tu najdete**
Microsoft 365 (Word, Excel, PowerPoint, Outlook, Teams), Google Workspace (Dokumenty, Tabulky, Prezentace, Classroom), Zoom, Canva, Bakaláři (webová verze). Vaše oblíbené aplikace na Macu fungují.

C) **Klávesové zkratky jsou skoro stejné**
Ctrl+C → Command+C. Ctrl+V → Command+V. Ctrl+Z → Command+Z. Většina zkratek, které znáte z Windows, funguje stejně. Místo klávesy Ctrl použijete Command (⌘).

D) **macOS se naučíte za odpoledne**
Pokud ovládáte iPhone, Mac vám bude povědomý. Gesta na trackpadu, oznámení, nastavení. Žádný registr, žádné ovladače, žádné složité nastavování.

E) **Data přenesete snadno**
Máte iPhone? Stačí ho mít poblíž a Mac si přenese nastavení, soubory, fotky a hesla automaticky. Přecházíte z Windows PC? Průvodce přenosem dat vás celým procesem provede.

F) **Nemusíte se učit sami**
Jako Apple Premium Education Partner nabízíme školení a podporu. Od prvního zapnutí až po plné nasazení ve výuce. Pomůžeme celému sborovně.

**Citace (v boxu s uvozovkami, kurzíva):**
„Toto je má první zkušenost s MacBookem a oblíbila jsem si ho. Je lehoučký, snadno přenosný, rychlý, spolehlivý."

---

### SEKCE 6: Kompatibilita ve škole
**Pozadí:** světlé (#fff)

**Štítek:**
KOMPATIBILITA

**Nadpis:**
Funguje to s tím, co ve škole používáte

**5 podbodů (s ikonami/logy):**

A) **Microsoft 365**
Word, Excel, PowerPoint, Outlook a Teams na macOS fungují plnohodnotně. Učitelé pracují se stejnými soubory jako kolegové na Windows. Žádné problémy s formátováním.

B) **Google Workspace**
Google Dokumenty, Tabulky, Prezentace, Classroom, Meet. Vše funguje v prohlížeči i v nativních aplikacích. Školy na Google Workspace nepocítí žádný rozdíl.

C) **Bakaláři**
Webová verze Bakalářů funguje na macOS plně. Desktopová verze na macOS nativně neběží, ale učitelé používají webovou verzi bez omezení.

D) **Tiskárny a projektory**
173 z 272 učitelů nemělo žádné problémy s kompatibilitou. Většina moderních školních tiskáren podporuje AirPrint, takže tisknete z Macu i iPadu bez instalace ovladačů. U starších modelů (Konica, Ricoh, Sharp) může být potřeba nastavit ovladače. Pro projektor nebo ethernet stačí běžný USB-C hub. Pomůžeme s nastavením.

E) **Správa přes Mosyle**
MacBook Neo se spravuje stejně jako iPady. Apple School Manager + Mosyle. Nastavení na dálku, nasazení aplikací, bezpečnostní politiky. Vše z jednoho místa.

**Citace (box):**
„Správa přes Mosyle je jednoduchá. Vše nastavujeme na dálku."
— Mgr. Bc. Daniel Preisler, ředitel ZŠ a gymnázium Česká Kamenice

---

### SEKCE 7: iPad ekosystém
**Pozadí:** tmavé (#111)

**Štítek:**
EKOSYSTÉM

**Nadpis (bílý):**
Máte ve škole iPady? S Macem pracují ještě lépe.

**4 karty (grid 2×2, tmavší pozadí karet):**

Karta 1:
- Titulek: AirDrop
- Text: Žák pošle práci z iPadu na Mac učitele za pár vteřin.

Karta 2:
- Titulek: Classroom
- Text: Z Macu vidíte obrazovky všech žákovských iPadů, otevřete jim aplikaci, zamknete displeje při výkladu.

Karta 3:
- Titulek: iCloud sync
- Text: Připravíte hodinu na Macu doma, ráno ji máte na iPadu ve třídě.

Karta 4:
- Titulek: Handoff
- Text: Začnete psát hodnocení na iPadu. Na Macu v kabinetu pokračujete, kde jste skončili.

---

### SEKCE 8: Technické parametry
**Pozadí:** světlé (#fff)

**Štítek:**
SPECIFIKACE

**Nadpis:**
MacBook Neo v číslech

**Tabulka (čistá, minimalistická):**

| Parametr | Hodnota |
|---|---|
| Čip | Apple A18 Pro (6jádrové CPU, 5jádrové GPU, 16jádrový Neural Engine) |
| Displej | 13" Liquid Retina, 2408 × 1506 px, 500 nitů, 1 miliarda barev |
| Paměť | 8 GB jednotná paměť |
| Úložiště | od 256 GB SSD |
| Baterie | Až 16 hodin |
| Hmotnost | 1,23 kg |
| Porty | 2× USB-C, sluchátkový konektor |
| Wi-Fi / Bluetooth | Wi-Fi 6E / Bluetooth 6 |
| Kamera | 1080p FaceTime HD |
| Bezpečnost | Touch ID (volitelné) |
| Barvy | Ruměná, indigo, stříbrná, citrusově žlutá |
| Cena pro školy | od 14 290 Kč |

---

### SEKCE 9: Reference
**Pozadí:** tmavé (#111)

**Štítek:**
ZKUŠENOSTI ZE ŠKOL

**Nadpis (bílý):**
Co říkají školy, které Mac používají

**3 citace v kartách (horizontální řada, tmavší pozadí karet, ikona uvozovek):**

Citace 1:
„iPady u nás používáme už 10 let. Díky kvalitním obalům a výběru zařízení jsme neměli jediný rozbitý displej."
— Mgr. Bc. Daniel Preisler, ředitel ZŠ a gymnázium Česká Kamenice
(200 iPadů, 40 MacBooků)

Citace 2:
„Apple je pro mě zárukou kvality. A ušetřil mi za ty tři roky spoustu času i nervů."
— Mgr. Pavel Špaček, ředitel ZŠ Dolní Rožínka
(80+ iPadů)

Citace 3:
„Nejstarší zařízení stále fungují. To, že jsme šli do kvality, se nám bohatě vrátilo."
— Mgr. et Mgr. Petr Kruliš, ředitel ZŠ a MŠ Chotyně
(1:1 model, každý žák má vlastní iPad)

---

### SEKCE 10: CTA (závěrečná)
**Pozadí:** citrusově žlutý gradient (od #D4E157 k #C0CA33) NEBO tmavé s citrusovým akcentem

**Nadpis (tmavý text pokud žluté pozadí, bílý pokud tmavé):**
Chcete MacBook Neo do vaší školy?

**Podnadpis:**
Pošleme vám nezávaznou nabídku s cenami pro školství. Pomůžeme s výběrem konfigurace i se zavedením do provozu.

**CTA tlačítko (velké):**
Poslat nezávaznou nabídku

(Tlačítko: pokud žluté pozadí, použij tmavé tlačítko #111 s bílým textem. Pokud tmavé pozadí, použij citrusově žluté tlačítko.)

**Drobný text pod CTA:**
ucime.digital · Apple Premium Education Partner · 15+ let zkušeností se školami

---

## 6. Footer

Tmavé pozadí (#111), minimalistický.

- Logo modernivyuka.digital
- Kontakt: jan.jilek@24u.cz · 734 498 690
- Odkazy: ucime.digital · modernivyuka.digital
- Text: „24U s.r.o. · Apple Premium Education Partner · © 2026"

---

## 7. Technické požadavky

- Jeden soubor index.html (inline CSS a JS, nebo samostatné soubory)
- Google Fonts: DM Serif Display + DM Sans
- Smooth scroll pro anchor links
- Lazy loading pro obrázky
- Mobilní responzivita (hamburger menu, single column)
- Accessible: proper heading hierarchy (h1 > h2 > h3), alt texty na obrázcích, dostatečný kontrast
- CTA tlačítka: odkaz na mailto:jan.jilek@24u.cz?subject=MacBook Neo — nezávazná nabídka (nebo anchor link na kontaktní formulář, pokud bude přidán později)
- Žádné frameworky (React, Vue). Čisté HTML/CSS/JS.
- Optimalizace: minifikované CSS, komprimované obrázky

---

## 8. Animace a interakce

- Fade-in při scrollu pro sekce (subtle, ne přehnané)
- Sticky navigace s blur efektem
- Hover efekty na kartách (lehký box-shadow nebo translate)
- Smooth scroll pro anchor links v menu
- Žádné parallax efekty, žádné autoplaying nic

---

## 9. Důležité poznámky pro Cursor

1. **Tón textu:** Upřímný, konkrétní, bez marketingových klišé. Žádné „revoluční", „úžasný", „perfektní". Fakta a praktické přínosy.
2. **Žádné em-dash (—):** Používej čárky, tečky nebo středníky. Em-dash je AI writing tell.
3. **Čeština:** Veškerý obsah je v češtině. Pozor na správné háčky a čárky.
4. **Apple styl layoutu:** Hodně volného prostoru, velké fotky, čistá typografie. Méně je více.
5. **Fotky:** Použij pouze dodané fotky. Nepoužívej placeholder obrázky ani stock fotky.
6. **CTA konzistence:** Všechna CTA tlačítka vedou na stejnou akci (nezávazná nabídka). Text CTA je vždy „Poslat nezávaznou nabídku".
7. **Odkazy na další weby:** anketa-vysledky.vercel.app (výsledky ankety), tco-kalkulacka.vercel.app (TCO kalkulačka), modernivyuka.digital (hlavní stránka), ucime.digital (ucime.digital web)
8. **Barvy MacBook Neo** jsou klíčový vizuální prvek: citrusově žlutá dominuje, ostatní barvy (ruměná, indigo, stříbrná) jsou doplňkové.
