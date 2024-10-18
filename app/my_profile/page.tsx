import { auth, currentUser } from '@clerk/nextjs/server'

export default async function DashboardPage() {
  const { userId } = auth()
  const user = await currentUser()
  return (
    <div>
      <h3 className="text-center font-bold">My profile</h3>
      <br />
      {userId && (
        <div>
          <p>이름: {user?.fullName}</p>
          <p>My Point:다독자가 되어 포인트를 쌓고 책을 구매하자.</p>
        </div>
      )}
    </div>
  )
}
