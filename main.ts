let numero = 0
input.onGesture(Gesture.Shake, function () {
    numero = Math.randomRange(0, 100)
    basic.showNumber(numero)
})
