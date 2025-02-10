/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, e as renderComponent } from '../astro.5936df6a.mjs';
import 'html-escaper';
import { $ as $$Layout } from './404.astro.69a4bb31.mjs';

const books = [
  {
    id: 'Astronomy Today',
    title: 'Astronomy Today',
    img: "https://m.media-amazon.com/images/I/41L361eajEL._SY466_.jpg",
    opinion: 'En esta novena edición de Astronomy Today, los autores Eric Chaisson y Steve McMillan comunican su entusiasmo por la astronomía, combinando la ciencia actualizada con una pedagogía perspicaz. El texto hace hincapié en la visualización, centrándose en el proceso de descubrimiento científico con el fin de enseñar a los lectores "cómo sabemos lo que sabemos". Las características actualizadas de la 9ª edición, Big Pictures and Big Questions, ayudan a los lectores a conectar el contenido de cada capítulo con una comprensión más amplia del universo, al tiempo que despiertan el interés en la investigación actual. Nuevas características dentro de Mastering ™ La astronomía reúne estas características y permite a los lectores interactuar con la astronomía fuera del aula. La 9ª edición también ha sido completamente actualizada y revisada para reflejar los descubrimientos recientes en el campo de la astronomía.',
    author: 'Chaisson Eric, McMillan Steve',
    language: 'English',
    urlDrive: "1yr_dKMypJvv_HW9Bwu2LCknTFeDqy4ST",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4mGVVwymB7L7FqJbSiYUhCGEsUVsivJ3FnQIweDm6yq8N0bGnfDNi-L6YNd-E2mIkTj07eC8FBvpygN3LVFVbIH1bdPw2X-LGDpM9x8xNkRBvsD3RPBwIQw54cWXen_q4YsNkVVOSVGcXcsH_KLJfZ_5iHsBv-rp65IpLE0daauWc1UMFJSiTkxxnNriojnZpB6dE7yz_YHfmUCzatrXCIgw',
    url: './astronomy/Astronomy Today.pdf',
    pages: 847,
    format: 'Libro',
    rating: 0
  },

  {
    id: 'Caminos entre las Constelaciones',
    title: 'Caminos entre las Constelaciones',
    img: "./images/Caminos entre las Constelaciones.png",
    opinion: 'Nuestro recorrido comenzará localizando algunas estrellas y constelaciones que destacan claramente y que son fáciles de situar, del mismo modo que cuando estudiamos el plano de una ciudad desconocida hacemos el esfuerzo de retener algunos puntos (plazas, calles, edificios) relevantes que nos sirvan luego para orientarnos en su visita. A partir de esas referencias iremos en busca de otras menos llamativas trazando imaginariamente calles (rectas o curvas) en el cielo que nos lleven sin pérdida a identificar nuevas estrellas y constelaciones.',
    author: 'Antonio Arribas de Costa',
    language: 'Español',
    urlDrive: "1di3Kb6FW88377pBPgUGs_to1olpU93wy",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4m1r8vTDKnbf6g94B4PnQtj1yY-CAWhFaKv0baj1vlyMz6jIh7WXV5QjzBy3WIVs1AzBz7rElh6KNx2k6UZ60cIklopgWerKCQpplo4XUMZ2w3XT160WJmR-x2_5ANxoQsAzMD-OIMAlMUdXt5O2OMZ2XD6n7jmxPR3Xpkqadf_M3PClqAISmJkmJXNHLjkM8m-2C6JccVP7Qmx1SemyoMxkr0F6ywHeBob9amSN9iktQ',
    url: './astronomy/Caminos entre las Constelaciones.pdf',
    pages: 57,
    format: 'Libro',
    rating: 0
  },
  {
    id: 'Abundance variations in the globular cluster M71 (NGC 6838)',
    title: 'Abundance variations in the globular cluster M71 (NGC 6838)',
    img: "./images/Artículo.jpg",
    opinion: 'Contexto. Las variaciones de abundancia en cúmulos globulares moderadamente ricos en metales pueden dar pistas sobre la formación y el enriquecimiento químico de los cúmulos globulares   Objetivos. Se miden los índices CN, CH, Na, Mg y Al en espectros de 89 estrellas del cúmulo globular M71, rico en metales plantilla, y se discuten las implicaciones sobre la mezcla interna. Métodos. Se analizan las estrellas desde el desvío hasta la Rama de Gigante Roja (0,87 < log g < 4,65) observadas con el espectrograma multiobjeto GMOS del telescopio Gemini-North. Las velocidades radiales, los colores, las temperaturas efectivas, las gravedades y los índices espectrales son    determinado para la muestra.  Resultados. Se confirman hallazgos previos relacionados con la bimodalidad CN y la anticorrelación CN-CH en estrellas de M71. También encontramos una    Correlación CN-Na, y Al-Na, así como una anticorrelación Mg2-Al.  Conclusiones. Una combinación de mezcla convectiva y contaminación primordial por AGB o estrellas masivas en las primeras etapas de la formación globular.  Se requiere la formación de grupos para explicar las observaciones.',
    author: 'A. Alves-Brito1, R. P. Schiavon2, B. Castilho3, and B. Barbuy',
    language: 'English',
    urlDrive: "1M2VjAKWebexKkvWVSM6IbeHz9mMfUAx8",
    urlOnedrive: 'https://onpmzq.am.files.1drv.com/y4mMg4nfQ48mNttU3wQSpD-djwswJhHo_Z3RKi0oT1yLvbUU1_oqOvybNWIsoeLhFq9YAGN0yYhuAuK78bqLjPoPpesfvOzXXIggMXeHz5cDuiiqtcyM79wSKrrnbAkXFkhEvNmrMcoXqJcu9QAgCtdvYLUcq6dKx9p0AS36lQgp7N1_TyIWpGxs4GW0VfZ_NgFEOQ9W9YrSRXq1-cF6JEdwo_nLGiy8Ce0CqzYx4VqV8o',
    url: './astronomy/Abundance variations in the globular cluster M71.pdf',
    pages: 10,
    format: 'Artículo',
    rating: 0
  },
  {
    id: 'Astronomia 100 preguntas 100 respuestas',
    title: 'Astronomia 100 preguntas 100 respuestas',
    img: "./images/Astronomia 100 preguntas 100 respuestas.png",
    opinion: '¿Qué es una Unidad Astronómica? ¿Estamos solos en el Universo? - ¿Es cierto que la extinción de los dinosaurios se debió al impacto de un meteorito? - ¿Que diferencia un asteroide de un cometa? - ¿Cuál es el tamaño de nuestra galaxia? - ¿Cómo se forman las estrellas? - ¿Qué es una Unidad Astronómica? - ¿Estamos solos en el Universo? - ¿Es cierto que la extinción de los dinosaurios se debió al impacto de un meteorito? - ¿Que diferencia un asteroide de un cometa? - ¿Cuál es el tamaño de nuestra galaxia? - ¿Cómo se forman las estrellas?¿Qué es una Unidad Astronómica? - ¿Estamos solos en el Universo? - ¿Es cierto que la extinción de los dinosaurios se debió al impacto de un meteorito? - ¿Que diferencia un asteroide de un cometa? - ¿Cuál es el tamaño de nuestra galaxia? - ¿Cómo se forman las estrellas?',
    author: 'Andalucía Investiga',
    language: 'Español',
    urlDrive: "12zaehrjd3qMWjF9A9R-Ybkjy7o6vfkEq",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4myU86xDcjJ0VVYvAFTf2rm-XMjjvFoS7-0ehClgZlJwkMbeNN1HZQKEllrh2yMTOdq2bGrBvZXe9KQpYutMMvX0BiJln1_G1wjy1CT1YPhJ6tRO6V73I37Ykx3dJVdxLTiPV4bk8sF0CJIxkjEGQc6S-o_3gCAH_SFNhoO05jngvvokz-6-RkamaTpZYyFfNgqif86wsBlDT43b2Ek7fknRHe7NGqncNDd3mbhLK0W0U',
    url: './astronomy/Caminos entre las Constelaciones.pdf',
    url: './astronomy/Astronomia 100 preguntas 100 respuestas.pdf',
    pages: 36,
    format: 'Libro',
    rating: 0
  },
  {
    id: 'Astronomy of the Milky Way',
    title: 'Astronomy of the Milky Way',
    img: "https://m.media-amazon.com/images/I/615WbJRBHPL._SL1200_.jpg",
    opinion: 'Este es el primero de una serie de dos volúmenes que tratan de toda la Vía Láctea. Este primer volumen analiza lo que se puede ver predominantemente desde los cielos del norte. Además del texto descriptivo, hay muchos mapas y cartas estelares, así como las últimas imágenes actualizadas tomadas por observatorios de todo el mundo y en el espacio, así como imágenes tomadas por astrónomos aficionados.',
    author: 'Mike Inglis',
    language: 'English',
    urlDrive: "1HT9yOt6QSOGLeBYULuoCT08dF8sWmf_s",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4mLxffC6rCPdHZyMyBfDOpcnTGuU21trHNOoTroA5OEFRdYxJGpZWVp-XH2pYNBxCY0Cw1aNt7rGHmic6wfdEJ7otVqBcrbOq1tgAq56jzEZIchhDSuHCm_n8f4ypNtmHSLsjgKt1CoSKR7WjcWGSb-u7cDaE81bbMUuw75RFcGcinV5wiYRIeh7Y9m48xf7mNQwPd4ucZexRtvZT7IpsSPW4roqgW5ARBg6dIUJfSUp4',
    url: './astronomy/Astronomy of the Milky Way.pdf',
    pages: 225,
    format: 'Libro',
    rating: 0
  },
  {
    id: 'Astronomy-',
    title: 'Astronomy',
    img: "https://m.media-amazon.com/images/I/512B4YZ5E7L._SL1360_.jpg",
    opinion: 'La astronomía está diseñada para cumplir con los requisitos de alcance y secuencia de cursos introductorios de astronomía de uno o dos semestres. El libro comienza con fundamentos científicos relevantes y avanza a través de una exploración del sistema solar, las estrellas, las galaxias y la cosmología. El libro de texto de Astronomía fomenta la comprensión de los estudiantes mediante el uso de analogías relevantes, explicaciones claras y no técnicas e ilustraciones ricas. Las matemáticas se incluyen de manera flexible para satisfacer las necesidades de los instructores individuales.',
    author: 'Andrew Frnknoi, David Morrison',
    language: 'English',
    urlDrive: "",
    urlOnedrive: 'https://odpgzq.am.files.1drv.com/y4mrticUSCkgxVXrEQEib2RSw6HjOgQDRWs2J-D21jyYb4TK2N7HY3ce3stBbFlEUi-vjXQUFF3E6h_rcr-bSty_alWMCnwb2yd8avnirnZdZwGaaHl3osrLDPAL7OtM77OHXEln19YhxYWgiP8by5HTY-gIwczT4yGKRKVjTyjGgTEpUuBJCflcoEoWrkUIM_L4S_By_LbUpHZrSF3Hax6nvB4SQE8FTuzKJ63YZZcZpI',
    url: './astronomy/Astronomy.pdf',
    pages: 1200,
    format: 'Libro',
    rating: 0
  },
  {
    id: 'Astrophysics Is Easy!',
    title: 'Astrophysics Is Easy!',
    img: "https://m.media-amazon.com/images/I/718ljsnHAaL._SL1254_.jpg",
    opinion: 'La astrofísica a menudo se considera –con cierta justificación– incomprensible sin el uso de matemáticas superiores. En consecuencia, muchos astrónomos aficionados se pierden algunos de los aspectos más fascinantes del tema. ¡La astrofísica es fácil! elimina las difíciles matemáticas y explica los conceptos básicos de la astrofísica en términos accesibles. Utilizando nada más que aritmética simple y ejemplos simples, el funcionamiento del universo se describe de una manera sencilla pero detallada y fácil de entender.',
    author: 'Mike Inglis',
    language: 'English',
    urlDrive: "",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4mEY-4CQNoC0XL7NVE2HpXtfcc9fNFIDqmnvnZ2MuByUINpaESS99nR8_ryWI9X_EOvcpvxtUn5szsbIrzGz-Hygsl0m9dsC0owxYQA6R79fgLJ_biqNP60aJlJh6NRqFaXa3WcEHE47WjBLoS72Z1Z6mBs2nwGNdneEObCzEIaLppVcg8MH-S9Jr2tN5nGm18SFmGedKzVB61V05MHlgwkIAj9EHYozh6r9nGvckj7CU',
    url: './astronomy/Astrophysics Is Easy!.pdf',
    pages: 218,
    format: 'Libro',
    rating: 0
  },
  {
    id: 'CCD Astrophotography. High-Quality Imaging from the Suburbs',
    title: 'CCD Astrophotography. High-Quality Imaging from the Suburbs',
    img: "https://m.media-amazon.com/images/I/61FhXYctfIL._SL1360_.jpg",
    opinion: 'Este libro detalla una aproximación al problema de obtener imágenes astronómicas de alta calidad en condiciones de contaminación lumínica. El libro está dirigido a astrónomos aficionados interesados en las imágenes CCD, especialmente aquellos que tienen que trabajar en condiciones suburbanas. Describe los materiales y equipos utilizados para obtener imágenes de alta calidad. Las maravillosas imágenes producidas permiten al lector ver el producto de, inicialmente, los esfuerzos de un compañero principiante. Se pueden lograr imágenes respetables con un equipo modesto. Este libro describe un programa de trabajo completo y minuciosamente probado para que cada principiante pueda lograr imágenes digitales de alta calidad.',
    author: 'Adam M. Stuart',
    language: 'English',
    urlDrive: "",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4mnYDYVtC2QcZvNp3YzrBLqJJztW_kR4dJALucc5CPhyqnw1Rh-qJiI3n0LHBxGnDRr8JexfopWnGdsXnt_tK8xz-t4KMr8JjNL-Zn8KbCwwDi2DY4S1IMe-UHg0JdijdaGBmth1ZSuqudbBbB_M51UtAlvh9DXl1SZVFa-V6FkExI6Bjz-Y-yVDTnphyr6UfDZCdGsASDM1oDweHmxAriF3VUfYJaZoxjF8BPF2VLk6A',
    url: './astronomy/CCD Astrophotography. High-Quality Imaging from the Suburbs.pdf',
    pages: 199,
    format: 'Libro',
    rating: 0
  },
  {
    id: 'Discovering the Solar System',
    title: 'Discovering the Solar System',
    img: "./images/Discovering the Solar System.png",
    opinion: 'El libro comienza con una descripción general del Sistema Solar y su origen, y luego analiza cuerpos pequeños, como asteroides, cometas y meteoritos. \\n Equilibrando cuidadosamente la amplitud de la cobertura con la profundidad, Descubriendo el Sistema Solar, Segunda Edición: \r\n<br>&lt;br&gt;&#013; · Ofrece una introducción completa, asumiendo poco conocimiento previo <br> · Incluye una cobertura completa de cada planeta, así como de la luna, Europa y Titán. La segunda edición incluye material nuevo sobre sistemas exoplanetarios y una actualización general. <br> · Presenta los últimos resultados de las misiones Mars Rover y Cassini-Huygens <br> · Incluye una sección de láminas en color <br> · Contiene preguntas de "detente y piensa" integradas en el texto para ayudar a la comprensión, junto con preguntas al final de secciones principales. Las respuestas se proporcionan al final del libro. <br> · proporciona resúmenes al final de cada capítulo y un glosario al final del libro.',
    author: 'Barrie W. Jones',
    language: 'English',
    urlDrive: "",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4mUPd0XB5qjmsgVFRDqfwXWMqsFbef-un5gE8Br93L1WN0ciDd-Yqw0gNtpeIZy0g7bpHAB7HtSdOtJTFMNZkTY64dIBy4kcO2gqWYwm8gqTVjokQX8SoSUfMDQCrGQbA-uYBj08JkzOkkIoRVJyRXRpAXsTgKc9auXuOP8MEhDnc2ymqMCQ9Tp3tzIVTqugI7pzwUoIFkJaigCGpK7LDf-BEF-oVw0bhVn8pMl948IrE',
    url: './astronomy/Discovering the Solar System.pdf',
    pages: 470,
    format: 'Libro',
    rating: 0
  },
  {
    id: 'Eclipses',
    title: 'Eclipses',
    img: "./images/Eclipses.png",
    opinion: 'Para hablar sobre eclipses hay que hablar necesariamente de los protagonistas que se ponen en escena, esto es, la luz, las sombras y los cuerpos implicados: el Sol, la Luna, la Tierra y sus movimientos relativos.<br> En esta sección inicial presentaremos sumariamente estos cuerpos y diversos conceptos introduciendo nociones y términos que serán necesarios para una adecuada comprensión de los posteriores capítulos.',
    author: 'Semana de la Ciencia y la Tecnología 2003',
    language: 'Español',
    urlDrive: "",
    urlOnedrive: '',
    url: './astronomy/Eclipses.pdf',
    pages: 57,
    format: 'Libro',
    rating: 0
  },
  {
    id: 'Encyclopedia of the Solar System',
    title: 'Encyclopedia of the Solar System',
    img: "https://m.media-amazon.com/images/I/5108ydTDlsL.jpg",
    opinion: 'La Enciclopedia del Sistema Solar, tercera edición, ganadora del Premio PROSE 2015 en Cosmología y Astronomía de la Asociación de Editores Estadounidenses, proporciona un marco para comprender el origen y la evolución del sistema solar, descubrimientos históricos y detalles sobre los cuerpos planetarios y cómo interactúan, con una asombrosa variedad de contenido y un impresionante impacto visual. La enciclopedia incluye las últimas exploraciones y observaciones, cientos de imágenes e ilustraciones digitales en color y más de 1000 páginas. Se presenta por sí solo como el trabajo definitivo en este campo y servirá como un mensajero moderno de descubrimientos científicos y brindará una mirada al futuro de nuestro sistema solar. Las nuevas incorporaciones a la tercera edición reflejan los últimos avances y crecimiento en el campo, incluidas misiones espaciales pasadas y presentes a los planetas terrestres, los sistemas solares exteriores y los telescopios espaciales utilizados para detectar planetas extrasolares.',
    author: 'Tilman Spohn, Doris Breuer, Torrence V. Johnson',
    language: 'English',
    urlDrive: "",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4moDbsgjRb5b2P-aAsYT1ph1J_fIcKZc8dd-wpm_wHz4cSsfW4JSmmG_99qe_1rxMKALr55DLo-li2yKByyiI2bN9dQqYUUTIxbCigQorgrxKI_iI8fz9wsHpAZ4_AhZxXDb3t3_QneFjCq6fRXnLjsoSW_lyzIzinPQQkbTtKDm8SLBTB73IngnXcwJ7UATiRYHha9jTwuO4sM-oenzxaypq1Pn9tC00QiKPaX6c6KSU?AV',
    url: './astronomy/Encyclopedia of the Solar System.pdf',
    pages: 1272,
    format: 'Libro',
    rating: 0
  },
  {
    id: 'Fundamental Astronomy',
    title: 'Fundamental Astronomy',
    img: "https://m.media-amazon.com/images/I/719JU3Z5fkL._SL1175_.jpg",
    opinion: 'Astronomía fundamental es una introducción completa y equilibrada a la astronomía clásica y moderna. Si bien enfatiza tanto los conceptos astronómicos como los principios físicos subyacentes, el texto proporciona una base sólida para estudios más profundos en las ciencias astronómicas. Esta es la quinta edición del exitoso libro de texto y obra de referencia para estudiantes universitarios. Ha sido ampliamente modernizado y ampliado en las partes que tratan de astronomía y cosmología extragalácticas. También encontrará secciones ampliadas sobre el sistema solar y los planetas extrasolares, así como un nuevo capítulo sobre astrobiología. Considerado durante mucho tiempo un texto estándar para estudiantes de ciencias físicas, Astronomía fundamental es también una excelente obra de referencia para astrónomos aficionados dedicados.',
    author: 'H. Karttunen, P. Kröger, ...',
    language: 'English',
    urlDrive: "",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4mR3gD0pTn1z_5w2vAVeBJohPTrR5ujko9PJlOJKLGAB1EjWcwUTebUJzK7uzGLUUANVCSMV6p5gdh98GwQCd7J0jmswisXy31gIhDvHkyYeBfdPSaQDERpnkT3TkQugaRr6jtx2FD4BE3bSVOOTJSAXr4h5xrsPNg78ZKmlIa3-s0XU8EbQh3Ix6Nw85bl2I4bqonOA_Hai48QaXoo0Tfk2U_7kGv_b5dqP33mVCzmWo',
    url: './astronomy/Fundamental Astronomy.pdf',
    pages: 507,
    format: 'Libro',
    rating: 0
  },
  {
    id: 'Fundamental Planetary Science',
    title: 'Fundamental Planetary Science',
    img: "https://m.media-amazon.com/images/I/61hG6olu8aL._SL1500_.jpg",
    opinion: 'Una introducción cuantitativa a la ciencia del Sistema Solar y los sistemas planetarios para estudiantes universitarios avanzados, este nuevo y atractivo libro de texto explica la amplia variedad de procesos físicos, químicos y geológicos que gobiernan los movimientos y propiedades de los planetas. Los autores brindan una descripción general de nuestro conocimiento actual y discuten algunas de las preguntas sin respuesta que están a la vanguardia de la investigación en ciencia planetaria y astrobiología actual. Combinan el conocimiento del Sistema Solar y las propiedades de los planetas extrasolares con observaciones astrofísicas de la formación de estrellas y planetas en curso, ofreciendo un modelo integral para comprender el origen de los sistemas planetarios. El libro concluye con una introducción a las propiedades fundamentales de los organismos vivos y la relación que la vida tiene con su planeta anfitrión. Con más de 200 ejercicios para ayudar a los estudiantes a aprender cómo aplicar los conceptos tratados, este libro de texto es ideal para un curso de un semestre o dos trimestres para estudiantes universitarios.',
    author: 'Jack J. Lissauer, Imke de Pater',
    language: 'English',
    urlDrive: "",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4mtGpz14q4M4tbTSxOQfgLXKwV315cJd_-DGDaJ6Buthn_ZufRRCy2VTK8j496t2K42eZ66cpsZ9Kv8sMEQwQWHMHIPXvR2xpz9pe4p3oDKhrYKJ7q0jJEjaeG1r2pgFoKXb9AZWunRDs4TyARkOZaaI61vVlEfLJ516w89zQKBvyui_k3VzEDjEaTDrBDrpTpoc_cqbLCdErnjDamcut3RLyC2vC4-GWMWxrf3NFFuvY',
    url: './astronomy/Fundamental Planetary Science.pdf',
    pages: 634,
    format: 'Libro',
    rating: 0
  },
  {
    id: 'The Dynamic Lives of Globular Clusters',
    title: 'The Dynamic Lives of Globular Clusters',
    img: 'images/The Dynamic Lives of Globular Clusters.png',
    opinion: 'Los cúmulos de estrellas lobulares son el deleite de astrónomos aficionados y profesionales. El sistema estelare más antiguos que se conoce, globular fue el tesigo del nacimineto de nuestra galaxia. Ahora sirven como laboratorios para teorías de dinámica estelar y evolución. Ampliamente estudiado desde el nacimiento de la astronomía moderna, los clusteres globulares siguen dando resultados sorprendentes y desafían nuestra comprensión.',
    author: 'George Djorgovski',
    language: 'English',
    urlDrive: "",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4mO_9S1DsGmxfdyJGo5QYtE36dGWFbKZPf9dcjS37zEzXLYeAd1uGZ7N7zOLrAvYLFCzhelfKBTM_kZutIzfTVaN6mg87ZRm3ZeIHXauCmzznfG7G93S7yi_m-bY9tQ0ryrfbxYOJdUzSkulbkfHgMRNOgFEJvvyxYhcVMrS28h7HD_HYVQmlAPhgOPwpu79jVlD5zQfhS8J99UoNnLbwOdO2hlN7cj71CBcDsMKvxCgU',
    url: './astronomy/The Dynamic Lives of Globular Clusters.pdf',
    pages: 6,
    format: 'Artículo',
    rating: 0
  },
  {
    id: 'Guide to Observing Deep-Sky Objects',
    title: 'Guide to Observing Deep-Sky Objects',
    img: "https://m.media-amazon.com/images/I/81ZoQNPK3PL._SL1360_.jpg",
    opinion: 'La Guía para la observación de objetos del cielo profundo es un libro de referencia para astrónomos aficionados. Contiene, para cada constelación, un mapa estelar que muestra las etiquetas de Bayer, una tabla para muchas de las estrellas de la constelación, junto con sus posiciones y magnitudes, y una tabla de los objetos de cielo profundo de la constelación, con datos de observación relevantes. . Las páginas opuestas proporcionan gráficos únicos de un año que muestran cuándo la constelación es visible en el cielo, lo que permite al usuario determinar rápidamente si una constelación determinada se puede ver y cuándo será el mejor momento para verla.',
    author: 'Jeff A. Farinacci',
    language: 'English',
    urlDrive: "",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4mz2kd_E5UmLa4HZvsDV0ARokAnTvfBQS5HmyER2tAnmGLqyg6J4EuuHrZrd-_bKyV1zvnfQZUxaZM4zyacNYo5LXcREfn6AwYhV2cIDJVMueuvn1t4yuAwjymn_6H2HAO3MLpFNJD0IYsvWZI8wkthbj7qhp-r7fncOInV15iEEw2k2Wk1IQFXpMtPS6-AwElxEtqQjHUqP4Q1P_7ML0Tz7slpEAgQ8SzHND1hxQQUno',
    url: './astronomy/Guide to Observing Deep-Sky Objects.pdf',
    pages: 6206,
    format: 'Libro',
    rating: 0
  },
  {
  id: 'Globular Cluster Systems',
  title: 'Globular Cluster Systems',
  img: "images/Globular Cluster Systems.png",
  opinion: 'Las características básicas del sistema de cúmulos globulares de la Vía Láctea se resumen en: la población total, la subdivisión de los clusteres en el clásico componentes pobres y ricos en metales, y primeras ideas sobre modelos de formación La distancia al centro galáctico se deriva de la distribución espacial del interior. Clusteres abultados que dan R0 = (8.1 +- 1.0) kpc',
  author: 'William Harris',
  language: 'English',
  urlDrive: "",
  urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4mIzqbIHSlc-qjtLSYSVbJQEUC9DcgGlKEzg5qzujhzIzAPfikH3C6_MxdA6WwF1KNftFHjdIBQfLhPGyfA3Mv1Q-KQX5zfs1aKQZ8Snjj1Wwoj3HLOxi1xxp9WKoaAThdPxJ8DRUib5lyBhUOxwuj7HNEYulq7KETJbSBhbzoVHRWVvNKQ9YfKmSxMOP0AoR8IEhUsPDOvXWHe0nRm4nVyZ657msOKp8U89BLjubJJZ8',
  url: './astronomy/Globular Cluster Systems.pdf',
  pages: 190,
  format: 'Libro',
  rating: 0
  },
  {
    id: 'Human Vision and the Night Sky',
    title: 'Human Vision and the Night Sky',
    img: "https://m.media-amazon.com/images/I/71D41zRgcZL._SL1360_.jpg",
    opinion: 'Este libro devuelve el desafío y la diversión a un pasatiempo que se vuelve obsoleto demasiado rápido para muchos astrónomos aficionados en ciernes. El libro comienza enseñando a los astrónomos a utilizar su herramienta astronómica más importante: sus ojos. Se explica cómo seleccionar el telescopio adecuado y los capítulos siguientes llevan a los lectores a un recorrido por el sistema solar como nunca antes lo habían visto... a través de sus propios ojos. Cada capítulo incluye una serie de desafíos de observación que entretendrán y empujarán al lector a alcanzar niveles de logros cada vez más altos.',
    author: 'Michael P. Borgia',
    language: 'English',
    urlDrive: "",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4m4OFeIK5DGYINCYwd7WLgX3kwsTUZI9xoruMXeeQO6TTBgaGhCf937QV_foaNXUeSdTeVxWwo8XEkNXl3OmoTZDdgTe_Yy5Hz-7ug1LKzqWQTZOk4Evm746FvxwbPcEJSegoepd1GfqNvHxLfDwY5cwy3BKUjyYaq0Qne_2f8mFuTXouBZMokGdei0VPA4MYcysLrrTyaPVwfKJConZfA70_tArfwSKaS29Mxfs9-fh0',
    url: './astronomy/Human Vision and the Night Sky.pdf',
    pages: 296,
    format: 'Libro',
    rating: 0
  },
  {
    id: 'Myths, Symbols and Legends of Solar System Bodies',
    title: 'Myths, Symbols and Legends of Solar System Bodies',
    img: "https://m.media-amazon.com/images/I/71hPoonwMDL._SL1254_.jpg",
    opinion: 'Este libro es una guía para astrónomos aficionados sobre la mitología y el simbolismo asociados con los cuerpos celestes del Sistema Solar, e incluso incluye algunas de las historias legendarias de personas que tuvieron o tienen una conexión con estos objetos. Explora diferentes culturas (por ejemplo, la grecorromana y la nórdica) y diferentes épocas y cómo se usaban las historias para explicar los mundos que veían sobre ellos. ¡Te sorprendería saber cuánto de nuestro mundo actual refleja los mitos y las historias de estas culturas.   La mayoría de los astrónomos aficionados están familiarizados con los diversos objetos del Sistema Solar, pero sólo tendrán una conciencia superficial de lo que las culturas antiguas pensaban de estos otros mundos. De hecho, la mitología de los planetas desafía muchos conceptos y creencias del siglo XXI. Hay otros libros disponibles sobre astromitología, pero éste se centra principalmente en nuestro propio Sistema Solar, a diferencia de las constelaciones y los objetos del cielo profundo.   Alexander ofrece un nuevo ángulo sobre temas atemporales y es emocionante, informativo y dramático, además de sorprendentemente relevante para la vida cotidiana. Descubra usted mismo cómo nuestro mundo moderno está impregnado de los mundos pasados de antaño.',
    author: 'Rachel Alexander',
    language: 'English',
    urlDrive: "",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4mtKOUNqdB6HM2RWg96bGRkICnyjJxHy7SD-mHPxSUb-pjlFKNltHl97HWyFeF_q7HKzxvV7gM05ehegTr5BBdUreSmeA-nISIP633_Wq7Z2LIpRkl7UqRUWZaAsJSymyA5uOOSHB6rlvr-UD5gxc5FGNDa4NSJOmSYWflomruCJMdX0BOr8P1ipO93mGHhM0jhck10i2ZcdjEltt2mkPYSoAXwGTjzBLXjULGccTopmY',
    url: './astronomy/Myths, Symbols and Legends of Solar System Bodies.pdf',
    pages: 246,
    format: 'Libro',
    rating: 0
  },
  {
    id: 'Pattern Asterisms. A New Way to Chart the Stars',
    title: 'Pattern Asterisms. A New Way to Chart the Stars',
    img: "https://m.media-amazon.com/images/I/61xj+ZUn26L._SL1360_.jpg",
    opinion: 'Este libro proporciona una valiosa herramienta de aprendizaje para facilitar la identificación de patrones y estrellas en el cielo. Adecuado para observadores que utilizan binoculares y telescopios de tamaño mediano, este catálogo incluye imágenes de estrellas, contornos de los objetos punto a punto (en una fotografía negativa para mayor claridad) y una imagen artística junto a los patrones de las estrellas. Se proporcionan el tamaño, las magnitudes estelares y las coordenadas, junto con la dirección norte, instrucciones para saltar de estrellas y referencias de Sky Atlas 2000. Con la ayuda de este libro, el observador imaginativo pronto comenzará a desarrollar una nueva visión de los patrones estelares y comenzará a ver sus propios patrones.',
    author: 'Rachel Alexander',
    language: 'English',
    urlDrive: "",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4mhOi1xV_zijO8s0BWw5upYYLs6zfthZUnpZoqeJvTwz5ZTicJThxPLlyYHnCWJbBF1oHdCbRi00QUX4rrs40ocgESZRcMKsVJU7zVTuBVnKpKhbxTIcl9LoySz1a3gMznil4tPNAXuEp_BfH_692JV43T6My5_7rtjbbyk8fWKFjOdN6LiohAAazfJE2l_XJpkHfM3jI5PctPr58cokEeewzs9-KV9Ld2rmm9_VLTqiQ',
    url: './astronomy/Pattern Asterisms. A New Way to Chart the Stars.pdf',
    pages: 167,
    format: 'Libro',
    rating: 0
  },
  {
    id: 'Planet Mercury',
    title: 'Planet Mercury',
    img: "https://m.media-amazon.com/images/I/71kwX9sl9ML._SL1360_.jpg",
    opinion: 'Está surgiendo una imagen nueva y detallada de Mercurio gracias a la misión MESSENGER de la NASA que pasó cuatro años en órbita alrededor del planeta más interno del Sol. Completamente ilustrado con imágenes en primer plano y otros datos, el autor describe los paisajes de Mercurio desde una perspectiva geológica: desde cavidades de sublimación hasta respiraderos volcánicos, llanuras de lava y fallas de empuje gigantes. Considera lo que su núcleo gigante, su estructura interna y su extraña composición tienen que decirnos sobre la formación y evolución de un planeta tan cerca del Sol. Esto es de especial importancia en vista del descubrimiento de tantos exoplanetas en órbitas igualmente cercanas alrededor de sus estrellas. Mercurio genera su propio campo magnético, como la Tierra (pero a diferencia de Venus, Marte y la Luna), y la interacción entre el campo magnético de Mercurio y el Sol afecta muchos procesos en su superficie y en la rica y diversa exosfera de partículas neutras y cargadas que la rodean, el planeta.    Hay muchas cosas sobre Mercurio que todavía no entendemos. Accesible para el aficionado, pero también un práctico resumen de los últimos avances para estudiantes e investigadores, el libro muestra cómo se desarrolló nuestro conocimiento de Mercurio durante el último siglo de observaciones terrestres, de sobrevuelo y orbitales, y mira hacia el futuro. en los misterios que quedan por explorar en futuras misiones.',
    author: 'David A. Rothery',
    language: 'English',
    urlDrive: "",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4mGw4A1xiK0jOjbXNop4Kh50Q1wQTVC9tSJuuy1tHM1FESyf6aR1c3c4HoBB0y2fHqmaLtay-7aWFbRy3yCUTqzDKdKzJtUnTFjgSWbb_BwdDU_IZUgEpVU1ruWSehnL_JJcap0prjHOF8gZOtHRmkl7xDWhqxZsZCrnescCUo8Arkdd0ucwZlwx8RXQaiwgVoeR4XwFpzp_dxMMtFRs5mZ-RB2lyZ3v_jlUGnuruY7EI',
    url: './astronomy/Planet Mercury.pdf',
    pages: 191,
    format: 'Libro',
    rating: 0
  },
  {
    id: 'Planetary Geodesy and Remote Sensing',
    title: 'Planetary Geodesy and Remote Sensing',
    img: "https://m.media-amazon.com/images/I/713eSwWurgL._SL1356_.jpg",
    opinion: 'Aunque la exploración lunar comenzó en la década de 1960, la Luna y otros planetas tienen muchas preguntas sin respuesta desde hace mucho tiempo sobre los entornos planetarios, el origen, la formación y la evolución, la magnetización de las rocas de la corteza terrestre, la estructura interna y la posible vida. Sin embargo, con el reciente desarrollo de la geodesia planetaria y la teledetección con mayor resolución espacial y espectral, han surgido nuevas oportunidades para explorar y comprender la luna y los planetas con mayor detalle. Escrito por científicos internacionales bien establecidos en los campos de la ciencia planetaria y la teledetección, Planetary Geodesy and Remote Sensing presenta los últimos métodos y técnicas de geodesia planetaria y teledetección.   El libro analiza los últimos resultados en ciencia planetaria, incluida la teoría, los métodos, las mediciones, la topografía, la gravedad y el campo magnético, la atmósfera y la ionosfera, la geomorfología, los volcanes, los cráteres, la estructura interna y el agua. El libro también destaca estudios comparativos con la Tierra en la atmósfera, geomorfología e interiores de los planetas. Analiza misiones futuras y objetivos futuros de exploración y ciencia planetarias utilizando los últimos avances en teledetección.    Con capítulos aportados por una lista estelar de pioneros y expertos, el libro proporciona nuevos conocimientos sobre la aplicación de nuevas tecnologías y las observaciones en geodesia planetaria. Es adecuado para quienes trabajan en el campo, así como para diseñadores de sondas planetarias, ingenieros y geólogos y geofísicos planetarios.',
    author: 'Shuanggen Jin',
    language: 'English',
    urlDrive: "",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4mGIWwJzjAvTcpnMkF9jYpA0UaH_vNdxxMkGvhGuU5USZt7_avjd13C8jecwjZO_v5cJZcRAX_cFz3bjxyY6KKX8CEZxGB2KQeuC4u2FvxAiphlmNYVeE0BOeZoegamg3Sox8fG8Sau2io5gIW8qqA7E_StJuJrFRlT4RohHjO50bWYVsyVqFyoNcoRrMNfCPqmLELPQbxTjBTS32aiYfgxfsEyT-oj3ntlOVprHaZvPk',
    url: './astronomy/Planetary Geodesy and Remote Sensing.pdf',
    pages: 391,
    format: 'Libro',
    rating: 0
  },
  {
    id: 'Spectroscopy. The Key to the Stars',
    title: 'Spectroscopy. The Key to the Stars',
    img: "https://th.bing.com/th/id/R.8540057f293c7346003019be3e36187a?rik=m6DwccjA8uX3Vg&riu=http%3a%2f%2fprodimage.images-bn.com%2fpimages%2f9780387367866_p0_v2_s1200x630.jpg&ehk=m%2fMibGtY8iAwAL8JK%2f0RwnM%2fgXBgH%2bifmxlZN7FAbWM%3d&risl=&pid=ImgRaw&r=0",
    opinion: 'Este es el primer libro no técnico sobre espectroscopia escrito específicamente para astrónomos aficionados prácticos. Incluye toda la ciencia necesaria para una comprensión cualitativa de los espectros estelares, pero evita un tratamiento matemático que alejaría a muchos de sus lectores previstos. Cualquier astrónomo aficionado que realice espectroscopía observacional y que desee una descripción no técnica de los procesos físicos que determinan la intensidad y la morfología del perfil de las líneas en los espectros estelares encontrará que este es el único libro escrito especialmente para ellos. Es un complemento ideal para los libros existentes sobre espectroscopia astronómica observacional de aficionados.',
    author: 'Keith Robinson',
    language: 'English',
    urlDrive: "",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4mR2T4076AzPOUWv0anpE9h3eXabxJ7pK8zJFDUqM7AZpDJeVsdKFHiGHDkt652tSY9TcCD7yAcgEMlPkDIpIc9fsszVylwTT8AE1hXxIHD6U1Ly_fTd7FuE5JdU7s6AnHq3PyuUe_QpnkRKh30cehWPBG7aVltp0fXdVMQTeIB948NWsIVdKOu79CSLFhNBpVdYnX6NZxuYfnl5Ex5eLI5QQEYjBiL-hV69VWVojBVLA',
    url: './astronomy/Spectroscopy. The Key to the Stars.pdf',
    pages: 164,
    format: 'Libro',
    rating: 0
  },
  {
    id: 'Star Clusters A Pocket Field Guide',
    title: 'Star Clusters A Pocket Field Guide',
    img: "https://m.media-amazon.com/images/I/71q8RvCD5EL._SL1360_.jpg",
    opinion: 'Star Clusters proporciona una guía concisa adecuada para observar cúmulos de estrellas en el campo: cómo verlos, cómo encontrarlos y cómo fotografiarlos. Los lectores encontrarán una definición de cúmulos estelares, descripciones fáciles de leer, además de notas y datos para la observación.',
    author: 'Charles A. Cardona',
    language: 'English',
    urlDrive: "",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4mHC8cUvqJa_vK7crgE7-XiAlrZvgJ5Gv5_rWtCJ4fnC-ekkBsZijqht2ee-fm0NfjcOdIyx7kxEZApssOQJBdQpBgw7VkQINyfh8x-cnRpp8fbSPRS59O_0tRe3KpwF_OQgVeY4QiAHQr3u__aptaL7Mi-QrI5oOtWMwn_g3J6AzdRRWl-U-Otak6MkhlJOVJr4bMskVRYyaC7igGUVTdcUxRwXH6g45VW7w-5vO3NEA',
    url: './astronomy/Star Clusters A Pocket Field Guide.pdf',
    pages: 189,
    format: 'Libro',
    rating: 0
  },
  {
    id: 'The 100 Best Targets for Astrophotography',
    title: 'The 100 Best Targets for Astrophotography',
    img: "https://m.media-amazon.com/images/I/719YvuMLIoL._SL1360_.jpg",
    opinion: 'This is the first guidebook to specifically target the best objects for backyard astrophotography. It reveals, for each month of the year, the choicest celestial treasures within the reach of a commercial CCD camera and how to get the most spectacular results.',
    author: 'Ruben Kier',
    language: 'English',
    urlDrive: "",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4mNCfHA6wt--kxUVWrgwyxWoa04uo8ltqkla49LQzAFzhCjBjHjjO60PKZS0u5LBZxEpGelZZVlPpxSt0LyvwL3cp2HNsGqFQ3voesqFkaXhkGNQ7kjdWK5XRcoDVkK3HxGQK_BSSQr-gewH564OKimJeuVR3YoGa9SjYb8lxKmoq50LkAD8nV-oSMiYESdue5YRq27ETJ-sEljTCRvGvSoU0Mt2s2Rk4ACH0DfKcTRVQ',
    url: './astronomy/The 100 Best Targets for Astrophotography.pdf',
    pages: 365,
    format: 'Libro',
    rating: 0
  },
  {
    id: 'The Astronomy Book',
    title: 'The Astronomy Book',
    img: "https://m.media-amazon.com/images/I/917LayJeZoL._SL1500_.jpg",
    opinion: 'Como parte de la fascinante serie Grandes Ideas, este libro aborda temas y temas complicados en un formato simple y fácil de seguir. Aprenda sobre Astronomía en esta guía general sobre el tema, ¡genial tanto para principiantes que buscan aprender como para expertos que desean actualizar sus conocimientos! El Libro de Astronomía ofrece una visión fresca y vibrante del tema a través de gráficos y diagramas llamativos en los que sumergirse.',
    author: 'Victoria Heyworth-Dunne',
    language: 'English',
    urlDrive: "",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4mulicR86x7SFdurxkbwgiQSdqOYB69rekUPTmBADyI2SrLg4e73abdM92P5c6bHjHl8t0HVxzZH-6qFJSMX8R576Ui1iet5Uz9ejX0FH6O7gl94_sw-B3jklGwYi1y0rU3z-rtM8ottqwRvHDFtJWYiebR38gLU8v9KGPLsjBd7uUAUWQKkQsPh0HwuQYxox_BH8PySkfqthbvZUTCxcfSgQ256_2bFKt1IZP__PL9cY',
    url: './astronomy/The Astronomy Book.pdf',
    pages: 354,
    format: 'Libro',
    rating: 0
  },
  {
    id: 'The Cambridge Guide to the Solar System',
    title: 'The Cambridge Guide to the Solar System',
    img: "https://m.media-amazon.com/images/I/51SyrqR8TlL.jpg",
    opinion: 'Ricamente ilustrado con imágenes a todo color, este libro es una descripción completa y actualizada de los planetas, sus lunas y los recientes descubrimientos de exoplanetas. Esta segunda edición de una referencia ahora clásica se actualiza con nuevos y fascinantes descubrimientos de 12 misiones recientes al Sistema Solar. Los ejemplos incluyen agua en la Luna, vulcanismo en la mitad nunca vista de Mercurio, vastos glaciares enterrados en Marte, géiseres en Encelado, la luna de Saturno, lagos de hidrocarburos en Titán, encuentro con el asteroide Itokawa y retorno de muestras del cometa Wild 2. El libro se ha mejorado aún más. por cientos de nuevas e impactantes imágenes de planetas y lunas. Escrito en un nivel introductorio apropiado para estudiantes de pregrado y secundaria, proporciona nuevos conocimientos que atraen a cualquier persona interesada en la ciencia planetaria. Un sitio web alojado por el autor contiene todas las imágenes del libro con una descripción general de su importancia. Puede encontrar un enlace a esto en www.cambridge.org/solarsystem.',
    author: 'Kenneth R. Lang',
    language: 'English',
    urlDrive: "",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4mIZigSd4ujPvv66x_lRXbUftUABByD472Sx9zETgTS0Lq5E-oam5C6XP2nLdWrcR409LU_bhsHdX1s7RGQjlMh9Jed8yA4ur-mSn6w4QnLMA9y1dfhGqXsyXt8KuaX2n71BiU_J7nd0z2dRSBJKwZTGjVCTCufBkUa9sesNcdtBofp1VUtz20BrlWibLi_PuqBKR3uEUL7w2vdiwWHwxFZcMat4FvHZkiDMSdrw5KZTM',
    url: './astronomy/The Cambridge Guide to the Solar System.pdf',
    pages: 503,
    format: 'Libro',
    rating: 0
  },  
  {
    id: 'The Complete CD Atlas of the Universe',
    title: 'The Complete CD Atlas of the Universe',
    img: "https://m.media-amazon.com/images/I/51FnVGI-V1L.jpg",
    opinion: 'Este es un libro y un CD-ROM para personas con telescopio y que estén interesadas     en un estudio organizado del maravilloso cielo nocturno, incluidas sus estrellas dobles, cúmulos, nebulosas y galaxias. Si bien hay otros libros que cubren estos temas en el ámbito amateur    literatura, éste es más adecuado para el astrónomo aficionado que desea observar el cielo con un sistema sistemático y realizar un seguimiento de sus observaciones.',
    author: 'Richard Harshaw',
    language: 'English',
    urlDrive: "",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4my-BU9RCm-kVb_gas7aUqvsDPAfpwVe67XV8l4_HAXwbAoT2dCnQ-Ogbo47GtWyvccYiJUrFGLgABQi9gJFdZEjgO_wqeMi1EpHMF-gsUZZmzefG33qJSifA8Ao78GA4aD7rjhofCz_eVFGQSqComkXs1fFgjhVl5wbb7hUmfBPilaDg4jgtaYfz4G3VBBQq6r7pwvuKn6YkBUAXyqKv7sQfBBtvzVaKuk9O-kTzHyEo',
    url: './astronomy/The Complete CD Atlas of the Universe.pdf',
    pages: 127,
    format: 'Libro',
    rating: 0
  },
  {
    id: 'The Planets',
    title: 'The Planets',
    img: "https://m.media-amazon.com/images/I/81dKNV1qR7L._SL1500_.jpg",
    opinion: 'The Planets es un viaje impresionante e informativo a través del Sistema Solar, con globos y modelos 3D completamente nuevos construidos utilizando los últimos datos recopilados por la NASA y la Agencia Espacial Europea que se pueden ver desde cualquier ángulo y capa por capa. Incluso puedes acercarte para verlo más de cerca con modelos de terreno en 3D que te llevan en un viaje a las superficies de los planetas rocosos.   Además de cubrir el Sol, los planetas, cientos de lunas y miles de asteroides y cometas, The Planets incluye todas las principales misiones del Sistema Solar, hasta los últimos vehículos exploradores de Marte. Las líneas de tiempo exploran nuestra relación con cada planeta y las infografías presentan datos fascinantes del Sistema Solar y de los planetas.   The Planets es ideal para cualquier persona interesada en la exploración espacial y todos los astronautas o astrónomos de sillón.',
    author: 'Smitsonian',
    language: 'English',
    urlDrive: "",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4mUe3XbzOh-pv7pg35cm02IgYX5_wJVH8wibqk70NdrwPYXFOsuBjI78CZg_yYZD2gDWe5fX8BkHPMq1gleRfJBv6HF9L5iyBHuFeySepJAw3G5mOrVCy7nVlSqme8zZGFKyd5J9sMudBpx12_mUyVHziMq8tmGj9BQXY6l1AXmrIG9sNMnr44-jDJuOAcafm-hNiSN7OsF2mz80NzFp0KlhmUOts2iZAwjtldvXZJw_I',
    url: './astronomy/The Planets.pdf',
    pages: 257,
    format: 'Libro',
    rating: 0
  },
  {
    id: 'The Science of Solar System Ices',
    title: 'The Science of Solar System Ices',
    img: "https://m.media-amazon.com/images/I/61fLESELgSL._SL1246_.jpg",
    opinion: 'El papel de la investigación y las simulaciones de laboratorio para mejorar nuestra comprensión de los hielos del sistema solar (incluidos satélites, KBO, cometas y planetas gigantes) es cada vez más importante. La comprensión del procesamiento de la radiación en la superficie del hielo, las profundidades de penetración de las partículas y la radiación, la química de la superficie y el subsuelo, la morfología, las fases, la densidad, la conductividad, etc., son sólo algunos ejemplos del inventario de cuestiones que están abordando las investigaciones en laboratorios terrestres.   Como respuesta a la creciente necesidad de diálogo y comunicación interdisciplinarios en la comunidad científica de los Hielos Planetarios, este libro tiene como objetivo lograr un diálogo directo y fomentar colaboraciones enfocadas entre las comunidades de observación, modelización y investigación de laboratorio.',
    author: 'Murthy S. Gudipati, Julie Castillo-Rogez',
    language: 'English',
    urlDrive: "",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4mMH8ZWBg89oFYu62VQgbXOtHV4AhrXR03c9UOJ3DQGOutmnAvGUDH_g3MjFr9ePcygJY9zfOs8dv5tPXFcMlrQErk9X0XBamfHf-z-dS7VrE4ldEHzC0DM8htUytRWHW1v1s94YWhXE7QKWV_f4BosU_8WCokDx7LOBQVTPnu7sF3XG2GCVP_tZdmCU2prLq0mY1mcy7QWArIGyLLC1CSPEi8Jjo3b7tg-KIiCyCh5r4',
    url: './astronomy/The Science of Solar System Ices.pdf',
    pages: 657,
    format: 'Libro',
    rating: 0
  },
  {
    id: 'The life of star clusters fron bith to dissolution',
    title: 'The life of star clusters fron bith to dissolution',
    img: "images/The life of star clusters fron bith to dissolution.png",
    opinion: 'Estudiamos la evolución de los cúmulos estelares, desde su nacimiento en acumulaciones de gas molecular hasta su completa disolución en el campo de mareas galáctico. Hemos combinado el modelo de “formación de cúmulos impulsados por densidad local” de Parmentier y Pfalzner (2013) con simulaciones directas de N-cuerpos de cúmulos estelares tras la expulsión instantánea de su gas residual de formación de estrellas. Los cúmulos de nuestro modelo se forman con un perfil de eficiencia de formación de estrellas (SFE) con pico central, es decir, el gas residual tiene un perfil de densidad más superficial que el de las estrellas. Construimos una gran red de simulaciones que cubren el espacio de parámetros de SFE globales, masas de cúmulos, tamaños y distancias galactocéntricas. Estudiamos la capacidad de supervivencia de nuestros cúmulos modelo en el vecindario solar después de la expulsión instantánea de gas y encontramos que un SFE global mínimo del 15 por ciento es suficiente para producir un cúmulo unido. Luego, al estudiar su evolución a largo plazo, encontramos que nuestras simulaciones son capaces de reproducir el tiempo de disolución de los cúmulos observado en la vecindad solar, siempre que la población de cúmulos esté dominada por aquellos formados con una SFE global baja (alrededor del 15%). Finalmente, encontramos que la capacidad de supervivencia del cúmulo después de la expulsión instantánea de gas, medida por la fracción de masa unida al cúmulo al final de la relajación violenta, es independiente del impacto del campo de marea galáctico.',
    author: 'Bekdaulet Temirbolatovich Shukirgaliye',
    language: 'English',
    urlDrive: "",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4mSJ_6wEtg13gr4OFlWM4QZI4IG_F-cIa_olArfZjPTLk7NE37y3vsb1FVcjS3fYlWY1nVJwo28wyAvpujMgMcesHwfJ7K0I1zAhwPSGwMKsiBaC67v-spt77KLoDqaAZH6DuoGjWF9vcriv40IU1wQkjfu0esjYoSvMooDahtkkIa4o_Wu6FT5jZDedLtQfoxVv9z4Hb8tnpR42Dsk_64cWwCmrtYnJUR-dUdFYulVWY',
    url: './astronomy/The life of star clusters fron bith to dissolution.pdf',
    pages: 127,
    format: 'Tesis',
    rating: 0
  },
  {
    id: 'Astrofotografía. Unidad didáctica',
    title: 'Astrofotografía. Unidad didáctica',
    img: "images/Astrofotografía. Unidad didáctica.png",
    opinion: 'Los objetivos que se pretenden alcanzar en esta Unidad Didáctica son los siguientes: - Conocer el proceso global de producción de imágenes así como saber evaluar imágenes tanto desde el punto de vista de su obtención como del procesado.   - Comprender y aplicar conocimientos de fundamentos imagen y cámaras digitales.   - Conocer las posibilidades instrumentales y los procedimientos para la realización de astrofotografía como técnica de aplicaciones pedagógicas, documentales e investigadoras.   - Aprender a planificar una sesión observacional utilizando los recursos     disponibles (manuales, software, Internet).   - Conocer y aplicar técnicas de procesamiento básico de imágenes',
    author: 'FECYT',
    language: 'Español',
    urlDrive: "1c7AGkcCqiYs19CL452APhDukeRzDsli7",
    urlOnedrive: 'https://onplzq.am.files.1drv.com/y4m9iDCQNmEFO50fwBbEnTdVGA_Jae_aSGLVr-oW3eAFCqcb8xNa2hMn8KlyPd5Zw_5ou3N9GTM3Gya15jnzot_6VMrlCjtAxflfLPw0_BHClnqeAsJsP6U6YVh57G0T6wP4myjDB9s3mf9xT4yfArhLRLo-iR4p9YcgB4ZyxUktxllv7BVmjPIkgzr1hLyxEI2D2D2AYqNYd3WGMU6MaKExuzEpQzaEkdGKbpazPTvuU4',
    url: './astronomy/Astrofotografía. Unidad didáctica.pdf',
    pages: 96,
    format: 'Libro',
    rating: 0
  },
  {
    id: 'Visual Lunar and Planetary Astronomy',
    title: 'Visual Lunar and Planetary Astronomy',
    img: "https://m.media-amazon.com/images/I/61UWtzYCJdL._SL1360_.jpg",
    opinion: 'Este libro detalla los métodos y prácticas de la astronomía visual amateur y explica cómo producir un registro científico preciso de las observaciones visuales, utilizando no más que un telescopio astronómico de tamaño moderado fabricado comercialmente.',
    author: 'Paul G. Abel',
    language: 'English',
    urlDrive: "",
    urlOnedrive: 'https://n9pozq.am.files.1drv.com/y4mNZTpFytMQzOmS4WsCpjRiExBjDQ-vHgzUdnKlT2hyfDvfMCVquuy959u2rK-3seZZciMmB_CbSLAcYoWBKRJn3bz6yNsJ_eL1Yx0ReDYKWM78h26S8KcDJxFGXI6RurD41_yiALTcyhcbNV3ArYkIVEkGrKui0DbaTXDgOogDlcyehAXoeO9K5e5TUKaqIubHE9BqTTJaebg53pDRNQJPQ82iDOH3EXynif6PAIBa4o',
    url: './astronomy/Visual Lunar and Planetary Astronomy.pdf',
    pages: 233,
    format: 'Libro',
    rating: 0
  },

];

