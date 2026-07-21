<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
</template>
<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión del proceso de elaboración, organización e interpretación de estados financieros básicos, mediante la identificación de cuentas, clasificación de la información contable, lectura del estado de situación financiera y estado de resultados, aplicación de análisis vertical y horizontal, cálculo de indicadores financieros y formulación de conclusiones para la toma de decisiones operativas.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Una empresa presenta activos por $ 180.000.000 y pasivos por $ 72.000.000 ¿Cuál es el patrimonio?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '$ 252.000.000',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '$ 252.000.000',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '$ 72.000.000',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '$ 108.000.000',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El patrimonio se calcula restando los pasivos a los activos: $ 180.000.000 - $ 72.000.000 = $ 108.000.000.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál situación representa mejor la función financiera dentro de una empresa?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Administrar recursos, analizar información y apoyar decisiones empresariales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Registrar únicamente facturas de venta y compra.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elaborar campañas para aumentar clientes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir solamente los precios de venta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La función financiera no se limita al registro contable; también analiza liquidez, rentabilidad, inversión, financiación y riesgos.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Una empresa obtiene utilidad, pero no tiene efectivo suficiente para pagar proveedores. ¿Qué aspecto financiero requiere mayor revisión?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rentabilidad bruta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Liquidez.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Patrimonio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Capital social.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál cuenta debe clasificarse como activo corriente?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuentas por cobrar a clientes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Maquinaria de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Obligaciones financieras de largo plazo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Capital social.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Las cuentas por cobrar se esperan recuperar en el corto plazo y forman parte de los activos corrientes.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál cuenta se presenta en el estado de resultados?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inventarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proveedores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Costo de ventas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Capital social.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El costo de ventas se relaciona con la operación del periodo y se presenta en el estado de resultados.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Una empresa tiene ventas por $ 150.000.000, costo de ventas por $ 90.000.000 y gastos por $ 35.000.000. ¿Cuál es la utilidad del periodo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '$ 25.000.000',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '$ 60.000.000',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '$ 115.000.000',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '$ 125.000.000',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La utilidad se obtiene restando costos y gastos a los ingresos: $ 150.000.000 - $ 90.000.000 - $ 35.000.000 = $ 25.000.000.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué estado financiero permite observar activos, pasivos y patrimonio en una fecha determinada?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estado de resultados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estado de flujos de efectivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estado de cambios en el patrimonio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estado de situación financiera.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué información permite explicar el estado de flujos de efectivo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La utilidad acumulada de los socios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las entradas y salidas de dinero clasificadas por operación, inversión y financiación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La composición del patrimonio únicamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La participación porcentual de cada cuenta del activo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El estado de flujos de efectivo muestra cómo se genera y utiliza el dinero durante un periodo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es una finalidad de las notas a los estados financieros?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Explicar políticas, saldos y detalles necesarios para comprender las cifras.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Presentar únicamente indicadores financieros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplazar el estado de resultados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar cuentas de bajo valor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Las notas complementan los estados financieros y ayudan a interpretar saldos, criterios y situaciones relevantes.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'En una hoja electrónica, ¿cuál fórmula permite calcular la variación absoluta entre dos periodos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Valor actual / Valor anterior × 100.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuenta / Total × 100.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Valor actual - Valor anterior.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Activo corriente - Pasivo corriente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La variación absoluta muestra el cambio en pesos entre un periodo y otro.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué permite calcular el análisis vertical?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El cambio de una cuenta entre dos periodos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La participación de una cuenta dentro de un total.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El número de días que tarda la cartera en recuperarse.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El rendimiento del patrimonio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El análisis vertical muestra cuánto representa una cuenta frente a una base, como ventas o total activo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'En el estado de resultados, si las ventas son $200.000.000 y el costo de ventas es $130.000.000, ¿qué porcentaje representa el costo de ventas sobre las ventas?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '35 %',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '53,8 %',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '70 %',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '65 %',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Se calcula dividiendo $ 130.000.000 entre $ 200.000.000 y multiplicando por 100.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué permite identificar el análisis horizontal?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La estructura de una cuenta dentro de un total.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La clasificación entre activo y pasivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La variación de una cuenta entre periodos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La naturaleza débito o crédito de una cuenta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Los ajustes de tiempo deben responder a evidencia, complejidad y viabilidad operativa, no a decisiones arbitrarias.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Una empresa tenía cuentas por cobrar por $ 20.000.000 en el año 1 y $ 32.000.000 en el año 2. ¿Cuál es la variación relativa?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '60 %',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '37,5 %',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '40 %',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '160 %',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La variación absoluta es $ 12.000.000. Al dividirla entre $ 20.000.000 y multiplicar por 100, se obtiene 60 %.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cuál indicador mide la capacidad general de pago de corto plazo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Margen neto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Razón corriente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Rotación de activos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Nivel de endeudamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La razón corriente relaciona el activo corriente con el pasivo corriente para evaluar respaldo de corto plazo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'Una empresa tiene activo corriente por $ 96.000.000, inventarios por $ 40.000.000 y pasivo corriente por $ 70.000.000. ¿Cuál es la prueba ácida?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '0,80',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '1,37',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '1,71',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '2,40',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Se calcula restando inventarios al activo corriente y dividiendo entre el pasivo corriente: ($ 96.000.000 - $ 40.000.000) / $ 70.000.000 = 0,80.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'Si una empresa tiene ventas a crédito por $ 180.000.000 y cuentas por cobrar promedio por $ 30.000.000, ¿cuántos días tarda aproximadamente en recuperar cartera?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '30 días.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '45 días.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '60 días.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '90 días.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La rotación de cartera es 6 veces. Luego, 360 / 6 = 60 días.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué indica un nivel de endeudamiento del 65 %?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que el 65 % de las ventas se convierte en utilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que la empresa recupera cartera cada 65 días.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que el patrimonio aumentó 65 %.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que el 65 % de los activos está financiado con obligaciones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El nivel de endeudamiento relaciona el total pasivo con el total activo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Una empresa presenta utilidad neta de $ 12.000.000 y ventas de $ 240.000.000. ¿Cuál es el margen neto?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '2 %',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '12 %',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '5 %',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '20 %',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El margen neto se calcula dividiendo la utilidad neta entre las ventas y multiplicando por 100.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál recomendación es más coherente si el análisis muestra aumento de cuentas por cobrar, disminución de efectivo y prueba ácida menor a 1?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar inventarios sin revisar ventas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fortalecer cobro de cartera y revisar condiciones de crédito.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Distribuir utilidades inmediatamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comprar activos fijos con nueva deuda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El problema se relaciona con liquidez y recuperación de cartera; por eso la acción debe enfocarse en recaudos y política de crédito.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
