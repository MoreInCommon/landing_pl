# Treści sześciu stron — rozpiska z DOCX

Źródło: `zmiany na stronie (1).docx`, przekazane przez użytkownika. To odwzorowanie materiału redakcyjnego, nie polecenie publikacji. Aktualny plan użytkownika ma pierwszeństwo nad tabelą menu w dokumencie: **sześć stories w root, drafty, menu i ostateczne URL-e ustalamy później**.

Nie wprowadzono zmian w CMS. Nazwy techniczne bloków wynikają z repozytorium; ich dostępność w `page.body` trzeba sprawdzić w panelu Storybloka.

## 1. Wspólne zasady

- Otworzyć istniejące story typu `page`, edytować `body`; nie tworzyć duplikatów.
- Dodać jeden `page title`, uzupełnić pole `title`.
- Wprowadzenie można umieścić w `page lead.text`; ten komponent wyświetla zwykły tekst, nie Rich Text.
- Dalszą treść umieszczać w `long text.text`. Można podzielić ją na kilka takich bloków, aby pomiędzy nimi dodać zdjęcia lub inne sekcje.
- `trivia container` i `contact card` można też osadzić bezpośrednio w `long text.text` przez opcję wstawiania bloku w edytorze Rich Text. Jeśli wybór komponentów jest ograniczony, dopuścić obie nazwy w konfiguracji pola `text` komponentu `long text` w Storybloku. Oba komponenty mają tę samą maksymalną szerokość co standardowe akapity `long text` (820 px) i są wyśrodkowane, zarówno osobno, jak i wewnątrz Rich Text.
- Akapit w `long text` z jawnie ustawionym wyrównaniem (`textAlign`: `left`, `center`, `right` lub `justify`) pomija `CenterContainer` i korzysta z szerszego układu z bocznymi odstępami. Wyrównanie i pogrubienie są zachowane. Bez tego ustawienia akapit zachowuje dotychczasową szerokość. Dotyczy akapitów, nie nagłówków ani osadzonych bloków; nie wymaga nowego pola w schemacie CMS.
- Nagłówki sekcji oznaczać H2, podsekcji H3; nie dodawać kolejnego H1 w treści.
- Wklejać treść bez formatowania Worda, następnie odtworzyć nagłówki, pogrubienia i listy w edytorze CMS.
- Instrukcji redakcyjnych w nawiasach, strzałek opisujących działanie strony i placeholderów zdjęć nie wklejać jako treści dla czytelnika.
- Uzupełnić `seo.title`, `seo.description`, ewentualnie `seo.image`. Dokument nie zawiera osobnych tekstów SEO; są do przygotowania i zatwierdzenia.
- Zapis przez **Save**, bez **Publish**. Następnie odświeżyć aktywny podgląd.

### Odstępy między punktami listy

Kod `long text` obsługuje opcjonalne pole `list_spacing`. Aby udostępnić je autorom, trzeba dodać je do schematu komponentu w Storybloku (sama zmiana kodu nie tworzy pola w CMS):

1. W konfiguracji komponentu `long text` dodać pole **Single-Option** o nazwie technicznej `list_spacing`, z etykietą **Odstępy między punktami**.
2. Dodać opcje: **Małe** → `compact`, **Standardowe** → `standard`, **Duże** → `spacious`. Ustawić domyślną wartość `standard`; pole pozostawić opcjonalne.
3. Dodać opis pola: „Odstępy między punktami wszystkich list punktowanych w tym bloku tekstowym”. Zapisać schemat.
4. Autor otwiera blok **Long Text**, wybiera odstępy w nowym polu obok Rich Text, zapisuje treść i sprawdza podgląd. Dla listy tematów na stronie „Wystąpienia i prezentacje” wybrać **Małe**.

Ustawienie obejmuje wszystkie listy punktowane w danym bloku `long text`, także zagnieżdżone; nie zmienia list numerowanych ani odstępów między zwykłymi akapitami. Jeśli listy mają mieć różne odstępy, umieścić je w osobnych blokach `long text`. Brak pola, pusta lub nieznana wartość zachowuje dotychczasowy wygląd. Margines między elementami listy wynosi odpowiednio 4, 16 i 24 px; wewnętrzne marginesy akapitów nadal wynikają ze wspólnych stylów strony.

Do działania na stronie potrzebne są zarówno wdrożenie aktualnego kodu, jak i dodanie pola w CMS. Ta instrukcja nie oznacza, że schemat został już zmieniony w Storybloku.

## 2. Kompas Społeczny — `/kompas-spoleczny`

DOCX opisuje program strategicznej współpracy, nie aplikację ani quiz. W dokumencie są dwa następujące po sobie nagłówki „Kompas społeczny” / „Kompas Społeczny”; na stronie wyświetlić tytuł tylko raz.

