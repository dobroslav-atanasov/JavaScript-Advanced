function validateRequest(request) {
    const errorMessage = 'Invalid request header: Invalid';
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    let uriPattern = /^(\*|[A-Za-z\d\.]+)$/g;
    let messagePattern = /^[^<>\\&'"]*$/g;

    if (!methods.includes(request.method) || !request.hasOwnProperty('method')) {
        throw new Error(`${errorMessage} Method`);
    }

    if (!uriPattern.test(request.uri) || !request.hasOwnProperty('uri')) {
        throw new Error(`${errorMessage} URI`);
    }

    if (!versions.includes(request.version) || !request.hasOwnProperty('version')) {
        throw new Error(`${errorMessage} Version`);
    }

    if (!messagePattern.test(request.message) || !request.hasOwnProperty('message')) {
        throw new Error(`${errorMessage} Message`);
    }

    return request;
}

console.log(validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));

console.log(validateRequest({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));

console.log(validateRequest({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}));