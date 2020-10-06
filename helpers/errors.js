module.exports = {
    serverError:function(res){res.writeHead(500, {});res.end('Internal Server Error')}
}