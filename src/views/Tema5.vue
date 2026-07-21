<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Indicadores financieros, diagnóstico e informe	
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Los indicadores financieros relacionan cifras de los estados financieros para evaluar liquidez, actividad, endeudamiento y rentabilidad. Su importancia está en interpretar los resultados y compararlos con periodos anteriores, metas o referencias del sector, para identificar fortalezas, alertas y oportunidades de mejora en la toma de decisiones.
      Separador
      //- Inicio Tema5.1
      .row
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.1 Indicadores financieros y parámetros de comparación
      p(data-aos="fade-left") Un indicador financiero relaciona cifras de los estados financieros para evaluar liquidez, eficiencia, endeudamiento y rentabilidad. Su interpretación requiere comparar resultados con periodos anteriores, metas o referencias del sector, considerando la realidad operativa de la empresa. Para interpretar los indicadores de manera correcta, se presentan los parámetros para tener en cuenta:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                 img(src='@/assets/curso/temas/t5/tarjeta01_1.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Periodos anteriores
                p Permiten analizar la evolución o el deterioro del indicador. Por ejemplo, comparar la razón corriente del año actual con la del año anterior.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_2.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Presupuesto
                p Permite verificar el cumplimiento de las metas financieras establecidas. Por ejemplo, revisar si el margen neto alcanzó el porcentaje planeado.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_3.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Políticas internas
                p Permiten analizar la coherencia entre los resultados financieros y las decisiones de la empresa. Por ejemplo, comparar los días de cartera con la política de crédito.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_4.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Sector económico
                p Permite evaluar el comportamiento de la empresa frente a organizaciones similares. Por ejemplo, revisar si el margen bruto es razonable para una empresa comercial.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_5.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Objetivos de la gerencia
                p Permiten analizar el avance frente a los propósitos administrativos. Por ejemplo, evaluar la reducción del endeudamiento o la mejora en la rentabilidad.
      //- Fin Slideshow
      p(data-aos="fade-left") Con estos parámetros de comparación se evita generar conclusiones aisladas y erradas.
      Separador
      //- Inicio Tema5.2
      .row
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Indicadores de liquidez
      p(data-aos="fade-left") Los indicadores de liquidez evalúan la capacidad de la empresa para cumplir obligaciones de corto plazo y administrar su capital de trabajo. Su análisis permite detectar presiones de pago, exceso de inventarios o cartera pendiente de recaudo. (Ortiz Anaya, 2011; García Serna, 2009). Los principales indicadores de liquidez son:
      //- Inicio Tarjetas
      .row.justify-content-center.mt-5.mb-5(data-aos="fade-left")
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.border.overflow-hidden.shadow.bg-color-9
            figure.mb-0
              img(src='@/assets/curso/temas/t5/tarjeta02_1.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Razón corriente
                p Se calcula dividiendo el activo corriente entre el pasivo corriente. Este indicador mide cuántos pesos de activo corriente respaldan cada peso de deuda de corto plazo.
                p.mb-0.bg-color-4.p-3 <b>Fórmula:</b> Activo corriente / Pasivo corriente
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.border.overflow-hidden.shadow.bg-color-9
            figure.mb-0
              img(src='@/assets/curso/temas/t5/tarjeta02_2.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Prueba ácida
                p Se calcula restando los inventarios al activo corriente y dividiendo el resultado entre el pasivo corriente. Evalúa la capacidad de pago de la empresa sin depender de la venta de inventarios.
                p.mb-0.bg-color-4.p-3 <b>Fórmula:</b> Activo corriente - Inventarios / Pasivo corriente
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.border.overflow-hidden.shadow.bg-color-9
            figure.mb-0
              img(src='@/assets/curso/temas/t5/tarjeta02_3.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Capital de trabajo neto
                p Se calcula restando el pasivo corriente al activo corriente. Presenta el excedente o déficit de recursos corrientes después de cubrir las obligaciones próximas.
                p.mb-0.bg-color-4.p-3 <b>Fórmula:</b> Activo corriente - Pasivo corriente
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-sm-9.col-lg-5.order-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t5/img2.png' style="width: 600px").m-auto        
        .col-12.col-lg-7.order-1(data-aos="fade-right")
          p Para relacionar el concepto con una situación práctica, se plantea el siguiente ejemplo:
          .bg-color-10.p-4
            p.fw-bold Ejemplo Indicadores de liquidez
            p Una empresa tiene activo corriente por $ 90.000.000, inventarios por $ 35.000.000 y pasivo corriente por $ 50.000.000.
            ul.lista-ul.color-vinotinto-custom.mb-0
              li.d-flex
                .fas.fa-check-circle.me-3
                span <b>Razón corriente =</b> $ 90.000.000 / $ 50.000.000 = 1,8
              li.d-flex
                .fas.fa-check-circle.me-3
                span <b>Prueba ácida =</b> ($ 90.000.000 - $ 35.000.000) / $ 50.000.000 = 1,1
              li.d-flex
                .fas.fa-check-circle.me-3
                span <b>Capital de trabajo neto =</b> $ 90.000.000 - $ 50.000.000 = $ 40.000.000
            p.mt-3 La empresa tiene $ 1,8 de activo corriente por cada $ 1 de deuda corriente. Sin embargo, al excluir inventarios, la capacidad inmediata baja a $ 1,1, por lo que debe revisar la velocidad de cobro y la rotación de mercancía.
      Separador
      //- Inicio Tema5.3
      .row
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.3 Indicadores de actividad o rotación
      p(data-aos="fade-left") Los indicadores de actividad evalúan la eficiencia con que la empresa utiliza sus recursos operativos, como cartera, inventarios, proveedores y activos. Permiten identificar demoras en cobro, acumulación de inventarios, presión de proveedores o baja productividad de activos. A continuación, se resumen estos indicadores:
      //- Inicio Accordion
      .bg--img_03.mt-3(data-aos="fade-left")
        .row.justify-content-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t5/img3.png", style="width: 100%;").m-auto
          .col-lg-8
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Rotación de cartera")
                  p.mb-4 Se calcula dividiendo las ventas a crédito entre las cuentas por cobrar promedio. Mide cuántas veces se recupera la cartera durante el periodo.
                  p <b>Fórmula:</b> Ventas a crédito / Cuentas por cobrar promedio
              .row(titulo="Días de cuentas por cobrar")
                  p.mb-4 Se calcula dividiendo 360 entre la rotación de cartera. Indica cuántos días tarda la empresa en cobrar a sus clientes.
                  p <b>Fórmula:</b> 360 / Rotación de cartera
              .row(titulo="Rotación de inventarios")
                  p.mb-4 Se calcula dividiendo el costo de ventas entre el inventario promedio. Mide cuántas veces se vende o renueva el inventario durante el periodo.
                  p <b>Fórmula:</b> Costo de ventas / Inventario promedio
      //- Fin Accordion
      //- Inicio Accordion
      .bg--img_03.mt-3(data-aos="fade-left")
        .row.justify-content-center          
          .col-lg-8
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Días de inventario")
                  p.mb-4 Se calcula dividiendo 360 entre la rotación de inventarios. Indica cuántos días permanece el inventario antes de venderse.
                  p <b>Fórmula:</b> 360 / Rotación de inventarios
              .row(titulo="Rotación de proveedores")
                  p.mb-4 Se calcula dividiendo las compras a crédito entre los proveedores promedio. Mide cuántas veces se pagan las obligaciones con proveedores.
                  p <b>Fórmula:</b> Compras a crédito / Proveedores promedio
              .row(titulo="Rotación de activos")
                  p.mb-4 Se calcula dividiendo las ventas entre el total de activos. Evalúa la capacidad de los activos para generar ventas.
                  p <b>Fórmula:</b> Ventas / Total activos
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t5/img4.png", style="width: 100%;").m-auto
      //- Fin Accordion
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-sm-9.col-lg-5.order-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t5/img5.png' style="width: 600px").m-auto        
        .col-12.col-lg-7.order-1(data-aos="fade-right")
          p El siguiente ejemplo permite aplicar los conceptos abordados:
          .bg-color-10.p-4
            p.fw-bold Ejemplo Indicadores de actividad o rotación:
            p Si una empresa tiene ventas a crédito por $ 120.000.000 y cuentas por cobrar promedio de $ 30.000.000, la rotación de cartera es:
            p <b>Rotación de cartera =</b> $ 120.000.000 / $ 30.000.000 = 4 veces
            p <b>Días de cuentas por cobrar =</b> 360 / 4 = 90 días
            p.mt-3 Si la política de crédito de la empresa es de 60 días, el resultado refleja una demora promedio de 30 días adicionales. La decisión operativa puede orientarse a fortalecer la gestión de cobro, revisar cupos de crédito o aplicar descuentos por pronto pago.
      p Los indicadores de endeudamiento analizan qué parte de los recursos de la empresa está financiada con terceros y permiten identificar riesgos por dependencia de bancos, proveedores u otros acreedores. Su interpretación debe relacionarse con la liquidez, rentabilidad y flujo de efectivo. (Ortiz Anaya, 2011; García Serna, 2009). Los indicadores de endeudamiento son:
      Separador
      //- Inicio Tema5.4
      .row
        #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.4 Indicadores de endeudamiento
      p(data-aos="fade-left") Los indicadores de endeudamiento analizan qué parte de los recursos de la empresa está financiada con terceros y permiten identificar riesgos por dependencia de bancos, proveedores u otros acreedores. Su interpretación debe relacionarse con la liquidez, rentabilidad y flujo de efectivo. (Ortiz Anaya, 2011; García Serna, 2009). Los indicadores de endeudamiento son:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                 img(src='@/assets/curso/temas/t5/tarjeta03_1.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Nivel de endeudamiento
                p Se calcula dividiendo el total pasivo entre el total activo y multiplicando por 100. Este indicador mide qué porcentaje de los activos de la empresa está financiado con deuda.
                p.bg-color-11.p-3.d-inline-block Fórmula: Total pasivo / Total activo × 100
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta03_2.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Concentración del endeudamiento
                p Se calcula dividiendo el pasivo corriente entre el total pasivo y multiplicando por 100. Indica qué parte de las obligaciones vence en el corto plazo.
                p.bg-color-11.p-3.d-inline-block Fórmula: Pasivo corriente / Total pasivo × 100
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta03_3.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Cobertura de intereses
                p se calcula dividiendo la utilidad operacional entre los gastos financieros. Mide la capacidad de la empresa para cubrir los intereses con los resultados generados por su operación.
                p.bg-color-11.p-3.d-inline-block Fórmula: Utilidad operacional / Gastos financieros
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta03_4.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Relación deuda-patrimonio
                p se calcula dividiendo el total pasivo entre el patrimonio. Compara la financiación proveniente de terceros frente a los recursos propios de la empresa.
                p.bg-color-11.p-3.d-inline-block Fórmula: Total pasivo / Patrimonio
      //- Fin Slideshow
      p(data-aos="fade-left") <b>Nota.</b> Tabla con fines didácticos para interpretar el peso de las obligaciones dentro de la estructura financiera de la empresa.
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-sm-9.col-lg-5.order-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t5/img6.png' style="width: 600px").m-auto
        .col-12.col-lg-7.order-1(data-aos="fade-right")
          .bg-color-10.p-4
            p.fw-bold Ejemplo Indicadores de endeudamiento:
            p Una empresa tiene total pasivo por $ 90.000.000, total activo por $ 180.000.000 y patrimonio por $ 90.000.000.<br><br>
            p <b>Nivel de endeudamiento =</b> $ 90.000.000 /  $180.000.000 × 100 = 50 %
            p <b>Relación deuda-patrimonio =</b> $ 90.000.000 / $ 90.000.000 = 1,0<br><br>
            p.mt-3 El resultado indica que el 50 % de los activos está financiado con deuda y que por cada peso aportado o acumulado en patrimonio existe un peso financiado por terceros. La empresa debe revisar si sus ingresos y su efectivo son suficientes para cumplir oportunamente estas obligaciones.
      Separador
      //- Inicio Tema5.5
      .row
        #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.5 Indicadores de rentabilidad
      p(data-aos="fade-left") Los indicadores de rentabilidad evalúan la capacidad de la empresa para generar utilidades a partir de ventas, activos y patrimonio. Su análisis permite revisar costos, gastos, eficiencia operativa y rendimiento para la empresa y sus propietarios. (Ortiz Anaya, 2011). Estos son los indicadores de rentabilidad:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido.mt-1
            .py-3.py-md-4(titulo="Margen bruto")
              .row.align-items-center
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/t5/tarjeta04_1.png')
                .col-md-6.mb-4.mb-md-0
                  h4 Margen bruto
                  p Se calcula dividiendo la utilidad bruta entre las ventas y multiplicando por 100. Mide qué porcentaje de las ventas queda después de cubrir el costo de ventas.
                  p.mb-0.bg-color-4.p-3.d-inline-block <b>Fórmula:</b> Utilidad bruta / Ventas × 100
            .py-3.py-md-4(titulo="Margen operacional:")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t5/tarjeta04_2.png')
                .col-md-6
                  h4 Margen operacional:
                  p Se calcula dividiendo la utilidad operacional entre las ventas y multiplicando por 100. Evalúa el resultado generado por la actividad principal del negocio.
                  p.mb-0.bg-color-4.p-3.d-inline-block <b>Fórmula:</b> Utilidad operacional / Ventas × 100
            .py-3.py-md-4(titulo="Margen neto")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t5/tarjeta04_3.png')
                .col-md-6
                  h4 Margen neto
                  p Se calcula dividiendo la utilidad neta entre las ventas y multiplicando por 100. Indica qué porcentaje de las ventas queda como utilidad final.
                  p.mb-0.bg-color-4.p-3.d-inline-block <b>Fórmula:</b>: Utilidad neta / Ventas × 100
            .py-3.py-md-4(titulo="Rentabilidad del activo, ROA")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t5/tarjeta04_3.png')
                .col-md-6
                  h4 Rentabilidad del activo, ROA
                  p Se calcula dividiendo la utilidad neta entre el total activo y multiplicando por 100. Mide la capacidad de los activos para generar utilidad.
                  p.mb-0.bg-color-4.p-3.d-inline-block <b>Fórmula:</b>: Utilidad neta / Total activo × 100
            .py-3.py-md-4(titulo="Rentabilidad del patrimonio, ROE")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t5/tarjeta04_3.png')
                .col-md-6
                  h4 Rentabilidad del patrimonio, ROE
                  p Se calcula dividiendo la utilidad neta entre el patrimonio y multiplicando por 100. Evalúa el rendimiento obtenido sobre los recursos de los propietarios.
                  p.mb-0.bg-color-4.p-3.d-inline-block <b>Fórmula:</b>: Utilidad neta / Patrimonio × 100
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-sm-9.col-lg-5.order-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t5/img7.png' style="width: 600px").m-auto
        .col-12.col-lg-7.order-1(data-aos="fade-right")
          .bg-color-10.p-2
            p.fw-bold Ejemplo Indicadores de rentabilidad
            p Una empresa presenta ventas por $ 120.000.000, utilidad neta por $ 18.000.000, total activo por $ 150.000.000 y patrimonio por $ 80.000.000.<br><br>
            p <b>Margen neto =</b> $ 18.000.000 / $ 120.000.000 × 100 = 15 %
            p <b>ROA =</b> $ 18.000.000 / $ 150.000.000 × 100 = 12 %
            p <b>ROE =</b> $ 18.000.000 / $ 80.000.000 × 100 = 22,5 % <br><br>
            p.mt-3 El resultado indica que el 50 % de los activos está financiado con deuda y que por cada peso aportado o acumulado en patrimonio existe un peso financiado por terceros. La empresa debe revisar si sus ingresos y su efectivo son suficientes para cumplir oportunamente estas obligaciones.                                    
      //- Cierres Pestanas horizontales
      Separador
      //- Inicio Tema5.6
      .row
        #t_5_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.6 Diagnóstico financiero para la toma de decisiones
      p El diagnóstico financiero integra el análisis vertical, horizontal y los indicadores para interpretar la situación general de la empresa. Permite explicar los resultados, identificar fortalezas, debilidades, riesgos y acciones de mejora relacionadas con liquidez, rentabilidad, costos, gastos y operación del negocio. Para lo anterior, se presenta la guía para convertir los indicadores en diagnóstico financiero.
      //- Inicio Accordion
      .bg--img_03.mt-3(data-aos="fade-left")
        .row.justify-content-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t5/img8.png", style="width: 100%;").m-auto
          .col-lg-8
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Razón corriente baja")
                  p.mb-4 Puede indicar que la empresa tiene dificultad para cubrir sus obligaciones de corto plazo. Ante esta situación, se recomienda revisar pagos, recaudos, flujo de caja y posibilidades de negociación con proveedores.
              .row(titulo="Prueba ácida muy inferior a la razón corriente")
                  p.mb-4 Significa que la liquidez depende en gran parte de los inventarios. Por ello, se recomienda revisar la rotación de mercancía y los niveles de compra.
              .row(titulo="Días de cartera superiores a la política de crédito")
                  p.mb-4 Indica que los clientes están tardando más de lo previsto en pagar. En este caso, se recomienda fortalecer el cobro y revisar cupos y condiciones de crédito.
              .row(titulo="Inventarios con baja rotación")
                  p.mb-4 Muestra que hay recursos inmovilizados en mercancía. Por esta razón, se recomienda ajustar compras, realizar promociones o depurar productos de baja salida.
      //- Fin Accordion
      //- Inicio Accordion
      .bg--img_03.mt-3(data-aos="fade-left")
        .row.justify-content-center          
          .col-lg-8
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Endeudamiento creciente")
                  p.mb-4 Indica que la empresa depende más de recursos de terceros. Ante esta situación, se recomienda evaluar la capacidad de pago y las condiciones de financiación.
              .row(titulo="Margen neto en disminución")
                  p.mb-4 Señala que los costos o gastos están afectando la utilidad final. Por ello, se recomienda revisar precios, costos, descuentos y gastos operacionales.
              .row(titulo="ROA bajo")
                  p.mb-4 Indica que los activos no están generando suficiente utilidad. En este caso, se recomienda evaluar la productividad de los activos y el uso de los recursos.
              .row(titulo="ROE bajo")
                  p.mb-4 Muestra que el patrimonio no está generando el rendimiento esperado. Por esta razón, se recomienda revisar la rentabilidad, la inversión y la estrategia operativa.
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t5/img9.png", style="width: 100%;").m-auto
      //- Fin Accordion
      .row.p-4.justify-content-center(data-aos="fade-left")
        .col-lg-7
          .row.bg-color-4.p-4.align-items-center
            .col-lg-2
              figure.mb-3.text-center
                img(src='@/assets/curso/temas/bg/icono.svg' style="width: 70px").m-auto
            .col-lg-10
              p La ruta de interpretación de indicadores financieros es la siguiente:
      //- Linea de tiempo
      .row.justify-content-center(data-aos="fade-left")
        .col-lg-10
          PasosA.color-acento-contenido.mb-4(tipo="n")
            .row.align-items-center
              .col-12.col-lg
                h4 Cálculo del indicador
                p Se determina el valor del indicador según la información financiera disponible. Puede corresponder a indicadores de liquidez, actividad, endeudamiento o rentabilidad.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta05_1.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta05_2.png').img125
              .col-12.col-lg.text-start
                h4 Comparación con parámetros
                p Se contrasta el resultado con referencias relevantes, como periodos anteriores, metas internas, presupuesto o datos del sector.
            .row.align-items-center
              .col-12.col-lg
                h4 Identificación de alertas y fortalezas
                p Se detectan situaciones críticas o positivas en la empresa, como liquidez baja, cartera alta o rentabilidad favorable.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta05_3.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta05_4.png').img125
              .col-12.col-lg.text-start
                h4 Diagnóstico financiero
                p Se interpreta el conjunto de resultados para comprender la situación financiera de la empresa de manera integral.
            .row.align-items-center
              .col-12.col-lg
                h5 Conclusiones
                p Se sintetizan los hallazgos principales, identificando los aspectos más relevantes del análisis financiero.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta05_5.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta05_6.png').img125
              .col-12.col-lg.text-start
                h4 Recomendaciones y toma de decisiones
                p Se proponen acciones correctivas, preventivas y de mejora para fortalecer el desempeño financiero y apoyar la toma de decisiones.
      //- Linea de tiempo      
      Separador
      //- Inicio Tema5.7
      .row
        #t_5_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.7 Informe financiero con conclusiones y recomendaciones
      P El informe financiero comunica de forma clara, técnica y ordenada los resultados del análisis, el diagnóstico y las recomendaciones para la toma de decisiones. Cada resultado debe incluir interpretación y, cuando sea necesario, acciones de mejora. (Ortiz Anaya, 2011; García Serna, 2009). Para la realización del informe, se debe tener en cuenta la siguiente estructura:
      //- Linea de tiempo
      .row.justify-content-center(data-aos="fade-left")
        .col-lg-10
          PasosA.color-acento-contenido.mb-4(tipo="n")
            .row.align-items-center
              .col-12.col-lg
                h4 Identificación de la empresa
                p Incluye el nombre, la actividad económica y el periodo analizado. Su propósito es contextualizar el análisis financiero.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta06_1.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta06_2.png').img125
              .col-12.col-lg.text-start
                h4 Información utilizada
                p Comprende los estados financieros, los periodos y las fuentes de datos empleadas. Su propósito es indicar la base sobre la cual se realiza el análisis.
            .row.align-items-center
              .col-12.col-lg
                h4 Análisis vertical y horizontal
                p Presenta las participaciones, variaciones y cambios relevantes identificados en los estados financieros. Su propósito es mostrar la estructura y evolución financiera de la empresa.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta06_3.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta06_4.png').img125
              .col-12.col-lg.text-start
                h4 Indicadores financieros
                p Incluye indicadores de liquidez, actividad, endeudamiento y rentabilidad. Su propósito es evaluar aspectos específicos de la situación financiera.
            .row.align-items-center
              .col-12.col-lg
                h5 Diagnóstico financiero
                p Integra fortalezas, debilidades y riesgos identificados durante el análisis. Su propósito es explicar la situación financiera de la empresa.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta06_5.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta06_6.png').img125
              .col-12.col-lg.text-start
                h4 Conclusiones
                p Reúne los hallazgos principales del análisis financiero. Su propósito es resumir los resultados más importantes.
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta06_7.png').img125
              .col-12.col-lg.text-start
                h4 Recomendaciones
                p Presenta acciones de mejora, corrección o prevención. Su propósito es apoyar la toma de decisiones operativas.
      //- Linea de tiempo
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/imagen-titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Criterios para redactar conclusiones y recomendaciones
      p(data-aos="fade-left") Las conclusiones y recomendaciones deben surgir de los resultados del análisis financiero, relacionando cifras, variaciones e indicadores con la situación real de la empresa. Los criterios para tener en cuenta son:
      //- Inicio Tarjetas
      .row.justify-content-center.mt-5.mb-5(data-aos="fade-left")
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.border.overflow-hidden.shadow.bg-color-9
            figure.mb-0
              img(src='@/assets/curso/temas/t5/tarjeta07_1.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Conclusiones
                p Deben estar sustentadas en cifras, comparaciones o tendencias, evitando opiniones generales.
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.border.overflow-hidden.shadow.bg-color-9
            figure.mb-0
              img(src='@/assets/curso/temas/t5/tarjeta07_2.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Recomendaciones
                p Deben ser concretas y aplicables, orientadas a mejorar liquidez, cartera, inventarios, costos, gastos, financiación o rentabilidad.
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.border.overflow-hidden.shadow.bg-color-9
            figure.mb-0
              img(src='@/assets/curso/temas/t5/tarjeta07_3.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Diagnóstico financiero
                p Integra indicadores, análisis vertical y horizontal para identificar riesgos, fortalezas y acciones de mejora que apoyen la toma de decisiones.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
