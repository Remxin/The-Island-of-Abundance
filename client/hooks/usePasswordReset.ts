import { useEffect, useState } from "react"

const usePasswordReset = () => {
    const [emailSendt, setEmailSendt] = useState(false)
    const [emailClicked, setEmailClicked] = useState(false)
    const [loading, setLoading] = useState(false)

    function sendResetEmail(email: string) {
        
    }

    return { emailSendt, emailClicked, loading, sendResetEmail}
}


export default usePasswordReset