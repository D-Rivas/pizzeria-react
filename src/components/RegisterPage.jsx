import React, { useState } from 'react';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validaciones
        if (!email || !password || !confirm) {
            setMessage('All fields are required.');
            return;
        }
        if (password.length < 6) {
            alert('Password must be at least 6 characters.');
            return;
        }
        if (password !== confirm) {
            alert('Passwords do not match.');
            return;
        }

        alert('Registration successful!');
    };

    return (
        <div className="d-flex flex-column align-items-center" style={{ minHeight: '80vh' }}>
            <div className="w-100" style={{ maxWidth: '500px', marginTop: '40px' }}></div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="col-md-6 mx-auto">
                <div className="mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        minLength={6}
                    />
                </div>
                <div className="mb-3">
                    <label>Confirm password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={confirm}
                        onChange={e => setConfirm(e.target.value)}
                        required
                        minLength={6}
                    />
                </div>
                <button className="btn btn-primary" type="submit">Register</button>
            </form>
            {message && (
                <div className="alert mt-3" style={{ color: message.includes('success') ? 'green' : 'red' }}>
                    {message}
                </div>
            )}
        </div>
    );
};

export default RegisterPage;