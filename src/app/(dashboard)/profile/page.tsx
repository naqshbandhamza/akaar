import ProfilePage from "./profilepage"
import { getSession } from "../../../../utils/libs/libs";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }) {

    return {
        title: 'Akaar Creative Agency | fastest growing video production company',
    }
}


export default async function SignIn() {
    const session = await getSession();

    if(session===null)
        redirect("/login-by-akaar-admin576");

    return (
        <>
            <ProfilePage user={session} />
        </>
    )
}