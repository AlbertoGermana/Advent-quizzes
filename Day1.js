Array.prototype.max = function() {
    return Math.max.apply(null, this);
};

// DAY 1 - Part 1

var elves = elves.split("\n");
var calories_per_elf = [];
var elf_calories = 0;

for (let i = 0; i < elves.length; i++) {
    const food_calories = elves[i];
    
    if(food_calories != ""){
        elf_calories += parseInt(food_calories);
    }
    else{
        calories_per_elf.push(parseInt(elf_calories))
        elf_calories = 0;
    }
}


let max_cal_elf = calories_per_elf.max();
console.log("Day1 - part1: ->", max_cal_elf)


// DAY 1 - Part 2

var top_three_elves = [];
let max_cal_elf_elfo;
for (let i = 1; i <= 3; i++) {
    max_cal_elf_elfo = calories_per_elf.max();
    top_three_elves.push(max_cal_elf_elfo);
    var index = calories_per_elf.indexOf(max_cal_elf_elfo);
    calories_per_elf.splice(index, 1)
}

let top_three_elves_calories = top_three_elves.reduce((a, b) => {
    return parseInt(a) + parseInt(b);
});

console.log("Day1 - part2: ->", top_three_elves_calories)