# Otsused

Esialgu valisin edasiarendamiseks algselt Suuna A, kuna selle selge ja kõrge kontrastiga "Järgmine tund" kaart lahendab kõige otsemalt tudengi põhikasutusjuhtumi ehk kiire infovajaduse järgmise tunni kohta. Kuid süsteemi luues tundsin siiski, et suund B täidab eesmärki paremini. Sisult olid suunad sarnased. Mõlemad tegi Claude sama lähteülesande ja andmete põhjal.
Suund B-s on visuaalne hierarhia paigas. Käimasolev või järgmine loeng on koheselt esil ning järgnevad tunnid jäävad veidi tahaplaanile.
Suund B on rahulik ja selge. Punane on ainult kellaaeg, mitte nagu suunas A, kus on terve kaart punane. See seostub paremini moodboardil välja toodud märksõnaaga "rahulik".

Disainiotsusena võin välja tuua, et mobiilivaates on esimesena nähtavale vaid täna ja praegu oluline sisu. Selline lahendus sobitub täiuslikult Haapsalu kolledži kaasaegse identiteediga ja vähendab tudengi hommikust stressi.
Värvidega peab veel veidi katsetama. Kindlasti tahan HK rohelist veidi kasutada, mida B suunas saab kenasti teha, et ei muutuks liialt häirivaks.

Suunas A oli tundinde vahel märgitud ka vahetunni aeg. Suunda B ma seda hetkel sisse ei pannud. Eeldus, et kasutaja suudab selle ise välja mõelda.

## 2026-11-12 – Päevavaade on avavaade

**Otsus:** avavaates on tänane päev, nädalavaade on teisel tasandil.
**Põhjus:** põhikasutusjuhtum on "kus ja mis kell on järgmine tund".
**Alternatiivid:** nädalavaade avavaatena
**Allikas või eeldus:** eeldus, et tudeng vaatab tunniplaani peamiselt sama päeva kohta. Näiteks lõunalt kooli poole kõndides.

## 2026-11-10 – Kuupäevanooled ja rühma rippmenüü jäävad esialgu ära

**Otsus:** kuupäev ja rühm „RIF 2" on päises tavalise tekstina, ilma noolte ja rippmenüüta.
**Põhjus:** kontrollitud andmeid on ainult ühe päeva (12.11.2026) ja ühe rühma kohta. Toimivad nooled näitaksid tühja päeva, mittetoimivad aga eksitaksid kasutajat.
**Alternatiivid:** nooled ja rippmenüü keelatud (`disabled`) olekus, et paigutus vastaks Figmale; toimivad nooled tühja päeva teatega.
**Allikas või eeldus:** lähteülesanne nõuab 12. novembri RIF2 päevavaadet; reegel „ära lisa funktsioone, mida lähteülesanne ei nõua".

## 2026-11-10 – HK roheline ainult rühmatähise ringina

