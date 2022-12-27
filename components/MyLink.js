import Link from "next/link"

export default function MyLink ({text, href, cssClass}){
    return(
        <Link href={href}>
            <span className = {cssClass}>{text}</span>
        </Link>
    )
}