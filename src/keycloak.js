import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  realm: "MonRealm",
  url: "http://localhost:8080/", // Assurez-vous que l'URL est correcte
  clientId: "keycloak-client",
});

const initKeycloak = async () => {
  try {
    const authenticated = await keycloak.init({ onLoad: "check-sso" });
    if (authenticated) {
      console.log("Keycloak est initialisé");
    } else {
      console.log("L'initialisation de Keycloak a échoué");
    }
  } catch (error) {
    console.error("Erreur lors de l'initialisation de Keycloak", error);
  }
};

export { keycloak, initKeycloak };
