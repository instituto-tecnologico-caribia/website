import { NextResponse } from "next/server";
import sgMail from '@sendgrid/mail';
import { Resend } from 'resend';

const resend = new Resend('re_KT2DKqno_EjcYBPRyqCsTHiJPaeNhCYiT');

export async function POST(req: Request) {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'lpmrloki@gmail.com',
            subject: 'Password Recovery',
            text: 'Password Recovery Email 000000',
        }); 

        return NextResponse.json({ message: "Email sent" });

    } catch (error: any) {
        // console.error("FULL ERROR:", error);

        return NextResponse.json(
            { error: error?.response?.body || "Failed to send email" },
            { status: 500 }
        );
    }
}
