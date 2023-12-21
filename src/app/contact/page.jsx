import Link from "next/link";

export const metadata = {
    title: "Contact Page",
};

const ContactPage = () => {
    return (
        <>
            <Link href="/">← Home</Link>
            <h1>Contact Page</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia officiis sit modi error doloremque pariatur temporibus sapiente asperiores, nobis cumque, neque architecto corporis sunt
                voluptates minus magnam, iste veritatis et.
            </p>
        </>
    );
};

export default ContactPage;
