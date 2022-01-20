import { TextareaAutosize } from "@mui/material";

const InputArea = (props) => {
  return (
    <TextareaAutosize
      {...props}
      style={{ width: "100%", padding: 1 }}
      minRows={5}
    />
  );
};

export default InputArea;
