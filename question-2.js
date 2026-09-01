function getDayType(day) {
    let dayName = day.toLowerCase();

    switch (dayName) {
        case 'friday':
        case 'saturday':
            return 'Weekend';
            break;
        case 'thursday':
        case 'wednesday':
        case 'tuesday':
        case 'monday':
        case 'sunday':
            return 'Working Day';
            break;
        default:
            return 'Invalid Day';
    }
}

console.log(getDayType('sunday'));
