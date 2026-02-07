import React, { useState } from "react";

const RegistrationForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [ageError, setAgeError] = useState('');

    const [success, setSuccess] = useState('false');

    const validateName = (name) => {
        if (!name.trim()) return 'Name is required';
        if (name.length < 2 ) return 'Name must be at least 2 characters long';
        return "";
    };

    const validateEmail = (email) => {
        if (!email.trim) return 'Email is required';

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return 'Invalid email format';
        return '';

    };

    const validateAge = (age) => {
        if (!age) return 'Age is required';
        const num = parseInt(age, 10);
        if (isNan(num) || num < 18) return 'Age must be a number and at least 18';
        return ''; 
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        setNameError(validateName(value));

    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailError(validateEmail(value));

    };

    const handleAgeChange = (e) => {
        const value = e.target.value;
        setAge(value);
        setAgeError(validateAge(value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const nameErr = validateName(name);
        const emailErr = validateEmail(email);
        const ageErr = validateAge(age);

        setNameError(nameErr);
        setEmailError(emailErr);
        setAgeError(ageErr);

        if (nameErr || emailErr || ageErr) {
            setSuccess(false);
            return;
        };

        setSuccess(true);

        setName('');
        setEmail('');
        setAge('');
    };

    return (
        <div style={{padding: '20px', maxWidth: '400px', margin: 'auto', }}>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit} noValidate>

                {/*Поле для имени */}
                <div style={{marginBottom: '15px'}}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type='text'
                        id='name'
                        placeholder='Enter your name'
                        value={name}
                        onChange={handleNameChange}
                    />
                    {nameError && <p style={{color: 'red', fontSize: '14px', margin: '4px 0' }}>{nameError}</p>}

                </div>

                {/*Поле для email */}
                <div style={{marginBottom: '15px'}}>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        placeholder='Enter your email'
                        value={email}
                        onChange = {handleEmailChange}

                    />

                    {emailError && <p style={{color: 'red', fontSize: '14px', margin: '4px 0'}}>{emailError}</p>}

                </div> 

                {/*Поле для возраста */}
                <div style={{marginBottom: '15px'}}>
                    <label htmlFor='age'>Age:</label>
                    <input
                        type='number'
                        id='age'
                        placeholder="18"
                        value={age}
                        onChange={handleAgeChange}
                    />

                    {ageError && <p style={{color: 'red', fontSize: '14px', margin: '4px 0'}}>{ageError}</p>}

                </div>


                {/*Кнопка для отправки формы */}
                <button type='submit'>Register</button>

            </form>

            {/*Success message */}
            {success && <p style={{color: 'green', marginTop: '15px'}}>Registration successful!</p>}

        </div>    
    );
};



export default RegistrationForm;
