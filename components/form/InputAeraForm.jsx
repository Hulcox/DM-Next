import { TextareaAutosize } from "@mui/material"

const InputArea = (props) => {
  return (
    <TextareaAutosize
      {...props}
      style={{
        width: "98%",
        padding: "1%",
        fontSize: "15px",
        borderColor: props.bordererror ? "#f44336" : null,
        borderRadius: "5px",
      }}
      minRows={5}
    />
  )
}

export default InputArea
