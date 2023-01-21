import { Hex } from './hex.js'
import { Tile } from './tile.js'

const hash = (key) => typeof key === 'string' ? key : JSON.stringify(key)

export class Grid {
    constructor(radius){
        this.radius = radius
        this.size = 3*radius*(radius + 1) + 1
        this.map = new Map()
        this.generate()
    }
    // key as a Hex (cube) coordinates
    insert(key, value){
        this.map.set(hash(key), value)
    }
    search(key){
        return this.map.get(hash(key))
    }
    hasTile(key){
        return this.map.has(hash(key))
    }
    allKeys(){
        return this.map.keys()
    }
    allTiles(){
        return this.map.values()
    }
    remove(key){
        let deleted = this.map.get(hash(key))
        this.map.delete(hash(key))
        return deleted
    }
    generate(){
        for(let q = -this.radius; q <= this.radius; ++q){
            for(let r = -this.radius; r <= this.radius; ++r){
                for(let s = -this.radius; s <= this.radius; ++s){
                    if (Math.round(q + r + s) === 0){
                        this.insert(new Hex(q,r,s), new Tile())
                    }                    
                }
            }
        }
    }
}
