import { useSession } from "next-auth/react"

export const useGetSession = async () => {
  const {data: session} = useSession()
  return session;
}