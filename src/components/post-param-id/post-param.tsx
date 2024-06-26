import { useQuery } from '@tanstack/react-query'
import { getPostCommentByParamId } from '@/api/posts'
import CommentCard from '../comment-card/comment-card'
import { IComment } from '@/types/comment'

export default function CommentParam() {
  const { data, isFetched, isLoading, isError, error } = useQuery<
    IComment[],
    Error
  >({
    queryKey: ['getPostCommentByParamId'],
    queryFn: () => getPostCommentByParamId(1),
  })

  if (isLoading) return <div>Loading...</div>
  if (!isFetched) return <div>Not fetched yet</div>
  if (isError || error || !data) {
    return <div>Erro</div>
  }
  return (
    <div>
      {data.map((comment) => (
        <div key={comment.id}>
          <CommentCard comment={comment} />
        </div>
      ))}
    </div>
  )
}
