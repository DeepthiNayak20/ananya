import React from "react";
import "./overviewBody.css";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { textAlign } from "@mui/system";
import ExpandMoreIcon, { Accordion } from "@mui/material";

const OverviewBody = () => {
  return (
    <>
      <div className="overviewContainer">
        <div className="overviewContent">
          <div className="overviewDescriptipon">
            <div className="descriptionTxt">Description</div>
            <div className="descriptionContent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              imperdiet ante at risus mollis, ut rutrum arcu venenatis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Etiam nec erat suscipit, pretium quam eget,
              condimentum enim.
            </div>
          </div>

          <div className="overviewSecondContainer">
            <div className="overviewSecondContent">
              <div className="overviewSecondTxt">Cuisines</div>
              <div className="overviewSecondDescription">
                Indian, Pakistani, Kebab, Mexican, Mordovian, Mughal, Native
                American, Nepalese, New Mexican
              </div>
            </div>
            <div className="overviewSecondContent">
              <div className="overviewSecondTxt">Average meal cost</div>
              <div className="overviewSecondDescription">
                AED70 for two (approx)
              </div>
            </div>
            <div className="overviewSecondContent">
              <div className="overviewSecondTxt">Accepted Payment</div>
              <div className="overviewSecondDescription">
                Cash and Cards accepeted
              </div>
            </div>
            <div className="overviewSecondContent">
              <div className="overviewSecondTxt">Phone</div>
              <div className="overviewSecondDescription">
                0824 4024999
                <br />
                0824 3456790
              </div>
            </div>
            <div className="overviewSecondContentLast">
              <div className="overviewSecondTxt">Address</div>
              <div className="overviewSecondDescription">
                Shiekh Zayed Road, Dubai, UAE
              </div>
            </div>
          </div>
          <div className="overviewBottom">
            <div className="overviewOpening">
              <div className="openingHender">Opening hours</div>
              <div className="overviewCardOpen">
                <div className="openingContainer">
                  <div className="dateOpenOverview">
                    <div className="overviewDate">Today, 25 March 2018</div>
                    <div className="overviewOpen">OPEN</div>
                  </div>
                  <div className="overviewTime">
                    10:00:00 AM - 03:00:00 PM
                    <br />
                    05:30:00 PM - 11:00:00 PM
                  </div>
                  <div className="overviewPlanning">
                    Planned off: 03:00 PM - 05:30 PM (Ramadan)
                  </div>
                </div>

                <div className="overviewAcordianStart">
                  <Accordion elevation={0} sx={{ marginLeft: 3 }}>
                    <AccordionSummary>
                      {/* classes={{ content: classes.content }} */}
                      <div className="accordian">
                        Work hours for next 7 days{" "}
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="openingContainer">
                        <div className="dateOpenOverview">
                          <div className="overviewDate">
                            Today, 25 March 2018
                          </div>
                          <div className="overviewOpen">OPEN</div>
                        </div>
                        <div className="overviewTime">
                          10:00:00 AM - 03:00:00 PM
                          <br />
                          05:30:00 PM - 11:00:00 PM
                        </div>
                        <div className="overviewPlanning">
                          Planned off: 03:00 PM - 05:30 PM (Ramadan)
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>

            <div className="overviewDirectiopnMap">
              <div className="DirectionMapText">Get Direction</div>
              <img
                src={require("../../assets/Screen Shot 2018-04-24 at 5.02.18 PM.png")}
                alt=""
                className="overviewMapImg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewBody;
