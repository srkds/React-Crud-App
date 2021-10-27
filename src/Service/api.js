import axios from 'axios';

const url = "http://127.0.0.1:3003/users"

// get list of all users from db
export const getUsers = async (id) => {
    id = id || ''
    return await axios.get(`${url}/${id}`,{
        headers:{
            'Access-Control-Allow-Origin': '*',
        },
        proxy: {
          host: '104.236.174.88',
          port: 3128
        }
    })

    // return fetch(url)
    // .then(response => response.json)
    // .catch(error => console.log(error))
}

// insert user into db
export const addUser = async (user) => {
    return await axios.post(url, user)
}

export const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`,user)
}

export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`)
}
