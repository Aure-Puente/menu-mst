//Importaciones:
import { Box, Typography } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import "./MenuSection.css";

//JSX:
function MenuSection({ category }) {
    return (
        <section id={category.id} className="menu-section">
        <Box className="section-header">
            <Box>
            <Typography
                component="h3"
                sx={{
                fontFamily: "Fraunces, serif",
                fontSize: "1.45rem",
                fontWeight: 800,
                color: "var(--text)",
                lineHeight: 1.1,
                }}
            >
                {category.title}
            </Typography>

            <Typography
                sx={{
                mt: 0.5,
                fontSize: "0.92rem",
                color: "var(--muted-text)",
                lineHeight: 1.35,
                }}
            >
                {category.description}
            </Typography>
            </Box>
        </Box>

        <Box className="products-list">
            {category.items.map((item) => (
            <ProductCard
                key={item.id}
                item={item}
                categoryId={category.iconType || category.id}
            />
            ))}
        </Box>
        </section>
    );
}

export default MenuSection;