// Base de datos de productos con precios en Soles Peruanos
const productos = [
    // FÚTBOL - 25 productos
    { id: 1, nombre: "Botines Nike Mercurial Superfly", descripcion: "Botines de fútbol de alta gama para terreno firme", precio: 950.00, precioOriginal: 1150.00, categoria: "futbol", image:"imagenes/futbol/Botines Nike Mercurial1.jpg", oferta: true, especificaciones: ["Material: Flyknit", "Suela: FG", "Peso: 210g", "Color: Rojo/Negro"], stock: 15 },
    { id: 2, nombre: "Balón Adidas Champions League", descripcion: "Balón oficial de la UEFA Champions League", precio: 550.00, precioOriginal: 680.00, categoria: "futbol", icono: "fas fa-futbol", oferta: true, especificaciones: ["Tamaño: 5", "Material: Polyurethane", "Cámara: Butyl", "Color: Blanco"], stock: 25 },
    { id: 3, nombre: "Camiseta FC Barcelona 2023", descripcion: "Camiseta oficial del FC Barcelona temporada 2023", precio: 380.00, precioOriginal: 450.00, categoria: "futbol", icono: "fas fa-tshirt", oferta: false, especificaciones: ["Material: Polyester", "Tallas: S-XXL", "Color: Azul/Granate", "Sponsor: Spotify"], stock: 40 },
    { id: 4, nombre: "Guantes Portero Uhlsport", descripcion: "Guantes profesionales para portero", precio: 340.00, precioOriginal: 420.00, categoria: "futbol", icono: "fas fa-baseball-ball", oferta: true, especificaciones: ["Talla: 9", "Material: Latex", "Cierre: Velcro", "Color: Negro/Amarillo"], stock: 18 },
    { id: 5, nombre: "Espinilleras Nike Mercurial", descripcion: "Espinilleras ligeras con máximo confort", precio: 130.00, precioOriginal: 150.00, categoria: "futbol", icono: "fas fa-shield-alt", oferta: false, especificaciones: ["Material: EVA", "Talla: M", "Color: Negro", "Ajuste: Cintas elásticas"], stock: 32 },
    { id: 6, nombre: "Medias Nike Grip", descripcion: "Medias de fútbol con tecnología antideslizante", precio: 75.00, precioOriginal: 95.00, categoria: "futbol", icono: "fas fa-socks", oferta: false, especificaciones: ["Material: Algodón/Polyester", "Talla: 39-45", "Color: Blanco/Negro", "Largo: Tobillera"], stock: 55 },
    { id: 7, nombre: "Botines Puma Future Z", descripcion: "Botines de fútbol para máximo control", precio: 680.00, precioOriginal: 760.00, categoria: "futbol", icono: "fas fa-futbol", oferta: true, especificaciones: ["Material: NETFIT", "Suela: FG/AG", "Peso: 225g", "Color: Azul/Rosa"], stock: 22 },
    { id: 8, nombre: "Balón Nike Premier League", descripcion: "Balón oficial de la Premier League", precio: 490.00, precioOriginal: 570.00, categoria: "futbol", icono: "fas fa-futbol", oferta: false, especificaciones: ["Tamaño: 5", "Material: Synthetic", "Cámara: Butyl", "Color: Blanco/Azul"], stock: 30 },
    { id: 9, nombre: "Camiseta Real Madrid 2023", descripcion: "Camiseta oficial del Real Madrid temporada 2023", precio: 380.00, precioOriginal: 450.00, categoria: "futbol", icono: "fas fa-tshirt", oferta: true, especificaciones: ["Material: Polyester", "Tallas: S-XXL", "Color: Blanco", "Sponsor: Fly Emirates"], stock: 38 },
    { id: 10, nombre: "Guantes Portero Reusch", descripcion: "Guantes de portero con tecnología Grip", precio: 450.00, precioOriginal: 530.00, categoria: "futbol", icono: "fas fa-baseball-ball", oferta: true, especificaciones: ["Talla: 10", "Material: Latex Fusion", "Cierre: Velcro", "Color: Verde/Negro"], stock: 14 },
    { id: 11, nombre: "Botines Adidas Predator", descripcion: "Botines para control y precisión", precio: 830.00, precioOriginal: 950.00, categoria: "futbol", icono: "fas fa-futbol", oferta: false, especificaciones: ["Material: Primeknit", "Suela: FG", "Peso: 230g", "Color: Blanco/Rojo"], stock: 20 },
    { id: 12, nombre: "Equipación Completa Fútbol", descripcion: "Conjunto completo de fútbol (camiseta, short, medias)", precio: 300.00, precioOriginal: 380.00, categoria: "futbol", icono: "fas fa-tshirt", oferta: true, especificaciones: ["Material: Polyester", "Tallas: S-XXL", "Color: Varios", "Incluye: 3 piezas"], stock: 28 },
    { id: 13, nombre: "Bolsas para Botines Nike", descripcion: "Bolsa especial para transportar botines", precio: 110.00, precioOriginal: 130.00, categoria: "futbol", icono: "fas fa-bag", oferta: false, especificaciones: ["Material: Polyester", "Capacidad: 2 pares", "Color: Negro", "Ventilación: Sí"], stock: 45 },
    { id: 14, nombre: "Bombas de Aire para Balones", descripcion: "Kit completo para inflar balones", precio: 95.00, precioOriginal: 115.00, categoria: "futbol", icono: "fas fa-wind", oferta: false, especificaciones: ["Incluye: Bomba, agujas", "Material: Plástico/metal", "Color: Rojo", "Portátil: Sí"], stock: 60 },
    { id: 15, nombre: "Conos de Entrenamiento", descripcion: "Set de 50 conos para entrenamiento", precio: 150.00, precioOriginal: 190.00, categoria: "futbol", icono: "fas fa-traffic-cone", oferta: true, especificaciones: ["Cantidad: 50", "Altura: 18cm", "Color: Naranja", "Material: PVC"], stock: 35 },
    { id: 16, nombre: "Botines Mizuno Morelia", descripcion: "Botines de fútbol clásicos de piel", precio: 720.00, precioOriginal: 830.00, categoria: "futbol", icono: "fas fa-futbol", oferta: true, especificaciones: ["Material: Piel de canguro", "Suela: FG", "Peso: 240g", "Color: Blanco/Negro"], stock: 12 },
    { id: 17, nombre: "Balón Mundial Qatar 2022", descripcion: "Balón oficial del Mundial Qatar 2022", precio: 610.00, precioOriginal: 720.00, categoria: "futbol", icono: "fas fa-futbol", oferta: false, especificaciones: ["Tamaño: 5", "Material: Polyurethane", "Cámara: Butyl", "Color: Blanco/Dorado"], stock: 22 },
    { id: 18, nombre: "Camiseta Argentina 2022", descripcion: "Camiseta oficial de Argentina campeona del mundo", precio: 450.00, precioOriginal: 530.00, categoria: "futbol", icono: "fas fa-tshirt", oferta: true, especificaciones: ["Material: Polyester", "Tallas: S-XXL", "Color: Azul/Blanco", "Sponsor: Adidas"], stock: 35 },
    { id: 19, nombre: "Guantes Portero Nike GK", descripcion: "Guantes de portero con tecnología Grip3", precio: 380.00, precioOriginal: 450.00, categoria: "futbol", icono: "fas fa-baseball-ball", oferta: false, especificaciones: ["Talla: 8", "Material: Latex", "Cierre: Velcro", "Color: Verde fluorescente"], stock: 17 },
    { id: 20, nombre: "Espinilleras Adidas Predator", descripcion: "Espinilleras con protección avanzada", precio: 150.00, precioOriginal: 190.00, categoria: "futbol", icono: "fas fa-shield-alt", oferta: true, especificaciones: ["Material: EVA comprimido", "Talla: L", "Color: Negro/Rojo", "Ajuste: Velcro"], stock: 28 },
    { id: 21, nombre: "Medias Adidas Predator", descripcion: "Medias de fútbol con tecnología grip", precio: 95.00, precioOriginal: 115.00, categoria: "futbol", icono: "fas fa-socks", oferta: false, especificaciones: ["Material: Algodón/Polyester", "Talla: 39-45", "Color: Negro/Blanco", "Tecnología: Grip"], stock: 50 },
    { id: 22, nombre: "Balón Adidas Copa Mundial", descripcion: "Balón clásico de la Copa Mundial", precio: 340.00, precioOriginal: 380.00, categoria: "futbol", icono: "fas fa-futbol", oferta: true, especificaciones: ["Tamaño: 5", "Material: Cuero sintético", "Cámara: Butyl", "Color: Blanco/Negro"], stock: 40 },
    { id: 23, nombre: "Camiseta PSG 2023", descripcion: "Camiseta oficial del Paris Saint-Germain", precio: 420.00, precioOriginal: 490.00, categoria: "futbol", icono: "fas fa-tshirt", oferta: false, especificaciones: ["Material: Polyester", "Tallas: S-XXL", "Color: Azul/Rojo", "Sponsor: Qatar Airways"], stock: 32 },
    { id: 24, nombre: "Botines Nike Tiempo", descripcion: "Botines de fútbol clásicos", precio: 650.00, precioOriginal: 720.00, categoria: "futbol", icono: "fas fa-futbol", oferta: true, especificaciones: ["Material: Cuero de canguro", "Suela: FG", "Peso: 250g", "Color: Blanco/Negro"], stock: 20 },
    { id: 25, nombre: "Equipación Portero Completa", descripcion: "Equipación completa para portero", precio: 760.00, precioOriginal: 870.00, categoria: "futbol", icono: "fas fa-tshirt", oferta: false, especificaciones: ["Incluye: Camiseta, pantalón, guantes", "Material: Polyester", "Tallas: S-XXL", "Color: Verde/Negro"], stock: 15 },
    
    // VÓLEY - 25 productos
    { id: 26, nombre: "Balón de Vóley Mikasa MVA200", descripcion: "Balón oficial de competición", precio: 340.00, precioOriginal: 420.00, categoria: "voley", icono: "fas fa-volleyball-ball", oferta: true, especificaciones: ["Tamaño: 5", "Material: Sintético", "Peso: 260-280g", "Color: Azul/Amarillo"], stock: 20 },
    { id: 27, nombre: "Rodilleras Mizuno LR6", descripcion: "Rodilleras profesionales para vóley", precio: 190.00, precioOriginal: 230.00, categoria: "voley", icono: "fas fa-user-shield", oferta: false, especificaciones: ["Talla: M", "Material: Neopreno", "Protección: Gel", "Color: Negro/Azul"], stock: 42 },
    { id: 28, nombre: "Zapatillas Vóley Asics Gel", descripcion: "Zapatillas especializadas para vóley", precio: 450.00, precioOriginal: 530.00, categoria: "voley", icono: "fas fa-shoe-prints", oferta: true, especificaciones: ["Material: Malla", "Suela: Goma", "Peso: 300g", "Color: Blanco/Rosa"], stock: 25 },
    { id: 29, nombre: "Red de Vóley Profesional", descripcion: "Red oficial para competición", precio: 760.00, precioOriginal: 950.00, categoria: "voley", icono: "fas fa-network-wired", oferta: false, especificaciones: ["Altura: 2.43m (hombres)", "Material: Nylon", "Incluye: postes", "Color: Blanco/Rojo"], stock: 8 },
    { id: 30, nombre: "Camiseta Vóley Nike Pro", descripcion: "Camiseta de compresión para vóley", precio: 170.00, precioOriginal: 210.00, categoria: "voley", icono: "fas fa-tshirt", oferta: true, especificaciones: ["Material: Polyester", "Tallas: S-XXL", "Color: Negro", "Tecnología: Dri-FIT"], stock: 36 },
    { id: 31, nombre: "Shorts Vóley Mizuno", descripcion: "Shorts de vóley con máxima movilidad", precio: 130.00, precioOriginal: 150.00, categoria: "voley", icono: "fas fa-running", oferta: false, especificaciones: ["Material: Polyester", "Tallas: S-XXL", "Color: Azul Marino", "Bolsillo: Sí"], stock: 48 },
    { id: 32, nombre: "Balón Vóley Molten V5M5000", descripcion: "Balón de entrenamiento profesional", precio: 270.00, precioOriginal: 300.00, categoria: "voley", icono: "fas fa-volleyball-ball", oferta: true, especificaciones: ["Tamaño: 5", "Material: Cuero sintético", "Peso: 260-280g", "Color: Blanco/Azul"], stock: 30 },
    { id: 33, nombre: "Rodilleras Asics Gel", descripcion: "Rodilleras con tecnología de gel", precio: 230.00, precioOriginal: 270.00, categoria: "voley", icono: "fas fa-user-shield", oferta: false, especificaciones: ["Talla: L", "Material: Neopreno", "Protección: Gel", "Color: Negro/Rojo"], stock: 33 },
    { id: 34, nombre: "Zapatillas Mizuno Wave", descripcion: "Zapatillas para vóley con amortiguación", precio: 490.00, precioOriginal: 570.00, categoria: "voley", icono: "fas fa-shoe-prints", oferta: true, especificaciones: ["Material: Cuero sintético", "Suela: Goma", "Peso: 320g", "Color: Blanco/Azul"], stock: 18 },
    { id: 35, nombre: "Mochila Vóley Nike", descripcion: "Mochila especial para equipo de vóley", precio: 210.00, precioOriginal: 250.00, categoria: "voley", icono: "fas fa-bag", oferta: false, especificaciones: ["Capacidad: 30L", "Material: Polyester", "Compartimentos: 3", "Color: Negro/Rojo"], stock: 27 },
    { id: 36, nombre: "Coderas Vóley Asics", descripcion: "Coderas de protección para vóley", precio: 95.00, precioOriginal: 115.00, categoria: "voley", icono: "fas fa-user-shield", oferta: true, especificaciones: ["Talla: Única", "Material: Neopreno", "Protección: Espuma", "Color: Negro"], stock: 52 },
    { id: 37, nombre: "Toallas de Vóley Mikasa", descripcion: "Toallas oficiales Mikasa", precio: 75.00, precioOriginal: 95.00, categoria: "voley", icono: "fas fa-bath", oferta: false, especificaciones: ["Tamaño: 80x150cm", "Material: Microfibra", "Color: Varios", "Logo: Mikasa"], stock: 65 },
    { id: 38, nombre: "Calcetines Vóley Nike Elite", descripcion: "Calcetines de competición para vóley", precio: 55.00, precioOriginal: 75.00, categoria: "voley", icono: "fas fa-socks", oferta: true, especificaciones: ["Material: Algodón/Polyester", "Talla: 39-45", "Color: Blanco", "Altura: Tobillera"], stock: 70 },
    { id: 39, nombre: "Silbatos para Árbitros", descripcion: "Silbatos profesionales para árbitros", precio: 38.00, precioOriginal: 50.00, categoria: "voley", icono: "fas fa-bullhorn", oferta: false, especificaciones: ["Material: Metal/plástico", "Sonido: Agudo", "Incluye: Cordón", "Color: Negro"], stock: 85 },
    { id: 40, nombre: "Marcadores de Puntuación", descripcion: "Set de marcadores para partidos", precio: 115.00, precioOriginal: 130.00, categoria: "voley", icono: "fas fa-clipboard-list", oferta: true, especificaciones: ["Incluye: 2 marcadores", "Material: Plástico", "Tamaño: 30x40cm", "Color: Rojo/Azul"], stock: 40 },
    { id: 41, nombre: "Balón Vóley Wilson AVP", descripcion: "Balón para vóley playa oficial AVP", precio: 300.00, precioOriginal: 360.00, categoria: "voley", icono: "fas fa-volleyball-ball", oferta: false, especificaciones: ["Tamaño: 5", "Material: Sintético resistente", "Peso: 260-280g", "Color: Amarillo/Azul"], stock: 23 },
    { id: 42, nombre: "Rodilleras Nike Pro", descripcion: "Rodilleras de compresión para vóley", precio: 150.00, precioOriginal: 190.00, categoria: "voley", icono: "fas fa-user-shield", oferta: true, especificaciones: ["Talla: S", "Material: Neopreno", "Protección: Espuma HD", "Color: Negro/Gris"], stock: 38 },
    { id: 43, nombre: "Zapatillas Nike Air Zoom", descripcion: "Zapatillas con zoom air para vóley", precio: 530.00, precioOriginal: 610.00, categoria: "voley", icono: "fas fa-shoe-prints", oferta: false, especificaciones: ["Material: Malla transpirable", "Suela: Goma de tracción", "Peso: 310g", "Color: Blanco/Negro"], stock: 16 },
    { id: 44, nombre: "Red Vóley Playero", descripcion: "Red para vóley playa con postes", precio: 570.00, precioOriginal: 680.00, categoria: "voley", icono: "fas fa-network-wired", oferta: true, especificaciones: ["Altura: 2.43m ajustable", "Material: Polietileno", "Incluye: Postes de aluminio", "Color: Azul/Blanco"], stock: 10 },
    { id: 45, nombre: "Equipación Completa Vóley", descripcion: "Conjunto completo para equipo de vóley", precio: 1140.00, precioOriginal: 1330.00, categoria: "voley", icono: "fas fa-tshirt", oferta: false, especificaciones: ["Incluye: 8 camisetas, 8 shorts", "Material: Polyester", "Tallas: S-XXL", "Personalizable: Sí"], stock: 6 },
    { id: 46, nombre: "Cintas para Cabello Vóley", descripcion: "Cintas deportivas para cabello", precio: 50.00, precioOriginal: 60.00, categoria: "voley", icono: "fas fa-band-aid", oferta: true, especificaciones: ["Material: Terry cloth", "Color: Varios", "Pack: 5 unidades", "Elásticas: Sí"], stock: 80 },
    { id: 47, nombre: "Bolsas para Balones", descripcion: "Bolsa especial para transportar balones", precio: 130.00, precioOriginal: 150.00, categoria: "voley", icono: "fas fa-bag", oferta: false, especificaciones: ["Capacidad: 3 balones", "Material: Poliéster", "Color: Negro/Azul", "Correa: Ajustable"], stock: 45 },
    { id: 48, nombre: "Medias de Compresión Vóley", descripcion: "Medias de compresión para vóley", precio: 115.00, precioOriginal: 130.00, categoria: "voley", icono: "fas fa-socks", oferta: true, especificaciones: ["Material: Polyester/Spandex", "Talla: S-XXL", "Compresión: Graduada", "Color: Negro/Blanco"], stock: 60 },
    { id: 49, nombre: "Set de Antenas para Red", descripcion: "Antenas oficiales para red de vóley", precio: 150.00, precioOriginal: 170.00, categoria: "voley", icono: "fas fa-arrows-alt-v", oferta: false, especificaciones: ["Material: Fibra de vidrio", "Altura: 1.8m", "Color: Rojo/Blanco", "Flexibles: Sí"], stock: 30 },
    { id: 50, nombre: "Toalla de Entrenamiento", descripcion: "Toalla absorbente para entrenamiento", precio: 95.00, precioOriginal: 115.00, categoria: "voley", icono: "fas fa-bath", oferta: true, especificaciones: ["Tamaño: 70x140cm", "Material: Microfibra", "Color: Varios", "Rápido secado: Sí"], stock: 75 },
    
    // RUNNING - 30 productos
    { id: 51, nombre: "Zapatillas Nike Air Zoom Pegasus", descripcion: "Zapatillas de running para entrenamiento diario", precio: 490.00, precioOriginal: 570.00, categoria: "running", icono: "fas fa-running", oferta: true, especificaciones: ["Drop: 10mm", "Peso: 280g", "Amortiguación: Zoom Air", "Color: Negro/Verde"], stock: 45 },
    { id: 52, nombre: "Zapatillas Adidas Ultraboost", descripcion: "Zapatillas de running con máxima energía", precio: 680.00, precioOriginal: 760.00, categoria: "running", icono: "fas fa-running", oferta: false, especificaciones: ["Drop: 10mm", "Peso: 310g", "Amortiguación: Boost", "Color: Blanco/Negro"], stock: 32 },
    { id: 53, nombre: "Zapatillas Asics Gel-Kayano", descripcion: "Zapatillas de running para pronadores", precio: 610.00, precioOriginal: 680.00, categoria: "running", icono: "fas fa-running", oferta: true, especificaciones: ["Drop: 10mm", "Peso: 320g", "Amortiguación: Gel", "Color: Azul/Plateado"], stock: 28 },
    { id: 54, nombre: "Zapatillas New Balance Fresh Foam", descripcion: "Zapatillas de running con confort premium", precio: 530.00, precioOriginal: 610.00, categoria: "running", icono: "fas fa-running", oferta: false, especificaciones: ["Drop: 8mm", "Peso: 290g", "Amortiguación: Fresh Foam", "Color: Gris/Rosa"], stock: 36 },
    { id: 55, nombre: "Zapatillas Brooks Ghost", descripcion: "Zapatillas de running neutras", precio: 570.00, precioOriginal: 650.00, categoria: "running", icono: "fas fa-running", oferta: true, especificaciones: ["Drop: 12mm", "Peso: 295g", "Amortiguación: DNA LOFT", "Color: Verde/Azul"], stock: 24 },
    { id: 56, nombre: "Camiseta Running Nike Dri-FIT", descripcion: "Camiseta técnica para running", precio: 130.00, precioOriginal: 150.00, categoria: "running", icono: "fas fa-tshirt", oferta: false, especificaciones: ["Material: Polyester", "Tallas: S-XXL", "Tecnología: Dri-FIT", "Color: Negro"], stock: 60 },
    { id: 57, nombre: "Shorts Running Adidas", descripcion: "Shorts ligeros para running", precio: 115.00, precioOriginal: 130.00, categoria: "running", icono: "fas fa-running", oferta: true, especificaciones: ["Material: Polyester", "Tallas: S-XXL", "Bolsillo: Para llaves", "Color: Azul"], stock: 55 },
    { id: 58, nombre: "Calcetines Running Nike Elite", descripcion: "Calcetines técnicos para running", precio: 75.00, precioOriginal: 95.00, categoria: "running", icono: "fas fa-socks", oferta: false, especificaciones: ["Material: Algodón/Polyester", "Talla: 39-45", "Zonas: Acolchadas", "Color: Blanco/Gris"], stock: 75 },
    { id: 59, nombre: "Chaqueta Running Impermeable", descripcion: "Chaqueta impermeable para running", precio: 300.00, precioOriginal: 340.00, categoria: "running", icono: "fas fa-tshirt", oferta: true, especificaciones: ["Material: Poliéster impermeable", "Tallas: S-XXL", "Reflectante: Sí", "Color: Negro/Amarillo"], stock: 30 },
    { id: 60, nombre: "Pantalón Running Térmico", descripcion: "Pantalón térmico para running en invierno", precio: 170.00, precioOriginal: 190.00, categoria: "running", icono: "fas fa-running", oferta: false, especificaciones: ["Material: Poliéster térmico", "Tallas: S-XXL", "Reflectante: Sí", "Color: Negro/Gris"], stock: 42 },
    { id: 61, nombre: "Zapatillas Hoka Clifton", descripcion: "Zapatillas de running con máxima amortiguación", precio: 570.00, precioOriginal: 650.00, categoria: "running", icono: "fas fa-running", oferta: true, especificaciones: ["Drop: 5mm", "Peso: 250g", "Amortiguación: Profunda", "Color: Naranja/Azul"], stock: 20 },
    { id: 62, nombre: "Zapatillas Saucony Ride", descripcion: "Zapatillas de running para ritmo medio", precio: 490.00, precioOriginal: 570.00, categoria: "running", icono: "fas fa-running", oferta: false, especificaciones: ["Drop: 8mm", "Peso: 285g", "Amortiguación: PWRRUN", "Color: Verde/Blanco"], stock: 27 },
    { id: 63, nombre: "Zapatillas Under Armour HOVR", descripcion: "Zapatillas de running con tecnología HOVR", precio: 530.00, precioOriginal: 610.00, categoria: "running", icono: "fas fa-running", oferta: true, especificaciones: ["Drop: 8mm", "Peso: 295g", "Amortiguación: HOVR", "Color: Negro/Rojo"], stock: 23 },
    { id: 64, nombre: "Gafas de Sol Running", descripcion: "Gafas de sol deportivas para running", precio: 270.00, precioOriginal: 300.00, categoria: "running", icono: "fas fa-glasses", oferta: false, especificaciones: ["Lentes: Polarizadas", "Material: TR90", "Incluye: Funda", "Color: Negro/Espejado"], stock: 38 },
    { id: 65, nombre: "Riñonera Running Nike", descripcion: "Riñonera para llevar objetos personales", precio: 95.00, precioOriginal: 115.00, categoria: "running", icono: "fas fa-bag", oferta: true, especificaciones: ["Material: Poliéster", "Compartimentos: 2", "Ajuste: Elástico", "Color: Negro/Rojo"], stock: 50 },
    { id: 66, nombre: "Zapatillas Mizuno Wave Rider", descripcion: "Zapatillas de running con tecnología Wave", precio: 530.00, precioOriginal: 610.00, categoria: "running", icono: "fas fa-running", oferta: false, especificaciones: ["Drop: 12mm", "Peso: 290g", "Amortiguación: Wave", "Color: Azul/Amarillo"], stock: 22 },
    { id: 67, nombre: "Zapatillas Reebok Floatride", descripcion: "Zapatillas de running ligeras", precio: 450.00, precioOriginal: 530.00, categoria: "running", icono: "fas fa-running", oferta: true, especificaciones: ["Drop: 9mm", "Peso: 240g", "Amortiguación: Floatride", "Color: Blanco/Negro"], stock: 31 },
    { id: 68, nombre: "Mallas Running Compresión", descripcion: "Mallas de compresión para running", precio: 150.00, precioOriginal: 170.00, categoria: "running", icono: "fas fa-running", oferta: false, especificaciones: ["Material: Poliéster/Spandex", "Tallas: S-XXL", "Compresión: Graduada", "Color: Negro"], stock: 48 },
    { id: 69, nombre: "Gorro Running Térmico", descripcion: "Gorro térmico para running en frío", precio: 55.00, precioOriginal: 75.00, categoria: "running", icono: "fas fa-hat-cowboy", oferta: true, especificaciones: ["Material: Poliéster térmico", "Talla: Única", "Reflectante: Logo", "Color: Negro/Gris"], stock: 65 },
    { id: 70, nombre: "Guantes Running Térmicos", descripcion: "Guantes térmicos para running", precio: 75.00, precioOriginal: 95.00, categoria: "running", icono: "fas fa-mitten", oferta: false, especificaciones: ["Material: Poliéster térmico", "Talla: M", "Pantalla táctil: Sí", "Color: Negro/Naranja"], stock: 55 },
    { id: 71, nombre: "Reloj GPS Garmin Forerunner", descripcion: "Reloj GPS para running con métricas avanzadas", precio: 1140.00, precioOriginal: 1330.00, categoria: "running", icono: "fas fa-clock", oferta: true, especificaciones: ["Pantalla: Táctil", "GPS: Sí", "Batería: 7 días", "Color: Negro"], stock: 18 },
    { id: 72, nombre: "Pulsómetro de Pecho Polar", descripcion: "Pulsómetro para monitorizar frecuencia cardiaca", precio: 230.00, precioOriginal: 270.00, categoria: "running", icono: "fas fa-heartbeat", oferta: false, especificaciones: ["Conexión: Bluetooth", "Batería: 400 horas", "Resistente al agua: Sí", "Color: Negro"], stock: 30 },
    { id: 73, nombre: "Cintas Reflectantes Running", descripcion: "Cintas reflectantes para seguridad nocturna", precio: 55.00, precioOriginal: 75.00, categoria: "running", icono: "fas fa-band-aid", oferta: true, especificaciones: ["Material: Tela reflectante", "Pack: 4 unidades", "Ajustable: Velcro", "Color: Amarillo/Naranja"], stock: 90 },
    { id: 74, nombre: "Botella Agua Deportiva", descripcion: "Botella de agua con boquilla deportiva", precio: 50.00, precioOriginal: 60.00, categoria: "running", icono: "fas fa-wine-bottle", oferta: false, especificaciones: ["Capacidad: 750ml", "Material: Tritán", "Antigoteo: Sí", "Color: Azul/Negro"], stock: 80 },
    { id: 75, nombre: "Mochila Hidratación Camelbak", descripcion: "Mochila con sistema de hidratación", precio: 340.00, precioOriginal: 380.00, categoria: "running", icono: "fas fa-bag", oferta: true, especificaciones: ["Capacidad: 2L", "Compartimentos: 3", "Peso: 500g", "Color: Negro/Azul"], stock: 25 },
    { id: 76, nombre: "Zapatillas Nike Vaporfly", descripcion: "Zapatillas de running para competición", precio: 950.00, precioOriginal: 1140.00, categoria: "running", icono: "fas fa-running", oferta: false, especificaciones: ["Drop: 8mm", "Peso: 190g", "Amortiguación: ZoomX", "Color: Rosa/Negro"], stock: 15 },
    { id: 77, nombre: "Zapatillas Adidas Adizero", descripcion: "Zapatillas ligeras para carreras", precio: 680.00, precioOriginal: 760.00, categoria: "running", icono: "fas fa-running", oferta: true, especificaciones: ["Drop: 6mm", "Peso: 210g", "Amortiguación: Lightstrike", "Color: Blanco/Rojo"], stock: 22 },
    { id: 78, nombre: "Sujetador Deportivo Nike", descripcion: "Sujetador deportivo de alto soporte", precio: 190.00, precioOriginal: 230.00, categoria: "running", icono: "fas fa-tshirt", oferta: false, especificaciones: ["Material: Polyester/Spandex", "Tallas: XS-XL", "Soporte: Alto", "Color: Negro/Rosa"], stock: 40 },
    { id: 79, nombre: "Pantalones Cortos Running", descripcion: "Pantalones cortos con bolsillo interno", precio: 130.00, precioOriginal: 150.00, categoria: "running", icono: "fas fa-running", oferta: true, especificaciones: ["Material: Poliéster", "Tallas: S-XXL", "Bolsillo: Para teléfono", "Color: Negro/Gris"], stock: 55 },
    { id: 80, nombre: "Toalla Microfibra Running", descripcion: "Toalla absorbente para running", precio: 55.00, precioOriginal: 75.00, categoria: "running", icono: "fas fa-bath", oferta: false, especificaciones: ["Tamaño: 30x60cm", "Material: Microfibra", "Peso: 50g", "Color: Varios"], stock: 70 },
    
    // ENTRENAMIENTO - 30 productos
    { id: 81, nombre: "Mancuernas Ajustables", descripcion: "Set de mancuernas ajustables de 20kg", precio: 340.00, precioOriginal: 420.00, categoria: "entrenamiento", icono: "fas fa-dumbbell", oferta: true, especificaciones: ["Peso máximo: 20kg", "Material: Acero recubierto", "Incluye: Barra y discos", "Color: Negro/Rojo"], stock: 25 },
    { id: 82, nombre: "Barra Olímpica", descripcion: "Barra olímpica de 20kg", precio: 570.00, precioOriginal: 680.00, categoria: "entrenamiento", icono: "fas fa-dumbbell", oferta: false, especificaciones: ["Peso: 20kg", "Longitud: 220cm", "Material: Acero cromado", "Color: Cromado"], stock: 15 },
    { id: 83, nombre: "Discos de Pesas", descripcion: "Set de discos de pesas de 100kg", precio: 760.00, precioOriginal: 910.00, categoria: "entrenamiento", icono: "fas fa-weight-hanging", oferta: true, especificaciones: ["Peso total: 100kg", "Material: Hierro recubierto", "Diámetro: Olímpico", "Color: Negro"], stock: 12 },
    { id: 84, nombre: "Banco de Press", descripcion: "Banco ajustable para press de banca", precio: 490.00, precioOriginal: 570.00, categoria: "entrenamiento", icono: "fas fa-couch", oferta: false, especificaciones: ["Material: Acero", "Peso máximo: 200kg", "Ajustable: Sí", "Color: Negro/Gris"], stock: 18 },
    { id: 85, nombre: "Set de Bandas Elásticas", descripcion: "Set de 5 bandas elásticas de resistencia", precio: 115.00, precioOriginal: 130.00, categoria: "entrenamiento", icono: "fas fa-ring", oferta: true, especificaciones: ["Resistencias: 5 niveles", "Material: Latex natural", "Incluye: Bolsa y manual", "Color: Varios"], stock: 60 },
    { id: 86, nombre: "Colchoneta de Yoga", descripcion: "Colchoneta antideslizante para yoga", precio: 95.00, precioOriginal: 115.00, categoria: "entrenamiento", icono: "fas fa-th-large", oferta: false, especificaciones: ["Material: PVC", "Grosor: 6mm", "Antideslizante: Sí", "Color: Morado"], stock: 45 },
    { id: 87, nombre: "Kettlebell de 16kg", descripcion: "Kettlebell de hierro de 16kg", precio: 150.00, precioOriginal: 170.00, categoria: "entrenamiento", icono: "fas fa-weight", oferta: true, especificaciones: ["Peso: 16kg", "Material: Hierro fundido", "Acabado: Pintura epoxi", "Color: Negro"], stock: 32 },
    { id: 88, nombre: "Guantes de Gimnasio", descripcion: "Guantes para levantamiento de pesas", precio: 75.00, precioOriginal: 95.00, categoria: "entrenamiento", icono: "fas fa-mitten", oferta: false, especificaciones: ["Material: Cuero sintético", "Tallas: S-XL", "Protección: Palma acolchada", "Color: Negro/Rojo"], stock: 55 },
    { id: 89, nombre: "Cuerda para Saltar", descripcion: "Cuerda para saltar ajustable", precio: 55.00, precioOriginal: 75.00, categoria: "entrenamiento", icono: "fas fa-dumbbell", oferta: true, especificaciones: ["Longitud: Ajustable", "Material: Cable de acero", "Empuñaduras: Espuma", "Color: Negro/Rojo"], stock: 70 },
    { id: 90, nombre: "Rueda Abdominal", descripcion: "Rueda para ejercicios abdominales", precio: 50.00, precioOriginal: 60.00, categoria: "entrenamiento", icono: "fas fa-dumbbell", oferta: false, especificaciones: ["Material: Acero/plástico", "Ancho: Doble rueda", "Empuñaduras: Antideslizantes", "Color: Negro/Amarillo"], stock: 80 },
    { id: 91, nombre: "Set de Pesas Rusas", descripcion: "Set de 3 kettlebells (8, 12, 16kg)", precio: 340.00, precioOriginal: 380.00, categoria: "entrenamiento", icono: "fas fa-weight", oferta: true, especificaciones: ["Pesos: 8, 12, 16kg", "Material: Hierro fundido", "Acabado: Vinilo", "Color: Negro/Verde"], stock: 22 },
    { id: 92, nombre: "Barra de Dominadas", descripcion: "Barra para dominadas en puerta", precio: 130.00, precioOriginal: 150.00, categoria: "entrenamiento", icono: "fas fa-dumbbell", oferta: false, especificaciones: ["Material: Acero", "Ajuste: Para puertas", "Peso máximo: 100kg", "Color: Negro"], stock: 30 },
    { id: 93, nombre: "Step para Aeróbic", descripcion: "Step ajustable para ejercicios aeróbicos", precio: 170.00, precioOriginal: 190.00, categoria: "entrenamiento", icono: "fas fa-dumbbell", oferta: true, especificaciones: ["Altura: 10-20cm", "Material: Polipropileno", "Superficie: Antideslizante", "Color: Negro/Azul"], stock: 40 },
    { id: 94, nombre: "Pelota de Ejercicios", descripcion: "Pelota de estabilidad 65cm", precio: 95.00, precioOriginal: 115.00, categoria: "entrenamiento", icono: "fas fa-basketball-ball", oferta: false, especificaciones: ["Diámetro: 65cm", "Material: PVC anti-reventón", "Peso máximo: 300kg", "Color: Azul"], stock: 35 },
    { id: 95, nombre: "Rack para Pesas", descripcion: "Rack para organizar discos y mancuernas", precio: 300.00, precioOriginal: 340.00, categoria: "entrenamiento", icono: "fas fa-dumbbell", oferta: true, especificaciones: ["Material: Acero", "Capacidad: 150kg", "Plegable: Sí", "Color: Negro"], stock: 20 },
    { id: 96, nombre: "Set de Barras Paralelas", descripcion: "Barras paralelas para dips y flexiones", precio: 230.00, precioOriginal: 270.00, categoria: "entrenamiento", icono: "fas fa-dumbbell", oferta: false, especificaciones: ["Material: Acero", "Ajustable: Altura y ancho", "Peso máximo: 150kg", "Color: Negro/Rojo"], stock: 18 },
    { id: 97, nombre: "Rodillo de Espuma", descripcion: "Rodillo para liberación miofascial", precio: 75.00, precioOriginal: 95.00, categoria: "entrenamiento", icono: "fas fa-dumbbell", oferta: true, especificaciones: ["Longitud: 30cm", "Material: EVA", "Textura: Lisa", "Color: Negro/Azul"], stock: 55 },
    { id: 98, nombre: "Pelota de Masaje", descripcion: "Pelota para puntos gatillo", precio: 38.00, precioOriginal: 50.00, categoria: "entrenamiento", icono: "fas fa-basketball-ball", oferta: false, especificaciones: ["Diámetro: 8cm", "Material: EVA", "Textura: Lisa", "Color: Negro"], stock: 75 },
    { id: 99, nombre: "Bandas de Resistencia Largas", descripcion: "Set de 3 bandas de resistencia largas", precio: 95.00, precioOriginal: 115.00, categoria: "entrenamiento", icono: "fas fa-ring", oferta: true, especificaciones: ["Longitud: 150cm", "Resistencias: Ligera, media, fuerte", "Material: Latex", "Color: Verde, rojo, negro"], stock: 50 },
    { id: 100, nombre: "Botella Agua Deportiva 1L", descripcion: "Botella de agua con boquilla deportiva", precio: 50.00, precioOriginal: 60.00, categoria: "entrenamiento", icono: "fas fa-wine-bottle", oferta: false, especificaciones: ["Capacidad: 1L", "Material: Tritán", "Antigoteo: Sí", "Color: Azul/Negro"], stock: 80 },
    { id: 101, nombre: "Toalla Deportiva Microfibra", descripcion: "Toalla absorbente para deporte", precio: 55.00, precioOriginal: 75.00, categoria: "entrenamiento", icono: "fas fa-bath", oferta: true, especificaciones: ["Tamaño: 80x150cm", "Material: Microfibra", "Rápido secado: Sí", "Color: Azul/Gris"], stock: 65 },
    { id: 102, nombre: "Mochila Deportiva 30L", descripcion: "Mochila para gimnasio y deporte", precio: 170.00, precioOriginal: 190.00, categoria: "entrenamiento", icono: "fas fa-bag", oferta: false, especificaciones: ["Capacidad: 30L", "Material: Poliéster", "Compartimentos: 3", "Color: Negro/Rojo"], stock: 35 },
    { id: 103, nombre: "Bolsa Térmica para Comida", descripcion: "Bolsa térmica para comida deportiva", precio: 75.00, precioOriginal: 95.00, categoria: "entrenamiento", icono: "fas fa-utensils", oferta: true, especificaciones: ["Capacidad: 6L", "Material: Poliéster térmico", "Compartimentos: 2", "Color: Negro/Gris"], stock: 45 },
    { id: 104, nombre: "Reloj Deportivo GPS", descripcion: "Reloj con GPS para entrenamiento", precio: 760.00, precioOriginal: 950.00, categoria: "entrenamiento", icono: "fas fa-clock", oferta: false, especificaciones: ["Pantalla: Táctil", "GPS: Sí", "Resistente al agua: 50m", "Color: Negro"], stock: 18 },
    { id: 105, nombre: "Pulsómetro de Pecho", descripcion: "Pulsómetro para monitorizar frecuencia cardiaca", precio: 190.00, precioOriginal: 230.00, categoria: "entrenamiento", icono: "fas fa-heartbeat", oferta: true, especificaciones: ["Conexión: Bluetooth", "Batería: 1 año", "Resistente al agua: Sí", "Color: Negro"], stock: 30 },
    { id: 106, nombre: "Cinta para Muñeca Nike", descripcion: "Cinta absorbente para sudor", precio: 35.00, precioOriginal: 42.00, categoria: "entrenamiento", icono: "fas fa-band-aid", oferta: false, especificaciones: ["Material: Terry cloth", "Ajustable: Velcro", "Color: Negro/Blanco", "Pack: 2 unidades"], stock: 90 },
    { id: 107, nombre: "Gorro Deportivo Nike", descripcion: "Gorro para entrenamiento y running", precio: 75.00, precioOriginal: 95.00, categoria: "entrenamiento", icono: "fas fa-hat-cowboy", oferta: true, especificaciones: ["Material: Poliéster", "Talla: Ajustable", "Tecnología: Dri-FIT", "Color: Negro/Blanco"], stock: 55 },
    { id: 108, nombre: "Gafas Nadador Speedo", descripcion: "Gafas para natación y entrenamiento acuático", precio: 95.00, precioOriginal: 115.00, categoria: "entrenamiento", icono: "fas fa-swimmer", oferta: false, especificaciones: ["Lentes: Antivaho", "Ajuste: Nasal regulable", "Color: Espejado", "Incluye: Estuche"], stock: 40 },
    { id: 109, nombre: "Tabla de Ejercicios", descripcion: "Tabla con rutinas de ejercicios", precio: 55.00, precioOriginal: 75.00, categoria: "entrenamiento", icono: "fas fa-clipboard-list", oferta: true, especificaciones: ["Material: PVC", "Tamaño: 60x90cm", "Ejercicios: 50+", "Color: Varios"], stock: 60 },
    { id: 110, nombre: "Set de Pesas para Tobillo", descripcion: "Pesas ajustables para tobillos", precio: 115.00, precioOriginal: 130.00, categoria: "entrenamiento", icono: "fas fa-weight", oferta: false, especificaciones: ["Peso por unidad: 1-5kg", "Material: Tela/arena", "Ajustable: Velcro", "Color: Negro/Azul"], stock: 38 }
];

