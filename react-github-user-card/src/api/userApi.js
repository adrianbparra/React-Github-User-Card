
//was not able to make it work out of app component

export const userApi = (user) =>{
    fetch(`https://api.github.com/users/${user}`)
        .then(res => {
            console.log(res);

            return res.json().then(data => {
                console.log(data)
                return data
            })
        })
        .catch(err => {
            console.log(err)
        })
        
}