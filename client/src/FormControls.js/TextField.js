import { TextField } from '@material-ui/core'

function TextField({ name, label, placeholder, type, value, onChange }) {
  return (
    <div>
        <TextField
            name={name}
            label={label}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
        />
    </div>
  )
}

export default TextField;