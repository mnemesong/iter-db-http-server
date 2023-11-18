import * as uralsAxios from "uralsjs-axios-ajax"

let iter = ""

process.argv.forEach((v, i) => {
    if (v === "-i") {
        console.log("Iter = ", process.argv[i + 1])
        iter = process.argv[i + 1]
    }
})

uralsAxios.node.sendAjaxSync({
    url: "http://localhost:3000/",
    method: "post",
    body: {
        data: {
            authToken: "asdlkmsa",
            req: {
                iter: iter,
                req: { oneNew: true }
            }
        }
    }
}, async (res) => { console.log(res.data) })