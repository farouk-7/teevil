import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import PropTypes from "prop-types";

function FormInput({
  label,
  name,
  handleChange,
  value,
  type,
  mt,
  mb,
  color,
  key,
  focusBorderColor,
  lines,
  labelColor,
  ...props
}) {
  return (
    <FormControl mt={mt} mb={mb}>
      <FormLabel fontSize={"1em"} color={labelColor}>
        {label}
      </FormLabel>
      {!lines ? (
        <Input
          type={type}
          w={"full"}
          key={key}
          name={name}
          value={value}
          focusBorderColor={focusBorderColor}
          onChange={handleChange}
          color={color || "white"}
          {...props}
        />
      ) : (
        <Textarea
          color={color || "white"}
          type={type}
          focusBorderColor={focusBorderColor}
          name={name}
          value={value}
          rows={lines}
          onChange={handleChange}
          {...props}
        />
      )}
    </FormControl>
  );
}

export default FormInput;

FormInput.propTypes = {
  mt: PropTypes.string,
  mb: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  labelColor: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};
