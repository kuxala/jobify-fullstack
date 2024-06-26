import React from "react";
import { useNavigation } from "react-router-dom";

export default function SubmitBtn({ formBtn }: any) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <>
      <button
        type="submit"
        className={`btn btn-block ${formBtn && `form-btn`}`}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </>
  );
}
