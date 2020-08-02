input.onButtonPressed(Button.A, function () {
    serial.writeLine("/")
    basic.pause(100)
    serial.writeNumber(totScore)
    if (gever == 1) {
        basic.showIcon(IconNames.Yes)
    }
})
radio.onReceivedString(function (receivedString) {
    speler = receivedString
    basic.showString(speler.charAt(0))
})
radio.onReceivedValue(function (name, value) {
    basic.clearScreen()
    basic.showString(speler.charAt(0))
    gever = 0
    if (name == "totScore") {
        totScore = value
        serial.writeLine("/")
        basic.pause(100)
        serial.writeNumber(totScore)
    }
    if (name == "gever") {
        gever = value
        if (gever == 1) {
            basic.showIcon(IconNames.Yes)
        }
    }
})
let gever = 0
let speler = ""
let totScore = 0
serial.redirect(
SerialPin.P0,
SerialPin.P16,
BaudRate.BaudRate9600
)
basic.pause(100)
radio.setGroup(1)
totScore = 0
speler = ""
