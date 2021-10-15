const RandomUserAPI = {
    URL: 'https://randomuser.me/api/?results=32&seed=tern0004&nat=ca&format=json',

    getAllUsers: async () => {
        let response = await fetch(RandomUserAPI.URL)
        if (!response.ok) throw new Error(response.statusText)
        return response.json()
    }
}
export default RandomUserAPI