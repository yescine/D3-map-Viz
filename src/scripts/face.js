import * as d3 from 'd3';

const svg = d3.select('.face')
const heigth = +svg.attr('height')
const width = +svg.attr('width')
const g = svg.append('g')
  .attr('transform',`translate(${width/2},${heigth/2})`)

const circle = g
  .append('circle')
  .attr('r',heigth/3)
  .attr('fill','yellow')
  .attr('stroke','black')

const eyeSpacing = 60
const eyeRadius = heigth/20
const eyeG = g.append('g')
  .attr('transform',`translate(0,${eyeSpacing -120})`)

const eyeLeft = eyeG
  .append('circle')
  .attr('r',eyeRadius)
  .attr('cx',- eyeSpacing)

const eyeRight = eyeG
  .append('circle')
  .attr('r',eyeRadius)
  .attr('cx',+ eyeSpacing)
const eyeBrowWidth = 60
const leftEyeBrow = eyeG.append('rect')
  .attr('x',-eyeSpacing - eyeBrowWidth/2)
  .attr('y', -50)
  .attr('width',eyeBrowWidth)
  .attr('height',eyeBrowWidth/4)

const rightEyeBrow = eyeG.append('rect')
  .attr('x',eyeSpacing - eyeBrowWidth/2)
  .attr('y', -50)
  .attr('width',eyeBrowWidth)
  .attr('height',eyeBrowWidth/4)

const mouth = g.append('path')
  .attr('d',d3.arc()({
    innerRadius:80,
    outerRadius:100,
    startAngle:Math.PI/2,
    endAngle:Math.PI*3/2
  }))

export default svg
