import * as d3 from 'd3';
import {feature} from 'topojson'

const svg = d3.select('.face')
const heigth = +svg.attr('height')
const width = +svg.attr('width')
let countryName=null;

// const projection = d3.geoMercator();
const projection = d3.geoNaturalEarth1();
const pathGenerator = d3.geoPath().projection(projection)

const g = svg.append('g');
g.append('path')
    .attr('class', 'sphere')
    .attr('d', pathGenerator({type: 'Sphere'}));

svg.call(d3.zoom().on('zoom', () => {
  g.attr('transform', d3.event.transform);
}));

  d3.tsv('https://unpkg.com/world-atlas@1.1.4/world/50m.tsv')
    .then(tsvData => {
      countryName = tsvData.reduce((accumulator, d) => {
      accumulator[d.iso_n3] = d.name;
      return accumulator;
      }, {})
});

d3.json('https://unpkg.com/world-atlas@1.1.4/world/110m.json')
  .then(data=>{
    const countries = feature(data,data.objects.countries)

    const paths = g.selectAll('path')
      .data(countries.features)
      .enter().append('path')
        .attr('class', 'country')
        .attr('title','hello')
        .attr('d',d=>pathGenerator(d))
      .append('title')
        .text(d=>countryName[d.id])
  })
