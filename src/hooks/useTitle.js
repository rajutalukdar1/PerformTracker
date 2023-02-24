import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Perform Tracker`;
    }, [title])
};

export default useTitle;