# Migracja treści i nowa nawigacja

> Aktualizacja bezpieczeństwa wdrożenia: migracja adresów jest domyślnie wyłączona przez `SITE_NAVIGATION_MIGRATION_ENABLED`. Pierwszy push może budować staging i produkcję jednocześnie; bez tej flagi zachowujemy dotychczasowe publiczne trasy i cache. Aktualną kolejność opisuje sekcja 6.

> Aktualizacja przygotowań: nowe menu, przekierowania i nagłówek „Nasze publikacje” są zapisane w CMS jako drafty, bez publikacji. Aktualny stan i kolejność uruchomienia opisuje sekcja 6. Sekcje 1–5 dokumentują wcześniejszy etap przygotowywania sześciu stron.

## 1. Wcześniejszy etap — sześć stron

Na tym etapie przygotowujemy **sześć niezależnych stron w głównym katalogu Storybloka**. Wszystkie zapisujemy jako drafty, bez publikacji. Osoby odpowiedzialne oceniają treści przez podgląd. Grupowanie menu i docelowe URL-e ustalimy osobno po tej ocenie.

- [x] Utworzyć branch `feat/site-structure-migration`.
- [x] Usunąć przełącznik migracji — nie jest potrzebny do oglądania nowych stron.
- [x] Dostosować routing do sześciu stron w root.
- [x] Zachować oryginalny wygląd i obsługę nawigacji; grupowanie pochodzi z CMS.
- [x] Newsletter ma wygląd zwykłej pozycji menu, LinkedIn zachowuje dotychczasową ikonę.
- [x] W nowych stronach pobierać drafty bez cache; poza podglądem korzystać z published.
- [x] Rozróżniać brak strony (404) od błędu tokena lub niedostępności CMS (błąd serwera).
- [ ] Wgrać aktualny kod na osobne środowisko testowe.
- [ ] Utworzyć i zapisać sześć stories z treściami.
- [x] Sprawdzić wszystkie drafty lokalnie: 6/6 zapisanych stron zwraca 200 z cookie draft mode i 404 bez niego.
- [ ] Sprawdzić wszystkie drafty na środowisku testowym po wdrożeniu aktualnego kodu.
- [ ] Uzyskać uwagi i akceptację treści.
- [ ] Dopiero później ustalić menu, docelowe URL-e i przekierowania.

Nie zmieniamy teraz `global navigation`, nie dodajemy nowych stron do publicznego menu i nie tworzymy strony zbiorczej Oferty.

## 2. Stories do utworzenia teraz

W **Content** utworzyć sześć stories bezpośrednio w katalogu głównym. Użyć istniejącego typu `page`. Nie tworzyć folderów `nowe` ani `oferta` dla tych stron.

| Tytuł | Pełny slug / adres |
| --- | --- |
| Partnerstwa | `partnerstwa` → `/partnerstwa` |
| Kompas społeczny | `kompas-spoleczny` → `/kompas-spoleczny` |
| Wystąpienia publiczne | `wystapienia-publiczne` → `/wystapienia-publiczne` |
| Badania | `badania` → `/badania` |
| Warsztaty | `warsztaty` → `/warsztaty` |
| Wystąpienia i prezentacje | `wystapienia-i-prezentacje` → `/wystapienia-i-prezentacje` |

- [ ] Przenieść ewentualne robocze stories z folderów `nowe` lub `oferta` do roota i sprawdzić ich pełne slugi.
- [ ] Upewnić się, że nie nadpisujemy istniejącej opublikowanej strony o tym samym slugu.
- [ ] Zapisywać treści przez **Save**, nigdy **Publish** na tym etapie.
- [ ] Nie zmieniać obecnych publicznych stories ani ich adresów.

`/nowe/partnerstwa`, `/oferta/badania` itd. nie są teraz obsługiwane. Po zmianie pełnego sluga trzeba też zmienić link podglądu.

## 3. Treści i komponenty w Storybloku

