//App:
import "./App.css";
import Header from "./components/Header/Header";
import CategoryNav from "./components/CategoryNav/CategoryNav";
import MenuSection from "./components/MenuSection/MenuSection";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import { menuData } from "./data/menuData";

function App() {
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

      <CategoryNav categories={menuData} />

      <section className="menu-content">
        {menuData.map((category) => (
          <MenuSection key={category.id} category={category} />
        ))}
      </section>

      <WhatsAppButton />
    </main>
  );
}

export default App;