###Reikalingi irankiai

* Git - versijavimo sistema kuria naudosim.
  * Idiegimas - https://git-scm.com/download/win
  * Tutorial - https://try.github.io/levels/1/challenges/1
* Node
  * Idiegimas - https://nodejs.org/en/ (v8.4.0)
  
### pasileidimas
* ``npm install``
* ``npm start``

### URL
``http://localhost:3000``


### info

Visi resursai (nuotraukos, iconeles, css, js) keliaus i public direktorija:
* Nuotraukos 
  * ikeliauja i ``public/img/labas.jpg``
  * pasiekiama puslapyje ``/img/labas.jpg``
  
* CSS 
  * ikeliauja i ``public/css/app.css``
  * pasiekiama puslapyje ``/css/app.css``
  
* JS
  * ikeliauja i ``public/js/app.js``
  * pasiekiama puslapyje ``/js/app.js``
  
 ### HTML
 
 Musu HTML guli ``views`` direktorijoj. Pavadinimas turetu tureti tokia konvencija:
 
 ``pavadinimas.handlebars``
 
 pvz:
 * ``pagrindinis.handlebars``
 * ``apie.handlebars``
 
 Ekvivalentiskai jie bus pasiekiami pagal pavadinima:
 
 * ``pagrindinis.handlebars`` - ``http://localhost:3000/pagrindinis`` 
 * ``apie.handlebars`` - ``http://localhost:3000/apie`` 
 
 Galune turi buti ne .html bet .handlebars.
 