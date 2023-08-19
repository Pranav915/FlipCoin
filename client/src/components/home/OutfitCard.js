import React, { useState } from "react";
import ClothCard from "./ClothCard";
import { Box, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const OutfitCard = ({ outfitDetails }) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const totalItems = 6;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const visibleItems = Array.from(
    { length: endIndex - startIndex },
    (_, index) => startIndex + index + 1
  );

  return (
    <Box>
      <Carousel
        sx={{ width: "100%" }}
        next={handleNextPage}
        prev={handlePrevPage}
        autoPlay={false}
      >
        <Paper sx={{ display: "flex", m: 2 }}>
          {visibleItems.map((item, i) => (
            <Box key={i} sx={{ display: "flex" }}>
              {outfitDetails.map((cloth, i) => (
                <ClothCard
                  imgURl={cloth.itemImage}
                  itemId={cloth.itemId}
                  key={i}
                />
              ))}
            </Box>
          ))}
        </Paper>
      </Carousel>
    </Box>
  );
};

export default OutfitCard;