// Variables globales
let carrito = [];
let testimonialIndex = 0;
let countdownInterval;
let currentPage = 1;
const productsPerPage = 12;
let currentFilter = 'todos';
let currentSearch = '';

// Inicialización cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Cargar productos en la página
    cargarProductos();
    
    // Configurar eventos
    configurarEventos();
    
    // Iniciar carrusel de testimonios
    iniciarTestimonios();
    
    // Iniciar contador de oferta
    iniciarCountdown();
});

// Función para cargar productos en la página
function cargarProductos() {
    const productosGrid = document.querySelector('.products-grid');
    
    if (!productosGrid) return;
    
    productosGrid.innerHTML = '';
    
    // Filtrar productos
    let productosFiltrados = productos;
    
    if (currentFilter !== 'todos') {
        if (currentFilter === 'ofertas') {
            productosFiltrados = productos.filter(p => p.oferta);
        } else {
            productosFiltrados = productos.filter(p => p.categoria === currentFilter);
        }
    }
    
    // Filtrar por búsqueda si hay
    if (currentSearch) {
        const searchLower = currentSearch.toLowerCase();
        productosFiltrados = productosFiltrados.filter(p => 
            p.nombre.toLowerCase().includes(searchLower) || 
            p.descripcion.toLowerCase().includes(searchLower) ||
            p.categoria.toLowerCase().includes(searchLower)
        );
    }
    
    // Calcular paginación
    const totalPages = Math.ceil(productosFiltrados.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productosPagina = productosFiltrados.slice(startIndex, endIndex);
    
    // Actualizar información de página
    document.getElementById('page-info').textContent = `Página ${currentPage} de ${totalPages}`;
    document.getElementById('prev-page').disabled = currentPage === 1;
    document.getElementById('next-page').disabled = currentPage === totalPages || totalPages === 0;
    
    // Mostrar productos
    if (productosPagina.length === 0) {
        productosGrid.innerHTML = '<div class="no-products"><p>No se encontraron productos</p></div>';
        return;
    }
    
    productosPagina.forEach(producto => {
        const productoHTML = `
            <div class="product-card" data-id="${producto.id}">
                <div class="product-image">
                    <i class="${producto.icono}"></i>
                    ${producto.oferta ? '<div class="product-badge">OFERTA</div>' : ''}
                </div>
                <div class="product-info">
                    <h3 class="product-title">${producto.nombre}</h3>
                    <p class="product-description">${producto.descripcion}</p>
                    <span class="product-category">${producto.categoria.toUpperCase()}</span>
                    <div class="product-price">
                        <div>
                            ${producto.oferta ? 
                                `<span class="precio-original">${producto.precioOriginal.toFixed(2)}</span>` : 
                                ''
                            }
                            <span class="precio">${producto.precio.toFixed(2)}</span>
                        </div>
                        <button class="btn-add-cart" data-id="${producto.id}">
                            <i class="fas fa-cart-plus"></i> Añadir
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        productosGrid.innerHTML += productoHTML;
    });
}

// Función para configurar todos los eventos
function configurarEventos() {
    // Menú móvil
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            menuToggle.innerHTML = mobileNav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : 
                '<i class="fas fa-bars"></i>';
        });
    }
    
    /* Búsqueda
    const searchToggle = document.getElementById('search-toggle');
    const searchBox = document.getElementById('search-box');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    if (searchToggle && searchBox) {
        searchToggle.addEventListener('click', function() {
            searchBox.classList.toggle('active');
            if (searchBox.classList.contains('active')) {
                searchInput.focus();
            }
        });
        
        // Cerrar búsqueda al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (!searchBox.contains(e.target) && !searchToggle.contains(e.target)) {
                searchBox.classList.remove('active');
            }
        });
        
        // Evento de búsqueda
        searchBtn.addEventListener('click', function() {
            currentSearch = searchInput.value;
            currentPage = 1;
            cargarProductos();
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                currentSearch = searchInput.value;
                currentPage = 1;
                cargarProductos();
            }
        });
    }*/
    
    // Filtros de categorías
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.getAttribute('data-filter');
            currentPage = 1;
            cargarProductos();
        });
    });
    
    // Filtros por categorías en tarjetas
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const categoria = this.getAttribute('data-category');
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            document.querySelector(`.filter-btn[data-filter="${categoria}"]`).classList.add('active');
            currentFilter = categoria;
            currentPage = 1;
            cargarProductos();
            window.scrollTo({
                top: document.getElementById('productos').offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Botón de ofertas
    document.querySelector('.btn-offer').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('.filter-btn[data-filter="ofertas"]').classList.add('active');
        currentFilter = 'ofertas';
        currentPage = 1;
        cargarProductos();
    });
    
    // Añadir productos al carrito
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-add-cart') || e.target.closest('.btn-add-cart')) {
            e.stopPropagation();
            const btn = e.target.classList.contains('btn-add-cart') ? e.target : e.target.closest('.btn-add-cart');
            const id = parseInt(btn.getAttribute('data-id'));
            agregarAlCarrito(id);
        }
    });
    
    // Abrir detalles del producto al hacer clic en la tarjeta
    document.addEventListener('click', function(e) {
        const productCard = e.target.closest('.product-card');
        if (productCard && !e.target.classList.contains('btn-add-cart') && !e.target.closest('.btn-add-cart')) {
            const id = parseInt(productCard.getAttribute('data-id'));
            mostrarDetallesProducto(id);
        }
    });
    
    // Cerrar modal
    const modal = document.getElementById('product-modal');
    const modalClose = document.querySelector('.modal-close');
    
    if (modal && modalClose) {
        modalClose.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Cerrar menú móvil si está abierto
                if (mobileNav && mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Testimonios navegación
    const testimonialPrev = document.querySelector('.testimonio-prev');
    const testimonialNext = document.querySelector('.testimonio-next');
    
    if (testimonialPrev) {
        testimonialPrev.addEventListener('click', mostrarTestimonioAnterior);
    }
    
    if (testimonialNext) {
        testimonialNext.addEventListener('click', mostrarTestimonioSiguiente);
    }
    
    // Simular clic en carrito
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            if (carrito.length === 0) {
                mostrarNotificacion("El carrito está vacío");
            } else {
                const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
                const totalPrecio = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
                mostrarNotificacion(`Carrito: ${totalItems} productos - Total: S/ ${totalPrecio.toFixed(2)}`);
            }
        });
    }
    
    // Paginación
    document.getElementById('prev-page').addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            cargarProductos();
            window.scrollTo({
                top: document.getElementById('productos').offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
    
    document.getElementById('next-page').addEventListener('click', function() {
        let productosFiltrados = productos;
        if (currentFilter !== 'todos') {
            if (currentFilter === 'ofertas') {
                productosFiltrados = productos.filter(p => p.oferta);
            } else {
                productosFiltrados = productos.filter(p => p.categoria === currentFilter);
            }
        }
        
        if (currentSearch) {
            const searchLower = currentSearch.toLowerCase();
            productosFiltrados = productosFiltrados.filter(p => 
                p.nombre.toLowerCase().includes(searchLower) || 
                p.descripcion.toLowerCase().includes(searchLower) ||
                p.categoria.toLowerCase().includes(searchLower)
            );
        }
        
        const totalPages = Math.ceil(productosFiltrados.length / productsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            cargarProductos();
            window.scrollTo({
                top: document.getElementById('productos').offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
}

// Función para mostrar detalles del producto
function mostrarDetallesProducto(id) {
    const producto = productos.find(p => p.id === id);
    if (!producto) return;
    
    // Obtener productos recomendados (misma categoría, excluyendo el actual)
    const recomendaciones = productos
        .filter(p => p.categoria === producto.categoria && p.id !== producto.id)
        .slice(0, 4);
    
    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <div class="product-detail">
            <div class="detail-image">
                <div class="detail-image-placeholder">
                    <i class="${producto.icono}"></i>
                </div>
            </div>
            <div class="detail-info">
                <h2>${producto.nombre}</h2>
                <span class="detail-category">${producto.categoria.toUpperCase()}</span>
                <p class="detail-description">${producto.descripcion}</p>
                
                <div class="detail-specs">
                    <h3>Especificaciones:</h3>
                    <ul>
                        ${producto.especificaciones.map(spec => `<li><strong>${spec.split(':')[0]}:</strong> ${spec.split(':')[1]}</li>`).join('')}
                        <li><strong>Stock disponible:</strong> ${producto.stock} unidades</li>
                        <li><strong>Categoría:</strong> ${producto.categoria.charAt(0).toUpperCase() + producto.categoria.slice(1)}</li>
                    </ul>
                </div>
                
                <div class="detail-precio">
                    ${producto.oferta ? `<span class="original-detail-precio">${producto.precioOriginal.toFixed(2)}</span>` : ''}
                    <span>${producto.precio.toFixed(2)}</span>
                </div>
                
                <div class="detail-actions">
                    <button class="btn-detail-cart" data-id="${producto.id}">
                        <i class="fas fa-cart-plus"></i> Añadir al carrito
                    </button>
                    <button class="btn-detail-buy" data-id="${producto.id}">
                        <i class="fas fa-bolt"></i> Comprar ahora
                    </button>
                </div>
            </div>
        </div>
        
        ${recomendaciones.length > 0 ? `
        <div class="recommendations">
            <h3>Productos relacionados que te pueden interesar:</h3>
            <div class="recommendations-grid">
                ${recomendaciones.map(rec => `
                    <div class="recommendation-card" data-id="${rec.id}">
                        <i class="${rec.icono}"></i>
                        <h4>${rec.nombre}</h4>
                        <div class="recommendation-precio">${rec.precio.toFixed(2)}</div>
                        <small>${rec.categoria}</small>
                    </div>
                `).join('')}
            </div>
        </div>
        ` : ''}
    `;
    
    // Mostrar modal
    modal.style.display = 'block';
    
    // Configurar eventos dentro del modal
    modalBody.querySelector('.btn-detail-cart').addEventListener('click', function() {
        agregarAlCarrito(producto.id);
        mostrarNotificacion(`${producto.nombre} añadido al carrito`);
    });
    
    modalBody.querySelector('.btn-detail-buy').addEventListener('click', function() {
        agregarAlCarrito(producto.id);
        mostrarNotificacion(`¡Compra realizada! ${producto.nombre} añadido al carrito`);
        setTimeout(() => {
            modal.style.display = 'none';
        }, 1000);
    });
    
    // Configurar eventos para productos recomendados
    modalBody.querySelectorAll('.recommendation-card').forEach(card => {
        card.addEventListener('click', function() {
            const recId = parseInt(this.getAttribute('data-id'));
            modal.style.display = 'none';
            setTimeout(() => {
                mostrarDetallesProducto(recId);
            }, 300);
        });
    });
}

// Función para agregar productos al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    
    if (!producto) return;
    
    // Buscar si el producto ya está en el carrito
    const itemExistente = carrito.find(item => item.id === id);
    
    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }
    
    // Actualizar contador del carrito
    actualizarContadorCarrito();
    
    // Mostrar notificación
    mostrarNotificacion(`${producto.nombre} añadido al carrito - Precio: S/ ${producto.precio.toFixed(2)}`);
}

// Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
        cartCount.textContent = totalItems;
        
        // Animación del contador
        cartCount.style.transform = 'scale(1.3)';
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
        }, 300);
    }
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje) {
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.className = 'notificacion';
    notificacion.textContent = mensaje;
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #2ecc71;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        z-index: 10000;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        font-weight: 600;
        transform: translateX(150%);
        transition: transform 0.5s ease;
    `;
    
    document.body.appendChild(notificacion);
    
    // Mostrar notificación
    setTimeout(() => {
        notificacion.style.transform = 'translateX(0)';
    }, 10);
    
    // Ocultar y eliminar notificación después de 3 segundos
    setTimeout(() => {
        notificacion.style.transform = 'translateX(150%)';
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 500);
    }, 3000);
}

// Funciones para el carrusel de testimonios
function iniciarTestimonios() {
    // Mostrar el primer testimonio
    mostrarTestimonio(testimonialIndex);
    
    // Cambiar automáticamente cada 5 segundos
    setInterval(mostrarTestimonioSiguiente, 5000);
}

function mostrarTestimonio(indice) {
    const testimonios = document.querySelectorAll('.testimonio');
    
    // Ocultar todos los testimonios
    testimonios.forEach(testimonio => {
        testimonio.classList.remove('active');
    });
    
    // Mostrar el testimonio actual
    if (testimonios[indice]) {
        testimonios[indice].classList.add('active');
    }
}

function mostrarTestimonioSiguiente() {
    const testimonios = document.querySelectorAll('.testimonio');
    testimonialIndex = (testimonialIndex + 1) % testimonios.length;
    mostrarTestimonio(testimonialIndex);
}

function mostrarTestimonioAnterior() {
    const testimonios = document.querySelectorAll('.testimonio');
    testimonialIndex = (testimonialIndex - 1 + testimonios.length) % testimonios.length;
    mostrarTestimonio(testimonialIndex);
}

// Función para el contador de ofertas
function iniciarCountdown() {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;
    
    // Establecer 5 horas desde ahora
    let tiempoRestante = 5 * 60 * 60; // 5 horas en segundos
    
    // Actualizar contador cada segundo
    countdownInterval = setInterval(() => {
        tiempoRestante--;
        
        if (tiempoRestante <= 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "¡Oferta finalizada!";
            return;
        }
        
        // Calcular horas, minutos y segundos
        const horas = Math.floor(tiempoRestante / 3600);
        const minutos = Math.floor((tiempoRestante % 3600) / 60);
        const segundos = tiempoRestante % 60;
        
        // Formatear con dos dígitos
        const formato = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
        countdownElement.textContent = formato;
    }, 1000);
}

// Añadir estilos para animaciones
document.head.insertAdjacentHTML('beforeend', `
<style>
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .product-card:hover .product-image {
        animation: pulse 1s ease-in-out;
    }
</style>
`);