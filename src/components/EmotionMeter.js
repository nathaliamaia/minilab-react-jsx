function EmotionMeter(){

  let emotion = "SAD"
  
    if(emotion === "HAPPY") {
        return <i className="fad fa-smile"></i>;
    } else {
        return <i className="fad fa-frown"></i>
    }
}

export default EmotionMeter