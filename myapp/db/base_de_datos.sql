CREATE SCHEMA grupo6pi;
USE grupo6pi;

CREATE TABLE usuarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(250) NOT NULL UNIQUE,
	contrasenia VARCHAR(500) NOT NULL,
    documento INT NOT NULL,
    nacimiento DATE NOT NULL,
	foto VARCHAR(300),
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO usuarios (email, contrasenia, documento, nacimiento, foto)
VALUES
('briangomez@gmail.com', 'brian1234', 41082865, '2000-12-07', ''),
('laura.mendez@gmail.com', 'laura2024', 38900231, '1995-03-21', ''),
('tomasrivero10@gmail.com', 'tommyriver', 40200123, '1998-11-15', ''),
('florencia_paz@gmail.com', 'florpaz88', 37455678, '1992-07-08', ''),
('ignaciotorres23@gmail.com', 'nachotorres', 42109876, '2001-01-30', '');

CREATE TABLE productos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	usuario_id INT UNSIGNED,
	imagen VARCHAR(250) NOT NULL,
	nombre VARCHAR(250) NOT NULL,
	descripcion TEXT NOT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
	FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

INSERT INTO productos (usuario_id, imagen, nombre, descripcion)
VALUES
(1, '/images/products/macbook-pro.jpg', 'MacBook Pro', 'Equipada con el chip M4 de última generación, la MacBook Pro entrega un rendimiento imbatible en procesamiento y gráficos, ideal para profesionales de alta demanda. Su pantalla Liquid Retina XDR proporciona colores vibrantes y detalles ultrafinos, mientras que su construcción en aluminio la hace resistente y liviana para máxima portabilidad.'),
(2, '/images/products/ipadpro.png', 'iPad Pro', 'El iPad Pro con chip M2 ofrece un rendimiento de alto nivel para profesionales creativos. Su pantalla Liquid Retina XDR brinda una calidad de imagen excepcional, ideal para edición de video, diseño 3D y trabajo multitarea. Compatible con Apple Pencil y conectividad 5G, es la herramienta perfecta para crear y trabajar desde cualquier lugar.'),
(1, '/images/products/iphone16.png', 'iPhone 16 Pro Max', 'El iPhone 16 Pro Max combina el nuevo chip A18 Pro con una pantalla Super Retina XDR y una cámara de nivel profesional. Diseñado en titanio, ofrece un rendimiento ultra rápido, autonomía mejorada y capacidades avanzadas de fotografía y video. Es el iPhone más potente y versátil hasta ahora.'),
(3, '/images/products/apple-watch-ultra.jpg', 'Apple Watch Ultra', 'El Apple Watch Ultra está diseñado para aventuras extremas, con una caja de titanio resistente, GPS de precisión y una batería de larga duración. Ideal para deportistas y exploradores, combina resistencia, tecnología avanzada y funciones de salud y entrenamiento de nivel profesional.'),
(5, '/images/products/visionpro.jpg', 'Apple Vision Pro', 'Los Apple Vision Pro combinan realidad aumentada y virtual para ofrecer una experiencia inmersiva sin precedentes. Equipados con el chip R1 y pantallas de ultra alta resolución, permiten interactuar con apps, contenido multimedia y entornos digitales de manera intuitiva. Diseñados para transformar la forma en que trabajamos, nos comunicamos y disfrutamos del entretenimiento.'),
(4, '/images/products/airpodsmax.png', 'Airpods Max', 'Los AirPods Max ofrecen una experiencia de audio premium con cancelación activa de ruido, sonido espacial y un diseño de alta gama. Equipados con el chip H1, logran una reproducción de sonido inmersiva y precisa, ideal para música, películas y llamadas. Su estructura en acero inoxidable y almohadillas de espuma viscoelástica aseguran comodidad y calidad durante todo el día.'),
(4, '/images/products/homepod.jpg', 'HomePod', 'El HomePod combina un diseño compacto con un sonido de alta fidelidad, gracias a su procesamiento avanzado y su tecnología de audio espacial. Integrado con Siri, permite controlar dispositivos inteligentes, reproducir música y gestionar tareas con la voz. Ideal para cualquier ambiente, ofrece una experiencia sonora rica y envolvente.'),
(3, '/images/products/airtags.jpg', 'Airtags', 'Los AirTags son dispositivos de rastreo compactos diseñados para ayudarte a localizar objetos personales como llaves, mochilas o carteras. Equipados con el chip U1 y tecnología de banda ultraancha, ofrecen localización precisa a través de la app Buscar. Resistentes al agua y con batería de larga duración, son la solución ideal para no perder lo que más importa.'),
(3, '/images/products/magic-keyboard.jpg', 'Magic Keyboard Folio', 'El Magic Keyboard Folio ofrece una experiencia de escritura cómoda y precisa para el iPad. Con teclas de tamaño completo, trackpad integrado y un diseño desmontable, combina portabilidad y funcionalidad. Ideal para productividad en movimiento, convierte al iPad en una herramienta versátil para trabajo y estudio.'),
(5, '/images/products/studio-display.png', 'Apple Studio Display', 'El Studio Display ofrece una pantalla Retina 5K de 27 pulgadas con colores vibrantes y detalles excepcionales. Diseñado para profesionales creativos, integra una cámara ultra gran angular con Encuadre Centrado, micrófonos de calidad de estudio y un sistema de sonido envolvente. Es el complemento perfecto para cualquier flujo de trabajo exigente.');

