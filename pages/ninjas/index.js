import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: {ninjas: data},
    };
};

const Ninjas = ({ninjas}) => {
    return (
        <div>
            <h1>Ninjas</h1>
            {ninjas.map((data) => (
                <a className={styles.single}>
                <div key={data.id}>
                    <h3>{data.name} </h3>
                </div>
                </a>
            ))}
        </div>
    );
};

export default Ninjas;
