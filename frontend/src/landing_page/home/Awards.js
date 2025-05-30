import React from 'react';
function Awards() {
    return ( 
        <div className='container mt-5 '>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <img src="media/images/LargestBroker.svg"/>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1 className='mb-3 fs-2'>Largest Stock Broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha Clients contibute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
                    <div className='row mb-4'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct Mutual Funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' style={{width:"90%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;  