**Otsus:** roheline `#A4D65E` on kasutusel ainult rühmatähise „RIF 2" ümber oleva ringina.
**Põhjus:** soov tuua suunast B kaasa HK roheline, ilma et see konkureeriks punase „Järgmine tund" kaardiga. Rohelise kontrast valgel on u 1,6:1, seega sobib see ainult kaunistuseks, mitte tekstiks.
**Alternatiivid:** roheline olekusilt („Täna"), nagu suunas B; suund A ilma roheliseta.
**Allikas või eeldus:** autori otsus; WCAG 2.2 1.4.3 ja 1.4.11. Kui rühmatähis muutub rippmenüüks, tuleb piirjoone kontrast tõsta vähemalt 3:1 peale.

## 2026-11-10 – Puuduv ruum kuvatakse selgelt

**Otsus:** kui ruum pole tunniplaanis märgitud, on kaardil „Ruum: tunniplaanis märkimata" ja loendis „Ruum märkimata".
**Põhjus:** ruum on põhikasutusjuhtumi osa. Tühi koht jätaks mulje, et info on kadunud või leht katki, ja ruumi välja mõelda ei tohi.
**Alternatiivid:** ruumi rida peita; kriips „–".
**Allikas või eeldus:** tunniplaani kuvatõmmis (veerg KOHT tühi); suuna A kujundus.

## 2026-11-10 – Järgmine tund arvutatakse kellaaja järgi

**Otsus:** kaart näitab käimasolevat tundi („Käimasolev tund"), selle puudumisel järgmist („Järgmine tund"). Kui kõik tunnid on läbi, on kaardil „Selle päeva tunnid on läbi." Silt „Täna" on päises ainult tunniplaani päeval.
**Põhjus:** brief'i järgi puudub praegu „täna ja praegu" fookus. Staatiline „järgmine tund" muutuks pärast esimest tundi valeks.
**Alternatiivid:** alati esimene tund esile tõstetud (staatiline kavand).
**Allikas või eeldus:** brief „Mis puudub"; eeldus, et kasutaja seadme kell on Eesti ajas.

## 2026-11-10 – Ainekood ja maht jäävad põhivaatest välja

**Otsus:** põhivaates on aeg, aine nimi, ruum ja õppejõud. Ainekood (nt HKI5122.HK) ja maht on andmefailis, aga ei kuvata.
**Põhjus:** tudeng otsib vahetunnis aega, ainet ja ruumi; kood ja maht lisavad müra.
**Alternatiivid:** kood väikeses kirjas aine nime all (nagu suunas B).
**Allikas või eeldus:** suund A; väidete tabel nr 9 („Aine kood ei pea olema esmases vaates").

## 2026-11-10 – Mobiil esimesena, murdepunkt 800 px

**Otsus:** kitsal ekraanil on kaart ja loend üksteise all, alates 800 px kõrvuti (kaart vasakul).
**Põhjus:** põhikasutus on telefonis portrait-vaates; järgmine tund peab olema nähtav ilma kerimata.
**Alternatiivid:** eraldi mobiili- ja arvutivaade.
**Allikas või eeldus:** brief „Kasutusolukorrad"; suuna A mobiili- ja arvutikavand.

## 2026-11-23 – Navigeerimine

**Otsus:** Lisan siiski vaated Täna/Homme/Nädal/Kuu.
**Põhjus:** õpilane leiab need samast kohast kus vanas tunniplaanis harjunud.
**Alternatiivid:** dropdown näiteks.
**Allikas või eeldus:** suund B eelvaade.

## 2026-11-23 – puuduva info eristamine

**Otsus:** Kui ruum( või muu info) pole märgitud, siis on eraldi silt katkendjoonega.
**Põhjus:** Info eristamine paremini ja selgemalt.
**Alternatiivid:** Suunas A oli puuduv ruum lihtsalt tekts.
**Allikas või eeldus:** Info selgus ja eristatavus.

## Lõplikud otsused:

- Värvid:
  Tulevad moodboardist ja TLÜ enda visuaalsest identiteedist. Punane on rõhuvärv, roheline "täna" sildile, heledam hall taustaks ja tumedam hall põhi kirjaks. Üldpilt peaks jääma rahulik ja neutraalne.

- Font:
  Inter - kuna see on hästi loetav, neutraalne ja klassikaline ning toetab täpitähti. Üks font kogu lehel. Suurus ja kaalud lisavad hierarhia.

- Tüpograafia skaala:
  12 / 14 / 16 / 20 / 24 / 32 / 48 – klassikaline skaala, mille astmed on selgelt eristuvad.

- Desktopi ja mobiili moodid:
  kuna destopil olev 48ps kellaajana ei mahu mobiililaiusele.

- label/size mobiilis 12 px:
  mobiilis on mõned nupud ja stiilid kompaktsemad.

- Tume teema puudub:
  Kuna oli valikuline, siis keskendusin nõutud osadele.

-Ruum tunniplaanis:
12.11 tunniplaanis oli ruumi veerg tühi, seega näitab põhivaade „Ruum märkimata“ ja room-tag varianti room=missing. Komponendi näidistekstiks jätsin „Ruum 205“, sest enamasti on ruumid tunniplaanis märgitud. Märkimata ruumi kuvab katkendliku joonega.

- Pika teksti test:
  Testis tuli välja, et pika teksti puhul murdub nimetus poole sõna pealt. Muutsin tokeni fonti 24 pealt 20 px peale.

##Kasutatud AI tööriistad:

- Claude artefakt, mis lõi suuna esialgsed kavandid
- Claude + Figma plugin, mis sai muuta otse Figma faile.

1. Claude tegi kavandi.
   Mina andsin ette moodboardi, märksõnad, värvid (TLÜ CVI), fondi valik.

2. Lõin ise primitiivid ja tokenid. Claude kontrollis nimetused üle ja lisas enamus muutujatele code syntax. Mõned tegin alguses ise, et teada, kuidas see käib.

3. Direction failis AI korrastas paigutuse, parandas märkuseid ja lasin lisada logo ploki, mille andsin ette TLÜ lehelt.

4. Foundation lehel korrastas AI samuti paigutust ja märkuseid.

5. Pooled komponendid tegin ise harjutamise mõtttes, pooled tegi AI.
