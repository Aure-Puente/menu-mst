//Importaciones:
import { Box, Chip, Typography } from "@mui/material";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import LocalPizzaRoundedIcon from "@mui/icons-material/LocalPizzaRounded";
import LunchDiningRoundedIcon from "@mui/icons-material/LunchDiningRounded";
import BakeryDiningRoundedIcon from "@mui/icons-material/BakeryDiningRounded";
import LocalDrinkRoundedIcon from "@mui/icons-material/LocalDrinkRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import "./ProductCard.css";

//JSX:
function ProductCard({ item, categoryId }) {
  const isHouseSpecial = item.tag === "MST";

  const getCategoryIcon = () => {
    const iconStyles = { fontSize: 21 };

    switch (categoryId) {
      case "pizzas":
        return <LocalPizzaRoundedIcon sx={iconStyles} />;

      case "hamburguesas":
        return <LunchDiningRoundedIcon sx={iconStyles} />;

      case "empanadas":
        return <BakeryDiningRoundedIcon sx={iconStyles} />;

      case "papas-fritas":
        return <RestaurantRoundedIcon sx={iconStyles} />;

      case "bebidas":
        return <LocalDrinkRoundedIcon sx={iconStyles} />;

      default:
        return <RestaurantRoundedIcon sx={iconStyles} />;
    }
  };

  return (
    <article
      className={`product-card ${isHouseSpecial ? "product-card-special" : ""}`}
    >
      {isHouseSpecial && (
        <div className="house-special-badge">
          <WorkspacePremiumRoundedIcon sx={{ fontSize: 15 }} />
          <span>Especial de la casa</span>
        </div>
      )}

      <Box className="product-icon">{getCategoryIcon()}</Box>

      <Box className="product-info">
        <Box className="product-title-row">
          <Box className="product-name-wrapper">
            <Typography
              component="h3"
              sx={{
                fontSize: "1rem",
                fontWeight: 900,
                color: "var(--text)",
                lineHeight: 1.25,
              }}
            >
              {item.name}
            </Typography>

            {isHouseSpecial && (
              <StarRoundedIcon className="house-special-icon" />
            )}
          </Box>

          <Typography
            component="strong"
            sx={{
              fontSize: "0.98rem",
              fontWeight: 900,
              color: "var(--primary)",
              whiteSpace: "nowrap",
            }}
          >
            {item.price}
          </Typography>
        </Box>

        {item.description && (
          <Typography
            sx={{
              mt: 0.5,
              fontSize: "0.9rem",
              lineHeight: 1.4,
              color: "var(--muted-text)",
            }}
          >
            {item.description}
          </Typography>
        )}

        {item.tag && item.tag !== "MST" && (
          <Chip
            label={item.tag}
            size="small"
            sx={{
              mt: 1,
              height: 24,
              borderRadius: "999px",
              fontSize: "0.75rem",
              fontWeight: 800,
              color: "var(--accent)",
              backgroundColor: "rgba(111, 143, 95, 0.12)",
            }}
          />
        )}
      </Box>
    </article>
  );
}

export default ProductCard;