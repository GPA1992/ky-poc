import { IPost } from '@/types/posts'
import PostCard from '../post-card/post-card'
import { QueryClient, useQuery } from '@tanstack/react-query'
import { getAllPost } from '@/api/posts'
import { Button } from '@/components/ui/button'

const queryClient = new QueryClient()

export default function PostLista() {
  const { data, isFetched, isLoading, isError, error } = useQuery<
    IPost[],
    Error
  >({
    queryKey: ['getAllPost'],
    queryFn: () => getAllPost(),
  })

  const handleRefetch = () => {
    queryClient.invalidateQueries({
      queryKey: ['getAllPost'],
    })
    getAllPost(false).then((newData) => {
      queryClient.setQueryData(['getAllPost'], newData)
    })
  }

  if (isLoading) return <div>Loading...</div>
  if (!isFetched) return <div>Not fetched yet</div>
  if (isError || error || !data) {
    return <div>Erro</div>
  }
  return (
    <div className="w-full">
      <Button className="my-3" variant="outline" onClick={handleRefetch}>
        No Cache Refetch
      </Button>

      {data.map((post) => (
        <div key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  )
}
