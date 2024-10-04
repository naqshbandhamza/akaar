import ProfilePage from "./profilepage"
import { getSession, logout } from "../../../../utils/libs/libs";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }) {

    return {
        title: 'Akaar Creative Agency | fastest growing video production company',
    }
}


export default async function SignIn() {
    const session = await getSession();

    if (session === null)
        redirect("/login-by-akaar-admin576");

    return (
        <>
            <form
                action={async () => {
                    "use server";
                    await logout();
                    redirect("/login-by-akaar-admin576");
                }}
            >
                <button type="submit">Logout</button>
            </form>
            <ProfilePage user={session} />
        </>
    )
}