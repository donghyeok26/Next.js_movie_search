import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function ProfilePage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return <p>로그인이 필요합니다</p>;
    }

    return (
        <div>
            <h2>프로필</h2>
            <p>이름: {session.user?.name}</p>
            <p>이메일: {session.user?.email}</p>
        </div>
    );
}
