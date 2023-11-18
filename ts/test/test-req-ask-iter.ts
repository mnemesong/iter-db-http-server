import * as uralsAxios from "uralsjs-axios-ajax"

uralsAxios.node.sendAjaxSync({
    url: "http://localhost:3000/",
    method: "post",
    body: {
        data: {
            authToken: "asdlkmsa",
            reg: true
        }
    }
}, async (res) => { console.log(res.data) })