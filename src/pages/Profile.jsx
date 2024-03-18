import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router";

function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;
  async function onLogout() {
    auth.signOut();
    navigate("/");
  }
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-center mt-6 text-xl font-bold">Profile</h1>

        <div className="w-full md:w-[50%] mt-6 px-3 border-red-100">
          <form>
            {/* input tag */}
            <input
              type="text"
              id="name"
              value={name}
              disabled
              className="w-full rounded text-xl bg-white
          px-4 py-3
          text-gray-600
          border-gray-300
          transition ease-in-out
          mb-6
          "
            />
            {/* email tag */}
            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="w-full rounded text-xl bg-white
          px-4 py-3
          text-gray-600
          border-gray-300
          transition ease-in-out
          mb-6
          "
            />
            <div class="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p>
                Do you want to change your name?
                <span class="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer">
                  Edit
                </span>
              </p>
              <p
                onClick={onLogout}
                class="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer"
              >
                Sign out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
