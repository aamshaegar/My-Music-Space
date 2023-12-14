interface Props {
  title: string;
  imgUrl: string;
  description: string;
  visibility: boolean;
}

const op = ["Musica", "Shop", "Chat"];

function Object({ imgUrl, description }: Props) {
  return (
    <div className="Object">
      <div className="productImg">
        <img src={imgUrl}></img>
      </div>
      <div className="description">{description}</div>
    </div>
  );
}
function Grid({ title }: Props) {
  return (
    <div className="Container">
      <div className="title">{title}</div>
      <Object
        title=""
        imgUrl={"/src/img/Viva la vida.jpg"}
        description={"Viva la vida"}
        visibility={true}
      ></Object>
      <Object
        title=""
        imgUrl={"/src/img/Viva la vida.jpg"}
        description={"Viva la vida"}
        visibility={true}
      ></Object>
      <Object
        title=""
        imgUrl={"/src/img/Viva la vida.jpg"}
        description={"Viva la vida"}
        visibility={true}
      ></Object>
      <Object
        title=""
        imgUrl={"/src/img/Viva la vida.jpg"}
        description={"Viva la vida"}
        visibility={true}
      ></Object>
      <Object
        title=""
        imgUrl={"/src/img/Viva la vida.jpg"}
        description={"Viva la vida"}
        visibility={true}
      ></Object>
    </div>
  );
}

function HomeView() {
  return (
    <div className="View">
      <Grid title={op[0]}> </Grid>
      <Grid title={op[1]}> </Grid>
      <Grid title={op[2]}> </Grid>
    </div>
  );
}
export default HomeView;
