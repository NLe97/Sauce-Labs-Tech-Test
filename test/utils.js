const brokenCapabilities = {
    'browserName': 'googlechrome',
    'platformName': 'macOS 10.15',
    'browserVersion': 'latest',
    'sauce:options': {
        'name': 'Broken Google Search',
        'screenResolution': '1280x960'
    }
};

const workingCapabilities = {
    'browserName': 'googlechrome',
    'platformName': 'macOS 10.15',
    'browserVersion': 'latest',
    'sauce:options': {
        'name': 'Guinea-Pig Sauce',
        'screenResolution': '1280x960',
        // task IV
        //Sauce Labs Capabilities for tags need to be added under sauce:options
        "tags": ["task1","task2","task3"]
    },


};

exports.brokenCapabilities = brokenCapabilities
exports.workingCapabilities = workingCapabilities