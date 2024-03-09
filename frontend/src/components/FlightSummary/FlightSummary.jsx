const FlightSummary = () => {
  return (
    <div className="flights-summary_box">
      <div className="flights-summary_box_header">
        <div className="flights-summary_box_header_title">
          Flight Summary Details
        </div>
      </div>
      <div className="flights-summary_box_pilots-box">
        <div className="flights-summary_box_pilots-box-inner">
          {/* Pilots */}
          <div className="flights-summary_box_pilots-box-inner-mainPilot">
            <div className="flights-summary_box_pilots-box-inner-mainPilot-name">
              Pilots
            </div>
            <div className="flights-summary_box_pilots-box-inner-mainPilot-box">
              <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner">
                <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-svg-box">
                  <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-svg-box-svg"></div>
                </div>
                <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-text">
                  <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-text-big">
                    Harry Potter
                  </div>
                  <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-text-small">
                    Pilot
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Co-Pilots */}
          <div className="flights-summary_box_pilots-box-inner-mainPilot">
            <div className="flights-summary_box_pilots-box-inner-mainPilot-name">
              Co-Pilots
            </div>
            <div className="flights-summary_box_pilots-box-inner-mainPilot-box">
              <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner">
                <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-svg-box">
                  <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-svg-box-svg"></div>
                </div>
                <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-text">
                  <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-text-big">
                    Ron Whisley
                  </div>
                  <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-text-small">
                    Co-Pilot
                  </div>
                </div>
              </div>
              <div className="flights-summary_box_pilots-box-inner-mainPilot-box">
                <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner">
                  <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-svg-box">
                    <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-svg-box-svg"></div>
                  </div>
                  <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-text">
                    <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-text-big">
                      Serverus Snape
                    </div>
                    <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-text-small">
                      Co-Pilot
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Additional Co-Pilot */}
          </div>

          {/* Cabin Crew */}
          <div className="flights-summary_box_pilots-box-inner-mainPilot">
            <div className="flights-summary_box_pilots-box-inner-mainPilot-name">
              Cabin Crew
            </div>
            <div className="flights-summary_box_pilots-box-inner-mainPilot-box">
              <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner">
                <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-svg-box">
                  <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-svg-box-svg"></div>
                </div>
                <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-text">
                  <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-text-big">
                    Albus Dumbledore
                  </div>
                  <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-text-small">
                    Cabin Crew
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Cabin Crews */}
            <div className="flights-summary_box_pilots-box-inner-mainPilot-box">
              <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner">
                <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-svg-box">
                  <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-svg-box-svg"></div>
                </div>
                <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-text">
                  <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-text-big">
                    Albus Dumbledore
                  </div>
                  <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-text-small">
                    Cabin Crew
                  </div>
                </div>
              </div>
            </div>

            {/* Another Cabin Crew */}
            <div className="flights-summary_box_pilots-box-inner-mainPilot-box">
              <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner">
                <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-svg-box">
                  <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-svg-box-svg"></div>
                </div>
                <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-text">
                  <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-text-big">
                    Albus Dumbledore
                  </div>
                  <div className="flights-summary_box_pilots-box-inner-mainPilot-box-inner-text-small">
                    Cabin Crew
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSummary;
