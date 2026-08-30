# Club Ciudad de Bolívar — propuesta web

Demo conceptual de un sitio institucional y deportivo para el Club Ciudad de Bolívar.

## Incluye

- Portada editorial de nivel profesional.
- Próximo partido, resultados y fixture.
- Noticias, plantel 2026 y categorías por posición.
- Historia, infraestructura, disciplinas, inferiores y reserva.
- Área de socios, sponsors, tienda demostrativa y contacto.
- Escudos transparentes de Ciudad, Racing de Córdoba, Agropecuario, Defensores de Belgrano y Deportivo Madryn.
- Fotografías reales del plantel, vóley, complejo y tienda Celemanía.
- Fotografías reales de Celemanía y de la camiseta especial presentada ante River por Copa Argentina 2026.
- Diseño responsive, accesible y sin dependencias de compilación.
- Imágenes WebP responsive de 640/720 y 1024/1200 px, con carga diferida y dimensiones reservadas para evitar lentitud y saltos visuales.

## Ejecutar localmente

Abrir `index.html` directamente o iniciar cualquier servidor estático, por ejemplo:

```powershell
python -m http.server 8080
```

Luego visitar `http://localhost:8080`.

## Alcance

Es una propuesta visual no oficial. Las altas de socios, venta de entradas, pagos, stock, noticias administrables y datos deportivos en vivo se muestran como recorridos de producto y requerirían integración en una segunda etapa.

Las fotografías y el escudo se emplean únicamente para esta demostración privada/comercial del club y deben validarse sus permisos de uso antes de una publicación oficial.

## Verificación de contenidos

| Contenido | Estado | Fuente |
| --- | --- | --- |
| Fundación (23/10/2002), sede, estadio y teléfono | Verificado en fuente oficial | [AFA — clubes afiliados](https://www.afa.com.ar/11434/posts/clubes-afiliados-2025) |
| Origen en el vóley, inicio del fútbol y apodo «Las Águilas» | Verificado en fuente oficial | [Copa Argentina — perfil del club](https://www.copaargentina.org/es/equipos/413_Club-Ciudad-de-Bolivar.html) |
| Hockey «Las Indias» y Complejo José Domeño | Verificado en fuente municipal | [Municipalidad de Bolívar — Club Ciudad de Bolívar](https://www.bolivar.gob.ar/disfruta-bolivar/786-club-ciudad-de-bolivar.html) |
| Fútbol, vóley, hockey y taekwondo | Verificado en cobertura periodística de 2026 | [TyC Sports — historia y disciplinas](https://www.tycsports.com/copa-argentina/ciudad-de-bolivar-voley-futbol-ascenso-river-copa-argentina-id713498.html) |
| Ascenso del 19/10/2025 | Verificado | [AFA — Ciudad Bolívar venció por penales y ascendió](https://www.afa.com.ar/3608/posts/ciudad-de-bolivar-vencio-por-penales-a-atletico-de-rafaela-y-asciende-a-la-primera-nacional) |
| Renovación del Eva Perón | Verificado en prensa local | [Presente Noticias — renovación total](https://www.presentenoticias.com/amp/noticias/2026/02/23/18315-chiqui-tapia-elogio-al-club-ciudad-de-bolivar-por-la-renovacion-total-del-estadio-eva-peron) y [nuevo sistema lumínico](https://www.presentenoticias.com/amp/noticias/2026/03/26/18518-el-estadio-eva-peron-estrena-sistema-luminico-en-el-partido-de-ciudad-de-bolivar-y-agropecuario) |
| Plantel y dorsales mostrados | Verificado en ESPN 2026; es una selección, no la nómina completa | [Plantel](https://www.espn.com.ar/futbol/equipo/plantel/_/id/21799/ciudad_de_bolivar) y [alineación con dorsales](https://www.espn.com.ar/football/lineups?gameId=401843747) |
| Camiseta celeste Masbar | La fotografía es auténtica, pero corresponde a la edición especial presentada ante River; su venta no está confirmada | [TN — presentación ante River](https://tn.com.ar/deportes/futbol/2026/02/17/con-un-equipo-repleto-de-cambios-river-debuta-en-la-copa-argentina-ante-ciudad-bolivar/) |
| Celemanía, dirección y productos fotografiados | Verificado en cobertura de la apertura de la tienda oficial; stock y precios no verificados | [Presente Noticias — apertura de Celemanía](https://www.presentenoticias.com/noticias/2025/12/31/17951-abrio-celemania-la-tienda-oficial-del-club-ciudad-de-bolivar-los-detalles) |
| Masbar, La Perla, PM Autos y Alra Sur | Los nombres se identificaron visualmente en la camiseta presentada en 2026 | La relación comercial vigente, la categoría y la jerarquía deben ser confirmadas por el club |

Los titulares, bajadas y frases de campaña del diseño son redacción editorial para la demo; no se presentan como comunicados textuales del club.

## Actualización del fixture

Los resultados Ciudad de Bolívar 1–1 Racing de Córdoba del 23/08/2026 y Ciudad de Bolívar 1–0 Defensores de Belgrano del 29/08/2026 fueron verificados en Presente Noticias. El próximo compromiso es Deportivo Madryn–Ciudad de Bolívar por la fecha 28, el domingo 06/09 a las 16:00, según la [cobertura local del último partido](https://www.presentenoticias.com/noticias/2026/08/29/21482-agonico-triunfo-de-ciudad-de-bolivar-le-gano-a-defensores-de-belgrano-sobre-la-hora-y-escalo-al-7-puesto). El encuentro posterior será Ciudad de Bolívar–Central Norte de Salta por la fecha 29, de acuerdo con el [fixture oficial de AFA](https://www.afa.com.ar/en/posts/primera-nacional-fixture-para-la-temporada-2026); se mantiene sin fecha ni horario hasta que exista programación oficial.

La demo usa actualización manual verificada. GitHub Pages no aporta por sí mismo datos deportivos y no se conectó una API privada o no documentada que pudiera cambiar, bloquearse o publicar horarios incorrectos. En una versión oficial, el fixture debe alimentarse desde un panel administrado por el club o desde un proveedor deportivo contratado.

## Fuentes visuales de referencia

- Escudos de equipos: CDN de ESPN; Deportivo Madryn se obtuvo de Wikimedia Commons, con fuente atribuida al sitio oficial del club.
- Indumentaria 2026: presentación fotográfica publicada por TN; la camiseta mostrada es la edición especial de Copa Argentina ante River.
- Tienda y merchandising: apertura de Celemanía publicada por Presente Noticias.
- Vóley: cobertura deportiva de FM10 Bolívar.
- Complejo José Domeño: Municipalidad de Bolívar.

Antes de convertir la demo en sitio oficial, el club debe entregar o aprobar su archivo fotográfico, los logotipos vectoriales de sponsors, la nómina comercial vigente y los permisos de publicación. No se asignaron retratos individuales a jugadores sin una fuente validada.
