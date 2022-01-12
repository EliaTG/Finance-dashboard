import './tranhistory.css'

export default function tranhistory() {
    return (
        <div>
            <div className="tranhistory">
                  <h3>All Transaction</h3>
                  <div className='Transactionbox'>
                        
                        <div className="Tranbox">
                            <div className="Firsticon"></div>
                            <span>Dribble</span>
                            <span>12 sep 2021, 11:22 A.M</span>
                            <div className="amount">
                                <span>$190.00</span>
                            </div>
                        </div>
                        <div className="Tranbox">
                            <div className="Secondicon"></div>
                            <span>Spotify</span>

                        </div>
                        <div className="Tranbox">
                            <div className="Thirdicon"></div>
                            <span>Airbnb</span>

                        </div>
                        <div className="Tranbox">
                            <div className="Fourthicon"></div>
                            <span>Samuel Dubois</span>

                        </div>
                    </div>   
           </div>

    </div>
    )
}