Dokładna rozpiska na podstawie przekazanego DOCX: [STORYBLOK_CONTENT.md](STORYBLOK_CONTENT.md). Dokument zawiera teksty pięciu stron; dla Partnerstw właściwy tekst jeszcze nie powstał. Uwagi o karuzelach, kontaktach i brakujących materiałach są opisane oddzielnie od treści do wklejenia.

W każdej stronie ułożyć `page.body` z istniejących bloków. Techniczne nazwy wynikają z kodu; etykiety i dozwolone komponenty trzeba sprawdzić w panelu CMS.

| Komponent | Pola | Zastosowanie |
| --- | --- | --- |
| `page title` | `title` | Tytuł strony |
| `page lead` | `text` | Krótkie wprowadzenie |
| `long text` | `text` (Rich Text), opcjonalnie `decoration_color`, `list_spacing` (Single-Option: `compact`, `standard`, `spacious`) | Tekst, nagłówki, listy i zdjęcia; ustawienie odstępów list opisane w `STORYBLOK_CONTENT.md` |
| `flexible image` | `image`, `alt`, `max_width`, `max_height`, `align` | Grafiki i logotypy; domyślne 220×40 px zmienić stosownie do grafiki |
| `button` | `text`, `url` lub `pdf`, `color` | Linki lub materiały do pobrania |
| `seo` | `title`, `description`, `image` | Metadane |

- [ ] Wstawić teksty z dokumentu i grafiki z SharePointa.
- [ ] Uzupełnić teksty alternatywne obrazów i metadane.
- [ ] W razie potrzeby rozszerzyć dozwolone bloki w `page.body`, zachowując dotychczasowe opcje.
- [ ] Nie zmieniać technicznych nazw ani typów istniejących pól.
- [ ] Sprawdzić każdą stronę na komputerze i telefonie.

## 4. Lokalny podgląd nieopublikowanych stron

Wymagany Node 24.x i prywatny `.env.local` z `STORYBLOK_TOKEN` pozwalającym czytać drafty tego samego space w Storybloku.

Uruchomić:

```sh
npm run dev
```

Opcjonalnie dodać blokadę indeksowania lokalnego środowiska:

```sh
SITE_PREVIEW_ENABLED=true npm run dev
```

Następnie otworzyć w tej samej przeglądarce:

```text
http://localhost:3000/api/preview?secret=TWOJ_TOKEN&slug=partnerstwa
```

`TWOJ_TOKEN` zastąpić prywatnie wartością `STORYBLOK_TOKEN`. Użyć portu wskazanego przez terminal. Endpoint włącza draft mode i przekierowuje na `/partnerstwa`, usuwając sekret z docelowego URL.

Cookie obowiązuje dla danej przeglądarki i hosta. Potem można przechodzić do `/badania`, `/warsztaty` itd. bez ponownego włączania podglądu. Dla innej przeglądarki albo po utracie cookie ponowić wejście przez `/api/preview`.

**Praca na bieżąco:** Save w Storybloku → odświeżenie lokalnej strony. Nowe strony w draft mode omijają cache aplikacji i używają świeżego parametru wersji cache w zapytaniu do CMS. Nie trzeba budować ani wdrażać kodu po każdej zmianie tekstu. Zmiany kodu automatycznie odświeża Next.js. Nie ma jeszcze automatycznego nasłuchiwania zmian globalnego menu w osobnej karcie.

Wyjście z podglądu:

```text
http://localhost:3000/api/exit-preview?slug=partnerstwa
```

Po wyjściu nowa strona, która nigdy nie była publikowana, zwraca 404. Jest to oczekiwane. Jeżeli story miało już wersję published, poza podglądem widoczna jest właśnie ta wersja.

`SITE_PREVIEW_ENABLED` steruje indeksowaniem, a nie pobieraniem draftów. Nie trzeba zmiennej `NEXT_PUBLIC_SITE_MIGRATION_ENABLED`.

