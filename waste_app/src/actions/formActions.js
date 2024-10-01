import axios from "axios";
import { redirect } from "react-router-dom";

export const signInUser = async (loginDetails) => {
    console.log(loginDetails);
}

export const signUpUser = async (signupDetails) => {
    try {
        const signupInfo = {
            address: signupDetails.address,
            email: signupDetails.email,
            name: signupDetails.name,
            password: signupDetails.password,
            phone: signupDetails.phone,
        }

        const {data} = await axios.post("http://localhost:3000/users", signupInfo);

        localStorage.setItem("user", JSON.stringify(data));

        return {
            success: true,
            url: "/user"
        };

    } catch (err) {
        console.error(err);
        throw err;
    }
}

export const authAction = async ({request}) => {
    const formData = await request.formData();
    const items = Object.fromEntries(formData);
    const formType = formData.get("formType");

    let response;

    if (formType === "signIn") {
        response = await signInUser(items);
        console.log(response);
    } else {
        response = await signUpUser(items);
        console.log(response);
    }
    if (response.success) return redirect(response.url);
}