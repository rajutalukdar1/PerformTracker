import { useEffect, useState } from "react"

const useAdmin = uid => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (uid) {
            fetch(`https://perform-tracker-server.vercel.app/users/admin?uid=${uid}`)
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data.isAdmin);
                    setIsAdminLoading(false);
                })
        }
    }, [uid])
    return [isAdmin, isAdminLoading];
}

export default useAdmin;