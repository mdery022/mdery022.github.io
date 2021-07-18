/**Code from https://react.i18next.com/latest/using-with-hooks */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      en: {
        translation: {
          "catalog": "Catalog",
          "categories": "Categories",
          "hour": "hour",
          "reserve": "Reserve",
          "chat": "Chat",
          "shortDescription": "Short Description",
          "mariage": "Wedding",
          "awards": "Awards",
          "commercial": "Commercial",
          "fashion": "Fashion",
          "other": "Other",
          "help-message": "Hi! How can we help you?",
          "no-backend-message": "As there is no backend, the messages will not be saved upon closing or reloading this window.",
          "help": "Help",
          "messages": "Messages",
          "no-messages": "Looks like you don't have any messages",
          "browse-catalog": "Browse our catalog >",
          "find-best": "Find the best photograph for any occasion!",
          "huge-catalog": "Go through our huge catalog of professionals tailored to your needs.",
          "easily-chat": "Easily chat and book with any of our photographs.",
          "longDescription": "Long Description",
          "reservations": "Reservations",
          "no-reservations": "Looks like you don't have any reservations :(",
          "make-reservation": "Make a reservation",
          "reservation-details": "Reservation Details",
          "photographer": "Photographer",
          "rate": "Rate",
          "date": "Date",
          "time": "Time",
          "duration": "Duration",
          "total": "Total",
          "personal-information": "Personal Information",
          "name": "Name",
          "email": "Email",
          "phone-number": "Phone Number",
          "reservation-complete": "Reservation complete!",
          "see-reservations": "You may see your reservations by clicking on the top right calendar."
        }
      },
      fr: {
        translation: {
          "catalog": "Catalogue",
          "categories": "Catégories",
          "hour": "heure",
          "reserve": "Réserver",
          "chat": "Chat",
          "shortDescription": "Description Courte",
          "mariage": "Mariage",
          "awards": "Décernation de prix",
          "commercial": "Annonces commerciales",
          "fashion": "Fashion",
          "other": "Autre",
          "help-message": "Bonjour! Comment pouvons-nous vous aider?",
          "no-backend-message": "Comme il n'y a pas de backend, les messages ne seront pas sauvegarder lorsque la page sera quittée ou réinitialisée.",
          "help": "Aide",
          "messages": "Messages",
          "no-messages": "Vous n'avez aucun messages.",
          "browse-catalog": "Voir le catalogue >",
          "find-best": "Trouver le meilleur photographe pour toutes les occasions!",
          "huge-catalog": "Parcourer notre gigantesque catalogue de professionnels selon vos besoins.",
          "easily-chat": "Communiquer et réserver facilement avec nos photographes.",
          "longDescription": "Description Longue",
          "reservations": "Réservations",
          "no-reservations": "Vous n'avez aucune réservations. :(",
          "make-reservation": "Faire une réservation",
          "reservation-details": "Détails de la réservation",
          "photographer": "Photographe",
          "rate": "Taux",
          "date": "Date",
          "time": "Heure",
          "duration": "Durée",
          "total": "Total",
          "personal-information": "Informations Personnels",
          "name": "Nom",
          "email": "Couriel",
          "phone-number": "Numéro de téléhone",
          "reservation-complete": "Réservation complète!",
          "see-reservations": "Vouz pouvez voir vos réservations en cliquant sur le candrier dans le coin supérieur droit."
        }
      }
    },
    lng: "en",
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;