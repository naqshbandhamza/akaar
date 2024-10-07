import { redirect } from "next/navigation";
import { getSession, login, logout } from "../../../../utils/libs/libs";
import styles from "./styles/style.module.scss"

export default async function Page() {

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
        <div className={styles.screen1}>
          <svg className={styles.logo} version="1.1" width="300" height="300" viewBox="0 0 640 480">
            <g transform="matrix(3.31 0 0 3.31 320.4 240.4)">
              <circle style={{ stroke: "rgb(0, 0, 0)", strokeWidth: "0", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(61, 71, 133)", fillRule: "nonzero", opacity: "1" }} cx="0" cy="0" r="40"></circle>
            </g>
            <g transform="matrix(0.98 0 0 0.98 268.7 213.7)">
              <circle style={{ stroke: "rgb(0, 0, 0)", strokeWidth: "0", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255, 255, 255)", fillRule: "nonzero", opacity: "1" }} cx="0" cy="0" r="40"></circle>
            </g>
            <g transform="matrix(1.01 0 0 1.01 362.9 210.9)">
              <circle style={{ stroke: "rgb(0, 0, 0)", strokeWidth: "0", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255, 255, 255)", fillRule: "nonzero", opacity: "1" }} cx="0" cy="0" r="40"></circle>
            </g>
            <g transform="matrix(0.92 0 0 0.92 318.5 286.5)">
              <circle style={{ stroke: "rgb(0, 0, 0)", strokeWidth: "0", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255, 255, 255)", fillRule: "nonzero", opacity: "1" }} cx="0" cy="0" r="40"></circle>
            </g>
            <g transform="matrix(0.16 -0.12 0.49 0.66 290.57 243.57)">
              <polygon style={{ stroke: "rgb(0, 0, 0)", strokeWidth: "0", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255, 255, 255)", fillRule: "nonzero", opacity: "1" }} points="-50,-50 -50,50 50,50 50,-50 "></polygon>
            </g>
            <g transform="matrix(0.16 0.1 -0.44 0.69 342.03 248.34)">
              <polygon style={{ stroke: "rgb(0, 0, 0)", strokeWidth: "0", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255, 255, 255)", fillRule: "nonzero", opacity: "1" }} vectorEffect="non-scaling-stroke" points="-50,-50 -50,50 50,50 50,-50 "></polygon>
            </g>
          </svg>
          <div className={styles.email}>
            <label >Email Address</label>
            <div className={styles.sec2}>
              {/* <ion-icon name="mail-outline"></ion-icon> */}
              <input type="text" name="user" placeholder="username" />
            </div>
          </div>
          <div className={styles.password}>
            <label >Password</label>
            <div className={styles.sec2}>
              {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
              <input className={styles.pas} type="password" name="pass" placeholder="············" />
              {/* <ion-icon className="show-hide" name="eye-outline"></ion-icon> */}
            </div>
          </div>
          <button className={styles.login} type="submit">Login</button>
          {/* <div className="footer"><span>Sign up</span><span>Forgot Password?</span></div> */}
        </div>
      </form>
    </section>
  );
}