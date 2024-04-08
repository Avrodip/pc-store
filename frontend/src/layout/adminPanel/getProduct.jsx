import { Grid } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

const style={
    grid: {
        minHeight: "300px",
        backgroundColor: "red",
        overflow: "hidden"
    }
}
const GetProduct=()=>{
    const [dogFact, setDogFact] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5050/api/admin/getKrakenList")
      .then(response => {
        console.log("the number:",response.data.cpu_name)
        //setDogFact(response.data[0]); // Assuming the response contains an array of facts, selecting the first one
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);
    return (
        <Grid container>
            <Grid item xs={12} md={6} sx={style.grid}>
            {<p style={{color: 'white'}}>{dogFact}</p>}
            </Grid>
        </Grid>
    );
}
export default GetProduct;