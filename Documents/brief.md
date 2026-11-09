### Lähteolukord

Praegune kolledži tunniplaan koondab õppetöö ühes kohas, aga kasutaja kogemus on kehv. Olemasolev lahendus võimaldab vaadata tunniplaani päeva, nädala ja kuu kaupa ning otsida infot kursuse, aine ja õppejõu järgi.

- **Mis töötab:** Info on olemas (ruumid, õppejõud, kellaajad, aine nimetused). Olemas on erinevad ajavaated ja otsingufilter.
- **Mis on segane:** Visuaalse hierarhia puudumine ei toeta info lihtsat leidimst, mobiilivaate puhul võib info rohkus ja paigutus muuta ebamugavaks. Palju tühja ruumi, samas tekst on väike ja osa lisainfost ja lühendite selgitustest ei ole esmapilgul nähtavad.
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
**Miks:** Tunniplaani üks peamisi kasutusvajadusi on õppetöö aja ja koha kontrollimine. Eriti oluline on see olukordades, kus kasutajal on vaja infot kiiresti leida, näiteks vahetunnis või enne järgmise loengu algust.

### Avatud küsimused

1. Kas tunniplaanis peaks kuvama ka reaalajas muudatusi (nt ära jäänud loengud / asendusruumid)?
2. Kas kasutaja vajab vaatesse ka nädala ülevaadet või rippmenüüd teiste päevade valikuks?
3. Kas kasutaja peab nägema ka teiste kursuste tunniplaani
4. Kas ruumi järgi filtreerimine on oluline?
5. Kui mugav on tunniplaani kasutada telefonis?
6. Kas kõiki funktsioone saab kasutada klaviatuuriga?
7. Kas kasutaja näeb arusaadavalt, millised filtrid on kasutusel.

---

## Väidete tabel

| #   | Väide                                                                                                 | Allikas                            | Liik               | Kuidas täpsustada                                                                                                      |
| :-- | :---------------------------------------------------------------------------------------------------- | :--------------------------------- | :----------------- | :--------------------------------------------------------------------------------------------------------------------- |
| 1   | Tunniplaanis on kirjas ruumi number, kellaaeg ja õppejõu nimi.                                        | Olemasolev tunniplaan (kuvatõmmis) | Allikast teadaolev | –                                                                                                                      |
| 2   | Tudengid vaatavad tunniplaani peamiselt telefonis.                                                    | oma kogemus                        | Eeldus             | Küsida kursusekaaslaselt                                                                                               |
| 3   | Tänase päeva tunnid on avavaates esimesena                                                            | Eeldusest tuletatud                | Disainiotsus       | Kontrollida prototüübiga                                                                                               |
| 4   | Kasutajad vajavad korraga kogu nädala vaadet ühel ekraanil.                                           | Eeldus                             | Eeldus             | Kontrollida, kas mobiilis on päeva vaade parem kui nädala vaade.                                                       |
| 5   | WCAG nõuded puudulikud                                                                                | WCAG 2.2 Standard                  | Allikast teadaolev | Kontrollida https://webaim.org/resources/contrastchecker/                                                              |
| 6   | Ruumi number on tudengile vajalikum info kui õppejõu täisnimi.                                        | Vaatlus vahetunnis                 | Eeldus             | Vaadata ja küsida, mis infot tudengid enne klassi sisenemist otsivad.                                                  |
| 7   | Käimasolev loeng tõstatakse esile kontrastsema taustaga.                                              | Kasutajakogemuse hea tava          | Disainiotsus       | Testida prototüübis tajutavust.                                                                                        |
| 8   | Kasutaja tahab näha ühe näpuvajutusega homset tunniplaani.                                            | Eeldus                             | Eeldus             | Testida lihtsat päevade vahelist navigeerimist (swipe / nupud).                                                        |
| 9   | Aine kood ei pea olema esmases vaates                                                                 | Eeldusest tuletatud                | Disainiotsus       | Vähendada ainekoodi visuaalset kaalu ja suurendada aine nime.                                                          |
| 10  | Värvikoodid aitavad tunde kiiremini eristada.                                                         | UI disainipõhimõtted               | Disainiotsus       | Katsetada suundades erinevaid värvilahendusi.                                                                          |
| 11  | Praegune tunniplaan kuvab liiga palju sekundaarset infot korraga.                                     | Rühma seminarileiud                | Allikast teadaolev | Märkida kuvatõmmisele märkuste lehel (02 References).                                                                  |
| 12  | Nutiseadme ekraanil peab olulisem info (tänased tunnid) olema nähtav ilma lehte allapoole skrollimata | Allikast teadaolev                 | Disainiotsus       | mobiilivaates paigutatakse kõige sagedamini vajatav info visuaalselt esiplaanile ning välditakse tarbetut skrollimist. |
| 13  | Filtreerimise osa peab olema selgem                                                                   | Rühma seminarileiud/Vaatlus        | Allikast teadaolev | Lisada korralik otsinguriba, et ei peaks pikalt scrollima                                                              |
| 14  | Kuupäeva vahemiku otsingu loogika on keeruline                                                        | Rühma seminarileiud/Vaatlus        | Allikast teadaolev | Funktsionaalsus on kirjeldatud juhendis, aga peaks olema selgemalt arusaadav                                           |
| 15  | Erialade lühendid ei ole esmakursuslasele ehk arusaadavad ja lühendite selgitused on "peidus"         | Allikast teadaolev/Isiklik kogemus | Disainiotsus       | oluline info peaks olema piisavalt nähtav, mitte peidetud                                                              |

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
   TalTECH - https://tunniplaan.taltech.ee/#/public
   AVARA - https://avara.edu.ee/tunniplaan/
