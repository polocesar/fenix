import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  data: () => ({
    chartdata: {
      labels: ['Livres', 'Ocupados', 'Manutenção'],
      datasets: [
        {
          backgroundColor: ['#1cc88a', '#e74a3b', '#f6c23e'],
          data: [34, 27, 8]
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