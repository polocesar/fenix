import { Pie } from 'vue-chartjs'

export default {
  props: ['data', 'config'],
  extends: Pie,
  mounted () {
    this.renderChart(this.data, this.config);
  }
}