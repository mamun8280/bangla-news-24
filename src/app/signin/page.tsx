"use client";
import React from 'react';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';

const SignInPage = () => {
   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const user = Object.fromEntries(formData.entries()) as {
        name: string;
        email: string;
        image: string;
        password: string;
      };
  
      const { data, error } = await authClient.signIn.email({
        ...user,
        callbackURL: "/",
      });
  
      if (data) {
        console.log(data);
        redirect("/");
      }
  
      if (error) {
        console.log(error);
      }
    };
    return (
       

<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 via-base-100 to-base-300 px-4 py-10">
  <form onSubmit={onSubmit} className="w-full max-w-2xl">
    <fieldset className="fieldset bg-base-100 border border-base-300 rounded-3xl shadow-2xl p-7 sm:p-10">

      {/* Header */}
      <div className="text-center mb-7">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-700 text-2xl text-white shadow-lg">
          🔐
        </div>

        <h2 className="text-3xl font-bold text-base-content">
          সাইন ইন করুন
        </h2>

        <p className="mt-2 text-sm text-base-content/60">
          আপনার অ্যাকাউন্টে প্রবেশ করতে লগইন করুন
        </p>
      </div>

      {/* Email */}
      <label className="label font-medium">ইমেইল</label>
      <input
        name="email"
        type="email"
        className="input input-bordered w-full rounded-xl focus:outline-none focus:border-red-600"
        placeholder="আপনার ইমেইল লিখুন"
      />

      {/* Password */}
      <label className="label font-medium mt-4">পাসওয়ার্ড</label>
      <input
        name="password"
        type="password"
        className="input input-bordered w-full rounded-xl focus:outline-none focus:border-red-600"
        placeholder="••••••••"
      />

      {/* Forgot Password */}
      <div className="text-right mt-2">
        <a
          href="/forgot-password"
          className="text-sm text-red-700 hover:underline"
        >
          পাসওয়ার্ড ভুলে গেছেন?
        </a>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="btn w-full mt-6 rounded-xl border-0 bg-red-700 text-white text-base font-semibold hover:bg-red-800 hover:shadow-lg transition-all duration-300"
      >
        সাইন ইন করুন
      </button>

      {/* Register */}
      <p className="text-center text-sm text-base-content/60 mt-5">
        নতুন ব্যবহারকারী?
        <Link  href="/signup"
          className="ml-1 font-semibold text-red-700 hover:underline"
        >
          অ্যাকাউন্ট তৈরি করুন
        </Link>
      </p>

    </fieldset>
  </form>
</div>




    );
};

export default SignInPage;