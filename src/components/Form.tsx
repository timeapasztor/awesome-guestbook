import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import PersonIcon from "@mui/icons-material/Person";
import { DEPARTMENTS } from "../mock/department";
import { DepartmentType, SetState, Visitor, Visitors } from "../types/visitor";

type FormType = {
  visitors: Visitors;
  setVisitors: SetState<Visitors>;
};

const Form: React.FC<FormType> = ({ visitors, setVisitors }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const item: Visitor = {
      id: visitors.length,
      fullName: data.get("full-name") as string,
      email: data.get("email") as string,
      department: data.get("department") as DepartmentType,
    };

    setVisitors((prevState) => [...prevState, item]);
  };

  return (
    <Box
      sx={{
        marginTop: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Typography component="h2" variant="h6">
        Add new visitor
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          fullWidth
          id="full-name"
          label="Full name"
          name="full-name"
          autoComplete="full-name"
        />

        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          type={"email"}
        />

        <FormControl fullWidth margin={"normal"}>
          <InputLabel id={"department-label"}>Department</InputLabel>
          <Select
            id="department"
            name="department"
            label={"Department"}
            labelId="department-label"
            defaultValue={DEPARTMENTS[0]}
          >
            {DEPARTMENTS.map((key) => (
              <MenuItem key={key} value={key}>
                {key}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin={"normal"}>
          <FormControlLabel
            control={<Checkbox name={"agree"} color="primary" required />}
            label="I agree to be added to the table"
          />
        </FormControl>

        <FormControl fullWidth margin={"normal"}>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              sx={{ minWidth: 80, borderRadius: 8 }}
              type="reset"
              fullWidth
              variant="outlined"
              startIcon={<RotateLeftIcon />}
            >
              Reset form
            </Button>

            <Button
              sx={{ minWidth: 80, borderRadius: 8 }}
              type="submit"
              fullWidth
              variant="contained"
              startIcon={<PersonIcon />}
            >
              Add new visitor
            </Button>
          </Stack>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Form;
