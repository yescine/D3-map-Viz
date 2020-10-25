import * as d3 from 'd3';

const svg = d3.select('svg')
const heigth = +svg.attr('height')
const width = +svg.attr('width')

const circle = svg
  .append('circle')
  .attr('r',heigth/3)
  .attr('cx',width/2)
  .attr('cy',heigth/2)
  .attr('fill','yellow')
  .attr('stroke','black')

const eyeSpacing = 60
const eyeLeft = svg
  .append('circle')
  .attr('r',heigth/20)
  .attr('cx',width/2 - eyeSpacing)
  .attr('cy',heigth/2 - eyeSpacing + 10)
  .attr('fill','black')

const eyeRight = svg
  .append('circle')
  .attr('r',heigth/20)
  .attr('cx',width/2 + eyeSpacing)
  .attr('cy',heigth/2 - eyeSpacing + 10)
  .attr('fill','black')

const g = svg.append('g')
  .attr('transform',`translate(${width/2},${heigth/2})`)
const mouth = g.append('path')
  .attr('d',d3.arc()({
    innerRadius:80,
    outerRadius:100,
    startAngle:Math.PI/2,
    endAngle:Math.PI*3/2
  }))

export default svg
