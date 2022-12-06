let Day4_part1 = 0;
let Day4_part2 = 0;
sections = sections.split('\n');

for (let i = 0; i < sections.length; i++) {
    const sect = sections[i];

    let first_pair = sect.split(",")[0];
    let second_pair = sect.split(",")[1];

    let a0 = Number(first_pair.split("-")[0]);
    let a1 = Number(first_pair.split("-")[1]);

    let b0 = Number(second_pair.split("-")[0]);
    let b1 = Number(second_pair.split("-")[1]);

    if ( (a0 <= b0 && a1 >= b1)
    (b0 <= a0 && b1 >= a1)){
        Day4_part1++;
    }

    if (a0 <= b0 && a1 >= b0 || a0 <= b1 && a1 >= b1
     || b0 <= a1 && b1 >= a1 || b0 <= a0 && b1 >= a0){
        Day4_part2++;
    }

}
console.log("Day4 - part1: ->", Day4_part1)
console.log("Day4 - part2: ->", Day4_part2)

