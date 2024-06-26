import { IPost } from '@/types/posts'
import PostCard from '../post-card/post-card'
import { useQuery } from '@tanstack/react-query'
import { getPost } from '@/api/posts'

export default function PostUnico() {
  const { data, isFetched, isLoading, isError, error } = useQuery<IPost, Error>(
    {
      queryKey: ['getPosts'],
      queryFn: () => getPost(),
    },
  )

  if (isLoading) return <div>Loading...</div>
  if (!isFetched) return <div>Not fetched yet</div>
  if (isError || error || !data) {
    return <div>Erro</div>
  }
  return <PostCard post={data} />
}
