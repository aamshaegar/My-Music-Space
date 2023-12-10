function User() {
    const imageUrl = 'https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg';
    return <div className={"UserDiv"} style={{
        backgroundColor: '#3E99CF',
        width: '30vh',
        height:'20vh',
        borderRadius: '0px 0% 50% 0px',
        position: 'absolute'
    }}>
        <div className={"UserButton"} style={{
            width: '10vh',
            height: '10vh',
            borderRadius: '50%',
            overflow: 'hidden',
            position: 'relative',
            top: '5vh',
            left:'3vh'
        }}>
            <img style={{width: '100%',
                height: '100%',
                objectFit: 'cover'}} src={imageUrl} alt="Immagine" />
            </div>

    </div>
}
export default User;