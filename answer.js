// question-1
function describeValue(value) {
    let valueType = typeof value;

    if (value) {
        return `${valueType} | truthy`;
    } else {
        return `${valueType} | falsy`;
    }
}

// question-2
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

// question-3
function validateUsername(userName) {
    if (userName.length < 4) {
        return 'Too Short';
    } else if (userName.includes(' ')) {
        return 'No Space Allowed';
    } else if (userName.toLowerCase().includes('admin')) {
        return 'Reserved Word';
    } else {
        return 'Available';
    }
}
