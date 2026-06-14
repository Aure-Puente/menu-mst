//Importaciones:
import { Box, Chip } from "@mui/material";
import "./CategoryNav.css";

//JSX:
function CategoryNav({ groups, onSelectGroup }) {
    return (
        <Box className="category-nav">
        {groups.map((group) => (
            <Chip
            key={group.id}
            label={group.title}
            onClick={() => onSelectGroup(group.id)}
            sx={{
                flexShrink: 0,
                height: 38,
                px: 0.6,
                borderRadius: "999px",
                fontFamily: "Nunito, sans-serif",
                fontWeight: 800,
                color: "var(--primary)",
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "0 8px 22px rgba(70, 45, 20, 0.06)",
                "&:hover": {
                backgroundColor: "var(--soft)",
                },
            }}
            />
        ))}
        </Box>
    );
}

export default CategoryNav;