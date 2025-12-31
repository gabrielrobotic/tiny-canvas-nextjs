type Pixel = {
    x: number
    y: number
    color: null
}

export class Canvas {
    width: number
    height: number
    pixels: Pixel[]

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
        this.pixels = []

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.pixels.push({ x, y, color: null })
            }
        }
    }
}
