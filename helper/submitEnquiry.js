
"use server";

import nodemailer from "nodemailer";

export async function submitEnquiry({ name, phone }) {
  try {
    if (!name?.trim() || !phone?.trim()) {
      return {
        flag: 0,
        msg: "Name and mobile number are required.",
      };
    }

    if (!/^[0-9+\-\s]{10,15}$/.test(phone.trim())) {
      return {
        flag: 0,
        msg: "Please enter a valid mobile number.",
      };
    }

    const userMail = process.env.EMAIL_USER;
    const userPass = process.env.EMAIL_PASS;

    if (!userMail || !userPass) {
      throw new Error("Email configuration is missing.");
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: userMail,
        pass: userPass,
      },
    });

    const escapeHtml = (value) =>
      String(value).replace(/[&<>"']/g, (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char]);

    const mailOptions = {
      from: `Bhanwar Papad Udhyog <${userMail}>`,
      to: userMail,
      subject: `New Enquiry: ${name.trim()} - Bhanwar Papad Udhyog`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f8f8f8; padding: 20px;">
          <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 25px; border-radius: 8px;">
            <h2 style="color: #b45309;">New Enquiry Received</h2>

            <p>You have received a new enquiry from the Bhanwar Papad Udhyog website.</p>

            <hr />

            <p><b>Name:</b> ${escapeHtml(name.trim())}</p>
            <p><b>Mobile:</b> ${escapeHtml(phone.trim())}</p>

            <hr />

            <p style="font-size: 13px; color: #777;">
              This enquiry was submitted through the official Bhanwar Papad Udhyog website.
            </p>

            <p style="color: #b45309; font-weight: bold;">
              Bhanwar Papad Udhyog
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      flag: 1,
      msg: "Your enquiry has been submitted successfully. We will contact you shortly!",
    };

  } catch (error) {
    console.error("Enquiry submission error:", error);

    return {
      flag: 0,
      msg: "Unable to submit your enquiry. Please try again later.",
    };
  }
}
