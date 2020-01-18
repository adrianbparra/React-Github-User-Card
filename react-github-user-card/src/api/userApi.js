import React from "react";



export default userApi = (user) =>{

    return fetch(`https://api.github.com/${user}/`)
        .then(res => {
            console.log(res);

            return res.json().then(data => {
                return data
            })
        })
        .catch(err => {
            console.log(err)
        })





}