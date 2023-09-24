import { NextRequest, NextResponse } from 'next/server';

import schema from '@/app/api/users/schema';

export const GET = (request: NextRequest) => {
  return NextResponse.json([
    { id: 1, name: 'John' },
    { id: 2, name: 'mosh' },
  ]);
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  return NextResponse.json({ id: 1, name: body.name });
};
