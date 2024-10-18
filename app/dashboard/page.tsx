import { auth, currentUser } from '@clerk/nextjs/server'

export default async function DashboardPage() {
  const { userId } = auth()
  const user = await currentUser()
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5 text-center">
        Team -개발 조아핑-{' '}
      </h1>

      <ol>
        <li>팀장: 안지영_92313415_정보보호학과</li>
        <li>팀원: 김다예_92313295_정보보호학과</li>
        <li>팀원: 신지영_92313403_정보보호학과</li>
        <li>팀원: 이서연_92313491_정보보호학과</li>
        <li>팀원: 정은수_92313659_정보보호학과</li>
      </ol>
    </div>
  )
}
