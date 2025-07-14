import React, { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validaciones
        if (!email || !password) {
            setMessage('All fields are required.');
            return;
        }
        if (password.length < 6) {
            setMessage('Password must be at least 6 characters.');
            return;
        }

        alert('Authentication successful!');
        // Aquí podrías simular la autenticación o limpiar el form.
    };

    return (
        <div
            className="d-flex justify-content-center align-items-start"
            style={{
                minHeight: "calc(100vh - 140px)",
                marginTop: "0"
            }}
        >
            <div className="w-100" style={{ maxWidth: "500px" }}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </form>
                {message && (
                    <div className="alert mt-3" style={{ color: alert.includes('success') ? 'green' : 'red' }}>
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginPage;