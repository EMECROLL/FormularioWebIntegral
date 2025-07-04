import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../Store/authStore";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuthStore();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Por favor, completa todos los campos.");
            return;
        }

        setError("");
        setIsLoading(true);

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
            //* Login del authStore
            login(data.token);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8f4e9] to-[#f0ebe0] font-serif p-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white/90 backdrop-blur-sm p-10 rounded-lg shadow-sm border border-[#e8e6e1] w-full max-w-md"
            >
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-light text-[#3a3226] tracking-wider mb-2">
                        Iniciar Sesión
                    </h2>
                    <p className="text-[#5a5248] font-light text-sm">
                        Ingresa tus credenciales para acceder al sistema
                    </p>
                </div>

                {error && (
                    <div className="mb-6 p-3 bg-[#f0ebe0] border border-[#d4af37] text-[#d4af37] text-sm text-center font-light rounded-sm">
                        {error}
                    </div>
                )}

                <div className="mb-6">
                    <label className="block mb-2 text-[#3a3226] font-light tracking-wide" htmlFor="email">
                        Correo electrónico
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-3 bg-[#f9f7f1] border border-[#e8e6e1] rounded-sm text-[#3a3226] font-light
              focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:bg-white transition"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        required
                    />
                </div>

                <div className="mb-8">
                    <label className="block mb-2 text-[#3a3226] font-light tracking-wide" htmlFor="password">
                        Contraseña
                    </label>
                    <input
                        id="password"
                        type="password"
                        className="w-full px-4 py-3 bg-[#f9f7f1] border border-[#e8e6e1] rounded-sm text-[#3a3226] font-light
              focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:bg-white transition"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-3 bg-[#2a2e35] text-[#e8e6e1] font-light tracking-wide rounded-sm
            hover:bg-[#3a3f47] transition flex justify-center items-center gap-2
            border border-[#3a3f47] ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
                >
                    {isLoading ? (
                        <>
                            <svg
                                className="animate-spin h-4 w-4 text-[#e8e6e1]"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                ></path>
                            </svg>
                            Procesando...
                        </>
                    ) : (
                        'Ingresar'
                    )}
                </button>

                <div className="mt-6 text-center">
                    <p className="text-xs text-[#5a5248] font-light">
                        ¿Problemas para acceder?{' '}
                        <a href="/contacto" className="text-[#d4af37] hover:underline transition">
                            Contacta al administrador
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;