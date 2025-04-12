const db = {
    usuario: {
        email: "briangomez@gmail.com",
        usuario: "bgomez",
        constraseña: "brian1234",
        nacimiento: "07/12/2000",
        documento: 41082865,
        foto: "/images/users/foto-perfil-b.webp"
    },

    productos: [
        {
            imagen: "/images/products/macbook-pro.jpg",
            producto: "MacBook Pro",
            descripcion: "Equipada con el chip M4 de última generación, la MacBook Pro entrega un rendimiento imbatible en procesamiento y gráficos, ideal para profesionales de alta demanda. Su pantalla Liquid Retina XDR proporciona colores vibrantes y detalles ultrafinos, mientras que su construcción en aluminio la hace resistente y liviana para máxima portabilidad.",
            comentarios: [
                {
                    usuario: "martugodoy7",
                    texto: "Superó todas mis expectativas. Es rápida, liviana y la calidad de la pantalla es impresionante. Ideal para trabajar, editar videos o simplemente disfrutar contenido en alta definición",
                    foto: "",
                },
                {
                    usuario: "santino11",
                    texto: "Está buenísima. Uso la MacBook Pro para la facu y para editar videos, y anda rapidísimo. La batería dura un montón y se ve re bien.",
                    foto: "", 
                },
                {
                    usuario: "maria1205",
                    texto: "Utilizo la MacBook Pro para gestionar mi empresa y proyectos creativos. Su rendimiento, velocidad y calidad de pantalla hacen que todo el flujo de trabajo sea mucho más eficiente. Sin dudas, una gran inversión.",
                    foto: "",
                }
            ]
        },

        {
            imagen: "/images/products/ipadpro.png",
            producto: "iPad Pro",
            descripcion: "El iPad Pro con chip M2 ofrece un rendimiento de alto nivel para profesionales creativos. Su pantalla Liquid Retina XDR brinda una calidad de imagen excepcional, ideal para edición de video, diseño 3D y trabajo multitarea. Compatible con Apple Pencil y conectividad 5G, es la herramienta perfecta para crear y trabajar desde cualquier lugar.",
            comentarios: [
                {
                    usuario: "josefinaa1",
                    texto: "Ideal para el trabajo creativo. El iPad Pro es súper potente, perfecto para edición de fotos, diseño y notas. Ligero pero muy poderoso, es una herramienta que uso todos los días.",
                    foto: "",
                },
                {
                    usuario: "jose.cc",
                    texto: "Muy versátil y potente. El iPad Pro me sirve para todo: tomar apuntes, editar, leer, ver series... ¡y la batería dura un montón! Muy contento con la compra.",
                    foto: "", 
                },
                {
                    usuario: "ampivv",
                    texto: "Es increíble para trabajar, dibujar o simplemente navegar. Es rápido, liviano y la pantalla es una locura. Lo uso todos los días.",
                    foto: "",
                }
            ]
        },

        {
            imagen: "/images/products/iphone16.jpg",
            producto: "iPhone 16 Pro Max",
            descripcion: "El iPhone 16 Pro Max combina el nuevo chip A18 Pro con una pantalla Super Retina XDR y una cámara de nivel profesional. Diseñado en titanio, ofrece un rendimiento ultra rápido, autonomía mejorada y capacidades avanzadas de fotografía y video. Es el iPhone más potente y versátil hasta ahora.",
            comentarios: [
                {
                    usuario: "martin.l",
                    texto: "La cámara es otro nivel. Me encanta sacar fotos y grabar videos, y el iPhone 16 Pro Max realmente hace que todo se vea espectacular.",
                    foto: "",
                },
                {
                    usuario: "maria1.1",
                    texto: "Perfecto para productividad y creatividad. Uso el iPhone 16 Pro Max para trabajar en movimiento.",
                    foto: "", 
                },
                {
                    usuario: "maxi1509",
                    texto: "El mejor iPhone que tuve. La batería aguanta todo el día sin problemas.",
                    foto: "",
                }
            ]
        },

        {
            imagen: "/images/products/apple-watch-ultra.jpg",
            producto: "Apple Watch Ultra",
            descripcion: "El Apple Watch Ultra está diseñado para aventuras extremas, con una caja de titanio resistente, GPS de precisión y una batería de larga duración. Ideal para deportistas y exploradores, combina resistencia, tecnología avanzada y funciones de salud y entrenamiento de nivel profesional.",
            comentarios: [
                {
                    usuario: "luca.gelmetti22",
                    texto: "Es ideal para entrenar y para el día a día. Me encanta cómo se ve y la batería dura mucho más que otros modelos.",
                    foto: "",
                },
                {
                    usuario: "lucia.c",
                    texto: "Hago trekking y natación, y el Apple Watch Ultra aguanta todo. GPS preciso, resistencia al agua, y siempre conectado.",
                    foto: "", 
                },
                {
                    usuario: "jose12",
                    texto: "Cómodo, resistente y con un diseño espectacular.",
                    foto: "",
                }
            ]
        },

        {
            imagen: "/images/products/visionpro.jpg",
            producto: "Apple Vision Pro",
            descripcion: "Los Apple Vision Pro combinan realidad aumentada y virtual para ofrecer una experiencia inmersiva sin precedentes. Equipados con el chip R1 y pantallas de ultra alta resolución, permiten interactuar con apps, contenido multimedia y entornos digitales de manera intuitiva. Diseñados para transformar la forma en que trabajamos, nos comunicamos y disfrutamos del entretenimiento.",
            comentarios: [
                {
                    usuario: "ignacio.p",
                    texto: "Una experiencia increíble. Usar los Apple Vision Pro es como estar dentro de otro mundo. Todo se ve súper real y la calidad de imagen es impresionante.",
                    foto: "",
                },
                {
                    usuario: "juanaoller",
                    texto: "Perfectos para trabajar, jugar o ver contenido como nunca antes.",
                    foto: "", 
                },
                {
                    usuario: "miguel00",
                    texto: " Nunca había probado algo tan realista. Los Apple Vision Pro son cómodos e intuitivos",
                    foto: "",
                }
            ]
        },

        {
            imagen: "/images/products/airpodsmax.png",
            producto: "Airpods Max",
            descripcion: "Los AirPods Max ofrecen una experiencia de audio premium con cancelación activa de ruido, sonido espacial y un diseño de alta gama. Equipados con el chip H1, logran una reproducción de sonido inmersiva y precisa, ideal para música, películas y llamadas. Su estructura en acero inoxidable y almohadillas de espuma viscoelástica aseguran comodidad y calidad durante todo el día.",
            comentarios: [
                {
                    usuario: "fernandez1",
                    texto: "Calidad premium. Los materiales, el sonido y la cancelación de ruido son impresionantes. Perfectos para trabajar o viajar.",
                    foto: "",
                },
                {
                    usuario: "agustina.castro",
                    texto: "Los mejores auriculares que probé. El audio espacial te hace sentir dentro de la música. Además, son súper cómodos para usar varias horas.",
                    foto: "", 
                },
                {
                    usuario: "123alejandro",
                    texto: "Suenan increíble, con bajos potentes y un diseño súper cómodo",
                    foto: "",
                }
            ]
        },

        {
            imagen: "/images/products/homepod.jpg",
            producto: "HomePod",
            descripcion: "El HomePod combina un diseño compacto con un sonido de alta fidelidad, gracias a su procesamiento avanzado y su tecnología de audio espacial. Integrado con Siri, permite controlar dispositivos inteligentes, reproducir música y gestionar tareas con la voz. Ideal para cualquier ambiente, ofrece una experiencia sonora rica y envolvente.",
            comentarios: [
                {
                    usuario: "rocio23",
                    texto: "Muy fácil de usar. Lo configuré en minutos y el sonido envolvente es buenísimo. ",
                    foto: "",
                },
                {
                    usuario: "valentin.k1",
                    texto: "El HomePod llena toda la casa con música increíble. Además, Siri funciona súper bien para controlar todo.",
                    foto: "", 
                },
                {
                    usuario: "alejo222",
                    texto: "Uso el HomePod para música, luces y recordatorios. Se escucha fuerte, claro y se ve elegante en cualquier lugar.",
                    foto: "",
                }
            ]
        },

        {
            imagen: "/images/products/airtags.jpg",
            producto: "Airtags",
            descripcion: "Los AirTags son dispositivos de rastreo compactos diseñados para ayudarte a localizar objetos personales como llaves, mochilas o carteras. Equipados con el chip U1 y tecnología de banda ultraancha, ofrecen localización precisa a través de la app Buscar. Resistentes al agua y con batería de larga duración, son la solución ideal para no perder lo que más importa.",
            comentarios: [
                {
                    usuario: "marcelo.frias",
                    texto: "Uso AirTags para seguir mi equipaje cuando viajo. Me encanta lo precisos que son.",
                    foto: "",
                },
                {
                    usuario: "123monica",
                    texto: "Me salvaron varias veces. Puse AirTags en las llaves y la mochila, y ya no pierdo nada.",
                    foto: "", 
                },
                {
                    usuario: "lola999",
                    texto: "Muy prácticos. No sabía cuánto los necesitaba hasta que los probé. Ahora siempre sé dónde están mis cosas.",
                    foto: "",
                }
            ]
        },

        {
            imagen: "/images/products/magic-keyboard.jpg",
            producto: "Magic Keyboard Folio",
            descripcion: "El Magic Keyboard Folio ofrece una experiencia de escritura cómoda y precisa para el iPad. Con teclas de tamaño completo, trackpad integrado y un diseño desmontable, combina portabilidad y funcionalidad. Ideal para productividad en movimiento, convierte al iPad en una herramienta versátil para trabajo y estudio.",
            comentarios: [
                {
                    usuario: "julian.v",
                    texto: "Es súper cómodo para escribir, y el trackpad hace todo mucho más fácil.",
                    foto: "",
                },
                {
                    usuario: "benitez.sol",
                    texto: "Ideal para trabajar. Es liviano, resistente y las teclas se sienten geniales. ¡Me encanta llevarlo a todos lados con el iPad!",
                    foto: "", 
                },
                {
                    usuario: "jose2",
                    texto: "Súper práctico. Me facilita un montón cuando tengo que escribir mails o hacer trabajos.",
                    foto: "",
                }
            ]
        },

        {
            imagen: "/images/products/studio-display.png",
            producto: "Apple Studio Display",
            descripcion: "El Studio Display ofrece una pantalla Retina 5K de 27 pulgadas con colores vibrantes y detalles excepcionales. Diseñado para profesionales creativos, integra una cámara ultra gran angular con Encuadre Centrado, micrófonos de calidad de estudio y un sistema de sonido envolvente. Es el complemento perfecto para cualquier flujo de trabajo exigente.",
            comentarios: [
                {
                    usuario: "delfina12",
                    texto: "Un monitor de otro nivel. Desde que lo uso, trabajar se siente mucho más fluido. Además, el diseño es increíble.",
                    foto: "",
                },
                {
                    usuario: "jose.j3",
                    texto: "El brillo, la resolución y el sonido integrado son impresionantes. ",
                    foto: "", 
                },
                {
                    usuario: "t.santiago1",
                    texto: "Increíble calidad de imagen. El Studio Display tiene colores súper nítidos y una definición espectacular. Ideal para diseño y edición.",
                    foto: "",
                }
            ]
        }
    ]
}

module.exports = db