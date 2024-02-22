

export const baseUrl = "http://localhost:5000/api"


export const getUserfromLocalStorage = localStorage.getItem("user")
? JSON.parse(localStorage.getItem("user")) : null

