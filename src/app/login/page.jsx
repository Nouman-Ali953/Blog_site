"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";
const Login = () => {
  const { data, status } = useSession();
  console.log(data, status);
  const router = useRouter();
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "unauthenticate") {
    router.push("/");
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.socialButton} onClick={() => signIn("google")}>
            sign in with Google
          </div>
          <div className={styles.socialButton} onClick={()=>signIn('github')}>sign in with Github</div>
          <div className={styles.socialButton}>sign in with Facebook</div>
        </div>
      </div>
    </>
  );
};

export default Login;
