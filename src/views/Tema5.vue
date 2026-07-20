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
      Separador
      //- Inicio Tema5.5
      .row
        #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.5 Indicadores de endeudamiento

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
