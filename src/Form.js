import { useState } from "react";

function Form() {

    const [form, setForm] = useState({
        first_value: "",
        second_value: "",
        third_value: "",
        fourth_value: "",
        fiveth_value: "",
        sixth_value: "",
        seventh_value: "",
        eighth_value: ""
    });


    const [result, setResult] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const form_data = new FormData();

        form_data.append("1", form.first_value);
        form_data.append("2", form.second_value);
        form_data.append("3", form.third_value);
        form_data.append("4", form.fourth_value);
        form_data.append("5", form.fiveth_value);
        form_data.append("6", form.sixth_value);
        form_data.append("7", form.seventh_value);
        form_data.append("8", form.eighth_value);

        fetch('https://gobonum-api1.herokuapp.com/predict', {
            method: 'POST',
            body: form_data
        })
        .then(response => response.text())
        .then(html => setResult(html))
    };

    const onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setForm({ ...form, [name]: value});
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h4>Prediction model</h4>
            <p>Credit Risk</p>

            <input type="number" name="first_value" onChange={onChange} placeholder="Age"/>
            <input type="number" name="second_value" onChange={onChange} placeholder="Years with current employer"/>
            <input type="number" name="third_value" onChange={onChange} placeholder="Years at current address"/>
            <input type="number" name="fourth_value" onChange={onChange} placeholder="Household income (k)"/>
            <input type="number" name="fiveth_value" onChange={onChange} placeholder="Debt to income ratio" step="0.01"/>
            <input type="number" name="sixth_value" onChange={onChange} placeholder="Credit card debt" step="0.01"/>
            <input type="number" name="seventh_value" onChange={onChange} placeholder="Other debt" step="0.01"/>
            <input type = 'text' name="eighth_value" list="education"/>
                <datalist id="education">
                    <option value="education_basic"></option>
                    <option value="education_high.school"></option>
                    <option value="education_illiterate"></option>
                    <option value="education_professional.course"></option>
                    <option value="education_university.degree"></option>
                </datalist>

            <button type="Submit">Submit Form</button>

            {result && <div dangerouslySetInnerHTML={{ __html: result}}/>}

            
        </form>
        <br></br>
        <form action="http://127.0.0.1:5000/predict_form">
                <input type="submit" value="File Upload" />
            
        </form>
        </>

    );
}

export default Form;