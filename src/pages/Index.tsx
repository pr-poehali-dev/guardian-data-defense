import { useState } from "react";
import Icon from "@/components/ui/icon";

const menuCategories = [
  {
    id: "hits",
    title: "Хиты продаж",
    emoji: "⭐",
    items: [
      {
        name: "Классический круассан",
        price: "120 ₽",
        desc: "Слоёное масляное тесто, хрустящая корочка, нежная сердцевина — завтрак мечты.",
        img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        tag: "Хит",
        tagColor: "var(--primary)",
        tagTextColor: "white",
      },
      {
        name: "Домашний пирог",
        price: "280 ₽",
        desc: "С яблоком, вишней или капустой — как у бабушки, только лучше.",
        img: "https://cdn.poehali.dev/projects/6771503c-c87f-4ea3-a999-6ca71472d6bc/files/b0be26a7-28a8-45b1-a9e0-95cd3b4835d0.jpg",
        tag: "Любимое",
        tagColor: "var(--secondary)",
        tagTextColor: "white",
      },
      {
        name: "Хлеб на закваске",
        price: "220 ₽",
        desc: "Ремесленный хлеб с хрустящей корочкой и мягким мякишем. Выпекаем каждое утро.",
        img: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        tag: "Свежий",
        tagColor: "var(--accent)",
        tagTextColor: "var(--dark)",
      },
    ],
  },
  {
    id: "sweets",
    title: "Сладкая выпечка",
    emoji: "🥐",
    items: [
      {
        name: "Яблочный штрудель",
        price: "190 ₽",
        desc: "Тонкое тесто, сочные яблоки, корица и сахарная пудра — классика Европы.",
        img: "https://cdn.poehali.dev/projects/6771503c-c87f-4ea3-a999-6ca71472d6bc/files/0e5be57b-7c0a-4757-9f8a-5ccd68a34c2e.jpg",
        tag: "Новинка",
        tagColor: "var(--primary)",
        tagTextColor: "white",
      },
      {
        name: "Макарунс",
        price: "95 ₽",
        desc: "Нежнейшие французские макаруны с разнообразными начинками.",
        img: "https://cdn.poehali.dev/projects/6771503c-c87f-4ea3-a999-6ca71472d6bc/files/eb120fd4-f125-4f32-93fb-2abea26714a3.jpg",
        tag: "Популярное",
        tagColor: "var(--secondary)",
        tagTextColor: "white",
      },
      {
        name: "Улитка с изюмом",
        price: "110 ₽",
        desc: "Мягкая слойка-улитка с сочным изюмом и ванильным кремом.",
        img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        tag: "Любимое",
        tagColor: "var(--accent)",
        tagTextColor: "var(--dark)",
      },
    ],
  },
  {
    id: "special",
    title: "Десерты",
    emoji: "🎂",
    items: [
      {
        name: "Кейк попсы",
        price: "130 ₽",
        desc: "Пирожное на палочке в шоколадной глазури — вкусно и весело.",
        img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        tag: "Десерт",
        tagColor: "var(--primary)",
        tagTextColor: "white",
      },
      {
        name: "Слойки с вишней",
        price: "150 ₽",
        desc: "Хрустящее слоёное тесто с кисло-сладкой вишнёвой начинкой.",
        img: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        tag: "Вкусно",
        tagColor: "var(--secondary)",
        tagTextColor: "white",
      },
      {
        name: "Меренговый рулет",
        price: "260 ₽",
        desc: "Воздушная меренга, нежный крем и ягоды — лёгкий десерт без муки.",
        img: "https://cdn.poehali.dev/projects/6771503c-c87f-4ea3-a999-6ca71472d6bc/files/3e525c38-4f31-40dd-82af-0f00b89d50eb.jpg",
        tag: "Топ",
        tagColor: "var(--accent)",
        tagTextColor: "var(--dark)",
      },
    ],
  },
];

