import React from "react";
import { Grid } from "@mui/material";

const gridItemStyle = {
    height: "100px",
    backgroundColor: "#f0f0f0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.15)",
    transition: "transform 0.2s ease",
    cursor: "pointer",
    ":hover": {
        transform: "scale(1.05)",
    },
};

export const HOMEPAPE = (props) => {
    return (
        <Grid container spacing={2}>
            {/* Row 1 */}
            <Grid item xs={3}>
                {/* Content here */}
                <div style={gridItemStyle}>Content 1</div>
            </Grid>
            <Grid item xs={3}>
                {/* Content here */}
                <div style={gridItemStyle}>Content 2</div>
            </Grid>
            <Grid item xs={3}>
                {/* Content here */}
                <div style={gridItemStyle}>Content 3</div>
            </Grid>
            <Grid item xs={3}>
                {/* Content here */}
                <div style={gridItemStyle}>Content 4</div>
            </Grid>

            {/* Row 2 */}
            <Grid item xs={3}>
                {/* Content here */}
                <div style={gridItemStyle}>Content 5</div>
            </Grid>
            <Grid item xs={3}>
                {/* Content here */}
                <div style={gridItemStyle}>Content 6</div>
            </Grid>
            <Grid item xs={3}>
                {/* Content here */}
                <div style={gridItemStyle}>Content 7</div>
            </Grid>
            <Grid item xs={3}>
                {/* Content here */}
                <div style={gridItemStyle}>Content 8</div>
            </Grid>

            {/* Row 3 */}
            <Grid item xs={3}>
                {/* Content here */}
                <div style={gridItemStyle}>Content 9</div>
            </Grid>
            <Grid item xs={3}>
                {/* Content here */}
                <div style={gridItemStyle}>Content 10</div>
            </Grid>
            <Grid item xs={3}>
                {/* Content here */}
                <div style={gridItemStyle}>Content 11</div>
            </Grid>
            <Grid item xs={3}>
                {/* Content here */}
                <div style={gridItemStyle}>Content 12</div>
            </Grid>
        </Grid>
    );
}



