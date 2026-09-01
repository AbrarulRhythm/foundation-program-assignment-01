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

console.log(validateUsername('Admin_Rahim'));
