import { Bar } from 'vue-chartjs'

export default {
  props: ['data', 'config'],
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ['Janeiro', 'Fevereiro', 'Março'],
      datasets: [
        {
          label: 'Internações',
          backgroundColor: '#faa61c',
          data: [12, 25, 43]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.data, this.config)
  }
}