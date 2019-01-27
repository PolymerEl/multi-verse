export var name = "multi-verse";
export var version = "2.2.0";
export var description = "polymer elements for multivariate analysis (depend on crossfilter, universe, reductio, multichart and multiverse)";
export var license = "MIT";
export var author = {"name":"Christophe Geiser"};
export var authors = ["christophe.geiser <christophe.geiser@e-smile.org>"];
export var homepage = "webcomponents.org/polymerEl/multi-verse";
export var main = "multi-verse-import.html";
export var repository = "https://github.com/polymerEl/multi-verse";
export var keywords = ["web-component","web-components","d3.js","charts","multivariate","dashboard","polymer","crossfilter","universe","Polymer","analytics","mapping","dataviz"];
export var dependencies = {"universe":"git://github.com/PolymerEl/universe.git","crossfilter2":"git://github.com/PolymerEl/crossfilter.git","reductio":"git://github.com/PolymerEl/reductio.git#strict-mode"};
export var devDependencies = {"babel-cli":"^6.22.2","babel-preset-es2015":"^6.22.0","babel-preset-latest":"^6.22.0","babelify":"^7.3.0","json2module":"0.0","package-preamble":"0.0","rimraf":"2","rollup":"0.66","rollup-plugin-ascii":"0.0","rollup-plugin-commonjs":"*","rollup-plugin-json":"*","rollup-plugin-license":"^0.7.0","rollup-plugin-node-resolve":"3","rollup-plugin-terser":"1"};
export var scripts = {"build-universe":"rollup -c rollup.universe.config.js","pre-build":"rimraf build && mkdir build &&  json2module package.json > build/package.js ","prepublish":"npm run pre-build  && npm run build-universe","postpublish":"git push && git push --tags"};
