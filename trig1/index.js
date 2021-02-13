module.exports = async function (context, req) {
    responseMessage="Testing one two three"
    context.res = {        
        body: responseMessage
    };
}

