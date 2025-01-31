const emailChecker = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export default function useValidateCredentials({ name, email, password }) {
    if (!email) throw new Error("Please enter an email address.");
    if (!password) throw new Error("Please enter your password.");

    const isValidName = name ? name.length > 4 : true;
    if (!isValidName) throw new Error("Name must be at least 5 characters long.");

    const isValidEmail = emailChecker.test(email);
    if (!isValidEmail) throw new Error("Invalid email format.");

    // Password validation (modify as needed)
    const isValidPassword = password.length >= 6; // Minimum 6 characters for example
    if (!isValidPassword) throw new Error("Password must be at least 6 characters long.");

    return true;
}
