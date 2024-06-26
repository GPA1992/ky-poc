/* eslint-disable @typescript-eslint/no-explicit-any */
import { IComment } from '@/types/comment'
import { IPost } from '@/types/posts'
import ky from 'ky'

export const getPost = async (): Promise<IPost> => {
  const url = 'https://jsonplaceholder.typicode.com/posts/1'
  const data = await ky.get(url).json<IPost>()
  return data
}

export const getAllPost = async (useCache = true): Promise<IPost[]> => {
  const url = 'https://jsonplaceholder.typicode.com/posts'

  const cacheConfig = useCache ? 'force-cache' : 'no-store'

  const data = await ky
    .get(url, {
      cache: cacheConfig,
    })
    .json<IPost[]>()
  return data.slice(0, 10)
}

export const getPostCommentByParamId = async (
  id: number,
): Promise<IComment[]> => {
  const url = 'https://jsonplaceholder.typicode.com/comments'
  const data = await ky
    .get(url, {
      searchParams: {
        postId: id,
      },
    })
    .json<IComment[]>()
  return data
}
