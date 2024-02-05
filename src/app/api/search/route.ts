import { db } from '@/src/lib/db';
import { Subreddit, Post } from '@prisma/client';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const q = url.searchParams.get("q");

  if (!q) return new Response("Invalid query", { status: 400 });

  const subredditResults = await db.subreddit.findMany({
    where: {
      name: {
        startsWith: q,
      },
    },
    include: {
      _count: true,
    },
    take: 5,
  });

  const postResults = await db.post.findMany({
    where: {
      title: {
        contains: q,
      },
    },
    include: {
      // include any other related data you need
      author: true,
      subreddit: true,
      comments: true,
    },
    take: 5, // adjust as needed
  });

  const results = [...subredditResults, ...postResults];

  return new Response(JSON.stringify(results));
}
