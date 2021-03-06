import { getRequests,deleteRequest,fetchRequests } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

const  convertRequestToListElement=(request)=>{
    
    return `<li>           
    ${request.id} ${request.description}
    <button class="request__delete"
    id="request--${request.id}">
Delete
</button>
    </li>`
    
    
    
}

export const Requests = () => {
    const requests = getRequests()
    
    let html = `
        <ul>
        
        ${ requests.map(convertRequestToListElement).join("")
            }
            
        </ul>
        
    `

    return html
}
