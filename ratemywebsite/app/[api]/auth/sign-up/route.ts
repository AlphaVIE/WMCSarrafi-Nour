import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { username, email, password, pwCheck } = await req.json();
  console.log(username, email, password, pwCheck);
  return new NextResponse(
    JSON.stringify({
      username: username,
      email: email,
      password: password,
      checkPw: pwCheck,
    })
  );
}
