export default function DarkLight() {
    return (
     
<section className="dark-light">
    <div className="dark-light-box">
        <div className="dark"></div>
        <div className="light"></div>
    </div>

    <div className="container black-box">
        <div className="text-h1">
            <h1 className="dark">Switch Between</h1>
            <h1 className="light">Ligh & Dark Mode</h1>
        </div>

        <div className="img-dark-light">
            <img src="images\dark-light.svg" alt="dark and light mode"/>
            <button className="round-button">
                <i className="fa-light fa-arrows-left-right"></i>
            </button>
        </div>
    </div>
</section>
      
    );
  }
  