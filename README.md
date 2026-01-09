# System Obsługi Wydarzeń

## Opis projektu
Aplikacja internetowa zbudowana w środowisku Node.js służąca do zarządzania wydarzeniami wprowadzonymi przez użytkownika. Aplikacja umożliwia dodanie wydarzeń, sortowanie wydarzeń, ich edycję oraz usuwanie.

## Funkcjonalności
* **Pełny CRUD**: Dodawanie, przeglądanie, edycja oraz usuwanie wydarzeń.
* **Filtracja**: Możliwość filtrowania wydarzeń po kategorii za pomocą formularza GET.
* **Sortowanie**: Sortowanie listy wydarzeń po nazwie oraz dacie.
* **Dynamiczny Routing**: Szczegóły każdego wydarzenia dostępne pod unikalnym adresem ID.
* **Bezpieczeństwo**: walidacja danych wejściowych.

## Instrukcja instalacji i uruchomienia
1. Pobierz repozytorium.
2. Uruchom terminal w folderze projektu i wpisz `npm install`.
3. Upewnij się, że masz uruchomioną bazę MongoDB (patrz: docker.txt).
4. Uruchom aplikację komendą `npm start`.
5. Za pomocą link: `http://localhost:3000` otwórz stronę aplikacji w przeglądarce.

## Lista głównych endpointów
* `GET /` - Strona główna z listą wydarzeń.
* `GET /event/:id` - Szczegółowe informacje o wydarzeniu.
* `POST /event/add` - Tworzenie nowego wydarzenia.
* `POST /event/:id/edit` - Aktualizacja danych wydarzenia.
* `POST /event/:id/delete` - Usunięcie wydarzenia.

## Technologie
* Backend: Node.js, Express.js.
* Baza danych: MongoDB (Mongoose).
* Frontend: EJS (Embedded JavaScript templates).
* Zabezpieczenia: Bcrypt.

## Autor
**Adam Faber** 
