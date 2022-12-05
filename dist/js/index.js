document.getElementById('calculateButton').addEventListener('click', function () {
    const sum = Number(document.getElementById('sum').value);
    const tip = Number(document.getElementById('tip').value);
    const calculatedTip = calculateTip(sum, tip);
    const total = sum + calculatedTip;
    const numberOfFriends = Number(document.getElementById('numberOfFriends').value);
    const friendSum = divideTotal(total, numberOfFriends);
    showDividedSum(friendSum);
});
function calculateTip(sum, tip) {
    const total = sum * tip;
    return total;
}
function divideTotal(total, numberOfFriends) {
    const sumDivided = total / numberOfFriends;
    return sumDivided;
}
function showDividedSum(sum) {
    document.getElementById('showSum').classList.toggle('hide');
    document.getElementById('inputForm').classList.toggle('hide');
    document.getElementById('friendSum').innerHTML = sum + ' kr';
}
