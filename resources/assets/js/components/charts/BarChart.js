import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
      datasets: [
        {
          label: 'Internações',
          backgroundColor: '#faa61c',
          data: [40, 20, 30, 10, 5]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}