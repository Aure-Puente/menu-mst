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
                component="h2"
                sx={{
                fontFamily: "Fraunces, serif",
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "var(--text)",
                lineHeight: 1.1,
                }}
            >
                {category.title}
            </Typography>

            <Typography
                sx={{
                mt: 0.5,
                fontSize: "0.95rem",
                color: "var(--muted-text)",
                }}
            >
                {category.description}
            </Typography>
            </Box>
        </Box>

        <Box className="products-list">
            {category.items.map((item) => (
            <ProductCard key={item.id} item={item} categoryId={category.id} />
            ))}
        </Box>
        </section>
    );
}

export default MenuSection;