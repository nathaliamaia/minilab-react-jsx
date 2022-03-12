import "./Profile.css"
import puppy from "../assets/images/puppy.jpg" 

function Profile(){
    return (
      <div className="card">
        <img className="picture" src={puppy} />
        
        <h4 className="title">Cute puppy</h4>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          suscipit scelerisque ligula nec maximus. Pellentesque eu turpis
          convallis, pulvinar felis et, elementum urna.
        </p>
      </div>
    );
}

export default Profile;