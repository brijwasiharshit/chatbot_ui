import React, { useState, useEffect } from "react";
import { auth, db } from "../assets/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import OrganizationSetupForm from "./OrganizationSetupForm";



const SetupOrganization = () => {
  const navigate = useNavigate();
  const [UserDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [company, setCompany] = useState({ name: "", website: "", description: "" });
  const [scrapingProgress, setScrapingProgress] = useState(50);
  const [selectedPage, setSelectedPage] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          setUserDetails({ name: user.displayName || "Google User", email: user.email, uid: user.uid });
        }
      } else {
        navigate("/");
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [navigate]);


  const fetchMetaDescription = async () => {
    setCompany(prev => ({ ...prev, description: "Automatically fetched meta-description for the website." }));
  };

  return (
    <div className="py-24 px-8 md:px-0 space-y-6 my-auto bg-gradient-to-br from-blue-400 to-purple-500 mx-auto ">
      {loading ? (
        <h1>Loading...</h1>
      ) : UserDetails ? (
        <>
        <OrganizationSetupForm name = {UserDetails.name}/>
       
        </>
      ) : (
        <h1>User data not found!</h1>
      )}
    </div>
  );
};

export default SetupOrganization;
