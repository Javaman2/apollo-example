module.exports = async function (context, req) {
    //used on resume as an example microservice
    context.log('JavaScript HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage =`
    This data was returned from an Azure function coded in Javascript. It used an HTTP
    Trigger via a get request to return the data.
    `
    context.res = {
       // status: 200,
        body: responseMessage
    };
}