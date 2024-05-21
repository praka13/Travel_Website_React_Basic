
import Card from  "./Card"
function Tours({tours,removeTour,keepTour,button}){
    
    return(
        <div className="container">
            <div>
                <h2 className="title">Travel Plan</h2>
            </div>
            <div className="cards">
              {
                tours.map((tour)=>{
                    return <Card key={tour.id} {...tour} removeTour={removeTour} keepTour={keepTour} tours={tours} button={button}></Card>
                })
              }
            </div>
        </div>
    );

}

export default Tours;