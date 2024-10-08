radio.onReceivedNumber(function (receivedNumber) {
    meter.show(radio.receivedPacket(RadioPacketProperty.SignalStrength))
})
radio.setGroup(19)
basic.forever(function () {
    radio.sendNumber(1)
})
