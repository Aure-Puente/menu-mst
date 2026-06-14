//Importaciones:
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Typography,
} from "@mui/material";

import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import CakeRoundedIcon from "@mui/icons-material/CakeRounded";
import LocalCafeRoundedIcon from "@mui/icons-material/LocalCafeRounded";
import LocalDrinkRoundedIcon from "@mui/icons-material/LocalDrinkRounded";
import MenuSection from "../MenuSection/MenuSection";
import "./MenuGroup.css";

//JSX:
function MenuGroup({ group, expanded, onChange }) {
    const getGroupIcon = () => {
        const iconStyles = { fontSize: 22 };

        switch (group.id) {
        case "salado":
            return <RestaurantRoundedIcon sx={iconStyles} />;

        case "dulce":
            return <CakeRoundedIcon sx={iconStyles} />;

        case "cafeteria":
            return <LocalCafeRoundedIcon sx={iconStyles} />;

        case "bebidas":
            return <LocalDrinkRoundedIcon sx={iconStyles} />;

        default:
            return <RestaurantRoundedIcon sx={iconStyles} />;
        }
    };

    return (
        <Accordion
        id={group.id}
        expanded={expanded}
        onChange={onChange}
        disableGutters
        elevation={0}
        className="menu-group"
        >
        <AccordionSummary
            expandIcon={<ExpandMoreRoundedIcon className="menu-group-chevron" />}
            className="menu-group-summary"
        >
            <Box className="menu-group-icon">{getGroupIcon()}</Box>

            <Box className="menu-group-text">
            <Typography
                component="h2"
                sx={{
                fontFamily: "Fraunces, serif",
                fontSize: "1.55rem",
                fontWeight: 800,
                color: "var(--text)",
                lineHeight: 1.1,
                }}
            >
                {group.title}
            </Typography>

            <Typography
                sx={{
                mt: 0.4,
                fontSize: "0.92rem",
                color: "var(--muted-text)",
                lineHeight: 1.35,
                }}
            >
                {group.description}
            </Typography>
            </Box>
        </AccordionSummary>

        <AccordionDetails className="menu-group-details">
            {group.categories.map((category) => (
            <MenuSection key={category.id} category={category} />
            ))}
        </AccordionDetails>
        </Accordion>
    );
}

export default MenuGroup;