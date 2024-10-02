import ClientPage from "./ClientPage"

export async function generateMetadata({ params }) {

    return {
        title: 'Sign In to Akaar Admin',
    }
}


export default async function SignIn() {

    return (
        <>
            <ClientPage />
        </>
    )
}