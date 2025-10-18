export default function LeftSection({imageURL , productName , productDescription , tryDemo , learnMore , googlePlay , appStore}){
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col p-5 mb-5">
                    <img src={imageURL}></img>
                </div>
                <div className="col p-5 mt-5">
                    <h4>{productName}</h4>
                    <p>{productDescription}</p>
                    <div>
                            <a href={tryDemo} style={{textDecoration:"none"}}>Try demo <i class="fa-solid fa-arrow-right"></i></a>
                    <a href={learnMore} style={{textDecoration:"none", marginLeft:"16%"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="mt-3">
                            <a href={googlePlay} style={{textDecoration:"none"}}><img src="/media/googlePlayBadge.svg"></img></a>
                    <a href={appStore} style={{textDecoration:"none" , marginLeft:"6%"}}><img src="/media/appStoreBadge.svg"></img></a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}