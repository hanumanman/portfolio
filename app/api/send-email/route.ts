import { getEnv } from "@/lib/utils";
import nodemailer from "nodemailer";

const user = getEnv("GMAIL_USER");
const pass = getEnv("GMAIL_PASS");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user,
    pass,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;

    const mailOptions = {
      from: user,
      to: user,
      subject: "HOLY FUCK? Somebody actually used your shit",
      html: `<p>
  Check it out: ${name} (${email}) sent you an email with subject
  <span style="font-weight: bold">${subject}</span> and the following content:
</p>
<p>${message}</p>`,
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email:", error);
          reject(error);
        } else {
          console.log("Email sent:", info.response);
          resolve(info);
        }
      });
    });

    return Response.json({
      status: "success",
      data: body,
    });
  } catch (error) {
    return Response.json(
      {
        status: "error",
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 400 },
    );
  }
}
