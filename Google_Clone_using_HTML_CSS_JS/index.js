

const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
    if(event.code==="Enter"){
        search();
    }
})

function search(){
    const input = searchInput.value;
    window.location.href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TCrPyzC3MEgyYPRizUjNyckHAEjXBoM&q="+ input +"&oq="+ input +"&gs_lcrp=EgZjaHJvbWUqDwgBEC4YJxjJAxiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMg8IARAuGCcYyQMYgAQYigUyBggCEEUYQDISCAMQLhhDGMcBGNEDGIAEGIoFMg8IBBAAGEMYsQMYgAQYigUyDwgFEC4YQxixAxiABBiKBTISCAYQLhhDGIMBGLEDGIAEGIoFMhAIBxAAGIMBGJIDGLEDGIAE0gEJNTU2OGowajE1qAIAsAIA&sourceid=chrome&ie=UTF-8";

}
