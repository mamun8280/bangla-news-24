"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };

    if (!user.name || !user.email || !user.password) {
      toast.error("সব প্রয়োজনীয় তথ্য পূরণ করুন");
      return;
    }

    if (user.password.length < 6) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে");
      return;
    }

    setLoading(true);

    const loadingToast = toast.loading("অ্যাকাউন্ট তৈরি করা হচ্ছে...");

    try {
      const { data, error } = await authClient.signUp.email({
        name: user.name,
        email: user.email,
        password: user.password,
        image: user.image || undefined,
        callbackURL: "/",
      });

      if (error) {
        toast.update(loadingToast, {
          render: error.message || "অ্যাকাউন্ট তৈরি করা যায়নি",
          type: "error",
          isLoading: false,
          autoClose: 3500,
        });

        return;
      }

      if (data) {
        toast.update(loadingToast, {
          render: "🎉 অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!",
          type: "success",
          isLoading: false,
          autoClose: 1800,
        });

        form.reset();

        setTimeout(() => {
          router.push("/");
        }, 1200);
      }
    } catch (error) {
      console.error(error);

      toast.update(loadingToast, {
        render: "কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।",
        type: "error",
        isLoading: false,
        autoClose: 3500,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 via-base-100 to-base-300 px-4 py-10">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-2xl"
      >
        <div className="w-full bg-base-100 border border-base-300 rounded-3xl shadow-2xl p-8 sm:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-700 text-2xl text-white shadow-lg">
              ✦
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold">
              সাইন আপ করুন
            </h2>

            <p className="mt-2 text-base text-base-content/60">
              আপনার অ্যাকাউন্ট তৈরি করতে তথ্যগুলো পূরণ করুন
            </p>
          </div>

          {/* Name */}
          <div className="w-full mb-5">
            <label className="block mb-2 font-semibold">
              নাম
            </label>

            <input
              name="name"
              type="text"
              placeholder="আপনার নাম লিখুন"
              className="block w-full !max-w-none h-14 rounded-xl border border-base-300 bg-base-100 px-5 text-base outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
            />
          </div>

          {/* Image */}
          <div className="w-full mb-5">
            <label className="block mb-2 font-semibold">
              প্রোফাইল Image URL
            </label>

            <input
              name="image"
              type="url"
              placeholder="https://example.com/image.jpg"
              className="block w-full !max-w-none h-14 rounded-xl border border-base-300 bg-base-100 px-5 text-base outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
            />
          </div>

          {/* Email */}
          <div className="w-full mb-5">
            <label className="block mb-2 font-semibold">
              ইমেইল
            </label>

            <input
              name="email"
              type="email"
              placeholder="আপনার ইমেইল লিখুন"
              className="block w-full !max-w-none h-14 rounded-xl border border-base-300 bg-base-100 px-5 text-base outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
            />
          </div>

          {/* Password */}
          <div className="w-full mb-2">
            <label className="block mb-2 font-semibold">
              পাসওয়ার্ড
            </label>

            <input
              name="password"
              type="password"
              placeholder="••••••••"
              className="block w-full !max-w-none h-14 rounded-xl border border-base-300 bg-base-100 px-5 text-base outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-14 mt-7 rounded-xl bg-red-700 text-white text-lg font-semibold hover:bg-red-800 transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "অ্যাকাউন্ট তৈরি হচ্ছে..." : "সাইন আপ করুন"}
          </button>

          {/* Login */}
          <p className="text-center text-base text-base-content/60 mt-6">
            ইতিমধ্যে অ্যাকাউন্ট আছে?
            <Link
              href="/signin"
              className="ml-1 font-semibold text-red-700 hover:underline"
            >
              লগইন করুন
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;