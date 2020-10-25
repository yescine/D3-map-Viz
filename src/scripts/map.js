import * as d3 from 'd3';
import {feature} from 'topojson'
const svg = d3.select('.face')
const heigth = +svg.attr('height')
const width = +svg.attr('width')

const projection = d3.geoMercator();
// const projection = d3.geoNaturalEarth1();

const pathGenerator = d3.geoPath().projection(projection)
d3.json('https://unpkg.com/world-atlas@1.1.4/world/110m.json')
  .then(data=>{
    const countries = feature(data,data.objects.countries)

    const paths = svg.selectAll('path')
      .data(countries.features)

    paths.enter().append('path').attr('d',d=>pathGenerator(d))
      .style('fill','green')
      .style('stroke','black')
  })
