import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Por favor, completa todos los campos.");
            return;
        }

        setError("");

        try {
            const response = await fetch(`${import.meta.env.VITE_URLAPI}api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    correo: email,
                    contrasenia: password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Error al iniciar sesión");
            }

            // Guardar token en localStorage
            localStorage.setItem("token", data.token);

            // Redirigir al dashboard
            navigate("/dashboard");
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded shadow-md w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
                {error && (
                    <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
                )}
                <div className="mb-4">
                    <label className="block mb-1 text-gray-700" htmlFor="email">
                        Correo electrónico
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-1 text-gray-700" htmlFor="password">
                        Contraseña
                    </label>
                    <input
                        id="password"
                        type="password"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Ingresar
                </button>
            </form>
        </div>
    );
};

export default Login;
