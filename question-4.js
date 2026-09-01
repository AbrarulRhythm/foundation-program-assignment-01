function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let minFare = 50;

    if (distance > 2) {
        let totalDistanceCharge = (distance - 2) * 15;
        minFare = totalDistanceCharge + minFare;
    }

    if (waitingMinutes > 0) {
        minFare += waitingMinutes * 2;
    }

    if (isNight) {
        minFare *= 1.2;
    }

    return minFare;
}

console.log(getCngFare(5, true, 10));
