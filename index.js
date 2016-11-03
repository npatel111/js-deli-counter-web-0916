// var katzDeli = [];

function takeANumber(katzDeliLine, new_person) {
  katzDeliLine.push(new_person)
  return `Welcome, ${new_person}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var first_person = katzDeliLine.shift()
    return `Currently serving ${first_person}.`
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var string = "The line is currently: "
    var i = 0
    for (i = 0; i <line.length; i++) {
      string += `${i+1}. ${line[i]}, `
    }
    return string.slice(0, -2)
  }

}
