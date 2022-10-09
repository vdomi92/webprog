Feladatok leírásai:

JavaScript csoport ZH minta 1.
Végezd el az alábbi műveleteket a megadott adatokkal! Az eredményt a konzolra írjad! A megoldáshoz nem kell függvényeket létrehoznod.
```
 const numbers = [5, 2, 15, -3, 6, -8, -2];

 const matrix = [
   [1, 0, 3],
   [0, 2, 0],
   [4, 5, 6],
   [0, 0, 0],
 ]

 const searchResults = {
   "Search": [
     {
       "Title": "The Hobbit: An Unexpected Journey",
       "Year": "2012",
       "imdbID": "tt0903624",
       "Type": "movie"
     },
     {
       "Title": "The Hobbit: The Desolation of Smaug",
       "Year": "2013",
       "imdbID": "tt1170358",
       "Type": "movie"
     },
     {
       "Title": "The Hobbit: The Battle of the Five Armies",
       "Year": "2014",
       "imdbID": "tt2310332",
       "Type": "movie"
     },
     {
       "Title": "The Hobbit",
       "Year": "1977",
       "imdbID": "tt0077687",
       "Type": "movie"
     },
     {
       "Title": "Lego the Hobbit: The Video Game",
       "Year": "2014",
       "imdbID": "tt3584562",
       "Type": "game"
     },
     {
       "Title": "The Hobbit",
       "Year": "1966",
       "imdbID": "tt1686804",
       "Type": "movie"
     },
     {
       "Title": "The Hobbit",
       "Year": "2003",
       "imdbID": "tt0395578",
       "Type": "game"
     },
     {
       "Title": "A Day in the Life of a Hobbit",
       "Year": "2002",
       "imdbID": "tt0473467",
       "Type": "movie"
     },
     {
       "Title": "The Hobbit: An Unexpected Journey - The Company of Thorin",
       "Year": "2013",
       "imdbID": "tt3345514",
       "Type": "movie"
     },
     {
       "Title": "The Hobbit: The Swedolation of Smaug",
       "Year": "2014",
       "imdbID": "tt4171362",
       "Type": "movie"
     }
   ],
   "totalResults": "51",
   "Response": "True"
 }
```
a. A numbers tömb mindegyik eleméhez rendeld hozzá a négyzetét! (0,5 pont)
b. Keresd ki a numbers tömb legkisebb elemét! (Ha kell, használhatod az Infinity értéket JavaScriptben.) (0,5 pont)
c. Add meg a matrix mátrixnak azt a sorindexét, amelyben csupa 0 érték van! Ha nincs ilyen, -1-et adj vissza! (1 pont)
d. Add vissza azokat az IMDB azonosítókat (imdbID) a searchResults nevű mozikeresési eredményből, amelyek olyan filmekhez tartoznak, amelyek 2010 utániak (Year mező) és a típusuk (Type) movie. (1 pont)
Adott az oldalon három range slider, aminek segítségével meg lehet adni egy szín hue, saturation és lightness értékét. Technikai segítség: CSS-ben a hsl(120, 60%, 70%) formátumban is meg lehet adni a színeket!
```
 <form>
   Hue: <input type="range" min="0" max="360" value="0"> <br>
   Saturation: <input type="range" min="0" max="100" value="50"> <br>
   Lightness: <input type="range" min="0" max="100" value="50"> <br>
   <button type="button">Set background color</button> <br>
   HSL string: <input type="text" readonly>
 </form>
 ```
a. A gombra kattintva írd ki a generált hsl CSS színkódot a "HSL string" szöveg utáni szöveges beviteli mezőbe! (1 pont)
b. A gombra kattintva állítsd be az oldal háttérszínét a kiválasztott értékeknek megfelelően! (1 pont)
c. Oldd meg, hogy ne csak a gombra, hanem a slidereket húzogatva azonnal változzon meg a háttérszín! Technikai segítség: használd a sliderek input eseményét! (1 pont)
Adott az oldalon egy kontaklista az alábbi HTML szerkezetben. Minden kontaktnál van három gomb, amelyek a megfelelő információt fedik fel a kontakt adataiból. Egyetlen elem egyetlen eseménykezelő függvényével oldd meg az alábbi feladatokat!
```
 <div id="contacts">
   <section>
     <p class="name">Name: A</p>
     <p class="email" hidden>Email of A</p>
     <p class="address" hidden>Address of A</p>
     <p class="phone" hidden>Phone of A</p>
     <p>
       <button data-toggle="email">Email</button>
       <button data-toggle="address">Address</button>
       <button data-toggle="phone">Phone</button>
     </p>
   </section>
   <section>
     <p class="name">Name: B</p>
     <p class="email" hidden>Email of B</p>
     <p class="address" hidden>Address of B</p>
     <p class="phone" hidden>Phone of B</p>
     <p>
       <button data-toggle="email">Email</button>
       <button data-toggle="address">Address</button>
       <button data-toggle="phone">Phone</button>
     </p>
   </section>
   <section>
     <p class="name">Name: C</p>
     <p class="email" hidden>Email of C</p>
     <p class="address" hidden>Address of C</p>
     <p class="phone" hidden>Phone of C</p>
     <p>
       <button data-toggle="email">Email</button>
       <button data-toggle="address">Address</button>
       <button data-toggle="phone">Phone</button>
     </p>
   </section>
 </div>
 ```
a. Írd ki a konzolra a kattintott gomb feliratát és data-toggle értékét! (1 pont)
b. A gombra kattintva írd ki a konzolra a kontakt nevét! Ha nem a gombra kattintunk, akkor ez ne történjen meg! (1 pont)
c. Bármelyik gombra kattintva tedd láthatóvá az adott kontakt email mezőjét! (1 pont)
d. Egy gombra kattintva tedd láthatóvá azt a mezőt, amely a gomb data-toggle értékében van megadva! (1 pont)
