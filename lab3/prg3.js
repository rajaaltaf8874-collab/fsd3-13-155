import http from 'http';
const server = http.createServer((req,res) => {
    res.write("hello client");
    res.end();

});
server.listen(3000, () => {
    console.log("port is running in 3000...")
})