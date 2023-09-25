import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

import WelcomeTemplate from 'emails/WelcomeTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request: NextRequest) => {
  await resend.emails.send({
    from: 'kobayashi@legiotech.jp',
    to: 'keitti05@gmail.com',
    subject: 'hello',
    react: WelcomeTemplate({ name: 'test' }),
  });

  return NextResponse.json({});
};
