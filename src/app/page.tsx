/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import PostLista from '@/components/lista-post/lista-post'
import CommentParam from '@/components/post-param-id/post-param'
import PostUnico from '@/components/post-unico/post-unico'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-slate-400">
      <Tabs defaultValue="account" className="mt-5 w-3/4">
        <TabsList>
          <TabsTrigger value="unico">Post Unico</TabsTrigger>
          <TabsTrigger value="lista">Lista de Post</TabsTrigger>
          <TabsTrigger value="params">Post por params</TabsTrigger>
        </TabsList>
        <TabsContent value="unico">
          <PostUnico />
        </TabsContent>
        <TabsContent value="lista">
          <PostLista />
        </TabsContent>
        <TabsContent value="params">
          <CommentParam />
        </TabsContent>
      </Tabs>
    </main>
  )
}
