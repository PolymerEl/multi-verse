[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://webcomponents.org/element/polymerEl/multi-verse)
[![Netlify Status](https://api.netlify.com/api/v1/badges/c20b8b59-7a10-4ec4-ba14-a984583d04e3/deploy-status)](https://app.netlify.com/sites/multi-verse/deploys)

# \<multi-verse\>

Polymer elements for graphical and interactive multivariate analysis (built on top of [universe](https://github.com/crossfilter/universe)) and using [d3.js V5](https://github.com/d3/d3), [crossfilter](https://github.com/crossfilter/crossfilter) and [reductio](https://github.com/crossfilter/reductio) under the hood.

Charts are rendered using [multi-chart](https://github.com/PolymerEl/multi-chart), or [multi-geo](https://github.com/PolymerEl/multi-chart) for geo charts like choropleth. They are data driven and reactive, providing instant feedback to user interaction.

## Motivation
Multi-verse is inspired by [dc.js](http://dc-js.github.io/dc.js/), a charting library  allowing highly efficient exploration on large multi-dimensional datasets. 

While `dc.js` requires users to code some of the chart logic and data intagration in javascript, `multi-verse` proposes a markup-first approach. This allows to build complex dashboard simply by combining `multi-verse` and `multi-chart` web components together, as illustrated in the example below. 

`Multi-verse` components leverages `crossfilter` and are responsible for data management (aggregation, sorting, grouping), while `multi-charts` components render processed data in customizable visulalizations.

## Demo and API
Demo and API are now available on [netlify](https://multi-verse.netlify.com/).

## Simple Example

```html
 <!-- Load the data -->
 <multi-csv url="flight.csv" data="{{data}}"></multi-csv>

 <!-- Start a multi-verse -->
 <multi-verse id="universe" data="[[data]]" universe="{{universe}}">

   <!-- Group the data by distances, exposes grouped data under 'data' attribute -->
   <multi-group universe="[[universe]]" data="{{data-chart-distance}}" group-by="distances">

     <!-- Render this group in a bar chart-->
     <multi-verse-bar title="distance" data="[[data-chart-distance]]">
     </multi-verse-bar>
    
   </multi-group>

   <!-- Group the data by day-->
   <multi-group universe="[[universe]]" data="{{data-chart-day}}" group-by="day">

     <!-- Render this group in a pie chart-->
     <multi-verse-pie title="day (pie)" data="[[data-chart-day]]" color-scale="{{colorScale}}" width="{{width}}">

       <!-- Add a color scale legend to the chart -->
       <multi-legend legend chart-width="[[width]]" scale="[[colorScale]]" position="top-right">
       </multi-legend>
      
     </multi-verse-pie>
    
   </multi-group>
  
 </multi-verse>
```

## Example of multi-verse in a interactive dashboard

<div>
  <img src="https://raw.githubusercontent.com/PolymerEl/multi-verse/master/images/analysis.png" width="600"></img>
</div>

## Other advanced example - available from the demo

<div>
  <img src="https://raw.githubusercontent.com/PolymerEl/multi-verse/master/images/dash.png" width="600"></img>
</div>






