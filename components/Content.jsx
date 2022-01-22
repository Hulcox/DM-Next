import React, { useContext } from "react";
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import AppContext from "./appContext";

const ContentJournal = () => {
  const { listData, resultatIn, resultatOut } = useContext(AppContext);
  const formatNumberNegative = (nb) => {
    return String(nb).slice(1);
  };

  console.log(listData);
  return (
    <>
      <Grid container sx={{ px: "20%", py: "2%" }}>
        <Grid item xs>
          <List>
            <ListItem disablePadding>
              <ListItemText sx={{ my: 2, mx: 2 }}>
                <Typography variant="h6" component="div">
                  INCOMMING
                </Typography>
              </ListItemText>
            </ListItem>
            <Divider />
            {listData.map(({ value, description, index }) => {
              if (value < 0) {
                return (
                  <>
                    <ListItem
                      sx={{ bgcolor: index % 2 == 0 ? "white" : "#EFF3F8" }}
                    >
                      <ListItemText sx={{ textAlign: "right", height: "64px" }}>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                      </ListItemText>{" "}
                    </ListItem>
                  </>
                );
              } else
                return (
                  <>
                    <ListItem
                      sx={{ bgcolor: index % 2 == 0 ? "white" : "#EFF3F8" }}
                    >
                      <ListItemText sx={{ textAlign: "right", height: "64px" }}>
                        <Typography sx={{ color: "#1CE800" }}>
                          {"+$" + value}
                        </Typography>
                        <Typography sx={{ fontStyle: "italic" }}>
                          {description}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  </>
                );
            })}
            <Divider />
            <ListItem>
              <ListItemText>
                <Typography variant="h6" component="div">
                  TOTAL
                </Typography>
              </ListItemText>
              <ListItemText sx={{ textAlign: "right" }}>
                <Typography sx={{ color: "#1CE800" }}>
                  {"+$" + resultatIn}
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs>
          <List>
            <ListItem disablePadding>
              <ListItemText sx={{ my: 2, mx: 2 }}>
                <Typography variant="h6" component="div">
                  OUTGOING
                </Typography>
              </ListItemText>
            </ListItem>
            <Divider />
            {listData.map(({ value, description, index }) => {
              if (value > 0) {
                return (
                  <>
                    <ListItem
                      sx={{ bgcolor: index % 2 == 0 ? "white" : "#EFF3F8" }}
                    >
                      <ListItemText sx={{ textAlign: "right", height: "64px" }}>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                      </ListItemText>{" "}
                    </ListItem>
                  </>
                );
              } else
                return (
                  <>
                    <ListItem
                      sx={{ bgcolor: index % 2 == 0 ? "white" : "#EFF3F8" }}
                    >
                      <ListItemText sx={{ textAlign: "right", height: "64px" }}>
                        <Typography sx={{ color: "#E80000" }}>
                          {"-$" + formatNumberNegative(value)}
                        </Typography>
                        <Typography sx={{ fontStyle: "italic" }}>
                          {description}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  </>
                );
            })}
            <Divider />
            <ListItem>
              <ListItemText>
                <Typography variant="h6" component="div">
                  TOTAL
                </Typography>
              </ListItemText>
              <ListItemText sx={{ textAlign: "right" }}>
                <Typography sx={{ color: "#E80000" }}>
                  {"-$" + formatNumberNegative(resultatOut)}
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12}>
          <Divider orientation="horizontal" flexItem />
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, ml: 2 }}
            >
              RESULT
            </Typography>
            {resultatIn + resultatOut > 0 ? (
              <Typography
                sx={{
                  color: "#1CE800",
                  textAlign: "right",
                  mt: 1,
                  mr: 2,
                }}
              >
                {"+$" + (resultatIn + resultatOut)}
              </Typography>
            ) : (
              <Typography
                sx={{
                  color: "#E80000",
                  textAlign: "right",
                  mt: 1,
                  mr: 2,
                }}
              >
                {"-$" + formatNumberNegative(resultatIn + resultatOut)}
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ContentJournal;
