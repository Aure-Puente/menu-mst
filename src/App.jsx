//App:
import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CategoryNav from "./components/CategoryNav/CategoryNav";
import MenuGroup from "./components/MenuGroup/MenuGroup";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import { menuGroups } from "./data/menuData";

function App() {
  const [expandedGroup, setExpandedGroup] = useState(false);

  const handleSelectGroup = (groupId) => {
    setExpandedGroup(groupId);

    setTimeout(() => {
      const group = document.getElementById(groupId);

      if (group) {
        group.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 80);
  };

  return (
    <main className="app">
      <Header />

      <section className="hero">
        <span className="hero-chip">Menú digital</span>

        <h1>Comida sin TACC</h1>

        <p>
          Comida artesanal sin gluten, fresca y pensada para disfrutar con
          tranquilidad.
        </p>
      </section>

      <CategoryNav groups={menuGroups} onSelectGroup={handleSelectGroup} />

      <section className="menu-content">
        {menuGroups.map((group) => (
          <MenuGroup
            key={group.id}
            group={group}
            expanded={expandedGroup === group.id}
            onChange={() =>
              setExpandedGroup(expandedGroup === group.id ? false : group.id)
            }
          />
        ))}
      </section>

      <WhatsAppButton />
    </main>
  );
}

export default App;