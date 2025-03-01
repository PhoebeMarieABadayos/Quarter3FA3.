function generateOrder() {
    let firstNum = Math.ceil(Math.random() * 20);
    let secondNum = Math.ceil(Math.random() * 20);
    let thirdNum = Math.ceil(Math.random() * 20) 
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let nthLetter = alphabet[firstNum - 1] || "Z";
    let highestValue = Math.max(firstNum, secondNum, thirdNum);
    let totalDuration = secondNum * thirdNum;
    let hours = Math.floor(totalDuration / 60);
    let minutes = totalDuration % 60;
    let order = "A customer whose name starts with " + "'" + nthLetter + "'" + " have ordered " + highestValue + " times in Papa's Pizzeria. In total, they have stayed in the restaurant for " + hours + " hours and " + minutes + " minutes (" + totalDuration + " minutes).";

    document.getElementById("order").innerText = order;
}
