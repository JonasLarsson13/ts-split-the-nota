document.getElementById('calculateButton').addEventListener('click', function() {
    const sum: number = Number((<HTMLInputElement>document.getElementById('sum')).value);
    const tip: number = Number((<HTMLInputElement>document.getElementById('tip')).value);
    const calculatedTip: number = calculateTip(sum, tip);
    const total: number = sum + calculatedTip;
    const numberOfFriends: number = Number((<HTMLInputElement>document.getElementById('numberOfFriends')).value);
    const friendSum: number = divideTotal(total, numberOfFriends);
    showDividedSum(friendSum);
});

function calculateTip(sum: number, tip: number): number {
    const total = sum * tip;
    return total;
}

function divideTotal(total: number, numberOfFriends: number): number {
    const sumDivided = total / numberOfFriends;
    return sumDivided;
}

function showDividedSum(sum: number) {
    document.getElementById('showSum').classList.toggle('hide');
    document.getElementById('inputForm').classList.toggle('hide');
    document.getElementById('friendSum').innerHTML = sum + ' kr';
}