import { redirect } from "next/navigation";
import { getSession, login, logout } from "../../../../utils/libs/libs";
// import axios from "axios";

export default async function Page() {
  // const session = await getSession();

  return (
    <section>
      <form
        action={async (formData) => {
          "use server";
          const res: any = await login(formData);
          const data = await res.json(); // Parse the JSON content

          if (data.message === "ok") {
            redirect("/profile");
          }
        }}
      >
        <input type="text" name="user" placeholder="Username" />
        <input type="password" name="pass" placeholder="Password" />
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
      {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
    </section>
  );
}