# Migracja treści i nowa nawigacja

> Stan kodu: przełącznik migracji został usunięty. Nowe adresy, odczyt opublikowanych przekierowań i odświeżanie globalnego menu działają domyślnie. Aktualna instrukcja uruchomienia jest w sekcji 6. Sekcje 1–5 opisują wcześniejsze przygotowanie draftów; ich pola wyboru nie są aktualnym audytem CMS.

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

### Docelowe działanie kodu

Nie ma flagi aktywacji migracji. `/nasze-publikacje` jest dostępne publicznie i wyświetla opublikowaną stronę startową `nasze-projekty/` z canonicalem nowego adresu. Nie przenosimy istniejących stories ani nie zmieniamy ich slugów.

Middleware zawsze odczytuje wyłącznie **opublikowane** reguły z `global`. Save nie aktywuje przekierowań, także podczas podglądu. Do czasu publikacji reguł stare adresy zachowują dotychczasowe cele. Adresy szczegółowych publikacji `/nasze-projekty/<slug>` pozostają bez zmian.

Przygotowane reguły w `global navigation.redirects`:

| Source | Destination |
| --- | --- |
| `/nasze-projekty` | `/nasze-publikacje` |
| `/co-robimy/nasze-projekty` | `/nasze-publikacje` |
| `/co-robimy` | `/nasze-publikacje` |

Przekierowania są trwałe (308) i zachowują query string. Przeglądarka może je zapamiętać. Obsługiwane źródła określa matcher w `src/middleware.js`; nie dodawać innych źródeł bez zmiany kodu. Przy niedostępności CMS middleware zachowuje dotychczasowe działanie adresów.

Globalne menu i reguły są pobierane bez cache aplikacji, ze świeżym `cv`. Publikacja `global` nie wymaga kolejnego buildu. Otwarta karta może wymagać odświeżenia. Pozostałe treści nadal korzystają z dotychczasowego cache (do 3600 s); przed publikacją menu sprawdzić ich publiczną dostępność. Sitemap wybiera adres listy zgodnie z opublikowanymi regułami i zachowuje adresy szczegółowych publikacji.

### Uruchomienie — kolejność kliknięć

Najpierw wypchnąć kod i poczekać na zakończony deploy produkcyjny. Wymagany Node 24.x i `STORYBLOK_TOKEN`. Produkcja: `SITE_PREVIEW_ENABLED=false`; test: `SITE_PREVIEW_ENABLED=true`. Dawna zmienna migracji nie ma już znaczenia i można ją usunąć z hostingu. Wdrożenie kodu samo nie publikuje draftów.

W Storybloku otworzyć space **More in Common** (`283339`) → **Content**. Nie zmieniać slugów i nie publikować zbiorczo wszystkich draftów.

1. Otworzyć **Partnerstwa** (`partnerstwa`), sprawdzić treść i kliknąć **Publish**.
2. Otworzyć **Kompas społeczny** (`kompas-spoleczny`) → **Publish**.
3. Otworzyć **Wystąpienia publiczne** (`wystapienia-publiczne`) → **Publish**.
4. Otworzyć **Badania** (`badania`) → **Publish**.
5. Otworzyć **Warsztaty** (`warsztaty`) → **Publish**.
6. Otworzyć **Wystąpienia i prezentacje** (`wystapienia-i-prezentacje`) → **Publish**.
7. Wejść do folderu **nasze-projekty** i otworzyć jego **stronę startową** (story `478782228`). Sprawdzić H1 oraz tytuł SEO „Nasze publikacje” → **Publish**. Nie zmieniać sluga folderu ani publikować wszystkich jego podstron.
8. W oknie incognito sprawdzić sześć nowych adresów oraz `/nasze-publikacje` na produkcji. Wszystkie muszą działać i pokazywać zaakceptowaną treść. Jeśli widoczna jest stara treść lub 404, poczekać na odświeżenie cache i sprawdzić ponownie przed kolejnym krokiem.
9. Wrócić do **Content** → **global** (story `481244007`) → blok **global navigation**. Sprawdzić menu z tabeli powyżej, `menu_only` dla „Co robimy” i „Oferta” oraz trzy reguły `redirects`. Kliknąć **Publish** dla story `global` **na końcu**. To uruchamia nowe menu i przekierowania; nie publikuje stron docelowych.
10. Odświeżyć produkcję i sprawdzić menu na komputerze i telefonie, trzy stare adresy, `/nasze-publikacje`, `/sitemap.xml` oraz `/robots.txt`. Produkcja nie powinna mieć `Disallow: /` ani `noindex` poza draft mode.

### Weryfikacja techniczna

```sh
npm run test:migration
npm run build
# Serwer w osobnym terminalu:
npm run start -- -H 127.0.0.1 -p 3100
# Testy dla lokalnego buildu produkcyjnego:
EXPECT_PREVIEW=false npm run test:migration:http
# Lub po wdrożeniu testowym z SITE_PREVIEW_ENABLED=true:
MIGRATION_TEST_ORIGIN=https://mic-test-gamma.vercel.app EXPECT_PREVIEW=true npm run test:migration:http
```

Testy HTTP wymagają Node 24 i czytają token z `.env.local`. Niczego nie publikują ani nie zapisują w CMS. Sprawdzają dostępność draft/published, preview, canonical nowej listy i przekierowania według opublikowanej konfiguracji. Test porównawczy `test:production:compare` służy wyłącznie do porównania starych publicznych tras przed publikacją nowego menu i reguł; pomija celowo dodany adres `/nasze-publikacje`.

Stan bieżącego wdrożenia i publikacji trzeba sprawdzić osobno — lokalna weryfikacja nie potwierdza uruchomienia produkcji.

Weryfikacja lokalna po usunięciu flagi (2026-11-27, Node 24.18.0): 8/8 testów jednostkowych, lint zmienionych plików i 9/9 testów HTTP przeszło. Potwierdzono sześć zapisanych draftów bez wersji published oraz brak aktywacji publicznych przekierowań przez draft menu. Build produkcyjny zakończył się kodem 0; log zawiera istniejące ostrzeżenia i komunikaty błędów podczas prób prerenderowania stron dynamicznych. Testy HTTP sprawdziły działanie objętych nimi tras na gotowym buildzie. Nie wykonano pusha, deploya ani publikacji CMS.
