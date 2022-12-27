import MainContainer from "../components/MainContainer"
import Link from "../components/MyLink"

export default function Users({users}) {
    return (
        <MainContainer title="Пользователи">
            <h1>Список пользователей</h1>
            <ul>
                {users.map(user=>
                <li key={user.id}>
                    <Link href={`/users/${user.id}`} text={user.name} cssClass={"link2"} />
                </li>    
                )}
            </ul>
        </MainContainer>
    )
};

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/`)
    const users = await response.json()
    return {
        props: {users}
    }
}