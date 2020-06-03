const http = new esayHttp();
let dataup = {
    name: "zhangsan",
    email: "123@456.com"
};
http.get("http://jsonplaceholder.typicode.com/users/2")
    .then((data) => console.log(data))
    .catch(err => console.log(err));


http.post("http://jsonplaceholder.typicode.com/users", dataup)
    .then(data => console.log(data))
    .catch(err => console.log(err))



http.put("http://jsonplaceholder.typicode.com/users/5", dataup)
    .then(data => console.log(data))
    .catch(err => console.log(err))


http.delete("http://jsonplaceholder.typicode.com/users/6")
    .then(data => console.log(data))
    .catch(err => console.log(err))