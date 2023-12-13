interface Props{
  title: string;
  imgUrl: string;
  description: string;
}

const op = ["Musica","Shop","Chat"]

function Object({imgUrl,description}:Props){
  return(
      <div className="Object">
        <div className="productImg">
          <img src={imgUrl}></img>
        </div>
        <div className="description">
        {description}
        </div>
      </div>
  );
}
function Grid({title}:Props) {
  return (
      <div className="Container">
        <div className="title" >
          {title}
        </div>
        <Object imgUrl={"Pippo"} description={"Viva la vida "}></Object>
        <Object imgUrl={"Pippo"} description={"Viva la vida "}></Object>
        <Object imgUrl={"Pippo"} description={"Viva la vida "}></Object>
        <Object imgUrl={"Pippo"} description={"Viva la vida "}></Object>
        <Object imgUrl={"Pippo"} description={"Viva la vida "}></Object>
      </div>
  );
}

function View(){
    return (
        <div className="View">
          <Grid title={op[0]}> </Grid>
          <Grid title={op[1]}> </Grid>
          <Grid title={op[2]}> </Grid>
        </div>
    );
}
export default View;
