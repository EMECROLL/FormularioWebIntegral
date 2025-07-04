const buildTelegramMessage = (data: {
    NombreCompleto: string;
    Correo: string;
    Telefono: string;
    Mensaje: string;
}) => {
    return `
*Nuevo mensaje desde el formulario web* 📩

*Nombre:* ${data.NombreCompleto}
*Correo:* ${data.Correo}
*Teléfono:* ${data.Telefono}
*Mensaje:*
${data.Mensaje}
`.trim();
};

const sendTelegramMessage = async (data: any) => {
    const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const message = buildTelegramMessage(data);

    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "Markdown",
        }),
    });
};
export default {
    sendTelegramMessage,
};