Kolejność bloków:

1. `page title.title`: **Kompas Społeczny**.
2. `page lead.text`: **Od wiedzy o społeczeństwie do skuteczniejszej komunikacji**.
3. `long text.text`: trzy pytania z akapitu zaczynającego się od „Jak mówić o ważnych sprawach społecznych…”.
4. W tym samym lub kolejnym `long text` sekcja **Czym jest Kompas Społeczny?**: definicja programu, trzy punkty od „Od 2025 roku…”, następnie akapity o edycjach i współpracy indywidualnej.
5. Sekcja **Jak wygląda proces**: cztery numerowane etapy, od rozpoznania celów do przełożenia strategii na działania. Zachować treść i kolejność z DOCX.
6. Sekcja **Co wyróżnia nasze podejście?** jako `trivia container`: cztery kafelki z samymi hasłami „Patrzymy dalej niż demografia”, „Łączymy badania z praktyką”, „Wychodzimy poza grono przekonanych”, „Nie szukamy komunikacji «dla wszystkich»”. Bez rozwijających opisów. Układ 2×2 na komputerze, jedna kolumna na telefonie.
7. Sekcja **Porozmawiajmy o współpracy** i dwa akapity zaproszenia do kontaktu.
8. Kontakt do Beaty według sekcji 7 poniżej.
9. Sekcja **Z kim już pracowaliśmy?**: logotypy dotychczasowych partnerów, potem opinie organizacji uczestniczących w Kompasie i Amnesty.

Materiały do uzupełnienia:

Konfiguracja kafelków w Storybloku (kod jest przygotowany; schemat wymaga ustawienia w CMS):

1. Utworzyć zagnieżdżalny komponent `trivia container` (etykieta „Kafelki”).
2. Dodać pole `title` typu Text oraz `items` typu Blocks, dopuszczające istniejący komponent `trivia`.
3. Dopuścić `trivia container` w `page.body`, jeśli lista komponentów jest ograniczona.
4. W `Body` strony dodać „Kafelki” z tytułem „Co wyróżnia nasze podejście?”. W `items` dodać cztery bloki `trivia`, uzupełnić ich `title` powyższymi hasłami, pozostawić `text` puste. Nie dublować tytułu sekcji w `long text`.
5. Zapisać przez **Save** i sprawdzić podgląd, bez publikowania.

- [ ] Lista partnerów i pliki logotypów.
- [ ] Właściwe teksty opinii wraz z podpisami oraz potwierdzenie, które dotyczą Amnesty.
- [ ] Dodać `logo carousel` z logotypami partnerów (konfiguracja poniżej). Istniejący `slider` pozostaje slajderem tekst + zdjęcie.
- [ ] Opinie można złożyć z istniejącego `quote container`, pole `quote`, z blokami `quote`: `text`, `author`, `color`. Sprawdzić dostępność tych bloków w CMS. Nie dodawać pustej karuzeli, jeśli brak cytatów.

Karuzela logotypów — konfiguracja w Storybloku:

1. Utworzyć komponent **Nestable** o nazwie technicznej `logo carousel` (etykieta „Karuzela logotypów”).
2. Dodać opcjonalne pole `title` typu **Text** i pole `logos` typu **Multi-Assets**, ograniczone do obrazów.
3. Dopuścić `logo carousel` w `page.body` oraz w dozwolonych blokach pola Rich Text `long text.text`, jeśli te pola mają ograniczenia.
4. Dodać blok osobno w `Body` albo przez wstawienie bloku w `Long Text`. W `title` wpisać np. „Z kim już pracowaliśmy?”, a w `logos` wybrać obrazy z Assets i ustawić ich kolejność. Uzupełnić tekst alternatywny każdego obrazu nazwą organizacji.
5. Na czas przygotowania treści można wybrać własne logo. Jeden obraz wyświetli się bez przewijania; do sprawdzenia przewijania na komputerze dodać co najmniej pięć pozycji (mogą tymczasowo zawierać własne logo). Potem podmienić je na właściwe logotypy.
6. Zapisać przez **Save**, bez publikowania, i sprawdzić podgląd po wdrożeniu aktualnego kodu.

Karuzela ma maksymalnie 820 px szerokości, pokazuje do czterech logotypów na komputerze, dwa na tablecie i jeden na małym telefonie. Obrazy mieszczą się w całości, bez przycinania. Przewijanie strzałkami lub gestem, bez automatycznego przesuwania. Pusta lista nie wyświetla sekcji.

## 3. Wystąpienia publiczne — `/wystapienia-publiczne`

Kolejność bloków:

