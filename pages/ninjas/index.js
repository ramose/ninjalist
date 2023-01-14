import styles from "../../styles/Ninjas.module.css";
import mainStyles from "../../styles/Home.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
    // const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await fetch(
        "https://sakaconsulting.co.id/api/client.php?act=list"
    );
    const data = await res.json();

    return {
        props: {ninjas: data},
    };
};

const Ninjas = ({ninjas}) => {
    return (
        <div>
            <div className="contentBar">
                <div className="contentBarTitle">
                    <h1>Ninjas</h1>
                </div>
                <Link href="/client/add/" className={mainStyles.btn}>
                    Add
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>No. HP</th>
                        <th>Email 1</th>
                        <th>Email 2</th>
                        <th></th>
                    </tr>
                </thead>
                {ninjas.map((data) => (
                    // <a className={styles.single}>
                    <tbody key={data.id}>
                        <tr>
                            <td>{data.client_name} </td>
                            <td>{data.client_mobile} </td>
                            <td>{data.client_email_1} </td>
                            <td>{data.client_email_2} </td>
                            <td>
                                <Link
                                    href={`/client/detail/${data.id}`}
                                    className={mainStyles.btn}
                                >
                                    Detail
                                </Link>{" "}
                            </td>
                        </tr>
                    </tbody>
                    // </a>
                ))}
            </table>
        </div>
    );
};

export default Ninjas;
