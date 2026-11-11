# Migracja treści i późniejsza zmiana nawigacji

## 1. Aktualny plan

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

W każdej stronie ułożyć `page.body` z istniejących bloków. Techniczne nazwy wynikają z kodu; etykiety i dozwolone komponenty trzeba sprawdzić w panelu CMS.

| Komponent | Pola | Zastosowanie |
| --- | --- | --- |
| `page title` | `title` | Tytuł strony |
| `page lead` | `text` | Krótkie wprowadzenie |
| `long text` | `text` (Rich Text), opcjonalnie `decoration_color` | Tekst, nagłówki, listy i zdjęcia |
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

## 6. Menu, adresy i przekierowania — późniejszy etap

Pierwotna tabela nawigacji jest propozycją, nie zatwierdzonym planem wdrożenia. Grupowanie w Storybloku nie musi zmieniać URL-i: można umieścić stronę w dowolnym podmenu, zachowując ją w root. Jeżeli zdecydujemy się na przeniesienie stories do folderów, zmienią się ich pełne slugi i trzeba dostosować kod.

- [ ] Zatwierdzić główne zakładki, podmenu i kolejność.
- [ ] Ustalić linki głównych zakładek i ewentualną stronę zbiorczą Oferty.
- [ ] Sporządzić mapę obecny URL → docelowy URL przed przenoszeniem stories.
- [ ] Dostosować listę tras, podgląd, canonicale i sitemap do finalnych adresów.
- [ ] Dodać potrzebne przekierowania w `next.config.js` po ustaleniu celów; zachować istniejące reguły.
- [ ] Dla publicznych starych adresów użyć trwałych przekierowań i sprawdzić brak pętli/łańcuchów. Dla linków roboczych zdecydować, czy zachowujemy ich działanie.
- [ ] Zaktualizować linki CMS, linki w treści i linki do recenzji. W `global → blocks → global navigation → blocks` zmienić `navigation item.text`, `urls`, `subitem`; nie zmieniać definicji komponentów bez potrzeby.
- [ ] Sprawdzić regułę `/co-robimy/:path*`, która obecnie przekierowuje do `/nasze-projekty/:path*`, zanim wybierzemy nowe adresy z prefiksem `/co-robimy`.
- [ ] Przetestować docelowe menu i przekierowania lokalnie oraz na serwerze testowym.
- [ ] Po akceptacji zaplanować publikację stories, menu i wdrożenie kodu.

Nie dodajemy teraz przekierowań do niezatwierdzonych celów. Zachowano wszystkie obecne reguły w `next.config.js`.

## 7. Weryfikacja techniczna

- [x] Lint zmienionych komponentów bez błędów; 3 testy jednostkowe po przejściu na sześć adresów w root przeszły.
- [x] Build aktualnego kodu przeszedł; pozostały wcześniejsze ostrzeżenia starszych komponentów.
- [x] Testy HTTP lokalnie: 7/7 testów przeszło, w tym każda strona porównana z dostępnością `draft` i `published` w CMS, wejście i wyjście z preview, 404 nieobsługiwanych adresów, noindex.
- [x] Potwierdzono 6/6 faktycznie zapisanych draftów: każda strona zwraca 200 w podglądzie i 404 bez podglądu. Żadna z tych sześciu stron nie ma obecnie wersji published.
- [ ] Testy HTTP aktualnego wdrożenia testowego (po wdrożeniu kodu).
- [ ] Ręczny odbiór wyglądu i treści wszystkich sześciu stron.

**Stan serwera testowego podczas weryfikacji:** testy wykonano także na `mic-test-gamma.vercel.app`. Wdrożona wersja jest starsza: m.in. draft `partnerstwa` istnieje w CMS, a podgląd na serwerze zwraca 404; przekierowanie `slug=home` prowadzi do `/home` zamiast `/`, a konfiguracja robots nie odpowiada środowisku testowemu. 2/7 testów przeszło, 5/7 nie przeszło. Nie jest to potwierdzenie poprawności wdrożenia. Potrzebny jest deploy aktualnego kodu oraz ponowienie testów. W tym środowisku brak narzędzia/poświadczeń do Vercela; nie wykonano wdrożenia ani publikacji CMS.

```sh
npm run test:migration
# Serwer w osobnym terminalu:
SITE_PREVIEW_ENABLED=true npm run build
SITE_PREVIEW_ENABLED=true npm run start -- -H 127.0.0.1 -p 3100
# Testy lokalne w drugim terminalu:
EXPECT_PREVIEW=true npm run test:migration:http
# Po wdrożeniu aktualnego kodu na Vercela:
MIGRATION_TEST_ORIGIN=https://mic-test-gamma.vercel.app EXPECT_PREVIEW=true npm run test:migration:http
```

Testy HTTP czytają token z `.env.local` i dopuszczają tylko localhost oraz wskazaną domenę testową po HTTPS. Niczego nie zapisują ani nie publikują w CMS. Raportują liczbę istniejących draftów oraz stron dostępnych tylko w draft mode. Jeżeli stories jeszcze nie istnieją, testy mogą potwierdzić poprawne 404, ale nie potwierdzają renderowania ich przyszłej treści.
