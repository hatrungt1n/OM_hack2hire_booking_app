import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const SearchEvent = ({ showData }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-5xl font-semibold mb-10">Find the tour you want</h1>
      <Autocomplete
        id="event"
        freeSolo
        options={showData}
        getOptionLabel={(option) => option.name || ""}
        variant="outlined"
        sx={{ width: "90%", maxWidth: 600 }}
        style={{
          borderColor: "white",
          borderRadius: "15px",
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="dsahah"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderRadius: "15px",
                },
              },
            }}
          />
        )}
      />
    </div>
  );
};

export default SearchEvent;
