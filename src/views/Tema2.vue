<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Estructura contable y elaboración de estados financieros básicos	
      .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")        
        .col-lg-7.bg-color-3.d-flex.align-items-center.p-4
          p.mb-0 La elaboración de estados financieros requiere organizar y clasificar adecuadamente la información contable para reflejar la realidad económica de la empresa. Este capítulo conecta los registros contables con la presentación financiera, permitiendo comprender el efecto de cada cuenta y evitar errores que afecten el análisis y la toma de decisiones.
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t2/img1.png', alt='', style="object-fit: cover;")
      Separador
      //- Inicio Tema2.1
      .row
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Ecuación contable: activo, pasivo y patrimonio	
      .row.mb-5.justify-content-center.align-items-center
          .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
            figure.mb-0.text-center
              img(src='@/assets/curso/temas/t2/img2.png' style="width: 600px").m-auto
          .col-12.col-lg-8.order-2.order-lg-1.bg-color-7.p-4(data-aos="fade-right")
            p La ecuación contable relaciona activo, pasivo y patrimonio para mostrar qué posee la empresa, qué debe y qué pertenece a los propietarios, manteniendo el equilibrio financiero en cada hecho económico registrado (Coral Delgado, 2014; Díaz Moreno, 2006). La ecuación contable se expresa así:
            p.bg-color-8.p-2.d-inline-block Activo = Pasivo + Patrimonio
            p También puede analizarse de la siguiente manera:
            p.bg-color-8.p-2.d-inline-block Patrimonio = Activo - Pasivo
      p(data-aos="fade-left") Los activos pueden financiarse con recursos de terceros, representados en el pasivo, o con recursos propios, representados en el patrimonio. A continuación, se presentan los elementos de la ecuación contable.
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido.mt-1
            .py-3.py-md-4(titulo="Activo")
              .row.align-items-center
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta01_1.png')
                .col-md-6.mb-4.mb-md-0
                  h4 Activo
                  p Representa los recursos y derechos controlados por la empresa, producto de hechos pasados, de los cuales se esperan beneficios económicos futuros. Incluye efectivo y equivalentes, derechos por cobrar, inventarios, propiedad, planta y equipo, así como otros activos como intangibles, inversiones y anticipos. Este elemento permite identificar qué posee o controla la empresa para desarrollar su actividad económica.                
            .py-3.py-md-4(titulo="Pasivo")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta01_2.png')
                .col-md-6
                  h4 Pasivo
                  p Corresponde a las obligaciones presentes de la empresa, originadas en hechos pasados, cuya cancelación generará salidas de recursos que incorporan beneficios económicos. Incluye cuentas por pagar a proveedores, obligaciones financieras, impuestos por pagar, obligaciones laborales y otras obligaciones como dividendos o anticipos. Este elemento permite reconocer qué debe la empresa y cuáles son sus compromisos con terceros.                
            .py-3.py-md-4(titulo="Patrimonio")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta01_3.png')
                .col-md-6
                  h4 Patrimonio
                  p Representa la participación residual de los propietarios en los activos de la empresa, después de deducir todos sus pasivos. Incluye aportes de los propietarios, reservas, utilidades acumuladas y resultado del periodo, ya sea utilidad o pérdida. Este elemento permite identificar qué parte de los recursos pertenece a los propietarios.                
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") La relación entre activo, pasivo y patrimonio permite comprender cómo se financian los recursos de la empresa y por qué la ecuación contable debe mantenerse en equilibrio. A continuación, se presenta la conexión entre estos elementos:
      //- Inicio Tarjetas
      .row.justify-content-center.mt-5(data-aos="fade-left")
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.border.overflow-hidden.shadow.bg-color-9
            figure.mb-0
              img(src='@/assets/curso/temas/t2/tarjeta02_1.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Desde el activo
                p.text-center.mb-0 La empresa obtiene recursos (activos) para desarrollar su actividad económica.
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.border.overflow-hidden.shadow.bg-color-9
            figure.mb-0
              img(src='@/assets/curso/temas/t2/tarjeta02_2.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Desde el pasivo
                p.text-center.mb-0 Esos recursos se financian con obligaciones con terceros (pasivos) y con aportes o resultados de los propietarios (patrimonio).
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.border.overflow-hidden.shadow.bg-color-9
            figure.mb-0
              img(src='@/assets/curso/temas/t2/tarjeta02_3.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Desde el patrimonio
                p.text-center.mb-0 La ecuación contable debe mantenerse en equilibrio en todo momento.
          //- Fin Tarjetas
      .row.justify-content-center.mt-5.mb-5
        .col-lg-8.bg-color-7.p-5.text-center(data-aos="fade-left")
          p.mb-4 Toda transacción que realice la empresa afecta por lo menos dos cuentas, manteniendo el equilibrio: 
          div
            p.bg-color-8.d-inline-block.py-3.px-5.mb-0 Activo = Pasivo + Patrimonio
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t2/img3.png' style="width: 600px").m-auto
        .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-right")
          .row
            p Para comprender este tema, se presenta el siguiente ejemplo:
          .row 
            .col-12.bg-color-10.p-3
              p.fw-bold Ejemplo:
              p Una empresa tiene activos por $ 120.000.000 y pasivos por $ 45.000.000. Para determinar el patrimonio se aplica la ecuación:
              p <b>Patrimonio</b> = Activo – Pasivo
              p <b>Patrimonio</b> = $ 120.000.000 – $ 45.000.000
              p <b>Patrimonio</b> = $ 75.000.000
              p Esto significa que, después de cubrir sus obligaciones, la participación de los propietarios en la empresa es de $ 75.000.000.
      p(data-aos="fade-left") La ecuación contable refleja que los recursos de la empresa se financian mediante obligaciones con terceros y aportes o resultados de los propietarios
      Separador
      //- Inicio Tema2.2
      .row
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Ingresos, costos, gastos y resultado del periodo	
      p(data-aos="fade-left") El estado de resultados presenta el desempeño económico de la empresa durante un periodo, a partir de la clasificación de ingresos, costos y gastos. Esta información permite determinar la utilidad o pérdida y evaluar si las ventas cubren los compromisos de la operación. El resultado del periodo se calcula de forma general asi:
      .row.justify-content-center.mt-5.mb-5
        .col-lg-4.bg-color-7.p-3.text-center(data-aos="fade-left")
          p Resultado del periodo = Ingresos – Costos – Gastos
      p.text-center.mb-5 Cuando los ingresos son mayores que los costos y gastos, se obtiene utilidad. Cuando los costos y gastos superan los ingresos, se genera pérdida.
      .row.justify-content-center.mb-4
        .col-lg-12
          .d-flex.flex-column.flex-lg-row.align-items-center
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/lineas1.svg', style="width: 80px")
            .flex-grow-1.text-center.text-lg-start
              p.mb-0 Para comprender la dinámica del estado de resultados, se estudiarán los conceptos de los elementos que lo componen:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                 img(src='@/assets/curso/temas/t2/tarjeta03_1.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Ingresos
                p Representan las entradas económicas generadas por la actividad de la empresa, como ventas de mercancías, prestación de servicios e ingresos operacionales. Su efecto en el estado de resultados es positivo, ya que aumentan el resultado del periodo.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta03_2.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Costos
                p Corresponden a los valores directamente asociados con producir o adquirir lo vendido, como el costo de mercancía vendida, materias primas, mano de obra directa y costos de producción. Su efecto es disminuir el resultado del periodo.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta03_3.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Gastos
                p Son consumos necesarios para administrar, vender o financiar la operación de la empresa, como arriendo, servicios públicos, nómina administrativa, publicidad, comisiones e intereses. Al igual que los costos, disminuyen el resultado del periodo.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta03_4.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Utilidad
                p Representa el resultado positivo del periodo, cuando los ingresos son superiores a los costos y gastos. Su efecto financiero es fortalecer el patrimonio de la empresa.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta03_5.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Pérdida
                p Representa el resultado negativo del periodo, cuando los costos y gastos son superiores a los ingresos. Su efecto financiero es disminuir el patrimonio de la empresa.
      //- Fin Slideshow
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/imagen-titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Diferencia entre costo y gasto
      //- Título nivel 3 - Imagen
      .row.mb-5.justify-content-center.align-items-center
          .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
            figure.mb-0.text-center
              img(src='@/assets/curso/temas/t2/img4.png' style="width: 500px").m-auto
          .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-right")
            p Una de las clasificaciones más importantes al elaborar el estado de resultados es diferenciar entre costo y gasto. Esta distinción permite calcular correctamente la utilidad o pérdida del periodo, ya que no todos los desembolsos cumplen la misma función dentro de la empresa.
            .row.bg-color-4.p-4
              .col-lg-2
                figure.mb-3.text-center
                  img(src='@/assets/curso/temas/bg/icono.svg' style="width: 70px").m-auto
              .col-lg-10
                p El costo se relaciona directamente con el producto vendido o servicio prestado, mientras que el gasto corresponde a pagos necesarios para administrar, vender o financiar la operación.
      p.mb-5(data-aos="fade-left") Para facilitar esta diferencia, la siguiente tabla presenta situaciones frecuentes de la empresa, su clasificación como costo o gasto y la justificación correspondiente.
      //- Inicio Tabla
      .row.justify-content-center.mb-5
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 3.
            span  Diferencia entre costo y gasto
          .tabla-a
            table
              thead
                tr
                  th(style="width: 40%") Situación
                  th(style="width: 20%") Clasificación
                  th(style="width: 40%") Justificación
              tbody
                tr
                  td Compra de mercancía para la venta
                  td Costo
                  td Está directamente relacionada con el producto que será vendido
                tr
                  td Pago de arriendo del local administrativo
                  td Gasto
                  td Permite operar, pero no forma parte directa del producto vendido
                tr
                  td Salario del personal de producción
                  td Costo
                  td Participa directamente en la elaboración del producto
                tr
                  td Salario del auxiliar administrativo
                  td Gasto
                  td Apoya la gestión administrativa de la empresa
                tr
                  td Comisión por ventas
                  td Gasto de ventas
                  td Se relaciona con la gestión comercial
                tr
                  td Intereses de un crédito bancario
                  td Gasto financiero
                  td Corresponde al costo del financiamiento
      //- FinTabla
      p(data-aos="fade-left") Después de clasificar correctamente los costos y gastos, es posible calcular el resultado del periodo. El siguiente ejemplo refleja cómo se determina la utilidad a partir de los ingresos, costos y gastos de una empresa comercial.
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t2/img5.png' style="width: 600px").m-auto
        .col-12.col-lg-7.order-2.order-lg-2.bg-color-10.p-4(data-aos="fade-right")
          p.fw-bold Ejemplo:
          p Una empresa comercial presenta la siguiente información del mes:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex
              .fas.fa-check-circle.me-3
              span <b>Ventas:</b> $ 30.000.000
            li.d-flex
              .fas.fa-check-circle.me-3
              span <b>Costo de mercancía vendida:</b> $ 18.000.000
            li.d-flex
              .fas.fa-check-circle.me-3
              span <b>Gastos administrativos:</b> $ 4.000.000
            li.d-flex
              .fas.fa-check-circle.me-3
              span <b>Gastos de ventas:</b> $ 2.000.000
            li.d-flex
              .fas.fa-check-circle.me-3
              span <b>Gastos financieros:</b> $ 500.000
          .row
            .col-12.p-2.bg-color-11
              p.fw-bold El resultado se calcula así:
              p <b>Resultado</b> = Ingresos - Costos – Gastos
              p <b>Resultado</b> = $ 30.000.000 - $ 18.000.000 - $ 4.000.000 - $ 2.000.000 - $ 500.000
              p <b>Resultado</b> = $ 5.500.000
              p La empresa obtuvo una utilidad de $5.500.000 en el periodo.
      Separador
      //- Inicio Tema2.3
      .row
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Codificación y estructura de cuentas	
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img6.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La codificación de cuentas organiza la información contable de forma uniforme, facilitando el registro, consulta, elaboración de estados financieros y análisis posterior. Su estructura permite clasificar activos, pasivos, patrimonio, ingresos, costos y gastos según la actividad económica de la empresa. 
      p(data-aos="fade-left") A continuación, se presenta la estructura general de las cuentas contables por categoría:
      //- Inicio Accordion
      .bg--img_03.mt-3
        .row.justify-content-center
          .col-lg-3 
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img7.png", style="width: 100%;").m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Activo")
                  p.mb-4 Corresponde a los recursos y derechos de la empresa. Algunos ejemplos de cuentas son caja, bancos, cuentas por cobrar, inventarios, propiedad, planta y equipo. Se relaciona con el estado de situación financiera.
              .row(titulo="Pasivo")
                  p.mb-4 Representa las obligaciones con terceros. Incluye cuentas como proveedores, obligaciones financieras, impuestos por pagar y salarios por pagar. Se relaciona con el estado de situación financiera. 
              .row(titulo="Patrimonio")
                  p.mb-4 Corresponde a los recursos propios y resultados acumulados de la empresa. Algunos ejemplos son capital social, reservas, utilidades acumuladas y resultado del periodo. Se relaciona con el estado de situación financiera.
      //- Fin Accordion
      //- Inicio Accordion
      .bg--img_03.mt-3
        .row.justify-content-center
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Ingresos")
                  p.mb-4 Representan aumentos económicos derivados de la operación. Incluyen ventas, ingresos por servicios y devoluciones en compras. Se relacionan con el estado de resultados.
              .row(titulo="Costos")
                  p.mb-4 Corresponden a los recursos consumidos para generar ingresos. Incluyen costo de ventas, materia prima y mano de obra directa. Se relacionan con el estado de resultados. 
              .row(titulo="Gastos")
                  p.mb-4 Representan desembolsos necesarios para operar. Incluyen gastos administrativos, de ventas y financieros. Se relacionan con el estado de resultados.
          .col-lg-3 
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img8.png", style="width: 100%;").m-auto
      //- Fin Accordion
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/imagen-titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Naturaleza de las cuentas
      //- Título nivel 3 - Imagen
      p La naturaleza de las cuentas indica cómo aumentan o disminuyen. En general, activos, costos y gastos tienen naturaleza débito, mientras que pasivos, patrimonio e ingresos tienen naturaleza crédito. En la siguiente tabla se resume la naturaleza general de las cuentas para apoyar la comprensión de su comportamiento contable.
      .row.bg-fondo-2.mt-5(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 4.
                  span  Naturaleza general de las cuentas
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Tipo de cuenta
                        th(style="width: 20%") Aumenta generalmente por
                        th(style="width: 20%") Disminuye generalmente por
                        th(style="width: 40%") Ejemplo de movimiento
                    tbody
                      tr
                        td Activo
                        td Débito
                        td Crédito
                        td Ingreso de dinero al banco
                      tr
                        td Pasivo
                        td Crédito
                        td Débito
                        td Registro de una deuda con proveedor
                      tr
                        td Patrimonio
                        td Crédito
                        td Débito
                        td Aporte de socios
                      tr
                        td Ingresos
                        td Crédito
                        td Débito
                        td Venta de mercancía
                      tr
                        td Costos
                        td Débito
                        td Crédito
                        td Reconocimiento del costo de mercancía vendida
                      tr
                        td Gastos
                        td Débito
                        td Crédito
                        td Pago o causación de arriendo
            //- FinTabla
      Separador
      //- Inicio Tema2.4
      .row
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.4 Clasificación de cuentas corrientes y no corrientes	
      p(data-aos="fade-left") La clasificación corriente y no corriente organiza activos y pasivos según su plazo, facilitando el estado de situación financiera, el análisis de liquidez y la evaluación de obligaciones. A continuación, se presenta la clasificación de activos corrientes y no corrientes:
      //- Inicio Tarjetas
      .row.justify-content-center.g-0.mb-5(data-aos="fade-right")
        .col-lg-6.col-md-6
          .tarjeta.p-5.h-100.bg-color-5(style="border-radius: 25px 0 0 25px; background-color: #5c657a;")
            .row.mb-3
              .col-auto
                figure
                  img(src='@/assets/curso/temas/bg/tarjeta01_1.svg', alt='' style="width:100px").m-auto
            h4.text-white Activo corriente
            p.text-white Se espera convertir en efectivo, vender o consumir en el corto plazo. Incluye caja, bancos, cuentas por cobrar, inventarios y anticipos. Su clasificación permite evaluar la liquidez y la capacidad operativa de la empresa.
        .col-lg-6.col-md-6
          .tarjeta.p-5.h-100.bg-color-6(style="border-radius: 0 25px 25px 0; background-color: #9af0f3;")
            .row.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/temas/bg/tarjeta01_2.svg', style="width:100px").m-auto
            h4.card-title.mb-2 Activo no corriente
            p Se utiliza o recupera en un plazo superior al corto plazo. Incluye maquinaria, equipos, vehículos, edificaciones e intangibles. Su clasificación permite evaluar la inversión, la capacidad instalada y la estructura de activos de la empresa.
          //- Fin Tarjetas
      .row.p-4.justify-content-center
        .col-lg-5
          .row.bg-color-4.p-4.align-items-center
            .col-lg-2
              figure.mb-3.text-center
                img(src='@/assets/curso/temas/bg/icono.svg' style="width: 70px").m-auto
            .col-lg-10
              p Ahora, se presenta la clasificación del pasivo:
      //- Linea de tiempo
      .row.justify-content-center
        .col-lg-10
          PasosA.color-acento-contenido.mb-4(tipo="n")
            .row.align-items-center
              .col-12.col-lg
                h4 Pasivo corriente
                p Debe pagarse en el corto plazo. Incluye proveedores, obligaciones financieras de corto plazo, impuestos por pagar y nómina por pagar. Su clasificación permite analizar la presión de pagos y las necesidades de efectivo de la empresa.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta04_1.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta04_2.png').img125
              .col-12.col-lg.text-start
                h4 Pasivo no corriente
                p Corresponde a obligaciones cuyo vencimiento supera el corto plazo. Incluye créditos bancarios de largo plazo y obligaciones financieras de largo plazo. Su clasificación permite evaluar la estructura de financiación y los compromisos futuros de la empresa.
      //- Linea de tiempo
      p Para entender esta dinámica, se presenta el siguiente ejemplo:
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t2/img9.png' style="width: 600px").m-auto
        .col-12.col-lg-7.order-2.order-lg-1.bg-color-10.p-4(data-aos="fade-right")
          p.fw-bold Ejemplo:
          p Una empresa tiene los siguientes saldos:
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex
              .fas.fa-check-circle.me-3
              span <b>Caja:</b> $ 3.000.000
            li.d-flex
              .fas.fa-check-circle.me-3
              span <b>Bancos:</b> $ 12.000.000
            li.d-flex
              .fas.fa-check-circle.me-3
              span <b>Clientes:</b> $ 20.000.000
            li.d-flex
              .fas.fa-check-circle.me-3
              span <b>Inventarios:</b> $ 35.000.000
            li.d-flex
              .fas.fa-check-circle.me-3
              span <b>Vehículo de reparto:</b> $ 60.000.000
            li.d-flex
              .fas.fa-check-circle.me-3
              span <b>Proveedores:</b> $ 25.000.000
            li.d-flex
              .fas.fa-check-circle.me-3
              span <b>Crédito bancario a 8 meses:</b> $ 10.000.000
            li.d-flex
              .fas.fa-check-circle.me-3
              span <b>Crédito bancario a 4 años:</b> $ 40.000.000
          .row
            .col-12.p-2.bg-color-11
              p La clasificación sería:
              ul.lista-ul.color-vinotinto-custom.mb-0
                li.d-flex
                  .fas.fa-check-circle.me-3
                  span <b>Activos corrientes:</b> caja, bancos, clientes e inventarios.
                li.d-flex
                  .fas.fa-check-circle.me-3
                  span <b>Activos no corrientes:</b> vehículo de reparto.
                li.d-flex
                  .fas.fa-check-circle.me-3
                  span <b>Pasivos corrientes:</b> proveedores y crédito bancario a 8 meses.
                li.d-flex
                  .fas.fa-check-circle.me-3
                  span <b>Pasivos no corrientes:</b> crédito bancario a 4 años.
      p(data-aos="fade-left") Esta clasificación permite observar qué recursos pueden apoyar la operación de corto plazo y qué obligaciones deben atenderse próximamente.
      Separador
      //- Inicio Tema2.5
      .row
        #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.5 Organización de la información contable	
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img10.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La organización de la información contable convierte soportes y registros diarios en datos útiles para elaborar estados financieros. Para ello, las operaciones deben clasificarse, verificarse y agruparse correctamente, evitando errores, saldos incompletos o cifras mal registradas que afecten el análisis y la toma de decisiones.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/imagen-titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Proceso para organizar la información contable
      //- Título nivel 3 - Imagen
      p El proceso consiste en identificar, soportar, clasificar, registrar y validar las operaciones antes de elaborar estados financieros, evitando errores en la información contable. Seguidamente, se presenta el proceso de organización de la información contable:
      //- Linea de tiempo
      .row.justify-content-center
        .col-lg-10
          PasosA.color-acento-contenido.mb-4(tipo="n")
            .row.align-items-center
              .col-12.col-lg
                h4 Identificación del hecho económico
                p Consiste en reconocer la operación realizada por la empresa, como una venta de mercancía, compra de inventario, pago de nómina o recaudo de cartera. El resultado esperado es que la operación quede identificada y lista para ser soportada.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta05_1.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta05_2.png').img125
              .col-12.col-lg.text-start
                h4 Recolección de soportes
                p Consiste en obtener los documentos que respaldan la operación, como facturas, recibos, extractos bancarios, comprobantes o contratos. El resultado esperado es contar con evidencia documental disponible.
            .row.align-items-center
              .col-12.col-lg
                h4 Clasificación contable
                p Consiste en determinar la cuenta afectada según su naturaleza. Por ejemplo, una venta puede registrarse como ingreso y una cuenta por cobrar como activo. El resultado esperado es ubicar la cuenta en el grupo correspondiente.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta05_3.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta05_4.png').img125
              .col-12.col-lg.text-start
                h4 Registro de la operación
                p Consiste en ingresar la información en el sistema contable o herramienta de control. Por ejemplo, causar una factura de proveedor o registrar un pago bancario. El resultado esperado es incorporar el movimiento en los libros o reportes.
            .row.align-items-center
              .col-12.col-lg
                h5 Validación de saldos
                p Consiste en revisar que la información registrada coincida con soportes y auxiliares. Puede incluir conciliación bancaria, revisión de cartera o conteo de inventario. El resultado esperado es contar con saldos revisados y depurados.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta05_5.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta05_6.png').img125
              .col-12.col-lg.text-start
                h4 Agrupación de cuentas
                p Consiste en organizar las cuentas por activo, pasivo, patrimonio, ingresos, costos y gastos. También puede implicar separar cuentas corrientes y no corrientes. El resultado esperado es preparar la información para la elaboración de estados financieros.
            .row.align-items-center
              .col-12.col-lg
                h4 Preparación de informes
                p Consiste en consolidar la información en estados financieros, como el estado de situación financiera y el estado de resultados. El resultado esperado es obtener estados financieros organizados para el análisis.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta05_7.png').img125
      //- Linea de tiempo
      p(data-aos="fade-left") La información contable debe organizarse con criterios uniformes para identificar operaciones, respaldar registros, separar datos según su propósito y elaborar estados financieros confiables para el análisis. A continuación, se presenta un ejemplo que permite relacionar los conceptos abordados con una situación práctica:
      p(data-aos="fade-right") Antes de elaborar los estados financieros, debe organizar la información así:
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t2/img11.png' style="width: 500px").m-auto
        .col-12.col-lg-7.order-2.order-lg-1.bg-color-10.p-4(data-aos="fade-right")
          p.fw-bold Ejemplo:
          p Una empresa comercial recibe durante el mes los siguientes documentos: facturas de venta por $ 45.000.000, facturas de compra de mercancía por $ 28.000.000, pagos de nómina por $ 6.000.000, extractos bancarios, reporte de cartera y conteo físico de inventarios.
      .row.bg-fondo-2.mt-5(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 5.
                  span  Ejemplo de organización de la información contable
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Documento o reporte
                        th(style="width: 40%") Clasificación inicial
                        th(style="width: 40%") Revisión necesaria
                    tbody
                      tr
                        td Facturas de venta
                        td Ingresos y cuentas por cobrar o bancos
                        td Verificar consecutivos, valores, impuestos y forma de pago
                      tr
                        td Facturas de compra
                        td Inventarios, costos o gastos y cuentas por pagar
                        td Confirmar proveedor, valor, fecha y naturaleza de la compra
                      tr
                        td Nómina
                        td Gastos laborales y obligaciones asociadas
                        td Revisar liquidación, pagos y prestaciones
                      tr
                        td Extractos bancarios
                        td Efectivo y equivalentes de efectivo
                        td Conciliar bancos con registros contables
                      tr
                        td Reporte de cartera
                        td Cuentas por cobrar
                        td Revisar saldos vencidos y recaudos
                      tr
                        td Conteo de inventarios
                        td Inventarios
                        td Comparar existencias físicas con registros del sistema
            //- FinTabla
            p(data-aos="fade-left") Antes de elaborar estados financieros, la empresa debe verificar que las operaciones estén completas, soportadas y correctamente clasificadas, asegurando saldos confiables.
      Separador
      //- Inicio Tema2.6
      .row
        #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.6 Estado de situación financiera o balance general	
      p(data-aos="fade-left") El estado de situación financiera presenta los activos, pasivos y patrimonio de la empresa en una fecha determinada, permitiendo conocer su financiación y capacidad de pago. Se elabora a partir de la ecuación contable, por lo que las cuentas deben estar correctamente clasificadas. (Coral Delgado, 2014). La siguiente tabla presenta la forma básica de organizar las cuentas del estado de situación financiera
      .row.bg-fondo-2.mt-5(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.mb-5
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 6.
                  span Estructura práctica del estado de situación financiera
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 10%") Grupo
                        th(style="width: 20%") Clasificación
                        th(style="width: 35%") Ejemplos de cuentas
                        th(style="width: 35%") Lectura financiera
                    tbody
                      tr
                        td Activo
                        td Corriente
                        td Caja, bancos, cuentas por cobrar, inventarios
                        td Recursos disponibles o realizables en el corto plazo
                      tr
                        td Activo
                        td No corriente
                        td Propiedad, planta y equipo, intangibles, inversiones de largo plazo
                        td Recursos usados para operar o generar beneficios futuros
                      tr
                        td Pasivo
                        td Corriente
                        td Proveedores, impuestos por pagar, obligaciones financieras de corto plazo
                        td Compromisos exigibles en el corto plazo
                      tr
                        td Pasivo
                        td No corriente
                        td Créditos de largo plazo, obligaciones financieras no corrientes
                        td Compromisos con vencimiento superior al corto plazo
                      tr
                        td Patrimonio
                        td Recursos propios
                        td Capital social, reservas, utilidades acumuladas, resultado del periodo
                        td Participación de los propietarios en la empresa
            //- FinTabla
      p.mb-5(data-aos="fade-left") En la siguiente figura se presenta cómo se organizan los activos, pasivos y patrimonio dentro del estado de situación financiera, verificando que el total de activos sea igual a la suma del pasivo y el patrimonio.            
      .row.justify-content-center.mb-5
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 1.
            span Estructura del estado de situación financiera
          .row.bg-color-12
            figure.p-4
                img(src='@/assets/curso/temas/t2/img12.png', alt='La figura presenta la estructura del estado de situación financiera, organizado en activo, pasivo y patrimonio. El activo muestra los recursos de la empresa, clasificados en corrientes y no corrientes; el pasivo reúne las obligaciones con terceros, según su exigibilidad; y el patrimonio refleja la participación de los propietarios. Finalmente, se evidencia el equilibrio de la ecuación contable: activo igual a pasivo más patrimonio.' style="width:900px").m-auto
      Separador
      //- Inicio Tema2.7
      .row
        #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.7 Estado de resultados
      p.mb-5(data-aos="fade-left") El estado de resultados presenta el desempeño económico de la empresa durante un periodo, al comparar ingresos, costos y gastos. Su análisis permite identificar utilidad o pérdida, evaluar la generación de ganancias, controlar gastos y apoyar decisiones sobre precios, costos y eficiencia operativa. La estructura del estado de resultados se presenta a continuación:          
      .row.justify-content-center.mb-5
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 7.
            span Estructura práctica del estado de resultados
          .tabla-a
            table
              thead
                tr
                  th(style="width: 30%") Concepto
                  th(style="width: 50%") Qué representa
                  th(style="width: 20%") Ejemplo
              tbody
                tr
                  td Ingresos operacionales
                  td Ventas o servicios generados por la actividad principal
                  td $ 120.000.000
                tr
                  td Menos costo de ventas
                  td Costo de los bienes vendidos o servicios prestados
                  td $ 72.000.000
                tr
                  td Utilidad bruta
                  td Resultado después de cubrir el costo directo
                  td $ 48.000.000
                tr
                  td Menos gastos operacionales
                  td Gastos de administración y ventas
                  td $ 26.000.000
                tr
                  td Utilidad operacional
                  td Resultado de la actividad principal
                  td $ 22.000.000
                tr
                  td Menos gastos financieros e impuestos
                  td Intereses, impuestos u otros conceptos
                  td $ 7.000.000
                tr
                  td Utilidad neta
                  td Resultado final del periodo
                  td $ 15.000.000
      p(data-aos="fade-left") El ejemplo refleja que la empresa vendió $120.000.000 y obtuvo una utilidad neta de $15.000.000. Esto significa que, después de cubrir costos, gastos, intereses e impuestos, conserva una ganancia equivalente al resultado final del periodo. La secuencia del estado de resultados es la siguiente:
      //- Linea de tiempo
      .row.justify-content-center(data-aos="fade-left")
        .col-lg-8
          PasosA.color-acento-contenido.mb-4(tipo="n")
            .row.align-items-center
              .col-12.col-lg
                h4 Ingresos operacionales
                p Son las ventas o ingresos por servicios.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta06_1.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta06_2.png').img125
              .col-12.col-lg.text-start
                h4 Menos: Costo de ventas
                p Son las mercancía vendida o costo del servicio
            .row.align-items-center
              .col-12.col-lg
                h4 Utilidad bruta
                p Es el resultado que se obtiene al restar el costo de ventas a los ingresos operacionales.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta06_3.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta06_4.png').img125
              .col-12.col-lg.text-start
                h4 Menos: Gastos operacionales
                p Son los siguientes:
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-dollar-sign.me-3
                    span Gastos de administración
                  li.d-flex
                    .fas.fa-dollar-sign.me-3
                    span Gastos de ventas
            .row.align-items-center
              .col-12.col-lg
                h5 Utilidad operacional
                p Es el resultado que se obtiene después de descontar los gastos operacionales a la utilidad bruta.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta06_5.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta06_6.png').img125
              .col-12.col-lg.text-start
                h4 Menos: Gastos financieros e impuestos
                p Corresponden a los intereses, costos de financiación y obligaciones tributarias que disminuyen el resultado antes de obtener la utilidad neta o pérdida neta.
            .row.align-items-center
              .col-12.col-lg
                h4 Utilidad neta o pérdida neta
                p El estado de resultados presenta cómo los ingresos se transforman en utilidad o pérdida del periodo.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta06_7.png').img125            
      //- Linea de tiempo      
      Separador
      //- Inicio Tema2.8
      .row
        #t_2_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.8 Estado de cambios en el patrimonio	
      p(data-aos="fade-left") El estado de cambios en el patrimonio presenta las variaciones de las cuentas patrimoniales durante un periodo. Permite explicar aumentos o disminuciones por aportes, utilidades, pérdidas, reservas, distribución de utilidades o retiros autorizados. Los movimientos frecuentes que aumentan y disminuyen el patrimonio son:
      //- Inicio Accordion
      .bg--img_03.mt-3
        .row.justify-content-center
          .col-lg-3 
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img13.png", style="width: 100%;").m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Aporte de socios")
                  p.mb-4 Aumenta el patrimonio, ya que representa nuevos recursos entregados por los propietarios a la empresa. Por ejemplo, un nuevo aporte de capital por $ 20.000.000.
              .row(titulo="Utilidad del periodo")
                  p.mb-4 Aumenta el patrimonio, porque corresponde al resultado positivo generado por la empresa durante el periodo. Por ejemplo, una utilidad neta de $ 15.000.000.
              .row(titulo="Pérdida del periodo")
                  p.mb-4 Disminuye el patrimonio, debido a que refleja un resultado negativo de la operación. Por ejemplo, una pérdida neta de $ 8.000.000.
      //- Fin Accordion
      //- Inicio Accordion
      .bg--img_03.mt-3
        .row.justify-content-center          
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Constitución de reservas")
                  p.mb-4 Reclasifica valores dentro del patrimonio, ya que traslada parte de las utilidades a una reserva. Por ejemplo, el traslado de utilidad a reserva legal.
              .row(titulo="Distribución de utilidades")
                  p.mb-4 Disminuye el patrimonio, porque implica la entrega de dividendos o participaciones a los socios.
              .row(titulo="Ajustes de periodos anteriores")
                  p.mb-4 Pueden aumentar o disminuir el patrimonio, según el efecto de la corrección autorizada de errores contables.
          .col-lg-3 
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img14.png", style="width: 100%;").m-auto
      //- Fin Accordion
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-sm-9.col-lg-5.order-1.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t2/img15.png' style="width: 600px").m-auto        
        .col-12.col-lg-7.order-2(data-aos="fade-right")
          p Para comprender esta dinámica, se desarrolla el siguiente ejemplo:          
          .bg-color-10.p-4
            p.fw-bold Ejemplo:            
            .tabla-a.mb-4
              table
                thead
                  tr
                    th.text-center Concepto
                    th.text-center Valor
                tbody
                  tr
                    td Patrimonio inicial
                    td $ 90.000.000
                  tr
                    td Más aporte de socios
                    td $ 20.000.000
                  tr
                    td Más utilidad del periodo
                    td $ 15.000.000
                  tr
                    td Menos distribución de utilidades
                    td $ 5.000.000
                  tr
                    td Patrimonio final
                    td $ 120.000.000                    
            p.mb-0 El patrimonio pasó de $ 90.000.000 a $ 120.000.000 por efecto de nuevos aportes, utilidad generada y distribución parcial de utilidades.          
          
      Separador
      //- Inicio Tema2.9
      .row
        #t_2_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.9 Estado de flujos de efectivo
      p(data-aos="fade-left") El estado de flujos de efectivo indica las entradas y salidas de dinero durante un periodo. Permite analizar la disponibilidad de efectivo y clasificar su origen en actividades de operación, inversión y financiación. Las tres actividades utilizadas para clasificar los movimientos de efectivo son:
      //- Inicio Tarjetas
      .row.justify-content-center.mt-5.mb-5(data-aos="fade-left")
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.border.overflow-hidden.shadow.bg-color-9
            figure.mb-0
              img(src='@/assets/curso/temas/t2/tarjeta07_1.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Operación
                p.mb-0 Incluye las actividades principales del negocio. Sus entradas pueden provenir del recaudo de clientes, de ventas de contado o cobros de ingresos adicionales, mientras que sus salidas corresponden a pagos a proveedores, nómina, servicios e impuestos.
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.border.overflow-hidden.shadow.bg-color-9
            figure.mb-0
              img(src='@/assets/curso/temas/t2/tarjeta07_2.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Inversión
                p.mb-0 Incluye la compra o venta de activos de largo plazo. Sus entradas pueden originarse en la venta de maquinaria, equipos o vehículos, mientras que sus salidas corresponden a la compra de equipos, maquinaria o software e inversiones.
        .col-12.col-sm-9.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.rounded-3.h-100.border.overflow-hidden.shadow.bg-color-9
            figure.mb-0
              img(src='@/assets/curso/temas/t2/tarjeta07_3.png', alt='').w-100
            .p-4.d-flex.flex-column.justify-content-between.h-100
              div
                h4.card-title.text-center.mb-4 Financiación
                p.mb-0 Incluye los recursos obtenidos o pagados a socios y acreedores financieros. Sus entradas pueden provenir de préstamos bancarios, nuevas obligaciones financieras o aportes de socios, mientras que sus salidas corresponden al pago de créditos, intereses, dividendos y reembolso a socios.
          //- Fin Tarjetas
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-sm-9.col-lg-5.order-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t2/img16.png' style="width: 600px").m-auto        
        .col-12.col-lg-7.order-1(data-aos="fade-right")
          p Para mayor comprension del tema, se presenta el siguiente ejemplo:
          .bg-color-10.p-4
            p.fw-bold Ejemplo:            
            .tabla-a.mb-4
              table
                thead
                  tr
                    th.text-center Actividad
                    th.text-center Flujo neto
                tbody
                  tr
                    td Operación
                    td $ 18.000.000
                  tr
                    td Inversión
                    td -$ 10.000.000
                  tr
                    td Financiación
                    td $ 5.000.000
                  tr
                    td Aumento neto de efectivo
                    td $ 13.000.000
            p.mb-0 La empresa generó efectivo por su operación, invirtió en activos y recibió financiación adicional. El resultado final fue un aumento de efectivo de $ 13.000.000.
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t2/img17.png' style="width: 600px").m-auto
        .col-12.col-lg-7.order-2.order-lg-2.p-4(data-aos="fade-right")
          p La fórmula de flujo neto de efectivo es la siguiente:
          p.bg-color-7.p-3.d-inline-block Flujo neto de efectivo = Operación + Inversión + Financiación
          p La clasificación del flujo de efectivo permite identificar de dónde proviene el dinero y en qué se utiliza dentro de la empresa.      
      Separador
      //- Inicio Tema2.10
      .row
        #t_2_10.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.10 Notas básicas a los estados financieros	
      p(data-aos="fade-left") Las notas a los estados financieros complementan los informes principales al explicar políticas contables, criterios de medición y detalles de cuentas relevantes. Su función es aclarar información que no se observa completamente en las cifras, como vencimientos, garantías, deterioros, restricciones o compromisos. La información frecuente en notas a los estados financieros es la siguiente:
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
                              img(src='@/assets/curso/temas/t2/tarjeta08_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Políticas contables
                            p.text-start Pueden incluir criterios de reconocimiento, medición y presentación. Su utilidad para el análisis consiste en comprender cómo se preparó la información financiera.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta08_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Efectivo y bancos
                            p.text-start Pueden incluir restricciones, conciliaciones o saldos relevantes. Su utilidad es evaluar la disponibilidad real de recursos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta08_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Cuentas por cobrar
                            p.text-start Pueden incluir vencimientos, deterioro y clientes relevantes. Su utilidad es analizar la recuperación de cartera.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta08_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Inventarios
                            p.text-start Pueden incluir método de valoración, deterioro u obsolescencia. Su utilidad es revisar la calidad y rotación de inventarios.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta08_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Propiedad, planta y equipo
                            p.text-start Puede incluir costo, depreciación, vida útil y adquisiciones. Su utilidad es evaluar la inversión y el uso de activos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta08_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Obligaciones financieras
                            p.text-start Pueden incluir plazos, tasas, garantías y vencimientos. Su utilidad es analizar el endeudamiento y la presión de pagos.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t2/img18.png', style="width: 500px", data-aos="zoom-in").m-auto
              //- Fin Carrusel
      p.mb-5(data-aos="fade-left") En la siguiente tabla se presentan ejemplos de notas que ayudan a interpretar mejor los estados financieros.
      //- Inicio Tabla
      .row.justify-content-center.mb-5
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 8.
            span  Información frecuente en notas a los estados financieros
          .tabla-a
            table
              thead
                tr
                  th(style="width: 20%") Tipo de nota
                  th(style="width: 45%") Información que puede incluir
                  th(style="width: 35%") Utilidad para el análisis
              tbody
                tr
                  td Políticas contables
                  td Criterios de reconocimiento, medición y presentación
                  td Comprender cómo se preparó la información
                tr
                  td Efectivo y bancos
                  td Restricciones, conciliaciones o saldos relevantes
                  td Evaluar disponibilidad real de recursos
                tr
                  td Cuentas por cobrar
                  td Vencimientos, deterioro, clientes relevantes
                  td Analizar recuperación de cartera
                tr
                  td Inventarios
                  td Método de valoración, deterioro, obsolescencia
                  td Revisar calidad y rotación de inventarios
                tr
                  td Propiedad, planta y equipo
                  td Costo, depreciación, vida útil, adquisiciones
                  td Evaluar inversión y uso de activos
                tr
                  td Obligaciones financieras
                  td Plazos, tasas, garantías y vencimientos
                  td Analizar endeudamiento y presión de pagos
                tr
                  td Ingresos, costos y gastos
                  td Detalles de partidas significativas
                  td Interpretar el resultado del periodo
      .row.mb-5.justify-content-center.align-items-center
        .col-12.col-sm-9.col-lg-5.order-1.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t2/img19.png' style="width: 600px").m-auto        
        .col-12.col-lg-7.order-2(data-aos="fade-right")
          p A continuación, se desarrollará el siguiente ejemplo:
          .bg-color-10.p-4
            p.fw-bold Ejemplo:              
            p.mb-0 La cuenta de clientes por $ 35.000.000 incluye $ 8.000.000 con vencimiento superior a 90 días. La empresa adelanta gestión de cobro y evaluará el deterioro correspondiente al cierre del periodo.<br><br>
            p Esta nota permite interpretar que no toda la cartera tiene el mismo nivel de recuperación y que una parte puede afectar la liquidez de la empresa.
      Separador
      //- Inicio Tema2.11
      .row
        #t_2_11.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.11 Errores frecuentes en la presentación de estados financieros                                        
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img20.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Antes de presentar estados financieros, es necesario verificar que la información esté completa, clasificada y sustentada. La revisión de soportes, saldos, clasificaciones, totales y notas evita errores que puedan afectar la interpretación financiera y la toma de decisiones.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/imagen-titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Errores de clasificación
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La clasificación incorrecta de cuentas puede afectar la interpretación de la liquidez, el endeudamiento, la rentabilidad y la estructura financiera. A continuación, se presentan errores comunes, sus efectos y acciones recomendadas antes de emitir los estados financieros.
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                 img(src='@/assets/curso/temas/t2/tarjeta09_1.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Clasificar mal activos y pasivos
                p Ocurre cuando, por ejemplo, se registra un crédito a largo plazo como pasivo corriente. Este error distorsiona la lectura de la liquidez y de las obligaciones próximas, por lo que se recomienda revisar los vencimientos y separar correctamente las partidas corrientes y no corrientes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta09_2.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 No conciliar bancos
                p Se presenta cuando los saldos de bancos se informan sin compararlos con los extractos bancarios. Como consecuencia, el efectivo disponible puede quedar sobrestimado o subestimado. Para evitarlo, se recomienda elaborar la conciliación bancaria antes del cierre.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta09_3.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Omitir cuentas por pagar
                p Ocurre cuando no se registran facturas recibidas de proveedores. Este error hace que el pasivo aparezca menor al real, por lo que se recomienda revisar facturas pendientes, órdenes de compra y estados de cuenta.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta09_4.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 No actualizar inventarios
                p Se presenta cuando se usan saldos del sistema sin realizar conteo físico. Esto puede generar errores en el valor del activo y en el costo de ventas. Por ello, se recomienda comparar el inventario físico con los registros contables.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta09_5.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Mezclar gastos personales y empresariales
                p Ocurre cuando se registran compras personales como gastos del negocio. Este error reduce indebidamente la utilidad del periodo, por lo que se recomienda separar las operaciones personales de las empresariales.
      //- Fin Slideshow
      p La elaboración de estados financieros básicos requiere organizar, clasificar y validar la información contable para reflejar la realidad económica de la empresa. Cuando esta información es completa, verificable y confiable, permite presentar informes financieros útiles para el análisis y la toma de decisiones.
</template>

<script>
export default {
  name: 'Tema2',
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
