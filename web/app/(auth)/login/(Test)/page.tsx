import React from 'react';

const LoginPage = () => {
    return (
        <form className={"flex flex-col gap-3 max-w-xl absolute left-1/2 -translate-x-1/2 mt-6 bg-slate-100"}>
            <label htmlFor="email">Email</label>
            <input name={"email"} type="email" placeholder="email" />
            <label htmlFor="password">Password</label>
            <input name={"password"} type="password" placeholder="password" />
            <button className={"bg-slate-500 w-fit"} type="submit">Login</button>
        </form>
    );
};

export default LoginPage;