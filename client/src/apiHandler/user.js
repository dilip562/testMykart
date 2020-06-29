
export const getUsers = () => {
    return fetch("/api/user/data",{
        method: "GET",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        }
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const uploadImgPath = async(path) => {
    return fetch("api/user/uploadimg",{
        method: "POST",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(path)
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const getAllImages = () => {
    return fetch("/api/user/allimgs",{
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}