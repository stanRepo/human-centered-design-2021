### Let op!

_Testverslagen staan gedocumenteerd in de Wiki_

# Index
[Live demo eindconcept](https://hcd2021.netlify.app)

    + [Let op!](#let-op-)
- [Human Centered Design](#human-centered-design)
- [User scenario](#user-scenario)
- [Onderzoek Drag & drop en bereid vragen voor om aan Marijn te stellen. (Week 1)](#onderzoek-drag---drop-en-bereid-vragen-voor-om-aan-marijn-te-stellen--week-1-)
- [Probleemstelling](#probleemstelling)
- [Oplossing](#oplossing)
- [Conclusies](#conclusies)
  * [Conclusie Week 1](#conclusie-week-1)
  * [Conclusie week 2](#conclusie-week-2)
  * [Conclusie week 3](#conclusie-week-3)
- [Testverslagen](#testverslagen)
- [Exclusive Design Principles (7)](#exclusive-design-principles--7-)
  * [Study situation](#study-situation)
  * [Prioritise identity](#prioritise-identity)
  * [Ignore conventions](#ignore-conventions)
  * [Add nonsense](#add-nonsense)
- [Literatuurlijst](#literatuurlijst)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>



# Human Centered Design

Deze opdracht wordt uitgevoerd als onderdeel van de Minor Web Development aan de Hogeschool van Amsterdam. Hierin staat Exclusive Design centraal. Als uitgangspunt wordt een scenario gekozen waarin een persoon met een fysieke beperking bestudeerd wordt. Hierna wordt er 3 keer op een concept geitereerd met feedback van de gebruiker.

Mijn gebruiker is: Marijn.

_Marijn is waarschijnlijk de beste developer die je ooit gaat ontmoeten. Een briljante nerd. Hij doet al jaren met heel veel plezier mee aan deze opdracht. Marijn heeft een motorische stoornis. Hij gebruikt zijn computer dus anders dan wij. Hij heeft veel moeite met fijne motoriek. Hij gebruikt zijn toetsenbord om te navigeren, en in de Accessibility settings van zijn Mac heeft hij Sticky Keys aan staan._

Voor deze opdracht focus ik mij op de het prototype gebaseerd rondom de Drag & Drop functionaliteit en het bewerken van lijsten met deze functionaliteit.

_Hoe kun je een drag & drop lijst optimaliseren voor een gebruiker die afhankelijk is van zijn toetsenbord én motorisch gestoord is?_

# User scenario

Marijn wilt door meerdere items tegelijk te drag&droppen makkelijker een dashboard organiseren zodat hij tijd bespaard en meer tijd overhoud voor zijn nevenactiviteiten.

# Onderzoek Drag & drop en bereid vragen voor om aan Marijn te stellen. (Week 1)

_Onderzoek_


- In dit artikel wordt geconcludeerd dat een developer die zich focust op toegankelijkheid functionaliteit moeten vermijden die uitsluitend bestemt is voor bediening met de muis. Ook moeten zij snelkoppelingen inbouwen zoals skip-to-content functies en focus-elementen. Deze laatsten moeten de verzuring voor de gebruiker beperken. (4)

- Tijdens het lezen van een webpagina over motor disability (5) las ik dat deze gebruikers vooral moeite hebben met het gebruik van een muis en/of een touchscreen. Ik bedacht me waarom gebruiken we het toetsenbord niet om de muis te besturen. Windows had daar al een oplossing voor. (6) Maar deze oplossing heeft slechts beperkte functionaliteit. Kan ik de functionaliteit van het toetsenbord verder enhancen om het besturen van de muis te verbeteren?

- Ik ben benieuwd of Marijn naast de native oplossingen voor het vermijden van een muis ook gebruik maakt van browser extensies zoals bijvoorbeeld Keyboard-Surfing(8) voor chrome?


_Vragen_

Onderstaande vragen had ik zelf voorbereid. In groepsverband is ervoor gekozen om al onze vragen samen te voegen en de belangrijkste te stellen.


1. Omdat Marijn erg afhankelijk is van zijn toetsenbord vraag ik mij af welke toetsen hij de voorkeur aan geeft voor de basisbewegingen omhoog, naar beneden, naar links en naar rechts. Gebruikt hij liever pijltoetsen of WASD zoals gamers vaak doen.

2. Is het handig om shortcuts te maken? bijvoorbeeld 2 toetsen indrukken om naar lijst-A te springen en 2 andere om naar lijst-B te springen.

3. Gebruikt Marijn ARIA-Dropeffect wanneer dit beschikbaar is? Zo ja, welke

4. Hoe komt Marijn er achter dat er een skip-to-content functie op een pagina is en gebruikt hij deze? Wat zijn zijn ervaringen hiermee?

5. Kun je je toetsenbord gebruiken om je muis te besturen. Is het handig om met de shift knop de snelheid te bepalen waarmee je de muis bestuurd. Of misschien wel met de numpad(na een activatie handeling?) Is het makkelijker dan tabben?

6. Maakt marijn gebruik van chrome extensies om zijn werk te doen? Bijvoorbeeld Keyboard-Surfing(8) voor chrome?

# Probleemstelling

Door Marijn zijn handicap kost het hem veel moeite op zijn fijne motoriek te gebruiken. In het geval van organisatorische werkzaamheden bij bijvoorbeeld het wijzigen van lijstjes kan dit voor Marijn al tot grote irritaties leiden. Het kost hem relatief veel tijd om iets te selecteren, te klikken, te slepen naar de juiste plek, en daar vervolgens weer klikken of in het ergste geval de linkermuisknop dan pas los laten (in het geval van drag en drop). 

# Oplossing

Ik heb voor Marijn een multi-select concept uitgewerkt [Live Demo](https://hcd2021.netlify.app). De interactie is gebouwd rondom het gebruik van een trackpad omdat Marijn aan gaf dat dit voor hem beter zou werken dan tabben en veel verschillende knoppen. Marijn kan in dit concept in tegenstelling tot conventionele drag en drop systemen meerdere items uit het lijstje selecteren waarna ze "aan zijn muis plakken". Vervolgens kan hij de actie uitvoeren die hij voor ogen heeft voor deze items. In mijn concept zijn die acties verplaatsen en/of verwijderen. 

Tijdens de test in week 2 met Vasilis en de test met Marijn in week 3 kreeg ik een goede respons van beide testpersonen. De reden waarom dit concept aanslaat is de beperking van het aantal verplaats (muis) en klik (muis) handelingen. Er passen nu meerdere items in "het handje" van de gebruiker. Doordat Marijn niet per item naar de specifieke locatie voor de daaropvolgende actie hoeft te gaan maar meerdere items kan selecteren zonder dat zijn UI te veel besmeurd wordt (er "kleeft" een verkleinde versie aan de muis) kan hij met veel gemak deze handeling uitvoeren. 


# Conclusies

## Conclusie Week 1

In tegenstelling tot het artikel uit mijn desk research gebruikt Marijn het liefst geen knoppen. Naar eigen zeggen "hoe minder tabben, hoe beter". Dit komt omdat hij juist met het indrukken van een specifieke knop veel problemen ervaart. Zijn fijne motoriek laat hem daar meer in de steek dan bij het gebruik van zijn trackpad. Hij gebruikt dan ook nog graag zijn trackpad. Daarom heb ik vanaf week 1 mij gefocust op het implementeren van drag&drop functionaliteit waarbij Marijn zijn trackpad kan gebruiken.

_Gezamelijk document_

Naast de informatie die ik zelf heb opgezocht heeft de werkgroep waar ik toe behoor ook samen in een document gewerkt. Die vind je [hier](https://docs.google.com/document/d/1crOSkO_FPe3sheL5gkQYl8OmMcbRSDq092uVghG5HdA/edit?usp=sharing)

Tijdens week 1 heb ik tevens nog onderzoek gedaan naar het besturen van de muis van een gebruiker d.m.v. javascript in een chrome extensie. Het leek mij toen interessant om Marijn de mogelijkheid te geven om als een gamer met verschillende snelheidsbesturende knoppen zijn muis te laten besturen. Echter ben ik tot de conclusie gekomen dat dit uit veiligheidsoverwegingen niet kan. Na de eerste test kwam ik tevens tot de conclusie dat het voor Marijn toch heel moeilijk was geworden om zijn muis op die manier te besturen. 

## Conclusie week 2

De test is goed gelukt. De feedback beslaat vooral UI gerelateerde punten. Vasilis (=testpersoon deze test) geeft aan dat het voor hem nog niet duidelijk is dat er een multi-select interactiemodel schuil gaat in de site. Hij kan het per ongeluk helemaal niet gebruiken. Als in: Doordat hij niet kan zien dat het bestaat begrijpt hij niet goed hoe het concept gebruikt moet worden en daardoor gaat hij als testpersoon per ongluk op de oude "conventionele" manier 1 voor 1 verplaatsen. Dit is een interessant inzicht en het laat zien dat ik nog meer aandacht moet besteden aan het zichtbaar maken van de interactie mogelijkheden. 

Het begrip dat hiervoor gebruikt wordt is: Affordance. (je ziet een deurklink, je begrijpt dat de handeling open een deur een mogelijkheid is nu.)

## Conclusie week 3

Aanvullend op de test uit week 2 heb ik nu meer aandacht besteed aan het inzichtelijk maken van de interactie mogelijkheden. Ik kwam tot de conclusie dat er meerdere wegen te bewandelen zijn. Ik heb er voor gekozen om de cursor te stylen voor de verschillende "handelingen" die gedaan kunnen worden. Zo diend heet voor de gebruiken visueel duidelijker te worden dat er naast dat hij al iets heeft opgepakt, nog steeds iets extra opgepakt kan worden.

De belangrijkste vraag tijdens test 3 is of Marijn zonder uitleg begrijpt dat hij meerdere items kan selecteren. Dit is helaas nog niet het geval. 

- Hij geeft aan dat er meer forgiveness toegevoegd diend te worden zodat zijn "gebruikersfoutjes" makkelijk even ongedaan kunnen worden gemaakt. 

- Ook diend er nog meer afforcance te worden toegevoegd.
 


# Testverslagen

_Test Week 1_ 

Omdat dit de eerste week is heeft de groep die ingedeeld is bij Marijn zich verdeeld in 2 subgroepen. Hier zijn in groepsverband tests voor gemaakt.

Alle testverslagen staan in de Wiki van deze repository:

[Testverslagen](https://github.com/stanRepo/human-centered-design-2021/wiki)

# Exclusive Design Principles (7)


1. Provide a unique experience
2. Ignore situation
3. Be inconsistent/innovative
4. Take control
5. Offer the best possible solution
6. Prioritise identity
7. Add Nonsense


##  Study situation

Study situation slaat op het duiken in een persoonlijke situatie van een testpersoon. Hierbij kijk je exclusief naar de ervaring, interactie en gevoel van jou testpersoon bij het verrichten van een bepaalde taak en de handelingen die daarbij horen. Dankzij Study situation kan een correct beeld geschets worden waar testen met een persoonlijke weerslag uit voort kunne komen. Een goed begin is het halve werk. Ook maakt het bestuderen van verschillende situaties mensen tot betere designers omdat ze daar dan ook meer ervaring mee werven binnen deze specifieke groep mensen met unieke probleemstellingen (t.o.v. de massa). Ik heb Study situation toegepast tijdens dit vak door (ook in deze readme) een beeld te schetsen van wie Marijn is en in welke situatie hij verkeerd wanneer hij dit soort organisatorische taken probeerd uit te voeren. 

## Prioritise identity

Maak het ontwerp gebaseerd op 1 persoon, namelijk de testpersoon. En gebruik hierbij als uitgangspunt de identiteit van deze testpersoon. Hiermee maak je het concept persoonlijker wat zijn weerslag geeft op de gebruikerservaring. Doordat het zo persoonlijk wordt kunnen er ook andere ervaringen/inzichten boven water komen die met een algemene onpersoonlijk concept niet aangesproken werden.

## Ignore conventions

Negeer de "gebruikelijke" oplossingen. Probeer out-of-the-box te denken. Iets abnormaals wat bijzonder goed werkt voor deze testpersoon is beter dan iets "normaals" wat niet goed aansluit. Ik heb dit in mij opdracht toegepast doordat multi-select met eenj "kleverige" muis een niet conventionele oplossing is. 

## Add nonsense

Nonsense maakt iets leuk, grappig en daarom ook extra interessant om te gebruiken. Dit leid tot meer interactie tijdens de test van de testpersoon en dit kan een bron van nieuwe waardevolle informatie zijn. In mijn test heb ik het idee "Wat gaan we eten pap?" geimplementeerd omdat Marijns zoon dat tijdens de eerste test aan hem vroeg. Ik bedacht me dat dit al een behoorlijk complexe keuze moet zijn voor Marijns gezin. Daarom heb ik veel verschillende opties erin gezet zodat er genoeg te kiezen valt. 

# Literatuurlijst

1. Drag & drop Interaction Patterns. https://medium.com/salesforce-ux/4-major-patterns-for-accessible-drag-and-drop-1d43f64ebf09

2. Accessible Drag And Drop Using WAI-ARIA. Gez Lemon. Articles. 08-07-2009. https://dev.opera.com/articles/accessible-drag-and-drop/

3. Sticky Keys. Appligent. https://appligent.com/keyboard-accessibility-mouse-alternatives/sticky-keys/

4. Motor Disabilities and what you need for accessibility. Chris Ward. Telerik. 30-07-2019. https://www.telerik.com/blogs/motor-disabilities-and-what-you-need-for-accessibility

5. How we can help. Atalan. https://www.atalan.fr/agissons/en/handicap-moteur.html

6. Use the mouse keys to move the mouse pointer. Microsoft Support. https://support.microsoft.com/en-us/windows/use-mouse-keys-to-move-the-mouse-pointer-9e0c72c8-b882-7918-8e7b-391fd62adf33

7. Exclusive Design Principles. Vasilis van Gemert. https://vasilis.nl/nerd/exclusive-design-principles/

8. Keyboard-Surfing. Somnia. https://chrome.google.com/webstore/detail/keyboard-surfing/hmaflaokeodbfghjjgmakejjjjfhihpi?hl=en
