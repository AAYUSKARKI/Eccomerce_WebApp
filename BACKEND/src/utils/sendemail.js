import nodemailer from "nodemailer";

export const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "alexkarki2060@gmail.com",
                pass: "freefire2060@gmail.com",
            },
        });
        await transporter.sendMail({
            from: "kU6rD@example.com",
            to: email,
            subject: subject,
            text: text,
        });
    } catch (error) {
        console.log(error);
    }
}

