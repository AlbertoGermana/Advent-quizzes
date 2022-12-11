
moves = moves.split('\n').map((c,i) => {
    let a = c.replace("move ", "").split('from');
    let b = a[1].split("to")
    return {
        to_move: Number(a[0].trim()),
        from: Number(b[0].trim()),
        to: Number(b[1].trim())
    }
})

for (let i = 0; i < moves.length; i++) {
    const m = moves[i];

    let column = boxes_pos[m.from -1];
    let to_move = m.to_move;
    let remain_length = column.length - to_move;

    let result = column.slice(-to_move).split("").reverse().join("")
    column = column.substring(0, remain_length)

    boxes_pos[m.from -1] = column; // what remain of prev column
    boxes_pos[m.to -1] = boxes_pos[m.to -1] + result; // what is in new column
}

let result = "";
for (let i = 0; i < boxes_pos.length; i++) {
    const col = boxes_pos[i];
    result += col.substring( col.length -1)
}
console.log("Day5 - part1: -->", result)