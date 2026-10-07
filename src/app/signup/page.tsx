"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React from "react";

const SignUpPage = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };

    const { data, error } = await authClient.signUp.email({
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
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10">
      <form onSubmit={onSubmit}>
        <div className="w-full bg-base-100 border border-base-300 rounded-3xl shadow-2xl p-8 sm:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-700 text-2xl text-white">
              ✦
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold">সাইন আপ করুন</h2>

            <p className="mt-2 text-base text-base-content/60">
              আপনার অ্যাকাউন্ট তৈরি করতে তথ্যগুলো পূরণ করুন
            </p>
          </div>

          {/* Name */}
          <div className="w-full mb-5">
            <label className="block mb-2 font-semibold">নাম</label>

            <input
              name="name"
              type="text"
              placeholder="আপনার নাম লিখুন"
              className="block w-full !max-w-none h-14 rounded-xl border border-base-300 bg-base-100 px-5 text-base outline-none focus:border-red-600"
            />
          </div>

          {/* Image URL */}
          <div className="w-full mb-5">
            <label className="block mb-2 font-semibold">
              প্রোফাইল Image URL
            </label>

            <input
              name="image"
              type="url"
              placeholder="https://example.com/image.jpg"
              className="block w-full !max-w-none h-14 rounded-xl border border-base-300 bg-base-100 px-5 text-base outline-none focus:border-red-600"
            />
          </div>

          {/* Email */}
          <div className="w-full mb-5">
            <label className="block mb-2 font-semibold">ইমেইল</label>

            <input
              name="email"
              type="email"
              placeholder="আপনার ইমেইল লিখুন"
              className="block w-full !max-w-none h-14 rounded-xl border border-base-300 bg-base-100 px-5 text-base outline-none focus:border-red-600"
            />
          </div>

          {/* Password */}
          <div className="w-full mb-2">
            <label className="block mb-2 font-semibold">পাসওয়ার্ড</label>

            <input
              name="password"
              type="password"
              placeholder="••••••••"
              className="block w-full !max-w-none h-14 rounded-xl border border-base-300 bg-base-100 px-5 text-base outline-none focus:border-red-600"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-14 mt-7 rounded-xl bg-red-700 text-white text-lg font-semibold hover:bg-red-800 transition duration-300"
          >
            সাইন আপ করুন
          </button>

          {/* Login */}
          <p className="text-center text-base text-base-content/60 mt-6">
            ইতিমধ্যে অ্যাকাউন্ট আছে?
            <Link href="/signin" className="ml-1 font-semibold text-red-700 hover:underline">
              লগইন করুন
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
