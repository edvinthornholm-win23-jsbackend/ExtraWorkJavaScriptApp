export default function Download() {
    return (
<div className="download">
    <div className="container">
        <div className="phone">
            <img className="iPhonePro" src="/images/iPhonePro.svg" alt=""/>
            <img className="iPhoneProinside" src="/images/iPhoneProinside.svg" alt=""/>
        </div>

        <div className="contentinformation">
            <h1>Download Our App <br/> for Any Devices:</h1>

            <div className="appstore">

                <div className="textappstore">
                    <p>App Store</p>
                    <div className="star">
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    </div>
                    <h6>Editor's Choice</h6>
                    <p>rating 4.7, 187K+ reviews</p>
                </div>

                <div className="icon">
                    <a href="#"><img src="/images/icons/appstore.svg" alt="appstore icon"/></a>
                </div>
            </div>

            <div className="googleplay">

                <div className="textgoogleplay">
                    <p>Google Play</p>
                    <div className="star">
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    </div>
                    <h6>App of the Day</h6>
                    <p>rating 4.8, 30K+ reviews</p>
                </div>

                <div className="icon">
                    <a href="#"><img src="/images/icons/googleplay.svg" alt="googleplay icon"/></a>
                </div>
            </div>
        </div>
    </div>
</div>

    );
  }
  