import CommentsSection from '@/src/components/CommentsSection'
import EditorOutput from '@/src/components/EditorOutput'
import { buttonVariants } from '@/src/components/ui/Button'
import { db } from '@/src/lib/db'
import { redis } from '@/src/lib/redis'
import { formatTimeToNow } from '@/src/lib/utils'
import { CachedPost } from '@/src/types/redis'
import { Post, User, Vote } from '@prisma/client'
import { ArrowBigDown, ArrowBigUp, Loader2 } from 'lucide-react'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

interface SubRedditPostPageProps {
  params: {
    postId: string
  }
}

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

const SubRedditPostPage = async ({ params }: SubRedditPostPageProps) => {
  const cachedPost = (await redis.hgetall(
    `post:${params.postId}`
  )) as CachedPost

  let post: (Post & { author: User }) | null = null

    post = await db.post.findFirst({
      where: {
        id: params.postId,
      },
      include: {
        votes: true,
        author: true,
      },
    })

  if (!post) return notFound()

  return (
    <div>
      <div className='h-full flex flex-col sm:flex-row items-center sm:items-start justify-between'>
        {/* <Suspense fallback={<PostVoteShell />}>
          <PostVoteServer
            postId={post?.id}
            getData={async () => {
              return await db.post.findUnique({
                where: {
                  id: params.postId,
                },
                include: {
                  votes: true,
                },
              })
            }}
          />
        </Suspense> */}

        <div className='sm:w-0 w-full flex-1 bg-white p-4 rounded-sm'>
          <p className='max-h-40 mt-1 truncate text-xs text-gray-500'>
            Posted by u/ {post?.author.name ?? cachedPost.authorUsername}{'  '}
            {formatTimeToNow(new Date(post?.createdAt ?? cachedPost.createdAt))}
          </p>
          <h1 className='text-xl font-semibold py-2 leading-6 text-gray-900'>
            {post?.title ?? cachedPost.title}
          </h1>

          <EditorOutput content={post?.content ?? cachedPost.content} />
          <Suspense
            fallback={
              <Loader2 className='h-5 w-5 animate-spin text-zinc-500' />
            }>
            {/* @ts-expect-error Server Component */}
            <CommentsSection postId={post?.id ?? cachedPost.id} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default SubRedditPostPage;
