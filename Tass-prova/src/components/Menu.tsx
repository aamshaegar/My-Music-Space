function Menu(){
    const imageUrl1 = 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg';
    const imageUrl2 = 'https://as1.ftcdn.net/v2/jpg/04/54/29/98/1000_F_454299832_EAOJOc0GKq8S5dsXuv6B79bbIc0GhQmy.jpg'
    const imageUrl3= 'https://img.freepik.com/premium-photo/creative-abstract-background-wallpaper_98870-393.jpg'
    return (<div style={{
        backgroundColor: '#404040',
        width: '30vh',
        height:'75vh',
        position: 'absolute',
        top: '25vh',
        left:'1vh',
        marginBottom: '20vh',
        borderRadius: '5%'}}>
            <div className={"MySongsButton"} style={{
            width: '10vh',
            height: '10vh',
            borderRadius: '50%',
            overflow: 'hidden',
            position: 'relative',
            top: '5vh',
            left:'3vh'



        }}><div className="patina" style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)'}}></div>
            <img style={{width: '100%',
                height: '100%',
                objectFit: 'cover'}} src={imageUrl1} alt="Immagine" />

            </div>
        <div className={"MyShopButton"} style={{
            width: '10vh',
            height: '10vh',
            borderRadius: '50%',
            overflow: 'hidden',
            position: 'relative',
            top: '7vh',
            left:'3vh'
        }}><div className="patina" style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'}}></div>
            <img style={{width: '100%',
                height: '100%',
                objectFit: 'cover'}} src={imageUrl2} alt="Immagine" />
        </div>
        <div className={"MyChatButton"} style={{
            width: '10vh',
            height: '10vh',
            borderRadius: '50%',
            overflow: 'hidden',
            position: 'relative',
            top: '9vh',
            left:'3vh'
        }}><div className="patina" style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'}}></div>
            <img style={{width: '100%',
                height: '100%',
                objectFit: 'cover'}} src={imageUrl3} alt="Immagine" />
        </div>


    </div>)
}
export default Menu;