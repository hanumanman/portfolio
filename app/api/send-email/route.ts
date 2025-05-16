export async function POST(request: Request) {
  try {
    const body = await request.json();

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
      { status: 400 }
    );
  }
}
