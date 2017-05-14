// requires immutable.js cdn & babel transpiler
const mapInitial = Immutable.Map({a:1, b:2, c:3})
const mapFinal = mapInitial.set('b',25)
console.log(mapInitial.get('b'))
console.log(mapFinal.get('b'))

