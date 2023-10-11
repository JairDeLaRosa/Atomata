
i18next.init({
  debug: true,
  lng: 'es',
  resources: {
    en: {
      translation: {
        speed: "Speed animation:",
        word: "Enter word: ",
        button: "Validate",
        language: "Language",
        spanish: "Spanish",
        inglish: "Inglish",
        wordAccept: "accepted Word",
        wordNotAccept: "unaccepted word",
      },
    },
    es: {
      translation: {
        speed: "Velocidad de la animacion",
        word: "Ingresar palabra: ",
        button: "Validar",
        language: "Idioma",
        spanish: "Español",
        inglish: "Ingles",
        wordAccept: "Palabra aceptada",
        wordNotAccept: "Palabra rechazada",
      },
    },
  },
});

function translate() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = i18next.t(key);
  });
}

document.addEventListener("DOMContentLoaded", translate);
