const mockResponse = {
    data: {
        results: [
            {
                name: { first: "Manoj", last: "Manoharan" },
                picture: { large: "https://randomuser.me/api/portraits/men/59.jpg" },
                login: { username: "manojmanoharan" }
            },
            {
                name: { first: "John", last: "Doe" },
                picture: { large: "https://randomuser.me/api/portraits/men/1.jpg" },
                login: { username: "johndoe" }
            },
            {
                name: { first: "Jane", last: "Smith" },
                picture: { large: "https://randomuser.me/api/portraits/women/1.jpg" },
                login: { username: "janesmith" }
            },
            {
                name: { first: "Alice", last: "Brown" },
                picture: { large: "https://randomuser.me/api/portraits/women/2.jpg" },
                login: { username: "alicebrown" }
            },
            {
                name: { first: "Bob", last: "Jones" },
                picture: { large: "https://randomuser.me/api/portraits/men/2.jpg" },
                login: { username: "bobjones" }
            }
        ]
    }
}


export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}