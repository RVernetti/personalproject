import { Hex } from './old/hex'

/**
 * Generates a circular grid of hexagonal coordinates from a given radius
 * @param radius - The grid radius from the origin [0,0,0] to the border
 * @returns {array} The circular grid of hexagonal coordinates
 */
const generateCircularGrid = (radius: number) => {
    let grid = []
    for(let q = -radius; q <= radius; ++q){
        for(let r = -radius; r <= radius; ++r){
            for(let s = -radius; s <= radius; ++s){
                if (Math.round(q + r + s) === 0){
                    grid.push(new Hex(q,r,s))
                }                    
            }
        }
    }
    return grid
}

export { generateCircularGrid }
