import MainContainer from "../components/MainContainer";

export default function Error404() {
    return(
        <MainContainer title="404">
            <div className="error404">
                <center>Страница не найдена!<br/> 
                        Обратитесь в следственный комитет для поиска :)
                    <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png"></img>
                </center>
            </div>
        </MainContainer>
    )
}