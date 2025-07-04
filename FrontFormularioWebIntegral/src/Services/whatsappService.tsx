const sendMessage = (data: { NombreCompleto: string; Telefono: string }) => {
  // Sanitizar el número (eliminar espacios, guiones, etc.)
  const cleanedPhone = data.Telefono.replace(/\D/g, "");

  const message = `
Hola ${data.NombreCompleto}, estás contactando al soporte de SoporteTech (o el nombre de tu empresa). En breve te atenderemos. 🙌
  `.trim();

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${cleanedPhone}?text=${encodedMessage}`;

  // Abrir WhatsApp en nueva pestaña
  window.open(whatsappUrl, "_blank");
};

export default {
  sendMessage,
};
