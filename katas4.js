const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

function showResults(n) {
    let p = document.createElement("p")
    p.textContent = JSON.stringify(n)
    document.body.appendChild(p)
}

function titleKata(n) {
    h2 = document.createElement("h2")
    h2.textContent = `Kata ${n}`
    document.body.appendChild(h2)
}

function kata1() {
    titleKata(1)
    showResults(gotCitiesCSV.split(","))
    return gotCitiesCSV.split(",")
}

kata1();

function kata2(){
    titleKata(2)
    showResults(bestThing.split(" "))
    return bestThing.split(" ")
}

kata2()

function kata3(){
    titleKata(3)
    let newStr = gotCitiesCSV.split(",")
    showResults(newStr.join("; "))
    return newStr.join("; ")
}

kata3()

function kata4() {
    titleKata(4)
    showResults(lotrCitiesArray.join(", "))
    return lotrCitiesArray.join(", ")
}

kata4()

function kata5() {
    titleKata(5)
    let newArr = []
    for (let i = 0; i < 5; i++) {
        newArr.push(lotrCitiesArray[i])
    }
    showResults(newArr)
    return newArr
}

kata5()

function kata6() {
    titleKata(6)
    let newArr = lotrCitiesArray.slice(-5)
    showResults(newArr)
    return newArr
}

kata6()

function kata7() {
    titleKata(7)
    let newArr = lotrCitiesArray.splice(2,3)
    showResults(newArr)
    return newArr
}

kata7()

function kata8() {
    titleKata(8)
    removed = lotrCitiesArray.splice(lotrCitiesArray.indexOf("Rohan"), 1)
    showResults(lotrCitiesArray)
    return lotrCitiesArray
}

kata8()

function kata9() {
    titleKata(9)
    removed = lotrCitiesArray.splice(lotrCitiesArray.indexOf("Dead Marshes") + 1, lotrCitiesArray.length)
    showResults(lotrCitiesArray)
    return lotrCitiesArray
}

kata9()

function kata10() {
    titleKata(10)
    lotrCitiesArray.splice(lotrCitiesArray.indexOf("Gondor") + 1, 0, "Rohan")
    showResults(lotrCitiesArray)
    return lotrCitiesArray
}

kata10()

function kata11() {
    titleKata(11)
    lotrCitiesArray.splice(lotrCitiesArray.indexOf("Dead Marshes"), 1,"Deadest Marshes")
    showResults(lotrCitiesArray)
    return lotrCitiesArray
}

kata11()

function kata12() {
    titleKata(12)
    removed = bestThing.slice(0, 14)
    showResults(removed)
    return removed
}

kata12()

function kata13() {
    titleKata(13)
    removed = bestThing.slice(-12)
    showResults(removed)
    return removed
}

kata13()

function kata14() {
    titleKata(14)
    removed = bestThing.slice(22, 37)
    showResults(removed)
    return removed
}

kata14()

function kata15() {
    titleKata(15)
    substr = bestThing.substring(bestThing.length - 12)
    showResults(substr)
    return substr
}

kata15()

function kata16() {
    titleKata(16)
    substr = bestThing.substring(22, 37)
    showResults(substr)
    return substr
}

kata16()

function kata17() {
    titleKata(17)
    let rem = lotrCitiesArray.pop()
    showResults(lotrCitiesArray)
    kata18(rem)
    return lotrCitiesArray
}

kata17()

function kata18(elm) {
    titleKata(18)
    lotrCitiesArray.push(elm)
    showResults(lotrCitiesArray)
    return lotrCitiesArray
}

function kata19() {
    titleKata(19)
    rem = lotrCitiesArray.shift()
    showResults(lotrCitiesArray)
    kata20(rem)
    return lotrCitiesArray
}

kata19()

function kata20(elm) {
    titleKata(20)
    lotrCitiesArray.unshift(elm)
    showResults(lotrCitiesArray)
    return lotrCitiesArray
}



function titleBonusKata(n) {
    h2 = document.createElement("h2")
    h2.textContent = `Kata Bonus ${n}`
    document.body.appendChild(h2)
}

function kataBonus1() {
    titleBonusKata(1)
    let arr = bestThing.split(" ")
    showResults(arr.indexOf("only"))
    return arr.indexOf("only")
}

kataBonus1()

function kataBonus2() {
    titleBonusKata(2)
    let arr = bestThing.split(" ")
    showResults(arr.indexOf("bit"))
    return arr.indexOf("bit")
}

kataBonus2()
function kataBonus3() {
    titleBonusKata(3)
    let arr = gotCitiesCSV.split(",")
    let newArr = []
    let column
    for (let i = 0; i < arr.length; i++){
        column = arr[i]
        for(let j = 0; j < column.length; j++){
            if(column[j] === column[j+1]){
                newArr.push(arr[i])
                break
            }
        }
    }
    showResults(newArr)
    return newArr
}

kataBonus3()

function kataBonus4() {
    titleBonusKata(4)
    let newArr = []

    for (let i = 0; i < lotrCitiesArray.length; i++){
        if(lotrCitiesArray[i].endsWith("or")) {
            newArr.push(lotrCitiesArray[i])
        }
    }
    showResults(newArr)
    return newArr
}

kataBonus4()

function kataBonus5 () {
    titleBonusKata(5)
    let arr = bestThing.split(" ").filter(function(elm) {
        return elm.startsWith("b")
    })
    showResults(arr)
    return arr
}

kataBonus5()

function kataBonus6 () {
    titleBonusKata(6)
    if(lotrCitiesArray.includes("Mirkwood")) {
        showResults("Sim")
        return "Sim"
    }
    showResults("Não")
    return "Não"
}

kataBonus6()

function kataBonus7 () {
    titleBonusKata(7)
    if(lotrCitiesArray.includes("Hollywood")) {
        showResults("Sim")
        return "Sim"
    }
    showResults("Não")
    return "Não"
}

kataBonus7()

function kataBonus8 () {
    titleBonusKata(8)
    showResults(lotrCitiesArray.indexOf("Mirkwood"))
    return lotrCitiesArray.indexOf("Mirkwood")
}

kataBonus8()

function kataBonus9 () {
    titleBonusKata(9)
    arr = lotrCitiesArray.filter((str) => {
        if (/\s/.test(str)) {
            return str
        }
    })
    showResults(arr)
    return arr
}

kataBonus9()

function kataBonus10 () {
    titleBonusKata(10)
    showResults(lotrCitiesArray.reverse())
    return lotrCitiesArray.reverse()
}

kataBonus10()

function kataBonus11 () {
    titleBonusKata(11)
    showResults(lotrCitiesArray.sort())
    return lotrCitiesArray.sort()
}

kataBonus11()

function kataBonus12 () {
    titleBonusKata(12)
    arr = lotrCitiesArray.sort(function(a, b){
    if (a.length < b.length) return -1
    if (a.length > b.length) return 1
    return 0
    })
    showResults(arr)
    return arr
}

kataBonus12()