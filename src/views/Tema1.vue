<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos financieros y marco normativo de la información contable	
      .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")        
        .col-lg-7.bg-color-3.d-flex.align-items-center.p-4
          p.mb-0 La información financiera permite comprender la gestión empresarial, administrar recursos y evaluar obligaciones, operación y resultados. Sus fundamentos conceptuales y normativos orientan datos claros y confiables para interpretar estados financieros, analizar desempeño y apoyar decisiones verificables, oportunas y sostenibles.
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t1/img1.png', alt='', style="object-fit: cover;")
      Separador
      //- Inicio Tema1.1
      .row
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Empresa, sectores económicos y contexto financiero actual	
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img2.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Una empresa es una organización que combina recursos humanos, técnicos, financieros y materiales para producir bienes o prestar servicios. Su operación requiere decisiones permanentes sobre compras, ventas, costos, gastos, financiación, inversión, cartera, inventarios y rentabilidad.
      p(data-aos="fade-left") Desde el punto de vista económico, las empresas pueden ubicarse en diferentes sectores; estos son:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido.mt-1
            .py-3.py-md-4(titulo="Primario")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  h4 Primario
                  p Se relaciona con la extracción o producción directa de recursos naturales. Su información financiera relevante incluye costos de producción, inventarios, activos biológicos, maquinaria e ingresos por la venta de productos básicos.
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta01_1.png')
            .py-3.py-md-4(titulo="Secundario")
              .row.align-items-center
                .col-md-6
                  h4 Secundario
                  p Corresponde a la transformación de materias primas en productos terminados o semielaborados. Su información financiera se centra en costos de producción, inventarios de materia prima, productos en proceso, productos terminados y depreciación.
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta01_2.png')
            .py-3.py-md-4(titulo="Terciario")
              .row.align-items-center
                .col-md-6
                  h4 Terciario
                  p Comprende la prestación de servicios y las actividades comerciales. Su información financiera relevante incluye ingresos por servicios o ventas, cartera, gastos administrativos, gastos de ventas y flujo de efectivo.
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta01_3.png')
            .py-3.py-md-4(titulo="Cuaternario")
              .row.align-items-center
                .col-md-6
                  h4 Cuaternario
                  p Agrupa los servicios basados en conocimiento y tecnología. Su información financiera se relaciona con inversión en software, propiedad intelectual, talento humano especializado e ingresos por servicios digitales.
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta01_4.png')
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") La clasificación del sector ayuda a interpretar los estados financieros, porque no se analiza de la misma manera una empresa comercial, una empresa industrial, una entidad agropecuaria o una empresa de servicios.
      Separador
      //- Inicio Tema1.2
      .row
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Función financiera en la organización
      p.mb-5(data-aos="fade-left") La función financiera administra los recursos económicos de la empresa, analiza información, identifica riesgos y apoya la planeación para asegurar su operación, crecimiento y sostenibilidad. La siguiente tabla permite comprender su relación con las demás áreas de la organización. (García Serna, 2009).
      //- Inicio Tabla
      .row.justify-content-center.mb-5
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 1.
            span  Relación de la función financiera con las áreas de la empresa
          .tabla-a
            table
              thead
                tr
                  th(style="width: 20%") Área de la empresa
                  th(style="width: 30%") Información que genera
                  th(style="width: 50%") Uso financiero
              tbody
                tr
                  td Mercadeo y ventas
                  td Ventas, descuentos, devoluciones, comportamiento de clientes
                  td Proyectar ingresos, analizar cartera y evaluar rentabilidad comercial
                tr
                  td Producción u operación
                  td Costos, inventarios, consumo de materiales, capacidad instalada
                  td Controlar costos, calcular márgenes y evaluar eficiencia operativa
                tr
                  td Talento humano
                  td Nómina, prestaciones, comisiones, seguridad social
                  td Presupuestar gastos laborales y medir impacto en resultados
                tr
                  td Compras
                  td Proveedores, condiciones de pago, abastecimiento
                  td Analizar cuentas por pagar, flujo de caja y rotación de inventarios
                tr
                  td Dirección
                  td Objetivos, políticas, presupuesto, metas
                  td Tomar decisiones de inversión, financiación y crecimiento
                tr
                  td Contabilidad
                  td Registros, soportes, estados financieros
                  td Elaborar informes financieros y realizar análisis económico
      //- FinTabla
      p(data-aos="fade-left") La calidad del análisis financiero depende de la calidad de la información suministrada por las diferentes áreas de la empresa. Asimismo, la función financiera integra estos datos para apoyar la toma de decisiones; así:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-6 col-lg-6 col-md-6 col-12")                        
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Mercadeo y ventas
                            p.text-start.text-center Aporta información sobre ingresos, precios y cartera.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Producción y operación
                            p.text-start.text-center Suministra datos sobre costos, inventarios y eficiencia.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Talento humano
                            p.text-start.text-center Proporciona información relacionada con nómina y prestaciones.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Compras y proveedores
                            p.text-start.text-center Entrega información sobre pagos y abastecimiento.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Contabilidad
                            p.text-start.text-center Registra y organiza la información necesaria para elaborar los estados financieros.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta02_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Dirección
                            p.text-start.text-center Utiliza la información financiera para la planeación y la toma de decisiones.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t1/img3.png', style="width: 500px", data-aos="zoom-in").m-auto
              //- Fin Carrusel
      Separador
      //- Inicio Tema1.3
      .row
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Objetivo básico financiero
      p(data-aos="fade-left") El objetivo básico financiero orienta las decisiones que permiten a la empresa mantenerse en funcionamiento, crecer de manera ordenada y generar valor en el tiempo. Por lo anterior, le invitamos a reproducir el siguiente pódcast para comprender, de manera clara y práctica, la importancia de equilibrar liquidez, rentabilidad, endeudamiento, eficiencia, crecimiento y sostenibilidad, con el fin de fortalecer la empresa en el tiempo.
      //- Inicio Podcast
      .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-2(data-aos="fade-left")
        .row.g-0.align-items-stretch
          .col-12.col-lg-7.mb-3.mb-lg-0.d-flex
            .p-4.p-md-5.bg-custom-dark-teal.w-100.rounded-4.d-flex.align-items-center
              .row.g-3.align-items-center.w-100
                .col-md-5.text-center.mb-4.mb-md-0
                  img.img-fluid(src="@/assets/curso/temas/bg/podcast.svg" style="max-width: 200px;")
                .col-md-7.ps-md-4
                  h2.mb-3.fw-bold(style="color:#FFF") Pódcast
                  .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                    h5.mb-3.fw-bold ¿Vender más significa estar mejor? El objetivo básico financiero en la empresa
                    TarjetaAudio.color-primario(
                      texto="" 
                      :audio="podcast1"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")                      
          .col-12.col-lg-5.d-flex.ps-lg-4
            figure.mb-0.w-100
              img.h-100.w-100(src='@/assets/curso/temas/t1/img4.png' alt='' style="object-fit: cover;")
      //- Fin Podcast
      Separador
      //- Inicio Tema1.4
      .row
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4 Usuarios de la información financiera	
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img5.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La información financiera es útil cuando responde a las necesidades de quienes toman decisiones dentro y fuera de la empresa. Por ello, es importante identificar sus usuarios internos y externos, así como el propósito con el que consultan los estados financieros.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/imagen-titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Usuarios internos
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Son los que pertenecen a la empresa y usan la información financiera para planear, controlar y mejorar la operación; tales como:
      //- Carrusel
      .bg-full-width
        .px-4.px-md-5.pb-md-3
          .carousel-bg
            .row.justify-content-center.mb-5.align-items-center
              .col-lg-8.mb-3.mb-lg-0.order-lg-1
                SlyderF(columnas="col-xl-6 col-lg-6 col-md-6 col-12")                        
                  .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                    .row.justify-content-center.mb-3.mt-3
                      .col-auto
                        img(src='@/assets/curso/temas/t1/tarjeta03_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                    .p-2
                      h4.card-title.text-center.mb-3.fw-bold Gerencia
                      p.text-start.text-center Ajusta la operación, controla gastos y define prioridades financieras. Evalúa resultados.
                  .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                    .row.justify-content-center.mb-3.mt-3
                      .col-auto
                        img(src='@/assets/curso/temas/t1/tarjeta03_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                    .p-2
                      h4.card-title.text-center.mb-3.fw-bold Propietarios o socio
                      p.text-start.text-center Deciden sobre reinversión, conocimiento de rentabilidad, distribución de utilidades o fortalecimiento del capital y evalúa el crecimiento.
                  .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                    .row.justify-content-center.mb-3.mt-3
                      .col-auto
                        img(src='@/assets/curso/temas/t1/tarjeta03_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                    .p-2
                      h4.card-title.text-center.mb-3.fw-bold Jefes de área
                      p.text-start.text-center Corrigen desviaciones y controlan presupuesto, analizan costos y gastos, evalúa el desempeño de su área y mejoran el desempeño operativo. 
                  .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                    .row.justify-content-center.mb-3.mt-3
                      .col-auto
                        img(src='@/assets/curso/temas/t1/tarjeta03_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                    .p-2
                      h4.card-title.text-center.mb-3.fw-bold Área contable y financiera
                      p.text-start.text-center Registra información y la procesa, prepara informes, estados financieros, elabore reportes e indicadores, analiza resultados y alerta sobre riesgos.
              .col-lg-4.order-lg-2.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/temas/t1/img6.png', style="width: 500px", data-aos="zoom-in").m-auto
        //- Fin Carrusel
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/imagen-titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Usuarios externos
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Son quienes no participan directamente en la operación diaria, pero requieren información para evaluar la solidez y confiabilidad de la empresa. Estos son:
      //- Inicio Accordion
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3 
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img7.png", style="width: 100%;").m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Bancos y entidades financieras")
                  p.mb-4 Evalúa capacidad financiera, aprueban, niegan o modifican condiciones de crédito y analiza riesgos.               
              .row(titulo="Proveedores")
                  p.mb-4 Otorgan cupos, plazos o descuentos comerciales, conoce historial de pagos y evalúa la liquidez.
              .row(titulo="Inversionistas")
                  p.mb-4 Analiza la rentabilidad, evalúa riesgos y perspectivas, deciden invertir, retirar recursos o solicitar más información. 
              .row(titulo="Estado y organismos de control")
                  p.mb-4 Verifican obligaciones contables, tributarias y legales. Realiza inspección y control.
              .row(titulo="Clientes estratégicos")
                  p.mb-4 Evalúan continuidad, estabilidad y cumplimiento empresarial. Decide sobre relaciones comerciales.
      //- Fin Accordion
      p(data-aos="fade-left") Una vez diferenciados los usuarios internos y externos, es importante reconocer que cada uno requiere información específica para tomar decisiones según sus intereses y responsabilidades. Por ello, a continuación, se relacionan los principales usuarios de la información financiera y los datos que necesitan consulta:
      .row.bg-fondo-2.mt-5(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3             
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4 col-md-6 col-12")                        
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta04_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Gerencia
                            p.text-start.text-center Ventas, costos, gastos, utilidad, liquidez y endeudamiento
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta04_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Propietarios o socios
                            p.text-start.text-center Rentabilidad, patrimonio, utilidades y crecimiento
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta04_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Jefes de área
                            p.text-start.text-center Presupuesto, costos, inventarios, cartera y gastos por área
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta04_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Área contable y financiera
                            p.text-start.text-center Registros, soportes, estados financieros e indicadores
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta04_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Bancos y entidades financieras
                            p.text-start.text-center Endeudamiento, liquidez, flujo de efectivo y capacidad de pago
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta04_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Proveedores
                            p.text-start.text-center Historial de pagos, obligaciones y liquidez
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta04_7.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Inversionistas
                            p.text-start.text-center Rentabilidad, patrimonio, crecimiento y riesgos
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta04_8.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Estado y organismos de control
                            p.text-start.text-center Cumplimiento contable, tributario y legal
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t1/tarjeta04_9.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Clientes estratégicos
                            p.text-start.text-center Continuidad, estabilidad y cumplimiento empresarial
            //- Fin Carrusel      
            Separador
      //- Inicio Tema1.5
      .row
        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.5 Marco normativo de la información contable y financiera	
      p(data-aos="fade-left") La información contable y financiera debe prepararse bajo criterios técnicos y normativos que orienten el reconocimiento, medición, presentación y revelación de los hechos económicos. A continuación, se presentan los principales referentes normativos, su propósito y aplicación práctica en la empresa.
      //- Pestanas horizontales
      .container.tarjeta.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido.mt-1
            .py-3.py-md-4(titulo="Ley 1314 de 2009")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  h4 Ley 1314 de 2009
                  p Regula los principios y normas de contabilidad, información financiera y aseguramiento aceptados en Colombia. Su aplicación orienta la preparación de información comprensible, transparente, comparable, pertinente y confiable.
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta05_1.png')
            .py-3.py-md-4(titulo="Decreto 2420 de 2015")
              .row.align-items-center
                .col-md-6
                  h4 Decreto 2420 de 2015
                  p Compila el marco técnico normativo contable, financiero y de aseguramiento en Colombia. Permite identificar el marco aplicable según el tipo de entidad y sus características.
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta05_2.png')
            .py-3.py-md-4(titulo="NIIF plenas")
              .row.align-items-center
                .col-md-6
                  h4 NIIF plenas
                  p Establecen criterios internacionales para entidades con mayor responsabilidad pública o condiciones específicas. Orientan el reconocimiento, medición, presentación y revelación de la información financiera.
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta05_3.png')
            .py-3.py-md-4(titulo="NIIF para Pymes")
              .row.align-items-center
                .col-md-6
                  h4 NIIF para Pymes
                  p Ofrecen un marco técnico simplificado para pequeñas y medianas entidades. Facilitan la preparación de estados financieros en empresas sin obligación pública de rendir cuentas.
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta05_4.png')
            .py-3.py-md-4(titulo="Contabilidad simplificada")
              .row.align-items-center
                .col-md-6
                  h4 Contabilidad simplificada
                  p Establece criterios más sencillos para microempresas, según la normatividad aplicable. Permite organizar la información contable de entidades de menor tamaño.
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta05_5.png')                          
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") En la práctica, el marco normativo exige identificar las características de la empresa para clasificar cuentas, presentar estados financieros, revelar información y diferenciar lo contable de lo tributario.
      Separador
      //- Inicio Tema1.6
      .row
        #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.6 Principios y cualidades de la información financiera	
      p(data-aos="fade-left") Los principios de la información financiera orientan el reconocimiento, medición, presentación y revelación de los hechos económicos, permitiendo que los estados financieros reflejen la realidad de la empresa. Además, esta información debe cumplir cualidades que fortalezcan su utilidad para la toma de decisiones.
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t1/tarjeta06_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Relevancia
                p La información tiene capacidad para influir en una decisión. Permite analizar ventas, cartera, inventarios, gastos o deudas que afectan la operación. Si no se cumple, se pueden tomar decisiones con datos que no aportan al problema financiero.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta06_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Representación fiel
                p La información refleja adecuadamente los hechos económicos de la empresa. Implica registrar activos, pasivos, ingresos, costos y gastos con soporte y valores correctos. Si no se cumple, los estados financieros pueden no mostrar la realidad empresarial.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta06_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Comparabilidad
                p Permite contrastar cifras entre periodos, empresas, presupuestos o metas. Facilita identificar si las ventas crecieron, si los gastos aumentaron o si la rentabilidad se deterioró. Si no se cumple, pueden pasar desapercibidas tendencias o variaciones importantes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta06_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Verificabilidad
                p Significa que la información puede comprobarse mediante soportes, documentos, conciliaciones o registros. Permite sustentar saldos y operaciones. Si no se cumple, se corre el riesgo de usar cifras que no pueden respaldarse.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta06_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Oportunidad
                p Implica que la información esté disponible cuando se necesita. Un informe entregado a tiempo permite decidir sobre pagos, compras, créditos o inversiones. Si no se cumple, la empresa puede actuar tarde frente a problemas financieros.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta06_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Comprensibilidad
                p Exige que la información se presente de forma clara, ordenada y suficiente. El uso de tablas, notas y explicaciones facilita su interpretación. Si no se cumple, pueden generarse confusiones o interpretaciones erradas.
      //- Fin Slideshow
      p(data-aos="fade-left") Estas cualidades hacen que la información financiera sea útil, confiable y pertinente para diagnosticar la situación de la empresa y apoyar decisiones acertadas.      
      Separador
      //- Inicio Tema1.7
      .row
        #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.7 Sistemas y fuentes de información contable y financiera
      .row.justify-content-center.mb-4
        .col-lg-12
          .d-flex.flex-column.flex-lg-row.align-items-center
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/lineas1.svg', style="width: 80px")
            .flex-grow-1.text-center.text-lg-start
              p.mb-0 Los estados financieros se elaboran con información proveniente de documentos, sistemas y reportes. Por ello, sus fuentes deben ser completas, actualizadas, verificables y correctamente clasificadas. Estas fuentes se clasifican en primarias y secundarias, según su origen y utilidad para el análisis financiero.
      //- Inicio Tarjetas
      .row.justify-content-center.g-0.mb-5(data-aos="fade-right")
        .col-lg-6.col-md-6
          .tarjeta.p-5.h-100.bg-color-5(style="border-radius: 25px 0 0 25px; background-color: #5c657a;")
            .row.mb-3
              .col-auto
                figure
                  img(src='@/assets/curso/temas/bg/tarjeta01_1.svg', alt='' style="width:100px").m-auto
            h4.text-white Fuentes primarias
            p.text-white Las fuentes primarias son los documentos que respaldan directamente las operaciones de la empresa. Entre ellas se encuentran las facturas de venta, facturas de compra, recibos, comprobantes contables, extractos bancarios, contratos, nómina, soportes de pago y documentos de inventario. Estas fuentes permiten comprobar que el hecho económico ocurrió y que fue registrado de forma adecuada.
        .col-lg-6.col-md-6
          .tarjeta.p-5.h-100.bg-color-6(style="border-radius: 0 25px 25px 0; background-color: #9af0f3;")
            .row.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/temas/bg/tarjeta01_2.svg', style="width:100px").m-auto
            h4.card-title.mb-2 Fuentes secundarias
            p Las fuentes secundarias son reportes elaborados a partir de los registros contables y administrativos. Entre ellas se encuentran balances de prueba, auxiliares contables, reportes de cartera, informes de inventario, reportes de proveedores, presupuestos, estados financieros y análisis comparativos. Estas fuentes permiten consolidar los datos y convertirlos en información útil para interpretar la situación financiera de la empresa.
          //- Fin Tarjetas
      p.mb-5(data-aos="fade-left") La siguiente tabla presenta las principales fuentes de información contable y financiera, los datos que aportan y su aplicación en los estados y el análisis financieros.
      //- Inicio Tabla
      .row.justify-content-center.mb-5
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 2.
            span  Fuentes de información para elaborar y analizar estados financieros
          .tabla-a
            table
              thead
                tr
                  th(style="width: 20%") Fuente de información
                  th(style="width: 30%") Datos que aporta
                  th(style="width: 50%") Uso en estados financieros y análisis
              tbody
                tr
                  td Facturas de venta
                  td Ingresos, impuestos, clientes, condiciones de pago
                  td Reconocer ingresos, analizar ventas y revisar cartera
                tr
                  td Facturas de compra
                  td Costos, gastos, proveedores e impuestos descontables
                  td Registrar costos, gastos y cuentas por pagar
                tr
                  td Extractos bancarios
                  td Entradas y salidas de efectivo
                  td Verificar saldos de bancos y analizar liquidez
                tr
                  td Comprobantes contables
                  td Registros de operaciones económicas
                  td Sustentar movimientos y clasificaciones contables
                tr
                  td Nómina
                  td Salarios, prestaciones, seguridad social y deducciones
                  td Reconocer gastos laborales y obligaciones asociadas
                tr
                  td Reportes de inventario
                  td Existencias, entradas, salidas, deterioros y costos
                  td Calcular inventarios, costo de ventas y rotación
                tr
                  td Reportes de cartera
                  td Saldos por cliente, vencimientos y recaudos
                  td Analizar cuentas por cobrar y gestión de cobro
                tr
                  td Reportes de proveedores
                  td Obligaciones, vencimientos y pagos realizados
                  td Revisar cuentas por pagar y compromisos de corto plazo
                tr
                  td Presupuestos
                  td Metas de ingresos, costos, gastos e inversión
                  td Comparar resultados reales frente a lo planeado
                tr
                  td Estados financieros
                  td Activos, pasivos, patrimonio, ingresos, costos y gastos
                  td Realizar diagnóstico financiero e interpretar resultados
      //- FinTabla      
      p(data-aos="fade-left") El flujo de la información financiera inicia con el hecho económico, continúa con el soporte documental, el registro contable, la validación y la consolidación en estados financieros, hasta llegar al análisis financiero. El siguiente caso permite reconocer la importancia de validar fuentes, registros e informes antes de emitir un diagnóstico.
      .row.mb-5.justify-content-center.align-items-center
          .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
            figure.mb-0.text-center
              img(src='@/assets/curso/temas/t1/img8.png' style="width: 500px").m-auto
          .col-12.col-lg-7.order-2.order-lg-1.bg-color-4.p-4(data-aos="fade-right")
            p.fw-bold Ejemplo aplicado
            p <b>Caso:</b> Ferretería El Progreso S.A.S.
            p Ferretería El Progreso S.A.S. es una empresa comercial que vende materiales de construcción, herramientas y productos para mantenimiento del hogar. Durante el último semestre aumentaron las ventas, pero la gerencia observa dificultades para pagar a proveedores, retrasos en el cobro a clientes y diferencias entre el inventario físico y el inventario registrado en el sistema.
      p(data-aos="fade-left") Antes de elaborar los estados financieros y realizar el análisis financiero, la empresa debe revisar quiénes usarán la información, qué normas orientan su preparación, qué cualidades debe cumplir y qué fuentes deben validarse.
      //- Inicio Accordion
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img9.png", style="width: 100%;").m-auto
          .col-lg-8
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Usuarios de la información")
                  p.mb-4 Para este aspecto, la aplicación de los fundamentos financieros se presenta a partir de:
                  ul.lista-ul.color-vinotinto-custom.mb-0
                    li.d-flex
                      .fas.fa-circle-right.me-3
                      span Situación encontrada: la gerencia necesita conocer la liquidez y rentabilidad de la empresa; los proveedores solicitan información para renovar cupos.
                    li.d-flex
                      .fas.fa-circle-right.me-3
                      span Acción recomendada: preparar informes claros para usuarios internos y externos.
                    li.d-flex
                      .fas.fa-circle-right.me-3
                      span Decisión que apoya: definir pagos, compras y condiciones comerciales.
              .row(titulo="Marco normativo")
                  p.mb-4 La aplicación de este fundamento financiero se presenta a partir de:
                  ul.lista-ul.color-vinotinto-custom.mb-0
                    li.d-flex
                      .fas.fa-circle-right.me-3
                      span Situación encontrada: la empresa debe preparar información según el marco técnico que le corresponda.
                    li.d-flex
                      .fas.fa-circle-right.me-3
                      span Acción recomendada: identificar el grupo de preparación de información financiera y aplicar criterios de presentación adecuados.
                    li.d-flex
                      .fas.fa-circle-right.me-3
                      span Decisión que apoya: elaborar estados financieros consistentes.
              .row(titulo="Cualidades de la información")
                  p.mb-4 Para cualidades de la información, el análisis es el siguiente:
                  ul.lista-ul.color-vinotinto-custom.mb-0
                    li.d-flex
                      .fas.fa-circle-right.me-3
                      span Situación encontrada: existen saldos de inventario y cartera sin validar.
                    li.d-flex
                      .fas.fa-circle-right.me-3
                      span Acción recomendada: revisar soportes, reportes auxiliares y conciliaciones.
                    li.d-flex
                      .fas.fa-circle-right.me-3
                      span Decisión que apoya: evitar diagnósticos basados en cifras incompletas.
      //- Fin Accordion
      //- Inicio Accordion
      .bg--img_03.mt-3
        .row.justify-content-center
          .col-lg-8
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Fuentes de información")
                  p.mb-4 El análisis para el aspecto fuentes de información está dado por:
                  ul.lista-ul.color-vinotinto-custom.mb-0
                    li.d-flex
                      .fas.fa-circle-right.me-3
                      span Situación encontrada: hay diferencias entre el inventario físico y el registrado en el sistema.
                    li.d-flex
                      .fas.fa-circle-right.me-3
                      span Acción recomendada: hacer conteo físico, ajustar registros y documentar diferencias.
                    li.d-flex
                      .fas.fa-circle-right.me-3
                      span Decisión que apoya: determinar el inventario real y el costo de ventas.
              .row(titulo="Ética y confiabilidad")
                  p.mb-4 La ética y confidencialidad, requiere la siguiente revisión:
                  ul.lista-ul.color-vinotinto-custom.mb-0
                    li.d-flex
                      .fas.fa-circle-right.me-3
                      span Situación encontrada: algunos gastos personales fueron registrados como gastos del negocio.
                    li.d-flex
                      .fas.fa-circle-right.me-3
                      span Acción recomendada: reclasificar operaciones y separar gastos personales de empresariales.
                    li.d-flex
                      .fas.fa-circle-right.me-3
                      span Decisión que apoya: calcular resultados financieros más confiables.
              .row(titulo="Oportunidad")
                  p.mb-4 Para este aspecto, se realiza el siguiente análisis: 
                  ul.lista-ul.color-vinotinto-custom.mb-0
                    li.d-flex
                      .fas.fa-circle-right.me-3
                      span Situación encontrada: los informes se preparan después de vencidos los pagos importantes.
                    li.d-flex
                      .fas.fa-circle-right.me-3
                      span Acción recomendada: definir fechas de cierre, revisión y entrega de reportes.
                    li.d-flex
                      .fas.fa-circle-right.me-3
                      span Decisión que apoya: programar pagos y anticipar necesidades de efectivo.
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img10.png", style="width: 100%;").m-auto                     
      //- Fin Accordion
      p(data-aos="fade-left") De esta manera, se presenta cómo los fundamentos financieros y normativos se aplican antes de elaborar estados financieros y emitir un diagnóstico. Para ello, es necesario validar que la información sea normativa, verificable, oportuna y comprensible, evitando conclusiones basadas solo en el aumento de las ventas.


</template>

<script>
import podcast1 from '@/assets/curso/temas/audio/podcast.mp3'
export default {
  name: 'Tema6',
  data: () => ({
    podcast1,
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
