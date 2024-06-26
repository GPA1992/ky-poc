'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { IComment } from '@/types/comment'

interface CommentCardProps {
  comment: IComment
}

export default function CommentCard({ comment }: CommentCardProps) {
  return (
    <div className="my-3 w-full">
      <Card>
        <CardHeader>
          <CardTitle>{comment.name}</CardTitle>
          <CardDescription>Comment Card</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{comment.body}</p>
        </CardContent>
        <CardFooter>
          <p>{comment.email}</p>
        </CardFooter>
      </Card>
    </div>
  )
}
