import { useEffect, useState } from "react";
import { useAuthStore } from "../Store/authStore";
import { useNavigate } from "react-router-dom";

const StatusEnum = Object.freeze({
    NUEVO: 1,
    CONTACTADO: 2,
    DESCARTADO: 3,
});

const statusLabels: Record<number, string> = {
    [StatusEnum.NUEVO]: "Nuevo",
    [StatusEnum.CONTACTADO]: "Contactado",
    [StatusEnum.DESCARTADO]: "Descartado",
};

function Dashboard() {
    const { logout } = useAuthStore();
    const navigate = useNavigate();

    const [usuarios, setUsuarios] = useState<any[]>([]);
    const [error, setError] = useState<string>("");

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const obtenerValorEstatus = (texto: string): number => {
    const entry = Object.entries(statusLabels).find(
        ([_, label]) => label.toLowerCase() === texto.toLowerCase()
    );
    return entry ? parseInt(entry[0]) : StatusEnum.NUEVO; // Default si no encuentra
};

    const fetchUsuarios = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_URLAPI}/api/usuarios`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || `Error HTTP: ${response.status}`);
            }
            const data = await response.json();
            setUsuarios(data);
        } catch (err: any) {
            setError(err.message || "Error al cargar usuarios");
        }
    };

    useEffect(() => {
        fetchUsuarios();
    }, []);

    const actualizarEstatus = async (id: number, nuevoEstatus: number) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_URLAPI}/api/usuarios/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nuevoEstatus }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || `Error HTTP: ${response.status}`);
            }

            setUsuarios((prevUsuarios) =>
                prevUsuarios.map((u) =>
                    u.Id === id ? { ...u, Estatus: nuevoEstatus } : u
                )
            );
        } catch (err: any) {
            alert(`Error al actualizar el estatus: ${err.message}`);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f8f4e9] to-[#f0ebe0] font-serif">
            <header className="bg-[#2a2e35] text-[#e8e6e1] p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-light tracking-wider text-[#d4af37]">Panel de Control</h1>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => navigate("/")}
                            className="px-4 py-2 rounded-sm bg-transparent border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#2a2e35] transition-all duration-300 font-light tracking-wide"
                        >
                            Inicio
                        </button>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 rounded-sm bg-[#d4af37] text-[#2a2e35] hover:bg-[#c19b2e] transition-all duration-300 font-light tracking-wide"
                        >
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-grow container mx-auto p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-sm p-8 border border-[#e8e6e1] h-full">
                    <h2 className="text-2xl font-light text-[#3a3226] mb-6 pb-2 border-b border-[#e8e6e1]">
                        Bienvenido al Dashboard
                    </h2>

                    {error && (
                        <div className="mb-6 p-3 bg-[#f0ebe0] border border-[#d4af37] text-[#d4af37] text-sm text-center font-light rounded-sm">
                            {error}
                        </div>
                    )}

                    <table className="min-w-full divide-y divide-gray-200 rounded-md overflow-hidden shadow-lg">
                        <thead className="bg-[#d4af37]">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Nombre Completo
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Correo
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Teléfono
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Mensaje
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Estatus
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {usuarios.map((usuario) => (
                                <tr
                                    key={usuario.Id}
                                    className="hover:bg-[#f0e9d2] transition-colors duration-300"
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                                        {usuario.Id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {usuario.NombreCompleto}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {usuario.Correo}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {usuario.Telefono}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 max-w-xs truncate">
                                        {usuario.Mensaje}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        <select
                                            value={obtenerValorEstatus(usuario.Estatus)}
                                            onChange={(e) =>
                                                actualizarEstatus(usuario.Id, parseInt(e.target.value))
                                            }
                                            className="bg-[#f9f7f1] border border-gray-300 rounded-md px-2 py-1 font-light text-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                                        >
                                            <option value={StatusEnum.NUEVO}>{statusLabels[StatusEnum.NUEVO]}</option>
                                            <option value={StatusEnum.CONTACTADO}>{statusLabels[StatusEnum.CONTACTADO]}</option>
                                            <option value={StatusEnum.DESCARTADO}>{statusLabels[StatusEnum.DESCARTADO]}</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </main>

            <footer className="bg-[#2a2e35] text-[#e8e6e1] py-4 text-center font-light tracking-wide border-t border-[#3a3f47]">
                <div className="container mx-auto">
                    <p className="text-sm">© 2025 Formulario Web Integral. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
}

export default Dashboard;
