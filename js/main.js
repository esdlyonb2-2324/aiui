const button = document.querySelector(".prompt")
const responses = document.querySelector(".responses")
const prompt = document.querySelector(".promptText")
const loader = document.querySelector(".wait")


const chat =  ()=>{
    p = document.createElement("p")
    span = document.createElement("span")
    span.classList.add("meHead")
    span.innerText = "Me : "
    p.appendChild(span)
    p.appendChild(document.createElement("br"))

    p.append(prompt.value)
    p.classList.add("me")
    responses.appendChild(p)
    loader.classList.add("loading")
    let rawBody = {
        model:"openchat",
        prompt:prompt.value,
        stream:false
    }
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Origin", "https://chat-jean-michel.esdlyon.dev");
    let body = JSON.stringify(rawBody)
    let method = "POST"

    let params = {
        method:method,
        headers:headers,
        body:body,
        mode:'cors'
    }


    fetch("https://ai.esdlyon.dev/code",params).then(response=>response.json())
        .then((data)=>{
            p = document.createElement("p")
            span = document.createElement("span")
            span.classList.add("jmHead")
            span.innerText = "Jean-Michel :"
            p.appendChild(span)
            p.appendChild(document.createElement("br"))
            p.append(data.response)

            p.classList.add("jeanmichel")
            responses.appendChild(p)
            prompt.value = ""
            loader.classList.remove("loading")
            responses.scrollTop = responses.scrollHeight;
        })


}



button.addEventListener("click",chat)

