<template>
  <div id="BakingReport">
    <div id="chart" ref="chart"></div>
  </div>
</template>

<script>
import { fetchTemperature } from '@/apis'
import echarts from 'echarts'

export default {
  name: 'BakingReport',
  data () {
    return {
      chart: null
    }
  },
  methods: {
    fetchData () {
      return fetchTemperature('N1F03815300982').then(data => {
        const series = []
        for (var i = 1; i <= 16; i++) {
          series.push({
            name: `实时温度${i}`,
            type: 'line',
            data: data.map(item => item[`st${i}`])
          })
          series.push({
            name: `巡检温度${i}`,
            type: 'line',
            data: data.map(item => item[`xt${i}`])
          })
        }
        return {
          title: {
            text: '烘烤曲线图'
          },
          tooltip: {},
          legend: {},
          dataZoom: [
            {
              type: 'slider',
              show: true,
              xAxisIndex: [0],
              start: 97,
              end: 100
            }
          ],
          xAxis: {
            data: data.map(item => item.createDate)
          },
          yAxis: {
            max: value => value.max + (value.max - value.min) / 4,
            min: value => value.min - (value.max - value.min) / 4
          },
          series
        }
      })
    },
    renderChart () {
      this.fetchData().then(options => this.chart.setOption(options))
    }
  },
  mounted () {
    this.chart = echarts.init(this.$refs.chart)
    this.renderChart()
  }
}
</script>

<style lang="css" scoped>
#chart {
  width: 100%;
  height: 500px;
}
</style>
