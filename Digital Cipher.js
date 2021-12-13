//digital_chipher
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","o",'p','q','r','s','t','u','v','w','x','y','z'];

const digi_cipher = function (message, key){
    let ts =text.split('')
    let set = []
    let data = data.string

    for(let i = 0; i < ts.lenght; i++){
        if (i%2 = 0){
            set.push({x: ts[i], y = ts[i+1] })

        }    
    }
    set.forEach(variable) => {
        let variable_x = pass (letter.x)
        let variable_y = pass (letter.y)
        let newvariable_x = new RegExp (variable_x)
        let newvariable_y = new RegExp (variable_y)

        data = data.replace(newvariable_x).replace(newvariable_y, variable_x).replace(0, variable_y)
    }
    return data
}