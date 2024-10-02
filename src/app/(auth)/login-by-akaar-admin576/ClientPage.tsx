import { redirect } from "next/navigation";
import { getSession, login, logout } from "../../../../utils/libs/libs";
// import axios from "axios";

export default async function Page() {
  const session = await getSession();

  const response = await fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify({ user, password }),
  });

  // const data = response.json();
  console.log(response);


  return (
    <section>
      <form
        action={async (formData) => {
          "use server";
          await login(formData);
          redirect("/login-by-akaar-admin576");
        }}
      >
        <input type="email" placeholder="Email" />
        <br />
        <button type="submit">Login</button>
      </form>
      <form
        action={async () => {
          "use server";
          await logout();
          redirect("/");
        }}
      >
        <button type="submit">Logout</button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
}