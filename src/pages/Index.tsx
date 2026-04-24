export default function Index() {
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
        <button className="btn-cta">Заказать</button>
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
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Смотреть меню
              </button>
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
            <h2 className="section-title">НАШИ ХИТЫ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Круассан */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Круассан"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Классический круассан</h3>
                  <span className="price">120 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Слоёное масляное тесто, хрустящая корочка, нежная сердцевина — завтрак мечты.
                </p>
              </div>
            </div>

            {/* Пирог */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Любимое
              </span>
              <img
                src="https://cdn.poehali.dev/projects/6771503c-c87f-4ea3-a999-6ca71472d6bc/files/b0be26a7-28a8-45b1-a9e0-95cd3b4835d0.jpg"
                alt="Домашний пирог"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Домашний пирог</h3>
                  <span className="price">280 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Пироги с яблоком, вишней или капустой — как у бабушки, только лучше.</p>
              </div>
            </div>

            {/* Хлеб */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Свежий
              </span>
              <img
                src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Хлеб на закваске"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Хлеб на закваске</h3>
                  <span className="price">220 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Ремесленный хлеб с хрустящей корочкой и мягким мякишем. Выпекаем каждое утро.
                </p>
              </div>
            </div>
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
