//% weight=0 color=#3CB371 icon="\uf140" block="Soil Moisture Sensor"

namespace indenvsensor {

    //% blockId="readMoisture" block="Soil Moisture (0-4096)"
    //% blockGap=2 weight=79
    export function readMoisture(): number {
   	pins.i2cWriteNumber(81,0,NumberFormat.Int8LE,false)
	return (4096 - pins.i2cReadNumber(81, NumberFormat.UInt16BE, false))    
    }
	
    //% blockId="soilTooDry" block="Soil too dry?"
    //% blockGap=2 weight=79
    export function soilTooDry(): boolean {
   	pins.i2cWriteNumber(81,0,NumberFormat.Int8LE,false)
	if ((4096 - pins.i2cReadNumber(81, NumberFormat.UInt16BE, false)) < 100) {
		return true    
	}
	return false
    }

    //% blockId="soilTooWet" block="Soil too Wet?"
    //% blockGap=2 weight=79
    export function soilTooWet(): boolean {
   	pins.i2cWriteNumber(81,0,NumberFormat.Int8LE,false)
	if ((4096 - pins.i2cReadNumber(81, NumberFormat.UInt16BE, false)) > 3000) {
		return true    
	}
	return false
    }

    //% blockId="irrigate" block="Irrigate %io"
    //% io.defl=Pin.P0
    //% blockGap=2 weight=79
    export function irrigate(io:AnalogPin) {	
        pins.servoWritePin(io, 0)
        basic.pause(1000)
        pins.servoWritePin(io, 90)
        basic.pause(500)
    }
}