export default function Index() {
  const [openCategory, setOpenCategory] = useState<string | null>("hits");

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">LA*BUAGETTE</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Скидки</a>
          <a href="#">Адрес</a>
        </nav>
        <a href="tel:+79174767904" className="btn-cta">Заказать</a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              СВЕЖО.
              <br />
              ВКУСНО. <span>Каждый день.</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Круассаны, пироги, хлеб — всё, что вы любите, с пылу с жару. Пекарня La Buagette в Уфе. Скидка на всю выпечку после 19:00!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a href="tel:+79174767904" className="btn-cta" style={{ background: "var(--primary)", color: "white", textDecoration: "none" }}>
                Позвонить и заказать
              </a>
              <button className="btn-cta" style={{ background: "white" }}>
                Как добраться
              </button>
            </div>
          </div>
          <div
            className="hero-img"
            style={{
              backgroundImage: `url("https://cdn.poehali.dev/projects/6771503c-c87f-4ea3-a999-6ca71472d6bc/files/2a529b55-2c05-4afc-ad9b-c92900387de3.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="sticker">
              СКИДКА
              <br />
              ПОСЛЕ 19:00
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #СВЕЖАЯВЫПЕЧКА
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ВАУ!
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * КРУАССАНЫ КАЖДОЕ УТРО * ПИРОГИ КАК У БАБУШКИ * ХЛЕБ НА ЗАКВАСКЕ * СКИДКА ПОСЛЕ 19:00 * УФА, ЭНТУЗИАСТОВ 16 *
            КРУАССАНЫ КАЖДОЕ УТРО * ПИРОГИ КАК У БАБУШКИ * ХЛЕБ НА ЗАКВАСКЕ * СКИДКА ПОСЛЕ 19:00 * УФА, ЭНТУЗИАСТОВ 16
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ПОЛНОЕ МЕНЮ</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {menuCategories.map((category) => {
              const isOpen = openCategory === category.id;
              return (
                <div key={category.id} style={{ border: "var(--border)", marginBottom: "-3px" }}>
                  <button
                    onClick={() => setOpenCategory(isOpen ? null : category.id)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "20px 24px",
                      background: isOpen ? "var(--dark)" : "white",
                      color: isOpen ? "white" : "var(--dark)",
                      border: "none",
                      cursor: "pointer",
                      transition: "0.2s",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Unbounded', sans-serif",
                        fontWeight: 800,
                        fontSize: "clamp(16px, 2.5vw, 22px)",
                        textTransform: "uppercase",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <span>{category.emoji}</span>
                      {category.title}
                      <span style={{ fontSize: "13px", fontWeight: 600, opacity: 0.5, fontFamily: "Montserrat, sans-serif", textTransform: "none" }}>
                        {category.items.length} позиции
                      </span>
                    </span>
                    <Icon name={isOpen ? "ChevronUp" : "ChevronDown"} size={24} />
                  </button>

                  {isOpen && (
                    <div className="menu-grid" style={{ padding: "30px 24px", background: "var(--bg)" }}>
                      {category.items.map((item) => (
                        <div className="menu-card" key={item.name}>
                          <span className="menu-tag" style={{ background: item.tagColor, color: item.tagTextColor }}>
                            {item.tag}
                          </span>
                          <img src={item.img} alt={item.name} />
                          <div className="menu-card-body">
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                              <h3>{item.name}</h3>
                              <span className="price">{item.price}</span>
                            </div>
                            <p style={{ fontSize: "14px", color: "#666" }}>{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ТЕПЛО. ВКУСНО. СВЕЖО.</h2>
            <p className="vibe-text">
              La Buagette — это не просто пекарня. Это место, куда хочется возвращаться каждый день за любимым круассаном и хорошим настроением. Выпечка готовится с утра и пахнет так, что соседи завидуют. А после 19:00 — скидка на всё. Просто приходи!
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              О нас
            </button>
          </div>
          <div
            className="vibe-img"
            style={{
              backgroundImage: `url("https://cdn.poehali.dev/projects/6771503c-c87f-4ea3-a999-6ca71472d6bc/files/9646e557-aa80-4153-8cf0-c555ecbc941d.jpg")`,
            }}
          ></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @LA.BUAGETTE
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Круассаны"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/6771503c-c87f-4ea3-a999-6ca71472d6bc/files/2a529b55-2c05-4afc-ad9b-c92900387de3.jpg"
                alt="Выпечка"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Хлеб"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/6771503c-c87f-4ea3-a999-6ca71472d6bc/files/b0be26a7-28a8-45b1-a9e0-95cd3b4835d0.jpg"
                alt="Пироги"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">LA*BUAGETTE</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Свежая вкусная выпечка каждый день. Круассаны, пироги, хлеб — всё самое любимое.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Акции
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-hours">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 07:00–21:00</li>
            <li>Сб–Вс: 08:00–21:00</li>
            <li style={{ color: "var(--primary)", fontWeight: 700 }}>Скидка на всё после 19:00!</li>
          </ul>
        </div>
        <div>
          <h4>Адрес</h4>
          <p style={{ color: "#666", lineHeight: 1.8 }}>
            г. Уфа,<br />
            ул. Энтузиастов, 16
          </p>
        </div>
      </footer>
    </>
  );
}