import {useRouter} from "next/router";

export const getServerSideProps = async ({query}) => {

    const res = await fetch(
        `https://sakaconsulting.co.id/api/client.php?act=detail&id=${query.data}`
    );
    const data = await res.json();

    return {
        props: {client: data},
    };
};

const ClientDetail = ({client}) => {

    return (
        <div>
            <p>{client[0]["id"]}</p>
            <p>{client[0]["client_name"]}</p>
            <p>{client[0]["client_email_1"]}</p>
            <p>{client[0]["client_mobile"]}</p>
        </div>
    );
};

export default ClientDetail;
