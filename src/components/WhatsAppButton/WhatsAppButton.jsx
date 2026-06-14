//Importaciones:
import { IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./WhatsAppButton.css";

//JSX:
function WhatsAppButton() {
  const phone = "5492234237810";

  const message = encodeURIComponent(
    "Hola, vi el menú de Mar sin TACC y quería hacer una consulta."
  );

  return (
    <IconButton
      component="a"
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-button"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon sx={{ fontSize: 29 }} />
    </IconButton>
  );
}

export default WhatsAppButton;