1. `page title.title`: **Wystąpienia publiczne**.
2. `page lead.text`: pierwszy akapit zaczynający się „Lubimy rozmawiać o społeczeństwie, także poza raportami…”.
3. `long text.text`: dwa kolejne akapity: „Pokazujemy, co dziś naprawdę myślą i czują…” i „Naszym celem jest inspirowanie…”.
4. Nagłówek **Ostatnio byliśmy na:** i lista trzech wydarzeń: Igrzyska Wolności w Łodzi; konferencja „Kandydatki. Którędy do polityki?”; Ogólnopolskie Forum Inicjatyw Pozarządowych w Warszawie.

DOCX nie podaje dat, nagrań ani opisów poszczególnych wystąpień. Nie dopisywać ich na podstawie wcześniejszej ogólnej propozycji. Zdjęcia i linki można uzupełnić po otrzymaniu materiałów.

## 4. Badania — `/badania`

Kolejność bloków:

1. `page title.title`: **Badania**.
2. `page lead.text`: wprowadzenie zaczynające się „Jesteśmy ekspertami w obszarze badań społecznych i komunikacji…” — cały akapit z DOCX.
3. Wezwanie **Masz pomysł na badanie?**. W DOCX nie wskazano działania tego elementu; docelowy link lub przewinięcie do kontaktu wymaga potwierdzenia.
4. Zdjęcie: w pliku jest placeholder „jakieś zdjęcie”; wybrać materiał z udostępnionego folderu, nie wyświetlać tej uwagi.
5. `long text`: **Co nas wyróżnia?** i akapit „Wyjątkowe zrozumienie polskiego społeczeństwa…”.
6. **Jak badamy?**: cztery pozycje z tabeli, każda z pełnym opisem:
   - Badania opinii publicznej.
   - Testowanie komunikatów, narracji, kampanii społecznych i doradztwo strategiczne.
   - Segmentacja społeczeństwa.
   - Badania jakościowe i social listening.
7. **Co dokładnie robimy?**: osiem akapitów z DOCX, od „Projektujemy i realizujemy badania…” do „Wspieramy partnerów na każdym etapie projektu…”. Można je ułożyć jako listę dla czytelności; to decyzja redakcyjna, nie nowa treść.
8. **Nasza unikalna perspektywa**: opis Siedmiu Segmentów, cztery obszary analizy oraz trzy dalsze akapity o zastosowaniu segmentacji.
9. **Badania międzynarodowe**: akapit o zespołach i badaniach porównawczych.
10. **Jesteś zainteresowana(-y) współpracą? Napisz do nas!** i kontakt do Beaty.
11. **Efekty naszych współprac**: wybrane raporty powstałe ze zleceń.

Elementy wymagające osobnego sprawdzenia:

- [ ] Wybrać zdjęcie.
- [ ] Potwierdzić działanie „Masz pomysł na badanie?”.
- [ ] „Więcej” przy „Co nas wyróżnia?” ma prowadzić do sekcji „Nasza unikalna perspektywa”. Obecny `long text` nie nadaje automatycznych identyfikatorów nagłówkom — link do kotwicy wymaga przygotowania obsługi w kodzie. Nie wstawiać niedziałającego linku.
- [ ] Ustalić finalny układ czterech pozycji „Jak badamy?”; w DOCX jest tabela 2×2. W roboczej wersji same teksty można wstawić jako cztery podsekcje; układ kafelków jest osobnym zadaniem.
- [ ] Otrzymać listę raportów, okładki, opisy i docelowe linki.
- [ ] Dobrać istniejący `slider` do karuzeli raportów po sprawdzeniu schematu CMS. Kod oczekuje `slide`, a wewnątrz `title`, `description`, `image`, `button`; ma stały przycisk „Sprawdź”. Nie tworzyć pustych slajdów bez obrazów lub linków.

## 5. Warsztaty — `/warsztaty`

Kolejność bloków:

1. `page title.title`: **Warsztaty**.
2. `page lead.text`: **Jak rozmawiać z ludźmi, którzy widzą świat inaczej niż my?**
3. `long text.text`: akapit „Wiele organizacji i instytucji najlepiej komunikuje się…”.
4. **Co proponujemy?** — trzy podsekcje, każda z opisem oraz podanym w DOCX efektem:
   - Siedem segmentów: kim są Polki i Polacy?
   - Komunikacja, która trafia dalej niż do już przekonanych.
   - Warsztaty tematyczne.
5. **Jak to wygląda?**: zdanie o dopasowaniu formy oraz akapit zaczynający się „Możemy przygotować godzinny wykład…”.
6. **Przykładowe formaty**: lista czterech pozycji z opisami: wykład/prezentacja ok. godziny, warsztat półdniowy, warsztat całodniowy, Kompas społeczny.
7. Przy Kompasie dodać zwykły link Rich Text **Dowiedz się więcej** do story `/kompas-spoleczny`. Nie wpisywać opisu działania z nawiasu kwadratowego.
8. Akapit **Spotkania prowadzimy stacjonarnie i online**.
9. **Jak zacząć?** — osobny nagłówek, pod nim akapit „Napisz do nas. Umówimy krótką rozmowę…”.
10. Kontakt do Beaty.

