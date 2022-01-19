import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
const InputFormNumber = (props) => {
  return (
    <FormControl fullWidth sx={{ mb: 2 }}>
      <InputLabel>Amount</InputLabel>
      <OutlinedInput
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        label="Amount"
        type="number"
        value={props.value}
        onChange={props.onChange}
      />
    </FormControl>
  );
};
export default InputFormNumber;
