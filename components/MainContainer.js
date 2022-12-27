import Head from "next/head"
import MyLink from "./MyLink"


export default function MainContainer ({children, title}){
    return(
        <>
            <Head>
                <meta keywords="nextjs, react, test" />
                <title>{title}</title>
            </Head>
            <div className="navbar">
                <center>
                <MyLink href={'/'} text="Главная" cssClass={"link"} />
                <MyLink href={'/users'} text="Пользователи" cssClass={"link"} />
                </center>      
            </div>
            <div className="mainBox">
                {children}
            </div>
        </>
    )
}