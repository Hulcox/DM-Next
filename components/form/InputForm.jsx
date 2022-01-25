import { InputLabel, OutlinedInput, InputAdornment } from "@mui/material"
const InputFormNumber = (props) => {
  return (
    <>
      <InputLabel>Amount</InputLabel>
      <OutlinedInput
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        type="number"
        {...props}
        fullWidth
        sx={{ mb: 2 }}
        error={props.borderError}
      />
    </>
  )
}
export default InputFormNumber
