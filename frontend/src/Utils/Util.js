

export const baseUrl = "http://localhost:5000/api"


// export const getUserfromLocalStorage = localStorage.getItem("user")
// ? JSON.parse(localStorage.getItem("user")) : null
export const getUserfromLocalStorage = () => {
    const userString = localStorage.getItem("user");
    if (userString) {
        try {
            return JSON.parse(userString);
        } catch (error) {
            console.error("Error parsing user from localStorage:", error);
            return null; // or handle the error in another way
        }
    } else {
        return null; // or handle the case where "user" is not found in localStorage
    }
};