CREATE TABLE comentarios(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT UNSIGNED NOT NULL,
    producto_id INT UNSIGNED NOT NULL,
    comentario TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

INSERT INTO comentarios (usuario_id, producto_id, comentario) 
VALUES
(2, 1, "Superó todas mis expectativas. Es rápida, liviana y la calidad de la pantalla es impresionante. Ideal para trabajar, editar videos o simplemente disfrutar contenido en alta definición"),
(4, 1, "Está buenísima. Uso la MacBook Pro para la facu y para editar videos, y anda rapidísimo. La batería dura un montón y se ve re bien."),
(5, 1, "Utilizo la MacBook Pro para gestionar mi empresa y proyectos creativos. Su rendimiento, velocidad y calidad de pantalla hacen que todo el flujo de trabajo sea mucho más eficiente. Sin dudas, una gran inversión."),

(1, 2, "Ideal para el trabajo creativo. El iPad Pro es súper potente, perfecto para edición de fotos, diseño y notas. Ligero pero muy poderoso, es una herramienta que uso todos los días."),
(3, 2, "Muy versátil y potente. El iPad Pro me sirve para todo: tomar apuntes, editar, leer, ver series... ¡y la batería dura un montón! Muy contento con la compra."),
(5, 2, "Es increíble para trabajar, dibujar o simplemente navegar. Es rápido, liviano y la pantalla es una locura. Lo uso todos los días."),

(4, 3, "La cámara es otro nivel. Me encanta sacar fotos y grabar videos, y el iPhone 16 Pro Max realmente hace que todo se vea espectacular."),
(2, 3, "Perfecto para productividad y creatividad. Uso el iPhone 16 Pro Max para trabajar en movimiento."),
(1, 3, "El mejor iPhone que tuve. La batería aguanta todo el día sin problemas."),

(3, 4, "Es ideal para entrenar y para el día a día. Me encanta cómo se ve y la batería dura mucho más que otros modelos."),
(5, 4, "Hago trekking y natación, y el Apple Watch Ultra aguanta todo. GPS preciso, resistencia al agua, y siempre conectado."),
(4, 4, "Cómodo, resistente y con un diseño espectacular."),

(1, 5, "Una experiencia increíble. Usar los Apple Vision Pro es como estar dentro de otro mundo. Todo se ve súper real y la calidad de imagen es impresionante."),
(3, 5, "Perfectos para trabajar, jugar o ver contenido como nunca antes."),
(2, 5, "Nunca había probado algo tan realista. Los Apple Vision Pro son cómodos e intuitivos."),

(5, 6, "Calidad premium. Los materiales, el sonido y la cancelación de ruido son impresionantes. Perfectos para trabajar o viajar."),
(4, 6, "Los mejores auriculares que probé. El audio espacial te hace sentir dentro de la música. Además, son súper cómodos para usar varias horas."),
(1, 6, "Suenan increíble, con bajos potentes y un diseño súper cómodo."),

(2, 7, "Muy fácil de usar. Lo configuré en minutos y el sonido envolvente es buenísimo."),
(3, 7, "El HomePod llena toda la casa con música increíble. Además, Siri funciona súper bien para controlar todo."),
(4, 7, "Uso el HomePod para música, luces y recordatorios. Se escucha fuerte, claro y se ve elegante en cualquier lugar."),

(1, 8, "Uso AirTags para seguir mi equipaje cuando viajo. Me encanta lo precisos que son."),
(5, 8, "Me salvaron varias veces. Puse AirTags en las llaves y la mochila, y ya no pierdo nada."),
(3, 8, "Muy prácticos. No sabía cuánto los necesitaba hasta que los probé. Ahora siempre sé dónde están mis cosas."),

(4, 9, "Es súper cómodo para escribir, y el trackpad hace todo mucho más fácil."),
(2, 9, "Ideal para trabajar. Es liviano, resistente y las teclas se sienten geniales. ¡Me encanta llevarlo a todos lados con el iPad!"),
(5, 9, "Súper práctico. Me facilita un montón cuando tengo que escribir mails o hacer trabajos."),

(3, 10, "Un monitor de otro nivel. Desde que lo uso, trabajar se siente mucho más fluido. Además, el diseño es increíble."),
(1, 10, "El brillo, la resolución y el sonido integrado son impresionantes."),
(4, 10, "Increíble calidad de imagen. El Studio Display tiene colores súper nítidos y una definición espectacular. Ideal para diseño y edición.");