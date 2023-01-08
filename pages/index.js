import Head from "next/head";
import Image from "next/image";
import {Inter} from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../comps/NavBar";
import Link from "next/link";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <div>
            <h1 className={styles.title}>Homepage</h1>
            <p className={styles.text}>
                Exercitation adipisicing et adipisicing dolor dolore est ullamco
                velit. Consectetur commodo eu minim nulla culpa labore. Est in
                anim dolore sit amet aliqua sunt dolor incididunt quis sint est
                fugiat nostrud. Eiusmod ipsum est nostrud amet velit nostrud.
            </p>
            <p className={styles.text}>
                Exercitation adipisicing et adipisicing dolor dolore est ullamco
                velit. Consectetur commodo eu minim nulla culpa labore. Est in
                anim dolore sit amet aliqua sunt dolor incididunt quis sint est
                fugiat nostrud. Eiusmod ipsum est nostrud amet velit nostrud.
            </p>
            <Link href="/ninjas" className={styles.btn}>
              See Ninjas 
            </Link>
        </div>
    );
}
