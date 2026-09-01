function describeValue(value) {
    let valueType = typeof value;

    if (value) {
        return `${valueType} | truthy`;
    } else {
        return `${valueType} | falsy`;
    }
}

console.log(describeValue(null));
