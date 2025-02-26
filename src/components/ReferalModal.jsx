import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import axios from "axios";
const ReferalModal = () => {
  // state for form data
  const [referraldata, setReferraldata] = useState({
    yourName: null,
    yourEmail: null,
    referredName: null,
    referredEmail: null,
    course: null,
    message: null,
    check: null,
  });

  // HANDLE SUBMIT HERE FOR SENDING REFERRAL

  const HandleSubmit = async (e) => {
    e.preventDefault();

    // DESTRUCTING THE MAIN DATA
    const {
      yourEmail,
      yourName,
      referredEmail,
      referredName,
      course,
      message,
      check,
    } = referraldata;

    // CHECKING THE CONDITION
    if (
      yourEmail ||
      yourName ||
      referredEmail ||
      referredEmail ||
      course ||
      check == true
    ) {
      // API CALLING
      const res = await axios.post(
        "https://accredian-backend-task-ruby.vercel.app/api/add/referral",
        referraldata
      );
      console.log(res.data);
      const { success, message } = res.data;

      if (success) {
        toast.success(message);
        setReferraldata({
          yourName: null,
          yourEmail: null,
          referredName: null,
          referredEmail: null,
          course: null,
          message: null,
          check: null,
        });
      } else {
        toast.error(message);
      }
    } else {
      console.log("please fill all the field");
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger className=" bg-[#1a73e9] w-[18vh] sm:w-1/4 lg:w-[20vh]  p-3 lg:p-2 rounded-sm px-2 text-white ">
          Refer Now{" "}
        </DialogTrigger>
        <DialogContent className=" p-0  ">
          <DialogHeader>
            <DialogTitle className="text-center  font-semibold py-4">
              Refer & Earn
            </DialogTitle>
          </DialogHeader>
          <div className=" w-full mx-auto bg-white px-6  py-1 max-h-[60vh] overflow-y-scroll rounded-2xl shadow-lg">
            <form onSubmit={HandleSubmit}>
              {/* Referrer Information */}
              <div className="mb-4 space-y-2">
                <label className="block text-sm font-medium">Your Name</label>
                <input
                  required
                  value={referraldata?.yourName || ""}
                  type="text"
                  className="w-full p-2 border-2  focus:border-2 focus:outline-none focus:border-gray-800 border-gray-500 rounded-lg placeholder:text-gray-600"
                  name="yourName"
                  onChange={(e) =>
                    setReferraldata({
                      ...referraldata,
                      yourName: e.target.value,
                    })
                  }
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4 space-y-2">
                <label className="block text-sm font-medium">Your Email</label>
                <input
                  required
                  type="email"
                  value={referraldata?.yourEmail || ""}
                  className="w-full p-2 border-2  focus:border-2 focus:outline-none focus:border-gray-800 border-gray-500 rounded-lg placeholder:text-gray-600"
                  placeholder="Enter your email"
                  name="yourEmail"
                  onChange={(e) =>
                    setReferraldata({
                      ...referraldata,
                      yourEmail: e.target.value,
                    })
                  }
                />
              </div>

              {/* Referred Person's Information */}
              <div className="mb-4 space-y-2">
                <label className="block text-sm font-medium">
                  Referred Person's Name
                </label>
                <input
                  required
                  value={referraldata?.referredName || ""}
                  type="text"
                  className="w-full p-2 border-2  focus:border-2 focus:outline-none focus:border-gray-800 border-gray-500 rounded-lg placeholder:text-gray-600"
                  placeholder="Enter their name"
                  name="referredName"
                  onChange={(e) =>
                    setReferraldata({
                      ...referraldata,
                      referredName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4 space-y-2">
                <label className="block text-sm font-medium">
                  Referred Person's Email
                </label>
                <input
                  required
                  type="email"
                  value={referraldata?.referredEmail || ""}
                  name="referredEmail"
                  onChange={(e) =>
                    setReferraldata({
                      ...referraldata,
                      referredEmail: e.target.value,
                    })
                  }
                  className="w-full p-2 border-2  focus:border-2 focus:outline-none focus:border-gray-800 border-gray-500 rounded-lg placeholder:text-gray-600"
                  placeholder="Enter their email"
                />
              </div>

              {/* Course Selection */}
              <div className="mb-4 space-y-2">
                <label className="block text-sm font-medium ">
                  Select Course
                </label>
                <select
                  required
                  value={referraldata?.course || ""}
                  name="course"
                  onChange={(e) =>
                    setReferraldata({ ...referraldata, course: e.target.value })
                  }
                  className="w-full p-2 border-2  focus:border-2 focus:outline-none focus:border-gray-800 border-gray-500 rounded-lg placeholder:text-gray-600 "
                >
                  <option>Select a course</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Business Management">
                    Business Management
                  </option>
                </select>
              </div>

              {/* Referral Message */}
              <div className="mb-4 space-y-2">
                <label className="block text-sm font-medium">
                  Referral Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={referraldata?.message || ""}
                  onChange={(e) =>
                    setReferraldata({
                      ...referraldata,
                      message: e.target.value,
                    })
                  }
                  className="w-full p-2 border-2  focus:border-2 focus:outline-none focus:border-gray-800 border-gray-500 rounded-lg placeholder:text-gray-600"
                  rows="3"
                  placeholder="Add a message..."
                ></textarea>
              </div>

              {/* Agreement */}
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  value={referraldata?.check || false}
                  required
                  onChange={(e) =>
                    setReferraldata({
                      ...referraldata,
                      check: e.target.checked,
                    })
                  }
                  className="mr-2"
                />
                <label className="text-sm">
                  I agree to the referral terms and conditions
                </label>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                Submit Referral
              </button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ReferalModal;
