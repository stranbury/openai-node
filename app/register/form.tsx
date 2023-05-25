"use client";

import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";

export const RegisterForm = () => {
  let [loading, setLoading] = useState(false);
  let [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);
      if (!res.ok) {
        alert((await res.json()).message);
        return;
      }

      signIn(undefined, { callbackUrl: "/setting" });
    } catch (error: any) {
      setLoading(false);
      console.error(error);
      alert(error.message);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: 500,
        rowGap: 10,
      }}
    >
      
      <label className="label" htmlFor="name">
        <span className="label-text">What is your name?</span>
      </label>
      <input
        required
        type="text"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        className="input input-bordered input-secondary w-full "
      />
      <label className="label" htmlFor="email">
        <span className="label-text">What is your email?</span>
        </label>
      <input
        required
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        className="input input-bordered input-secondary w-full "
      />
      <label htmlFor="password">Password</label>
      <input
        required
        type="password"
        name="password"
        value={formValues.password}
        onChange={handleChange}
        pattern="^[A-Za-z0-9._%+-]+@pantha\.fr$"
        style={{ padding: "1rem" }}
      />
      <button
        className="btn btn-primary"
        disabled={loading}
      >
        {loading ? "loading..." : "Register"}
      </button>
    </form>
  );
};
