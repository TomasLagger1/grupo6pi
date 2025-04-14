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
('briangomez@gmail.com', 'brian1234', '41082865', '2000-12-07', ''),
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
(1, '/images/products/iphone16.jpg', 'iPhone 16 Pro Max', 'El iPhone 16 Pro Max combina el nuevo chip A18 Pro con una pantalla Super Retina XDR y una cámara de nivel profesional. Diseñado en titanio, ofrece un rendimiento ultra rápido, autonomía mejorada y capacidades avanzadas de fotografía y video. Es el iPhone más potente y versátil hasta ahora.'),
(3, '/images/products/apple-watch-ultra.jpg', 'Apple Watch Ultra', 'El Apple Watch Ultra está diseñado para aventuras extremas, con una caja de titanio resistente, GPS de precisión y una batería de larga duración. Ideal para deportistas y exploradores, combina resistencia, tecnología avanzada y funciones de salud y entrenamiento de nivel profesional.'),
(5, '/images/products/visionpro.jpg', 'Apple Vision Pro', 'Los Apple Vision Pro combinan realidad aumentada y virtual para ofrecer una experiencia inmersiva sin precedentes. Equipados con el chip R1 y pantallas de ultra alta resolución, permiten interactuar con apps, contenido multimedia y entornos digitales de manera intuitiva. Diseñados para transformar la forma en que trabajamos, nos comunicamos y disfrutamos del entretenimiento.'),
(4, '/images/products/airpodsmax.png', 'Airpods Max', 'Los AirPods Max ofrecen una experiencia de audio premium con cancelación activa de ruido, sonido espacial y un diseño de alta gama. Equipados con el chip H1, logran una reproducción de sonido inmersiva y precisa, ideal para música, películas y llamadas. Su estructura en acero inoxidable y almohadillas de espuma viscoelástica aseguran comodidad y calidad durante todo el día.'),
(4, '/images/products/homepod.jpg', 'HomePod', 'El HomePod combina un diseño compacto con un sonido de alta fidelidad, gracias a su procesamiento avanzado y su tecnología de audio espacial. Integrado con Siri, permite controlar dispositivos inteligentes, reproducir música y gestionar tareas con la voz. Ideal para cualquier ambiente, ofrece una experiencia sonora rica y envolvente.'),
(3, '/images/products/airtags.jpg', 'Airtags', 'Los AirTags son dispositivos de rastreo compactos diseñados para ayudarte a localizar objetos personales como llaves, mochilas o carteras. Equipados con el chip U1 y tecnología de banda ultraancha, ofrecen localización precisa a través de la app Buscar. Resistentes al agua y con batería de larga duración, son la solución ideal para no perder lo que más importa.'),
(3, '/images/products/magic-keyboard.jpg', 'Magic Keyboard Folio', 'El Magic Keyboard Folio ofrece una experiencia de escritura cómoda y precisa para el iPad. Con teclas de tamaño completo, trackpad integrado y un diseño desmontable, combina portabilidad y funcionalidad. Ideal para productividad en movimiento, convierte al iPad en una herramienta versátil para trabajo y estudio.'),
(5, '/images/products/studio-display.png', 'Apple Studio Display', 'El Studio Display ofrece una pantalla Retina 5K de 27 pulgadas con colores vibrantes y detalles excepcionales. Diseñado para profesionales creativos, integra una cámara ultra gran angular con Encuadre Centrado, micrófonos de calidad de estudio y un sistema de sonido envolvente. Es el complemento perfecto para cualquier flujo de trabajo exigente.');