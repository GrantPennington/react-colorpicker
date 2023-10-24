/*
    Functions for converting RGB/RGBA to Hex/HexA and vice versa
*/

export const convertRGBtoHex = (rgb) => {
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb.substr(4).split(")")[0].split(sep);

    // convert %s to 0-255
    for (let R in rgb) {
        let r = rgb[R]
        if(R.indexOf("%") > -1){
            rgb[R] = Math.round(r.substr(0,r.length - 1) / 100 * 255)
        }
    }

    let r = (+rgb[0]).toString(16), g = (+rgb[1]).toString(16), b = (+rgb[2]).toString(16); // converting to strings

    if(r.length===1){
        r = "0" + r; // add 0 to front of hex value
    }
    if(g.length===1){
        g = "0" + g; // add 0 to front of hex value
    }
    if(b.length===1){
        b = "0" + b; // add 0 to front of hex value
    }

    return "#"+r+g+b; // return the hex from rgb
}

/* 
    RGB(A) includes a 4th value, alpha 
    alpha can be a decimal, percentage, or integer
*/
export const convertRGBAtoHexA = (rgba) => {
    // split "rgba(0,0,0,1)" -> ["0","0","0","1"]
    let sep = rgba.indexOf(",") > -1 ? "," : " "
    rgba = rgba.substr(5).split(")")[0].split(sep)

    if(rgba.indexOf("/") > -1){
        rgba.splice(3,1)
    }
    for (let R in rgba){
        let r = rgba[R]
        if(R.indexOf("%") > -1) {
            let p = r.substr(0,r.length - 1) / 100
            if(R < 3) {
                rgba[R] = Math.round(p * 255)
            } else {
                rgba[R] = p
            }
        }
    }
    let r = (+rgba[0]).toString(16), 
        g = (+rgba[1]).toString(16), 
        b = (+rgba[2]).toString(16),
        a = Math.round(+rgba[3] * 255).toString(16)
    
    if(r.length===1){
        r = "0" + r;
    }
    if(g.length===1){
        g = "0" + g;
    }
    if(b.length===1){
        b = "0" + b;
    }
    if(a.length===1){
        a = "0" + a;
    }
    
    return "#" + r + g + b + a;
}