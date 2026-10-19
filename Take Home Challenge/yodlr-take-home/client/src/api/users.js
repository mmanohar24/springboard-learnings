const API_BASE = "http://localhost:3001";

export async function createUser(userData) {
    const response = await fetch(`${API_BASE}/users`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(userData)
    })


    if (!response.ok) {
        throw new Error(`Signup failed: ${response.status}`)
    }

    return response.json()
}

export async function getUsers() {
    const response = await fetch(`${API_BASE}/users`);

    if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.status}`)
    }

    return response.json();
}

export async function updateUser(user) {
    const response = await fetch(`${API_BASE}/users/${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        throw new Error(`Failed to update user: ${response.status}`)
    }

    return response.json();
}

export async function deleteUser(user) {
    const response = await fetch(`${API_BASE}/users/${user.id}`, {
        method: 'DELETE'
    });

    if (!response.ok) {
        throw new Error(`Failed to delete user: ${response.status}`)
    }

    // return response.json();
}