W Wordzie kilka nagłówków skleiło się z pierwszym zdaniem opisu (np. „Jak zacząć?Napisz…”). Rozdzielić je przy wprowadzaniu do CMS. Nie traktować strzałek „→” przy opisach efektów jako osobnych przycisków.

## 6. Wystąpienia i prezentacje — `/wystapienia-i-prezentacje`

Kolejność bloków:

1. `page title.title`: **Wystąpienia i prezentacje**.
2. `page lead.text`: akapit zaczynający się „Regularnie prezentujemy wyniki naszych badań…”.
3. `long text.text`: **Przykładowe tematy naszych wystąpień** i siedem punktów z DOCX: polaryzacja; co łączy i dzieli społeczeństwo; emocje i wartości w komunikacji; zielona transformacja; ochrona przyrody; migracje; bezpieczeństwo dzieci w sieci.
4. **Widzisz nas na swoim wydarzeniu? Napisz!**
5. Kontakt do Beaty.

Ta strona opisuje ofertę wystąpień. Nie przenosić na nią listy wydarzeń ze strony „Wystąpienia publiczne”.

## 7. Wspólny kontakt do Beaty

W DOCX kontakt występuje na czterech stronach: Kompas Społeczny, Badania, Warsztaty, Wystąpienia i prezentacje.

Treść:

```text
Beata Charycka
Starsza specjalistka ds. partnerstw
beata@moreincommon.com
```

W źródle jest literówka „partnertsw”; do draftu proponowana poprawna forma to „partnerstw”. Nazwę stanowiska potwierdzić przy odbiorze.

Kontakt umieścić jako osobny blok `contact card` w `page.body`. Kod wyświetla box ze zdjęciem po lewej i imieniem, stanowiskiem oraz klikalnym mailem po prawej; na telefonie zdjęcie jest nad danymi. Wszystkie dane są edytowalne, aby można było później podmienić osobę. Zdjęcie wybrać z Assets; nie używać zrzutu ekranu całej wizytówki jako zdjęcia.

Konfiguracja w Storybloku (schemat wymaga ustawienia w CMS):

1. Utworzyć komponent **Nestable** o nazwie technicznej `contact card`, etykieta „Osoba kontaktowa”.
2. Dodać pola: `photo` typu **Asset** (tylko obrazy), `name` typu **Text** (imię i nazwisko), `position` typu **Text** (stanowisko), `email` typu **Text** (sam adres e-mail).
3. Dopuścić komponent w `page.body`, jeśli lista bloków jest ograniczona.
4. Dodać go w odpowiednim miejscu strony i uzupełnić pola. Zapisać przez **Save**, bez publikowania.

`contact card` sam tworzy link `mailto:`. Nie trzeba dodawać przycisku ani używać komponentów `team` lub `ContactInfo`.

## 8. Partnerstwa — `/partnerstwa`

Dokument zawiera tylko: **„Tutaj jeszcze pracujemy nad treścią, dodamy ją później.”** To uwaga redakcyjna, nie gotowy opis strony.

- [ ] Zostawić story jako draft.
- [ ] Ustawić `page title.title` na „Partnerstwa”.
- [ ] Poczekać na właściwy tekst. Nie uzupełniać tej strony wymyśloną ofertą ani listą partnerów z Kompasu bez potwierdzenia.

## 9. Kolejność pracy i odbiór

Najprościej zacząć od „Wystąpień publicznych”, następnie „Wystąpień i prezentacji”, „Warsztatów”, „Kompasu Społecznego” i „Badań”. „Partnerstwa” pozostają do uzupełnienia po otrzymaniu tekstu.

- [ ] Przenieść teksty pięciu stron zgodnie z kolejnością powyżej.
- [ ] Uzupełnić i sprawdzić cztery kontakty mailowe.
- [ ] Usunąć z treści wskazówki dla wykonawcy i placeholdery.
- [ ] Odtworzyć nagłówki, listy i odstępy po wklejeniu z Worda.
- [ ] Zebrać brakujące logotypy, opinie, zdjęcie do Badań i materiały do karuzeli raportów.
- [ ] Sprawdzić wygląd na telefonie i komputerze, zachowując istniejący design.
- [ ] Zapisać drafty i przekazać linki podglądu do oceny. Nie publikować.

Treści stron można ocenić przed przygotowaniem finalnych karuzel i pozostałych elementów układu, jeśli zostaną wyraźnie oznaczone jako brakujące w checkliście. Przygotowanie takich elementów w kodzie jest osobnym krokiem, a nie wykonaniem instrukcji zaszytych w załączniku.
