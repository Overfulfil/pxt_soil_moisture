//% weight=0 color=#3CB371 icon="\uf140" block="Soil Moisture Sensor"

namespace indenvsensor {

    //% blockId="readMoisture" block="Soil Moisture (0-4096)"
    //% blockGap=2 weight=79
    export function readMoisture(): number {
   	pins.i2cWriteNumber(81,0,NumberFormat.Int8LE,false)
	return (4096 - pins.i2cReadNumber(81, NumberFormat.UInt16BE, false))    
    }
	
    //% blockId="SoilTooDry" block="Soil too dry?"
    //% blockGap=2 weight=79
    export function SoilTooDry(): boolean {
   	pins.i2cWriteNumber(81,0,NumberFormat.Int8LE,false)
	if ((4096 - pins.i2cReadNumber(81, NumberFormat.UInt16BE, false)) < 100) 
		return ture    
    }

    //% blockId="SoilTooWet" block="Soil too Wet?"
    //% blockGap=2 weight=79
    export function SoilTooWet(): boolean {
   	pins.i2cWriteNumber(81,0,NumberFormat.Int8LE,false)
	if ((4096 - pins.i2cReadNumber(81, NumberFormat.UInt16BE, false)) > 3000) 
		return ture    
    }

}
