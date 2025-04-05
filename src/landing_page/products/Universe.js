import React from 'react';
function Universe() {
    return ( 
        
        <div className='container mt-5'>
            <div className='row text-center'>
                <p className='text-center mt-5 mb-5 fs-5 text-muted'>Want to know more about our technology stack? Check out the <a href='' style={{textDecoration:'none'}}>Zerodha.tech</a> blog.</p>
                <h1 className='mt-5'>The Zerodha Universe</h1>
                <p className='mt-3 text-muted'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/smallcaseLogo.png'></img>
                    <p className='text-small text-muted mt-3' style={{fontSize:"12px"}}>Thematic investment Platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/streakLogo.png' style={{width:'35%'}}></img>
                    <p className='text-small text-muted mt-3' style={{fontSize:"12px"}}>Algo % strategy platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/sensibullLogo.svg' style={{width:'35%'}}></img>
                    <p className='text-small text-muted mt-4' style={{fontSize:"12px"}}>Options trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/zerodhaFundhouse.png' style={{width:'45%'}}></img>
                    <p className='text-small text-muted mt-3' style={{fontSize:"12px"}}>Asset Management</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/goldenpiLogo.png'style={{width:'45%'}}></img>
                    <p className='text-small text-muted mt-3' style={{fontSize:"12px"}}>Bonds trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/dittoLogo.png' style={{width:'25%'}}></img>
                    <p className='text-small text-muted mt-3' style={{fontSize:"12px"}}>Insaurance</p>
                </div>
                <button className="p-2 btn btn-primary fs-5 mt-5 mb-5" style={{width:"20%", margin: "0 auto"}}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Universe;