import Link from "next/link";
import mainStyles from "../../../styles/Home.module.css";

const AddClient = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const firstName = e.target.first.value;
        const lastName = e.target.last.value;
        const email1 = e.target.email1.value;
        const email2 = e.target.email2.value;
        const phone = e.target.phone.value;
        // const lastName = document.querySelector('#last').value
        // const email1 = document.querySelector('#email1').value
        // const email2 = document.querySelector('#email2').value
        // const phone = document.querySelector('#phone').value

        const data = {
            first_name: firstName,
            last_name: lastName,
            email1: email1,
            email2: email2,
            phone: phone,
        };

        console.log(data);

        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json;charset=utf-8"},
            body: JSON.stringify(data),
        };

        await fetch(
            "https://sakaconsulting.co.id/api/client.php",
            requestOptions
        ).then((response) => response.json().then((data) => console.log(data)));

        // if (!name) {
        //   alert('Please enter your name.')
        //   return false
        // }

        // if (rollNumber.length < 3) {
        //   alert('Roll Number should be at least 3 digits long.')
        //   return false
        // }
    };

    return (
        <div>
            <div className="contentBar">
                <div className="contentBarTitle">
                    <h1>New Client</h1>
                </div>
                <Link href="" className={mainStyles.btn}>
                    Save
                </Link>
            </div>
            <form onSubmit={handleSubmit} method="post">
                <label htmlFor="first">First name:</label>
                <br />
                <input type="text" id="first" name="first" required />
                <br />
                <label htmlFor="last">Last name:</label>
                <br />
                <input type="text" id="last" name="last" required />
                <br />
                <label htmlFor="email1">Email 1:</label>
                <br />
                <input type="email" id="email1" name="email1" required />
                <br />
                <label htmlFor="email2">Email 2:</label>
                <br />
                <input type="email" id="email2" name="email2" />
                <br />
                <label htmlFor="phone">Phone:</label>
                <br />
                <input type="text" id="phone" name="phone" />
                <br />
                <button type="submit">Submit</button>
                <br />
            </form>
        </div>
    );
};

export default AddClient;
