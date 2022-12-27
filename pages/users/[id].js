import {useRouter} from "next/router"
import MainContainer from "../../components/MainContainer"



export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
      props: {user}, // will be passed to the page component as props
    }
  }

  export default function User({user}){
    const {query} = useRouter()
    const title = "Пользователь (" + user.name + ")"
    return(
        <MainContainer title={title}>
            <ul>
                <li>ID: {query.id}</li>
                <li>Name: {user.name}</li>
                <li>Username: {user.username}</li>
                <li>Email: {user.email}</li>
                <li>Phone: {user.phone}</li>
                <li>WebSite: {user.website}</li>
            </ul>
        </MainContainer>
    )
  }