import React from 'react';
// import './CreateTicket.css'; // Import a new CSS file for custom styles

function CreateTicket() {
    return (
        <div className="container py-5 my-5"> {/* Added py-5 for vertical padding */}
            <h1 className="display-6 text-center text-muted mb-5">
                Select a relevant topic to create a ticket
            </h1>

            <div className="row gy-4"> {/* gy-4 for vertical spacing between rows */}

                {/* Category 1: Account Opening */}
                <div className="col-md-4 col-sm-6 col-12 p-4"> {/* Responsive columns, p-4 for padding */}
                    <div className="card h-100 shadow-sm"> {/* Card for each category */}
                        <div className="card-body">
                            <h5 className="card-title d-flex align-items-center mb-3">
                                <i className="fa fa-plus-circle me-2 text-primary" aria-hidden="true"></i> {/* me-2 for margin-end, text-primary */}
                                <span className="fw-bold">Account Opening</span>
                            </h5>
                            <div className="list-group list-group-flush"> {/* List group for links */}
                                <a href="#!" className="list-group-item list-group-item-action">Resident individual</a>
                                <a href="#!" className="list-group-item list-group-item-action">Minor</a>
                                <a href="#!" className="list-group-item list-group-item-action">Non Resident Indian (NRI)</a>
                                <a href="#!" className="list-group-item list-group-item-action">Company, Partnership, HUF and LLP</a>
                                <a href="#!" className="list-group-item list-group-item-action">Glossary</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Category 2: Your Zerodha Account */}
                <div className="col-md-4 col-sm-6 col-12 p-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title d-flex align-items-center mb-3">
                                <i className="fa fa-user-o me-2 text-success" aria-hidden="true"></i> {/* Different color for icon */}
                                <span className="fw-bold">Your Zerodha Account</span>
                            </h5>
                            <div className="list-group list-group-flush">
                                <a href="#!" className="list-group-item list-group-item-action">Your Profile</a>
                                <a href="#!" className="list-group-item list-group-item-action">Account modification</a>
                                <a href="#!" className="list-group-item list-group-item-action">Client Master Report (CMR) and Depository Participant (DP)</a>
                                <a href="#!" className="list-group-item list-group-item-action">Nomination</a>
                                <a href="#!" className="list-group-item list-group-item-action">Transfer and conversion of securities</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Category 3: Kite */}
                <div className="col-md-4 col-sm-6 col-12 p-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title d-flex align-items-center mb-3">
                                <i className="fa fa-bar-chart me-2 text-danger" aria-hidden="true"></i> {/* Different color */}
                                <span className="fw-bold">Kite</span>
                            </h5>
                            <div className="list-group list-group-flush">
                                <a href="#!" className="list-group-item list-group-item-action">IPO</a>
                                <a href="#!" className="list-group-item list-group-item-action">Trading FAQs</a>
                                <a href="#!" className="list-group-item list-group-item-action">Margin Trading Facility (MTF) and Margins</a>
                                <a href="#!" className="list-group-item list-group-item-action">Charts and orders</a>
                                <a href="#!" className="list-group-item list-group-item-action">Alerts and Nudges</a>
                                <a href="#!" className="list-group-item list-group-item-action">General</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Category 4: Funds */}
                <div className="col-md-4 col-sm-6 col-12 p-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title d-flex align-items-center mb-3">
                                <i className="fa fa-credit-card me-2 text-warning" aria-hidden="true"></i> {/* Different color */}
                                <span className="fw-bold">Funds</span>
                            </h5>
                            <div className="list-group list-group-flush">
                                <a href="#!" className="list-group-item list-group-item-action">Add money</a>
                                <a href="#!" className="list-group-item list-group-item-action">Withdraw money</a>
                                <a href="#!" className="list-group-item list-group-item-action">Add bank accounts</a>
                                <a href="#!" className="list-group-item list-group-item-action">eMandates</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Category 5: Console */}
                <div className="col-md-4 col-sm-6 col-12 p-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title d-flex align-items-center mb-3">
                                <i className="fa fa-globe me-2 text-info" aria-hidden="true"></i> {/* Different color */}
                                <span className="fw-bold">Console</span>
                            </h5>
                            <div className="list-group list-group-flush">
                                <a href="#!" className="list-group-item list-group-item-action">Portfolio</a>
                                <a href="#!" className="list-group-item list-group-item-action">Corporate actions</a>
                                <a href="#!" className="list-group-item list-group-item-action">Funds statement</a>
                                <a href="#!" className="list-group-item list-group-item-action">Reports</a>
                                <a href="#!" className="list-group-item list-group-item-action">Profile</a>
                                <a href="#!" className="list-group-item list-group-item-action">Segments</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Category 6: Coin */}
                <div className="col-md-4 col-sm-6 col-12 p-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title d-flex align-items-center mb-3">
                                <i className="fa fa-adjust me-2 text-secondary" aria-hidden="true"></i> {/* Different color */}
                                <span className="fw-bold">Coin</span>
                            </h5>
                            <div className="list-group list-group-flush">
                                <a href="#!" className="list-group-item list-group-item-action">Understanding mutual funds and Coin</a>
                                <a href="#!" className="list-group-item list-group-item-action">Coin app</a>
                                <a href="#!" className="list-group-item list-group-item-action">Coin web</a>
                                <a href="#!" className="list-group-item list-group-item-action">Transactions and reports</a>
                                <a href="#!" className="list-group-item list-group-item-action">National Pension Scheme (NPS)</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CreateTicket;
