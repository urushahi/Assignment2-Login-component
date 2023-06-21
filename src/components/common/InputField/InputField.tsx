import React from 'react'
interface iInputProps {
    label: string;
    type: string;
    value?: string;
    name?: string
}
const InputField = (props: iInputProps) => {
    const { label, type, value, name } = props;

    return (
        <div className="form-group">
            <label htmlFor="" className='form-control-label'>{label}</label>
            <input type={type} value={value} name={name} className='form-control-input' />
        </div>
    )
}

export default InputField