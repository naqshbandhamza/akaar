import ProfilePage from "./profilepage"
import { getSession } from "../../../../utils/libs/libs";
import { headers } from "next/headers"
import { redirect } from "next/navigation";

export async function generateMetadata({ params }) {

    return {
        title: 'Akaar Creative Agency | fastest growing video production company',
    }
}


export default async function Page() {
    const session = await getSession();
    if (session === null)
        redirect("/login-by-akaar-admin576");

    // let data = await fetch('http://localhost:3000/api/users', {
    //     method: 'POST',
    //     headers: headers(),
    // });
    // let usersdata = await data.json()

    //usersdata={usersdata?.data ? usersdata.data : []}
    return (
        <ProfilePage session={session} />
    )
}