import React, { useState, useEffect } from "react";
import { auth, db } from "../assets/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import OrganizationSetupForm from "./OrganizationSetupForm";
import LoadingSpinner from "../components/LoadingSpinner";
import { motion } from "framer-motion";

const SetupOrganization = () => {
  const navigate = useNavigate();
  const [UserDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This returns an event listener to stop the auth change listener
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          setUserDetails({
            name: user.displayName || "Google User",
            email: user.email,
            uid: user.uid,
          });
        }
      } else {
        navigate("/");
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [navigate]);

  return (
    <motion.div
      className="py-12 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-24 space-y-6 bg-gradient-to-br from-blue-400 to-purple-500 min-h-screen flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {loading ? (
        <LoadingSpinner />
      ) : UserDetails ? (
        <>
          <OrganizationSetupForm name={UserDetails.name} />
        </>
      ) : (
        <h1 className="text-white text-xl sm:text-2xl font-bold text-center">
          User data not found!
        </h1>
      )}
    </motion.div>
  );
};

export default SetupOrganization;