const generateGrid = (radius) => {
  for(let q = -radius; q <= radius; ++q){
      for(let r = -radius; r <= radius; ++r){
          for(let s = -radius; s <= radius; ++s){
              if (Math.round(q + r + s) === 0){
                  insert(new Hex(q,r,s), new Tile())
              }                    
          }
      }
  }
}

export { generateGrid }