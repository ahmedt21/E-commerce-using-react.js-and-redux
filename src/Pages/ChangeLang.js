import { useDispatch, useSelector } from "react-redux"
import { changeLang } from "../Store/Action"


function ChangeLang() {
    
    const myLang = useSelector((state) => state.lang)

    const dispatch = useDispatch()

    const handleLang = () => {
        dispatch(changeLang(myLang === 'Ar' ? 'EN' : 'Ar'))
    }
    return (
        <>
            <h1 className="text-danger">My Lang {myLang}</h1>
            <button className="btn btn-info" onClick={() => handleLang()}>Change Lang</button>
        </>
    )
}



export default ChangeLang