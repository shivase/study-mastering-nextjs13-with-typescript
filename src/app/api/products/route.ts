import { NextRequest, NextResponse } from 'next/server';

import schema from '@/app/api/products/schema';

export const GET = (request: NextRequest) => {
  return NextResponse.json([
    { id: 1, name: 'Milk', price: 2.5 },
    { id: 2, name: 'Bread', price: 3.5 },
  ]);
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  return NextResponse.json({ id: 1, name: body.name, price: body.price }, { status: 201 });
};
