'use client'
import { useAuth, useUser } from '@clerk/nextjs'

export default function ClientDashboard() {
  const { isLoaded: isLoadedAuth, userId, sessionId, getToken } = useAuth()
  const { isLoaded: isLoadedUser, isSignedIn, user } = useUser()

  if (!isLoadedAuth || !userId) {
    return null
  }

  if (!isLoadedUser || !isSignedIn) {
    return null
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Project Goal</h1>
      <h2 className="text-center font-bold">
        프로젝트 목표: 독서에 필요한 기능들을 기반으로 독서인들을 위한
        커뮤니티를 구축하여 독서량을 늘리고 질 높은 독서를 촉진하는 것입니다.
      </h2>
      <p className="text-center">
        팀 목표: 팀원 모두가 함께 프로젝트에 참여함으로써 각자의 성취감을 느끼고
        웹페이지 제작 능력을 향상시키는 것을 목표로 합니다. <br />
        서로의 지식을 보완하는 멘토-멘티 형식을 통해 프로젝트 경험을 쌓고 팀
        전체가 성장하는 것을 지향합니다.
      </p>
      <br />
      <h1 className="text-2xl font-bold mb-4 text-center">Video</h1>
      <div className="flex justify-center">
        <video controls width="650">
          <source src="/video/Fin.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
