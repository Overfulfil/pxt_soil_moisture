//% weight=0 color=#3CB371 icon="\uf140" block="Indoor Environment Sensor"

namespace indenvsensor {

    //% blockId="readMoisture" block="Soil Moisture"
    //% blockGap=2 weight=79
    export function readMoisture(): number {
   	pins.i2cWriteNumber(81,0,NumberFormat.Int8LE,false)
	return (pins.i2cReadNumber(81, NumberFormat.UInt16BE, false))    
    }

}
