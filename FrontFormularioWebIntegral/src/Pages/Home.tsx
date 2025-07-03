import React from "react";

const Home = () => {
  return (
    <div>
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: "#f5f5f5",
          borderBottom: "1px solid #ddd",
        }}
      >
        <h1>Formulario Web Integral</h1>
        <div>
          <button
            onClick={() => (window.location.href = "/Formulario")}
            style={{ marginRight: "1rem" }}
          >
            Ir al Formulario
          </button>
          <button onClick={() => (window.location.href = "/Login")}>
            Iniciar Sesión
          </button>
        </div>
      </header>

      {/* Cuerpo */}
      <main style={{ padding: "2rem" }}>
        <p>Hola, bienvenido a la página de inicio de nuestro formulario web integral.</p>
      </main>
    </div>
  );
};

export default Home;
