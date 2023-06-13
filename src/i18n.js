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
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
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
                    "La Nemours is a French restaurant that was established in 2010 in the heart of the city. Inspired by the rich culinary traditions of France, the owner, a talented French chef, opened the restaurant to share his passion for French cuisine. La Nemours quickly gained popularity for its exquisite dishes crafted with the finest ingredients. With its elegant ambiance and superb food, it has become a cherished dining spot for both locals and tourists.",
                  flavors: "Fresh French Flavors",
                  flavorsText:
                    "We take pride in serving only the freshest ingredients to create delicious French cuisine. Our menu features classic dishes made with high-quality, locally sourced ingredients, ensuring that every dish is bursting with flavor. From our savory entrees to our decadent desserts, we strive to provide our guests with an unforgettable dining experience. At La Nemours, you'll savor the taste of authentic French cuisine, prepared with care and served with passion.",
                  staff: "Passionate Professionals",
                  staffText:
                    "At La Nemours, our team of skilled cooks and friendly staff are dedicated to providing exceptional service and delicious French food. With years of experience and a passion for French cooking techniques, our chefs create unforgettable dishes using the freshest ingredients. Our welcoming staff will make you feel at home, ensuring a memorable dining experience",
                },
                famousGuests: {
                  title: "Famous Guests",
                },
              },
            },
          },
        },
      },
      pl: {
        translation: {
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
                    "Restauracja La Nemours powstała w 2010 roku w samym sercu miasta. Inspiracją do jej otwarcia były bogate tradycje kulinarnego dziedzictwa Francji. Właściciel, utalentowany szef kuchni francuskiej, postanowił podzielić się swoją pasją do francuskiej kuchni. La Nemours szybko zdobyła popularność dzięki wyśmienitym daniom przygotowywanym z najwyższej jakości składników. Dzięki eleganckiej atmosferze i doskonałym potrawom, restauracja stała się ulubionym miejscem zarówno dla mieszkańców, jak i turystów.",
                  flavors: "Świeże Smaki Francji",
                  flavorsText:
                    "Kładziemy nacisk na serwowanie potraw przygotowywanych tylko z najświeższych składników, aby zapewnić naszym gościom niezapomniane doznania smakowe. Nasze menu obejmuje klasyczne dania przygotowane z wysokiej jakości, lokalnie pozyskiwanych składników, co gwarantuje intensywność smaku. Od wykwintnych dań głównych po rozkoszne desery, staramy się zapewnić naszym gościom niezapomniane doświadczenie kulinarne. W La Nemours poczujesz smak autentycznej francuskiej kuchni, przygotowanej z pasją i starannością.",
                  staff: "Pasjonaci w Służbie",
                  staffText:
                    "W La Nemours nasz zespół utalentowanych kucharzy i przyjaznego personelu jest oddany świadczeniu wyjątkowej obsługi i serwowania wyśmienitej francuskiej kuchni. Nasi kucharze, posiadający wieloletnie doświadczenie i pasję do francuskich technik kulinarnych, tworzą niezapomniane dania, używając najświeższych składników. Nasz gościnny personel sprawi, że poczujesz się jak w domu, zapewniając niezapomniane doświadczenie kulinarne.",
                },
                famousGuests: {
                  title: "Znani Goście",
                },
              },
            },
          },
        },
      },
    },
  });

export default i18n;
