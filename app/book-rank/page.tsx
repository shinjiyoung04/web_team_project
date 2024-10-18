import { auth, currentUser } from '@clerk/nextjs/server'

export default async function BookRank() {
  const { userId } = auth()
  const user = await currentUser()
  return (
    <div>
      <p>다독인 순위가 제시될 예정입니다.</p>
    </div>
  )
}
