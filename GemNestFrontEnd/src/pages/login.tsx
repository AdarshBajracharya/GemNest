import React, { useState } from 'react';
import './login.css'

const LoginForm: React.FC = () => {
    const [signIn, setSignIn] = useState<boolean>(true);

    const handleTabChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSignIn(event.target.id === 'tab-1');
    };

    return (
        <div className="login-wrap">
            <div className="login-html">
                <input
                    id="tab-1"
                    type="radio"
                    name="tab"
                    className="sign-in"
                    checked={signIn}
                    onChange={handleTabChange}
                />
                <label htmlFor="tab-1" className="tab">
                    Sign In
                </label>
                <input
                    id="tab-2"
                    type="radio"
                    name="tab"
                    className="sign-up"
                    checked={!signIn}
                    onChange={handleTabChange}
                />
                <label htmlFor="tab-2" className="tab">
                    Sign Up
                </label>
                <div className="login-form">
                    <div className={signIn ? 'sign-in-htm' : 'sign-up-htm'}>
                        <div className="group">
                            <label htmlFor="user" className="label">
                                Username
                            </label>
                            <input id="user" type="text" className="input" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">
                                Password
                            </label>
                            <input id="pass" type="password" className="input" data-type="password" />
                        </div>
                        {!signIn && (
                            <div className="group">
                                <label htmlFor="pass" className="label">
                                    Repeat Password
                                </label>
                                <input id="pass" type="password" className="input" data-type="password" />
                            </div>
                        )}
                        {!signIn && (
                            <div className="group">
                                <label htmlFor="pass" className="label">
                                    Email Address
                                </label>
                                <input id="pass" type="text" className="input" />
                            </div>
                        )}
                        <div className="group">
                            <input type="submit" className="button" value={signIn ? 'Sign In' : 'Sign Up'} />
                        </div>
                        <div className="hr"></div>
                        <div className="foot-lnk">
                            {signIn ? (
                                <a href="/forgot">Forgot Password?</a>
                            ) : (
                                <label htmlFor="tab-1">Already Member?</label>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
