### Lähteolukord

Praegune kolledži tunniplaan koondab õppetöö ühes kohas, aga kasutaja kogemus on kehv.

- **Mis töötab:** Info on olemas (ruumid, õppejõud, kellaajad, aine nimetused).
- **Mis on segane:** Hierarhia puudub, mobiilivaade on ebamugavalt skrollitav või puudulikult kohanduv. Palju tühja ruumi, samas tekst on väike.
- **Mis puudub:** Selge "täna ja praegu" fookus, mis tõstaks käimasoleva või järgmise loengu koheselt esile.

### Kasutajad

- **Tudengid:** Tahavad infot, millal on nende sess ja, mis ained siis toimuvad ning kus ruumides.
- **Õppejõud:** Vajavad ülevaadet oma päevasest/nädalasest koormusest ja ruumidest.

### Ülesanded

- "Näen ühe pilguga tänaseid tunde ja ruume ilma pikalt otsimata või skrollimata."
- "Saan kiiresti kontrollida, mis ruumis on järgmine loeng."
- "Eristan kergelt aine nime, ruumi numbrit ja õppejõudu."

### Kasutusolukorrad

- **Seade:** Peamiselt mobiilseade ja arvuti (nutitelefon portrait-vaates).
- **Koht ja aeg:** Koridoris kõndides, lõunalt tulles 5 minutit enne loengut.
- **Kiirus:** Vaja kätte saada kiirelt ja mugavalt

### Piirangud

- **Ligipääsetavus:** WCAG 2.2 AA tase
- **Keeled:** Eesti keel
- **Ekraanisuurused:** Mobiil, arvuti ekraan, koridoris ekraan
- **Kolledži kontekst:** Tunniplaan peab olema professionaalselt, selge ja kaasaegne

### Põhikasutusjuhtum

**Ülesanne:** Tudeng avab tunniplaani ja leiab kiirelt oma järgmise loengu ja selle toimumise ruumi  
**Miks:** 80% igapäevasest tunniplaani kasutusest toimub situatsioonis, kus tudengil on vaja kiiresti teada, kuhu ruumi ta järgmisena minema peab.

### Avatud küsimused

1. Kas tunniplaanis peaks kuvama ka reaalajas muudatusi (nt ära jäänud loengud / asendusruumid)?
2. Kas kasutaja vajab vaatesse ka nädala ülevaadet või rippmenüüd teiste päevade valikuks?
3. Kas kasutaja peab nägema ka teiste kursuste tunniplaani
4. Kas ruumi järgi filtreerimine on oluline?

---

## Väidete tabel

| #   | Väide                                                                                                 | Allikas                            | Liik               | Kuidas täpsustada                                                     |
| :-- | :---------------------------------------------------------------------------------------------------- | :--------------------------------- | :----------------- | :-------------------------------------------------------------------- |
| 1   | Tunniplaanis on kirjas ruumi number, kellaaeg ja õppejõu nimi.                                        | Olemasolev tunniplaan (kuvatõmmis) | Allikast teadaolev | –                                                                     |
| 2   | Tudengid vaatavad tunniplaani peamiselt telefonis.                                                    | oma kogemus                        | Eeldus             | Küsida kursusekaaslaselt                                              |
| 3   | Tänase päeva tunnid on avavaates esimesena                                                            | Eeldusest tuletatud                | Disainiotsus       | Kontrollida prototüübiga                                              |
| 4   | Kasutajad vajavad korraga kogu nädala vaadet ühel ekraanil.                                           | AI eeldus (prompti vastusest)      | Eeldus             | Kontrollida, kas mobiilis on päeva vaade parem kui nädala vaade.      |
| 5   | WCAG 2.2 AA kohaselt peab tekstikontrast taustaga olema vähemalt 4.5:1.                               | WCAG 2.2 Standard                  | Allikast teadaolev | Kontrollida https://webaim.org/resources/contrastchecker/             |
| 6   | Ruumi number on tudengile vajalikum info kui õppejõu täisnimi.                                        | Vaatlus vahetunnis                 | Eeldus             | Vaadata ja küsida, mis infot tudengid enne klassi sisenemist otsivad. |
| 7   | Käimasolev loeng tõstatakse esile kontrastsema taustaga.                                              | Kasutajakogemuse hea tava          | Disainiotsus       | Testida prototüübis tajutavust.                                       |
| 8   | Kasutaja tahab näha ühe näpuvajutusega homset tunniplaani.                                            | Eeldus                             | Eeldus             | Testida lihtsat päevade vahelist navigeerimist (swipe / nupud).       |
| 9   | Aine kood ei pea olema esmases vaates                                                                 | Eeldusest tuletatud                | Disainiotsus       | Vähendada ainekoodi visuaalset kaalu ja suurendada aine nime.         |
| 10  | Tunniplaan laeb aeglase mobiilse internetiga alla 2 sekundi.                                          | Kolledži tehniline kontekst        | Allikast teadaolev | Kontrollida brauseri Network tabist teostusfaasis.                    |
| 11  | AI eeldas, et tudeng soovib näha loengu asukoha kaarti/hoone plaanipilti.                             | AI genereeritud kavand             | Eeldus             | Hinnata, kas see on teostatav või tekitab liigset visuaalset müra.    |
| 12  | Värvikoodid aitavad tunde kiiremini eristada.                                                         | UI disainipõhimõtted               | Disainiotsus       | Katsetada suundades erinevaid värvilahendusi.                         |
| 13  | Praegune tunniplaan kuvab liiga palju sekundaarset infot korraga.                                     | Rühma seminarileiud                | Allikast teadaolev | Märkida kuvatõmmisele märkuste lehel (02 References).                 |
| 14  | Nutiseadme ekraanil peab olulisem info (tänased tunnid) olema nähtav ilma lehte allapoole skrollimata | Android Design Guidelines          | Disainiotsus       | testida erinevatel ekraanisuurustel                                   |
| 15  | Filtreerimise osa peab olema selgem                                                                   | Rühma seminarileiud                | Allikast teadaolev | Lisada korralik otsinguriba, et ei peaks pikalt scrollima             |

---

## Allikad ja viited

1. **W3C (2023).** _Web Content Accessibility Guidelines (WCAG) 2.2._  
   Viide: Ligipääsetavuse nõuded, tekstikontrast (AA tase: 4.5:1) ja puutealade miinimummõõtmed (2.4.13 Target Size).  
   Link: [https://www.w3.org/TR/WCAG22/](https://www.w3.org/TR/WCAG22/)

2. **Nielsen Norman Group (NN/g).** _Mobile UI Design & Visual Hierarchy._  
   Viide: Visual Hierarchy in Mobile Interfaces – info prioriseerimine ja "scannability" nutiseadmetes.  
   Link: [https://www.nngroup.com/articles/visual-hierarchy-ux-definition/](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/)

3. **Teiste ülikoolide tunniplaanid**  
   Viide: Teiste Eesti kõrgkoolide tunniplaanilahendused ja info esituse võrdlus.
