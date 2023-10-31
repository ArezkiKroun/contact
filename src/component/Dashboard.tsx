import React, { useEffect } from "react";
import { keycloak } from "../keycloak";

function Dashboard() {
  const login = () => {
    keycloak.login();
  };

  if (keycloak.authenticated) {
    return <div>Connecté</div>;
  } else {
    return (
      <div>
        <p>Veuillez vous connecter pour accéder au tableau de bord.</p>
        <button onClick={login}>Se connecter avec Keycloak</button>
      </div>
    );
  }
}

export default Dashboard;
