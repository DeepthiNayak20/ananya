import "./restaurantGallery.css";
import "../../views/home/home.css";
import { Modal } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { closeModal, showModal } from "../../redux/reducers/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const RestaurantGallery = () => {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const handleClose = () => {
    setModal(false);
  };
  let show: any = useSelector((state: any) => state.modalStatus.value);
  // const handleClose = () => {
  //   dispatch(closeModal());
  // };
  // const images = [
  //   {
  //     id: 1,
  //     imgLink: require("../../assets/Bitmap (2).png"),
  //   },
  //   {
  //     id: 2,
  //     imgLink: require("../../assets/Bitmap (2).png"),
  //   },
  //   {
  //     id: 3,
  //     imgLink: require("../../assets/Bitmap (2).png"),
  //   },
  //   {
  //     id: 4,
  //     imgLink: require("../../assets/Bitmap (2).png"),
  //   },
  // ];
  let imgId = JSON.parse(localStorage.getItem("imgIds") || "[]");
  return (
    <>
      <div className="hotelGalleryContainer">
        <div className="hotelGalleryBody">
          {" "}
          <div className="hotelAllPhotos">All Photos</div>
          <div className="hotelPhotosContiner">
            {images.map((ele: any, i: any) => {
              console.log(ele);

              return (
                <div className="hoteGallery" key={i}>
                  <img
                    src={require("../../assets/Bitmap (2).png")}
                    alt=""
                    className="hotelGalleryList"
                    onClick={() => {
                      localStorage.setItem("imgIds", i);
                      setModal(true);
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div className="viewMoreButton">View More {">"}</div>
        </div>
        <Modal
          open={modal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="modalContainer">
            <div className="inSide">
              <div className="cancelBtnPhoto">
                <img
                  src={require("../../assets/cancel.png")}
                  alt=""
                  onClick={() => setModal(false)}
                />
              </div>
              <div className="imgContainer">
                {imgId}{" "}
                <img
                  src={require("../../assets/Bitmap (2).png")}
                  alt=""
                  className="hotelGalleryList1"
                />
              </div>
              <div className="imgDetails">
                <div className="detailsTextImg">The Nachos cream stone</div>
                <div className="prevNextButtons">
                  <div className="countOfImg">
                    {" "}
                    {imgId + 1}/{images.length}
                  </div>

                  <div className="prevBtn">
                    <img
                      src={require("../../assets/previous button.png")}
                      alt=""
                    />
                  </div>
                  <div className="nextBtn">
                    <img
                      src={require("../../assets/next button.png")}
                      alt=""
                      onClick={() => {
                        localStorage.setItem("imgIds", imgId + 1);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default RestaurantGallery;
{
  /* <Accordion>
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel1a-content"
  id="panel1a-header"
>
  <Typography>Accordion 1</Typography>
</AccordionSummary>
<AccordionDetails>
  <Typography>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget.
  </Typography>
</AccordionDetails>
</Accordion> */
}
