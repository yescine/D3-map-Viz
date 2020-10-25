import * as d3 from 'd3'
import { axisBottom, axisLeft } from 'd3'

const svg = d3.select('.face')
const heigth = +svg.attr('height')
const width = +svg.attr('width')
const margin = {top:40,bottom:40,left:40,right:40}
const innerWidth = width-margin.left -margin.right
const innerHeight = heigth-margin.top -margin.bottom

const dataPop = [
  {country:'china',Population:1400},
  {country:'india',Population:1200},
  {country:'usa',Population:360},
  {country:'indonesia',Population:220},
  {country:'pakistan',Population:190},
  {country:'brazil',Population:160}
];

const xValue = d=>d.Population
const yValue = d=>d.country

const xScale = d3.scaleLinear()
  .domain([0,d3.max(dataPop,xValue)])
  .range([0,innerWidth])

const yScale = d3.scaleBand()
  .domain(dataPop.map(yValue))
  .range([0, innerHeight])
  .padding(0.1)

const g = svg.append('g')
  .attr('transform',`translate(${margin.left},${margin.top})`)

g.append('g').call(axisLeft(yScale))
  // .selectAll('.domain, .tick line').remove()

g.append('g').call(axisBottom(xScale).tickSize(-innerHeight))
  .attr('transform',`translate(${0},${innerHeight})`)

g.selectAll('rect')
  .data(dataPop)
  .enter()
  .append('rect')
  .attr('y',d=>yScale(yValue(d)))
  .attr('width',d=>xScale(xValue(d)))
  .attr('height',yScale.bandwidth())
  .attr('fill','steelblue')

g.append('text')
  .attr('y',-20)
  .text('world population plot');
