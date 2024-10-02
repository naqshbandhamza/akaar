"use client"
// import axios from "axios";
import { useEffect, useState } from "react";

async function getolas() {
    return new Promise(async (resolve, reject) => {
        const response = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({ user, password }),
        });
        let rejs = await response.json()
        resolve(rejs)
    })
}

export default async function Page({ user }) {
    const [usero, setUser] = useState(user.oks)

    useEffect(() => {
        if (usero) {
            if (usero.role === "admin")
                console.log("logged in as admin")

            getolas().then((d) => {
                console.log(d);
            })
        }
    }, [usero])

    return (
        <section>
            <h1>welcome to the profile page {usero.username}</h1>
        </section>
    );
}