## 5. Podgląd na serwerze testowym

Domena robocza: `https://mic-test-gamma.vercel.app`.

- [ ] Wdrożyć aktualny branch z obsługą sześciu adresów w root. Sam zapis plików lokalnie nie aktualizuje Vercela.
- [ ] W odpowiednim środowisku Vercela ustawić prywatnie `STORYBLOK_TOKEN` z uprawnieniem do draftów.
- [ ] Ustawić `SITE_PREVIEW_ENABLED=true` przed buildem testowym i wykonać nowe wdrożenie. Dotyczy to także sytuacji, gdy testowy projekt jest w Vercelu oznaczony jako Production.
- [ ] Włączyć ochronę dostępu do wdrożenia zgodnie z potrzebami recenzentów.
- [ ] Po wdrożeniu otworzyć poniższy adres i sprawdzić treści.

```text
https://mic-test-gamma.vercel.app/api/preview?secret=TWOJ_TOKEN&slug=partnerstwa
```

Tak samo dla pozostałych pięciu slugów z sekcji 2. Sekret musi odpowiadać tokenowi na serwerze testowym. Nie zapisywać rzeczywistego sekretu w tym dokumencie ani repozytorium. Lokalny cookie nie działa na domenie testowej: wejść tam przez `/api/preview` oddzielnie.

Recenzenci korzystają z linku podglądu w swojej przeglądarce; nie muszą szukać stron w menu. Po zapisaniu korekt w CMS odświeżają stronę. Nie jest potrzebne kolejne wdrożenie dla zmian samych treści.

Strony w draft mode mają `noindex`. Środowisko testowe ma blokadę robots i pustą sitemap. To ogranicza indeksowanie, ale kontrolę dostępu zapewnia hosting.

**Diagnostyka:**

- 401 na `/api/preview`: sekret nie pasuje do konfiguracji serwera.
- 400 na `/api/preview`: niepoprawny format sluga.
- 404 po przekierowaniu: brak zapisanego story pod dokładnym pełnym slugiem, nieaktualny kod na serwerze lub brak aktywnego draft mode dla nieopublikowanej strony.
- Błąd serwera nowych stron: sprawdzić logi, token do draftów i połączenie ze Storyblokiem. Kod nie ukrywa takich błędów jako 404.

