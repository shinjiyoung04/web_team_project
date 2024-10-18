import { auth, currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'

export default async function BookRank() {
  const { userId } = auth()
  const user = await currentUser()
  return (
    <div>
      <img src="/images/Harry.jpeg" width={300} height={400} />
      <Link href="/review">
        <h1 className=" text-black hover:text-red-800 mr-4 text-center font-bold ">
          해리포터
        </h1>
        <br />
      </Link>
      <p className="text-center">도서 목록이 보여질 예정입니다.</p>
    </div>
  )
}
