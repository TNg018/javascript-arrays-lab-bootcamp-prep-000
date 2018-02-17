var kitten = ["Milo", "Otis", "Garfield"];

function removeFirstKitten() {
  return kitten.slice(1)
kitten = kitten.slice(1)
}

function removeLastKitten() {
return kitten.slice(0, kitten.length-1)
kitten = kitten.slice(0, kitten.length-1)
}

function prependKitten(name) {
return ["Arnold", ...kittens]
}

function appendKitten(name) {
  return [...kittens, name]
}

function destructivelyAppendKitten(kitten) {
  kitten.push("Ralph")
  return kitten
}