Opcjonalny Visual Editor wymaga dodatkowo HTTPS i cookie draft mode działającego w iframe. Nie jest wymagany do opisanej pracy w osobnej karcie. [Dokumentacja](https://www.storyblok.com/docs/concepts/visual-editor).

## 6. Przygotowane menu, adresy i przekierowania

### Stan CMS

W space `More in Common` (`283339`) zapisano, **bez publikowania**:

- `global` (story `481244007`): nowe menu oraz trzy reguły w `global navigation.redirects`.
- Strona startowa folderu `nasze-projekty/` (story `478782228`): H1 i tytuł SEO „Nasze publikacje”. Pozostała treść i adres w CMS są zachowane.

Dodano definicję zagnieżdżalnego komponentu `url redirect` z polami `source` i `destination`, pole `global navigation.redirects` i przełącznik `navigation item.menu_only`. Definicje schematów obowiązują od razu; treści menu i przekierowań pozostają draftem. Porównanie opublikowanej konfiguracji `global` przed i po zapisie potwierdziło brak zmian. Lokalne kopie sprzed zmian są w `/tmp/mic-cms-preparation/` (katalog tymczasowy, nie archiwum).

Menu:

| Główna pozycja | Podmenu |
| --- | --- |
| O nas | Bez zmian |
| Co robimy | Siedem segmentów, Nasze publikacje, Kompas Społeczny, Fokus na klimat, W mediach, Wystąpienia publiczne |
| Oferta | Badania, Warsztaty, Wystąpienia i prezentacje |
| Partnerstwa | Link `/partnerstwa` |
| Kontakt | Bez zmian |

„Co robimy” i „Oferta” mają `menu_only=true`: na komputerze są przyciskami otwierającymi podmenu, na telefonie nagłówkami widocznych grup linków. Newsletter nadal prowadzi do `#newsletter`, LinkedIn zachowuje dotychczasową ikonę i adres.

Sześć nowych stories nadal ma adresy w root, bez polskich znaków: `/partnerstwa`, `/kompas-spoleczny`, `/wystapienia-publiczne`, `/badania`, `/warsztaty`, `/wystapienia-i-prezentacje`. `/quiz` oraz szczegółowe adresy `/nasze-projekty/<slug>` pozostają dostępne. Quiz znika jedynie z menu głównego; można nadal linkować do niego z treści strony segmentów.

### Działanie przygotowanego kodu

Wprowadzono przełącznik buildu `SITE_NAVIGATION_MIGRATION_ENABLED`, domyślnie `false` (także gdy zmienna nie istnieje). Wartość jest zapisywana w buildzie przez `next.config.js`; zmiana wymaga nowego wdrożenia.

| Zachowanie | Flaga wyłączona — pierwszy push | Flaga `true` — uruchamianie migracji |
| --- | --- | --- |
| Stare reguły `/co-robimy` | Oryginalne reguły w `next.config.js` | Middleware, cele zgodne z opublikowanym CMS |
| Nowe middleware | Przepuszcza żądania bez pobierania konfiguracji CMS | Pobiera wyłącznie opublikowane reguły |
| Publiczna konfiguracja `global` | Dotychczasowy cache 3600 s | Bez cache aplikacji, świeże `cv` |
| Publiczny `/nasze-publikacje` | 404 | Dostępna istniejąca lista z własnym canonicalem |
| Podgląd `/nasze-publikacje` | Dostępny w draft mode | Dostępny w draft mode |
| Podgląd nowego menu | Dostępny w draft mode | Dostępny w draft mode |

Usunięto wymuszenie `force-dynamic` z całego layoutu. Przy wyłączonej fladze publiczne pobieranie konfiguracji ma te same opcje cache co poprzedni kod. Podgląd globalnej konfiguracji omija cache w obu wariantach.

`/nasze-publikacje` wyświetla istniejącą stronę startową `nasze-projekty/`. Nie przenosimy ani nie zmieniamy slugów istniejących stories. Nowy adres listy można sprawdzić w podglądzie przed włączeniem migracji.

Reguły zapisane jako draft:

| Źródło | Cel |
| --- | --- |
| `/nasze-projekty` | `/nasze-publikacje` |
| `/co-robimy/nasze-projekty` | `/nasze-publikacje` |
| `/co-robimy` | `/nasze-publikacje` |

Middleware odczytuje reguły **zawsze z `version=published`**, również przy aktywnym draft mode. Save pozwala przygotować menu do podglądu, ale nie uruchamia przekierowań. Publish story `global` aktywuje reguły po wdrożeniu kodu z flagą `SITE_NAVIGATION_MIGRATION_ENABLED=true`. Obsługujemy powyższe źródła i dokładne ścieżki lokalne; nie jest to ogólny system wildcardów dla całej witryny. Nie należy dodawać innych źródeł bez rozszerzenia matchera w `src/middleware.js`.

Trzy wcześniejsze reguły `/co-robimy` przeniesiono z `next.config.js` do middleware: do publikacji zachowują dotychczasowe cele, a po niej adresy listy kierują bezpośrednio do `/nasze-publikacje`. Stare linki szczegółowych publikacji nadal kierują do `/nasze-projekty/<slug>`. Inne istniejące przekierowania w `next.config.js` zachowano.

Przekierowania są trwałe (308), zachowują query string i nie korzystają z Management API tokena. CMS nie może ustawić zewnętrznego celu, pętli ani łańcucha reguł. W razie niedostępności publicznej konfiguracji middleware zachowuje wcześniejsze zachowanie tras. Przeglądarki mogą zapamiętać 308 — cofnięcie publikacji nie usuwa przekierowania już zapamiętanego przez klienta.

Przy fladze `SITE_NAVIGATION_MIGRATION_ENABLED=true` globalna konfiguracja jest pobierana bez cache aplikacji i ze świeżym `cv`. Dotyczy to zarówno menu, jak i przekierowań, dlatego nie wymagamy webhooka ani przebudowy po każdej publikacji `global`. Oznacza to dodatkowy odczyt CMS przy renderowaniu strony. Nawigacja otwarta już w przeglądarce może wymagać odświeżenia. Pozostałe treści nadal mają dotychczasowy cache — trzeba sprawdzić ich dostępność po publikacji, zanim uruchomimy menu.

Sitemap wybiera adres listy zgodnie z opublikowanymi regułami. Szczegółowe publikacje zachowują obecne adresy. Środowisko testowe nadal ma pustą sitemapę i blokadę indeksowania.

### Kolejność uruchomienia przy jednoczesnym buildzie stagingu i produkcji

1. Pierwszy push wykonać **bez ustawiania** `SITE_NAVIGATION_MIGRATION_ENABLED=true`. Oba środowiska mogą wdrożyć ten sam kod: publiczne adresy, stare przekierowania i cache pozostają dotychczasowe. Nie publikować jeszcze `global`.
2. Sprawdzić nowe menu i wszystkie strony w draft mode, także `/nasze-publikacje`. Odbiór wyglądu wykonać na komputerze i telefonie. Nie wymaga to aktywacji migracji.
3. Po odbiorze ustawić `SITE_NAVIGATION_MIGRATION_ENABLED=true` w odpowiednich środowiskach i uruchomić nowy build/deploy. Można włączyć flagę tylko na stagingu, jeśli hosting pozwala ustawiać zmienne oddzielnie. Zapisane drafty nadal nie aktywują przekierowań.
4. Po akceptacji opublikować sześć nowych stron oraz stronę startową folderu `nasze-projekty/` z nowym nagłówkiem. Sprawdzić ich publiczną dostępność i treść, uwzględniając cache.
5. Na końcu opublikować `global`: uruchomi to nowe menu i przekierowania na wdrożeniach z włączoną flagą. Publikacja `global` nie publikuje automatycznie stron docelowych. Przy wyłączonej fladze publikacja menu nadal może zmienić menu po odświeżeniu dotychczasowego cache, dlatego nie należy publikować `global` przed wykonaniem kroku 3.
6. Sprawdzić stare adresy, brak pętli, parametry query string, canonical nowej listy i sitemapę.

Na tym etapie **nie wdrożono kodu na Vercela i niczego nie opublikowano w CMS**. Nie testowano aktywacji przez rzeczywistą publikację. Testy jednostkowe obejmują konfigurację aktywną i nieaktywną; testy HTTP sprawdzają prawdziwy publiczny stan CMS i draft menu, bez publikowania.

## 7. Weryfikacja techniczna

- [x] Lint zmienionych plików bez błędów; 8 testów jednostkowych tras, linków, przekierowań i domyślnej blokady przeszło.
- [x] Build aktualnego kodu w Node 24 przeszedł w ustawieniach produkcyjnych z migracją wyłączoną i włączoną; pozostały wcześniejsze ostrzeżenia starszych komponentów.
- [x] Testy HTTP lokalnie: 9/9 testów przeszło w obu wariantach flagi migracji, w tym porównanie sześciu stron z dostępnością `draft` i `published` w CMS, wejście i wyjście z preview, 404 nieobsługiwanych adresów, noindex, canonical nowej listy oraz brak aktywacji przekierowań przez draft menu.
- [x] Potwierdzono 6/6 faktycznie zapisanych draftów: każda strona zwraca 200 w podglądzie i 404 bez podglądu. Żadna z tych sześciu stron nie ma obecnie wersji published.
- [x] Dodatkowe sprawdzenie publicznej sitemapy: nadal zawiera stary adres listy i pomija sześć draftów. Opublikowany `global` jest identyczny z kopią sprzed przygotowań.
- [x] Lokalna regresja względem czystego buildu `HEAD` sprzed zmian: 31 adresów zgodnych pod względem statusów, celów przekierowań, parametrów query, canonicali, robots, nagłówków H1 oraz pełnego HTML nawigacji. Test jest zapisany w `tests/production-regression-http.test.mjs`.
- [x] Czysty build z migracją wyłączoną: manifest przekierowań i lista prerenderowanych tras zgodne z poprzednim buildem. Zachowano dotychczasowe podświetlanie menu na stronach szczegółowych publikacji.
- [ ] Testy HTTP aktualnego wdrożenia testowego (po wdrożeniu kodu).
- [ ] Ręczny odbiór wyglądu i treści wszystkich sześciu stron.

**Stan serwera testowego podczas weryfikacji:** testy wykonano także na `mic-test-gamma.vercel.app`. Wdrożona wersja jest starsza: m.in. draft `partnerstwa` istnieje w CMS, a podgląd na serwerze zwraca 404; przekierowanie `slug=home` prowadzi do `/home` zamiast `/`, a konfiguracja robots nie odpowiada środowisku testowemu. 2/7 testów przeszło, 5/7 nie przeszło. Nie jest to potwierdzenie poprawności wdrożenia. Potrzebny jest deploy aktualnego kodu oraz ponowienie testów. W tym środowisku brak narzędzia/poświadczeń do Vercela; nie wykonano wdrożenia ani publikacji CMS.

```sh
npm run test:migration
# Serwer w osobnym terminalu:
SITE_NAVIGATION_MIGRATION_ENABLED=false SITE_PREVIEW_ENABLED=true npm run build
SITE_PREVIEW_ENABLED=true npm run start -- -H 127.0.0.1 -p 3100
# Testy lokalne w drugim terminalu:
EXPECT_MIGRATION=false EXPECT_PREVIEW=true npm run test:migration:http
# Po wdrożeniu aktualnego kodu na Vercela:
MIGRATION_TEST_ORIGIN=https://mic-test-gamma.vercel.app EXPECT_MIGRATION=false EXPECT_PREVIEW=true npm run test:migration:http
```

Testy HTTP czytają token z `.env.local` i dopuszczają tylko localhost oraz wskazaną domenę testową po HTTPS. Niczego nie zapisują ani nie publikują w CMS. Raportują liczbę istniejących draftów oraz stron dostępnych tylko w draft mode. Jeżeli stories jeszcze nie istnieją, testy mogą potwierdzić poprawne 404, ale nie potwierdzają renderowania ich przyszłej treści.

### Lokalny test porównawczy przed wspólnym pushem

Zbudować i uruchomić poprzedni commit w oddzielnym katalogu na porcie 3101, a aktualny kod na porcie 3100. Użyć Node 24, tych samych treści CMS i zmiennych środowiskowych, `SITE_PREVIEW_ENABLED=false` i `SITE_NAVIGATION_MIGRATION_ENABLED=false`. Test porównuje publiczne odpowiedzi bez draft cookie; nie zmienia CMS.

```sh
npm run test:production:compare
EXPECT_PREVIEW=false EXPECT_MIGRATION=false npm run test:migration:http
```

Domyślne adresy porównania: `http://127.0.0.1:3101` (poprzedni kod) i `http://127.0.0.1:3100` (aktualny). Można je zmienić przez `BASELINE_TEST_ORIGIN` i `CANDIDATE_TEST_ORIGIN`; test dopuszcza wyłącznie localhost. Testy HTTP aktywnego wariantu uruchamiać z `EXPECT_MIGRATION=true` przeciwko buildowi wykonanemu z `SITE_NAVIGATION_MIGRATION_ENABLED=true`.
