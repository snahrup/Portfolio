export async function GET(req: Request) {
  try {
    const res = await fetch('https://api.github.com/repos/snahrup/portfolio', {
      headers: {
        ...(process.env.GITHUB_TOKEN && {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        }),
      },
    });

    if (!res.ok) {
      return Response.json({ stars: 0 });
    }

    const data = await res.json();
    return Response.json({ stars: data.stargazers_count || 0 });
  } catch (error) {
    return Response.json({ stars: 0 });
  }
}