const $$Astro$1 = createAstro();
const $$ReadButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ReadButton;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/pdfViewer/${id}`, "href")} target="_blank" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center">
  <svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"></path>
  </svg>
  Leer
</a>`;
}, "C:/Users/captw/workspaces/Astro/Biblioteca. View Transitions API - Drive/biblioteca/src/components/ReadButton.astro", void 0);

const $$Astro = createAstro();
const $$book = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$book;
  const { book } = Astro2.params;
  const info = books.find((b) => b.id === book);
  if (!info) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Libro ${info.title}` }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<main class="m-auto max-w-4xl">
    <header class="relative">
      
      <h1 class="scale-50 font-black uppercase text-6xl md:text-8xl text-center py-8 px-4" style="view-transition-name: book-title">
        Libros de
        <span class="block text-[36px] md:text-[58px]">astronomía</span>
      </h1>
      
      <a href="/" class="text-2xl text-center py-8 hover:underline opacity-70 px-36">← Volver atrás</a>

    </header>
    <div class="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-x-12 mt-4 md:mt-20 px-8">

      <div class="flex flex-col mb-10">
        
        <picture class="mb-8 w-full relative">
          <img class="aspect-[389/500] h-full object-cover w-full max-w-full rounded"${addAttribute(info.img, "src")}${addAttribute(`Portada del libro ${info.title}`, "alt")}${addAttribute(`view-transition-name: book-${info.id}`, "style")}>
        </picture>

        ${renderComponent($$result2, "ReadButton", $$ReadButton, { "id": info.id })}
      
      </div>

      <aside class="mt-10 md:mt-0">
        <h1 class="text-5xl font-black mb-4">${info.title}</h1>
        <p class="text-lg mb-4">${info.opinion}</p>
        <p><strong>Autor:</strong> <span class="font-semibold text-gray-800">${info.author}</span></p>
        <p><strong>Páginas:</strong> <span class="font-semibold text-gray-800">${info.pages}</span></p>
      </aside>
    </div>
    
  </main>
` })}`;
}, "C:/Users/captw/workspaces/Astro/Biblioteca. View Transitions API - Drive/biblioteca/src/pages/[book].astro", void 0);

const $$file = "C:/Users/captw/workspaces/Astro/Biblioteca. View Transitions API - Drive/biblioteca/src/pages/[book].astro";
const $$url = "/[book]";

const _book_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$book,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _book_ as _, books as b };
