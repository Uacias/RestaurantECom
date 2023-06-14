import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "pl",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          checkout: {
            contactInfo: "Dane Kontaktowe",
            label: {
              sameForShipping: "Same Shipping Data",
            },
            steps: {
              billing: "Billing Data",
              shipping: "Shipping Data",
              payment: "Payment Data",
            },
            buttons: {
              back: "Back",
              next: "Next",
              placeOrder: "Place Order",
            },
            validation: {
              required: "required",
            },
            addressForm: {
              firstName: "First Name",
              lastName: "Last Name",
              country: "Country",
              streetAddress: "Street Address",
              city: "City",
              state: "State",
              zipCode: "Zip Code",
            },
            paymentForm: {
              email: "Email",
              phoneNumber: "Phone Number",
            },
          },
          addToBasket: "Add to basket",
          dishMenu: {
            title: "Check Our Menu",
            searchLabel: "Search for products...",
            all: "All",
            appetizer: "Appetizers",
            soup: "Soups",
            pasta: "Pasta",
            seafood: "Seafood",
            steak: "Steaks",
            burger: "Burgers",
            dessert: "Desserts",
          },
          basket: {
            title: "Your Basket",
            subtotal: "Subtotal",
            total: "Total Cost",
            checkout: "Checkout",
            empty: "No products in the basket. Discover our amazing selection!",
            tooltips: {
              decrease: "Decrease",
              increase: "Increase",
              remove: "Remove",
            },
          },
          navigation: {
            menu: "Menu",
            contact: "Contact",
            about: "About",
            privacyPolicy: "Privacy policy",
            termsConditions: "Terms & conditions",
            tooltips: {
              home: "Home",
              basket: "Basket",
              switchLanguage: "Switch language",
            },
          },
          pages: {
            termsConditions: {
              subtitle:
                "Welcome to our service! Before using our website, please read the following terms and conditions:",
              firstRule:
                "By using our service, you agree to our terms of use and privacy policy",
              secondRule:
                "It is prohibited to use our service in violation of applicable laws.",
              thirdRule:
                "We reserve the right to make changes to our service at any time. Information about the changes will be provided to users in an appropriate manner, such as through announcements on the website or email notifications. Continued use of our service after the changes have been made indicates acceptance of the new terms.",
              fourthRule:
                "All copyrights and intellectual property rights belong to our company.",
              appreciation:
                "Thank you for using our service. If you have any questions or concerns, please contact us.",
            },
            privacyPolicy: {
              subtitle:
                "Welcome to our service! Before using our website, please read about our privacy policy:",
              firstRule: {
                rule: "Collection of Personal Data:",
                firstPoint:
                  "We may collect certain personal data, such as name, email address, phone number, etc., in order to provide our services and customize them to user needs.",
                secondPoint:
                  "The legal basis for processing personal data is user consent or legitimate interest related to the functioning of our service.",
              },
              secondRule: {
                rule: "Use of Collected Data:",
                firstPoint:
                  "The collected personal data is used to provide our services, grant access to relevant features, and personalize content.",
                secondPoint:
                  "We may also use data for analysis and improvement of our service, as well as for marketing purposes, if the user has given consent.",
              },
              thirdRule: {
                rule: "Sharing of Personal Data:",
                firstPoint:
                  "We commit to not share user personal data with third parties without their consent, unless necessary for providing our services (e.g., payment service providers or hosting services).",
                secondPoint:
                  "If personal data is shared with third parties, we ensure that they are subject to appropriate agreements and safeguards to protect user privacy.",
              },
              fourthRule: {
                rule: "Data Security:",
                firstPoint:
                  "We prioritize the security of collected personal data and implement appropriate security measures to protect against loss, unauthorized access, theft, or manipulation",
                secondPoint:
                  "We have implemented technical and organizational security measures, such as data encryption, access control, regular security audits, and training for our employees.",
              },
              fifthRule: {
                rule: "User Rights:",
                firstPoint:
                  "You have certain rights regarding the processing of your personal data. You have the right to request access to your data, correction, deletion, restriction of processing, and data portability.",
                secondPoint:
                  "if you have any questions regarding the processing of personal data or want to exercise the above rights, please contact us using the available contact information.",
              },
            },
            about: {
              tabs: {
                ourStory: {
                  title: "Our Story",
                  history: "History",
                  historyText:
                    "La Nemours is a French restaurant that was established in 2010 in the heart of the city. Inspired by the rich culinary traditions of France, the owner, a talented French chef, opened the restaurant to share his passion for French cuisine. ",
                  flavors: "Fresh French Flavors",
                  flavorsText:
                    "We take pride in serving only the freshest ingredients to create delicious French cuisine. Our menu features classic dishes made with high-quality, locally sourced ingredients, ensuring that every dish is bursting with flavor. From our savory entrees to our decadent desserts, we strive to provide our guests with an unforgettable dining experience. ",
                  staff: "Passionate Professionals",
                  staffText:
                    "At La Nemours, our team of skilled cooks and friendly staff are dedicated to providing exceptional service and delicious French food. With years of experience and a passion for French cooking techniques, our chefs create unforgettable dishes using the freshest ingredients. Our welcoming staff will make you feel at home, ensuring a memorable dining experience",
                },
                famousGuests: {
                  title: "Famous Guests",
                  subtitle:
                    "Embark on a gastronomic adventure as renowned critics share their thoughts on the culinary wonders you're about to discover.",
                  firstOpinion: `"Exquisite dishes, impeccable presentation, culinary masterpiece!"`,
                  secondOpinion: `"Flavor explosion, unforgettable culinary experiences!"`,
                  thirdOpinion: `"Michelin-worthy restaurant, unmatched taste!"`,
                  fourthOpinion: `"Innovative cuisine, culinary excellence at its finest!"`,
                  fifthOpinion: `"A gastronomic delight, a must-visit for food enthusiasts!"`,
                  longerOpinions: {
                    first: ` "The culinary experience at this French restaurant is truly exceptional, with a wide range of exquisitely prepared dishes that delight the palate and showcase the skill and creativity of the chefs. From the moment you step inside, you will be greeted with warm and attentive service, which sets the foundation for an unforgettable culinary journey where every detail is meticulously crafted. The authenticity of French cuisine comes to life with every bite, as the flavors transport you to the streets of Paris, with dishes rooted in tradition and prepared with the finest quality ingredients, offering a truly extraordinary gastronomic adventure. To complement the exceptional dishes, the restaurant boasts an impressive selection of carefully curated wines that perfectly complement the cuisine, elevating the entire culinary experience to new heights." `,
                    firstPerson: "~Akon Young",
                    second: `"The gastronomic experience at this French restaurant goes beyond expectations, offering a fascinating combination of flavors and textures that tantalize the senses and showcase the immense talent and innovation of the chefs. As you enter the restaurant, you are immediately enveloped in an atmosphere of elegance and refinement, with a team of knowledgeable and attentive staff who strive to provide truly unforgettable and personalized culinary experiences. What sets this place apart is its dedication to sourcing the highest quality ingredients, resulting in dishes that not only pay homage to French culinary traditions but also present a fusion of global influences. Every bite tells a story, taking you on a culinary journey that transcends borders. "`,
                    secondPerson: "~Ashley White",
                  },
                },
              },
            },
            contactHours: {
              title: "Opening Hours",
              day: "Day",
              open: "Opening",
              close: "Closing",
              getInTouch: "Get in Touch",
              location: "Lublin, Solna 1",
              phoneNumber: "+48 333 444 555",
              email: "lenemours@gmail.com",
            },
          },
          footer: {
            ourSocials: "Our Socials",
            rights: "© Le Nemours - 2023, All Rights Reserved",
          },
        },
      },
      pl: {
        translation: {
          checkout: {
            contactInfo: "Dane Kontaktowe",

            label: {
              sameForShipping: "Identyczne Dane Wysyłki",
            },
            steps: {
              billing: "Dane Rachunku",
              shipping: "Dane Wysyłki",
              payment: "Płatność",
            },
            buttons: {
              back: "Cofnij",
              next: "Dalej",
              placeOrder: "Złóż Zamówienie",
            },
            validation: {
              required: "wymagane",
            },
            addressForm: {
              firstName: "Imię",
              lastName: "Nazwisko",
              country: "Kraj",
              streetAddress: "Adres",
              city: "Miasto",
              state: "Województwo",
              zipCode: "Kod pocztowy",
            },
            paymentForm: {
              email: "Email",
              phoneNumber: "Numer Telefonu",
            },
          },
          addToBasket: "Dodaj do koszyka",
          dishMenu: {
            title: "Sprawdź Nasze Menu",
            searchLabel: "Szukaj produktów...",
            all: "Wszystko",
            appetizer: "Przystawki",
            soup: "Zupy",
            pasta: "Makarony",
            seafood: "Owoce morza",
            steak: "Steki",
            burger: "Burgery",
            dessert: "Desery",
          },
          basket: {
            title: "Twój Koszyk",
            subtotal: "Suma częściowa ",
            total: "Calkowity koszt",
            checkout: "Zamów",
            empty: "Brak produktów w koszyku. Odkryj naszy wspaniały wybór!",
            tooltips: {
              decrease: "Zmniejsz ilość",
              increase: "Zwiększ ilość",
              remove: "Usuń",
            },
          },
          navigation: {
            menu: "Menu",
            contact: "Kontakt",
            about: "O nas",
            privacyPolicy: "Polityka prywatności",
            termsConditions: "Zasady & warunki",
            tooltips: {
              home: "Strona główna",
              basket: "Koszyk",
              switchLanguage: "Zmień język",
            },
          },
          pages: {
            termsConditions: {
              subtitle:
                "Witamy w naszym serwisie! Przed skorzystaniem z naszej strony internetowej prosimy o zapoznanie się z poniższymi warunkami:",
              firstRule:
                "Korzystając z naszej usługi, zgadzasz się z naszymi warunkami użytkowania i polityką prywatności.",
              secondRule:
                "Zabrania się korzystania z naszego serwisu w sposób niezgodny z obowiązującymi przepisami prawa.",
              thirdRule:
                "Zastrzegamy sobie prawo do wprowadzania zmian w naszym serwisie w dowolnym momencie. Informacje o zmianach będą przekazywane użytkownikom w odpowiedni sposób, np. poprzez ogłoszenia na stronie internetowej lub powiadomienia e-mail. Dalsze korzystanie z naszego serwisu po wprowadzeniu zmian oznacza akceptację nowych warunków.",
              fourthRule:
                "Wszelkie prawa autorskie i prawa własności intelektualnej należą do naszej firmy.",
              appreciation:
                "Dziękujemy za skorzystanie z naszego serwisu. Jeśli masz jakiekolwiek pytania lub wątpliwości, skontaktuj się z nami.",
            },
            privacyPolicy: {
              subtitle:
                "Witamy w naszym serwisie! Przed skorzystaniem z naszej strony internetowej prosimy o zapoznanie się z naszą polityką prywatności:",
              firstRule: {
                rule: "Zbieranie danych osobowych:",
                firstPoint:
                  "Możemy gromadzić określone dane osobowe, takie jak imię, adres e-mail, numer telefonu itp., w celu świadczenia naszych usług i dostosowania ich do potrzeb użytkownika.",
                secondPoint:
                  "Podstawą prawną przetwarzania danych osobowych jest zgoda użytkownika lub uzasadniony interes związany z funkcjonowaniem naszego serwisu.",
              },
              secondRule: {
                rule: "Wykorzystanie zebranych danych:",
                firstPoint:
                  "Zebrane dane osobowe są wykorzystywane do świadczenia naszych usług, udzielania dostępu do odpowiednich funkcji i personalizowania treści.",
                secondPoint:
                  "Możemy również wykorzystywać dane do analizy i ulepszania naszego serwisu, a także do celów marketingowych, jeśli użytkownik wyraził na to zgodę.",
              },
              thirdRule: {
                rule: "Udostępnianie danych osobowych:",
                firstPoint:
                  "Zobowiązujemy się do nieudostępniania danych osobowych użytkownika osobom trzecim bez jego zgody, chyba że jest to konieczne do świadczenia naszych usług (np. dostawcy usług płatniczych lub usług hostingowych).",
                secondPoint:
                  "Jeśli dane osobowe są udostępniane osobom trzecim, zapewniamy, że podlegają one odpowiednim umowom i zabezpieczeniom mającym na celu ochronę prywatności użytkownika.",
              },
              fourthRule: {
                rule: "Bezpieczeństwo danych:",
                firstPoint:
                  "Priorytetem jest bezpieczeństwo zebranych danych osobowych, dlatego wprowadzamy odpowiednie środki bezpieczeństwa mające na celu ochronę przed utratą, nieautoryzowanym dostępem, kradzieżą lub manipulacją.",
                secondPoint:
                  "Wprowadziliśmy techniczne i organizacyjne środki bezpieczeństwa, takie jak szyfrowanie danych, kontrola dostępu, regularne audyty bezpieczeństwa i szkolenia dla naszych pracowników.",
              },
              fifthRule: {
                rule: "Prawa użytkownika:",
                firstPoint:
                  "Przysługują Ci określone prawa dotyczące przetwarzania Twoich danych osobowych. Masz prawo do żądania dostępu do swoich danych, ich poprawiania, usunięcia, ograniczenia przetwarzania oraz przenoszenia danych.",
                secondPoint:
                  "Jeśli masz jakiekolwiek pytania dotyczące przetwarzania danych osobowych lub chcesz skorzystać z powyższych praw, skontaktuj się z nami, korzystając z dostępnych danych kontaktowych.",
              },
            },
            about: {
              tabs: {
                ourStory: {
                  title: "Nasza Historia",
                  history: "Historia",
                  historyText:
                    "Restauracja La Nemours powstała w 2010 roku w samym sercu miasta. Inspiracją do jej otwarcia były bogate tradycje kulinarnego dziedzictwa Francji. Właściciel, utalentowany szef kuchni francuskiej, postanowił podzielić się swoją pasją do francuskiej kuchni. ",
                  flavors: "Świeże Smaki Francji",
                  flavorsText:
                    "Kładziemy nacisk na serwowanie potraw przygotowywanych tylko z najświeższych składników, aby zapewnić naszym gościom niezapomniane doznania smakowe. Nasze menu obejmuje klasyczne dania przygotowane z wysokiej jakości, lokalnie pozyskiwanych składników, co gwarantuje intensywność smaku. Od wykwintnych dań głównych po rozkoszne desery, staramy się zapewnić naszym gościom niezapomniane doświadczenie kulinarne.",
                  staff: "Pasjonaci w Służbie",
                  staffText:
                    "W La Nemours nasz zespół utalentowanych kucharzy i przyjaznego personelu jest oddany świadczeniu wyjątkowej obsługi i serwowania wyśmienitej francuskiej kuchni. Nasi kucharze, posiadający wieloletnie doświadczenie i pasję do francuskich technik kulinarnych, tworzą niezapomniane dania, używając najświeższych składników. Nasz gościnny personel sprawi, że poczujesz się jak w domu, zapewniając niezapomniane doświadczenie kulinarne.",
                },
                famousGuests: {
                  title: "Sławni Goście",
                  subtitle:
                    "Wyrusz w kulinarną przygodę, gdy renomowani krytycy dzielą się swoimi opiniami na temat cudowności kulinarnej, które zaraz odkryjesz.",
                  firstOpinion: `"Wyborne dania, nienaganna prezentacja, arcydzieło kulinarne!"`,
                  secondOpinion: `"Eksplozja smaków, niezapomniane doznania kulinarne!"`,
                  thirdOpinion: `"Restauracja godna gwiazdek Michelin, niezrównany smak!"`,
                  fourthOpinion: `"Innowacyjna kuchnia, doskonałość kulinarnej sztuki!"`,
                  fifthOpinion: `"Kulinarna uczta, miejsce obowiązkowe dla miłośników jedzenia!"`,
                  longerOpinions: {
                    first: `"Doświadczenie kulinarne w tej francuskiej restauracji jest naprawdę wyjątkowe, z szerokim wachlarzem wykwintnie przygotowanych dań, które zachwycają podniebienie i prezentują umiejętność i kreatywność szefów kuchni. Od momentu przekroczenia progu, zostaniesz przywitany ciepłą i troskliwą obsługą, która stanowi podstawę niezapomnianego doświadczenia kulinarnej podróży, gdzie każdy detal jest starannie dopracowany. Autentyczność francuskiej kuchni przejawia się w każdym kęsie, gdy smaki przenoszą Cię na ulice Paryża, z daniami zakorzenionymi w tradycji i przygotowanymi z najwyższej jakości składników, co daje prawdziwie niezwykłą gastronomiczną podróż. Aby uzupełnić wyjątkowe dania, restauracja może się poszczycić imponującym wyborem win, starannie dobranym, oferującym różnorodność, która doskonale komponuje się z daniami, podnosząc całe doświadczenie kulinarne na nowe wyżyny.`,
                    firstPerson: "~Akon Young",
                    second: `"Doświadczenie gastronomiczne w tej francuskiej restauracji wykracza poza oczekiwania, oferując fascynujące połączenie smaków i tekstur, które pobudzają zmysły i demonstrują ogromny talent i innowację szefów kuchni. Wchodząc do restauracji, natychmiast otula Cię atmosfera elegancji i wyrafinowania, z zespołem znających się na rzeczy i troskliwych pracowników, którzy dokładają wszelkich starań, aby zapewnić prawdziwie niezapomniane i spersonalizowane doświadczenie kulinarne. To, co wyróżnia to miejsce, to jego poświęcenie w poszukiwaniu najwyższej jakości składników, co przekłada się na dania, które nie tylko oddają hołd francuskim tradycjom kulinarnej, ale również prezentują połączenie wpływów globalnych. Każdy kęs opowiada historię, przenosząc Cię w kulinarną podróż, która przekracza granice."`,
                    secondPerson: "~Ashley White",
                  },
                },
              },
            },
            contactHours: {
              title: "Godziny Otwarcia",
              day: "Dzień",
              open: "Otwarcie",
              close: "Zamknięcie",

              getInTouch: "Skontaktuj się z nami",
              location: "Lublin, Solna 1",
              phoneNumber: "+48 333 444 555",
              email: "lenemours@gmail.com",
            },
          },
          footer: {
            ourSocials: "Nasze Media Społecznościowe",
            rights: " © Le Nemours - 2023, Wszystkie Prawa Zastrzeżone",
          },
        },
      },
    },
  });

export default i18n;
