// api/communities.ts

import { db } from '@/src/lib/db'

export async function GET() {
  try {
    const communities = await db.subreddit.findMany({
      include: {
        _count: true,
      },
    });

    return new Response(JSON.stringify(communities));
  } catch (error) {
    console.error('Error fetching communities:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
