import {useRouter} from "next/router";
import {useEffect} from "react";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 2000)
    }, []);

    return (
        <div>
            <h1>Page ini gak ono...</h1>
        </div>
    );
};

export default NotFound;
